export const IS_CLIENT = typeof window != "undefined";
export const localUrl = "http://localhost:8080";
export const certificateLocalUrl = "https://localhost:8080";
export const EMPTY_CHARACTER = "-";
export const BUY = "buy";
export const VOID = "javascript:void(0)";
export const ENTERED = "entered";
export const ENTERING = "entering";
export const EXITED = "exited";
export const EXITING = "exiting";
export const UNMOUNTED = "unmounted";
export const PT_BR = "pt-BR";
export const EN_US = "en-US";
export const ZH_CN = "zh-CN";
export const SCREEN_LG = 1199;
export const SCREEN_MD = 992;
export const SCREEN_SM = 767;
export const SCREEN_XS = 449;
export const SCREEN_XXS = 319;
export const TIME_ALERT_POPUP_THRESHOLD = 60;
export const DOCUSIGN_SUCCESS_REDIRECT_QUERY_PARAMS = "signing_complete";
export const UP = "up";
export const DOWN = "down";
export const RIGHT = "right";
export const CASH_ACCOUNT = "CashAccount";
export const FIXED_INCOME = "FixedIncome";
export const EQUITY = "Equity";
export const FUNDS = "Funds";
export const MAINTENANCE = "Maintenance";
export const PAGINATION_TOTAL = "X-Total-Count";
export const MSG_AUTH_CODE = "X-Message-Authentication-Code";
export const CORPORATION = "Corporation";
export const INDIVIDUAL = "Individual";
export const SIGNING = "SignContract";
export const VISUALIZATION = "GetContract";
export const PENDING = "Pending";
export const COMPLETED = "Completed";
export const SIGNED = "Signed";
export const IN_PROGRESS = "InProgress";
export const GET_POSITION = "GetPosition";
export const GET_TRANSACTIONS = "GetTransactions";
export const GET_CONTRACT = "GetContract";
export const GET_DOCUMENTS = "GetDocuments";
export const GET_TERMS = "GetTerms";
export const GET_NOTIFICATIONS = "GetNotifications";
export const GET_PERSON_REGISTRATION = "GetPersonRegistration";
export const CREATE_REGISTRATO = "CreateRegistrato";
export const CONFIRM_PERSONAL_REGISTRATION = "ConfirmPersonRegistration";
export const BLOCKED = "AlreadySigned";
export const EMPTY = "";
export const SUITABILITY_NOTIFICATION_TYPE = "SuitabilityForms";
export const GET_SUITABILITY_FORM = "GetForm";
export const DEFAULT_VALUE = "---";
export const GET_ACCOUNT_MANAGER = "GetAccountManager";
export const CREATE_TRANSACTION = "CreateTransaction";
export const MFABOARDING_NOTIFICATION_TYPE = "MFABoarding";
export const MFABOARDING_PARAM_APP = "bocomBBMApp";
export const MFABOARDING_PARAM_AUTH = "authenticatorApp";
export const UPDATE_PERSON_REGISTRATION = "UpdatePersonRegistration";
export const APPROVE_TERMS_TYPE = "ApproveTerms";
// ACTION TYPES CONSTANTS
export const ACTION_TYPE_APPROVE_SUITABILITY = "approvesuitability";
export const ACTION_TYPE_APPOVE_TOTP_FACTOR = "approvetotpfactor";
export const ACTION_TYPE_WIRE_TRANSFER = "wiretransfer";
export const ACTION_TYPE_WIRE_TRANSFER_THIRD_PARTY = "wiretransferthirdparty";
export const ACTION_TYPE_PERSON_REGISTRATION_CONFIRM_INFORMATION =
  "personRegistration.confirmInformation";
export const ACTION_TYPE_APPROVE_INVESTMENT = "approveinvestment";
export const GET_STATEMENT = "GetStatement";
export const SINGLE_CHOICE = "SingleChoice";
export const SINGLE_CHOICE_ANSWER = "SingleChoiceAnswer";
export const SINGLE_CHOICE_ANSWER_$TYPE =
  "SuitabilityForms.DTO.Answers.SingleChoiceAnswer, SuitabilityForms";
export const PERCENTAGE_COMPOSITION = "PercentageComposition";
export const PERCENTAGE_COMPOSITION_ANSWER = "PercentageCompositionAnswer";
export const PERCENTAGE_COMPOSITION_ANSWER_$TYPE =
  "SuitabilityForms.DTO.Answers.PercentageCompositionAnswer, SuitabilityForms";
