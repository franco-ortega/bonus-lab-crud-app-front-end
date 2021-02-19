import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MouseDetails from './MouseDetails';

describe('MouseDetails component', () => {
  afterEach(() => cleanup());
  it('renders MouseDetails', () => {
    const { asFragment } = render(
      <MouseDetails
        id="100"
        name="Lucia"
        furColor="gray" 
        tailLength="4" 
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
