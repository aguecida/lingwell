import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { RouteModule } from './app-routing.module';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { PrimerComponent } from './primer/primer.component';
import { DescriptorFilterPipe } from './pipes/descriptor-filter/descriptor-filter.pipe';
import { ShadowScrollDirective } from './directives/shadow-scroll/shadow-scroll.directive';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    SplashPageComponent,
    PrimerComponent,
    DescriptorFilterPipe,
    ShadowScrollDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouteModule,
    FontAwesomeModule
  ],
  entryComponents: [
    FeedbackComponent
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
