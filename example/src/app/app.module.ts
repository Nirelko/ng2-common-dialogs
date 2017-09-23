import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule, MdButtonModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgmCommonDialogsModule }  from 'ngm-common-dialogs';

import { ComponentsExampleComponent } from './example/components-example';
import { ServiceExampleComponent } from './example/service-example/index';
import { ExampleComponent } from './example';

@NgModule({
  declarations: [
    ComponentsExampleComponent,
    ServiceExampleComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MdButtonModule,
    MdInputModule,
    MdProgressSpinnerModule,
    FormsModule,
    FlexLayoutModule,
    NgmCommonDialogsModule    
  ],
  bootstrap: [ExampleComponent]
})
export class NgmCommonDialogsExampleModule { }
