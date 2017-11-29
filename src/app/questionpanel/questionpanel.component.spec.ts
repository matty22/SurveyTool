import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionpanelComponent } from './questionpanel.component';

describe('QuestionpanelComponent', () => {
  let component: QuestionpanelComponent;
  let fixture: ComponentFixture<QuestionpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
