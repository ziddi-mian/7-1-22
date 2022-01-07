// program 1
// Write a js program to find length of a string.

function lengthOfString() {
    var string = "my name is usama";
    var lengthString = string.length;
    console.log("Length Of String Is ", lengthString);
  }
  lengthOfString();


   // program 2
// Write a js program to copy one string to another string.
function copyString() {
    var String = "Muhammad Usama";
    var copy = "";
    var lengthof = String.length;
    lengthof = lengthof / 2;
    var first = String.slice(0, lengthof);
    var second = String.slice(lengthof + 1, String.length);
    copy = first + second;
    console.log("Copy Of String Is:", copy);
  }
  copyString();



   // program 3
// Write a js program to concatenate two strings.
function concate() {
    var string1 = "Muhammad";
    var string2 = " Usama Azam";
    var concate = string1.concat(string2);
    console.log("After concating:", concate);
  }
  concate();