import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { MyContact } from '../models/myContact';
import { Observable, throwError } from 'rxjs';
import { MyGroup } from '../models/myGroup';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://localhost:4000/contacts'

  constructor(private _http: HttpClient) { }

  //Get All Contacts
  public getAllContacts(): Observable<MyContact> {
    let dataUrl: string = `${this.baseUrl}/contacts`;
    return this._http.get<MyContact>(dataUrl).pipe(catchError(this.handleError))
  }

  //Get Single Contact
  public getContacts(contactId: string): Observable<MyContact> {
    let dataUrl: string = `${this.baseUrl}/contacts/${contactId}`
    return this._http.get<MyContact>(dataUrl).pipe(catchError(this.handleError))
  }

  //Create Contacts
  public createContacts(contact: MyContact): Observable<MyContact> {
    let dataUrl: string = `${this.baseUrl}/contacts`;
    return this._http.post<MyContact>(dataUrl, contact).pipe(catchError(this.handleError))
  }
  //Update Contacts
  public updateContacts(contact: MyContact, contactId: string): Observable<MyContact> {
    let dataUrl: string = `${this.baseUrl}/contacts/${contactId}`;
    return this._http.put<MyContact>(dataUrl, contact).pipe(catchError(this.handleError))
  }

  //Delete Contacts
  public deleteContacts(contactId: string): Observable<MyContact> {
    let dataUrl: string = `${this.baseUrl}/contacts/${contactId}`;
    return this._http.delete<MyContact>(dataUrl).pipe(catchError(this.handleError))
  }

  //Get All Groups
  public getAllGroups(): Observable<MyGroup> {
    let dataUrl: string = `${this.baseUrl}/groups`;
    return this._http.get<MyGroup>(dataUrl).pipe(catchError(this.handleError))
  }

  //Get Single Groups
  public getGroup(contact: MyContact): Observable<MyGroup> {
    let dataUrl: string = `${this.baseUrl}/groups/${contact.groupId}`
    return this._http.get<MyGroup>(dataUrl).pipe(catchError(this.handleError))
  }


  //Error Solve
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = ''
    if (error.error instanceof ErrorEvent) {
      //clientError
      errorMessage = `Error :${error.error.message}`
    } else {
      //server side error
      errorMessage = `Status :${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage)
  }

}