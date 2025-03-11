/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    // we use the string method replace with a regex to find all capital letters and add a space before them
    //another way to do this is to use the split method and iterate over the string and add a space before the capital letter
    return string.replace(/([A-Z])/g, ' $1');
    return "";
  }