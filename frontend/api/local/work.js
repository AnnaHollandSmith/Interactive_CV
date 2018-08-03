const work = {
	jobs: [
		{
			employer: 'The Hut Group',
			role: 'Programme Manager | THG Technology and Innovation Accelerator',
			location: {city: 'Manchester', country: 'UK'},
			dates: {from: 'May 2018', to: 'Present'},
			url: 'https://www.thg.com/',
			description: `
			The Hut Group is....
			`,
			achievements: [
				'Developed a Technical Curriculum covering (but not limited to) Python, Java, Operating Systems, Databases and Web Development',
				`Developed a 'Professional Skills' Curriculum covering topics such as 'Developing a Growth Mindset', 'Mindfulness' and 'Working Effectively in Teams'`,
				`Developed an 'Industry Primer' Curriculum providing an overview of how technology serves all areas of The Hut Group's order pipeline`,
				`Developed The Hut Group's first ever 'Women in Tech' network`
			]
		},{
			employer: 'BBC',
			role: 'Software Engineer| Content Distribution Services',
			location: {city: 'Manchester', country: 'UK'},
			dates: {from: 'August 2016', to: 'May 2018'},
			url: 'https://www.thg.com/',
			description: `
			Put description here....
			`,
			achievements: [
				'Put achievements here',
			]
		},
	]
}


export default function (command) {
	return work
}
