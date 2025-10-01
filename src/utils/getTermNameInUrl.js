export const getTermName = urlFile => {
  const urlTermName = urlFile.match(
    /productterms\/([\w\-%+!#$^&*()={}[\]|:;"'~`<>,.\\?]+\.pdf)/
  );
  const termName = urlTermName[1].replace(".pdf", "");
  const decodeTermName = decodeURI(termName);

  return { termName: decodeTermName, urlTermName: urlTermName[1] };
};
