import { useMemo } from "react";

import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import queryString from "query-string";

export const useRouter = () => {
  const location = useLocation();
  const match = useRouteMatch();
  const history = useHistory();
  const params = useParams();

  //? Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      history,
      location,
      match,
      pathname: location.pathname,
      push: history.push,
      query: {
        ...queryString.parse(location.search), //? convert string to object
        ...params,
      },
      replace: history.replace,
    };
  }, [params, match, location, history]);
};
