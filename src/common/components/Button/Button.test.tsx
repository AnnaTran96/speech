import { render, screen } from '@testing-library/react';

import Button from 'common/components/Button/Button';

describe('Button Component', () => {
  beforeEach(() => {
    render(
      <Button onClick={() => ''} className='btn'>
        Test
      </Button>
    );
  });

  it('should render Button component', () => {
    const container = screen.getByTestId('button-container');
    expect(container).toBeInTheDocument();
  });
});
