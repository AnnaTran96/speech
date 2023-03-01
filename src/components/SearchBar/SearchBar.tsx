import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Search } from '../../assets/icons/search.svg';
import './SearchBar.scss';

const SearchBar = () => {
	const ref = useRef<HTMLInputElement>(null);
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch(e.currentTarget.value);
		navigate('/results');
		setSearch('');
	};

	const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(target.value);
	};

	return (
		<div className='searchbar container' data-testid='searchBar-container'>
			<div className='searchbar-form'>
				<form onSubmit={handleSubmit}>
					<div className='searchbar-field-row'>
						<div className='searchbar-field-inner-row'>
							<input
								type='text'
								name='search'
								className='searchbar-field'
								placeholder='Search'
								value={search}
								onChange={handleOnChange}
							/>
							<div className='searchbar-field-background'></div>
							<div className='searchbar-field-background-overlay'></div>
						</div>
						<div className='search-button-container'>
							<button type='submit' className='search-button'>
								<Search width={35} height={35} />
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SearchBar;
