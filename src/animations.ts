import { usePrefersReducedMotion } from '@chakra-ui/react'

import animationCollection from './constants/animation-collection'
import Name from './types/name'
import Options from './types/options'

export const useAnimation = (
  name: Name = 'bounce',
  {
    duration = 1000,
    iterationCount = 'infinite',
    timingFunction = 'ease-in'
  }: Options): string | undefined => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = animationCollection[name]

  return prefersReducedMotion ? undefined : `${animation} ${duration}ms ${timingFunction} ${iterationCount}`
}
