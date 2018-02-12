import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterDialogComponent } from './theater-dialog.component';

describe('TheaterDialogComponent', () => {
  let component: TheaterDialogComponent;
  let fixture: ComponentFixture<TheaterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
