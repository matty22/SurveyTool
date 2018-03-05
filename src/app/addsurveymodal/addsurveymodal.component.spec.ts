import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AddsurveymodalComponent } from './addsurveymodal.component';

describe('AddsurveymodalComponent', () => {
  let component: AddsurveymodalComponent;
  let fixture: ComponentFixture<AddsurveymodalComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [MatDialog, MatDialogRef, MAT_DIALOG_DATA],
      declarations: [ AddsurveymodalComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsurveymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
