import { usePrefersReducedMotion } from '@chakra-ui/react';
import animationCollection  from './constants/animation-collection';

type Name = keyof typeof animationCollection;

type Options = {
  duration?: number;
  iterationCount?: number | 'infinite';
  timingFunction?: "ease" | "linear" | "ease-in" | "ease-out" | "ease-in-out";
};

export const useAnimation = (name: Name = "bounce", { duration = 1, iterationCount = 'infinite', timingFunction = 'ease-in' }: Options) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const animation = animationCollection[name];

  return prefersReducedMotion ? undefined : `${animation} ${duration}ms ${timingFunction} ${iterationCount}`;;
}
