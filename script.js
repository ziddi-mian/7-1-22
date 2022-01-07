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




  // program 13
// Write a js program to reverse order of words in a given string

function wordReverse() {
    var string = "i love my country";
    var concate = "";
    var word = "";
    var y = string.length;
    for (let x = string.length - 1; x >= 0; x--) {
      if (string.charAt(x) == " ") {
        word = string.slice(x + 1, y);
        concate = concate.concat(word);
        concate = concate.concat(" ");
        y = x;
      }
    }
    if (y >= 0) {
      word = string.slice(0, y);
      concate = concate.concat(word);
    }
  
    console.log("Reverse Of String Words:", concate);
  }
  wordReverse();



   // program 14
// Write a js program to find first occurrence of a character in a given string

function Occurrenc() {
    var string = "I Love Pakistan";
    var occur;
    for (let x = 0; x < string.length; x++) {
      if (x == 0 && string.charAt(x) != " ") {
        occur = string.charAt(x);
        break;
      } else if (string.charAt(x) == " " && x + 1 < string.length) {
        if (string.charAt(x + 1) != " ") {
          occur = string.charAt(x + 1);
          break;
        }
      }
    }
    console.log("first occurrence Character:", occur);
  }
  Occurrenc();
  



   // program 14(Extra Logic)
  // Write a js program to find first occurrence of a character of word in a given string
  
  function Occurrence() {
    var string = "I Love Pakistan";
    var occur = [];
    for (let x = 0; x < string.length; x++) {
      if (x == 0 && string.charAt(x) != " ") {
        occur.push(string.charAt(x));
      } else if (string.charAt(x) == " ") {
        if (string.charAt(x + 1) != " " && x + 1 < string.length) {
          occur.push(string.charAt(x + 1));
        }
      }
    }
    console.log(
      "first occurrence of a character in a given word of string:",
      occur
    );
  }
  Occurrence();





   // program 15
// Write a js program to find last occurrence of a character in a given string.

function lastOccure() {
    string = " i Love  Pakistan";
    if (string.length == 0) {
      console.log("String Is Empty:");
    } else if (string.charAt(string.length - 1) != " ") {
      console.log(
        "last occurrence of a character in a given string is:",
        string.charAt(string.length - 1)
      );
    } else {
      for (let x = string.length - 1; x >= 0; x--) {
        if (string.charAt(x) != " ") {
          console.log(
            "last occurrence of a character in a given string is:",
            string.charAt(x)
          );
          break;
        } else if (x == 0) {
          console.log("String Is Empty:");
        }
      }
    }
  }
  lastOccure();



  // program 16
// Write a js program to search all occurrences of a character in given string.

function Search() {
    var string = "i Love Pakistan is my country o";
    var checke = "Pa";
    var chelen = checke.length;
    var count = 0;
    if (string.length == 0) {
      console.log("String Is Empty.");
    } else {
      for (var x = 0; x < string.length; x++) {
        var comp = string.slice(x, x + chelen);
        if (comp == checke) {
          count++;
        }
      }
    }
    console.log("Given Characters Matches:", count, " Times In Given String");
  }
  Search();




   // program 17
// Write a js program to count occurrences of a character in given string
function allOccure() {
    var string = "i Love Pakistan is my country o";
    var checke = "i";
    var count = 0;
    if (string.length == 0) {
      console.log("String Is Empty.");
    } else {
      for (var x = 0; x < string.length; x++) {
        if (string.charAt(x) == checke) {
          count++;
        }
      }
    }
    console.log("Given Characters Accour:", count, " Times In Given String");
  }
  allOccure();




   // program 18
