const prompt = require("prompt-sync")();

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    const input = prompt("Max number to print up to: ")
    var maxNum = Number(input)

    // Put your code here...
    for (var i = 1; i < maxNum; i++){
        var fizz = i % 3 == 0
        var buzz = i % 5 == 0
        var bang = i % 7 == 0
        var bong = i % 11 == 0
        var fezz = i % 13 == 0
        var reverse = i % 17 == 0
        var out = []

        if (fizz){
            out.push("Fizz")
        }
        if (buzz){
            out.push("Buzz")
        }
        if (bang) {
            out.push("Bang")
        }
        if (bong){
            // bong overrides everything else
            // so don't push here
            out = ["Bong"]
        }
        if (fezz){
            for (var j = 0; j < out.length; j++){
                if (out[j].indexOf("B") === 0){
                    out.splice(j, 0, "Fezz")
                    break
                }
            }
            if (out.indexOf("Fezz") === -1){
                out.push("Fezz")
            }
        }

        if (reverse){
            out.reverse()
        }

        if (out.length === 0){
            console.log(i)
        } else {
            console.log(out.join(""))
        }
    }
    
}

// Now we run the main function...
fizzbuzz();
