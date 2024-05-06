playerOne = input("Choose rock, paper, or scissors: ").lower()

playerTwo = input("Choose rock, paper, or scissors: ").lower()

# if playerTwo is equal to playerOne, print Tie!
# if playerOne is rock and playerTwo is paper, print PlayerTwo wins!
# if playerOne is paper and playerTwo is scissors, print Player One wins! 
# rock beats scissors
# scissors beats paper
# paper beats rock
# ties

if playerOne == playerTwo:
    print("Tie!")
elif playerOne == "rock" and playerTwo == "scissors" or playerOne == "paper" and playerTwo == "rock" or playerOne == "scissors" and playerTwo == "paper":
    print("Player One wins!")
else: 
    print("Player Two wins!")