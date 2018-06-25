import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule,MatButtonModule, MatToolbarModule , MatFormFieldModule , MatInputModule , MatRippleModule, MatCheckboxModule ,MatSelectModule,MatSlideToggleModule
 ,MatDatepickerModule ,MatNativeDateModule } from '@angular/material';

const mods = [
  MatButtonModule , MatToolbarModule , MatFormFieldModule , MatInputModule , MatRippleModule,MatCheckboxModule,MatSelectModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
];
@NgModule({
  imports: [mods],
  exports: [mods],
})
export class MaterialModule { }
