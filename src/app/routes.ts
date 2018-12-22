import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";

import { Error404Component } from "./error404/error404.component";
import { DetalheComponent } from "./personagens/detalhe/detalhe.component";
import { HomeComponent } from "./home/home.component";


const appRoutes: Routes = [
  //{ path: "", component: PersonagensComponent },
  { path: "", component: HomeComponent },
  { path: "detail/:id", component: DetalheComponent },
  { path: "**", component: Error404Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  appRoutes
  //,{ enableTracing: true } // <-- debugging purposes only
);
