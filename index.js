// Part 1
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    })
  }
  
  delay(3000).then(() => alert('done in 3 seconds'));


  // Part 2

  let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

// In this piece of code the output will be "1".
// Because, only first resolve will be taken into account

// Part 3

promise.then(f1).catch(f2); // will handle the error
promise.then(f1, f2);  // error will not be eliminated




