import { render, screen } from '@testing-library/react';
// import App from './App';
import userEvent from '@testing-library/user-event';
import Form from './components/Form';

describe("Form component", () => {
  beforeEach(( )=> render(<Form />))

  it('render input', () => {
    const input = screen.getAllByPlaceholderText('Ciudad');
    expect (input).toBeInTheDocument;
  })

  it('renders Ciudad with same value as input', ()=>{
    const expectedValue = 'Introduzca el nombre de la ciudad';

    const input = screen.getByPlaceholderText('Ciudad');
    expect (input).toBeInTheDocument;
    expect (input).toHaveValue('');

    userEvent.type(input, expectedValue);
    expect(input).toHaveValue(expectedValue);

    const ciudad = screen.getByText(expectedValue);
    expect (title).toBeInTheDocument;
  })
})
