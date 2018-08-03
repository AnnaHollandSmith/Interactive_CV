const skills = {
	technologies: [
		{ name: 'Javascript', mastery: 70 },
		{ name: 'HTML', mastery: 60 },
		{ name: 'CSS', mastery: 60 },
		{ name: 'Bash Scripting', mastery: 70 },
		{ name: 'Ruby On Rails', mastery: 60 },
		{ name: 'Python', mastery: 40 },
		{ name: 'ReactJS', mastery: 20 },
		{ name: 'Scala', mastery: 65 },
		{ name: 'TypeScript', mastery: 65 },
		{ name: 'Web Development', mastery: 50 },
		{ name: 'SQL', mastery: 50 },
		{ name: 'NoSQL', mastery: 50 },
	],
	processes: [
		{ name: 'TDD', mastery: 90 },
		{ name: 'Agile Development', mastery: 80},
		{ name: 'XP', mastery: 85 }, 
		{ name: 'Pair Programming', mastery: 80}, 
		{ name: 'Project Management', mastery: 70}
	],
	softskills: [
		{ name: 'Public Speaking', mastery: 90 },
		{ name: 'Writing', mastery: 80},
		{ name: 'Consulting on D&I', mastery: 85 }, 
		{ name: 'Teaching and Mentoring', mastery: 80}
	]
}


export default function (command) {
	return skills
}
