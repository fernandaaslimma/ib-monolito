import Page from './page';
import { pj5Secret } from '../../utils/constants';
const timeout = 50000;

class MovementsPage extends Page {
  get movementsInProgress() { return $('[data-test="movementsInProgress"]') }
  get hasDateMovements() { return $$('[data-test="dateMovements"]') }
  get consolidatedPosition() { return $('[data-test="Consolidated_Position"]') }
  get lastMovementDate() { return $('[data-test="card_0"]').$('[data-test="dateMovements"]') }
  get fundApplied() { return $('[data-test="card_0"]').$('[data-test="nameFund_0"]') }

  existMovementsInProgress() {
    this.consolidatedPosition.waitForExist({ timeout });
    return this.movementsInProgress.isExisting();
  }

  accessMovementsInProgress() {
    browser.waitAndClick(this.movementsInProgress.selector);
  }

  existOneOrMoreMovements() {
    return this.hasDateMovements[0].isExisting();
  }

  autorizationMFA() {
    this.flowMFA(pj5Secret);
  }

  waitUpdated() {
    this.movementsInProgress.waitForExist({ timeout });
    this.waitLoading();
  }

  showingLastMovements() {
    this.lastMovementDate.waitForExist({ timeout });

    if (
      this.lastMovementDate.getText() === "Hoje" &&
      this.fundApplied
        .getText()
        .includes("BAHIA AM FI RENDA FIXA REFERENCIADO DI")
    ) {
      return true;
    } else {
      throw new Error(
        "Error in the last movement, do not showing in order correctly"
      );
    }
  }
}

export default new MovementsPage();
