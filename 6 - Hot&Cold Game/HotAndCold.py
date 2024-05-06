import random

topOfRange = input("Please provide a number: ")

# Checking if user input provided is a digit
    # if it is a digit, convert the (string) digit into an integer
if topOfRange.isdigit:
    topOfRange = int(topOfRange)

    if topOfRange <= 0:
        print("Please provide a number greater than 0. ")
        quit()
else:
    print("Invalid input, please provide a number. ")
    quit()

randomNumber = random.randint(0, topOfRange)

numberOfTries = 0

while True:
    numberOfTries += 1
    userGuess = input("Make a guess: ")
    if userGuess.isdigit():
        userGuess = int(userGuess)
    else:
        print("Invalid input, please provide a number. ")
        continue 
    
    if userGuess > randomNumber:
        print("You're too hot, try a guessing a smaller number!")
    elif userGuess < randomNumber:
        print("You're too cool, try guessing a larger number! ")
    else:
        if numberOfTries == 1:
            print("Amazing! You got it! It only took you 1 try.")
        else: 
            print("Amazing! You got it right! It only took you " + str(numberOfTries) + " tries.")
        break

