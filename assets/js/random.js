import prof from './massivs/profession.js'
import { diseas } from './massivs/disease.js';

function Random(max) {
    return Math.floor(Math.random()*max)
}

if (Random(5)==4) {
    console.log(diseas[Random(diseas.length)]);
} else {
console.log("боги милосердны😂");
}