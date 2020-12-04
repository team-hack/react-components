import React from 'react';
import  { 
  Card, 
  CardImage,
  CardImageContainer,
  CardTitle, 
  ListGroup, 
  ListItem, 
  CardBody, 
  CardHeader, 
  CardFooter, 
  CardImageOverlay }  from './Card';

export default {  
    component: Card,
    title: 'Card',
    argTypes: {
      align: {
        control: {
          type: 'select',
          options: ['left', 'center', 'right']
        },
      }}
  }
  


export const Basic = (args) => <Card {...args}>

<CardImage {...args} />
 <CardBody {...args}>
  <h3>this is a test</h3>
  <p>you are the text. you are the text. you are the text</p>
  <button>Press Me</button>
</CardBody> 
</Card>  

Basic.args = {
   align: ['left', 'center', 'right'],
    imageSource: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
    width: 300
}

const Template = (args) => <Card {...args}>
  <CardImageContainer>
  <CardImage {...args} />
  <CardImageOverlay position="bottom-right">
    <p>hello</p>
    <p>how are you</p>
  </CardImageOverlay>
  </CardImageContainer>
 
 
  <CardHeader />
  <CardFooter />
  <ListGroup>
    <ListItem text="item 1" />
    <ListItem text="item 2" />
  </ListGroup>
</Card>  

export const HeaderAndFooter = Template.bind({})

HeaderAndFooter.args = {
    title: `I'm the alert`,
    imageSource: 'https://homepages.cae.wisc.edu/~ece533/images/sails.png',
    width: 300
}


export const ImageOverlay = (args) => <Card {...args}>
<div style={{position: 'relative'}}>
<CardImage {...args} />
<CardImageOverlay position="bottom-left">
  <h3>hello</h3>
  <p>over the image</p>
</CardImageOverlay>
</div>

 <CardBody>
  <h4>this is a test</h4>
  <p>you are the text</p>
  <button>Press Me</button>
</CardBody> 

<ListGroup>
  <ListItem text="item 1" />
  <ListItem text="item 2" />
</ListGroup>
</Card>  

ImageOverlay.args = {
    title: `Hey now hey now2`
}


export const List = (args) => <Card {...args}>


<ListGroup>
  <ListItem text="item 1" />
  <ListItem text="item 2" />
  <ListItem text="item 3" />
</ListGroup>
</Card>  

List.args = {
    title: `Hey now hey now2`
}

export const ListA = (args) => <Card {...args}>

<CardHeader text="Header"/>
<CardImage {...args} />
<CardFooter text="Footer"/>
</Card>  

ListA.args = {
    title: `Hey now hey now2`
}



