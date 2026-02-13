import { create } from 'zustand';

type AppState = {
    step: number;
    nextStep: () => void;
    prevStep: () => void;
};

export const useAppState = create<AppState>((set) => ({
    step: 0,
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    prevStep: () => set((state) => ({ step: state.step - 1 })),
}));
