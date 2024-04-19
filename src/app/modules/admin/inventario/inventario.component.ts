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
        'medidaDosagem',
        'descricao',
        'estoque',
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

    // selecionarRemedio(itemSelecionado: Remedio) {
    //     console.log(itemSelecionado);
    //     this.itens.push(itemSelecionado);
    // }

    selecionarRemedio(itemSelecionado: Remedio) {
        const itemExistente = this.itens.find(
            (item) => item.id === itemSelecionado.id
        );
        if (itemExistente) {
            // Item já existe, incremente a quantidade
            itemExistente.quantidade++;
        } else {
            // Item não existe, adicione à lista
            this.itens.push({ ...itemSelecionado, quantidade: 1 });
        }
    }

    retirarRemedios(itens: Remedio[]) {
        const itensSelecionadosIds = this.getItensSelecionadosIds(itens);
        console.log('Itens selecionados IDs:', itensSelecionadosIds);

        const selectedItemsWithQuantity = this.itens;

        // Loop through each item in the array
        for (const item of selectedItemsWithQuantity) {
            console.log('Item ID:', item.id, 'Quantity:', item.quantidade);
        }
        // Chamar a API para retirar os medicamentos com os IDs selecionados
        // this._service.retirarMedicamentos(itensSelecionadosIds).subscribe(...);
    }

    getItensSelecionadosIds(itens: Remedio[]): number[] {
        return itens.map((item) => item.id);
    }

    // onCartUpdated(event) {
    //     const id = event.target.getAttribute('id');
    //     const index = this.productItem.findIndex((elem) => elem.id == id);
    //     this.cartUpdated.emit({
    //         productId: this.productItem[index].id,
    //         productName: this.productItem[index].name,
    //         productPrice: this.productItem[index].price,
    //     });
    // }
}
