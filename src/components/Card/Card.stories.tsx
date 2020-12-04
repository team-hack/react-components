import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import  { Card }  from './Card';
import  { CardImage, CardTitle, ListGroup, ListItem, CardBody, CardHeader, CardFooter, CardImageOverlay }  from './CardImage';

export default {
   
    component: Card,
    subcomponents: { CardImage },
    title: 'Card',
  } as Meta;
  
// const Template = (args) => (<Card {...args}>
//   <p>helllo</p>
// </Card>)


export const Basic = (args) => <Card {...args}>

<CardImage {...args} />


 <CardBody center bold>
  <h4>this is a test</h4>
  <p>you are the text</p>
  <button>Press Me</button>
  {/* <CardTitle  title="testing title" /> */}
</CardBody> 
</Card>  

Basic.args = {
    title: `Hey now hey now2`,
    imageSource: '',
    width: 300
}

const Template = (args) => <Card {...args}>
  <div style={{position: 'relative'}}>
  <CardImage {...args} />
  <CardImageOverlay>
    <p>hello</p>
  </CardImageOverlay>
  </div>
 
 
  {/* <CardBody>
    <CardTitle  title="testing title" />
  </CardBody> */}
  <CardHeader />
  <CardFooter />
  <ListGroup>
    <ListItem title="item 1" />
    <ListItem title="item 2" />
  </ListGroup>
</Card>  

export const HeaderAndFooter = Template.bind({})

HeaderAndFooter.args = {
    title: `I'm the alert`,
    imageSource: '',
    width: 300
}


export const ImageOverlay = (args) => <Card {...args}>
<div style={{position: 'relative'}}>
<CardImage {...args} />
<CardImageOverlay>
  <p>hello</p>
  <p>over the image</p>
</CardImageOverlay>
</div>

 <CardBody>
  <h4>this is a test</h4>
  <p>you are the text</p>
  <button>Press Me</button>
  {/* <CardTitle  title="testing title" /> */}
</CardBody> 

<ListGroup>
  <ListItem title="item 1" />
  <ListItem title="item 2" />
</ListGroup>
</Card>  

ImageOverlay.args = {
    title: `Hey now hey now2`
}


export const List = (args) => <Card {...args}>


<ListGroup>
  <ListItem title="item 1" />
  <ListItem title="item 2" />
  <ListItem title="item 3" />
</ListGroup>
</Card>  

List.args = {
    title: `Hey now hey now2`
}



