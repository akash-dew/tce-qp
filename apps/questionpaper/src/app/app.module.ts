import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {QuestionPaperModule} from '../../../../libs/question-paper/src/lib/question-paper.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component'

@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  imports: [BrowserModule,QuestionPaperModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ToolbarComponent
  ],
})
export class AppModule {}
