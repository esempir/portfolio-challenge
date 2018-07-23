/**
 * Created by rh727 on 7/21/18.
 */

import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatTabsModule,
  MatGridListModule,
  MatCardModule,
  MatListModule,
  MatLineModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatLineModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatLineModule
  ]
})
export class MaterialModule {}