// Write a js program to find highest frequency character in a string.
function highfrequency() {
    var string = "i Love Pakistan.pakistan is my county";
    var frearray = [];
    var fre, time, pre;
    var max = 0;
    var count = 0;
    for (let x = 0; x < string.length; x++) {
      if (string.charAt(x) != " ") {
        for (let y = 0; y < string.length; y++) {
          if (string.charAt(x) == string.charAt(y)) {
            count++;
          }
        }
        if (max < count) {
          time = count;
          frearray.push(string.charAt(x));
          pre = max;
          max = count;
        } else if (max == count) {
          frearray.push(string.charAt(x));
        }
  
        count = 0;
      }
    }
    for (let z = 0; z < frearray.length; z++) {
      for (let x = 1; x < frearray.length; x++) {
        if (frearray[z] == frearray[x]) {
          frearray.splice(x, 1);
        }
      }
    }
    console.log("Frequency Of", frearray, "Is ", time);
  }
  highfrequency();




   // program 19
// Write a js program to find lowest frequency character in a string.
function lowfrequency() {
    var string = "i Love pakistan pakistan is my country";
    var frearray = [];
    var max, time, pre;
    max = 1;
    var count = 0;
    for (let x = 0; x < string.length; x++) {
      if (string.charAt(x) != " ") {
        for (let y = 0; y < string.length; y++) {
          if (string.charAt(x) == string.charAt(y)) {
            count++;
          }
        }
        if (max > count) {
          time = count;
          frearray.push(string.charAt(x));
          pre = max;
          max = count;
        } else if (max == count) {
          time = count;
          frearray.push(string.charAt(x));
        }
  
        count = 0;
      }
    }
    for (let z = 0; z < frearray.length; z++) {
      for (let x = z + 1; x < frearray.length; x++) {
        if (frearray[z] == frearray[x]) {
          frearray.splice(x, 1);
        }
      }
    }
    console.log("Frequency Of", frearray, "Is ", time);
  }
  lowfrequency();




  // program 20
// Write a js program to count frequency of each character in a string
function frequency() {
    var string = "i Love pakistan pakistan is my country";
    var frearray = [];
    var count = 1;
  
    for (let x = 0; x < string.length; x++) {
      if (string.charAt(x) != " ") {
        frearray.push(string.charAt(x));
      }
    }
    for (let z = 0; z < frearray.length; z++) {
      for (let x = z + 1; x < frearray.length; x++) {
        if (frearray[z] == frearray[x]) {
          frearray.splice(x, 1);
          count++;
        }
      }
      console.log(frearray[z], " Is Repeated", count, "Times");
      count = 1;
    }
  }
  frequency();




  // program 2
  // Write a js program to remove first occurrence of a character from string
  
  function firstAccur(char) {
    var string = "i love pakistan";
    var start, end;
    var newstring = "";
    for (let x = 0; x < string.length; x++) {
      if (string.charAt(x) == char) {
        start = string.slice(0, x);
        end = string.slice(x + 1, string.length);
        break;
      }
    }
    newstring = start.concat(end);
    console.log("After Removing:", char, ",New String Is:", newstring);
  }
  firstAccur("a");



  // program 22
  // Write a js program to remove last occurrence of a character from string.
  
  function lastAccur(char) {
    var string = "i love pakistan";
    var start, end;
    var newstring = "";
    for (let x = string.length; x >= 0; x--) {
      if (string.charAt(x) == char) {
        start = string.slice(0, x);
        end = string.slice(x + 1, string.length);
        break;
      }
    }
    newstring = start.concat(end);
    console.log("After Removing:", char, ",New String Is:", newstring);
  }
  lastAccur("a");



  // program 23
// Write a js program to remove all occurrences of a character from string.

function allAccur(char) {
    var string, h;
    var newstring = [];
    newstring[0] = "i love pakistan.pakistan is my country";
    var g = 0;
    for (let x = 0; x < newstring[0].length; x++) {
      if (newstring[g].charAt(x) == char) {
        {
          h = g;
          g++;
          newstring[g] = newstring[h].replace(char, "");
        }
      }
    }
  
    string = newstring[newstring.length - 1];
    console.log("After Removing All:", char, ",New String Is:", string);
  }
  allAccur("a");
  