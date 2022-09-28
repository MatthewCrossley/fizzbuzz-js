const prompt = require("prompt-sync")();

function parseArg(arg, rules){
    for (key in rules){
        if (arg.indexOf(`${key}=`) === 0){
            rules[key] = Number(arg.replace(`${key}=`, ""))
            return
        }
    }
}

// Here, we create our main function.
function fizzbuzz() {
    var rules = {
        "fizz": 3,
        "buzz": 5,
        "bang": 7,
        "bong": 11,
        "fezz": 13,
        "reverse": 17,
        "maxNum": -1
    }

    // process each arg into rules dict
    process.argv.slice(2).forEach(a => parseArg(a, rules))

    console.log('Welcome to FizzBuzz!');

    if (rules["maxNum"] === -1){
        const input = prompt("Max number to print up to: ")
        rules["maxNum"] = Number(input)
    }

    // Put your code here...
    for (var i = 1; i < rules["maxNum"]; i++){
        var fizz = i % rules["fizz"] == 0
        var buzz = i % rules["buzz"] == 0
        var bang = i % rules["bang"] == 0
        var bong = i % rules["bong"] == 0
        var fezz = i % rules["fezz"] == 0
        var reverse = i % rules["reverse"] == 0
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
