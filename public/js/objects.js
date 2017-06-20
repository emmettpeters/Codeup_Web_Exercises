// "use strict";

// (function(){
    

    // var person = {
    //     "firstName": "Emmett",
    //     "lastName": "Peters",
        
    // };

    // function sayHello(){
    //     console.log("Greetings " + person.firstName + " " + person.lastName + "!")
    // }

    // sayHello()

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */



    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ]; 

    // shoppers.forEach(function(element){
    //     if (element.amount < 200) {
    //             console.log(element.name + " paid less than 200 dollars and therefore gets no discount. total is " + element.amount)
    //         }
    //          else {
    //             console.log(element.name + " paid more that 200 dollars and therefore got a discount of " + element.amount*.1 + " for a total of " + (element.amount-element.amount*.1)) 
    //             //ask about having + and - versus * and divide with respect to parenthesis
    //         }
    //     })

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];
// var books = [{
//     "title":"Harry",
//     "author":{
//         "firstName":"Dorothy",
//         "lastName":"Hamill",
//         },    
//     "keywords": ["action","adventure","scifi"],
//     "available": true,
//     "dateAvailable": new Date(),
//     rent: function () {
//         if (this.available == true)
//             {
//             this.available = false;
//             this.dateAvailable.setDate(this.dateAvailable.getDate()+14)
//         } else {
//             alert("Book is currently rented out! Sorry =(")
//         }
//     },
//     return: function () {
//         if (this.available == false)
//             {
//             this.available = true;
//             this.dateAvailable = new Date()
//         } else {
//             alert("You dont have this book to return!!")
//         }
//     },       
// },
// {
//     "title":"Potter",
//     "author":{
//         "firstName":"Russel",
//         "lastName":"Doug",
//         },   
//     "keywords": ["action","fiction","comedy"],
//     "available": true,
//     "dateAvailable": new Date(),
//     rent: function () {
//         if (this.available == true)
//             {
//             this.available = false;
//             this.dateAvailable.setDate(this.dateAvailable.getDate()+14)
//         } else {
//             alert("Book is currently rented out! Sorry =(")
//         }
//     },
//     return: function () {
//         if (this.available == false)
//             {
//             this.available = true;
//             this.dateAvailable = new Date()
//         } else {
//             alert("You dont have this book to return!!")
//         }
//     },
// },
// {
//     "title":"And",
//     "author":{
//         "firstName":"BK",
//         "lastName":"Hakensack",
//         },  
//     "keywords": ["action","comedy","horror"],
//     "available": true,
//     dateAvailable: new Date(),
//     rent: function () {
//         if (this.available == true)
//             {
//             this.available = false;
//             this.dateAvailable.setDate(this.dateAvailable.getDate()+14)
//         } else {
//             alert("Book is currently rented out! Sorry =(")
//         }
//     },
//     return: function () {
//         if (this.available == false)
//             {
//             this.available = true;
//             this.dateAvailable = new Date()
//         } else {
//             alert("You dont have this book to return!!")
//         }
//     },
// },
// {
//     "title":"Chamber",
//     "author":{
//         "firstName":"Lil",
//         "lastName":"Sebastian",
//         },    
//     "keywords": ["action","romantic","horror"],
//     "available": true,
//     "dateAvailable": new Date(),
//     rent: function () {
//         if (this.available == true)
//             {
//             this.available = false;
//             this.dateAvailable.setDate(this.dateAvailable.getDate()+14)
//         } else {
//             alert("Book is currently rented out! Sorry =(")
//         }
//     },
//     return: function () {
//         if (this.available == false)
//             {
//             this.available = true;
//             this.dateAvailable = new Date()
//         } else {
//             alert("You dont have this book to return!!")
//         }
//     },
// },
// {
//     "title":"Secrets",
//     "author":{
//         "firstName":"Ron",
//         "lastName":"Swanson",
//         },    
//     "keywords": ["action","non-fiction","romantic"],
//     "available": true,
//     "dateAvailable": new Date(),
//     rent: function () {
//         if (this.available == true)
//             {
//             this.available = false;
//             this.dateAvailable.setDate(this.dateAvailable.getDate()+14)
//         } else {
//             alert("Book is currently rented out! Sorry =(")
//         }
//     },
//     return: function () {
//         if (this.available == false)
//             {
//             this.available = true;
//             this.dateAvailable = new Date()
//         } else {
//             alert("You dont have this book to return!!")
//         }
//     },
// }]

