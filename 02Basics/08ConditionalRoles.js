var user = "admin";

switch(user)
{
    case "admin":
        console.log("Get full access");
        break;

    case "subadmin":
        console.log("Get access to Create/Delete courses");
        break;

    case "testprep":
        console.log("Get access to Create/Delete tests");
        break;

    case "user":
        console.log("Get sccess to consum products");
        break;
    
    default:
        console.log("Trial User");
        break;
}