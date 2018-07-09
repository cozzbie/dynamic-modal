import { Component } from '@angular/core';
import { AModal } from './a-modal';
import { BModal } from './b-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    modalcontent;

    constructor() {}

    modalA() {
        this.modalcontent = { component: AModal };
    }

    modalB() {
        this.modalcontent = { component: BModal };
    }
}
