import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Remedio } from 'app/model/Remedio';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
        @Input() item: Remedio;
        @Output() itemDeletedo = new EventEmitter<{
          productId: number
        }>();
        @Output() cartItemChanged = new EventEmitter<{
          productId: number
        }>();

        onItemDeleted(event) {
          const id = event.target.getAttribute('id');
          this.itemDeletedo.emit({
              productId: id
            });
        }

        onItemChanged(event) {
          const id = event.target.getAttribute('id');
          this.cartItemChanged.emit({
              productId: id
            });
        }

        constructor() {
         }

        ngOnInit() {

        }


      }

