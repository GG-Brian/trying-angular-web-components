import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoadScriptsService } from './shared/services/load-scripts.service';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ContactComponent } from './views/contact/contact.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    ContactComponent,
    CatalogComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [LoadScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
