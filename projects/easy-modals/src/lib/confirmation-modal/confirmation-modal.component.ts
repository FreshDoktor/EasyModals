import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  Type,
  ViewChild
} from '@angular/core';
import {ConfirmationmodalRef} from './confirmationmodal-ref';
import {Subject} from 'rxjs';
import {InsertionDirective} from '../util/insertion.directive';
import {ConfirmationModalConfig} from './confirmation-modal-config';

@Component({
  selector: 'lib-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements AfterViewInit, OnDestroy {

  private readonly _onClose = new Subject<any>();

  public componentRef: ComponentRef<any>;
  public childComponentType: Type<any>;
  public onClose = this._onClose.asObservable();

  // add this:
  @ViewChild(InsertionDirective)
  insertionPoint: InsertionDirective;

  // and this:
  // tslint:disable-next-line:max-line-length
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef, public dialogRef: ConfirmationmodalRef, public config: ConfirmationModalConfig) {}

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    if (this.config.backdropForDecline){
      this.dialogRef.close(false);
    }
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  onOkay() {
    this.dialogRef.close(true);
  }

  onAbort() {
    this.dialogRef.close(false);
  }

}
