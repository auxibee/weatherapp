import React from 'react';
import Icon from '../elements/icon/icon';

export default {
    component : Icon,
    title : 'Icon'
}

export const DefaultIcon = () => <Icon type="Rain" />
export const DrizzleIcon = () => <Icon type="Drizzle" />
export const Clear = () => <Icon type="Clear" />