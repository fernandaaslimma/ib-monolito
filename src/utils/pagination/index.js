import { formatToQuery } from "../formatDate";

export default function fetchDataForFilter(fn, filter, activePage, pageSize) {
  const { from, range } = filter;
  const offset = (activePage - 1) * pageSize;

  if (from) {
    fn(formatToQuery(from), "", offset);
  } else if (range && range.from && range.to) {
    fn(formatToQuery(range.from), formatToQuery(range.to), offset);
  } else {
    fn("", "", offset);
  }
}
