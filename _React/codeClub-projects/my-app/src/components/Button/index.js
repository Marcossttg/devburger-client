import React from 'react';

import { Button as ContainerButton } from './styles';

function Button({ Children, ...props }) {
    return (
        <ContainerButton {...props}>{Children}</ContainerButton>
    );
}
export default Button;