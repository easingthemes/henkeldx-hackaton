import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';
import { ProductQuantityComponent } from './components/productQuantity/productQuantity.component';
import { APP_BASE_HREF } from "@angular/common";
import { environment } from "../environments/environment";

console.log(environment.baseURI);

const DECLARATIONS = [
  AppComponent,
  IconComponent,
  ProductQuantityComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.baseURI}],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  static declarations = DECLARATIONS
}
