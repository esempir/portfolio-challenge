/**
 * Created by rh727 on 7/21/18.
 */

import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatTabsModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
