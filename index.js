function calculate_all() {
    calculate1();
    calculate2();
    calculate3();
    calculate4();
    calculate5();
}
function calculate1() {
    let bank_balance = Number(document.getElementById("bank_balance_1").value)
    document.getElementById("bank_balance_display_1").value = interest_calculator(bank_balance)

}
function calculate2() {
    let bank_balance = Number(document.getElementById("bank_balance_2").value)
    document.getElementById("bank_balance_display_2").value = interest_calculator(bank_balance)

}
function calculate3() {
    let bank_balance = Number(document.getElementById("bank_balance_3").value)
    document.getElementById("bank_balance_display_3").value = interest_calculator(bank_balance)

}
function calculate4() {
    let bank_balance = Number(document.getElementById("bank_balance_4").value)
    document.getElementById("bank_balance_display_4").value = interest_calculator(bank_balance)

}
function calculate5() {
    let bank_balance = Number(document.getElementById("bank_balance_5").value)
    document.getElementById("bank_balance_display_5").value = interest_calculator(bank_balance)
}

function interest_calculator(bank_balance){
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

    return bank_balance;
}