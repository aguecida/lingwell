import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashPageComponent } from './components/splash-page/splash-page.component';

const routes: Routes = [
  {
    path: '', component: SplashPageComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class RouteModule { }
