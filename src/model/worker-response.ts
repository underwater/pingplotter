export interface WorkerResponse<T> {
    type: string;
    body: T;
}