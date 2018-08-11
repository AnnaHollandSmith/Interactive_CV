const work = {
	jobs: [
		{
			employer: 'The Hut Group',
			role: 'Programme Manager | THG Technology and Innovation Accelerator',
			location: {city: 'Manchester', country: 'UK'},
			dates: {from: 'May 2018', to: 'Present'},
			url: 'https://www.thg.com/',
			description: `
			The Hut Group is one of Europe's fastest growing technology companies operating, with increasing dominance, in the e-commerce space. THG's Technology and Innovation Accelerator provides an opportunity for the company to invest in attracting and retaining the very best to careers in technology. In the face of a growing skills gap and with the need to continue to grow our technology teams to sustain our growth, THG is building out it'sown talen pipeline. Our Accelerator programme will enable us to hire bright graduates from non-computer science backgrounds and limited programming experience and commit to providing them, over the course of six months, the foundations that they will need to succeed as a software engineer withing our company. My role has been to develop and contribute to the delivery of a full curriculum, encompassing technical skills (including foundations of programming in Python, operating systems, computational thinking and object oriented programming in Java) an "industry primer" (including an introduction to e-commerce, marketing, the journey of a customer) and a professional skills curriculum (including developing a growth mindset, working collaboratively as well as industry specific training in the legal and ethical implications of software engineering).
			`,
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
		},{
			employer: 'Women Who Keynote',
			role: 'Co-creator',
			location: {city: 'Manchester', country: 'UK'},
			dates: {from: 'December 2017', to: 'Present'},
			url: 'https://womenwhokeynote.com/',
			description: `
			
			I am one of the co-creators of Women Who Keynote, a platform designed for women* to promote themselves for speaking opportunities.

Denying women opportunities to present at professional conferences and events prevents them from gaining visibility and deprives their colleagues of their valuable perspectives. Failure to listen to the voices of female experts contributes to the continued gender diversity problems experienced in many industries.

The mission of Women Who Keynote is to contribute to the elimination of all-male panels and help improve the visibility of women in male-dominated industries. Our platform is intended to hold event organisers to account and encourage greater diversity in their speaker lineups.
			`, 
		},
	]
}


export default function (command) {
	return work
}
