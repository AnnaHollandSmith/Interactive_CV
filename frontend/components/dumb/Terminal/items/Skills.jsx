import React from 'react'
import TerminalItem from './Item'


export class Skills extends React.PureComponent{
	constructor(props){
		super(props)
		this.state = {size: window.innerWidth < 445 ? 4 : 2}
		this.handleResize = this.handleResize.bind(this)
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize)
	}

	handleResize(event){
		if(this.state.size === 2 && event.target.innerWidth < 445 ){
			this.setState({size: 4})
		}

		if(this.state.size === 4 && event.target.innerWidth > 445){
			this.setState({size: 2})
		}
	}

	render(){
		const {
			value,
			command
		} = this.props.data

		value.technologies.sort( (a,b) => {return b.mastery - a.mastery})
		value.processes.sort( (a,b) => {return b.mastery - a.mastery})
		value.softskills.sort( (a,b) => {return b.mastery - a.mastery})

		const techList = value.technologies.map( (skill, index) =>
			<SkillBar key={index} skill={skill} size={this.state.size}/>
		)

		const processList = value.processes.map( (skill, index) =>
			<SkillBar key={index} skill={skill} size={this.state.size}/>
		)

		const softskillsList = value.softskills.map( (skill, index) =>
		<SkillBar key={index} skill={skill} size={this.state.size}/>
		)

		return (
			<TerminalItem command={command} path={this.props.path}>

				<section className='result-area'>
					<h5 className='coloured-text'>NB: I value and prioritise continuous professional and personal development. As such, I don't believe we ever really 'accomplish' a skill. </h5>
					<h4 className='title'>TECHNICAL SKILLS:</h4>
					{techList}
					<h4 className='title'>PROCESSES:</h4>
					{processList}
					<h4 className='title'>PROFESSIONAL SKILLS:</h4>
					{softskillsList}
				</section>
			</TerminalItem>
		)
	}
}



/**
* A Single Skill Bar Component
*/
class SkillBar extends React.Component{
	constructor(props){
		super(props)
		this.state = {currentM: 0}
		this.intervalID = null
	}

	componentDidMount() {
		this.intervalID = setInterval( () => {
			this.setState({currentM: this.state.currentM + 1})
		}, 50)
	}

	componentDidUpdate() {
		if(this.state.currentM >= this.props.skill.mastery){
			clearInterval(this.intervalID)
		}
	}

	componentWillUnmount() {
		clearInterval(this.intervalID)
	}

	render(){
		const {skill,size} = this.props
		const currentM = this.state.currentM

		return (
			<article className='flex-row'>
				<div className='cell sm'>{skill.name}:</div>
				<div className='cell fill'>
					| { '█'.repeat(Math.round(currentM/size)) }{'░'.repeat((100/size) - Math.round(currentM/size)) } | {currentM}%
				</div>
			</article>
		)
	}
}
