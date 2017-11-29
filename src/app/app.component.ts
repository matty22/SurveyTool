import { Component } from '@angular/core';
import { QuestionpanelComponent  } from './questionpanel/questionpanel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  survey;

  // Receive message from clicking on a survey in the left hand list of surveys.
  // Passing this down to the editor side of the app to make changes
  receiveMessage($event) {
    this.survey = $event;
  }

}
