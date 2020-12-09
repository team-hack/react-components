import React from 'react'
import './card.css';

interface SimpleCardProps {
  title?: string;
  imageSource?: string;
  bold?: boolean;
  text?: string;
  align?: string;
}

interface CompositeCardProps {
  children: any;
  width?: number | string;
  position?: string;
}



function populateStyleString(props){
  let str = '';
  Object.keys(props).map(item => {
    if(item === 'align' || item=== 'position'){
      str += `${props[item]} `
    } else {
      str += `${item} `
    }
  })
   
  return str;
}

// Composite Components (wrap around other elements)
const Card = ({ width="300", children }: CompositeCardProps): JSX.Element => {
  //default width is in pixels, but if string can be appended with
  //"-rem" or "-pct" for relative widths
  let widthRule;
  console.log(width)
  if (typeof width === 'string'){
    const [value, type ] = width.split('-');
    if (type === 'pct'){
      widthRule = `${value}%`
    } else if (type === 'rem'){
      widthRule = `${value}rem`
    } else {
      widthRule = `${width}px`
    }
  } else {
    console.log('in else')
  }
  return(<div className="card" style={{width: widthRule}}>{children}</div>)
  }
const CardImageContainer = ({children }: CompositeCardProps): JSX.Element => (
  <div className="image-container">{children}</div>)

const ListGroup = ({ children }: CompositeCardProps): JSX.Element => (
  <ul className="list-group">{children}</ul>)

const CardImageOverlay = ({children, ...props }: CompositeCardProps): JSX.Element => {
  let styleStr = populateStyleString(props)
  return(
    <div className={`image-overlay ${styleStr}`}>{children}</div>)
}

const CardBody = ({children, ...props }: CompositeCardProps): JSX.Element => {
  let styleStr = populateStyleString(props)
  return (
    <div className={`card-body ${styleStr}`} >{children}</div>
  )}

// Regular components (with self-closing tag)

const CardImage = ({imageSource, ...props}: SimpleCardProps): JSX.Element => {
  let styleStr = populateStyleString(props)

  return(<div className={`card-image ${styleStr}`}>
    <img className="image" src={imageSource} />
  </div>)
}
 

const CardTitle = ({title, ...props }: SimpleCardProps): JSX.Element => {
  let styleStr = populateStyleString(props)
  return(<h2 className={`card-title ${styleStr}`}>{title}</h2>)
}
  
const ListItem = ({text, ...props }: SimpleCardProps): JSX.Element => {
  let styleStr = populateStyleString(props)
  return(
    <li className={`list-item ${styleStr}`}>{text}</li>)
}

const CardHeader = ({text, ...props }: SimpleCardProps): JSX.Element => {
  let styleStr = populateStyleString(props)
  return(<div className={`card-header ${styleStr}`} >{text}</div>)
}

const CardFooter = ({text, ...props }: SimpleCardProps): JSX.Element => {
  let styleStr = populateStyleString(props)
  return(<div className={`card-footer ${styleStr}`} >{text}</div>)
}

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
  CardImageOverlay }

