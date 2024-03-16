import React from 'react';
import ImgBurg2 from '../../assets/img/burger-2.svg';
import ImgLixeira from '../../assets/img/img-lixeira.svg';

import { H2 } from '../../components/Title/styles';
import { Button } from '../../components/Button/styles';

import {
    Image,
    Container,
    ContainerItens,
    P,
    OrderList,
    ParagraphOrder
} from './styles'

const App = () => {

    const requests = [
        { id: Math.random(), order: "X- Salada, 1 coca-cola, 2 batatas grandes, 2 batatas grandes", clienteName: "Mario" },
        { id: Math.random(), order: "2 batatas grandes", clienteName: "Maria" },
    ];

    return (
        <Container>
            <Image alt="logo da hamburgueria" src={ImgBurg2} />
            <ContainerItens>
                <H2>Pedidos</H2>
                <ul>
                    {requests.map((request) => (
                        <OrderList key={request.id}>
                            <div>
                                <ParagraphOrder>{request.order}</ParagraphOrder>
                                <P>{request.clienteName}</P>
                            </div>
                            <button><img alt='imagem de uma lixeira' src={ImgLixeira} /></button>
                        </OrderList>
                    ))}
                </ul>

                <Button bgBlack={true}><P>Novo Pedido</P></Button>

            </ContainerItens>
        </Container>
    );
}

export default App;
