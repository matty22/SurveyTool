import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-code-export',
  templateUrl: './code-export.component.html',
  styleUrls: ['./code-export.component.css']
})
export class CodeExportComponent implements OnInit {

  @Input() survey: any;

  constructor(public dialogRef: MatDialogRef<CodeExportComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    let exportedSurvey = this.data;
    console.log(exportedSurvey)
  }

  closeDialog() {
    this.dialogRef.close(); 
  }

}
