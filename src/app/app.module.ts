import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BModal } from './b-modal';
import { AModal } from './a-modal';
import { DynamicModalLoader } from './modal-loader';


@NgModule({
    entryComponents: [
        DynamicModalLoader,
        AModal,
        BModal
    ],
    declarations: [
        AppComponent,
        DynamicModalLoader,
        AModal,
        BModal
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
