import Page from './page';
import moment from "moment";
const timeout = 30000;

let quantityCards = {
  initialValue: "",
};
class OverviewPage extends Page {
  get grafico1() { return $('[data-test="mobilePositionsType"]') }
  get rightIconButton() { return $('[data-test="rightIcon"]') }
  get leftIconButton() { return $('[data-test="leftIcon"]') }
  get variableIncomeConsolidatedPositionChart() { return $('//*[contains(text(), "Renda Variável")]/../../..') }
  get fixedIncomeConsolidatedPositionChart() { return $('//*[contains(text(), "Renda Fixa")]/../../..') }
  get fundsConsolidatedPositionChart() { return $('//*[contains(text(), "Fundos")]/../../..') }
  get cashAccountConsolidatedAssetsChart() { return $('[data-test="consolidatedAssets_0"]') }
  get fixedIncomeConsolidatedAssetsChart() { return $('[data-test="consolidatedAssets_1"]') }
  get multimakertConsolidatedAssetsChart() { return $('[data-test="consolidatedAssets_2"]') }
  get totalInvested() { return $('[data-test="value"]') }
  get tabMovement() { return $('[data-test="tab_Movimentações"]')}
  get filterButton() { return $('[data-test="filterButton"]')}
  get viewMoreOption() { return $('[data-test="viewMore"]')}
  get filterByFixedIncome() { return $('[for="activeRadio1"]')}
  get filterByVariableIncome() { return $('[for="activeRadio2"]')}
  get filterDateFrom() { return $('[data-test="filterDateFrom"]')}
  get filterDateTo() { return $('[data-test="filterDateTo"]')}
  get applyFilterButton() { return $('[data-test="applyFilterButton"]')}
  get quantityCards() { return $$('[data-x="card"]')}
  get firstCard() { return $('[data-x="card"]')}
  get emptyState() { return $('[data-test="emptyStatementsMobile"]') }
  get textEmptyState() { return $('//*[contains(@data-test, "emptyStatementsMobile")]/p') }
  get card() { return $('[data-test="card_0"]') }
  get dateCard() { return $('[data-test="dateCard"]') }
  get quantityFixedIncome() { return $$('[data-test="Renda Fixa"]')}
  get quantityVariableIncome() { return $$('[data-test="Renda Variável"]')}
  get filterBy7Days() { return $$('[data-test="periodRadio_0"]')}
  get showButtonDetailed() { return $('[data-test="Button"]')}

  existProductChart() {
    this.variableIncomeConsolidatedPositionChart.waitForClickable({ timeout });
    return !this.cashAccountConsolidatedAssetsChart.isDisplayed();
  }

  selectFixedIncome() {
    this.fixedIncomeConsolidatedPositionChart.waitForClickable({ timeout });
    this.fixedIncomeConsolidatedPositionChart.click();
  }

  selectVariableIncome(){
    this.variableIncomeConsolidatedPositionChart.waitForClickable({ timeout });
    this.variableIncomeConsolidatedPositionChart.click();
  }

  selectFundsIncome() {
    this.fundsConsolidatedPositionChart.waitForClickable({ timeout });
    this.fundsConsolidatedPositionChart.click();
  }

  clickShowButtonDetailed(){
    this.showButtonDetailed.waitForClickable({ timeout });
    this.showButtonDetailed.click();
  }

  rightArrow() {
    this.rightIconButton.waitForClickable({ timeout });
    this.rightIconButton.click();
  }

  existAssetsChart() {
    return this.cashAccountConsolidatedAssetsChart.isDisplayed();
  }

  accessTabMovements() {
    this.tabMovement.waitForClickable({ timeout });
    this.tabMovement.click();
  }

  existAnInvestment(){
    this.card.waitForDisplayed({ timeout });
    return this.card.isDisplayed();
  }

  clickViewMore(){
    this.viewMoreOption.waitForClickable({ timeout });
    this.viewMoreOption.click();
  }

  filterByFixedIncomeClick(){
    this.filterByFixedIncome.waitForClickable({ timeout:50000 });
    this.filterByFixedIncome.click();
  }

  filterByVariableIncomeClick(){
    this.filterByVariableIncome.waitForClickable({ timeout });
    this.filterByVariableIncome.click();
  }

  existEmptyState(){
    this.emptyState.waitForDisplayed({ timeout });
    return this.emptyState.isDisplayed();
  }

   existTextEmptyState(){
    this.textEmptyState.waitForDisplayed({ timeout });
    return this.textEmptyState.getText();
  }

  saveFirstCards() {
    this.firstCard.waitForDisplayed({ timeout });
    quantityCards.initialValue = this.quantityCards.length;
  }

  verifyQuantityCards() {
    this.waitLoading();
    this.firstCard.waitForDisplayed({ timeout });
    const initialValue = quantityCards.initialValue;
    const finalValue = this.quantityCards.length;
    return finalValue > initialValue ? true : false
  }

  verifyQuantityFixedIncomeByFilter(){
    this.firstCard.waitForDisplayed({ timeout });
    const quantityCardsFixedIncome = this.quantityFixedIncome.length;
    const quantityCardsByFilter = this.quantityCards.length;
    return quantityCardsFixedIncome == quantityCardsByFilter ? true : false
  }

  verifyQuantityVariableIncomeByFilter(){
    this.firstCard.waitForDisplayed({ timeout });
    const quantityCardsVariableIncome = this.quantityVariableIncome.length;
    const quantityCardsByFilter = this.quantityCards.length;
    return quantityCardsVariableIncome == quantityCardsByFilter ? true : false
  }

  filterBySpecificPeriod(){
    this.filterButton.waitForClickable({ timeout });
    this.filterButton.click();

    this.filterDateFrom.waitForClickable({ timeout });
    this.filterDateFrom.addValue('02052020');
    this.filterDateTo.addValue('02062020');

    this.applyFilterButton.waitForClickable({ timeout });
    this.applyFilterButton.click();
  }

  filterByFuturePeriod(){
    this.filterButton.waitForClickable({ timeout });
    this.filterButton.click();

    this.filterDateFrom.waitForClickable({ timeout });
    const today = moment().format("DD/MM/YYYY");
    const dateFuture = moment(today, "DD/MM/YYYY").add(1, "week").format("DD/MM/YYYY");

    this.filterDateFrom.addValue(today);
    this.filterDateTo.addValue(dateFuture);

    this.applyFilterButton.waitForClickable({ timeout });
    this.applyFilterButton.click();
  }

  filterByNoExistentMovements(){
    this.filterButton.waitForClickable({ timeout });
    this.filterButton.click();

    this.filterDateFrom.waitForClickable({ timeout });
    this.filterDateFrom.addValue('01012000');
    this.filterDateTo.addValue('01022000');

    this.applyFilterButton.waitForClickable({ timeout });
    this.applyFilterButton.click();
  }

  existPeriodResearched() {
    this.dateCard.waitForDisplayed({ timeout });
    return this.dateCard.getText();
  }

  typeFilter(filter) {
    this.firstCard.waitForDisplayed({ timeout });
    switch (filter) {
      case "renda fixa":
        this.filterByFixedIncomeClick();
        break;

      case "renda variável":
        this.filterByVariableIncomeClick();
        break;

      case "período futuro":
        this.filterByFuturePeriod();
        break;

      case "período que não exista movimentações":
        this.filterByNoExistentMovements();
        break;

      case "um período específico":
        this.filterBySpecificPeriod();
        break;

      default:
        throw new Error("não existe");
    }
  }

}

export default new OverviewPage();
