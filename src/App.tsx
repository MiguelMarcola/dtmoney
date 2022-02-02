import Modal from "react-modal";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"


import { GlobalStyle } from "./styles/global"
import { NewTransactionModal } from "./components/NewTransactionModal";

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

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransaactionModal}
      />
      <GlobalStyle />
    </>
  );
}