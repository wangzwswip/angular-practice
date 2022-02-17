import { Injectable } from '@angular/core';
import { api } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { BootingSpinnerService } from '@core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService,
    private bootingSpinnerService: BootingSpinnerService
  ) {}

  private formatErrors(error: any) {
    this.bootingSpinnerService.hide()
    this.notificationsService.error(error)
    console.log('这里');
    
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${api.API_ROOT}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${api.API_ROOT}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${api.API_ROOT}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path: string,): Observable<any> {
    return this.http.delete(
      `${api.API_ROOT}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
