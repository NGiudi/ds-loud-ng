import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

/*******************************************************************************/
/**                                                                           **/
/** TODO LIST:                                                                **/
/**   1. Revisar el componente de dropdown, tengo que hacer mejoras.          **/
/**   2. Usar version 6 de react router dom.                                  **/
/*******************************************************************************/

//? fontawensome icons.
library.add(fas, far);

//? layout components
export { Box, Columns, Flex, ThemeDS } from "./components/layout";

//? atoms components
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
  SelectOption,
  Tab,
  Tabs,
  Text,
} from "./components/atoms";

//? molecules components
export { AppLayout, RulesPanel, StepsBar } from "./components/molecules";
