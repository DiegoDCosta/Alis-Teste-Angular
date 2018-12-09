import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { HomeComponent } from "./home/home.component";
import { Error404Component } from "./error404/error404.component";



const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "**", component: Error404Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  appRoutes
  //,{ enableTracing: true } // <-- debugging purposes only
);
