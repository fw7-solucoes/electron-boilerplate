import React from 'react'
import { GeistProvider, CssBaseline } from '@geist-ui/react'

/**
 * Type definitions.
 */
type Props = {
  children: React.ReactChild
}

/**
 * Component.
 */
export function Providers({ children }: Props) {
  return (
    <GeistProvider>
      <CssBaseline />
      {children}
    </GeistProvider>
  )
}
