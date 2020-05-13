import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Card from './Card'

describe('<List />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<section className='List'>
      <header className='List-header'>
        <h2>test</h2>
      </header>
      <div className='List-cards'>
        [1, 2, 3].map((card) =>
      <Card
          key="yes"
          title="title"
          content="content"
        />
    )}
    <button
          type='button'
          className='List-add-button'
        >
          + Add Random Card
    </button>
      </div>
    </section>);
    ReactDOM.unmountComponentAtNode(div);
  });
});