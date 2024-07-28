import {Component, useState} from "react";

const useModal = () => {
  const [ activeModals, setActiveModals ]= useState<(() => Element)[]>([]);
  function addComponent(component: () => Element) {

    function open() {
      setActiveModals([
        ...activeModals,
        component
      ]);
    }

    return { open }
  }

  // return { addComponent, activeModals }
  return [ addComponent, activeModals ]
}

export default useModal;