// // books.forEach(function(){

// // })
// // log out the books array

// // todo:
// // Loop through the array of books using .forEach and print out the specified information about each one.
// // start loop here
// books.forEach(function(book, index, array){
//     console.log("Book #:" + parseInt(index+1));
//     console.log("Title: " + book.title);
//     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
//     console.log("Keywords: " + book.keywords);
//     console.log("Available?: " + book.available);
//     console.log("Date Available: " + book.dateAvailable);
// })


// Bonus Exercises for Objects Lesson

// BONUS 1 (expanding on the books object exercise):

//     Add a property “keywords” that contains an array of possibly genres the book may be categoriezed by
//     Add a boolean property “available” and set it to true
//     Add a dateAvailable property that has a string of the date/time when the book will be available
//     Add a method rent() that... 
//         - changes the available property to false if it is not already false
//         - sets the dateAvailable to a date exactly two weeks from when the rent() method is called 
//         (to do this, research the JS Date object and use methods from it in your code)
//     Add a method returned() that...
//         - changes the available property to true
//         - changes the dateAvailble property to the string “now”


// BONUS 2 (Create a Dog object):



// var dog = {
//     "breed": "",
//     weightInPounds: 0,
//     age: 0,
//     color: "",
//     steralized: false,
//     shotRecords: [
//         {
//             date: "",
//             typeOfShot: ""
//         },
//         {
//             date: "",
//             typeOfShot: ""
//         }
//     ],

//     bark: function() {
//         console.log("Bow Wow!!!")
//     },
//     getOlder: function(){
//         dog.age++
//     },
//     fix: function(){
//         if (this.steralized === true) {
//             alert("Your animal is ALREADY steralized!")
//         } else {
//             this.steralized = !this.steralized
//         }
//     },
//     getShot: function(){
//         var shotName = prompt("whats the shot name?")
//         var shotDate = prompt("whats the shot date?")
//         var newShot = { date: shotDate, typeOfShot: shotName }
//         dog.shotRecords.push(newShot)
//     },
// }

    // The dog object should have properties for: 
    //     breed (string), 
    //     weightInPounds (number),
    //     age (number), 
    //     color (string), 
    //     steralized (boolean), 
    //     shotRecords (array of objects with properties for date and typeOfShot)

    // The dog object should have methods to:
    //     bark() - will console.log “Woof!”
    //     getOlder() - will increase age by 1
    //     fix() - will set sterile to true
    //     getShot() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

// })();


// Extra practice at night beginning individual lotto/raffle panes - practice
// Extra practice at night beginning individual lotto/raffle panes - practice
// Extra practice at night beginning individual lotto/raffle panes - practice
// Extra practice at night beginning individual lotto/raffle panes - practice
// Extra practice at night beginning individual lotto/raffle panes - practice

var twlGamePanes =[
    {
        gpID: "",
        gpType: ["char","non"],
        gpTitle:"",
        gpImg: "",
        gpCPE: "1.00unit",
        gpTimeRemaining: "86400",
        gpTimer: function (){
           this.gpTimeRemaining--;
        }  
    },
    {
        gpID: "",
        gpType: ["char","non"],
        gpTitle:"",
        gpImg: "",
        gpCPE: "1.00unit",
        gpTimeRemaining: "86400",
        gpTimer: function (){
           this.gpTimeRemaining--;
        }  
    }]
    

setInterval(function(){ 
    twlGamePanes[0].gpTimer();
    return console.log(twlGamePanes[0].gpTimeRemaining);
     }, 1000);














