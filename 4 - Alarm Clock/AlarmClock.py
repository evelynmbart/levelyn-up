from playsound import playsound
import time

# Make it update one line of output
    # Invisible chars that manipulate the terminal
CLEAR = "\033[2J" # clears the terminal screen
CLEAR_AND_RETURN = "\033[H" # rewrite over previous output

# Define a function that determines how long to play the alarm sound
def alarm(seconds):
    time_elapsed = 0
    
    print(CLEAR)
    while time_elapsed < seconds:
        time.sleep(1) # wait for one second
        time_elapsed += 1

        time_left = seconds - time_elapsed # how much time is left
        minutes_left = time_left // 60 # how many minutes left
        seconds_left = time_left % 60 

        print(f"{CLEAR_AND_RETURN}Alarm will sounds in: {minutes_left:02d}:{seconds_left:02d}")

    playsound("alarm.mp3")

minutes = int(input("How many minutes: "))
seconds = int(input("How many seconds: "))
total_seconds = minutes * 60 + seconds
alarm(total_seconds)