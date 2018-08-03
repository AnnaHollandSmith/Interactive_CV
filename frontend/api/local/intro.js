import commands from './commands'

const intro = {


	art: `
_     _  _______  ___      _______  _______  __   __  _______
| | _ | ||       ||   |    |       ||       ||  |_|  ||       |
| || || ||    ___||   |    |       ||   _   ||       ||    ___|
|       ||   |___ |   |    |       ||  | |  ||       ||   |___
|       ||    ___||   |___ |      _||  |_|  ||       ||    ___|
|   _   ||   |___ |       ||     |_ |       || ||_|| ||   |___	 
|__| |__||_______||_______||_______||_______||_|   |_||_______|  
	`,
	welcomeMessage: `
	Thanks for visiting my Personal Website. My name is Anna Holland-Smith and I'm a Software Engineer. Please use the commands to navigate around and find out a little more about me. (Scroll Down)
	`,
	commands: commands(),
	example: {
		instruction: 'To display some of the courses I have studied type',
		command: 'education --online'
	},
	ps: `
	type "print" and press enter to be taken to a pdf of my cv.
	`
}



export default function (command) {

	return intro
}

