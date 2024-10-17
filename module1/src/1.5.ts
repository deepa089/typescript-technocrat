{ //to avoid other file access we use {} from the start
    // Reference type --> Object 

    const user: {
        // use readonly when dont want to change the value.
        readonly organisation: "BracIT Services Ltd." // when we use a value instead of type ,it is called literal type. and it's a fixed value for all object
        firstName: string;
        middleName?: string; // optional type because we use "?" here
        lastName: string;
        isMarried: boolean;
    } = {
        organisation: "BracIT Services Ltd.",
        firstName: 'abd',
        lastName: 'xyz',
        isMarried: true
    };
}