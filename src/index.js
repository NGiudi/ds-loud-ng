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
