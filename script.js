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



   // program 3
// Write a js program to concatenate two strings.
function concate() {
    var string1 = "Muhammad";
    var string2 = " Usama Azam";
    var concate = string1.concat(string2);
    console.log("After concating:", concate);
  }
  concate();

  

  // program 4
// Write a js program to compare two strings.
function compare() {
    var string1 = "usama azam";
    var string2 = "usama azam";
    var length1 = string1.length;
    var length2 = string2.length;
    var check = 0;
    if (length1 === length2) {
      for (let x = 0; x < length1; x++) {
        if (string1.charAt(x) == string2.charAt(x)) {
          check++;
        }
      }
    }
    if (check == length1) {
      console.log("Strings Are Equal");
    } else {
      console.log("Strings Are Not Equal");
    }
  }
  compare();



  // program 5
// Write a js program to convert lowercase string to uppercase.
function uppercase() {
    var string1 = "usamA azam";
    var upper = string1.toUpperCase();
    console.log("After Conversion Into Uppercase: ", upper);
  }
  uppercase();


   // program 6
// Write a js program to convert uppercase string to lowercase.
function lowercase() {
    var string1 = "Muhammad UsaMA";
    var lower = string1.toLowerCase();
    console.log("After Conversion Into Uppercase: ", lower);
  }
  lowercase();