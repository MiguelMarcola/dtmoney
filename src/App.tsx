import Modal from "react-modal";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"


import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransaactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransaactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransaactionModal={handleOpenNewTransaactionModal}/>
      <Dashboard />

      <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransaactionModal}
      >
          <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}