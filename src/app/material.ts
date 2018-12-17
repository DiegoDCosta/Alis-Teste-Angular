import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatBadgeModule
  ],

  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatBadgeModule
  ]
})

export class MaterialModule{

}
