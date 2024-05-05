import random
import string

def generate_password(min_length, numbers=True, special_characters=True):
# Get letters, digits, and special characters to choose from when generating a password

    letters = string.ascii_letters
    digits = string.digits
    special = string.punctuation

# Stringify the variables

    characters = letters
    if numbers:
        characters += digits # if numbers = True, add them to the password(characters variable)
    if special_characters:
        characters += special # if special characters = True, add them to the password(characters variable)

# Baseline no password, criteria met, numbers, or special characters

    pwd = ""
    meets_criteria = False
    has_number = False
    has_special = False

# Generate new character if it doesn't meet criteria and is too short

    while not meets_criteria:
        new_char = random.choice(characters) # randomly picks a character from the characters variable
        pwd += new_char

        if new_char in digits:
            has_number = True
        elif new_char in special:
            has_special = True

        # Calculate if pwd meets criteria and store in meets_criteria
        meets_criteria = (len(pwd) >= min_length) and (numbers and has_number) and (special_characters and has_special)

    return pwd

min_length = int(input("Enter the minimum length: "))
has_number = input("Do you want to have numbers (y/n)? ").lower() == "y"
has_special = input("Do you want to have special characters (y/n)? ").lower() == "y" # turns capitals into lowercase, checks if equal to y
pwd = generate_password(min_length, has_number, has_special)
print("The generated password is:", pwd)











