import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-PE';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeIt);
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
