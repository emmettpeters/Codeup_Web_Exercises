<?php 

function sayBob($bob = "", $ross)
{
    if (func_num_args()!==2) {
        throw new ArgumentCountError();
    } else if ($bob === "") {
        throw new InvalidArgumentException("Input cannot be empty.", 45);
    } else if (!is_string($bob)) {
        throw new InvalidArgumentException("Input must be a string!");
    } else if (!ctype_alpha($bob)) {
        throw new InvalidArgumentException("Must use only letters.");
    } else if (strtolower($bob) !== "bob") {
        throw new InvalidArgumentException("Name must match Bob");
    } else {
        strtolower($bob);
        echo ucfirst($bob);
    }
    
}


/*
    Use the code above to do the following:

        1) Create a try/catch block and call the sayBob() function in the try block
        2) Create the catch block to output both the getMessage() and the file name
        3) Try out the test inputs listed below in try/catch block
        4) Read PHP docs on ArgumentCountError
        5) Change appropriate throws that fall under ArgumentCountError in sayBob() conditions and add new catch block for it before Exception
        6) Read PHP docs on InvalidArgumentException and incorporate it in another catch block
        7) Try out test messages listed below again
    
    Test inputs...

        sayBob("Bob");
        sayBob(12345, "Ross");
        sayBob("Bob123", "Ross");
        sayBob("Bubba", "Ross");
        sayBob("Bob", "Ross");
*/


// The echoes before the try/catch are to help you better see output
echo PHP_EOL;
echo "==========================" . PHP_EOL;
echo "See below for the results!" . PHP_EOL;
echo "==========================" . PHP_EOL;
echo PHP_EOL;


// Write the try/catch block here

    try {
        sayBob("Bob","Ross");
    } catch (InvalidArgumentException $i){
        echo $i->getMessage() . PHP_EOL;
    } catch (ArgumentCountError $e){
        echo $e->getMessage() . PHP_EOL;
    } catch (Exception $e){
        echo $e->getMessage() . PHP_EOL;
    }


// The echoes after the try/catch are to help you test that Exceptions were properly caught and code continued execution
echo PHP_EOL;
echo "==========================" . PHP_EOL;
echo "This code should always run!" . PHP_EOL;
echo "==========================" . PHP_EOL;
echo PHP_EOL;