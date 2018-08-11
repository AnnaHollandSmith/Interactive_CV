const volunteering = {
	jobs: [
		{
			employer: 'CodeFirst:Girls',
			role: 'Volunteer Instructor',
			dates: {from: 'August 2016', to: 'Present'},
			url: 'https://www.codefirstgirls.org.uk/',
			description: `
			​Code First: Girls works to help increase the number of women in tech. I am a volunteer Tutor with the Manchester General Course hosted by Thoughtworks. 

			The course content included: HTML, CSS, JavaScript, jQuery, Git, GitHub collaboration, and more (front-end programming).
			`,
			achievements: []
		},
		{
			employer: 'Codebar',
			role: 'Organiser',
			dates: {from: 'December 2017', to: 'Present'},
			url: 'https://codebar.io/',
			description: `
			​Codebar helps to address technology’s diversity challenges through workshops, coaching, tutorials and events. They started in 2013 and have since created an amazing community of technical people all around the world, with 17 chapters and hundreds of students attending every week.
			`,
			achievements: []
		},
		{
			employer: 'Hive Manchester',
			role: 'Mentor',
			dates: {from: 'October 2017', to: 'Present'},
			url: 'http://www.hivelearning.net/',
			description: `
			​Hive Manchester run digital making activities for 13-18 year olds, outside or within formal education. Hive utilises facilitators and mentors who work in the industry. Events range from 1 hour tasters to 1 week camps.
			`,
			achievements: []
		},
		{
			employer: 'CodeYourFuture',
			role: 'Organiser and volunteer',
			dates: {from: 'January 2017', to: 'Present'},
			url: 'https://codeyourfuture.io/',
			description: `
			CodeYourFuture Manchester is a charity, teaching refugees and asylum seekers how to code and preparing them for Junior Developer roles across the North West of England. \n

			I am part of the team responsible for bringing the Code Your Future programme to Greater Manchester after successful pilots in London and Glasgow. Code Your Future Manchester offers a six-month education programme for refugees and asylum seekers, providing training in HTML, CSS and Javascript and preparing students for Junior Developer roles across the North West of England. 
			`,
			achievements: []
        },
        {
            employer: 'Code4000',
            role: 'Volunteer',
			dates: {from: 'January 2017', to: 'Present'},
			url: 'https://www.code4000.org/en',
			description: `
			Code 4000 is a new initiative, taking inspiration from The Last Mile - an established prison coding programme that started in San Quentin but now runs in several prisons in California - that aims to teach prisoners coding skills.\n
			
			People who leave prison and find work are highly unlikely to reoffend. At the same time employment is one of the great barriers for people with criminal records, and many companies will not hire them. \n
			
			By teaching prisoners coding skills, it is possible to significantly increase their chances of employment post-release, as well as help supply companies with the skills they so desperately need. 

			`,
			achievements: [] 
		},
		{
            employer: 'RailsGirls',
            role: 'mentor and speaker',
			dates: {from: 'October 2017', to: 'October 2017'},
			url: 'http://railsgirls.com/',
			description: `
			Our aim at Rails Girls is to give tools and a community for women, help them understand technology and to build their ideas. We do this by providing a great experience on building things and by making technology more approachable. With the help and guidance of our coaches, students can create a real web application in a fun and relaxed atmosphere.

			`,
			achievements: [] 
        },
	]
}


export default function (command) {
	return volunteering
}
