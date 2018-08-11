const education = {
	inperson: [
		{
			name: 'Makers Academy',
			location: {city: 'London',country: 'UK'},
			degree: 'Coding Bootcamp',
			dates: {from: 'May 2016', to: 'August 2016'},
			url: 'https://makers.tech/'
		},{
			name: 'CodeFirst: Girls',
			location: {city: 'London', country: 'UK'},
			degree: 'Introduction to Web Development',
			dates: {from: 'October 2015', to: 'December 2015'},
			url: 'https://www.codefirstgirls.org.uk/'
		},{
			name: 'The University of Law',
			location: {city: 'London', country: 'UK'},
			degree: 'Legal Practice Certificate',
			dates: {from: 'September 2013', to: 'December 2014'},
			url: 'https://www.law.ac.uk/'
		},{
			name: 'Birkbeck College, University of London',
			location: {city: 'London', country: 'UK'},
			degree: 'LLM (Qualifying Law Degree)',
			dates: {from: 'September 2012', to: 'September 2013'},
			url: 'http://www.bbk.ac.uk/study/2018/postgraduate/programmes/TMLLAWSS_C/'
		},{
			name: 'University College London',
			location: {city: 'London', country: 'UK'},
			degree: 'Gender, Society and Representation, MA',
			dates: {from: 'September 2011', to: 'September 2012'},
			url: 'http://www.ucl.ac.uk/gender-studies/prospective-students/gender-society-and-representation-ma'
		},{
			name: 'The University of York',
			location: {city: 'York', country: 'UK'},
			degree: 'History and History of Art BA(Hons)',
			dates: {from: 'September 2008', to: 'September 2011'},
			url: 'https://www.york.ac.uk/'
		}
	],

	online: [
		{
			name: 'Front-end Web Development',
			school: 'Treehouse',
			dates: {from: 'March 2018', to: 'Present'},
			url: 'https://teamtreehouse.com/home',
		},
		{
			name: 'React',
			school: 'Treehouse',
			dates: {from: 'March 2018', to: 'Present'},
			url: 'https://teamtreehouse.com/home',
		},
		{
			name: 'React',
			school: 'Design Primer',
			dates: {from: 'March 2018', to: 'Present'},
			url: 'https://teamtreehouse.com/home',
		},
		{
			name: 'Introduction to UX',
			school: 'University of Michigan (via edX)',
			dates: {from: 'March 2018', to: 'Present'},
			url: 'https://www.edx.org/micromasters/michiganx-user-experience-ux-research-and-design',
		},
		{
			name: 'Introduction to Machine Learning',
			school: 'Udacity',
			dates: {from: 'January 2017', to: 'February 2017'},
			url: 'https://www.udacity.com/course/intro-to-machine-learning--ud120'
		}
	],
}


export default function (commands) {
	return education
}
