import React from 'react';
import Button from '../elements/button/button';

export default {
    component : Button,
    title : 'Button'
}

export const Template = (args) => <Button {...args}/>

export const DefaultButton = Template.bind({})

DefaultButton.args = {
    children : "set",
    type : "button"
}