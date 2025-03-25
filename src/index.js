/******************************************************************/
/*  ## Test                                                       */
/*                                                                */
/*  Los métodos de utils cuentan con tests. Para ejecutarlos      */
/*  debemos usar el siguiente comando:                            */
/*                                                                */
/*    npm run test                                                */
/*                                                                */
/*  ## ¿Cómo actualizar el deploy en githup pages?                */
/*                                                                */
/*    1. El siguiente comando va a crear el build y va a          */
/*    publicar la página.                                         */
/*                                                                */
/*      npm run deploy                                            */
/*                                                                */
/*    2. Si en consola vemos el mensaje `Publish`, se ha          */
/*    publicado con éxito la página.                              */
/*                                                                */
/*  ## ¿Cómo publicar en npm?                                     */
/*                                                                */
/*    1. Actualizar la version en el package json, si no se hace  */
/*    esto, va a fallar al momento de intentar publicar en npm.   */
/*                                                                */
/*    2. Construir el nuevo proyecto                              */
/*                                                                */
/*      npm run build                                             */
/*                                                                */
/*    3. Publicar el nuevo paquete                                */
/*                                                                */
/*      npm publish                                               */
/*                                                                */
/******************************************************************/

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

//? fontawensome icons.
library.add(fas, far);

//? components
export * from "./components/atoms";
export * from "./components/layout";
export * from "./components/molecules";

//? hooks
export { useLocalStorage } from "./hooks/useLocalStorage";
export { useNotify } from "./hooks/useNotify";
export { useOnlineStatus } from "./hooks/useOnlineStatus";
export { useOuterClick } from "./hooks/useOuterClick";
export { usePrevious } from "./hooks/usePrevious";
export { useRouter } from "./hooks/useRouter";
export { useWindowSize } from "./hooks/useWindowSize";