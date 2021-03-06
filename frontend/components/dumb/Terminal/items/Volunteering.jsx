import React from 'react'
import TerminalItem from './Item'


export const Volunteering = ({data, path}) => {
	const jobs = data.value.jobs

	const jobList = jobs.map( (job, index) => {
		const aList = job.achievements.map( (a, i) => <li key={i}>{a}</li>)
		return (
			<Job job={job} aList={aList} key={index}/>
		)

	})

	return (
		<TerminalItem command={data.command} path={path}>
			<section className='result-area'>
				<h4 className='title'>Work Experience:</h4>
				{jobList}
			</section>
		</TerminalItem>
	)
}


const Job = ({job, aList}) => (
	<div className='row-block'>
		<article className='flex-row'>
			<div className='cell sm sub-title'>Organisation:</div>
			<div className='cell fill'>{job.employer}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm sub-title'>Role:</div>
			<div className='cell fill'>{job.role}</div>
		</article>

        	<article className='flex-row'>
			<div className='cell sm sub-title'>Description:</div>
			<div className='cell job'>{job.description}</div>
		</article>


		<article className='flex-row'>
			<div className='cell sm sub-title'>Dates:</div>
			<div className='cell fill'>{job.dates.from} - {job.dates.to}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm sub-title'>Website:</div>
			<div className='cell fill'>
				<a href={job.url} target='__blank'>{job.url}</a>
			</div>
		</article>
	</div>
)
