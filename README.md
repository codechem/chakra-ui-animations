# Chakra Animations

Chakra Animations is a dependancy which offers you pre-built animations for your Chakra UI components.

## Installation

```sh
yarn add @codechem/chakra-animations

# or

npm i @codechem/chakra-animations
```

## Usage
```typescript
import { useAnimation } from '@codechem/chakra-animations';
function App() {
    const animation = useAnimation('flip', { duration: 2000, iterationCount: 'infinite' });

    return (
        <Box bg="red.500" h="500px" w="500px" animation={animation}>
            <Heading>
                Open source rocks!
            </Heading>
        </Box>
    )
}
```

## Options:

- `duration` - is the length of the animation **(in miliseconds)** 
- `iterationCount` - is the amount of times the you want the animation to repeat **(number or `'infinite'`)**

## Animation List

The first parameter in the `useAnimation` hook is the animation name, this is the list for all animations:

#### Main animations:
- bounce-in
- bounce
- flash
- flip
- head-shake
- heart-beat
- jello
- pulse
- rotate-9
- rotate-scale
- rubber-band
- shake-x
- shake-y'
- shake
- swing
- tada
- wobble

#### Shadow animations:
- shadow-drop-2
- shadow-drop
- shadow-inset

#### Extra animations:
- hinge
- jack-in-the-box
- roll-in
- roll-out