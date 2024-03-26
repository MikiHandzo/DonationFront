import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'

interface State {
    newUser: boolean
}

interface Actions {
    setNewUser: (state: boolean) => void
}

export const useRegistrationStore = create(
    immer<State & Actions>((set) => ({
        newUser: true,
        setNewUser: (state) => set({ newUser: state }),
    }))
)