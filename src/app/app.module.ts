import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { RouteModule } from './app-routing.module';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { PrimerComponent } from './primer/primer.component';
import { DescriptorFilterPipe } from './primer/descriptor-filter/descriptor-filter.pipe';
import { ShadowScrollDirective } from './directives/shadow-scroll/shadow-scroll.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavFooterComponent } from './primer/nav-footer/nav-footer.component';
import { DescriptorViewComponent } from './primer/descriptor-view/descriptor-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    SplashPageComponent,
    PrimerComponent,
    DescriptorFilterPipe,
    ShadowScrollDirective,
    NotFoundComponent,
    NavFooterComponent,
    DescriptorViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouteModule
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
