{
    // ternary operator || optional operator || nullish coalescing operator

    const age : number = 15;
    if(age > 18){
        console.log("adult");
    } else {
        console.log("Not Adult");
    }

    const isAdult = age > 18 ? "Adult" : "Not Adult";
    console.log({isAdult});

    //nullish coalescing operator
    // null / undefined ---> decision making

    // const isAuthenticate = "";
    const isAuthenticate = undefined;
    const result = isAuthenticate ?? "Guest";
    const result2 = isAuthenticate ? isAuthenticate : "Guest"   

    console.log({result, result2});

    type User = {
        name : string,
        address : {
            permanentAddress? : string,
            temporaryAddress : string
        }
    }

    const user : User = {
        name : "Mr X",
        address : {
            //  permanentAddress : "Dhaka",
             temporaryAddress : "test"
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No Address found"
    console.log(permanentAddress);
}