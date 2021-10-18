import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactComponent } from './views/contact/contact.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  
  { path: 'us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }