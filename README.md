# EasyModals

The service allows you to easily use different types of modals in your angular application. You can also easily implement your own component as a modal. 

## Current implemented

* [Confirmation Modal](#confirmation-modal)
#### Planned

* Custom Modal -> Will allow you to use own component as modal and returns any object you want.
* Information Modal -> Will shows an message/image and returns nothing when closed.
* Slider Modal -> Will show multiple messages/images. For example: Step by step guide will return nothing.
* Custom Slider Modal -> Will show multiple components. Can return everything you want.

##Usage
After the installation you have to provide the EasyModalsModule in the module where you want to use a modal.

```
import {EasyModalsModule} from "easy-modals";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EasyModalsModule],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
```
Now you have to prepare the configuration for the modal you want to use. Further information can be found under the respective modal.

## Confirmation Modal
### How to use

##### Configuration (ConfirmationModalConfig)
* title -> title of the modal
* confirmButton -> label of the confirm button
* declineButton -> label of the reject button

There are also these optional attributes:
* message: string -> An small additional message
* backdropForDecline: boolean -> Allows to close the modal by pressing on the background
* closeable: boolean -> Allows to close the modal with a click on an X

Now you can inject the EasyModalsService in your component. From there you can now call the method ``openConfirmationModal(config: ConfirmationModalConfig)``.
Here you can use you configurations from before. 

This Methodes returns an reference from where you can subscribe to the observable $afterClosed. It will return a boolean if the modal was closed. 

### How it looks like

![Modal](https://i.imgur.com/R4XQReY.png)
