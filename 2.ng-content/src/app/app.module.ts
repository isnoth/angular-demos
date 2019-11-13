import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, 
    Sub1Component,
    Sub2Component,
    ParentComponent,
    Parent2Component 
} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Sub1Component,
    Sub2Component,
    ParentComponent,
    Parent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
