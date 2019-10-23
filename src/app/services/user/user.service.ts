import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataUser } from 'src/app/services/user/user';
import { headers } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string = environment.apiUrl + environment.endpoints.users;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<DataUser[]> {
    return this.httpClient.get<DataUser[]>(this.usersUrl);
  }

  getSingleUser(id: string): Observable<DataUser> {
    const endpoint = this.usersUrl + '/' + id;
    return this.httpClient.get<DataUser>(endpoint);
  }

  createUser(user: DataUser): Observable<DataUser> {
    return this.httpClient.post<DataUser>(this.usersUrl, JSON.stringify(user), { headers });
  }

  updateUser(id: string, user: DataUser): Observable<DataUser> {
    const endpoint = this.usersUrl + '/' + id;
    return this.httpClient.put<DataUser>(endpoint, JSON.stringify(user), { headers });
  }

  deleteUser(id: string): Observable<unknown> {
    const endpoint = this.usersUrl + '/' + id;
    return this.httpClient.delete(endpoint);
  }
}
