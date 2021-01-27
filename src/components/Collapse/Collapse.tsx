import React, { useState } from 'react';
import './collapse.css';

interface CollapseProps {
  children: JSX.Element;
}

const Collapse = ({ children }: CollapseProps): JSX.Element => {
  const [collapse, setCollapse] = useState(true);
  let dataTarget = '';
  const childElements = React.Children.map(children, (child, i) => {
    if (child.props['data-toggle'] === 'collapse') {
      dataTarget = child.props['data-target'];
      return React.cloneElement(child, {
        ...child.props,
        onClick: () => {
          setCollapse(!collapse);
        }
      });
    }
    if (child.props.id === dataTarget) {
      let className = collapse ? 'collapse' : 'open';

      return React.cloneElement(child, {
        ...child.props,
        className
      });
    }
    return null;
  });

  return <>{childElements}</>;
};

export { Collapse };
