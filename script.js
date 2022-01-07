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
  



  // program 24
  // Write a js program to remove all repeated word from a given string.
  
  function allword() {
    var string='i love pakistan.pakistan is,my country.i like it is'
    var newarray=[]
    var array=string.split(".")
    var news=array.join(" ")
    newarray=news.split(",")
    var news1=newarray.join(" ")
    var newarray1=news1.split(" ")
    for(let x=0;x<newarray1.length;x++){
      for(let y=x+1;y<newarray1.length;y++)
            if (newarray1[x]==newarray1[y]) {
              newarray1.splice(y,1)
            }
    }
    var result=newarray1.join(" ")
    console.log("yesssssssss",result);
      }
  allword()
  


  // program 25
  // Write a js program to replace first occurrence of a character with another in a string.
  
  function repelace(t,w) {
    var string='i love my country pakistan'
    for(let x=0;x<string.length;x++){
      if (string.charAt(x)==t) {
        var news=string.replace(t,w)
        break
      }
    }
    console.log("After Replacing ",t," With ",w," String is:",news);
  }
  repelace("i","You")



   // program 26
  // Write a js program to replace last occurrence of a character with another in a string.
  
  function repelacelast(t,w) {
    var string='i love my country pakistan'
    for(let x=string.length-1;x>=0;x--){
      var aray=string.split("")
      if (aray[x]==t) {
          aray[x]=w
          var news=aray.join("")
        break
      }
    }
    console.log("After Replacing ",t," With ",w," String is:",news);
  }
  repelacelast("i","a")



   // program 27
  // Write a js program to replace all occurrences of a character with another in a string.
  
  function repelaceAll(t,w) {
    var string='i love my pakistan'
    var aray=string.split("")
    for(let x=0;x<string.length;x++){
      if (aray[x]==t) {
          aray[x]=w
        }
      }
      var news=aray.join("")
    console.log("After Replacing ",t," With ",w," String is:",news);
  }
  repelaceAll("a","x")



  // program 28
  // Write a js program to find first occurrence of a word in a given string.
  
  function firstWord(f) {
    var string='I Love My Country Pakistan'
   var array=string.split(" ")
   var yess=0
    for(let x=0;x<array.length;x++){
           if (array[x]==f) {
             x++
             console.log(f," Is Found At Position",x," From Start");
             yess++
             break
           }
    }
    if (yess==0) {
      
      console.log("Given Word Is Not Found In STring");
    }
  }
  firstWord("I")



   // program 29
