import { HTMLAttributes, ReactNode } from 'react'

/**
 * Styles.
 */
import { Container } from './styles'

/**
 * Component properties.
 */
export type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

/**
 * Component.
 */
export function FullPage({ children }: Props) {
  return <Container>{children}</Container>
}
