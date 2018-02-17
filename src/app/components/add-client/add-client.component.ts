import {Component, OnInit} from '@angular/core';
import {ClientsService} from '../../services/client.service';
import {FormValidationRegexp} from '../../constants/form-validation-regexp';

@Component({
  selector: 'app-add-client-component',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
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
  error: String;

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.initRegexp();
    this.initClient();
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

  initClient() {
    this.client = {
      surname:              null,
      name:                 null,
      patronymic:           null,
      birthDate:            null,
      gender:               null,
      passportSeries:       null,
      passportNumber:       null,
      issuingAuthority:     null,
      issueDate:            null,
      identificationNumber: null,
      birthPlace:           null,
      residenceCity:        null,
      residenceAddress:     null,
      maritalStatusId:      null,
      citizenship:          null,
      disability:           null,
      isReservist:          false,
      isRetired:            false,
      // can be null:
      homePhoneNumber:      null,
      mobilePhoneNumber:    null,
      email:                null,
      monthlyIncome:        null
    };
  }

  logClientData() {
    /*console.log(`
      surname:              ${this.surname}
      name:                 ${this.name}
      patronymic:           ${this.patronymic}
      birthDate:            ${this.birthDate}
      gender:               ${this.gender}
      passportSeries:       ${this.passportSeries}
      passportNumber:       ${this.passportNumber}
      issuingAuthority:     ${this.issuingAuthority}
      issueDate:            ${this.issueDate}
      identificationNumber: ${this.identificationNumber}
      birthPlace:           ${this.birthPlace}
      residenceCity:        ${this.residenceCity}
      residenceAddress:     ${this.residenceAddress}
      maritalStatusId:      ${this.maritalStatusId}
      citizenship:          ${this.citizenship}
      disability:           ${this.disability}
      isReservist:          ${this.isReservist}
      isRetired:            ${this.isRetired}
      homePhoneNumber:      ${this.homePhoneNumber}
      mobilePhoneNumber:    ${this.mobilePhoneNumber}
      email:                ${this.email}
      monthlyIncome:        ${this.monthlyIncome}
    `);*/
    console.log(this.client);
  }

  prefillClient() {
    this.client = {
      surname:              'Лебедева',
      name:                 'Анастасия',
      patronymic:           'Олеговна',
      birthDate:            '1996-10-24',
      gender:               'женский',
      passportSeries:       'MK',
      passportNumber:       '7092315',
      issuingAuthority:     'Красновский РОВД Витебской области',
      issueDate:            '2013-05-03',
      identificationNumber: '7130893H027BP3',
      birthPlace:           'РБ, Витебская обл., г. Прилукск',
      residenceCity:        2,
      residenceAddress:     'пр.Экономики, д.147, кв.49',
      maritalStatusId:      1,
      citizenship:          1,
      disability:           3,
      isReservist:          false,
      isRetired:            false,
      homePhoneNumber:      '+375179056742',
      mobilePhoneNumber:    '+375446785432',
      email:                'lebedeva.anastasiya96@gmail.com',
      monthlyIncome:        400
    };
  }

  handleSubmit() {
    this.error = null;
    console.log('test');
    this.clientsService.addClient(this.client)
    .then(data => console.log('client: ', data))
      .catch((err: any) => {
        this.error = err.error.data.message + "\n, invalid fields:\n" + JSON.stringify(Object.keys(err.error.data.invalidFields).filter(i => err.error.data.invalidFields[i]).join(', '));
      });
  }
}
