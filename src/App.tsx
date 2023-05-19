import React, { useState } from 'react';

const App: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className="bg-white shadow">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex">
						<div className="flex-shrink-0 flex items-center">
							<img className="block lg:hidden h-8 w-auto" src="https://via.placeholder.com/40" alt="Logo" />
							<img className="hidden lg:block h-8 w-auto" src="https://via.placeholder.com/60" alt="Logo" />
						</div>
					</div>
					<div className="flex items-center sm:hidden">
						<button type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700" onClick={toggleMenu}>
							<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
				<div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'}`}>
					<div className="px-2 pt-2 pb-3 space-y-1">
						<a
							href="#"
							className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
						>
							About
						</a>
						<a
							href="#"
							className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
						>
							My Works
						</a>
						<a
							href="#"
							className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
						>
							My Services
						</a>
						<a
							href="#"
							className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
						>
							Contact Me
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default App;
