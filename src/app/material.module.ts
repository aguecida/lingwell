import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatSelectModule,
  MatTooltipModule,
  MatDialogModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
