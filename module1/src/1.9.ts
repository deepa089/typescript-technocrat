{
    // type alias

    // type alias for object

   /*  const student1 : {
        id: number,
        name :string,
        contactNo : string, 
        address : string
    } */
   

    type Student = {
        id: number,
        name :string,
        contactNo : string, 
        address : string,
        gender? : string
    }

    const student1 : Student = {
        id : 141243,
        name : "X",
        contactNo : "345343435",
        address : "bangladesh",
        gender : "male"
    }

    const student2 : Student = {  // without gender element
        id : 141243,
        name : "Y",
        contactNo : "017865656565657",
        address : "australia"
    }

    // type alias for string
    type UserName = string;
    type IsAdmin = boolean;

    const name : UserName = "Mr. X";
    const isAdmin : IsAdmin = true ;

    // type alias for function 

    // const add = (num1 :number , num2 : number) : number => num1 + num2 ;

    type Add = (num1 :number , num2 : number) => number ;
    const add : Add = (num1  , num2 ) => num1 + num2 ;


    
}