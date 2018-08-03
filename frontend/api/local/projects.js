/* global require */

const projects = [
	{
		id: 0,
		name: 'MakersBnB',
		giturl: 'hhttps://github.com/AnnaHollandSmith/MakersBnB',
		liveurl: 'https://taark-bnb.herokuapp.com/',
		description: 'Our first ever group project during Makers Academy, a coding bootcamp based in London. The site is built in Ruby and was created in a group through the use of pair-programming and effective git wokflows',
		topics: ['Ruby', 'Heroku', 'Sinatra'],
		languages: ['Ruby','HTML','CSS', 'Capybara', 'Rspec'],
		images: [require('resources/images/bo1.jpg'), require('resources/images/bo2.jpg'), require('resources/images/bo3.jpg')]
	},
	{
		id: 1,
		name: 'Pear',
		giturl: 'https://github.com/AnnaHollandSmith/pear',
		liveurl: 'http://findapear.herokuapp.com/users/sign_in',
		description: 'A web-based application designed to enable developers (amateur and professional) to find like-minded individuals to pair program with (locally or remotely).',
		topics: ['Ruby on Rails', 'Javascript', 'Rspec', 'Capybara', 'Jasmine'],
		languages: ['Ruby', 'JavaScript'],
		images: [require('resources/images/bo1.jpg'), require('resources/images/bo2.jpg'), require('resources/images/bo3.jpg')]
	}
]

function search(query){
	let results = []
	for (let i = 0; i < projects.length; i++) {

		let langs = projects[i].languages
		let topics = projects[i].topics

		for (let j = 0; j < topics.length; j++) {
			if(topics[j].toLowerCase() === query){
				results.push(projects[i])
				break
			}
		}

		for (let j = 0; j < langs.length; j++) {
			if(langs[j].toLowerCase() === query){
				results.push(projects[i])
				break
			}
		}
	}
	return results
}


export default function (commands) {
	if(commands.length > 1 && commands[1] !== '--search'){
		let err = new Error(`Unknown option: ${commands[1]}
usage: projects [--search]`)
		err.name = 'UnknownOption'
		throw err
	}

	if(commands.length === 3 && commands[1] === '--search'){
		return search(commands[2].toLowerCase())
	}

	return projects
}