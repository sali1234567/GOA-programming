let myName = "Sali";
let lastName = "Chuguashvili";
let study = "G.O.A";


let yourName = prompt(`Hello my name is ${myName} and What is your name?`);
let yourLastName = prompt(`my lastname is ${lastName} and what is your lastname?`);
let yourStudy = prompt(`I'm studing programming in ${study} and Where do you study programming?`);

function you(){
    console.log(yourName);
    if (yourName == myName){
        console.log("WOW, same name ");
    }
    console.log(yourLastName );
    if (yourLastName == lastName){
        console.log("Wow, same lastname, so cool ");
    }
    console.log(yourStudy );
    if (yourStudy == study){
        console.log("Good choice");
    }else{
        console.log("You will like G.O.A");
    }
}

you()

console.log("I'm learning js and I can write a code, which will output odd numbers up to 100")

for (oddNumber = 1 ; oddNumber <= 100 ; oddNumber +=2){
    console.log(oddNumber)
}

console.log("Even numbers up to 100")

evenNumber = 0;
while (evenNumber <= 99){
    evenNumber +=2
    console.log(evenNumber)
}