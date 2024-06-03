import http from "k6/http";
import { check } from "k6";
import { BASE_URL } from "./config.js";

export const options = {
  vus: 10,
  duration: "30s",
};

export default function () {
  const response = http.get(BASE_URL);
  check(response, { "Status code is 200": (res) => res.status === 200 });
}
