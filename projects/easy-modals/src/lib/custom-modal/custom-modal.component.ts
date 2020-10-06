import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  Type,
  ViewChild
} from '@angular/core';
import {Subject} from 'rxjs';
import {InsertionDirective} from '../util/insertion.directive';
import {CustomModalRef} from './custom-modal-ref';
import {CustomModalConfig} from './custom-modal-config';

@Component({
  selector: 'lib-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements AfterViewInit, OnDestroy {

  private readonly _onClose = new Subject<any>();

  public componentRef: ComponentRef<any>;
  public childComponentType: Type<any>;
  public onClose = this._onClose.asObservable();

  // add this:
  @ViewChild(InsertionDirective)
  insertionPoint: InsertionDirective;

  // and this:
  // tslint:disable-next-line:max-line-length
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef, public dialogRef: CustomModalRef, public config: CustomModalConfig) {}

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
    console.log('Backdrop');
    console.log(this.config.backdropForDecline);
    console.log(this.dialogRef);
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

}
