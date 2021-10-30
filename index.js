// Code your solutions in this file

function writeCards(people, surprise){
    let message = [];
    for (let i = 0; i < people.length; i++){
        message[i] = `Thank you, ${people[i]}, for the wonderful ${surprise} gift!`;
        debugger;
    }
return message;
}
function countDown(num){
    while (num >= 0){
        console.log(num--);
    }
}