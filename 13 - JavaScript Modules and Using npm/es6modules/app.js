/* eslint-disable no-console */
import { uniq } from "lodash";
import {
  apiKey as myApiKey, url, sayHi, oldAge, dog,
} from "./src/config";

console.log(myApiKey, url, oldAge, dog);
sayHi("Ren");

const ages = [1, 1, 4, 52, 12, 4];
console.log(uniq(ages));
