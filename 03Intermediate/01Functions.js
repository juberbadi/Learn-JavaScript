function sayHello(name)
{
    console.log("Hello there, Juber");
    //console.log("Hello there,", name);    Another professional way
    console.log(`Hello there, ${name}. How are you?`);
}
sayHello("Juber");

function namstey()
{
    return "Hello in India";
}
namstey(); //No output, Because of return 

var greeting = namstey();
console.log(greeting);
//OR
console.log(namstey());