import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule, MdButtonModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { ExampleComponent } from './example';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog';
import { AlertDialogComponent } from './dialogs/alert-dialog';

@NgModule({
  declarations: [
    ExampleComponent,
    ConfirmDialogComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MdButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [
    ConfirmDialogComponent,
    AlertDialogComponent
  ],
  bootstrap: [ExampleComponent]
})
export class Ng2CommonDialogsModule { }
