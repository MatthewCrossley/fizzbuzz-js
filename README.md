# FizzBuzz

### Usage
Normal:
```bash
$ node fizzbuzz.js
Welcome to FizzBuzz!
Max number to print up to: [user input 5]
1
2
Fizz
4
Buzz
```
Skipping the user prompt:
```bash
$ node fizzbuzz.js maxNum=5
Welcome to FizzBuzz!
1
2
Fizz
4
Buzz
```
Changing the fizz/buzz divisors:
```bash
$ node fizzbuzz.js maxNum=5 fizz=1 buzz=2
Welcome to FizzBuzz!
Fizz
FizzBuzz
Fizz
FizzBuzz
```
Chaining command line rules:
```bash
$ node fizzbuzz.js maxNum=5 fizz=buzz=2
Welcome to FizzBuzz!
1
FizzBuzz
3
FizzBuzz
```

1. Fork this repo
    * Go to this repo's GitHub page (https://github.com/CorndelWithSoftwire/fizzbuzz-js)
    * Click `Fork` in the top-right of the page - this will create a copy of this repo in **your own GitHub account**

2. Clone (download) the repo
    * Go to your newly-created fork of the repo (on GitHub).
    * Click `Clone or download` (the green button on the right).
    * Make sure the page says `Clone with SSH` (rather than `Clone with HTTPS`).
    * Open your git client (e.g. GitKraken) and use this link to clone the repo.  
    Your trainer will able to help you with this.

3. "Cloning the repo" will create a folder on your computer with the files from this repo.  
Open this folder in IntelliJ / Visual Studio Code.

4. Open a command-prompt in this same folder.  
Your trainer can show you how to do this, if you need any help.

5. Run this command to run your code:  
`node fizzbuzz.js`