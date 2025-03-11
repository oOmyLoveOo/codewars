function digitalRoot(n) {
    // condition to check if n is greater than 10
    if(n >= 10){
    // reduce the number to a single digit
      n = reduce(n);
    // call the digitalRoot function again with the new number until it is less than 10
      return digitalRoot(n);
    }
    return n;
  }
  
  function reduce(n){
    /* split the number into an array of digits
    then we use the reduce method to add all the digits together, 
    sum is the accumulator, digit is the current value
    we convert the digit to a number, so we can add it to the sum*/
    return n.toString().split("").reduce((sum, digit) => sum + Number(digit), 0);
  }
  