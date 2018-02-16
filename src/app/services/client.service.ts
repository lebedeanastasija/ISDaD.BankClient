import { Injectable } from '@angular/core';

import { BankHttpClient} from '../utils/http';
import { BankAppConfig } from '../configs/bank-app.config';

@Injectable()
export class ClientsService {
  constructor(private http: BankHttpClient) {}

  fetchClients() {
    return this.http.get(`${BankAppConfig.API}/clients`);
  }

  removeClient(id: number) {
    return this.http.delete(`${BankAppConfig.API}/clients/${id}`);
  }

  addClient(data) {
  }
}
