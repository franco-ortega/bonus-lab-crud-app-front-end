import React from 'react';
// import { render } from 'react-dom';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import MiceList from './MiceList';

describe('MiceList component', () => {
  it('displays a list of mice', async() => {
    render(
      <MiceList
        mice={[{ 
          id: '1', 
          name: 'Matilda', 
          furColor: 'brown', 
          tailLength: 4 }]} 
        loading={false}
      />
    );

    const ul = await screen.findByTestId('mice');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
