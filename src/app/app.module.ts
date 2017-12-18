// Angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule, MatDialogModule, 
         MatCardModule, MatListModule, MatInputModule, MatSidenavModule,
         MatSelectModule, MatButtonToggleModule, MatSlideToggleModule,
        MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// External packages
import { DndModule } from 'ng2-dnd';

// Components
import { QuestionpanelComponent } from './questionpanel/questionpanel.component';
import { SurveylistComponent } from './surveylist/surveylist.component';
import { AddsurveymodalComponent } from './addsurveymodal/addsurveymodal.component';

// Services
import { SurveylistService } from './surveylist.service';
import { AdjustSurveySettingsModalComponent } from './adjust-survey-settings-modal/adjust-survey-settings-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionpanelComponent,
    SurveylistComponent,
    AddsurveymodalComponent,
    AdjustSurveySettingsModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatTabsModule,
    DndModule.forRoot()
  ],
  providers: [
    SurveylistService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddsurveymodalComponent,
    AdjustSurveySettingsModalComponent
  ]
})
export class AppModule { }
