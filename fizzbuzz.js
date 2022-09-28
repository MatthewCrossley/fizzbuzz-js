

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (var i = 1; i < 101; i++){
        var fizz = i % 3 == 0
        var buzz = i % 5 == 0
        var bang = i % 7 == 0
        var bong = i % 11 == 0
        var out = ""

        if (fizz){
            out += "Fizz"
        }
        if (buzz){
            out += "Buzz"
        }
        if (bang) {
            out += "Bang"
        }
        if (bong){
            // bong overrides everything else
            // so don't += here
            out = "Bong"
        }

        if (out === ""){
            console.log(i)
        } else {
            console.log(out)
        }
    }
    
}

// Now we run the main function...
fizzbuzz();
