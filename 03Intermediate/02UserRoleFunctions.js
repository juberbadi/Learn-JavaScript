//var getUserRole=function (name , role)      Different Way
function getUserRole(name , role)
{
    switch(role)
    {
        case "admin":
            return `${name} is admin with all access`;
            break; //break in not necessary because of used return
        
        case "subadmin":
            return `${name} is sub-admin with all access to create and delete course`;
            break;
    
        case "testprep":
            return `${name} is test prep with all access to create and delete test`;
            break;

        case "user":
            return `${name} is user to consum content`;
            break;

        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("Juber","user"));