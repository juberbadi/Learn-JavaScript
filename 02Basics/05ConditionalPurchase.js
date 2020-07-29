
var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn)
// {
//     console.log("Logged In Success");
//     if(isEmailVerified)
//     {
//         console.log("Email is verified");
//         if(cardInfo)
//         {
//             console.log("You can make purchase");
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo)
{
    console.log("You can make purchase");
}
else
{
    console.log("You are NOT allow to do that");
}