import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { SurveylistService } from '../surveylist.service';

@Component({
  selector: 'app-adjust-survey-settings-modal',
  templateUrl: './adjust-survey-settings-modal.component.html',
  styleUrls: ['./adjust-survey-settings-modal.component.css']
})
export class AdjustSurveySettingsModalComponent implements OnInit {

  backgroundColor: string;
  border: string;
  borderRadius: string;
  font: string;
  fontSize: string;
  padding: string;
  resultsEmail: string;
  width: string;
  
  constructor(private surveylistService: SurveylistService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  // Take data injected into the modal and set value of some local variables
  ngOnInit() {
    let surveyToEdit = this.data;
    this.backgroundColor = surveyToEdit.settings.background;
    this.border = surveyToEdit.settings.border;
    this.borderRadius = surveyToEdit.settings.borderRadius;
    this.font = surveyToEdit.settings.font;
    this.fontSize = surveyToEdit.settings.fontSize;
    this.padding = surveyToEdit.settings.padding;
    this.resultsEmail = surveyToEdit.settings.resultsEmail;
    this.width = surveyToEdit.settings.width;
  }

  saveSurveySettings() {
    let unchangedSurvey = this.data;
    this.data.settings.background = this.backgroundColor;
    this.data.settings.border = this.border;
    this.data.settings.borderRadius = this.borderRadius;
    this.data.settings.font = this.font;
    this.data.settings.fontSize = this.fontSize;
    this.data.settings.padding = this.padding;
    this.data.settings.resultsEmail = this.resultsEmail;
    this.data.settings.width = this.width;
    let changedSurvey = this.data;
    this.surveylistService.saveSurveySettings(unchangedSurvey, changedSurvey);
  }

}
