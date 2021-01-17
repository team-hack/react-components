import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './collapse.css';

interface CollapseProps {
  children?: any;
}

const Collapse = ({ children }: CollapseProps): JSX.Element => {
  const [target, setTarget] = useState('');
  const [collapse, setCollapse] = useState(true);
  let dataTarget = '';

  const childElements = React.Children.map(children, (child, i) => {
    if (child.props['data-toggle'] === 'collapse') {
      dataTarget = child.props['data-target'];
      return React.cloneElement(child, {
        ...child.props,
        onClick: (e) => {
          // let panel =
          //   ReactDOM.findDOMNode(e.target).parentNode.children[1] ||
          //   ReactDOM.findDOMNode(e.target).parentNode.parentNode.children[1];
          // if (panel.style.maxHeight) {
          //   panel.style.maxHeight = null;
          // } else {
          //   panel.style.maxHeight = panel.scrollHeight + 'px';
          // }

          setCollapse(!collapse);
        }
      });
    }
    if (child.props.id === dataTarget) {
      let className = collapse ? 'collapse' : 'open';
      if (target === '') {
        setTarget(child.props.id);
      }
      return React.cloneElement(child, {
        ...child.props,
        className
      });
    }
    return null;
  });

  return <div>{childElements}</div>;
};

export { Collapse };