export const SINGLE_CHOICE_LIST = "SingleChoiceList";
export const SINGLE_CHOICE_LIST_ANSWER = "SingleChoiceListAnswer";
export const SINGLE_CHOICE_LIST_ANSWER_$TYPE =
  "SuitabilityForms.DTO.Answers.SingleChoiceListAnswer, SuitabilityForms";
export const TABLE_SINGLE_CHOICE = "TableSingleChoice";
export const TABLE_SINGLE_CHOICE_ANSWER = "TableSingleChoiceAnswer";
export const TABLE_SINGLE_CHOICE_ANSWER_$TYPE =
  "SuitabilityForms.DTO.Answers.TableSingleChoiceAnswer, SuitabilityForms";
export const MOBILE_HASH_PREFIX = "#mobile_";
export const IMPERSONATE_HASH_PREFIX = "#impersonate_";
export const DEFAULT_FILE_FORMAT = "application/pdf";
export const EXCEL_FILE_FORMAT = "application/vnd.ms-excel";
export const FILE_FORMAT_PNG = "image/png";
export const FILE_FORMAT_JPG = "image/jpeg";
export const REGISTRATION_DATA_NOTIFICATION_TYPE = "PersonRegistrationForms";
export const BRL = "BRL";
export const USD = "USD";
export const CNY = "CNY";
export const BRL_CURRENCY = "R$";
export const GET_EFT = "GetEFT";
export const CREATE_EFT = "CreateEFT";
export const APPROVE_EFT = "ApproveEFT";
export const CREATE_APPROVE_EFT = "CreateApproveEFT";
export const PENDENCIES = "pendencies";
export const SCHEDULED_TRANSFERS = "scheduled_transfers";
export const ALL_TRANSFERS = "all_transfers";
export const HISTORY = "history";
export const GET_CREDIT_PORTFOLIO = "GetCreditPortfolio";
export const PT_BR_SHORT_DATE_FORMAT = "ddd, DD [de] MMM";
export const EN_US_SHORT_DATE_FORMAT = "ddd, MMM Do";
export const PT_BR_LONG_DATE_FORMAT = "DD MMM YYYY, HH:mm";
export const EN_US_LONG_DATE_FORMAT = "DD MMM YYYY, HH:mm A";
export const PT_BR_DATE_FORMAT = "DD/MM/YYYY";
export const EN_US_DATE_FORMAT = "MM/DD/YYYY";
export const PT_BR_DATE_PARSER = "DD-MM-YYYY";
export const EN_US_DATE_PARSER = "MM-DD-YYYY";
export const PT_BR_DAY_MONTH_FORMAT = "DD/MM";
export const EN_US_DAY_MONTH_FORMAT = "MM/DD";
export const DEFAULT_API_RESPONSE_DATE_FORMAT = "YYYY-MM-DD";
export const PT_BR_24H_FORMAT = "HH:mm";
export const PT_BR_12H_FORMAT = "hh:mm";
export const EN_US_AM_PM_FORMAT = "hh:mm A";
export const STATEMENTS_PAGE_SIZE = 90;
export const MOVIMENTS_TAB_SIZE = 90;
export const DEFAULT_PAGEABLE_RANGE = 5;
export const DOWNLOAD_PRODUCT_TERMS_ENDPOINT = "/productterms/";
export const CUSTODY = "Contrato de Custodia Bocom BBM.pdf";
export const CUSTODY_CCVM = "Contrato de Custodia Bocom BBM CCVM.pdf";
export const INTERMEDIATION = "Contrato de Intermediação.pdf";
export const ACCOUNT_AND_ORDER = "Termo por Conta e Ordem.pdf";
export const DEBENTURES = "Termo de Debentures.pdf";
export const LCA = "Termo de LCA.pdf";
export const LCI = "Termo de LCI.pdf";
export const DIRECT_TREASURE = "Termo de Tesouro Direto.pdf";
export const FINANCIAL_BILL_COMMITMENT =
  "Termo de Compromissada de Letras Financeiras.pdf";
export const SECURITIES_CONSULTING_SERVICES_CONTRACT =
  "Contrato de Consultoria BOCOM BBM CCVM.pdf";
export const REGISTRATION_DATA_ATTACHED_FILE_SIZE = 15000000;
export const REGISTRATION_DATA_ACCEPTED_FILE_FORMATS =
  ".jpg, .pdf, .gif, .png, .bmp";
