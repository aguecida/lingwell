import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { RouteModule } from './route.module';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { PrimerComponent } from './components/primer/primer.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    SplashPageComponent,
    PrimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
