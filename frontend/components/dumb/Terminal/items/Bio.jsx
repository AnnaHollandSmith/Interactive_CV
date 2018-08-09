import React from 'react'
import TerminalItem from './Item'
import {
	GithubSVG,
	LinkedinSVG
} from 'dumb/SVGs'


export const Bio = ({data, path}) => {

	const {
		name,
		role,
		email,
		location,
		profiles,
		about
	} = data.value

	return (
		<TerminalItem command={data.command} path={path}>
			<section className='result-area'>

				<h4 className='title'>Bio:</h4>
				<article className='flex-row'>
					<div className='cell sm sub-title'>Name: </div>
					<div className='cell name'>{name}</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm sub-title'>Role: </div>
					<div className='cell role'>{role}</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm sub-title'>About: </div>
					<div className='cell about' style={{ whiteSpace: 'pre-line'}}>{about}</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm sub-title'>Location: </div>
					<div className='cell fill'>
						{location.city}, {location.country}
					</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm sub-title'>Email: </div>
					<div className='cell fill'>{email}</div>
				</article>

				<h4 className='title'>Profiles:</h4>
				<article className='flex-row'>
					<div className='cell sm cell-logo '>
						<GithubSVG/>
						<span>
							Github:
						</span>
					</div>
					<div className='cell fill'>
						<a href={profiles.github} target='__blank'
							onClick={e => window.ga('send', 'social', 'Github', profiles.github)}>
							{profiles.github}
						</a>
					</div>
				</article>
				<article className='flex-row'>
					<div className='cell sm cell-logo '>
						<LinkedinSVG/>
						<span>
							Linkedin:
						</span>
					</div>
					<div className='cell fill'>
						<a href={profiles.linkedin} target='__blank'
							onClick={e => window.ga('send', 'social', 'Linkedin', profiles.linkedin)}>
							{profiles.linkedin}
						</a>
					</div>
				</article>



			</section>
		</TerminalItem>
	)
}
