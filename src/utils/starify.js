export const starifyMail = mail => {
  if (mail.indexOf && mail.indexOf("@") < 0) {
    return mail;
  }

  const splitten = mail.split("@");
  const twoThirds = splitten[0].length - 2;
  const asterified = starify(splitten[0], i => i < twoThirds);
  return `${asterified}@${splitten[1]}`;
};

export const starifyTelephone = telephone => {
  return telephone.replace(/^\d{8}/, "********");
};

export default function starify(string, mustBeStar = () => true) {
  return string
    .split("")
    .reverse()
    .reduce((stack, letter, i) => [...stack, mustBeStar(i) ? "*" : letter], [])
    .reverse()
    .join("");
}
