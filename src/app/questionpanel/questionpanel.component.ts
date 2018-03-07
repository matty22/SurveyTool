import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { SurveylistService } from '../surveylist.service';
import { CodeExportComponent } from '../code-export/code-export.component';

@Component({
  selector: 'app-questionpanel',
  templateUrl: './questionpanel.component.html',
  styleUrls: ['./questionpanel.component.css']
})
export class QuestionpanelComponent implements OnInit, OnChanges {

  // Listener for event emitter fired when user clicks on a survey in the left column
  @Input() survey: any;
  showIcons: boolean = true;
  editQuestionType: string;
  questionIndex: number;
  questionToEdit:any = {
    label: '', 
    type: '', 
    options: {
      hideQuestion: '', 
      responseRequired: '', 
      padding: '', 
      color: '', 
      align: '', 
      questionOptions: [],
      ratings: []
    }
  };
  constructor(private surveylistService: SurveylistService,
              public dialog: MatDialog) {

  }

  ngOnInit() {
    
  }

  ngOnChanges() {
  }

  // Adjust style settings for individual question
  adjustQuestionSettings(question) {
    this.questionIndex = this.survey.questions.indexOf(question);
    this.questionToEdit = question;
    this.editQuestionType = question.type;
  }

  // Add question to survey
  addQuestionToSurvey($event) {
    this.surveylistService.addQuestionToSurvey(this.survey.id, $event.dragData);
  }

  // Delete a question from a survey
  deleteQuestion(survey, question) {
      this.surveylistService.deleteQuestion(survey, question);
  }

  // Add a question option to a question type that has options - select, radio, checkbox, grid
  addQuestionOption() {
    this.questionToEdit.options.questionOptions.push({name: " "});
  }

  // Remove option from a question type that has options - select, radio, checkbox, grid
  removeQuestionOption(option) {
    let index = this.questionToEdit.options.questionOptions.indexOf(option);
    this.questionToEdit.options.questionOptions.splice(index, 1);
  }

  // Add a rating to a grid type question
  addRatingOption() {
    this.questionToEdit.options.ratings.push({name: " "});
  }

  // Remove ratings from grid type questions
  removeRatingOption(rating) {
    let index = this.questionToEdit.options.ratings.indexOf(rating);
    this.questionToEdit.options.ratings.splice(index, 1);
  }

  // This exports the HTML and necessary CSS for the survey to display as expected
  exportHTML() {
    let dialogRef = this.dialog.open(CodeExportComponent, {data: this.survey, width: '500px', height: '400px'});
  }
}
