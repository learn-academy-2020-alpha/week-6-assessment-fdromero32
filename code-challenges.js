// ASSESSMENT 6: Coding Practical Questions
// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
    {name: "ford prefect", occupation: "hitchhiker"},
    {name: "zaphod beeblebrox", occupation: "president of the galaxy,"},
    {name: "arthur dent", occupation: "radio employee"}
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

const sentenceMaker = (array) => {
    array.forEach(element => {
        var names = element.name.toLowerCase().split(' ')
        var capitalNames = names.map((value) => value.charAt(0).toUpperCase() + value.substring(1)).join(' ')
        // console.log(capitalNames)
        var jobs = element.occupation
        // console.log(jobs)
        
        console.log(`${capitalNames} is a ${jobs}.`)
        //I dont understand why return gives undefined but console.log is fine...?
    })
   
}

// sentenceMaker(people)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const divideByThree = (array) => {
    newArr = []
    array.map(value => {
        if(typeof value === 'number'){
           newArr.push(value % 3)
        }
    })
    console.log(newArr)
    //Same as above, I don't get why return doesn't work here??? return newArr is undefined but I dont understand why if the console.log shows the values are there?
}

// divideByThree(testingArray1)
// divideByThree(testingArray2)



// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const uniqueValues = (array1, array2) =>{
    // spread operator takes all values from the array and concats them. 
    const spreadArray = [...array1, ...array2]
    //The Set object lets you store unique values of any type, whether primitive values or object references.
    //new Set creates a new object with the unique values of the concatinated array. The spread operator accesses the items within the object and returns them as an array. 
    console.log([...new Set(spreadArray)])
}

uniqueValues(testingArray3, testingArray4)
//value returned without spread operator before the keywork 'new' : [ Set { 3, 7, 'hi', 10, 'hello', 4, 1 } ]