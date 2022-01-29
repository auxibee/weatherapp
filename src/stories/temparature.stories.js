import React from 'react';
import Temparature from '../components/weatherdetails/temparature/temparature';
export default {
    component : Temparature,
    title : 'Temparature'
}

export const DefaultTemparature = () => <Temparature degrees={50} />