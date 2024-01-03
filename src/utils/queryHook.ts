import { useLocation, useNavigate } from "react-router-dom";

import qs from "qs";

const QueryHook = <
  TParam extends Record<string, string | undefined> = Record<string, string>
>() => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true }) as TParam;

  const QueryParams = query;

  const stringify = (obj: unknown) => qs.stringify(obj);

  const AddQueryParams = (params: any = {}) => {
    navigate(`?${qs.stringify({ ...params })}`);
  };

  const MergeQueryParams = (params: any = {}) => {
    navigate(`?${qs.stringify({ ...query, ...params })}`);
  };

  return {
    QueryParams,
    AddQueryParams,
    MergeQueryParams,
    navigate,
    location,
    stringify,
  };
};

export default QueryHook;
