import Page from "./page";
const timeout = 30000;

class TransactionVoucherPage extends Page {
  get openVoucherButton() { return $('[data-test="openVoucherButton"]') }
  get voucherAmountLabel() { return $('[data-test="VoucherAmount"]') }
  get voucherAgencyDestinationLabel() { return $('[data-test="VoucherAgency_Destination"]') }
  get voucherAccountDestinationLabel() { return $('[data-test="VoucherCashAccount_Destination"]') }
  get authCode() { return $('[data-test="AuthCode"]') }
  get shareVoucherButton() { return $('[data-test="shareVoucherButton"]') }

  openVoucher() {
    this.openVoucherButton.waitForClickable({ timeout });
    this.openVoucherButton.click();
  }

  voucherAmount() {
    this.voucherAmountLabel.waitForExist({ timeout });
    return this.voucherAmountLabel.getText();
  }

  agencyDestination() {
    this.voucherAgencyDestinationLabel.waitForExist({ timeout });
    return this.voucherAgencyDestinationLabel.getText();
  }

  accountDestination() {
    this.voucherAccountDestinationLabel.waitForExist({ timeout });
    return this.voucherAccountDestinationLabel.getText();
  }

  existAuthCode() {
    return this.authCode.isExisting();
  }

  shareVoucher() {
    this.shareVoucherButton.waitForClickable({ timeout });
    this.shareVoucherButton.click();
  }
}

export default new TransactionVoucherPage();
