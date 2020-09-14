/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
export const apiKey = "abc123";
export const url = "http:/wesbos.com";

export function sayHi(name) {
  console.log(`Hello ${name}`);
}

const age = 100;
const dog = "ham";

export { age as oldAge, dog };

// export default apiKey; default export, can be imported with any name you want,
// only one default export but multiple named exports
