import { Field, Form, Formik } from 'formik';

import { ReactComponent as Search } from '../../assets/icons/search.svg';
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
						<div className='searchbar-field-inner-row'>
							<Field
								name='search'
								className='searchbar-field'
								placeholder='Search'
							/>
							<div className='searchbar-field-background'></div>
							<div className='searchbar-field-background-overlay'></div>
						</div>
						<div className='search-button-container'>
							<button type='submit' className='search-button'>
								<Search width={25} height={25} />
							</button>
						</div>
					</div>
				</Form>
			</div>
		</Formik>
	</div>
);

export default SearchBar;
