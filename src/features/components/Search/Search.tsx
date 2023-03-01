import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { searchApi } from '../../../app/services/Search.service';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import './Search.scss';

const Search = () => {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	const [trigger] = searchApi.endpoints.getSearchWord.useLazyQuery();

	const handleSubmit = useCallback(
		(e: React.MouseEvent<HTMLFormElement>) => {
			e.preventDefault();
			setSearch(e.currentTarget.value);
			trigger(search)
				.unwrap()
				.then((res) => {
					if (res) {
						navigate('/results', { state: { result: res } });
					}
				})
				.catch((error) => error);
			setSearch('');
		},
		[search]
	);

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
								<SearchIcon width={35} height={35} />
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Search;
