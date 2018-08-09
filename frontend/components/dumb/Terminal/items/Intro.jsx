import React from 'react'
import TerminalItem from './Item'


export const Intro = ({data, path}) => {

	const {
		art,
		welcomeMessage,
		commands,
		example,
		ps
	} = data.value

	const cList = commands.map( (cObj, index) =>
		<article key={index} className='flex-row'>
			<div className='cell md'>[{cObj.name}]</div>
			<div className='cell fill'>{cObj.info}</div>
		</article>
	)

	return (
		<TerminalItem command={data.command} path={path}>
			<section className='result-area'>
				<pre className='ascii-art'>
					{art}
				</pre>

				<p className='welcome'>
					{welcomeMessage}
				</p>

				<h4 className='title'>
					COMMANDS:
				</h4>

				{cList}

				<h4 className='title'>
					EXAMPLE:
				</h4>

				<div className='flex-row'>
					<p>{example.instruction}</p>
				</div>

				<div className='flex-row'>
					<p>{example.command}</p>
				</div>

				<h4 className='title'>
					This is all too much, just take me to your CV:
				</h4>
				
				<div className='flex-row'>
					<p>{ps}</p>
				</div>


			</section>
		</TerminalItem>
	)
}
