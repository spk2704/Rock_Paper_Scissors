import random


choices = ["Rock", "Paper", "Scissors"]
userCount = 0
compCount = 0


def playGame():
    global userCount, compCount

    while True:   # While user or computer do not have 3 points
       userChoice = input("Choose (Rock, Paper or Scissors): ").capitalize()

       if userChoice not in choices:
          print("Please enter Rock, Paper or Scissors! ")
          continue
       
       compChoice = random.choice(choices)

       # Computer and User choices
       print(f"You chose {userChoice}")
       print(f"Computer chose {compChoice}")

       if userChoice == compChoice:
          print("It's a tie!")
          print(f"Your current count is {userCount}")
          print(f"Computer's current count is {compCount}")

       elif (userChoice == "Rock" and compChoice == "Scissors") or \
          (userChoice == "Paper" and compChoice == "Rock") or \
          (userChoice == "Scissors" and compChoice == "Paper"):
          userCount += 1
          print(f"You Won! Your current count is {userCount}")
          print(f"Computer Lost! Their current count is {compCount}")

       elif (userChoice == "Scissors" and compChoice == "Rock") or \
          (userChoice == "Rock" and compChoice == "Paper") or \
          (userChoice == "Paper" and compChoice == "Scissors"):
          compCount += 1
          print(f"You Lost! Your current count is {userCount}")
          print(f"Computer Won! Their current count is {compCount}")

       if userCount == 3:
          print("YOU WON! COMPUTER LOST!")
          break
       elif compCount == 3:
          print("YOU LOST! COMPUTER WON!") 
          break 
         
def playAgain():

  
    # Instructions
    print("""
🎮 Welcome to Rock, Paper, Scissors! 🎮

📝 How to Play:

1. Your goal is to beat the computer by choosing the winning move!
2. You'll be asked to type one of the following:
   - Rock
   - Paper
   - Scissors
3. The computer will randomly pick one too.
4. The rules are simple:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
5. If both you and the computer choose the same — it's a tie!

🏆 Win the Game:
- The first player to score 3 points wins the match!

⚠️ Tips:
- Spelling matters! Type your choice exactly as shown.
- You can type in any case (e.g. rock, ROCK, Rock) — it will be fixed automatically.

Good luck, and have fun! ✌️
""")

  
    while True:
        global userCount, compCount
        userCount = 0
        compCount = 0
        playGame()

        while True:
            again = input("Would you like to play again (yes/no)? ").lower()
            if again == "yes":
                break
            elif again == "no":
                print("Thanks for playing!")
                return
            else:
                print("Please type 'yes' or 'no'")
      
playAgain()
