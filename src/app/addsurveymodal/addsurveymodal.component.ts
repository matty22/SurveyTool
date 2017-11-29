import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { SurveylistService } from '../surveylist.service';

@Component({
  selector: 'app-addsurveymodal',
  templateUrl: './addsurveymodal.component.html',
  styleUrls: ['./addsurveymodal.component.css']
})
export class AddsurveymodalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddsurveymodalComponent>,
              public surveyListService: SurveylistService) { }

  newSurveyName: string;
  newSurveyWidth: number;

  ngOnInit() {
    
  }

  closeDialog() {
    this.surveyListService.createNewSurvey(this.newSurveyName, this.newSurveyWidth);
    this.dialogRef.close();
  }

}
