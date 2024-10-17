{ //to avoid other file access we use {} from the start
    // learning function 
    // normal function 
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // perameter can be default value 
    function add2(num1: number, num2: number = 10): number {
        return num1 + num2;
    }
    add(2, 2);
    add2(3);
    // arrow function
    const addArrow = (num1: number, num2: number): number => {
        return num1 + num2;
    }

    //object --> function --> method

    const poorUser = {
        name: 'Mehba',
        balance: 0,
        addBalance(amount: number): string {
            return `my new balance is ${this.balance + amount}`
        }
    }

    const arr: number[] = [2, 4, 6];
    const newArr: number[] = arr.map((elm: number): number => elm * elm);
}