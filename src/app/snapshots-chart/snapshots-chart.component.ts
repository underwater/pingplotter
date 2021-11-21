import { Component, Input, OnInit } from '@angular/core';
import { EndPoint } from 'src/model/endpoint';

@Component({
  selector: 'snapshots-chart',
  templateUrl: './snapshots-chart.component.html',
  styleUrls: ['./snapshots-chart.component.scss']
})
export class SnapshotsChartComponent implements OnInit {

  @Input()
  onEndPointChanged() {
    if (this.endpoint && this.endpoint.snapshots) {
      let snapshots = this.endpoint.snapshots;
      if (snapshots.length > 6) {
        snapshots = snapshots.slice(snapshots.length - 7, -1);
      }
      this.times = snapshots.map(s => s.time);
      this.labels = snapshots.map(s => s.createdAt);
    }
  }

  times: number[] = [];
  labels: string[] = [];

  private _endpoint: EndPoint = {} as EndPoint;

  @Input()
  get endpoint(): EndPoint {
    return this._endpoint;
  }

  set endpoint(value) {
    this._endpoint = value;
    this.onEndPointChanged();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
