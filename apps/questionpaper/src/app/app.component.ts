import { Component, ViewChild } from '@angular/core';
import { QpSetupComponent } from 'libs/question-paper/src/lib/components/qp-setup/qp-setup.component';

@Component({
  selector: 'tce-qp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'questionpaper';
  // @ViewChild('addResource', { static: false, read: ViewContainerRef })
  // addResource: ViewContainerRef | undefined;

  open(content:QpSetupComponent){
      content.open(content);
  }
// async openModal() {
//   return await this.modalComponent.open()
// }
// constructor(){

//   setTimeout(()=>{
//     this.openModal();
//   },7000)
// }
}
