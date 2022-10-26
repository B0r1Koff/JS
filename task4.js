const TELEPHONE_PRICE = 100;
const ACCESSORY_PRICE = 20;
const TAX_RATE = 5;

function Input(message){
    let a;
    while(isNaN(a) || a < 1){
        a = prompt(message);
    }
    return a;
}

function Purchase(PRICE, TAX_RATE, balance){
    balance -= (PRICE + TAX_RATE);
    return balance;
}

let numberOfPhones = 0;
let numberOfAccessory = 0;
let balance = 0;
let check = 0;
while(balance < 500){
    balance = Input("Input your bank balance (>=500) : ")
}

while(ACCESSORY_PRICE + TAX_RATE <= balance){
    let choice = 0;
    while(choice < 1 || choice > 2){
        choice = Input("-----MENU-----\n1 - Byu phone\n2 - Byu accessory\n\n(Your balance : " + balance + "$)\n(Number of bought phones : " + numberOfPhones + ")\n(Number of bought accessory : " + numberOfAccessory + ")")
    }
    switch(choice){
        case "1":{
            if(check > 0 && check < 2){
                alert("You should byu the accessory for your phone!")
                break;
            }
            else{
                if(TELEPHONE_PRICE + TAX_RATE <= balance){
                    balance = Purchase(TELEPHONE_PRICE, TAX_RATE, balance);
                    numberOfPhones++;
                    if(numberOfPhones > numberOfAccessory){
                        check++;
                    }
                }
                else{
                    alert("Insufficient funds")
                }
            }
            break;
        }
        case "2":{
            balance = Purchase(ACCESSORY_PRICE, TAX_RATE, balance);
            numberOfAccessory++;
            if(check > 0 && check < 2){
                check--;
            }
            break;
        }
    }
}
