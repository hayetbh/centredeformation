import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuAccueilComponent } from './menu-accueil/menu-accueil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { EspaceFormateurComponent } from './espace-formateur/espace-formateur.component';
import { EspaceCondidatComponent } from './espace-condidat/espace-condidat.component';
import { RechercherFormationComponent } from './rechercher-formation/rechercher-formation.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';
import { InscriptionCondidatComponent } from './inscription-condidat/inscription-condidat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuAccueilComponent,
    AccueilComponent,
    EspaceAdminComponent,
    EspaceFormateurComponent,
    EspaceCondidatComponent,
    RechercherFormationComponent,
    DetailFormationComponent,
    InscriptionCondidatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
