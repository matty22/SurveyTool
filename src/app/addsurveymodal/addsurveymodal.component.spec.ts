import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsurveymodalComponent } from './addsurveymodal.component';

describe('AddsurveymodalComponent', () => {
  let component: AddsurveymodalComponent;
  let fixture: ComponentFixture<AddsurveymodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsurveymodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsurveymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
