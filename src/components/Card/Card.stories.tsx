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

export const Primary = Template.bind({})

Primary.args = {
    title: `I'm the alert`,
    imageSource: '',
    width: 300
}


export const Secondary = Template.bind({})

Secondary.args = {
    title: `Hey now hey now2`
}

