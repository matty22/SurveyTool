import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-code-export',
  templateUrl: './code-export.component.html',
  styleUrls: ['./code-export.component.css']
})
export class CodeExportComponent implements OnInit {

  // @Input() survey: any;

  exportedSurvey: object;
  constructor(public dialogRef: MatDialogRef<CodeExportComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.exportedSurvey = this.data;
  }

  closeDialog() {
    this.dialogRef.close(); 
  }

  translateHTML() {
    let styles: string;
    styles = "<style>form{background-color:" + this.data.settings.background +"; border:" + this.data.settings.border + 
             "; border-radius:" + this.data.settings.borderRadius  + "; font-family:" + this.data.settings.font + 
             "; font-size:" + this.data.settings.fontSize + "; padding:" + this.data.settings.padding + 
             "; width:" + this.data.settings.width + "px;}</style>"
    console.log(styles);
  }

}
