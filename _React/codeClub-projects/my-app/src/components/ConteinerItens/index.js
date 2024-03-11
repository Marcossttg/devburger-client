import React from "react";

import { ContainerItens as Container } from "./styles";

function ContainerItens({ Children, isBlur }) {
    return (
        <Container isBlur="isBlur">{Children}</Container>
    );
}

export default ContainerItens;