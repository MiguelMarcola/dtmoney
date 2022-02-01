import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from '../../styles/styles'

interface HeaderProps {
    onOpenNewTransaactionModal: () => void;
}

export function Header ({ onOpenNewTransaactionModal }: HeaderProps){

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransaactionModal}>
                    Nova Transação
                </button>

            </Content>
        </Container>
    );
}