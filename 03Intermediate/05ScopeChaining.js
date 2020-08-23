var name = "Juber";

console.log("Line number 3", name);

function sayName()
{
    //var name = "Mr. JBR";
    console.log("LIne number 8", name);
    sayNameTwo();

    function sayNameTwo()
    {
       //var name = "Mr. JB";
        console.log("Line number 14", name);
    }
}

sayName();