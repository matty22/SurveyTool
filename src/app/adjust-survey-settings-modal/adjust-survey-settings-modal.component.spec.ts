import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustSurveySettingsModalComponent } from './adjust-survey-settings-modal.component';

describe('AdjustSurveySettingsModalComponent', () => {
  let component: AdjustSurveySettingsModalComponent;
  let fixture: ComponentFixture<AdjustSurveySettingsModalComponent>;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
