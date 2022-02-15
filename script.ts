//******************[Dumb Examples]*******************/
let userName: string = "ren";
let character: boolean = true;

userName += "-chon"
console.log(userName)

let epCount: number = 12;
let RegEx: RegExp = /non/non;
let names: string[] = userName.split(" ");
let seasonsEpNumber: Array<number> = [12,12,1,12,1];
//****************************************************/

// interfaces
interface aCharacter{
    fullName: string;
    age?: number // ? optional = number || undefined
}

const characterDetails:aCharacter = {
    fullName: "ren-chon",
    age: undefined,
}


// Records
const ids:Record<number,string> = {
    10: "a",
    20: "b",
}
ids[30] = "c"
// Conditional && Expressions
        // compoaring a string to a string
if (ids[30] === "d") {
    null
}
        //:number
for (let i = 0; i < 10; i++){
    console.log(i);
}
                        //:number
[12,12,1,12].forEach((loop)=> console.log(loop));
        //:number[]               //:number
const result = [12,12,1,12].map((map)=>map*2)
          //:string[]              //:number
const results = [12,12,1,12].map((map)=>`${map*2}`)
                                             //:number
const results2: number[] = [12,12,1,12].map((map)=>map*2)