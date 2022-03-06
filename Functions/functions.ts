export default function Numbers(number1:number, number2:number):number {
    return number1+number2;
}

// function using 'const'              Optional? param    has default value  //returns string
export const stringConc = (str1:string, str2?:string, str3:string=", get it?"):string => `your username is ${str1}${str2}`


//union type, kinda like "or || in javascript" any of the two types are ok 
export const uniontype = (title:string, param:string|number):string =>{
    return `${title} ${param}`;
}

export const printf = (title:string, param:string|number):void =>{
     console.log(format(title, param));
    
}


// function returns a promise
export const iWillFulfill = (url:string): Promise<string> =>{
    return Promise.resolve(`data from ${url}`);
}

// function with REST params            //[] of strings
function introduce(salutation:string, ...names:string[]):string {
    return `${salutation} ${names.join(" ")}`
}
// function with object
export function getName(user:{first:string, last:string}):string {
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}` // if theres no value, show first and last instead of undefined, undefined
}