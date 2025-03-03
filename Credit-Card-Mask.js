/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

 "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/

// return masked string
function maskify(cc) {
    if (cc.length > 4){
        // We split it into an array, so we can assess each character
        // We then map over the array, and check if the index is less than the length of the array minus 4
        // If it is, we replace the character with a #
        // If it isn't, we leave the character as is
        // We then join the array back into a string
      return cc.split('').map((val, index) => index < cc.length - 4 ? "#" : val).join('');
    }
    return cc;
  }