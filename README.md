# EasyModals

The service allows you to easily use different types of modals in your angular application. You can also easily implement your own component as a modal. 

## Current implemented

* [Confirmation Modal](#confirmation-modal)
* [Custom Modal](#custom-modal)

#### Planned

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

Now you must inject the EasyModalsService in the component you want to use your modal after that you only have to configure the modal of your choice. 

Further information can be found under the respective modal.

##Getting data from the modal

After calling the respective methode from the service you will get an reference of the current modal. From here you can access an observable '$afterClose' which returns the data specific to the modal when the modal is closed.  

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

##### Usage
You only have to call the methode ``openConfirmationModal(config: ConfirmationModalConfig)`` and hand over the previously prepared configurations.
This modal will return a boolean -> true if confirm Button was pressed and well false if decline Button was pressed.

### How it looks like

![Modal](https://i.imgur.com/R4XQReY.png)

## Custom Modal
### How to use

##### Configuration (CustomModalConfig)
* data: any -> you can give any data you want to your custom component
* backdropForDecline: boolean -> Allows to close the modal by pressing on the background

##### Usage
You only have to call the methode ``openCustomModal(youtComponent: Type<any>)`` and hand over the component you want to show and the previously prepared configurations.
To close the modal you have to inject ``CustomModalRef`` and call the close message with the data you want to return. 

### How it looks like
Soon
