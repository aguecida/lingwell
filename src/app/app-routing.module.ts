import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: SplashPageComponent
  },
  {
    path: 'getting-started',
    loadChildren: './primer/primer.module#PrimerModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class RouteModule { }
