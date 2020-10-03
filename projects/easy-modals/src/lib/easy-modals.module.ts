import { NgModule } from '@angular/core';
import { EasyModalsComponent } from './easy-modals.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import {InsertionDirective} from './util/insertion.directive';
import {ConfirmationModalConfig} from './confirmation-modal/confirmation-modal-config';
import {ConfirmationmodalRef} from './confirmation-modal/confirmationmodal-ref';
import {ConfirmationContentComponent} from './confirmation-modal/confirmation-content/confirmation-content.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [EasyModalsComponent, ConfirmationModalComponent, InsertionDirective, ConfirmationContentComponent],
    imports: [
        CommonModule
    ],
  providers: [ConfirmationModalConfig, ConfirmationmodalRef]
})
export class EasyModalsModule { }
