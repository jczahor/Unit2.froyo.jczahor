//A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type [vanilla,vanilla,vanilla,strawberry,coffee,coffee]. 
// When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

const customerFlavorString = prompt(
    "Please choose a flavor option: " 
)

const stringArray = customerFlavorString.split(",")
console.log(stringArray)

console.table(stringArray)

function countOccurrences(stringArray) {
    const counts = {};
    for (const item of stringArray) {
      counts[item] = (counts[item] || 0) + 1;
    }
    return counts;
  }

const occurrences = countOccurrences(stringArray);
console.log(occurrences)

