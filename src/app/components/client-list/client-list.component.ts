import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any;
  isLoaded: Boolean = false;

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.getClients()
    .then(() => this.isLoaded = true);
  }

  getClients() {
    return this.clientsService.fetchAll()
    .then((clients: any) => {
      this.clients = clients.data;
      console.log(clients);
      return Promise.resolve();
    });
  }

  removeClient(id) {
    this.isLoaded = false;
    return this.clientsService.removeClient(id)
    .then(() => {
      return this.getClients()
      .then((clients: any) => this.isLoaded = true);
    });
  }

  editClient(id) {

  }
}
