import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Remedio } from 'app/model/Remedio';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
    @Input() item: Remedio;

    @Output() itemAtualizado = new EventEmitter<{
        productId: number;
    }>();

    onItemChanged() {
        this.itemAtualizado.emit({
            productId: this.item.id,
        });
    }

    constructor() {}

    ngOnInit() {}
}
