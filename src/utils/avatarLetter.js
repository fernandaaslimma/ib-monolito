const avatarLetter = fullName => {
  const arrayName = fullName.split(" ");

  return arrayName[0][0] + arrayName[arrayName.length - 1][0];
};

export default avatarLetter;
