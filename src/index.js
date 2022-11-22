import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

/*******************************************************************************/
/** IN PROGRESS:                                                              **/
/**   1. Perfeccionar el Select (por ahora solo hice lo basico de lo basico). **/
/**   2. Rules Panel (Seguir después de terminar con el select)               **/
/**                                                                           **/
/** TODO LIST:                                                                **/
/**   1. Quitar todos los colores harcodeados.                                **/
/**   2. Hacer dinamico el tamaño de la letra del placeholder de image.       **/
/**   3. Revisar el componente de dropdown, tengo que hacer mejoras.          **/
/**   4. Revisar el componente Input                                          **/
/**   5. Terminar AppLayout                                                   **/
/*******************************************************************************/

/* fontawensome icons. */
library.add(fas, far);

/* layout components */
export { Columns } from "./components/layout";
export { ThemeDS } from "./components/layout";

/* atoms components */
export { Avatar } from "./components/atoms";
export { Button } from "./components/atoms";
export { Countdown } from "./components/atoms";
export { Dropdown } from "./components/atoms";
export { DropdownItem } from "./components/atoms";
export { DropdownPanel } from "./components/atoms";
export { DropdownToogle } from "./components/atoms";
export { Icon } from "./components/atoms";
export { Image } from "./components/atoms";
export { Input } from "./components/atoms";
export { Modal } from "./components/atoms";
export { Panel } from "./components/atoms";
export { ProgressBar } from "./components/atoms";
export { Select } from "./components/atoms";
export { Text } from "./components/atoms";

/* molecules components */
export { AppLayout } from "./components/molecules";
export { RulesPanel } from "./components/molecules";
export { StepsBar } from "./components/molecules";
