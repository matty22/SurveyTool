import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SurveylistComponent } from './surveylist.component';

describe('SurveylistComponent', () => {
  let component: SurveylistComponent;
  let fixture: ComponentFixture<SurveylistComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