// Write a js program to find last occurrence of a word in a given string.
function lasttWord(f) {
    var string='I Love My Country Pakistan'
   var array=string.split(" ")
   var yess=0
    for(let x=array.length-1;x>=0;x--){
           if (array[x]==f) {
             x++
             console.log(f," Is Found At Position",x);
             yess++
             break
           }
    }
    if (yess==0) {
      
      console.log("Given Word Is Not Found In STring");
    }
  }
  lasttWord("Country")



  // program 30
  // Write a js program to search all occurrences of a word in given string.
  
  function allWord(word) {
    var string='i Love My Country i Pakistan'
   var array=string.split(" ")
   var index=[]
   var yess=0
    for(let x=0;x<array.length;x++){
           if (array[x]==word) {
            index.push(x)
             yess++
            }
          }
  
          if (yess>0) {
      console.log(word," Is Found At Index",index); 
       }
       else{
         console.log("Given Word Is Not Found In String");
       }
  }
  allWord("i")



   // program 31
  // Write a js program to count occurrences of a word in a given string.
  function countWord(word) {
    var string='i Love My Country i Pakistan'
   var array=string.split(" ")
   var index=[]
   var yess=0
    for(let x=0;x<array.length;x++){
           if (array[x]==word) {
             yess++
            }
          }
  
          if (yess>0) {
      console.log(word," Is Occur",yess,"Times"); 
       }
       else{
         console.log("Given Word Is Not Found In String");
       }
  }
  countWord("i")
  



  // program 33
  // Write a js program to remove last occurrence of a word from string.
  function removeLast(word) {
    var string='i Love My Country i Pakistan'
   var array=string.split(" ")
   var yess=0
    for(let x=array.length-1;x>=0;x--){
           if (array[x]==word) {
             array.splice(x,1)
             yess++
             break
            }
          }
        var news=array.join(" ")
          if (yess>0) {
      console.log("After Removing from last",word, "Word:",news); 
       }
       else{
         console.log("Given Word Is Not Found In String");
       }
  }
  removeLast("Pakistan")



  // program 34
  // Write a js program to remove all occurrence of a word in given string
  function allOccur(word) {
    var string='i Love My Country i Pakistan'
   var array=string.split(" ")
   var yess=0
    for(let x=array.length-1;x>=0;x--){
           if (array[x]==word) {
             array.splice(x,1)
             yess++
            }
          }
        var news=array.join(" ")
          if (yess>0) {
      console.log("After Removing All",word, "Words:",news); 
       }
       else{
         console.log("Given Word Is Not Found In String");
       }
  }allOccur("i")



  // program 35
  // Write a js program to trim leading white space characters from given string.
  function trimSpace() {
    var string='       I love my country pakistan'
    var array=string.split(" ")
    for(let x=0;x<array.length;x++){
      if (array[x]=="") {
        array.shift()  
        x--    
      }
      
    }
    var news=array.join(" ")
    console.log("After Removing Leading space:",news);
    
  }
  trimSpace()



  // program 36
  // Write a js program to trim trailing white space characters from given string.
  function trailingSpace() {
    var string='       I love my country pakistan      '
    var array=string.split(" ")
    for(let x=0;x<array.length;x++){
      if (array[array.length-1]=="") {
        array.pop()     
      }
      
    }
    var news=array.join(" ")
    console.log("After Removing Trailing space:",news);
    
  }
  trailingSpace()



   // program 37
  // Write a js program to trim both leading and trailing white space characters from given string.
  function trimBoth() {
    var string='    I love my country pakistan      '
    var news=string.trim()
    console.log("After Removing Leading And Trailing White Space:",news);
    
  }
  trimBoth()



   //  program 38
  // Write a js program to remove all extra blank spaces from given string.
  function extraSpace() {
    var string='    I love Pakistan   is my country   '
    var news=string.trim()
    var array=news.split(" ")
    for(let x=0;x<array.length;x++){
  
      if (array[x]=="") {
        array.splice(x,1)
        x--
      }
    }
    var result=array.join(" ")
    console.log("After Removing All Extra White Space:",result);
    
  }
  extraSpace()




  // object 
  

  // program 39
  // Write a JavaScript program to list the properties of a JavaScript object
  // var student = {
  // name : "David Rayy",
  // sclass : "VI",
  // rollno : 12 };
  // Sample Output: name,sclass,rollno
  
  function properties() {
    var student={
      name:"David Rayy",
      sclass:"VI",
      rollno:12,
    };
    var news=Object.keys(student).join(",")
    console.log("Output",news);
    
  }
  properties()




   // program 40
  // Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
  // Sample object:
  // var student = {
  // name : "David Rayy",
  // sclass : "VI",
  // rollno : 12 };
  
  function deleteobj() {
    var student={
      name:"David Rayy",
      sclass:"VI",
      rollno:12,
    };
    console.log("Before Deletion",student);
    delete student.rollno
    console.log("After Deletion",student);
    
  }
  deleteobj()




   // program 41
  // Write a JavaScript program to get the length of a JavaScript object.   
  // Sample object :
  // var student = {
  // name : "David Rayy",
  // sclass : "VI",
  // rollno : 12 };
  
  function lengthobj() {
    var student = {
      name : "David Rayy",
      sclass : "VI",
      rollno : 12 };
      var key=Object.keys(student)
      console.log("length Of object Is:",key.length);
  }
  lengthobj()




   // program 42
  // Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   
  // var library = [ 
  //    {
  //        author: 'Bill Gates',
  //        title: 'The Road Ahead',
  //        readingStatus: true
  //    },
  //    {
  //        author: 'Steve Jobs',
  //        title: 'Walter Isaacson',
  //        readingStatus: true
  //    },
  //    {
  //        author: 'Suzanne Collins',
  //        title:  'Mockingjay: The Final Book of The Hunger Games', 
  //        readingStatus: false
  //    }];
  
  function displayobj() {
    var library = [ 
         {
             author: 'Bill Gates',
             title: 'The Road Ahead',
             readingStatus: true
         },
         {
             author: 'Steve Jobs',
             title: 'Walter Isaacson',
             readingStatus: true
         },
         {
             author: 'Suzanne Collins',
             title:  'Mockingjay: The Final Book of The Hunger Games', 
             readingStatus: false
         }];
  
         for(let x=0;x<library.length;x++){
           console.log(library[x].readingStatus);
         }
    
  }
  displayobj()




  // program 43
  // Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   
  // Volume of a cylinder : V = πr2h
  // where r is the radius and h is the height of the cylinder.
  
  function volum(h,r) {
    var volume,result
    volume=Math.PI*2*r*h
    result=volume.toFixed(4)
    console.log("Volume Of cylinder is:",result);
  }
  volum(5,6)


   // program 44
  // Write a Bubble Sort algorithm in JavaScript. 
  
  function bubleSort() {
    var array=[6,4,0,67,-3,-2,1]
     for(let x=0;x<array.length;x++){
      for(let y=x+1;y<array.length;y++){
        if (array[y]<array[x]) {
          var sample=array[x]
          array[x]=array[y]
          array[y]=sample
        }
      }
     }
  console.log(array);
  }
  bubleSort()



   // program 45
