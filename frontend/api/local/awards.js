const awards = {
	won: [
		{
			awarding: 'CodeFirst:Girls',
			award: '30 under 30: Ones to Watch 2018',
			description: 'put description here', 
			url: 'https://makers.tech/'
		},{
			awarding: 'AbilityNet Tech4Good Awards',
			award: 'Digital Volunteer of the Year',
			description: 'put description here',
			url: 'https://www.codefirstgirls.org.uk/'
		}
	],

	finalist: [
		{
			name: 'UK Social Mobility Awards',
            award: 'Rising Star',
            description: 'put description here',
			url: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004',
		},
	],
}


export default function (commands) {
	return awards
}