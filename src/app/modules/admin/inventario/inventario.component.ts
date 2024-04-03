import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InventarioService } from './inventario.service';
import { Remedio } from 'app/model/Remedio';
// import 'moment-timezone';

@Component({
  selector: 'app-teste',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
    originalRemediosList: Remedio[] = [];
    remediosList: MatTableDataSource<Remedio>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    displayedColumns: string[] = ['nomeMedicamento', 'dosagem', 'estoque', 'imagem' , 'actions'];

    searchText: string = '';

    constructor(
        private _dialog: MatDialog,
        private _service: InventarioService
    ) {}

    ngOnInit(): void {
        this._service._remedios$.subscribe((response) => {
            this.originalRemediosList = response;
            this.remediosList = new MatTableDataSource(
                this.originalRemediosList
            );
            this.remediosList.paginator = this.paginator;
        });
    }

    // remediosFilter(text: string, applyFilter: boolean = true) {
    //     this.searchText = text;
    //     if (applyFilter) {
    //         const searchTextLower = this.searchText.trim().toLowerCase();
    //         this.remediosList.data = this.originalRemediosList.filter(
    //             (remedio) => {
    //                 return (
    //                     searchTextLower === '' ||
    //                     remedio.nomeMedicamento
    //                         .toLowerCase()
    //                         .includes(searchTextLower)
    //                 );
    //             }
    //         );
    //     }
    // }

    // openDialog(): void {
    //     const dialogRef = this._dialog.open(CertificateCreateComponent, {
    //         width: '100%',
    //         height: 'auto',
    //         maxHeight: '95vh',
    //     });
    // }
}
