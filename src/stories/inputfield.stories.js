import React from 'react';
import InputField from '../elements/inputField/inputfield'

export default {
    component : InputField,
    title : 'Input Field'
}

export const Template = (args) => <InputField {...args}/>

export const Input = Template.bind({})

Input.args = {
    label : "location",
    id : "location",
    name : "city"
}

