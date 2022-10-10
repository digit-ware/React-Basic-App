import { createContext } from 'react'

export interface AppContextInterface {
  name: string
  counter: number
  setCounter: (value: number) => void
}

export const AppContext = createContext<AppContextInterface>({
  name: 'my application',
  counter: 0,
  setCounter: (value: number) => null,
})
