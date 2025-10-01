export function iconBankName(codeBank) {
  const bank = {
    1: "Bb",
    107: "Bbm",
    237: "Bradesco",
    336: "C6",
    104: "Caixa",
    745: "Citibank",
    756: "Coperativo",
    335: "Digio",
    269: "Hsbc",
    77: "Inter",
    341: "Itau",
    260: "Nubank",
    212: "Original",
    623: "Pan",
    422: "Safra",
    33: "Santander",
    655: "Votorantim",
    348: "Xp"
  };

  if (bank[codeBank] === undefined) {
    return "BankDefault";
  }
  return bank[codeBank];
}
