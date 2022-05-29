import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Permission } from '../models/permission';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }


  getUser(id: number) {
    return this.http.get<User>(`${environment.api}/user/get-user/`, {params: {id}});
  }

  updateProfile(formBuild) {
  return this.http.patch<User>(`${environment.api}/user/update-profile/`, formBuild);
  }

  getUserPermissions() {
    return this.http.get<Permission>(`${environment.api}/user/get-user-permissions/`);
  }

  deleteProfile() {
    return this.http.delete<User>(`${environment.api}/user/delete-profile`);
  }

}
