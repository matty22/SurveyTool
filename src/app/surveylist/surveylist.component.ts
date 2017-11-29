import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AddsurveymodalComponent } from '../addsurveymodal/addsurveymodal.component';
import { AdjustSurveySettingsModalComponent } from '../adjust-survey-settings-modal/adjust-survey-settings-modal.component';
import { SurveylistService } from '../surveylist.service';

@Component({
  selector: 'app-surveylist',
  templateUrl: './surveylist.component.html',
  styleUrls: ['./surveylist.component.css']
})
export class SurveylistComponent implements OnInit {

  // Variable declarations
  surveys: Array<Object>;

  constructor(public dialog: MatDialog,
              private surveylistService: SurveylistService) { }

  // Event emitter for passing up which survey the user clicks on in the left column
  @Output() messageEvent = new EventEmitter<Object>();

  // Upon component init, grab the list of existing surveys from the survey list service
  ngOnInit() {
    this.surveys = this.surveylistService.getSurveysList()
  }

  // Open the new survey form dialog when user clicks on the CREATE NEW SURVEY  button
  newSurveyDialog() {
    let dialogRef = this.dialog.open(AddsurveymodalComponent, {width: '300px', height: '220px'});
  }

  // Emit survey selection event
  chooseSurveyToEdit(survey) {
    this.messageEvent.emit(survey);
  }
 
  adjustSurveySettings(survey) {
    let dialogRef = this.dialog.open(AdjustSurveySettingsModalComponent, {data: survey, width: '400px', height: '400px'});
  }

  // Delete survey and then emit that the currently selected
  // survey is null so that the editor for deleted survey is hidden
  deleteSurvey(survey) {
    this.surveylistService.deleteSurvey(survey);
    this.messageEvent.emit(null);
  }

}
