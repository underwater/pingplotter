export interface EndPoint {
    _id: string;
    name: string;
    url: string;
    snapshots: Snapshot[];
}

export interface Snapshot {
  time: number;
  createdAt: string;
}