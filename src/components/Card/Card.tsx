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
  children?: any;
  width?: number;
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
const Card = ({ width = 300, children }: CompositeCardProps): JSX.Element => (
  <div className="card" style={{width: `${width}px`}}>{children}</div>
  )

  const CardImageContainer = ({children }: CompositeCardProps): JSX.Element => (
    <div className="image-container">{children}</div>
    )

  const ListGroup = ({ children }: CompositeCardProps): JSX.Element => (
    <ul className="list-group">{children}</ul>
    )

    const CardImageOverlay = ({children, ...props }: CompositeCardProps): JSX.Element => {
      let styleStr = populateStyleString(props)
        return(
          <div className={`image-overlay ${styleStr}`}>{children}</div>
        )}

  // Regular components (with self-closing tag)

const CardImage = ({imageSource, ...props}: SimpleCardProps): JSX.Element => {
  let styleStr = populateStyleString(props)

  return(<div className={`card-image ${styleStr}`}>
  <img className="image" src={imageSource} />
 </div>
)
}
 
  

const CardTitle = ({title, ...props }: SimpleCardProps): JSX.Element => {
  let styleStr = populateStyleString(props)
  return(<h2 className={`card-title ${styleStr}`}>{title}</h2>)
  
}
  



  const ListItem = ({text, ...props }: SimpleCardProps): JSX.Element => {
    let styleStr = populateStyleString(props)
    return(
      <li className={`list-item ${styleStr}`}>{text}</li>
    )}

    const CardBody = ({children, ...props }: SimpleCardProps): JSX.Element => {
      let styleStr = populateStyleString(props)
      return (
        <div className={`card-body ${styleStr}`} >{children}</div>
      )}

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

