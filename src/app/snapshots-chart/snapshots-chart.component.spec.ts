import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotsChartComponent } from './snapshots-chart.component';

describe('SnapshotsChartComponent', () => {
  let component: SnapshotsChartComponent;
  let fixture: ComponentFixture<SnapshotsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapshotsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
