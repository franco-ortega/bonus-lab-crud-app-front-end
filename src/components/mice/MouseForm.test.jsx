import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import MouseForm from './MouseForm';

describe('MouseForm component', () => {
  it('renders MouseForm', () => {
    const { asFragment } = render(
      <MouseForm
        onNameChange={jest.fn()}
        onFurChange={jest.fn()}
        onTailChange={jest.fn()}
        onIdUpdateChange={jest.fn()}
        onNameUpdateChange={jest.fn()}
        onFurUpdateChange={jest.fn()}
        onTailUpdateChange={jest.fn()}
        onIdDeleteChange={jest.fn()}
        onMethodChange={jest.fn()}
        onFormSubmit={jest.fn()}
      />);
    
    expect(asFragment()).toMatchSnapshot();
  });

  it('makes a request on click', () => {
    render(
      <MouseForm
        onNameChange={jest.fn()}
        onFurChange={jest.fn()}
        onTailChange={jest.fn()}
        onIdUpdateChange={jest.fn()}
        onNameUpdateChange={jest.fn()}
        onFurUpdateChange={jest.fn()}
        onTailUpdateChange={jest.fn()}
        onIdDeleteChange={jest.fn()}
        onMethodChange={jest.fn()}
        onFormSubmit={jest.fn()}
      />);

    const button = screen.getByRole('button');
    const form = screen.getByTestId('display');

    fireEvent.click(button);

    return waitFor(() => {
      expect(form).not.toBeEmptyDOMElement();
    });
  });
});
