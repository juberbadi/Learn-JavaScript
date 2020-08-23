function factorial(n)
{
    var f = 1;
    var i;
    for(i=n ; i>=1 ; i--)
    {
        f = f * i ;
    }
    console.log(f);
}

function main() {
    const n = 4;
    
    console.log(factorial(n));
}
// sayHello();

// function sayHello()
// {
//     console.log("Hello");
// }

// // if(2 === "2")
// // {
// //     console.log("This is true");
// // }

// // var myName = "Juber";
// // if(myName === window.myName)
// // {
// //     console.log("This is again a true statement");
// // }



