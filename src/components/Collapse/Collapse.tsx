import React, { useState } from 'react';
import './collapse.css';

interface CollapseProps {
  children?: any;
}

// Composite Components (wrap around other elements)
const Collapse = ({ children }: CollapseProps): JSX.Element => {
  const [target, setTarget] = useState('');
  let dataTarget = '';

  const childElements = React.Children.map(children, (child, i) => {
    console.log(child);
    if (child.props['data-toggle'] === 'collapse') {
      dataTarget = child.props['data-target'].substring(1);

      return React.cloneElement(child, {
        ...child.props,

        onClick: (e) => {
          e.stopPropagation();
          let panel = document.getElementById(target);

          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
          }
        }
      });
    }
    if (child.props.id === dataTarget) {
      console.log(child.props.id, document.querySelector(`#${child.props.id}`));

      if (target === '') {
        setTarget(child.props.id);
      }

      return React.cloneElement(child, {
        ...child.props
      });
    }
    return null;
  });

  return <div>{childElements}</div>;
};

export { Collapse };
