// Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
})();

( () => {                             // Arrow function
    console.log(`DB CONNECTED TWO`);
}) ();                        // ; is important to run IIFE to next further lines

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('roshan')