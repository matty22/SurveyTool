import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExportComponent } from './code-export.component';

describe('CodeExportComponent', () => {
  let component: CodeExportComponent;
  let fixture: ComponentFixture<CodeExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
