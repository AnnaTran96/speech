import React from 'react';
import { render, screen } from '@testing-library/react';
import TemplateName from './TemplateName';

it('should render TemplateName component', () => {
	render(<TemplateName />);
	const container = screen.getByTestId('templateName-container');
	expect(container).toBeInTheDocument();
});
