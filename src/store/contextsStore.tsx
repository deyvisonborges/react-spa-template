import { cloneElement, ReactNode } from 'react'

interface AppStoreProps {
  children: ReactNode
}

const providers: JSX.Element[] = []

export const contextsStore = ({
  children: initial
}: AppStoreProps): JSX.Element => (
  <>
    {providers.reduce(
      (children, parent) => cloneElement(parent, { children }),
      initial
    )}
  </>
)
