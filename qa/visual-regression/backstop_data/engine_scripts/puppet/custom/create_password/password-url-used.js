module.exports = async page => {
  const document = "05332256558";
  const password = "12345678";
  const password_confirmation = "12345678";

  await page.type("[name=document]", document);

  await page.click("[name=passwordConfirmation]");
  for (let i = 0; i < password_confirmation.length; i++) {
    await page.click(
      `[data-test="virtualKeyboardKey${password_confirmation.charAt(i)}"]`
    );
  }

  await page.click("[name=password]");
  for (let i = 0; i < password.length; i++) {
    await page.click(`[data-test="virtualKeyboardKey${password.charAt(i)}"]`);
  }

  await page.click('[data-test="CreatePasswordBtn"]');

  await page.waitForSelector('[data-test="Toastr"]', { visible: true });
};
