/* eslint-disable no-console */
import { uniq } from "lodash";
import {
  apiKey as myApiKey, url, sayHi, oldAge, dog,
} from "./src/config";
import User, { createUrl, gravatar } from "./src/user";

console.log(myApiKey, url, oldAge, dog);
sayHi("Ren");

const ages = [1, 1, 4, 52, 12, 4];
console.log(uniq(ages));

const rendlik = new User("Ren Dlik", "rendlik@gmail.com", "wesbos.com");
console.log(rendlik);
const profile = createUrl(rendlik.name);
console.log(profile);
const profilePic = gravatar(rendlik.email);
console.log(profilePic);
