import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriumDialogComponent } from './auditorium-dialog.component';

describe('AuditoriumDialogComponent', () => {
  let component: AuditoriumDialogComponent;
  let fixture: ComponentFixture<AuditoriumDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriumDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
