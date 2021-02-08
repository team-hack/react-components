import React from 'react';
import './jumbotron.scss';

interface JumbotronProps {
  children?: JSX.Element;
  fluid?: boolean;
}

// Composite Components (wrap around other elements)
const Jumbotron = ({ fluid, children }: JumbotronProps): JSX.Element => {
  return <div className={`jumbotron ${fluid ? 'fluid' : ''}`}>{children}</div>;
};

export { Jumbotron };
