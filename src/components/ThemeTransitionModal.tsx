"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

interface ThemeTransitionModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ThemeTransitionModal({ isOpen, onConfirm, onCancel }: ThemeTransitionModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onCancel()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-sm translate-x-[-50%] translate-y-[-50%] p-6 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl shadow-black/80">
          <div className="space-y-4">
            <Dialog.Title className="text-lg font-medium text-white mb-2">
              Cuidado com a luz do dia
            </Dialog.Title>
            <Dialog.Description className="text-base text-zinc-400 leading-relaxed">
              Vampiros são sensíveis à luz do dia.
              Tem certeza que deseja fazer isso?
            </Dialog.Description>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={onConfirm}
                className="w-full py-2.5 px-4 bg-white text-black font-medium text-sm rounded hover:bg-zinc-200 transition-colors focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 outline-none"
              >
                Sim, quero ver a luz
              </button>
              <button
                onClick={onCancel}
                className="w-full py-2.5 px-4 bg-transparent text-zinc-400 font-medium text-sm rounded hover:bg-zinc-800 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-zinc-600 outline-none"
              >
                Melhor continuar no escuro
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
