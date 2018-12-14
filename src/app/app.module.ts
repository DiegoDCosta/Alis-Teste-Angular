import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';
import { PersonagemBuscaComponent } from './personagem-busca/personagem-busca.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    PersonagemDetalheComponent,
    PersonagemBuscaComponent
  ],
  imports: [
    HttpModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
