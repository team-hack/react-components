import React from 'react'
import './card.css';

interface CardProps {
  title?: string;
  children?: any;
  imageSource?: string;
  center?: boolean;
  left?: boolean;
  bold?: boolean;
  width?: number;
  position?: string;
  text?: string
}



function populateStyleString(props){
  let str = '';
  console.log(props)
  Object.keys(props).map(item => {
    if(item === 'align' || item=== 'position'){
      str += `${props[item]} `
    } else {
      str += `${item} `
    }
  })
   
  return str;
}

const Card = ({title, width = 300, children }: CardProps): JSX.Element => (
  <div className="card" style={{width: `${width}px`}}>{children}</div>
  )


const CardImage = ({imageSource, ...props}: CardProps): JSX.Element => {
  let styleStr = populateStyleString(props)

  return(<div className={`card-image ${styleStr}`}>
  <img className="image" src={imageSource} />
 </div>
)
}
 
  

const CardTitle = ({title, ...props }: CardProps): JSX.Element => {
  let styleStr = populateStyleString(props)
  return(<h2 className={`card-title ${styleStr}`}>{title}</h2>)
  
}
  

const ListGroup = ({ children }: CardProps): JSX.Element => (
  <ul className="list-group">{children}</ul>
  )

  const ListItem = ({text, ...props }: CardProps): JSX.Element => {
    let styleStr = populateStyleString(props)
    return(
      <li className={`list-item ${styleStr}`}>{text}</li>
    )}

    const CardBody = ({children, ...props }: CardProps): JSX.Element => {
      let styleStr = populateStyleString(props)
      return (
        <div className={`card-body ${styleStr}`} >{children}</div>
      )}

      const CardHeader = ({text, ...props }: CardProps): JSX.Element => {
        let styleStr = populateStyleString(props)
      return(<div className={`card-header ${styleStr}`} >{text}</div>)
      
      }

    const CardFooter = ({text, ...props }: CardProps): JSX.Element => {
      let styleStr = populateStyleString(props)
        return(<div className={`card-footer ${styleStr}`} >{text}</div>)
        
        }

    const CardImageOverlay = ({children, ...props }: CardProps): JSX.Element => {
      let styleStr = populateStyleString(props)
        return(
          <div className={`image-overlay ${styleStr}`}>{children}</div>
        )}



export { Card, CardImage, CardTitle, ListGroup, ListItem, CardBody, CardHeader, CardFooter, CardImageOverlay }

