import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QpEditorComponent } from './components/qp-editor/qp-editor.component';



@NgModule({
  declarations: [
    QpEditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    QpEditorComponent
  ]
})
export class QuestionPaperEditorModule { }
