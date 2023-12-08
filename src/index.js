import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

//? fontawensome icons.
library.add(fas, far);

//? layout components
export * from "./components/layout";

//? atoms components
export * from "./components/atoms";

//? molecules components
export * from "./components/molecules";
