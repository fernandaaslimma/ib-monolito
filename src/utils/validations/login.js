export const emailRegex = new RegExp(
  // eslint-disable-next-line
  /^([\w\.\-]+)@(([^\_\@\.\!\#\$\%\¨\&\*\(\)\=\+\[\{\]\}\`\^\~\,\<\>\;\:\\?\/\'\"\·\‑\‒\–\—\―\‗\‘\’\‚\‛\“\”\„\‟\•\‣\․\‥\…\‧\′\″\‴\‵\‶\‷\❛\❜\❝\❞\ʹ\ʺ\ʻ\ʼ\ʽ\ʾ\ʿ\ˁ\ˀ\´\¿\®\½\¼\α\ß\π\Σ\Φ\±\≥\≤\s])+)((\.([a-z]){1,}[a-z])+)$/
);

export const checkValidEmail = text =>
  typeof text === "string" && emailRegex.test(text) && text.length > 0;

export const checkValidPassword = text =>
  typeof text === "string" && text.length >= 8;
