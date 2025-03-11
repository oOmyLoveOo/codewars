/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

function ipToNum(ip) {
    const octets = ip.split('.').map(Number);  // Convert the IP to an array of numbers
    // Return the number representation of the IP, using the formula:
    // octet1 * 256^3 + octet2 * 256^2 + octet3 * 256^1 + octet4 * 256^0
    return (octets[0] * Math.pow(256, 3)) + 
           (octets[1] * Math.pow(256, 2)) + 
           (octets[2] * Math.pow(256, 1)) + 
           (octets[3] * Math.pow(256, 0));
}

  function ipsBetween(start, end) {
    let startNum = ipToNum(start);
    let endNum = ipToNum(end);
    // Validate that the start IP is less than the end IP in case they are not in order
    if (startNum > endNum) {
      [startNum, endNum] = [endNum, startNum];
    }
    // Return the difference between the two IPs
    return endNum - startNum;
}

// example of usage
let start = prompt("Enter the start IP address: ");
let end = prompt("Enter the end IP address: ");
alert(ipsBetween(start, end));