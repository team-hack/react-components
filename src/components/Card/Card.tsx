import React from 'react';
import './card.css';

interface SimpleCardProps {
  title?: string;
  imageSource?: string;
  bold?: boolean;
  text?: string;
  align?: string;

  width?: string;
  imageHeight?: number;
  className?: string;
  children?: any;
}

interface CompositeCardProps {
  children: any;
  width?: number | string;
  position?: string;
  align?: string;
}

// Composite Components (wrap around other elements)
const Card = ({
  width = '300',
  children,
  align
}: CompositeCardProps): JSX.Element => {
  let widthRule = `${width}px`;

  let childNodes = React.Children.map(children, (child, i) => {
    if (child.type === CardImage) {
      let className;
      if (i === 0) {
        className = 'image-first';
      }
      if (i === children.length - 1) {
        className = 'image-last';
      }
      return React.cloneElement(child, {
        ...child.props,
        className
      });
    }
    return child;
  });

  return (
    <div className='card' style={{ width: widthRule, textAlign: align }}>
      {childNodes}
    </div>
  );
};
const CardImageContainer = ({ children }: CompositeCardProps): JSX.Element => (
  <div className='image-container'>{children}</div>
);

const ListGroup = ({ children }: CompositeCardProps): JSX.Element => (
  <ul className='list-group'>{children}</ul>
);

const CardImageOverlay = ({
  children,
  position
}: CompositeCardProps): JSX.Element => {
  return <div className={`image-overlay ${position}`}>{children}</div>;
};

const CardBody = ({ children }: CompositeCardProps): JSX.Element => {
  return <div className='card-body'>{children}</div>;
};

// Regular components (with self-closing tag)

const CardImage = ({
  imageSource,
  width,
  imageHeight = 200,
  className,
  ...props
}: SimpleCardProps): JSX.Element => {
  const srcProp = imageSource
    ? imageSource
    : `https://via.placeholder.com/${width}x${imageHeight}`;

  return (
    <div className='card-image' style={{ height: `${imageHeight}px` }}>
      <img className={`image ${className ? className : ''}`} src={srcProp} />
    </div>
  );
};

const CardTitle = ({ title }: SimpleCardProps): JSX.Element => {
  return <h2 className='card-title'>{title}</h2>;
};

const ListItem = ({ text }: SimpleCardProps): JSX.Element => {
  return <li className='list-item'>{text}</li>;
};

const CardHeader = ({ text }: SimpleCardProps): JSX.Element => {
  return <div className='card-header'>{text}</div>;
};

const CardFooter = ({ text }: SimpleCardProps): JSX.Element => {
  return <div className='card-footer'>{text}</div>;
};

export {
  Card,
  CardImageContainer,
  CardImage,
  CardTitle,
  ListGroup,
  ListItem,
  CardBody,
  CardHeader,
  CardFooter,
  CardImageOverlay
};
