import { Field, Form, Formik } from 'formik';

import './SearchBar.scss';

// TODO: Adding these placegolders for now. To implement submit functionality.
// Only show search button when the user types

const initialValues = {
	word: '',
};

const handleSubmit = () => console.log('called');

const SearchBar = () => (
	<div className='searchbar container' data-testid='searchBar-container'>
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<div className='searchbar-form'>
				<Form>
					<div className='searchbar-field-row'>
						<Field
							name='search'
							className='searchbar-field'
							placeholder='Search...'
						/>
						<button type='submit' className='search-button'>
							Search
						</button>
					</div>
				</Form>
			</div>
		</Formik>
	</div>
);

export default SearchBar;
