async function login(
  page,
  user = "pj_rodrigocarvalho@bancobbm.com.br",
  pwd = "12345678"
) {
  await page.waitForSelector('[data-test="virtualKeyboardKey1"]');

  await page.type("[name=email]", user);

  await page.click("[name=password]");

  for (let i = 0; i < pwd.length; i++) {
    await page.click(`[data-test="virtualKeyboardKey${pwd.charAt(i)}"]`);
  }

  await page.click('[data-test="LoginBtn"]');

  await page.waitForSelector('[data-test="Navbar_Summary"]');
}

module.exports = { login };
