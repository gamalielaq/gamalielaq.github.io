import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomeComponent } from './components/home/home.component';
// import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
// import { TimeLineComponent } from './components/time-line/time-line.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent, 
    // AboutmeComponent,
    // TimeLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