// Write a JavaScript program which returns a subset of a string.   
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function subset() {
    var string='Dogs'
    var array=[]
    for(let x=0;x<string.length;x++){
      for(let y=x+1;y<=string.length;y++){
          array.push(string.slice(x,y))
        }
      }
      console.log("Subset Of Given String Is:",array);
  }
  subset()



   // program 47
  // Write a JavaScript program to calculate the area and perimeter of a circle.   
  // Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
  
  function Areapara(r) {
    var area=Math.PI*r*r
    var para=Math.PI*2*r
    console.log("Parimeter Of Circle:",para.toFixed(5));
    console.log("Area Of Circle:",area.toFixed(5))
    
  }
  Areapara(10)


  
  // program 48
  // Write a JavaScript function to print all the methods in an JavaScript object.
  
  function objectname(any) {
    return Object.getOwnPropertyNames(any)
    
  }
  console.log(objectname(Array));




  // program 49
  // Write a JavaScript function to retrieve all the values of an object's properties.
  function allValue() {
    var object1={
      name:'Usama',
      fatherName:'Azam',
      class:'BsCs',
      rollno:11931,
    }
    console.log(Object.values(object1));
  }
  allValue()




  // program 50
  // Write a JavaScript function to check whether an object contains given property. 
  function property(obj) {
    student={
      sName:'M.Usama',
      sFatherName:'M.Azam',
      class:"BsCs",
      section:"Evening",
      rollno:"11931"
    }
    if (student.hasOwnProperty(obj)) {
      console.log("Student Object Has This Property");
    }
    else{
     console.log("Student Object Has Not This Property");
 
    }
 
  }
  property('class')




  
  //                            Conditional Operator
  
  // program 1
  // Write a js program to find maximum between two numbers using conditional operator
  function greaterC_O() {
    var num1=12
  var num2=22
  var greater=num1>num2 ? num1+" Is Greater" : num2+" Is Greater"
  console.log(greater);
  }
  greaterC_O()
  
  
  // program 2
  // Write a js program to find maximum between three numbers using conditional operator.
  function greater3C_O(){
    var num1=20
    var num2=19
    var num3=21
     var number1=num1>num2?num2>num3? num1+" is greater":num3+" is greater":num2+" is greater"
     console.log(number1);
  }
  greater3C_O()


  // program 3
  // Write a js program to check whether a number is even or odd using conditional operator.
  function checkC_O() {
    var num1=45
    var chek=num1%2==0?num1+" is even":num1+" is odd"
    console.log(chek);
  }
  checkC_O()




  // program 4
  // Write a js program to check whether year is leap year or not using conditional operator.
  function leapYear() {
    var num1=11
    var chek=num1%4==0?num1+" is leap year":num1+" is not a leap year"
    console.log(chek);
  }
  leapYear()


  // program 5
// Write a js program to check whether character is an alphabet or not using conditional operator.

function character() {
  
    var char=1
    var check=char>='a'|| char>='A'?char+" is a Character":char+" Is Not A Character"
    console.log(check);
    }
    character()



       //                          Switch Statement
    
    // program 1
    // Write a js program to print day of week name using switch case
    function dayOfWeek(x) {
        switch (x) {
          case 1:
             console.log("Sunday");
            break;
          case 2:
             console.log("Monday");
            break;
          case 3:
             console.log("Tuseday");
            break;
          case 4:
             console.log("Wednesday");
            break;
          case 5:
             console.log("Thursday");
            break;
          case 6:
             console.log("Friday");
            break;
          case 7:
             console.log("Saturday");
            break;
        
          default:
            console.log("Enter Valid Day Number");
            break;
        }
      }
      dayOfWeek(6)




         // program 2
    // Write a js program print total number of days in a month using switch case.
    function dayInMonth(x) {
        switch (x) {
          case 1:
            console.log("There Is 31 Days In This Month");
            break;
          case 2:
            console.log("There Is 28 Days In This Month");
            break;
          case 3:
            console.log("There Is 31 Days In This Month");
            break;
          case 4:
            console.log("There Is 30 Days In This Month");
            break;
          case 5:
            console.log("There Is 31 Days In This Month");
            break;
          case 6:
            console.log("There Is 30 Days In This Month");
            break;
          case 7:
            console.log("There Is 31 Days In This Month");
            break;
          case 8:
            console.log("There Is 31 Days In This Month");
            break;
          case 9:
            console.log("There Is 30 Days In This Month");
            break;
          case 10:
            console.log("There Is 31 Days In This Month");
            break;
          case 11:
            console.log("There Is 30 Days In This Month");
            break;
          case 12:
            console.log("There Is 31 Days In This Month");
            break;
        
          default:
            console.log("Enter Valid Month");
            break;
        }
      }
      dayInMonth(8)





       // program 3
    // Write a js program to check whether an alphabet is vowel or consonant using switch case.
    function vowel(x) {
        switch (x) {
          case 'a':
            console.log(x," Is Vowel");
            break;
          case 'A':
            console.log(x," Is Vowel");
            break;
          case 'e':
            console.log(x," Is Vowel");
            break;
          case 'A':
            console.log(x," Is Vowel");
            break;
          case 'i':
            console.log(x," Is Vowel");
            break;
          case 'I':
            console.log(x," Is Vowel");
            break;
          case 'o':
            console.log(x," Is Vowel");
            break;
          case 'O':
            console.log(x," Is Vowel");
            break;
          case 'u':
            console.log(x," Is Vowel");
            break;
          case 'U':
            console.log(x," Is Vowel");
            break;
        
          default:
            console.log(x," Is Consonant");
            break;
        }
        
      }
      vowel('k') 