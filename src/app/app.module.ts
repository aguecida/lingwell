import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { RouteModule } from './route.module';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { PrimerComponent } from './components/primer/primer.component';
import { DescriptorFilterPipe } from './pipes/descriptor-filter/descriptor-filter.pipe';
import { ShadowScrollDirective } from './directives/shadow-scroll/shadow-scroll.directive';
import { SurveyModule } from './survey/survey.module';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    SplashPageComponent,
    PrimerComponent,
    DescriptorFilterPipe,
    ShadowScrollDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouteModule,
    FontAwesomeModule,
    SurveyModule
  ],
  entryComponents: [
    FeedbackComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
