import {
    Component,
    OnInit,
    ViewChild,
    Input,
    EventEmitter,
    Output,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InventarioService } from './inventario.service';
import { Remedio } from 'app/model/Remedio';
import { Retirada } from 'app/model/Retirada';
import notyf from 'app/utils/utils';
// import 'moment-timezone';

@Component({
    selector: 'app-teste',
    templateUrl: './inventario.component.html',
    styleUrls: ['./inventario.component.scss'],
})
export class InventarioComponent implements OnInit {
    itens: Remedio[] = [];

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

    retirarRemedios() {
        const retirada: Retirada = {
            medicamentoQuantidades: this.itens.map((item) => ({
                medicamentoId: item.id,
                quantidade: item.quantidade,
            })),
            funcionarioId: 1, // Usando id fixo para o funcionário
            pacienteId: 2, // Usando id fixo para o paciente
        };

        this._service.retirarRemedio(retirada).subscribe({
            next: (response) => {
                console.log('Remédios retirados com sucesso:', response);
                notyf.success('Remédios retirados com sucesso!');
            },
            error: (error) => {
                console.log('Erro ao retirar remédios:', error);
                notyf.error(
                    'Erro ao retirar remédios. Por favor, tente novamente.'
                );
            },
        });
    }
    getItensSelecionadosIds(itens: Remedio[]): number[] {
        return itens.map((item) => item.id);
    }

    atualizarItem(event) {
        console.log('Item atualizado:', event);
        console.log(this.itens);
        const itemIndex = this.itens.findIndex(
            (item) => item.id === event.productId
        );
        if (itemIndex !== -1) {
            this.itens.splice(itemIndex, 1); // Remove o item da lista
        }
    }

    teste(){
        notyf.success('Teste');
    }
}
