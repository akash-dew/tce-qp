import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalConfig } from '../../modal.config'
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'tce-qp-qp-setup',
  templateUrl: './qp-setup.component.html',
  styleUrls: ['./qp-setup.component.scss'],


 

  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class QpSetupComponent {

  @ViewChild('content')
  private content!: QpSetupComponent; 
   constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content:any) {
    this.modalService.open(content.content, { windowClass: 'dark-theme-modal',size: 'lg', centered: true});
  }
  defineTemplate(content:any){
    this.modalService.open(content.content, { windowClass: 'dark-theme-modal',size: 'lg', centered: true });
  }
   c(el:any){
      this.modalService.dismissAll();
   }
   d(e:any){
     this.c(e);
   }
}