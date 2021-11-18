export interface EndPoint {
    _id: string;
    name: string;
    url: string;
    snapshots: Snapshot[];
    times: number[];
}

export interface Snapshot {
  time: number;
  createdAt: string;
}