{ //to avoid other file access we use {} from the start

    // Basic data Type

    // String
    let firstName = 'welcome'

    //number
    let roll = 89;

    // boolean 
    let isAdmin = true;

    //undefined
    let x: undefined = undefined;

    //null
    let y: null = null;

    //any type

    let d;
    d = 123; //ok
    d = "123"; //ok
    d = true; //ok

    //array
    let friends: string[] = ['faria', 'Himu', 'Hira', 'Kajol'];
    let rollList: number[] = [12, 23, 45, 656];

    //tuple --> array --> order --> type of values ; 
    // tuple is a data structure that allows you to store multiple values of different types in a fixed-length array.
    // a collection of values where each value can have a different type and a specific order is important.
    let staudentInfo: [string, number, string, boolean] = ['abc', 89, 'xyz', true];
}