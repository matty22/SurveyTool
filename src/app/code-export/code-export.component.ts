import { Component, OnInit, Input, Inject, OnChanges } from '@angular/core';
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
    
  }

  ngOnChanges() {
    this.exportedSurvey = this.data;
    this.translateHTML();
  }

  closeDialog() {
    this.dialogRef.close(); 
  }

  translateHTML() {
    console.log(this.data.questions);
    let styles: string = "<style>form{background-color:" + this.data.settings.background +"; border:" + this.data.settings.border + 
             "; border-radius:" + this.data.settings.borderRadius  + "; font-family:" + this.data.settings.font + 
             "; font-size:" + this.data.settings.fontSize + "; padding:" + this.data.settings.padding + 
             "; width:" + this.data.settings.width + "px;}.surveyQuestion{display:flex;align-items:center;justify-content" +
             ":flex-start;min-height:30px;}.questionSide{margin-right:50px;display:flex;align-items:flex-start;}h1,h3,h5{margin:0;}" + 
             ".checkboxLabel{margin-top:3px;}.checkboxOuter{display:flex;flex-direction:column;align-items:flex-start;}" + 
             ".checkboxInner{display:flex;align-items:center;}.addressBlock{display:flex;flex-direction:column;}" + 
             ".addressBlock input{padding:5px 0;margin-bottom:8px;}.gridQuestion{display:flex;flex-direction:column;}" + 
             ".gridTable{border:1px solid #000000;}.gridTable td{border:1px solid #000000;border-collapse:collapse;padding:10px;}" + 
             ".gridTableRow td{text-align:center;}.surveyQuestion label{padding-right:5px;}" + 
             ".surveyQuestion input{background-color:transparent;height:20px;padding:0 5px;}" + 
             ".surveyQuestion textarea{font-family:Arial, sans-serif;font-size:0.8em;padding:5px;background-color:transparent;}" + 
             ".requiredStar{color:#ff0000;}</style>";
    let body: string = "<form action='#' method='post'>";
    for (let i = 0; i < this.data.questions.length; i++) {
      let options = this.data.questions[i].options;

      switch (this.data.questions[i].type) {
        case 'text':
          let hide = options.hideQuestion;
          let required = options.responseRequired;
          body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide' style='padding:" + options.padding + ";'>";
          // If hideQuestion is false, concat the label tag
          if (!hide) {
            body += "<label style='color:" + options.color + ";'>" + this.data.questions[i].label + "</label>";
          }
          // If required is true, concat the required star
          if (required) {
            body += "<span class='requiredStar'>*</span>"
          }
          body += "<input type='text' placeholder='" + options.placeholder + "' style='border:" + options.border + "; border-radius:" + options.borderRadius + ";'"
          body += "</div></div>";
        break;

        case 'textarea':
          hide = options.hideQuestion;
          required = options.responseRequired;
        break;

        case 'email':
          hide = options.hideQuestion;
          required = options.responseRequired;
        break;

        case 'address':
          hide = options.hideQuestion;
          required = options.responseRequired;
        break;

        case 'phone':
          hide = options.hideQuestion;
          required = options.responseRequired;
        break;

        case 'select':
          hide = options.hideQuestion;
          required = options.responseRequired;
        break;

        case 'radio':
          hide = options.hideQuestion;
          required = options.responseRequired;
        break;

        case 'checkbox':
          hide = options.hideQuestion;
          required = options.responseRequired;
        break;

        case 'grid':
          hide = options.hideQuestion;
          required = options.responseRequired;
        break;

        case 'heading':
        break;

        case 'paragraph':
        break;

        case 'image':
        break;

        case 'divider':
        break;

        case 'spacer':
        break;

        case 'submit':
        break;
      }
    }
    body += "</form>";
    console.log(body);
  }

}
