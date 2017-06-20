// "use strict";

(function(){
    

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



    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ]; 

    shoppers.forEach(function(element){
        if (element.amount < 200) {
                console.log(element.name + " paid less than 200 dollars and therefore gets no discount. total is " + element.amount)
            }
             else {
                console.log(element.name + " paid more that 200 dollars and therefore got a discount of " + element.amount*.1 + " for a total of " + (element.amount-element.amount*.1)) 
                //ask about having + and - versus * and divide with respect to parenthesis
            }
        })

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];
var books = [{
    "title":"Harry",
    "author":{
        "firstName":"Dorothy",
        "lastName":"Hamill"
        }    
},
{
    "title":"Potter",
    "author":{
        "firstName":"Russel",
        "lastName":"Doug"
        }    
},
{
    "title":"And",
    "author":{
        "firstName":"BK",
        "lastName":"Hakensack"
        }    
},
{
    "title":"Chamber",
    "author":{
        "firstName":"Lil",
        "lastName":"Sebastian"
        }    
},
{
    "title":"Secrets",
    "author":{
        "firstName":"Ron",
        "lastName":"Swanson"
        }    
}]
// log out the books array
console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
books.forEach(function(book, index, array){
    console.log("Book #:" + parseInt(index+1));
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
})



})();


// Extra practice at night beginning individual lotto/raffle panes - practice
// Extra practice at night beginning individual lotto/raffle panes - practice
// Extra practice at night beginning individual lotto/raffle panes - practice
// Extra practice at night beginning individual lotto/raffle panes - practice
// Extra practice at night beginning individual lotto/raffle panes - practice

// var twlIndividual = [
//     {
//         indivType: ["char","non"];
//         indivTimeRemaining: "";
//         indivImg: "";
//         indivCPE: "1.00unit";


//     }