export const REMMITANCES_UPLOAD_ACCEPTED_FILE_FORMATS = ".rem";
export const CONTACTS = "contacts";
export const DOCUMENTS = "documents";
export const TAX_RESIDENCES = "taxResidences";
export const FATCA_INFORMATION = "fatcaInformation";
export const INVESTMENT_DETAILS = "investmentDetails";
export const POLITICALLY_EXPOSED_PERSON = "politicallyExposedPerson";
export const ATTORNEYS_IN_FACT = "attorneysInFact";
export const RELATED_PERSON_INFORMATION = "relatedPersonInformation";
export const PERSONAL_REGISTRATION_DETAILS = "personalRegistrationDetails";
export const PURPOSE_WITH_THE_INSTITUTION = "purposeWithTheInstitution";
export const PROFESSIONAL_INFORMATION = "professionalInformation";
export const REPRESENTATION_AUTHORIZATION = "representationAuthorization";
export const BOCOM_BBM_FOOTER_COMPLIANCE_BR =
  "https://www.bocombbm.com.br/governanca-corporativa/compliance/";
export const BOCOM_BBM_FOOTER_COMPLIANCE_US =
  "https://www.bocombbm.com.br/en/governance/compliance/";
export const NEW_TERM_PDF = "Termo de Adesão - Internet Banking.pdf";

export const INVESTMENT_PRODUCTS_URL = "/investments/products";
export const INVESTMENT_PRODUCTS_LIST_URL = "/investments/products/list";
export const INVESTMENT_FUNDS_URL = "/investments/products/funds";
export const INVESTMENT_FIXED_INCOME_URL = "/investments/products/fixed-income";
export const INVESTMENT_POSITIONS_FUNDS_URL = "/investments/positions/funds";
export const INVESTMENT_POSITIONS_FIXED_INCOME_URL =
  "/investments/positions/fixed-income";
export const INVESTMENT_POSITIONS_EQUITIES_URL =
  "/investments/positions/equities";
export const INVESTMENT_POSITIONS = "/investments/positions";

export const INVESTMENT_LCA_URL = "/investments/products/lca";
export const INVESTMENT_FUNDS_ROLE = "GetInvestmentFunds";
export const INVESTMENT_FIXED_INCOME_ROLE = "GetFixedIncomeProducts";
export const WIRETRANSFER_SERVICE = "wireTransfer";
export const FUNDS_SERVICE = "funds";
export const FOREIGN_EXCHANGE = "ForeignExchange";
export const APPROVE_FOREIGN_EXCHANGE = "approveforeignexchange";
export const BRASILIA_UTC_OFFSET = "-03:00";
export const TYPE_PRODUCT_FUNDS = "productTerms";
export const TYPE_PRODUCT_FUNDS_UNSUITABLE = "unsuitableTerms";

export const ONE_HUNDRED = "100";

export const TRANSFER_SENT = "TransferenciaEnviada";
export const TRANSFER_VOUCHER = "TRANSFER_VOUCHER";
export const STATEMENTS_URL = "/cashaccounts/statements";

export const CNAB_ROLE = "cnabDownload";
export const GET_CONSENTS = "GetConsents";
export const NEW_CONSENTS = "CreateConsents";
export const APPROVE_CONSENTS = "ApproveConsents";

export const SHIPMENTS_RETURN = "TransferReturnFiles";
export const SHIPMENTS_UPLOAD = "TransferRemittanceFiles";
export const VALIDATION_FILE = "ValidateRemittanceFile";
export const UPLOAD_REMITTANCE_FILES = "UploadRemittanceFiles";

export const RECEIVABLES = "Receivables";

export const INTERNATIONAL_TRANSFER = "InternationalTransfer";
export const TYPE_AUTH_FACTOR_TOTP = "totp";

export const PRIVATEACCOUNT = "Private";
export const TRANSACTIONALACCOUNT = "Transactional";

export const OFFSHORE = "GlobalVision";
export const PERCENT_COMPARE_VALUE_MAX = 100;
export const GETINVESTMENTSOFFSHORETRANSACTIONS = 'GetInvestmentsOffshoreTransactions';

export const GET_RECEIVABLES_REPORTS = "GetReceivablesReports";

export const POPUPREJECTION = "PopUpBlockingWithRejection";
export const POPUPREBLOCK = "PopUpBlocking";
export const GET_PORTABILITIES = "GetPortabilities";
