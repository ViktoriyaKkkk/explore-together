import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
			<div className="fixed left-1 top-52 w-full p-6 sm:w-40 bg-black rounded-lg">
				<nav className="space-y-8">
					<div className="space-y-4">
						<h2 className="text-md font-semibold uppercase text-light-gray">Документы</h2>
						<div className="flex flex-col text-xl space-y-2 text-white">
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/age" >Age</Link>
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/city">City</Link>
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/duration">Duration</Link>
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/format">Format</Link>
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/level">Level</Link>
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/periodicity">Periodicity</Link>
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/search">Search</Link>
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/section">Section</Link>
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/time">Time</Link>
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/topic">Topic</Link>
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/user">User</Link>
							<Link className='hover:bg-gray hover:bg-opacity-20' to="/report">Reports</Link>
						</div>
					</div>
				</nav>
			</div>
	)
}

export default Sidebar