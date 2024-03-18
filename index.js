// Code your solutions in this file


function writeCards(gifts,surprise){
    const logMessages = [];
    for(let i=0; i < gifts.length; i++){
    const logMessage =`Thank you, ${gifts[i]}, for the wonderful ${surprise} gift!`;
    logMessages.push(logMessage);
    }

    return logMessages;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown(countD){
//let countup = 10;
while (countD >= 0) {
  console.log(countD--);
}
}
countDown(9);