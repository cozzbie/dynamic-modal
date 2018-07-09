import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

@Component({
    selector: 'dynamic-loader',
    template: `
    <ng-template [ngIf]="tempState">
        <div class="modal">
            <div class="content">
                <div #modalcontents></div>
            </div>
        </div>
    </ng-template>
  `
})
export class DynamicModalLoader implements OnInit {
    tempState = false;
    @Input('modalcontent')
    set modalcontent(v) {
        if (v) {
            this.loadModalContent(v.component);
        }
    }
    @ViewChild('modalcontents', { read: ViewContainerRef }) modalcontents;

    constructor(private compFactResolver: ComponentFactoryResolver) { }
    ngOnInit() { }

    loadModalContent(comp) {
        this.tempState = true;
        setTimeout(() => {
            this.modalcontents.clear();
            const compFact = this.compFactResolver.resolveComponentFactory(comp);
            const ref = this.modalcontents.createComponent(compFact);
            ref.instance.close = this.closeModalContent.bind(this);

        });
    }

    closeModalContent() {
        this.tempState = false;
        this.modalcontents.clear();
    }
}
