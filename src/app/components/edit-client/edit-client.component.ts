import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {ClientsService} from '../../services/client.service';
import {FormValidationRegexp} from '../../constants/form-validation-regexp';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  NAME_REG_EXP;
  PASSPORT_SERIES_REG_EXP;
  PASSPORT_NUMBER_REG_EXP;
  PASSPORT_IDENTIFICATION_NUMBER_REG_EXP;
  ADDRESS_REG_EXP;
  DATE_REG_EXP;
  PHONE_NUMBER_REG_EXP;
  EMAIL_REG_EXP;
  FLOAT_NUMBER_REG_EXP;

  genders: any = [
    {name: 'женский'},
    {name: 'мужской'}
  ];
  cities: any = [
    {id: 0, name: 'Минск'},
    {id: 1, name: 'Вильнюс'},
    {id: 2, name: 'Минск'},
    {id: 3, name: 'Москва'},
    {id: 4, name: 'Рига'}
  ];
  maritalStatuses: any = [
    {id: 0, name: 'замужем'},
    {id: 1, name: 'не замужем'},
    {id: 2, name: 'разведена'},
    {id: 3, name: 'женат'},
    {id: 4, name: 'не женат'},
    {id: 5, name: 'разведен'}
  ];
  citizenships: any = [
    {id: 1, name: 'Беларусь'},
    {id: 2, name: 'Латвия'},
    {id: 3, name: 'Литва'},
    {id: 4, name: 'Польша'},
    {id: 5, name: 'Россия'}
  ];
  disabilityGroups: any = [
    {id: 0, name: '1'},
    {id: 1, name: '2'},
    {id: 2, name: '3'},
    {id: 3, name: '0'}
  ];

  client: any = null;
  isLoaded: Boolean = false;
  error: String;

  constructor(private clientsService: ClientsService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.initRegexp();
    this.getClient()
    .then(() => this.isLoaded = true);
  }

  initRegexp() {
    this.NAME_REG_EXP = FormValidationRegexp.NAME_REG_EXP;
    this.PASSPORT_SERIES_REG_EXP = FormValidationRegexp.PASSPORT_SERIES_REG_EXP;
    this.PASSPORT_NUMBER_REG_EXP = FormValidationRegexp.PASSPORT_NUMBER_REG_EXP;
    this.PASSPORT_IDENTIFICATION_NUMBER_REG_EXP = FormValidationRegexp.PASSPORT_IDENTIFICATION_NUMBER_REG_EXP;
    this.ADDRESS_REG_EXP = FormValidationRegexp.ADDRESS_REG_EXP;
    this.DATE_REG_EXP = FormValidationRegexp.DATE_REG_EXP;
    this.PHONE_NUMBER_REG_EXP = FormValidationRegexp.PHONE_NUMBER_REG_EXP;
    this.EMAIL_REG_EXP = FormValidationRegexp.EMAIL_REG_EXP;
    this.FLOAT_NUMBER_REG_EXP = FormValidationRegexp.FLOAT_NUMBER_REG_EXP;
  }

  getClient() {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.clientsService.fetchById(id)
    .then((client: any) => {
      this.client = client.data;
      this.client.maritalStatusId = this.client.maritalStatus;
      delete this.client.maritalStatus;
      console.log(this.client);
      return Promise.resolve();
    });
  }

  updateClient() {
    this.isLoaded = false;
    return this.clientsService.updateClient(this.client.id, this.client)
    .then(() => this.getClient()
    .then(() => this.isLoaded = true))
    .catch((err: any) => {
      this.error = err.error.data.message + "\n, invalid fields:\n" + JSON.stringify(Object.keys(err.error.data.invalidFields).filter(i => err.error.data.invalidFields[i]).join(', '));
      console.log(this.error);
      console.log(err);
      this.isLoaded = true;
    });
  }
}
