import { FlightModule } from './flight/flight.module';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';
import { appService } from './app.service';
import { ComprarModule } from './comprar/comprar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { comprarComponent } from './comprar/comprar.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'people',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } }
    ]
  }]
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlightModule,
    ComprarModule,
    MatDialogModule,
    CurrencyMaskModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    BrowserAnimationsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    comprarComponent
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

