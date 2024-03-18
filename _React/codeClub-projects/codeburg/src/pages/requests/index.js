import React, { useState, useEffect, } from 'react';
import axios from 'axios';
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
    ParagraphOrder,
} from './styles'

const Requests = () => {

    //add react hooks {useState}
    const [requests, setRequests] = useState([]);

    useEffect(() => {

        async function fetchRequests() {
            const { data: newRequest } = await axios.get("http://localhost:3001/desafio-burge.js");

            setRequests(newRequest);
        }

        fetchRequests();
    }, []);

    async function DeleteOrder(requestId) {
        await axios.delete(`http://localhost:3001/desafio-burge.js/${requestId}`);

        const newRequest = requests.filter(request => request.id !== requestId);

        setRequests(newRequest)
    }

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
                                <P>{request.name}</P>
                            </div>
                            <button>
                                <img onClick={() => DeleteOrder(request.id)} alt='imagem de uma lixeira' src={ImgLixeira} />
                            </button>
                        </OrderList>
                    ))}
                </ul>

                <Button to="/" >
                    <P>Voltar</P>
                </Button>
            </ContainerItens>
        </Container>
    );
}

export default Requests;
