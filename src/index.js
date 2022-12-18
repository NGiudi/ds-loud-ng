import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

/*******************************************************************************/
/** IN PROGRESS:                                                              **/
/**   1. Perfeccionar el Select (por ahora solo hice lo basico de lo basico). **/
/**   2. Rules Panel (Seguir después de terminar con el select)               **/
/**                                                                           **/
/** TODO LIST:                                                                **/
/**   1. Revisar el componente de dropdown, tengo que hacer mejoras.          **/
/**   2. Terminar AppLayout => Agregar navegacion de react en los botones del **/
/**      sidebar.                                                             **/
/*******************************************************************************/

/* fontawensome icons. */
library.add(fas, far);

/* layout components */
export { Columns, ThemeDS } from "./components/layout";

/* atoms components */
export {
  Avatar,
  Badge,
  Button,
  Countdown,
  Dropdown,
  DropdownItem,
  DropdownPanel,
  DropdownToogle,
  Icon,
  Image,
  Input,
  Modal,
  Panel,
  ProgressBar,
  Select,
  Text,
} from "./components/atoms";

/* molecules components */
export { AppLayout, RulesPanel, StepsBar } from "./components/molecules";
