import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly URL_API = this.config.getConfig().backend.url;

  constructor(private config: ConfigService, private http: HttpClient) {}

  create(data: any) {
    return this.http.post(this.URL_API + '/user', data);
  }

  update(data: any, id: any) {
    return this.http.put(this.URL_API + '/user/' + id, data);
  }

  delete(id: string) {
    return this.http.delete(this.URL_API + '/user/' + id);
  }

  list() {
    return this.http.get(this.URL_API + '/user');
  }

  listById(id: any) {
    return this.http.get(this.URL_API + '/user/' + id);
  }
}
