/// <reference lib="webworker" />
import { EndPoint } from '../model/endpoint'

const INTERVAL = 5000;

console.log("ENDPOINTS WORKER RUNNING");

/**
 * data -> { type: "", body: {} }
 */
addEventListener('message', ({ data }) => {
    if (data && data.type == "Endpoints.GetAll") {
        setInterval(async() => {
            let endpoints = await getAll();
            postMessage({
                type: "Endpoints.Received",
                body: endpoints
            });
        }, INTERVAL);
    }
});

async function getAll(): Promise<EndPoint> {
  let URL = `http://localhost:3000/api/endpoints`;
  let res = await fetch(URL);
  let data = await res.json();
  return data;
}
