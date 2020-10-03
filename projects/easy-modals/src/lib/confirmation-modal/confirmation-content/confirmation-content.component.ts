import {Component} from '@angular/core';
import {ConfirmationmodalRef} from '../confirmationmodal-ref';
import {ConfirmationModalConfig} from '../confirmation-modal-config';

@Component({
  selector: 'lib-confirmation-content',
  templateUrl: './confirmation-content.component.html',
  styleUrls: ['./confirmation-content.component.css']
})
export class ConfirmationContentComponent {

  constructor(public dialogRef: ConfirmationmodalRef, public config: ConfirmationModalConfig) {}

  onOkay() {
    this.dialogRef.close(true);
  }

  onAbort() {
    this.dialogRef.close(false);
  }

}
