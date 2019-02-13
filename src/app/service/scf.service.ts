import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders
} from "@angular/common/http";
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { Menu } from '../model/Menu';
import { Chit } from '../model/Chit';
import { Period } from '../model/Period';
import { ChitMember } from '../model/ChitMember';
import { BidDetails } from '../model/BidDetails';
 
@Injectable({
  providedIn: 'root'
})
export class ScfService {

  constructor(private http: HttpClient) {

  }

  login(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'email': user.email,
        'password': user.password
      })
    }
    const body = '';
    return this.http.post<User>("http://localhost:1010/user/login", body, httpOptions);
  }

  register(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    const body = JSON.stringify(user);
    return this.http.post<User>("http://localhost:1010/user", body, httpOptions);
  }

  getMenu(roleId: number): Observable<Menu[]> {
    return this.http.get<Menu[]>("http://localhost:1010/menu/list/" + roleId)
  }


  getPeriods(): Observable<Period[]> {

    return this.http.get<Period[]>("http://localhost:1010/period/getData");

  }

  getChitData(id: string): Observable<Chit[]> {

    return this.http.get<Chit[]>("http://localhost:1010/chit/user/" + id)
  }

 deleteChitData(id : number) : Observable<Chit>{

  return this.http.delete<Chit>("http://localhost:1010/chit/" + id)
 }

  chit(chit: Chit): Observable<Chit> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    const body = JSON.stringify(chit);
    return this.http.post<Chit>("http://localhost:1010/chit/save", body, httpOptions);

  }

  saveUser(user: User): Observable<User> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    const body = JSON.stringify(user);
    return this.http.post<User>("http://localhost:1010/user", body, httpOptions);

  }

  saveChitMember(chitmember: ChitMember): Observable<ChitMember> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    const body = JSON.stringify(chitmember);
    return this.http.post<ChitMember>("http://localhost:1010/chitMember/save", body, httpOptions);
  }

  SaveBidDeatils( bidDetails :   BidDetails) :Observable<BidDetails> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    const body = JSON.stringify(bidDetails);
    return this.http.post<BidDetails>("http://localhost:1010/bidDetails/save", body, httpOptions);

  }


}
