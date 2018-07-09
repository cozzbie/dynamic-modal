
import { Component, OnInit } from '@angular/core';

@Component({ selector: 'a-modal', template: `<div class="wide-modal">Jack and Jill went up the hill... <button (click)="close()">close</button></div>` })
export class AModal implements OnInit {
    constructor() { }
    ngOnInit() { }
}
