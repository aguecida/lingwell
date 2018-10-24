import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimerRoutingModule } from './primer-routing.module';
import { PrimerComponent } from './primer/primer.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { SummaryComponent } from './summary/summary.component';
import { MaterialModule } from '../material.module';
import { StepNavigatorComponent } from './step-navigator/step-navigator.component';

@NgModule({
  imports: [
    CommonModule,
    PrimerRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PrimerComponent, SelectLanguageComponent, SummaryComponent, StepNavigatorComponent]
})
export class PrimerModule { }
