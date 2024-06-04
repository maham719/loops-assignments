//Assignment 1 Creating a Lesson Plan(Using for loop )


//1. Create a blank array: Start by setting up an empty array named myWork that will hold objects.

let myWork:{name:string,status:boolean}[]=[];

//using a for loop to create lessons
for(let i = 0 ; i<=10; i++){
   let lessons={
    name : `lesson ${i}`,
    status: i%2==0 ? true:false
   }
   //pushing the lessons object in to mywork array
   myWork.push(lessons);
}
//printing the array of objects myWork
console.log(myWork);

     //-----------------------------------------------------------------------------------------------//


//Assignment 2 Guessing Game (Using while loop )

//1. Set a maximum value:
let maxValue:number=10;
//Generate a random number:
let randomNumber:number=Math.floor(Math.random()*maxValue)+1;
//Log this value to the console for development purposes.
console.log(randomNumber);
//Track the guess status: (initially false)
let isCorrect=false;
//4. Simulate user guesses: Use an array to store a series of predefined guesses
let predefinedGuesses=[4,3,7,9,5,10,2];
//5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the correct guess is made.
let i=0; //initializing the loop

while(!isCorrect && i < predefinedGuesses.length){
  
     
    let correctAnswer=predefinedGuesses[i];
    if (correctAnswer===randomNumber){
        console.log(`correct answer is ${correctAnswer}`);
        isCorrect=true;
        break;
    }else if (correctAnswer<randomNumber){
        console.log(`your guess is too low ${correctAnswer}`);
    } else if (correctAnswer>randomNumber){
        console.log(`your guess is too high ${correctAnswer}`)
    }
    i++;
}

     //-----------------------------------------------------------------------------------------------//


//Assignment 3 Counter Incrementer (Using do while loop )

//1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
let counter = 0;

//2. Create a variable, step, to increase your counter by: Define a variable step to hold the value by which the counter will be incremented
let step=5;

//3. Add a do...while loop: In the loop, print the counter to the console and increment it by the step amount each iteration.
do{
    
    console.log(counter);
    counter+=step;
} while (counter<=100);  //4. Continue to loop until the counter is equal to or more than 100: The loop should run as long as the counter is less than 100.


     //-----------------------------------------------------------------------------------------------//


//Assignment 4 Exploring Objects with for...in Loop

//Create a simple object with three items:

let myObject={
    item1:"mobile",
    item2:"laptop",
    item3:"desktop"
}
 
//Use a for...in loop to get properties' names and values from the object:

for(let key in myObject){
    console.log(key, myObject[key]);
}
     //-----------------------------------------------------------------------------------------------//
//Assignment 5.Exploring Arrays with Loops(Using loop )

//Create an empty array:

let myArry:number[]=[];
for(i=1; i<=10; i++){
    myArry.push(i);
}
console.log(`my array after populating ${myArry}`);

for (i=0;i<myArry.length;i++){
    console.log(`Index: ${i}, Value: ${myArry[i]}`);
}
 for (let element of myArry){
    console.log(element);
}