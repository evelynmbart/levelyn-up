import random
import string

def generate_password(min_length, numbers=True, special_characters=True):
# Get letts, digits, special characters

    letters = string.ascii_letters
    digits = string.digits
    special = string.punctuation

# Stringify the variables

    characters = letters
    if numbers:
        characters += digits
    if special_characters:
        characters += special

# No password, criteria met, numbers, or special characters

    pwd = ""
    meets_criteria = False
    has_number = False
    has_special = False

# Generate new character if it doesn't meet criteria and is too short

    while not meets_criteria or len(pwd) < min_length:
        new_char = random.choice(characters)
        pwd += new_char

# Determine if a number

        if new_char in digits:
            has_number = True
        elif new_char in special:
            has_special = True

        meets_criteria = True
        if numbers:
            meets_criteria = has_number
        if special_characters:
            meets_criteria = meets_criteria and has_special

    return pwd

min_length = int(input("Enter the minimum length: "))
has_number = input("Do you want to have numbers (y/n)? ").lower() == "y"
has_special = input("Do you want to have special characters (y/n)? ").lower() == "y" # turns capitals into lowercase, checks if equal to y
pwd = generate_password(min_length, has_number, has_special)
print("The generated password is:", pwd)











