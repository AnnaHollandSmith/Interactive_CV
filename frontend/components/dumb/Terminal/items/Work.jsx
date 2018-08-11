import React from 'react'
import TerminalItem from './Item'


export const Work = ({data, path}) => {
	const jobs = data.value.jobs

	const jobList = jobs.map( (job, index) => {
		return (
			<Job job={job} key={index}/>
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
			<div className='cell sm sub-title'>Employer:</div>
			<div className='cell fill'>{job.employer}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm sub-title'>Role:</div>
			<div className='cell fill'>{job.role}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm sub-title'>Location:</div>
			<div className='cell fill'>
				{job.location.city}, {job.location.country}
			</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm sub-title'>Location:</div>
			<div className='cell fill'>{job.description}</div>
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
