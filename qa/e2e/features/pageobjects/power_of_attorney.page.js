import Page from "./page";
const timeout = 30000;

class PowerOfAttorneyPage extends Page {
  get dropdownOriginAccount() { return $('[data-test="originAccount"]') }
  get inputTransferAmount() { return $('[data-test="transferAmount"]') }

  async selectAnAccount() {
    await (await this.dropdownOriginAccount).waitForClickable({ timeout });
    await (await this.dropdownOriginAccount).selectByIndex(1);
  }

  async setTransferAmount(value = 1) {
    await (await this.inputTransferAmount).waitForExist({ timeout });
    await (await this.inputTransferAmount).setValue(value);
  }
}

export default new PowerOfAttorneyPage();
