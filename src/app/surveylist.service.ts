import { Injectable } from '@angular/core';

@Injectable()
export class SurveylistService {

  constructor() { }

  // Fake data for a set of existing surveys
  listOfSurveys = [
      {id: '0', name: "Survey 1", settings: {width: '300', background: '#ffffff', font: 'Arial', fontSize: '14', resultsEmail: 'mattl@tailoredmail.com', padding: '20px 20px 20px 20px', border: 'none', borderRadius: '5px'}, questions: [{ qid: 0, label: "Label 1a", type: "select", options: {hideQuestion: false, responseRequired: false, padding: '0px 0px 0px 0px', color: '#000000', align: 'left', questionOptions: ''}}, {qid: 1, label: "Label 1b", type: "text", options: {hideQuestion: false, responseRequired: false, padding: '0px 0px 0px 0px', color: '#000000', align: 'left', borderRadius: '10px', border: '', placeholder: ''}}, {qid: 2, label: "Label 1b", type: "text", options: {hideQuestion: false, responseRequired: false, padding: '0px 0px 0px 0px', color: '#000000', align: 'left', borderRadius: '0px', border: '', placeholder: ''}}, {qid: 3, label: "Label 1b", type: "textarea", options: {hideQuestion: false, responseRequired: false, padding: '', color: '#000000', align: 'left', borderRadius: '5px', border: '', placeholder: ''}}]}, 
      {id: '1', name: "Survey 2", settings: {width: '300', background: '#ffffff', font: 'Arial', fontSize: '14', resultsEmail: 'mattl@tailoredmail.com', padding: '20px 20px 20px 20px', border: 'none', borderRadius: '10px'}, questions: [{qid: 0, label: "Label 2a", type: "text", options: {hideQuestion: false, responseRequired: false, padding: '0px 10px 0px 20px', color: '#000000', align: 'left', borderRadius: '0px', border: '', placeholder: ''}}, {qid: 1, label: "Label 2b", type: "radio", options: {hideQuestion: false, responseRequired: false, padding: '10px 0px 10px 0px', color: '#000000', align: 'left', questionOptions: ''}}]}, 
      {id: '2', name: "Survey 3", settings: {width: '300', background: '#ffffff', font: 'Arial', fontSize: '14', resultsEmail: 'mattl@tailoredmail.com', padding: '20px 20px 20px 20px', border: 'none', borderRadius: '20px'}, questions: [{qid: 0, label: "Label 3a", type: "text", options: {hideQuestion: false, responseRequired: false, padding: '30px 0px 30px 0px', color: '#000000', align: 'left', borderRadius: '5px', border: '', placeholder: ''}}, {qid: 1, label: "Label 3b", type: "radio", options: {hideQuestion: false, responseRequired: false, padding: '0px 20px 0px 20px', color: '#000000', align: 'left', questionOptions: ''}}]}
    ];


  // Add a new survey when user clicks the CREATE NEW SURVEY button
  createNewSurvey(name, width) {
    let id = Math.random().toString(36).slice(2);
    this.listOfSurveys.push({id: id, name: name, settings: {width: width, background: '#ffffff', font: 'Arial', fontSize: '14', resultsEmail: 'mattl@tailoredmail.com', padding: '20px 20px 20px 20px', border: 'none', borderRadius: ''}, questions: []})
  }

  // Simulating server GET request for a set of existing surveys
  getSurveysList() {
    return this.listOfSurveys;
  }

  // Function to handle when user changes the settings of a survey
  saveSurveySettings(unchangedSurvey, changedSurvey) {
    let index = this.listOfSurveys.indexOf(unchangedSurvey);
    this.listOfSurveys[index] = changedSurvey;
  }

  // Delete survey from survey list
  deleteSurvey(survey) {
    let surveyToDelete = this.listOfSurveys.indexOf(survey);
    this.listOfSurveys.splice(surveyToDelete, 1);
  }

  // Add a new question to an existing survey
  addQuestionToSurvey(id, question) {
    question.qid = Math.random().toString(36).slice(2);
    this.listOfSurveys[id].questions.push(question);
  }

  // Delete a question from a survey
  deleteQuestion(survey, question) {
    let whichSurvey = this.listOfSurveys.indexOf(survey);
    let questionToDelete = this.listOfSurveys[whichSurvey].questions.indexOf(question);
    this.listOfSurveys[whichSurvey].questions.splice(questionToDelete, 1);
  }
}
