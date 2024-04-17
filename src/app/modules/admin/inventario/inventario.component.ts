import {
    Component,
    OnInit,
    ViewChild,
    OnDestroy,
    Input,
    EventEmitter,
    Output,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InventarioService } from './inventario.service';
import { Remedio } from 'app/model/Remedio';

// import 'moment-timezone';

@Component({
    selector: 'app-teste',
    templateUrl: './inventario.component.html',
    styleUrls: ['./inventario.component.scss'],
})
export class InventarioComponent implements OnInit {
    @Input() cartTotal: number;
    itens: Remedio[] = [];
    @Output() cartItemDeleted = new EventEmitter<{
        productId: number;
    }>();
    @Output() cartItemChanged = new EventEmitter<{
        productId: number;
    }>();

    originalRemediosList: Remedio[] = [];
    remediosList: MatTableDataSource<Remedio>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    displayedColumns: string[] = [
        'nomeMedicamento',
        'dosagem',
        'estoque',
        'imagem',
        'actions',
    ];

    searchText: string = '';

    constructor(private _service: InventarioService) {}

    ngOnInit(): void {
        this._service._remedios$.subscribe((response) => {
            this.originalRemediosList = response;
            this.remediosList = new MatTableDataSource(
                this.originalRemediosList
            );
            this.remediosList.paginator = this.paginator;
        });
    }

    remediosFilter(text: string, applyFilter: boolean = true) {
        this.searchText = text;
        if (applyFilter) {
            const searchTextLower = this.searchText.trim().toLowerCase();
            this.remediosList.data = this.originalRemediosList.filter(
                (remedio) => {
                    return (
                        searchTextLower === '' ||
                        remedio.nomeMedicamento
                            .toLowerCase()
                            .includes(searchTextLower)
                    );
                }
            );
        }
    }

    onCartItemDeleted(productData: { productId: number }) {
        this.cartItemDeleted.emit({
            productId: productData.productId,
        });
    }

    onCartItemChanged(productData: { productId: number }) {
        this.cartItemChanged.emit({
            productId: productData.productId,
        });
    }

    retirarRemedio(itemRetirado: Remedio) {
        console.log(itemRetirado);
        this.itens.push(itemRetirado);
    }
}
