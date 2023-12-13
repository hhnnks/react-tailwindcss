import React, { useState, useEffect } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';

const Page1 = () => {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }, []);

  return (
    <TransitionGroup
      transitionName="page"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
    >
      {isVisible ? (
        <div>
          <h1>This is page 1</h1>
        </div>
      ) : (
        <div>
          <h1>This is page 2</h1>
        </div>
      )}
    </TransitionGroup>
  );
};

const Page2 = () => {
  return (
    <div>
      <h1>This is page 2</h1>
    </div>
  );
};

export default () => {
  const [isVisible, setVisible] = useState(true);
    

    return(
        <div>
        <button onClick={() => setVisible(true)}>Go to page 1</button>
        <button onClick={() => setVisible(false)}>Go to page 2</button>
        <TransitionGroup
          transitionName="page"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {isVisible ? (
            <Page1 />
          ) : (
            <Page2 />
          )}
        </TransitionGroup>
      </div>
    )
}
