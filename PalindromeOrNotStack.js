var letters = [];
var word = "hero";

var rword = "";

//inser the word in the stack 

for(var i = 0 ; i< word.length; i++) {
    letters.push(word[i]);
}

for(var i= 0 ; i<word.length; i++) {
    rword+= letters.pop();
}


if(word == rword) {
    console.log(`${word} is palindrome`)
}


else{
    console.log(`${word} is not palindrome`)
}







