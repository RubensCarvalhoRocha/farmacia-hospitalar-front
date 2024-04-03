import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { InventarioComponent } from './inventario.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { InventarioRoutes } from './inventario.routing';
import { SharedModule } from 'app/shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  InventarioComponent
  ],
  imports: [
    RouterModule.forChild(InventarioRoutes),
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatButtonModule,
        MatSelectModule,
        FuseCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatInputModule,
        MatRadioModule,
        MatIconModule,
        MatSortModule,
        CommonModule,
        SharedModule,
        FormsModule,
        SharedModule,
  ]
})
export class InventarioModule { }
