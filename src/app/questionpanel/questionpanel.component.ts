import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { SurveylistService } from '../surveylist.service';

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
  tempQuestionOptions: string[] = [" "];
  tempRatings: string[] = [" "];
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
  constructor(private surveylistService: SurveylistService) {

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

  addQuestionToSurvey($event) {
    this.surveylistService.addQuestionToSurvey(this.survey.id, $event.dragData);
  }

  // Delete a question from a survey
  deleteQuestion(survey, question) {
      this.surveylistService.deleteQuestion(survey, question);
  }

  // This is a temporary hacky solution to fix my problem with adding radio, checkbox, and grid question options
  addQuestionOption() {
    this.tempQuestionOptions.push(" ");
  }

  // This is a temporary hacky solution to fix my problem with adding grid rating options
  addRatingOption() {
    this.tempRatings.push(" ");
  }

  // Temporary method for testing data binding
  saveQuestionSettings() {
    this.surveylistService.saveQuestionSettings(this.survey, this.questionIndex, this.questionToEdit);
  }

  // This exports the HTML and necessary CSS for the survey to display as expected
  exportHTML() {
    console.log(this.survey);
  }
}
