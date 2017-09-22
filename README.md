# ng2-common-dialogs
### Provides common dialogs components and a simple to use service for angular material
After developing with angularjs material and got used to the simple use of the provided common used dialogs I thought it will be nice to have them also in the new angular material. 
So I built the dialogs which were provided than and an extra dialog which I find really necessary and fun to use.

### The Dialogs
* Alert Dialog
* Confirm Dialog
* Prompt Dialog
* **Loading Dialog**

### The Service
* Common Dialog Service

## Angular and Angular Material supported version
Angular 4.X.X and Angular Material 2.X.X

## Demo


## Installation
```sh
npm i --save ng2-common-dialogs
```
In your `app.module.ts` you need to import the package, don't forget to import all its dependencies before.

```ts
import { FormsModule } from '@angular/forms';
import { MdDialogModule, MdButtonModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Ng2CommonDialogsModule } from 'ng2-common-dialogs'
```
```ts
@NgModule({
  imports: [..., 
  FormsModule,
  MdDialogModule,
  MdButtonModule,
  MdInputModule,
  MdProgressSpinnerModule,
  FlexLayoutModule
  Ng2CommonDialogsModule
  ],
  ...
})
export class AppModule {
  ...
}
```

### if you only want to use the the components without the service

```ts
import { Ng2CommonDialogsModule, AlertDialogComponent, ConfirmDialogComponent, PromptDialogComponent, LoadingDialogComponent } from 'ng2-common-dialogs';
```
```ts
@NgModule({
  // Import all the items that were imported in the former exmaple
  ...
  declarations: [
    ...
    ConfirmDialogComponent,
    AlertDialogComponent,
    PromptDialogComponent,
    LoadingDialogComponent
  ],
  entryComponents: [
    ...
    ConfirmDialogComponent,
    AlertDialogComponent,
    PromptDialogComponent,
    LoadingDialogComponent
  ],
  ...
```

 The reason you add them also as `entryComponents` is because you want them to have a *component factory*.
 
 ## Usage
 ### Common Dialog Service
 The service is very simple to use, all you need to do is to inject it to your component and than call the right show dialog function. All the functions returns a simple ES6 `Promise`.
 
 ```ts
 import { Component } from '@angular/core';

import { CommonDialogService } from 'ng2-common-dialogs';

@Component({
  selector: 'service-example',
  templateUrl: './service-example.html'
})
export class ServiceExampleComponent {
  constructor(private commonDialogService: CommonDialogService) { }
  
  showAlertDialog () {
    return this.commonDialogService.showAlert({
      title: 'Nice One',
      message: 'You just opened an alert dialog',
      okButton: 'Yay!',
    }).then(() => ...);
  }
  
  showConfirmDialog () {
    return this.commonDialogService.showConfirm({
      title: 'Caution',
      message: 'Are you sure you want to do this?',
      cancelButton: 'No Way!',
      yesButton: 'Absolutely',
    })
    .then(() => ...)
    .catch(() => ...);
  }
  
  showPromptDialog () {
    return this.commonDialogService.showPrompt({
      title: 'Personality Test',
      message: 'What is your favorite dish?',
      inputLabel: 'Dish Name',
      cancelButton: 'No',
      okButton: 'Choose',
    })
    .then(dishName => ...);
  }
  
  showLoadingDialog() {
    return this.commonDialogService.showLoading({
      title: 'Be patient...',
      promise: Promise.resolve()
    })
    .then(() => ...)
    .catch(() => ...); // If the promise you provided will fail it will arrive here
  }
}

 ```
 
 ## API
 ### Common Dialog Service
 ### `showAlert (options)`
 - `options`
    - `title`: The title
    - `message`: The message
    - `okButton`: The text of the ok button, `default` is *ok*
- `return` an ES6 `Promise` after the dialog was closed

### `showConfirm (options)`
- `options`
    - `title`: The title
    - `message`: The message
    - `cancelButton`: The text of the cancel button, `default` is *cancel*
    - `yesButton`: The text of the yes button, `default` is *yes*
- `return` an ES6 `Promise` after the dialog was closed. It will `resolve` if yes was clicked or `reject` with the value `false` if the cancel button was clicked

### `showPrompt (options)`
- `options`
    - `title`: The title
    - `message`: The message
    - `inputLabel`: The *floating label* of the input in the dialog
    - `cancelButton`: The text of the cancel button, `default` is *cancel*
    - `okButton`: The text of the ok button, `default` is *ok*
- `return` an ES6 `Promise` with `result` which is the text which was entered

 ### `showLoading (options)`
 - `options`
    - `title`: The title
    - `promise`: The `Promise` that be resolved while the loading dialog will be shown
- `return` an ES6 `Promise` with `result` which is the result of the given promise. If the given promise rejected the promise will also reject (in that case you need to use catch instead of then)
 
### Native Components
For these components you must follow the second stage of the installation in order angular to recognize the components and the ability to open a dialog of them.
When you open the dialog you must supply the right component's data structure, each component has it own `class` that represents his data structure.

### `AlertDialogComponent`
Represents a basic alert dialog component.
### `AlertDialogData`
- `title`: The title
- `message`: The message
- `okButton`: The text of the ok button, `default` is *ok*

### `ConfirmDialogComponent`
When the *cancel* button is clicked the closed value of the dialog is `false` and when the *yes* button is clicked its `true`.
### `ConfirmDialogData`
- `title`: The title
- `message`: The message
- `cancelButton`: The text of the cancel button, `default` is *cancel*
- `yesButton`: The text of the yes button, `default` is *yes*
 
### `PromptDialogComponent`
The use of this dialog is to get an input from the user, it will show a title, message and an input with the given *input label*, the *result* is the input value.
### `PromptDialogData`
- `title`: The title
- `message`: The message
- `inputLabel`: The *floating label* of the input in the dialog
- `cancelButton`: The text of the cancel button, `default` is *cancel*
- `okButton`: The text of the ok button, `default` is *ok*
 
### `LoadingDialogComponent`
Resolves the given `promise`, take the *result*, wrap it with `Promise.resolve()` and return it as the `dialogResult`, if the promise was rejected the *error* value will be wrapped with `Promise.reject()` and return it as the `dialogResult`.
### `LoadingDialogData`
- `title`: The title
- `promise`: The `Promise` that be resolved while the loading dialog will be shown