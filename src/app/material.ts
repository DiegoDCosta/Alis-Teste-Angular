import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule
  ],

  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule
  ]
})

export class MaterialModule{

}
