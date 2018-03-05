import { FormsModule } from '@angular/forms';
import { async, TestBed, inject } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CodeExportComponent } from './code-export.component';

describe('Code Export Component', () => {
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodeExportComponent],
      imports: [
        FormsModule,
        MatDialogModule,
        NoopAnimationsModule
      ]
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [CodeExportComponent]
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(inject([MatDialog],
    (d: MatDialog) => {
      dialog = d;
    })
  );

  it('should open a dialog with a component', () => {
    const dialogRef = dialog.open(CodeExportComponent, {
      data: { param: '1' }
    });

    // verify
    expect(dialogRef.componentInstance instanceof CodeExportComponent).toBeTruthy();
  });
});