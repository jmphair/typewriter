const sentence = "hello there from lighthouse labs";
let delay = 0; //need to capture the delay as a variable

for (const char of sentence) {
  setTimeout(() => { 
    process.stdout.write(char); // print the char here using the method described...
  }, delay) //instead of the 1s we placed here earlier it now becomes the delay variable...
  delay += 50; //within the loop we set the delay to equal 50ms...
}
//Happy Path... no if/else statement needed!
setTimeout(() => {
  process.stdout.write("\n");
}, delay);
