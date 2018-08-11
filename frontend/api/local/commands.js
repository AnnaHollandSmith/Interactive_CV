const commands = [
	{name: 'clear', info: 'Reset the terminal and display these instructions'},
	{name: 'print', info: 'Print out a PDF version of my resume'},
	{name: 'bio', info: 'Displays my bio information e.g contact info'},
	{name: 'projects', info: 'Displays my favorite projects that I have created'},
	{name: 'skills', info: 'Displays my technical skills with a mastery level'},
	{name: 'education', info: 'Displays all the education I have received'},
	{name: 'work', info: 'Displays my work experience'},
	{name: 'volunteering', info: 'Displays some of my volunteering work'},
	{name: 'awards', info: 'Displays some of the awards I have won for my work'}
]


export default function (options) {

	if(options && options.length > 1){
		let value = options[1]
		let com = []
		for (let i = 0; i < commands.length; i++) {
			let c = commands[i].name.split(' ')[0]
			if(!com.includes(c) && c !== value && c.startsWith(value)){
				com.push(c)
			}
		}
		return com
	}
	return commands
}
