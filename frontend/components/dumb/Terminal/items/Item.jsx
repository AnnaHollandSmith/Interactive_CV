import React from 'react'

/**
* Terminal Item Component
* Parent Component for all terminal items
*/
const TerminalItem = ({children, withInput, command, path, onClick}) => (
	<div className={`input-item ${withInput ? 'with-input' : ''}`}
		onClick={onClick}>
		<p>
			<span className='turquoise'> anna </span> at
			<span className='blue'> {path} </span> on
			<span className='purple'> master </span>
		</p>

		{withInput ?
			<div className='input-area'>
				{children}
			</div>
			:
			<div className='input-area'>
				<span className='close left'>[</span>
					$<p>{command}</p>
				<span className='close right'>]</span>
			</div>
		}

		{!withInput && children}
	</div>
)

export default TerminalItem
