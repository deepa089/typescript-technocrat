{
    // destructuring 
    // object destructuring 
    // array destructuring

    //object destructuring learning

    const user = {
        id: 12232,
        name : {
            firstname : "Mr X",
            middleName : " xx ",
            lastName : "xxx"
        },
        contactNo : "01789809090909",
        address : "Bangladesh"
    }

    const {contactNo, name : {middleName}} = user ;  // for nested destructuring
    const {address, name : {middleName : midName}} = user ;  // midName used for alias ; key : alias ;


    const firiends = ["faria", "shoru", "satt", "tanz", "himu", "hira", "kajol"] ;
    const [a,b,c,helpfulFriend] = firiends ; //according to index alias name
    const [,,,,hidingFriend] = firiends; // only want to get value acording to index number
    const [,,,helpingFrnd,...rest] = firiends; // after helping friend rest of friends are in the "...rest" portion

}