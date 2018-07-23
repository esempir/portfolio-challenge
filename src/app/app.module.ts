import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AboutComponent } from './about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
