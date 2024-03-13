import { Component } from '@angular/core';

@Component({
    selector: 'app-qr-code-reader',
    templateUrl: './qr-code-reader.component.html',
    styleUrls: ['./qr-code-reader.component.scss'],
})
export class QrCodeReaderComponent {
    qrCodeValue: string | null = null;

    onScanSuccess(result: string): void {
        this.qrCodeValue = result;
    }

    enviarCodigoObtido(){

    }
}
