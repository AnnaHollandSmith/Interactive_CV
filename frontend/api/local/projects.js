/* global require */

const projects = [
	{	id: 0,
		name: 'Touchbase',
		giturl: 'https://github.com/AnnaHollandSmith/touchbase',
		liveurl: 'https://youtu.be/DqdluFS_gZY',
		description: 'Our entry to Hack Manchester, a React Native personal safety app that uses SMS to save lives',
		topics: ['React Native', 'Bootstrap', 'MongoDB', 'Express'],
		languages: ['JavaScript'],
		images: [require('resources/images/tb1.png'), require('resources/images/tb2.png'), require('resources/images/tb3.png')]
	},
	{	id: 1,
		name: 'Interactive Resume',
		giturl: 'https://github.com/AnnaHollandSmith/Interactive_CV',
		liveurl: 'tbc',
		description: 'My interactive resume',
		topics: ['React', 'Redux', 'Firebase'],
		languages: ['JavaScript', 'SASS'],
		images: [require('resources/images/cv.png'), require('resources/images/cv2.png'), require('resources/images/cv3.png')]
	},
	{
		id: 2,
		name: 'Wome Who Keynote',
		giturl: 'private',
		liveurl: 'https://womenwhokeynote.com/',
		description: 'A platform for women to promote themselves for speaking opportunities',
		topics: ['React', 'Meteor', 'JavaScript'],
		languages: ['JavaScript'],
		images: [require('resources/images/wwk.png'), require('resources/images/wwk2.png'), require('resources/images/wwk3.png')]
	},
	{
		id: 3,
		name: 'AirBeds',
		giturl: 'https://github.com/AnnaHollandSmith/airbeds',
		liveurl: 'none',
		description: 'A simple AirBnb clone',
		topics: ['React', 'Elasticsearch', 'JavaScript'],
		languages: ['JavaScript'],
		images: [require('resources/images/airbed.png')]
	},
	{	id: 4,
		name: 'Pear',
		giturl: 'https://github.com/AnnaHollandSmith/pear',
		liveurl: 'http://findapear.herokuapp.com/users/sign_in',
		description: 'A web-based application designed to enable developers (amateur and professional) to find like-minded individuals to pair program with (locally or remotely).',
		topics: ['Ruby on Rails', 'Javascript', 'Rspec', 'Capybara', 'Jasmine'],
		languages: ['Ruby', 'JavaScript'],
		images: [require('resources/images/pear2.png'), require('resources/images/pear3.png'), require('resources/images/pear4.png')]
	}, 
	{
		id: 5,
		name: 'MakersBnB',
		giturl: 'hhttps://github.com/AnnaHollandSmith/MakersBnB',
		liveurl: 'https://taark-bnb.herokuapp.com/',
		description: 'Our first ever group project during Makers Academy, a coding bootcamp based in London. The site is built in Ruby and was created in a group through the use of pair-programming and effective git wokflows',
		topics: ['Ruby', 'Heroku', 'Sinatra'],
		languages: ['Ruby','HTML','CSS', 'Capybara', 'Rspec'],
		images: [require('resources/images/makers.png')]
	}
]
export default function (commands) {
	return projects
}