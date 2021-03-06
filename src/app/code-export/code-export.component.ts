import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-code-export',
  templateUrl: './code-export.component.html',
  styleUrls: ['./code-export.component.css']
})
export class CodeExportComponent implements OnInit {

  exportedCode: string;
  constructor(public dialogRef: MatDialogRef<CodeExportComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    
  }

  closeDialog() {
    this.dialogRef.close(); 
  }

  translateHTML() {
    let styles: string = "<style>form{background-color:" + this.data.settings.background +"; border:" + this.data.settings.border + 
             "; border-radius:" + this.data.settings.borderRadius  + "; font-family:" + this.data.settings.font + 
             "; font-size:" + this.data.settings.fontSize + "; padding:" + this.data.settings.padding + 
             "; width:" + this.data.settings.width + "px;}.surveyQuestion{display:flex;align-items:center;" +
             "min-height:30px;}.questionSide{display:flex;align-items:center;}h1,h3,h5{margin:0;}" + 
             ".checkboxLabel{margin-top:3px;}.checkboxOuter{display:flex;flex-direction:column;align-items:flex-start;}" + 
             ".checkboxInner{display:flex;align-items:center;}.addressBlock{display:flex;flex-direction:column;}" + 
             ".addressBlock input{padding:5px 0;margin-bottom:8px;}.gridQuestion{display:flex;flex-direction:column; align-items: flex-start}" + 
             ".gridTable{border:1px solid #000000;}.gridTable td{border:1px solid #000000;border-collapse:collapse;padding:10px;}" + 
             ".gridTableRow td{text-align:center;}.surveyQuestion label{padding-right:5px;}" + 
             ".surveyQuestion input{background-color:transparent;height:20px;padding:0 5px;}" + 
             ".surveyQuestion textarea{font-family:Arial, sans-serif;font-size:0.8em;padding:5px;background-color:transparent;}" + 
             ".requiredStar{color:#ff0000;}";
    let body: string = "<form action='#' method='post'>";
    for (let i = 0; i < this.data.questions.length; i++) {
      let options = this.data.questions[i].options;

      switch (this.data.questions[i].type) {
        case 'text':
          let hide = options.hideQuestion;
          let required = options.responseRequired;
          body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide' style='padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
          // If hideQuestion is false, concat the label tag
          if (!hide) {
            body += "<label style='color:" + options.color + ";'>" + this.data.questions[i].label + "</label>";
          }
          // If required is true, concat the required star
          if (required) {
            body += "<span class='requiredStar'>*</span>";
            body += "<input type='text' placeholder='" + options.placeholder + "' style='border:" + options.border + "; border-radius:" + options.borderRadius + ";' required>";
          } else {
            body += "<input type='text' placeholder='" + options.placeholder + "' style='border:" + options.border + "; border-radius:" + options.borderRadius + ";'>";
          }
          body += "</div></div>";
        break;

        case 'textarea':
          hide = options.hideQuestion;
          required = options.responseRequired;
          body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide' style='padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
          // If hideQuestion is false, concat the label tag
          if (!hide) {
            body += "<label style='color:" + options.color +";'>" + this.data.questions[i].label + "</label>";
          }
          // If required is true, concat the required star
          if (required) {
            body += "<span class='requiredStar'>*</span>";
            body += "<textarea placeholder='" + options.placeholder + "' style='border:" + options.border + "; border-radius:" + options.borderRadius + ";' required></textarea>";
          } else {
            body += "<textarea placeholder='" + options.placeholder + "' style='border:" + options.border + "; border-radius:" + options.borderRadius + ";'></textarea>";
          }
          body += "</div></div>";
        break;

        case 'email':
          hide = options.hideQuestion;
          required = options.responseRequired;
          body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide' style='padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
          // If hideQuestion is false, concat the label tag
          if (!hide) {
            body += "<label style='color:" + options.color +";'>" + this.data.questions[i].label + "</label>";
          }
          // If required is true, concat the required star
          if (required) {
            body += "<span class='requiredStar'>*</span>";
            body += "<input type='email' placeholder='" + options.placeholder + "' style='border:" + options.border + "; border-radius:" + options.borderRadius + ";' required>";
          } else {
            body += "<input type='email' placeholder='" + options.placeholder + "' style='border:" + options.border + "; border-radius:" + options.borderRadius + ";'>";
          }
          body += "</div></div>";
        break;

        case 'address':
          hide = options.hideQuestion;
          required = options.responseRequired;
          body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide' style='padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
          // If hideQuestion is false, concat the label tag
          if (!hide) {
            body += "<label style='color:" + options.color +";'>" + this.data.questions[i].label + "</label>";
          }
          // If required is true, concat the required star
          if (required) {
            body += "<span class='requiredStar'>*</span>";
            body += "<div class='addressBlock'>" + 
                    "<input placeholder='Street Address' style='border-radius:" + options.borderRadius + "; border:" + options.border + ";' type='text' required>" +
                    "<input placeholder='Street Address 2' style='border-radius:" + options.borderRadius + "; border:" + options.border + ";' type='text' required>" +
                    "<input placeholder='City' style='border-radius:" + options.borderRadius + "; border:" + options.border + ";' type='text' required>" +
                    "<input placeholder='State' style='border-radius:" + options.borderRadius + "; border:" + options.border + ";' type='text' required>" +
                    "<input placeholder='Postal/Zip' style='border-radius:" + options.borderRadius + "; border:" + options.border + ";' type='text' required>" +
                    "</div>";
          } else {
            body += "<div class='addressBlock'>" + 
                    "<input placeholder='Street Address' style='border-radius:" + options.borderRadius + "; border:" + options.border + ";' type='text'>" +
                    "<input placeholder='Street Address 2' style='border-radius:" + options.borderRadius + "; border:" + options.border + ";' type='text'>" +
                    "<input placeholder='City' style='border-radius:" + options.borderRadius + "; border:" + options.border + ";' type='text'>" +
                    "<input placeholder='State' style='border-radius:" + options.borderRadius + "; border:" + options.border + ";' type='text'>" +
                    "<input placeholder='Postal/Zip' style='border-radius:" + options.borderRadius + "; border:" + options.border + ";' type='text'>" +
                    "</div>";
          }
          body += "</div></div>";
        break;

        case 'phone':
          hide = options.hideQuestion;
          required = options.responseRequired;
          body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide' style='padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
          // If hideQuestion is false, concat the label tag
          if (!hide) {
            body += "<label style='color:" + options.color +";'>" + this.data.questions[i].label + "</label>";
          }

          // If required is true, concat the required star
          if (required) {
            body += "<span class='requiredStar'>*</span>";
            body += "<input type='tel' placeholder='" + options.placeholder + "' style='border:" + options.border + "; border-radius:" + options.borderRadius + ";' required>";
          } else {
            body += "<input type='tel' placeholder='" + options.placeholder + "' style='border:" + options.border + "; border-radius:" + options.borderRadius + ";'>";
          }
          body += "</div></div>";
        break;

        case 'select':
          hide = options.hideQuestion;
          required = options.responseRequired;
          body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide' style='padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
          // If hideQuestion is false, concat the label tag
          if (!hide) {
            body += "<label style='color:'" + options.color + ";'>" + this.data.questions[i].label + "</label>";
          }
          // If required is true, concat the required star
          if (required) {
            body += "<span class='requiredStar'>*</span>";
            body += "<select required><option value='' selected>Choose Option</option>";
            for (let i = 0; i < options.questionOptions.length; i++) {
              body += "<option value='" + options.questionOptions[i].name + "'>" + options.questionOptions[i].name + "</option>";
            }
            body += "</select>";
          } else {
            body += "<select><option value='' selected>Choose Option</option>";
            for (let i = 0; i < options.questionOptions.length; i++) {
              body += "<option value='" + options.questionOptions[i].name + "'>" + options.questionOptions[i].name + "</option>";
            }
            body += "</select>";
          }
          
          body += "</div></div>";
        break;

        case 'radio':
          hide = options.hideQuestion;
          required = options.responseRequired;
          let label = this.data.questions[i].label;
          body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide' style='padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
          // If hideQuestion is false, concat the label tag
          if (!hide) {
            body += "<label style='color:" + options.color + ";'>" + this.data.questions[i].label + "</label>"; 
          }
          // If required is true, concat the required star
          if (required) {
            body += "<span class='requiredStar'>*</span><div class='checkboxOuter'>";
            for (let i = 0; i < options.questionOptions.length; i++) {
              body += "<div class='checkboxInner'><input type='radio' name='" + label + "' value='" + options.questionOptions[i].name + "' required>" +
                      "<label>" + options.questionOptions[i].name + "</label></div>"
            }
          } else {
            body += "<div class='checkboxOuter'>";
            for (let i = 0; i < options.questionOptions.length; i++) {
              body += "<div class='checkboxInner'><input type='radio' name='" + label + "' value='" + options.questionOptions[i].name + "'>" +
                      "<label>" + options.questionOptions[i].name + "</label></div>"
            }
          }
          body += "</div></div></div>"
        break;

        case 'checkbox':
          hide = options.hideQuestion;
          required = options.responseRequired;
          label = this.data.questions[i].label;
          body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide' style='padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
          // If hideQuestion is false, concat the label tag
          if (!hide) {
            body += "<label style='color:" + options.color + ";'>" + this.data.questions[i].label + "</label>"; 
          }
          // If required is true, concat the required star
          if (required) {
            body += "<span class='requiredStar'>*</span><div class='checkboxOuter'>";
            for (let i = 0; i < options.questionOptions.length; i++) {
              body += "<div class='checkboxInner'><input type='checkbox' name='" + label + "' value='" + options.questionOptions[i].name + "' required>" +
                      "<label>" + options.questionOptions[i].name + "</label></div>"
            }
          } else {
            body += "<div class='checkboxOuter'>";
            for (let i = 0; i < options.questionOptions.length; i++) {
              body += "<div class='checkboxInner'><input type='checkbox' name='" + label + "' value='" + options.questionOptions[i].name + "'>" +
                      "<label>" + options.questionOptions[i].name + "</label></div>"
            }
          }
          body += "</div></div></div>"
        break;

        case 'grid':
          hide = options.hideQuestion;
          required = options.responseRequired;
          let gridType = options.gridType;
          body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide gridQuestion' style='padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
          // If hideQuestion is false, concat the label tag
          if (!hide) {
            body += "<label style='color:" + options.color + ";'>" + this.data.questions[i].label + "</label>"; 
          }
          // If required is true, concat the required star
          if (required) {
            body += "<span class='requiredStar'>*</span>";
            body += "<table class='gridTable' cellspacing='0' cellpadding='0'><tr><td class='gridTableHeaderRow' style='background-color:" + options.headerBackground +";'>&nbsp;</td>";
            if (gridType === 'radio') {
              // Add all the columns to the grid header row for each rating
              for (let i = 0; i < options.ratings.length; i++) {
                body += "<td class='gridTableHeaderRow' style='background-color:" + options.headerBackground + "; color:" + options.headerColor +";'>" + options.ratings[i].name + "</td>";
              }
              body += "</tr>";
              // Add all the rows/columns to the grid for each option
              for (let k = 0; k < options.questionOptions.length; k++) {
                body += "<tr class='gridTableRow'>";
                body += "<td style='background-color:" + options.leftColumnBackground + "; color:" + options.leftColumnColor +";'>" + options.questionOptions[k].name + "</td>";
                for (let j = 0; j < options.ratings.length; j++) {
                  body += "<td><input type='radio' name='" + options.questionOptions[k].name + "' required></td>";
                }
                body += "</tr>";
              }
            } else if (gridType === 'checkbox') {
              // Add all the columns to the grid header row for each rating
              for (let i = 0; i < options.ratings.length; i++) {
                body += "<td class='gridTableHeaderRow' style='background-color:" + options.headerBackground + "; color:" + options.headerColor +";'>" +options.ratings[i].name + "</td>";
              }
              body += "</tr>"
              // Ad all the rows/columns to the grid for each option
              for (let k = 0; k < options.questionOptions.length; k++) {
                body += "<tr class='gridTableRow'>";
                body += "<td style='background-color:" + options.leftColumnBackground + "; color:" + options.leftColumnColor +";'>" + options.questionOptions[k].name + "</td>";
                for (let j = 0; j < options.ratings.length; j++) {
                  body += "<td><input type='checkbox' name='" + options.questionOptions[k].name + "' required></td>";
                }
                body += "</tr>";
              }
            }
          } else {
            body += "<table class='gridTable' cellspacing='0' cellpadding='0'><tr><td class='gridTableHeaderRow' style='background-color:" + options.headerBackground +";'>&nbsp;</td>";
            if (gridType === 'radio') {
              // Add all the columns to the grid header row for each rating
              for (let i = 0; i < options.ratings.length; i++) {
                body += "<td class='gridTableHeaderRow' style='background-color:" + options.headerBackground + "; color:" + options.headerColor +";'>" +options.ratings[i].name + "</td>";
              }
              body += "</tr>";
              // Add all the rows/columns to the grid for each option
              for (let k = 0; k < options.questionOptions.length; k++) {
                body += "<tr class='gridTableRow'>";
                body += "<td style='background-color:" + options.leftColumnBackground + "; color:" + options.leftColumnColor +";'>" + options.questionOptions[k].name + "</td>";
                for (let j = 0; j < options.ratings.length; j++) {
                  body += "<td><input type='radio' name='" + options.questionOptions[k].name + "'></td>";
                }
                body += "</tr>";
              }
            } else if (gridType === 'checkbox') {
              // Add all the columns to the grid header row for each rating
              for (let i = 0; i < options.ratings.length; i++) {
                body += "<td class='gridTableHeaderRow' style='background-color:" + options.headerBackground + "; color:" + options.headerColor +";'>" +options.ratings[i].name + "</td>";
              }
              body += "</tr>"
              // Ad all the rows/columns to the grid for each option
              for (let k = 0; k < options.questionOptions.length; k++) {
                body += "<tr class='gridTableRow'>";
                body += "<td style='background-color:" + options.leftColumnBackground + "; color:" + options.leftColumnColor +";'>" + options.questionOptions[k].name + "</td>";
                for (let j = 0; j < options.ratings.length; j++) {
                  body += "<td><input type='checkbox' name='" + options.questionOptions[k].name + "'></td>";
                }
                body += "</tr>";
              }
            }
          }
          body += "</table></div></div>"
        break;

        case 'heading':
        options = this.data.questions[i];
        body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide' style='padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
        if (options.size === 'h1') {
          body += "<h1 style='color:" + options.color + ";'>" + options.label + "</h1>";
        } else if (options.size === 'h3') {
          body += "<h3 style='color:" + options.color + ";'>" + options.label + "</h3>";
        } else if (options.size === 'h5') {
          body += "<h5 style='color:" + options.color + ";'>" + options.label + "</h5>";
        }
        body += "</div></div>";
        break;

        case 'paragraph':
        options = this.data.questions[i];
        body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide' style='padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
        body += "<p style='font-size:" + options.size + "; color:" + options.color + ";'>" + options.label + "</p>"
        body += "</div></div>";
        break;

        case 'image':
        options = this.data.questions[i];
        body += "<div class='surveyQuestion'><div class='questionSide' style='justify-content:" + options.align + "; padding:" + options.verticalPadding + " " + options.sidePadding + ";'>";
        body += "<img src='" + options.src + "' width='" + options.width + "' height='auto'>"
        body += "</div></div>";
        break;

        case 'divider':
        options = this.data.questions[i];
        body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'>";
        body += "<div class='questionSide' style='padding:" + options.verticalPadding + " " + options.sidePadding + "; width:" + options.width + "; border-bottom-width:" + options.borderWidth +
                "; border-bottom-style:" + options.borderStyle + "; border-bottom-color:" + options.color + "'>";
        body += "</div></div>";
        break;

        case 'spacer':
        options = this.data.questions[i];
        body += "<div class='surveyQuestion'><div class='questionSide' style='height:" + options.height + ";'>&nbsp;</div></div>";
        break;

        case 'submit':
        options = this.data.questions[i];
        body += "<div class='surveyQuestion' style='justify-content:" + options.align + ";'><div class='questionSide'>";
        body += "<input type='submit' value='" + options.label + "' id='" + options.qid + "' style='background-color:" + options.backgroundColor + "; color:" + options.color + 
                "; margin:" + options.verticalMargin + " " + options.sideMargin + "; width:" + options.width +"; height:" + options.height + 
                "; border:" + options.border + "; border-radius:" + options.borderRadius + "'>";
        body += "</div></div>";
        styles += "#" + options.qid + ":hover {background-color:" + options.hoverBackground +" !important; color:" + options.hoverColor +" !important}";
        break;
      }
    }
    styles += "</style>";
    body += "</form>";
    this.exportedCode = styles + body;
  }
}
