import { Injectable } from '@angular/core';

import { BankHttpClient} from '../utils/http';
import { BankAppConfig } from '../configs/bank-app.config';

@Injectable()
export class ClientsService {
  constructor(private http: BankHttpClient) {}

  fetchAll() {
    return this.http.get(`${BankAppConfig.API}/clients`);
  }

  fetchById(id: number) {
    return this.http.get(`${BankAppConfig.API}/clients/${id}`);
  }

  removeClient(id: number) {
    return this.http.delete(`${BankAppConfig.API}/clients/${id}`);
  }

  addClient(data) {
    return this.http.post(`${BankAppConfig.API}/clients`, data);
  }

  updateClient(id, data) {
    return this.http.post(`${BankAppConfig.API}/clients/${id}`, data);
  }
}
