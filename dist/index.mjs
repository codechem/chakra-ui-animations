import { usePrefersReducedMotion } from '@chakra-ui/react';
import { keyframes } from '@chakra-ui/system';

// react-shim.js

// src/animations/bounce.ts
var bounce_default = `
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;

// src/animations/bounce-in.ts
var bounce_in_default = ` 
    0% {
      transform: scale(0.3);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
`;

// src/animations/flash.ts
var flash_default = `
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;

// src/animations/head-shake.ts
var head_shake_default = `
0% {
  transform: translateX(0);
}

6.5% {
  transform: translateX(-6px) rotateY(-9deg);
}

18.5% {
  transform: translateX(5px) rotateY(7deg);
}

31.5% {
  transform: translateX(-3px) rotateY(-5deg);
}

43.5% {
  transform: translateX(2px) rotateY(3deg);
}

50% {
  transform: translateX(0);
}
`;

// src/constants/animation-collection.ts
var animationCollection = {
  "bounce-in": `${keyframes(bounce_in_default)}`,
  "bounce": `${keyframes(bounce_default)}`,
  "flash": `${keyframes(flash_default)}`,
  "head-shake": `${keyframes(head_shake_default)}`
};
var animation_collection_default = animationCollection;

// src/animations.ts
var useAnimation = (name = "bounce", { duration = 1, iterationCount = "infinite", timingFunction = "ease-in" }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = animation_collection_default[name];
  return prefersReducedMotion ? void 0 : `${animation} ${duration}ms ${timingFunction} ${iterationCount}`;
};

export { useAnimation };
