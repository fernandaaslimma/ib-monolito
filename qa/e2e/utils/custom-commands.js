exports.browserCommands = () => {
  browser.addCommand("waitAndClick", async (selector, timeout = 50000) => {
    try {
      await browser.waitUntil(() => {
        return $(selector).waitForExist({timeout});
      }, timeout);

      await browser.execute((selector) => {
        document.querySelector(selector).click();
      }, selector);
    } catch (error) {
      throw new Error('Error in "waitAndClick"', error);
    }
  });

  browser.addCommand("jsClick", async (selector) => {
    try {
      await browser.execute((selector) => {
        document.querySelector(selector).click();
      }, selector);
    } catch (error) {
      throw new Error('Error in "jsClick"', error);
    }
  });

  browser.addCommand("jsChildElementCount", (selector) => {
    try {
      return browser.execute(`return document.querySelector('${selector}').childElementCount`);
    } catch (error) {
      throw new Error('Error in "jsChildElementCount"', error);
    }
  });
};
