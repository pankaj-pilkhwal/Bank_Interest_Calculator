function calculate_all(){
    let input_balance = document.getElementsByClassName("input_balance");
    let output_balance = document.getElementsByClassName("output_balance");

    for(let i = 0; i < input_balance.length; i++) {
        let bank_balance = Number(input_balance[i].value);
        
        if(bank_balance > 200000){
            bank_balance += bank_balance * .1;
            bank_balance -= bank_balance * .002;
        }else if(bank_balance > 100000){
            bank_balance += bank_balance * .05;
            bank_balance -= bank_balance * .0005;
        }else {
            bank_balance += bank_balance * .03;
            bank_balance -= bank_balance * .002;
        }

        output_balance[i].value = bank_balance;
    
    }
}
