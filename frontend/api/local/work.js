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
			
I worked as a Software Engineer within the Connections Team of the Content Distribution Services within BBC Design & Engineering.\n

Content Distribution Services is the department within Design & Engineering that builds and operates published content APIs that power the BBC Online. Our mission is to craft a simple & coherent BBC APIs that allows internal and external developers to build innovative and high scale solutions using BBC content.\n

The Connections team are responsible for APIs that maintain BBC concepts and the connections between these. We are also responsible for APIs that store collections of related or editorially selected content. These APIs are used across the BBC including the website and/or mobile applications for News, Sports, Bitesize and Radio.
			`, 
		},
	]
}


export default function (command) {
	return work
}
