import { keyframes } from "@chakra-ui/system";
import bounce from "../animations/bounce";
import bounceIn from "../animations/bounce-in";
import flash from "../animations/flash";
import headShake from "../animations/head-shake";

const animationCollection = {
  "bounce-in": `${keyframes(bounceIn)}`,
  "bounce":  `${keyframes(bounce)}`,
  "flash": `${keyframes(flash)}`,
  "head-shake": `${keyframes(headShake)}`
};

export default animationCollection;