import { Field, Form, Formik } from 'formik';

import { Ref, forwardRef } from 'react';

import { ReactComponent as Search } from '../../assets/icons/search.svg';
import './SearchBar.scss';

const initialValues = {
	word: undefined,
};

interface Props {
	prop?: string;
}

const handleSubmit = () => console.log('called');

const SearchBar = ({ prop }: Props, ref: Ref<HTMLInputElement>) => (
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
								ref={ref}
								prop={prop}
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

export default forwardRef(SearchBar);
