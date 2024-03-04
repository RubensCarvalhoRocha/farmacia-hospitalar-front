import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { QrCodeReaderComponent } from './qr-code-reader.component';
import { Route, RouterModule } from '@angular/router';

const qrCodeRoutes: Route[] = [
    {
        path: '',
        component: QrCodeReaderComponent,
    },
];

// // Necessary to solve the problem of losing internet connection
// LOAD_WASM().subscribe();
@NgModule({
    declarations: [QrCodeReaderComponent],
    imports: [
        CommonModule,
        NgxScannerQrcodeModule,
        RouterModule.forChild(qrCodeRoutes),
    ],
})
export class QrCodeReaderModule {}
