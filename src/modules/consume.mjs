// node --experimental-modules src/modules/consume.mjs
import {
    square
} from "./logic.mjs";
let x = 100;
console.log(`Square of ${x} =  ${square(x)}`);