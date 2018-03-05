import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AdjustSurveySettingsModalComponent } from './adjust-survey-settings-modal.component';

describe('AdjustSurveySettingsModalComponent', () => {
  let component: AdjustSurveySettingsModalComponent;
  let fixture: ComponentFixture<AdjustSurveySettingsModalComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustSurveySettingsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustSurveySettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
