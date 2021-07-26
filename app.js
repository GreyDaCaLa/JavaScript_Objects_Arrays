console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2,22,12,17,18,39,129];
const arraySum = (numbers) => {
    let sum =0;
    numbers.forEach(element => {
        sum = sum + element;
        
    });
    return sum;
}

console.log(arraySum(numbers));







// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");



let book = {
    title: "I am Number 4 by Pitticus Lore",
    pages: 126,
    readCount: 2,
    info: function(){
        return `${this.title}, ${this.pages} pages, read ${this.readCount} times.`;
    }

    
};



console.log(book.info());

