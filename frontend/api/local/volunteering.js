const volunteering = {
	jobs: [
		{
			employer: 'CodeFirst:Girls',
			role: 'Volunteer Instructor',
			dates: {from: 'August 2016', to: 'Present'},
			url: 'https://www.codefirstgirls.org.uk/',
			description: `
			CodeFirst: Girls is ... 
			`,
			achievements: []
		},{
			employer: 'CodeYourFuture',
			role: 'Organiser and volunteer',
			dates: {from: 'January 2017', to: 'Present'},
			url: 'https://codeyourfuture.io/',
			description: `
			CodeYourFuture is...
			`,
			achievements: []
        },
        {
            employer: 'Code4000',
            role: 'Volunteer',
			dates: {from: 'January 2017', to: 'Present'},
			url: 'https://www.code4000.org/en',
			description: `
			Code4000 is a...
			`,
			achievements: [] 
        },
	]
}


export default function (command) {
	return volunteering
}
