// Function to put questions into the Object.

function writequestions() {

    questions = [{
        qu: "1 - Which of the following is correct about JavaScript?",
        mc1: "A - JavaScript is a lightweight, interpreted programming language.",
        mc2: "B - JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
        mc3: "C - The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
        mc4: "D - All of the above.",
        a: "D"
    }, {
        qu: "2 - How can you get the total number of arguments passed to a function",
        mc1: "A - Using args.length property",
        mc2: "B - Using arguments.length property",
        mc3: "C - Both of the above",
        mc4: "D - None of the above",
        a: "B"
    }, {
        qu: "3 - Which of the following functions of String objects returns the calling string value converted to lower case while respecting the current locale?",
        mc1: "A - toLocaleLowerCase()",
        mc2: "B - toLowerCase()",
        mc3: "C - toString()",
        mc4: "D - subString()",
        a: "A"
    }, {
        qu: "4 - The unordered collection of properties, each of which has a name and a value is called _____ ?",
        mc1: "A - String",
        mc2: "B - Object",
        mc3: "C - Serialized Object",
        mc4: "D - Array",
        a: "B"
    }, {
        qu: "5 - Which function among the following lets us register a function to be invoked once?",
        mc1: "A - setTimeout()",
        mc2: "B - setTotalTime()",
        mc3: "C - setInterval()",
        mc4: "D - settime()",
        a: "A"
    }, {
        qu: "6 - In general, an event handler is nothing but a _________.",
        mc1: "A - function",
        mc2: "B - interface",
        mc3: "C - event",
        mc4: "D - handler",
        a: "A"
    }, {
        qu: "7 - Do functions in JavaScript necessarily return a value?",
        mc1: "A - It is mandatory",
        mc2: "B - Not necessary",
        mc3: "C - Few functions retury values by default",
        mc4: "D - some functions do not return any value",
        a: "C"
    }, {
        qu: "8 - Which keyword is used to define the function in JavaScript",
        mc1: "A - void",
        mc2: "B - int",
        mc3: "C - function",
        mc4: "D - main",
        a: "C"
    }, {
        qu: "9 - The snippet that has to be used to check if 'a' is not equal to 'null' is",
        mc1: "A - if(a!=null)",
        mc2: "B - if(!a)",
        mc3: "C - if(a!null)",
        mc4: "D - if(a!==null)",
        a: "D"
    }, {
        qu: "10 - What is the value of X?  var x = 2 + '2';",
        mc1: "A - 22",
        mc2: "B - 4",
        mc3: "C - '22'",
        mc4: "D - '4'",
        a: "C"
    }, {
        qu: "11 - JavaScript is designed for following purpose - ",
        mc1: "A - to style HTML pages",
        mc2: "B - to execute Queries related to databases on a server",
        mc3: "C - to add interactivity to html pages",
        mc4: "D - All of the above",
        a: "D"
    }, {
        qu: "12 - What does JavaScript use instead of == and !=?",
        mc1: "A - It uses bitwise checking",
        mc2: "B - It uses === and !== instead",
        mc3: "C - It uses equals() and notequals() instead",
        mc4: "D - It uses equalto()",
        a: "B"
    }, {
        qu: "13 - Which symbol is used for comments in JavaScript",
        mc1: "A - '\\'",
        mc2: "B - '//'",
        mc3: "C - '\* *\'",
        mc4: "D - '/* */'",
        a: "B"
    }, {
        qu: "14 - What are the types of Pop up boxes avilable in JavaScript",
        mc1: "A - Alert",
        mc2: "B - Prompt",
        mc3: "C - Confirm",
        mc4: "D - All of the above",
        a: "D"
    }, {
        qu: "15 - Which of the following function of String object returns the calling string value converted to lower case?",
        mc1: "A - toLocaleLowerCase()",
        mc2: "B - toLowerCase()",
        mc3: "C - toString()",
        mc4: "D - substring()",
        a: "B"
    }, {
        qu: "16 - The 'var' and 'function' are _________",
        mc1: "A - Keywords",
        mc2: "B - Declaration statements",
        mc3: "C - Data types",
        mc4: "D - Prototypes",
        a: "B"
    }, {
        qu: "17 - JavaScript string using double quotes is exactly the same as a string using single quotes?",
        mc1: "A - True",
        mc2: "B - False",
        mc3: "C - ",
        mc4: "D - ",
        a: "A"
    }, {
        qu: "18 - What is the value of x?  var a = 'A'; var x = a.concat('B');",
        mc1: "A - 'B'",
        mc2: "B - 'A'",
        mc3: "C - 'AB'",
        mc4: "D - ['A','B']",
        a: "C"
    }, {
        qu: "19 - Which is NOT a way to create a loop in JavaScript",
        mc1: "A - for (...){}",
        mc2: "B - do {} while(...)",
        mc3: "C - while (...) {}",
        mc4: "D - repeat (...) {}",
        a: "D"
    }, {
        qu: "20 - How do you find the number with the highest value of x and y?",
        mc1: "A - Math.max(x,y)",
        mc2: "B - ceil(x,y)",
        mc3: "C - max(x,y)",
        mc4: "D - Math.ceil(x,y)",
        a: "A"
    }, {
        qu: "21 - The statement a===b refers to",
        mc1: "A - Both a and b are equal in value, type and reference address",
        mc2: "B - Both a and b are equal in value",
        mc3: "C - Both a and b are equal in value and type",
        mc4: "D - There is no such statement",
        a: "C"
    }, {
        qu: "22 - Which of the following is not JavaScript Data Types?",
        mc1: "A - Undefined",
        mc2: "B - Number",
        mc3: "C - Boolean",
        mc4: "D - Float",
        a: "D"
    }, {
        qu: "23 - Which company developed JavaScript",
        mc1: "A - Netscape",
        mc2: "B - Bell Labs",
        mc3: "C - Sun Microsystems",
        mc4: "D - IBM",
        a: "A"
    }, {
        qu: "24 - Inside which HTML element do we put the JavaScript",
        mc1: "A - &lt;script&gt;",
        mc2: "B - &lt;head&gt;",
        mc3: "C - &lt;meta&gt;",
        mc4: "D - &lt;style&gt;",
        a: "A"
    }, {
        qu: "25 - What is the correct syntax for referring to an external script called LFC.js",
        mc1: "A - &lt;script src='LFC.js'&gt;",
        mc2: "B - &lt;script source='LFC.js'&gt;",
        mc3: "C - &lt;script ref='LFC.js'&gt;",
        mc4: "D - &lt;script type='LFC.js'&gt;",
        a: "A"
    }, {
        qu: "26 - Why do JavaScript and Java have similar name?",
        mc1: "A - JavaScript is a stripped-down version of Java",
        mc2: "B - JavaScript's syntax is loosley based on Java's",
        mc3: "C - They both originated on the island of Java",
        mc4: "D - None of the above",
        a: "B"
    }, {
        qu: "27 - What is the original name of JavaScript",
        mc1: "A - LiveScript",
        mc2: "B - EScript",
        mc3: "C - Mocha",
        mc4: "D - JavaScript",
        a: "C"
    }, {
        qu: "28 - How do you round the number 7.25 to the nearest whole number?",
        mc1: "A - Math.round(7.25)",
        mc2: "B - rnd(7.25)",
        mc3: "C - round(7.25)",
        mc4: "D - Math.rnd(7.25)",
        a: "A"
    }, {
        qu: "29 - How do you check what the type of a value in variable x is?",
        mc1: "A - gettype(x)",
        mc2: "B - x.__type;",
        mc3: "C - Object.type(x)",
        mc4: "D - typeof(x)",
        a: "D"
    }, {
        qu: "30 - Which keyboard character represents the assignment operator",
        mc1: "A - !",
        mc2: "B - ?",
        mc3: "C - =",
        mc4: "D - #",
        a: "C"
    }];
}