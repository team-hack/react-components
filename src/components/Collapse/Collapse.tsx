import React, { useState } from 'react';
import './collapse.css';

interface CollapseProps {
  children?: any;
}

// Composite Components (wrap around other elements)
const Collapse = ({ children }: CollapseProps): JSX.Element => {
  console.log('CHILDREN', children);
  const [collapse, setCollapse] = useState(true);
  let dataTarget = '';
  return (
    <div>
      {React.Children.map(children, (child, i) => {
        console.log(child);
        if (child.props['data-toggle'] === 'collapse') {
          dataTarget = child.props['data-target'].substring(1);
          const childProps = child.props;
          return React.cloneElement(child, {
            ...child.props,
            onClick: (n) => {
              console.log('has been clicked');
              setCollapse(!collapse);
            }
          });
        }
        if (child.props.id === dataTarget) {
          const childProps = child.props;
          //   const className = classNames(
          //     child.props.className,
          //     {...otherClassses}
          // );
          let className = collapse ? 'collapse' : 'open';
          console.log('second', child.props.className);
          return React.cloneElement(child, {
            ...child.props,
            className
          });
        }
        return null;
      })}
    </div>
  );
};

export { Collapse };
