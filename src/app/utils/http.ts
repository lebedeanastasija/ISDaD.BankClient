import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BankHttpClient {

  constructor(private http: HttpClient) {}

  get(url, search = {}) {
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe((data) => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  delete(url, search = {}) {
    return new Promise((resolve, reject) => {
      this.http.delete(url)
        .subscribe((data) => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      this.http.post(url, data)
        .subscribe((data) => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  // put(url, data) {
  //     return new Promise((resolve, reject) => {
  //         this.http.put(url, data)
  //         .map(res => res.json())
  //         .subscribe((data) => {
  //             resolve(data);
  //         }, (err) => {
  //             reject(err);
  //         });
  //     });
  // }
}
