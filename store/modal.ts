"use client";
import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  type?: string;
  modalStates?: any;
  toggleModal: (value: string, object: any) => void;
}
const useModal = create<ModalState>((set) => ({
  isOpen: false,
  type: "Dialog",
  modalStates: null,
  toggleModal: (type: string, object: any) =>
    set((state: any) => ({
      isOpen: !state.isOpen,
      type: type,
      modalStates: object,
    })),
}));

export default useModal;
