import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenReportComponent } from './screen-report.component';

describe('ScreenReportComponent', () => {
  let component: ScreenReportComponent;
  let fixture: ComponentFixture<ScreenReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
