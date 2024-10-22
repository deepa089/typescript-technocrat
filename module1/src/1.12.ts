{
    // nullable types
    const searchName = (value : string | null) => {
        if(value){
            console.log("searching..");
        } else {
            console.log("Nothing to search");
        }

        
    }

    searchName("Hello");

    //unknown typeof
    const getSpeedInMeterPerSecond = (value : unknown) => {
        console.log(typeof value);
        if(typeof value === 'number'){
            const result = (value * 1000)/36 ;
            console.log("Speed is " + result + " m/s");
        } else if(typeof value === 'string'){
            const result = value.split(" ");
            const [result2, net] = result; 
            const result3 = (1000 * parseFloat(result2)) /36 ;
            console.log("Speed is " + result3 + " m/s");
        } else {
            console.log("Wrong Input");
        }
    }
    getSpeedInMeterPerSecond(12);
    getSpeedInMeterPerSecond("12 km/h");
    getSpeedInMeterPerSecond(null);
    //never 

    const throwError = (msg : string): never =>{
        throw new Error(msg);
    }

    throwError("Error exception");
    
}