export function hotjarTag(pathName) {
  if (pathName) {
    window.hj && window.hj("stateChange", `${pathName}`);
  } else {
    const localPath = window.location.pathname;
    window.hj && window.hj("stateChange", `${localPath}`);
  }
}

export function hotjarId(id, infos) {
  window.hj && window.hj("identify", id, infos);
}
