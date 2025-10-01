module.exports = async page => {
  const email = "teste@bocombbm.com.br";
  const password = "12345678";

  await page.waitForSelector('[data-test="virtualKeyboardKey1"]');

  await page.type("[name=email]", email);

  await page.click("[name=password]");

  for (let i = 0; i < password.length; i++) {
    await page.click(`[data-test="virtualKeyboardKey${password.charAt(i)}"]`);
  }
};
