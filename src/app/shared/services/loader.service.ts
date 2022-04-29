import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, of, Observable, interval } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loader$ = new BehaviorSubject<any>(false);

  constructor() { }

  getStatusLoader() {
    return this.loader$.asObservable();
  }

  on(): Observable<any> {
    this.loader$.next(true);
    return interval(1500);
  }

  Off() {
    this.loader$.next(false);
  }

}
