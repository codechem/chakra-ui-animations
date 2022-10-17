import { keyframes } from '@chakra-ui/system'

import bounceIn from '../animations/main/bounce-in'
import bounce from '../animations/main/bounce'
import flash from '../animations/main/flash'
import flip from '../animations/main/flip'
import headShake from '../animations/main/head-shake'
import heartBeat from '../animations/main/heart-beat'
import jello from '../animations/main/jello'
import pulse from '../animations/main/pulse'
import rotate90 from '../animations/main/rotate-90'
import rotateScale from '../animations/main/rotate-scale'
import rubberBand from '../animations/main/rubber-band'
import shakeX from '../animations/main/shake-x'
import shakeY from '../animations/main/shake-y'
import shake from '../animations/main/shake'
import swing from '../animations/main/swing'
import tada from '../animations/main/tada'
import wobble from '../animations/main/wobble'
import hinge from '../animations/extra/hinge'
import jackInTheBox from '../animations/extra/jack-in-the-box'
import rollIn from '../animations/extra/roll-in'
import rollOut from '../animations/extra/roll-out'
import shadowDrop2 from '../animations/shadow/shadow-drop-2'
import shadowDrop from '../animations/shadow/shadow-drop'
import shadowInset from '../animations/shadow/shadow-inset'

const animationCollection = {
  // main animations
  'bounce-in': `${keyframes(bounceIn)}`,
  bounce: `${keyframes(bounce)}`,
  flash: `${keyframes(flash)}`,
  flip: `${keyframes(flip)}`,
  'head-shake': `${keyframes(headShake)}`,
  'heart-beat': `${keyframes(heartBeat)}`,
  jello: `${keyframes(jello)}`,
  pulse: `${keyframes(pulse)}`,
  'rotate-90': `${keyframes(rotate90)}`,
  'rotate-scale': `${keyframes(rotateScale)}`,
  'rubber-band': `${keyframes(rubberBand)}`,
  'shake-x': `${keyframes(shakeX)}`,
  'shake-y': `${keyframes(shakeY)}`,
  shake: `${keyframes(shake)}`,
  swing: `${keyframes(swing)}`,
  tada: `${keyframes(tada)}`,
  wobble: `${keyframes(wobble)}`,

  // extra animations
  hinge: `${keyframes(hinge)}`,
  'jack-in-the-box': `${keyframes(jackInTheBox)}`,
  'roll-in': `${keyframes(rollIn)}`,
  'roll-out': `${keyframes(rollOut)}`,

  // shadow animations
  'shadow-drop-2': `${keyframes(shadowDrop2)}`,
  'shadow-drop': `${keyframes(shadowDrop)}`,
  'shadow-inset': `${keyframes(shadowInset)}`
}

export default animationCollection
