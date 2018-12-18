import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";

import { Error404Component } from "./error404/error404.component";
import { DetalheComponent } from "./personagens/detalhe/detalhe.component";
import { PersonagensComponent } from "./personagens/personagens.component";


const appRoutes: Routes = [
  { path: "", component: PersonagensComponent },
  { path: ":id", component: DetalheComponent },
  { path: "**", component: Error404Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  appRoutes
  //,{ enableTracing: true } // <-- debugging purposes only
);
