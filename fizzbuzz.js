const prompt = require("prompt-sync")();

function parseArg(arg, rules){
    segments = arg.split("=")
    var value = -1
    var keys = []

    for (seg of segments){
        if (seg in rules){
            keys.push(seg)
        } else if (!isNaN(parseInt(seg))){
            value = parseInt(seg)
        }
    }

    for (key of keys){
        rules[key] = value
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
    function checkRule(key, number){
        if (rules[key] === -1){
            return false
        }
        return number % rules[key] == 0
    }
    for (var i = 1; i < (rules["maxNum"] + 1); i++){
        var out = []

        if (checkRule("fizz", i)){
            out.push("Fizz")
        }
        if (checkRule("buzz", i)){
            out.push("Buzz")
        }
        if (checkRule("bang", i)) {
            out.push("Bang")
        }
        if (checkRule("bong", i)){
            // bong overrides everything else
            // so don't push here
            out = ["Bong"]
        }
        if (checkRule("fezz", i)){
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

        if (checkRule("reverse", i)){
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
