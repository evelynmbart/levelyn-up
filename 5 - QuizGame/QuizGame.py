print("Welcome to my computer quiz!")

playing = input("Would you like to play? (y/n): ").lower() == 'y'

score = 0

answer1 = input("What does CPU stand for? ")
if answer1.lower() == "central processing unit":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer2 = input("What does GPU stand for? ")
if answer2.lower() == "graphics processing unit":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer3 = input("What does RAM stand for? ")
if answer3.lower() == "random access memory":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")


answer4 = input("What does PSU stand for? ")
if answer4.lower() == "power supply":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

gameOver = ("You finished the quiz! Congrats! Your score was: " + str(score))
print(gameOver)
percentageScore = ("You got " + str((score / 4) * 100) + "%")
print(percentageScore)