import React from 'react';
import { render } from '@testing-library/react';
import MouseForm from './MouseForm';

describe('MouseForm component', () => {
  it('renders MouseForm', () => {
    const { asFragment } = render(<MouseForm
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
});
