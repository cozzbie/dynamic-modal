import { Component, OnInit, Output } from '@angular/core';

@Component({ selector: 'b-modal', template: `<div class="wide-modal-b">...but we know water flows downwards right? <button (click)="close()">close</button></div>` })
export class BModal implements OnInit {

	constructor() {}
    ngOnInit() { }
}
