import React from 'react'
import TerminalItem from './Item'


export const Awards = ({data, path}) => {

	const {
		won,
		finalist
	} = data.value

	const wonList = won.map( (award, index) =>
		<Won won={award} key={index}/>
	)

	const finalistList = finalist.map( (award, index) =>
		<Finalist finalist={award} key={index}
	/>
	)

	return (
		<TerminalItem command={data.command} path={path}>
			<section className='result-area'>
				{wonList.length > 0 &&
					<h4 className='title'>Winner:</h4>
				}
				{wonList}

				{finalistList.length > 0 &&
					<h4 className='title'>Finalist:</h4>
				}
				{finalistList}
			</section>
		</TerminalItem>
	)
}

/**
* School Component
*/
const Won = ({won}) => (
	<div className='row-block'>
		<article className='flex-row'>
			<div className='cell sm sub-title'>Awarding Body:</div>
			<div className='cell fill'>{won.awarding}</div>
		</article>

        	<article className='flex-row'>
			<div className='cell sm sub-title'>Award</div>
			<div className='cell fill'>{won.award}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm sub-title'>Description</div>
			<div className='cell fill'>{won.description}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm sub-title'>Website:</div>
			<div className='cell fill'>
				<a href={won.url} target='__blank'>{won.url}</a>
			</div>
		</article>
	</div>
)


/**
* Online Component
*/
const Finalist = ({finalist}) => (
	<div className='row-block'>
		<article className='flex-row'>
			<div className='cell sm sub-title'>Awarding Body:</div>
			<div className='cell fill'>{finalist.awarding}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm sub-title'>Award:</div>
			<div className='cell fill'>{finalist.award}</div>
		</article>


		<article className='flex-row'>
			<div className='cell sm sub-title'>Description:</div>
			<div className='cell fill'>{finalist.description}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm sub-title'>Website:</div>
			<div className='cell fill'>
				<a href={finalist.url} target='__blank' alt='Course Url'>Link to website</a>
			</div>
		</article>
	</div>
)
