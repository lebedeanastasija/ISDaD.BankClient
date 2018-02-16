import {Component, OnInit} from '@angular/core';
import {ClientsService} from '../../services/client.service';

@Component({
  selector: 'app-add-client-component',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  NAME_REG_EXP = /^[А-Я][а-я]*(-[А-Я]+[а-я]+)*$/;
  PASSPORT_SERIES_REG_EXP = /^[A-Z]{2}$/g;
  PASSPORT_NUMBER_REG_EXP = /^[0-9]{7}$/g;
  PASSPORT_IDENTIFICATION_NUMBER_REG_EXP = /([0-9]|[A-Z]){14}/g;
  ADDRESS_REG_EXP = /([0-9]|[А-Я]|[а-я]|[,.]|-){1,255}/g;
  DATE_REG_EXP = /[0-9]{4,6}-[0-1][0-9]-[0-3][0-9]{10,12}/g;
  PHONE_NUMBER_REG_EXP = /\+\d{3,15}/g;
  EMAIL_REG_EXP = /[0-9a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/g;
  FLOAT_NUMBER_REG_EXP = /[0-9]*\.?[0-9]*/g;

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
    {id: 0, name: 'Беларусь'},
    {id: 1, name: 'Латвия'},
    {id: 2, name: 'Литва'},
    {id: 3, name: 'Польша'},
    {id: 4, name: 'Россия'}
  ];
  disabilityGroups: any = [
    {id: 0, name: '1'},
    {id: 1, name: '2'},
    {id: 2, name: '3'},
    {id: 3, name: '0'}
  ];

  client: any = null;

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.initClient();
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
      citizenship:          0,
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
    console.log('test');
    this.clientsService.fetchClients()
      .then(data => console.log('clients: ', data));
  }
}
