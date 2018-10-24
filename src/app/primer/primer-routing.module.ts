import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimerComponent } from './primer/primer.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: PrimerComponent,
    children: [
      {
        path: '',
        component: SelectLanguageComponent
      },
      {
        path: 'summary',
        component: SummaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimerRoutingModule { }
