import { Component, OnInit } from '@angular/core';
import { LoaderService } from './../../services/loader.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loader: boolean;
  destroy$ = new Subject();
  constructor(
    private _loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this._loaderService.getStatusLoader()
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => this.loader = status);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();;
  }

}