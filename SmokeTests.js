import http from "k6/http";
import { check } from "k6";
import { BASE_URL } from "./config.js";

export const options = {
  vus: 3,
  duration: "20s",
};

const pages = [
  "contacts.php",
  "news.php",
  "pi.php?decimals=3",
  "flip_coin.php",
  "browser.php",
];

export default function () {
  for (const page of pages) {
    const response = http.get(http.url`${BASE_URL}/${page}`);
    check(response, {
      "status code is 200": (res) => res.status === 200,
    });
  }
}
