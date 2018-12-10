import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";

import { Error404Component } from "./error404/error404.component";
import { PersonagemDetalheComponent } from "./personagem-detalhe/personagem-detalhe.component";
import { HomeComponent } from "./home/home.component";


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "detalhe", component: PersonagemDetalheComponent },
  { path: "**", component: Error404Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  appRoutes
  //,{ enableTracing: true } // <-- debugging purposes only
);
