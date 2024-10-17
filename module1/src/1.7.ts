{ //to avoid other file access we use {} from the start
    // spread operator 
    // rest operator
    // destructuring


    //learn spread operator
    const alphabet1: string[] = ['a','b','c'];
    const alphabet2: string[] = ['x','y','z'];
    alphabet1.push(...alphabet2);

    const alphabetList = {
        ...alphabet1,
        ...alphabet2
    }

    // learn rest oparator

    const greetFriends = (...friends : string[]){
        friends.forEach((friend: string) => console.log(`Hi ${friend}`));
    }

    greetFriends('hira', 'himu', 'kajol', 'faria');
}