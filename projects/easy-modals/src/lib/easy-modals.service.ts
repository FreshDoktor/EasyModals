import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type} from '@angular/core';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';
import {ConfirmationModalConfig} from './confirmation-modal/confirmation-modal-config';
import {ConfirmationmodalRef} from './confirmation-modal/confirmationmodal-ref';
import {DialogInjector} from './util/dialog-injector';
import {ConfirmationContentComponent} from './confirmation-modal/confirmation-content/confirmation-content.component';
import {CustomModalComponent} from "./custom-modal/custom-modal.component";
import {CustomModalConfig} from "./custom-modal/custom-modal-config";
import {CustomModalRef} from "./custom-modal/custom-modal-ref";

@Injectable({
  providedIn: 'root'
})
export class EasyModalsService {

  confirmationComponentRef: ComponentRef<ConfirmationModalComponent>;
  customComponentRef: ComponentRef<CustomModalComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendConfirmationModalComponentToBody(config: ConfirmationModalConfig): ConfirmationmodalRef {
    const map = new WeakMap();
    map.set(ConfirmationModalConfig, config);

    const dialogComponentRef = new ConfirmationmodalRef();
    map.set(ConfirmationmodalRef, dialogComponentRef);

    const sub = dialogComponentRef.$afterClosed.subscribe(() => {
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConfirmationModalComponent);
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.confirmationComponentRef = componentRef;

    this.confirmationComponentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
    });

    return dialogComponentRef;
  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.confirmationComponentRef.hostView);
    this.confirmationComponentRef.destroy();
  }

  public openConfirmationModal(config: ConfirmationModalConfig) {
    const dialogRef = this.appendConfirmationModalComponentToBody(config);
    this.confirmationComponentRef.instance.childComponentType = ConfirmationContentComponent;
    return dialogRef;
  }

  appendCustomModalComponentToBody(config: CustomModalConfig): CustomModalRef {
    const map = new WeakMap();
    map.set(CustomModalConfig, config);

    const customModalRef = new CustomModalRef();
    map.set(CustomModalRef, customModalRef);

    const sub = customModalRef.$afterClosed.subscribe(() => {
      this.removeCustomComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomModalComponent);
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map));

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.customComponentRef = componentRef;
    this.customComponentRef.instance.onClose.subscribe((data) => {
      this.removeCustomComponentFromBody();
    });

    return customModalRef;
  }

  private removeCustomComponentFromBody() {
    this.appRef.detachView(this.customComponentRef.hostView);
    this.customComponentRef.destroy();
  }

  public openCustomModal(component, config: CustomModalConfig) {
    const dialogRef = this.appendCustomModalComponentToBody(config);
    this.customComponentRef.instance.childComponentType = component;
    return dialogRef;
  }
}
