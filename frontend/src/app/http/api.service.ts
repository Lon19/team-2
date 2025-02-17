import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpClient {

  apiURL = 'http://127.0.0.1:8000/';

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  public getJSON<T>(url: string): Observable<T> {
    return super.get<T>(this.convertUrl(url))
      .pipe(
        catchError(ApiService.handleError)
      );
  }

  private convertUrl(url: string) {
    let returnUrl = url;

    if (this.apiURL) {
      returnUrl = this.apiURL + returnUrl;
    }

    return returnUrl;
  }
}
