name = input("What is your name: ")
print("Welcome", name, "to this adventure!")

answer = input(
    "You are on a dirt road, it has come to an end and you can go left or right. Which way would you like to go? ").lower()

if answer == "left":
    answer = input("You've come to a river, you can walk around it. Or swim across. Type walk or swim: ")

    if answer == "swim":
        print("You swam across the river and were eaten by an alligator. You lose.")
        quit()
    elif answer == "walk":
        print("You walked for many miles, ran out of water and died of dehydration. You lose")
        quit()
elif answer == "right":
    answer = input("You've come to a bridge, it looks wobbly. Do you want to cross it or go underneath? Type cross or underneath: ")

    if answer == "cross":
        print("As you cross the rickety bridge, you step on a broken slab and fall through the bridge. You lose. ")
    elif answer == "underneath":
        answer = input("You step below the bridge and find a sleeping troll. Do you wake it or sneak around it? Type wake or sneak. ")
        if answer == "wake":
            print("The troll awakens, and gives you the treasure. You win!")
        elif answer == "sneak":
            answer = input("You sneakily tip-toe around the troll and past the wobbily bridge. Congrats on making it to safety. Past the bridge you see a village. Do you wish to visit it or travel in a different direction? Type visit or travel. ")
            if answer == "visit":
                print("You visit the village, fall in love with the princess and become the ruler. You win!")
            elif answer == "travel":
                print("You turn left, passing the village and are thought to be a threat. The watchtower guards shoot you. You lose.")
else:
    print("Invalid input provided. You lose.")
    quit()