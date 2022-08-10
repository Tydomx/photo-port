import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
	const {
		categories = [],
		setCurrentCategory,
		currentCategory,
		contactSelected,
		setContactSelected
	} = props;

	const handleClick = (item) => {
		console.log(item);
		return item;
	};

	// useEffect(() => {
	// 	document.title = capitalizeFirstLetter(currentCategory.name);
	// 	// directs hook to re-render component on changes to value of this state
	// 	// if currentCategory changes now, component will re-render so that the change in document.title will be visible to the user
	// }, [currentCategory]);

	return (
		<header className='flex-row px-1'>
			<h2>
				<a data-testid="link" href='/'>
					<span role='img' aria-label='camera'> 📸</span>Oh Snap!
				</a>
			</h2>
			<nav>
				<ul className='flex-row'>
					<li className='mx-2'>
						<a data-testid="about" href='#about' onClick={() => setContactSelected(false)}>
							About me
						</a>
					</li>
					{/* if value of contactSelected is true, add CSS class navActive */}
					<li className={`mx-2 ${contactSelected && 'navActive'}`}>
						<span onClick={() => handleClick('Contact')}>
							Contact
						</span>
					</li>
					{categories.map((category) => (
						<li
							className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
								}`}
							key={category.name}
						>
							<span
								onClick={() => {
									setCurrentCategory(category);
									setContactSelected(false);
								}}
							>
								{capitalizeFirstLetter(category.name)}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;