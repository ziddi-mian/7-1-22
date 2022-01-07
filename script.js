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


   // program 7
// Write a js program to toggle case of each character of a string.
function togalcas() {
    var string1 = "Muhammad UsaMA";
    var alpha = "";
    var z = "";
    var togal;
    for (let x = 0; x < string1.length; x++) {
      alpha = string1.charAt(x);
      if (alpha >= "a") {
        var y = alpha.toUpperCase();
        z = z.concat(y);
      } else {
        var y = alpha.toLowerCase();
        z = z.concat(y);
      }
    }
    console.log("After Togal: ", z);
  }
  togalcas();



  // program 8
// a js program to toggle case of each character of a string.
function check() {
    var string = "pakistan123@@usama";
    var alpha = (digit = special = 0);
    for (let x = 0; x < string.length; x++) {
      var chec = string.charAt(x);
      if (chec >= "a" || chec >= "A") {
        alpha++;
      } else if (chec >= 0 || chec <= 0) {
        digit++;
      } else {
        special++;
      }
    }
  
    console.log(
      digit,
      "No Of Digits",
      alpha,
      "No Of Alphabats ",
      special,
      "No Of Special Characters"
    );
  }
  check();



  // program 9
// Write a js program to count total number of vowels and consonants in a string.
function vowelNumbers() {
    var string = " pakistan";
    var vowl = (consonant = 0);
    for (let x = 0; x < string.length; x++) {
      var char = string.charAt(x);
      if (
        char == "a" ||
        char == "A" ||
        char == "e" ||
        char == "E" ||
        char == "i" ||
        char == "I" ||
        char == "o" ||
        char == "O" ||
        char == "u" ||
        char == "U"
      ) {
        vowl++;
      } else if (char >= "a" || char >= "A") {
        consonant++;
      }
    }
    console.log("Total Numbers Of Vowel In The String Is:", vowl);
    console.log("Total Numbers Of Consonant In The String Is:", consonant);
  }
  vowelNumbers();



  // program 10
// Write a js program to count total number of words in a string

function words() {
    var string = "That Is Called Logic @";
    var pre = 0;
    var word = 1;
    for (let x = 0; x < string.length; x++) {
      var char = string.charAt(x);
      var next = string.charAt(x + 1);
      var len = string.length;
      if (len == 0) {
        console.log("String is EMpty");
      } else if ((len = !0)) {
        if (char == " ") {
        } else {
          if (next == " " || x + 1 == string.length) {
            pre = word;
            word++;
          }
        }
      }
    }
    console.log("total Words", pre);
  }
  words();



  
  // program 11
// Write a js program to find reverse of a string.

function reverse() {
    var string = "Usama";
    var revers = "";
    var sav;
    for (let x = string.length; x >= 0; x--) {
      sav = string.charAt(x);
      revers = revers.concat(sav);
    }
    console.log("After Reverse The String:", revers);
  }
  reverse();



   // program 12
// Write a js program to check whether a string is palindrome or not.

function palindrom() {
    var string = "Pakistan";
    var check = 0;
    var rev = "";
    var sav;
    for (let x = string.length; x >= 0; x--) {
      sav = string.charAt(x);
      rev = rev.concat(sav);
    }
    for (let x = 0; x < string.length; x++) {
      if (string.charAt(x) == rev.charAt(x)) {
        check++;
      }
    }
    if (check == string.length) {
      console.log("Given String Is Palindrom:String=", string, ", Reverse=", rev);
    } else {
      console.log(
        "Given String Is Not Palindrom:String=",
        string,
        ", Reverse=",
        rev
      );
    }
  }
  palindrom();
