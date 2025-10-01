// dropdown lists that for the time being not come from any API
import { translate, isPtBR } from "./i18n";
import deepClone from "./deepClone";

export const injectedCountryList = list => {
  const constantCountries = isPtBR()
    ? deepClone(pt_BRList)
    : deepClone(en_USList);
  const matchCountries = list.filter(e =>
    constantCountries.every(
      country =>
        e.country && e.country.toLowerCase() != country.value.toLowerCase()
    )
  );
  let lastId = constantCountries.length;
  matchCountries.map(el => {
    lastId += 1;
    constantCountries.push({
      label: el.country,
      value: el.country,
      altValue: el.country,
      code: "",
      id: lastId
    });
  });

  constantCountries.sort((a, b) => a.label.localeCompare(b.label));

  return constantCountries;
};

export const professionList = [
  {
    id: 1,
    value: "retired",
    label: translate("RETIRED")
  },
  {
    id: 2,
    value: "privateSectorEmployee",
    label: translate("PRIVATE_SECTOR_EMPLOYEE")
  },
  {
    id: 3,
    value: "publicSectorEmployee",
    label: translate("PUBLIC_SECTOR_EMPLOYEE")
  },
  {
    id: 4,
    value: "selfEmployed",
    label: translate("SELF_EMPLOYED")
  },
  {
    id: 5,
    value: "fromHome",
    label: translate("FROM_HOME")
  },
  {
    id: 6,
    value: "owner",
    label: translate("ENTREPENEUR")
  },
  {
    id: 7,
    value: "others",
    label: translate("PROFESSION_OTHERS")
  },
  {
    id: 8,
    value: "professional",
    label: translate("PROFESSIONAL")
  },
  {
    id: 9,
    value: "socioOwner",
    label: translate("SOCIO_OWNER")
  }
];

export const maritalStatusList = [
  { value: "married", label: translate("ATUCAD_MARRIED") },
  { value: "divorced", label: translate("ATUCAD_DIVORCED") },
  { value: "single", label: translate("ATUCAD_SINGLE") },
  { value: "widower", label: translate("ATUCAD_WIDOWER") },
  { value: "stableunion", label: translate("ATUCAD_STABLE_UNION") },
  {
    value: "judiciouslyseparated",
    label: translate("ATUCAD_LEGALLY_SEPARATED")
  },
  { value: "others", label: translate("ATUCAD_MARITAL_OTHERS") }
];

export const pt_BRList = [
  {
    label: "",
    value: "",
    altValue: "",
    id: 0
  },
  {
    label: "Afeganistão",
    value: "Afghanistan",
    altValue: "Afeganistão",
    code: "AF",
    id: 1
  },
  {
    label: "África do Sul",
    value: "South Africa",
    altValue: "África do Sul",
    code: "ZA",
    id: 2
  },
  {
    label: "Albânia",
    value: "Albania",
    altValue: "Albânia",
    code: "AL",
    id: 3
  },
  {
    label: "Alemanha",
    value: "Germany",
    altValue: "Alemanha",
    code: "DE",
    id: 4
  },
  {
    label: "Andorra",
    value: "Andorra",
    altValue: "Andorra",
    code: "AD",
    id: 5
  },
  { label: "Angola", value: "Angola", altValue: "Angola", code: "AO", id: 6 },
  {
    label: "Anguilla",
    value: "Anguilla",
    altValue: "Anguilla",
    code: "AI",
    id: 7
  },
  {
    label: "Antártida",
    value: "Antarctica",
    altValue: "Antártida",
    code: "AQ",
    id: 8
  },
  {
    label: "Antígua e Barbuda",
    value: "Antigua & Barbuda",
    altValue: "Antígua e Barbuda",
    code: "AG",
    id: 9
  },
  {
    label: "Arábia Saudita",
    value: "Saudi Arabia",
    altValue: "Arábia Saudita",
    code: "SA",
    id: 10
  },
  {
    label: "Argélia",
    value: "Algeria",
    altValue: "Argélia",
    code: "DZ",
    id: 11
  },
  {
    label: "Argentina",
    value: "Argentina",
    altValue: "Argentina",
    code: "AR",
    id: 12
  },
  {
    label: "Armênia",
    value: "Armenia",
    altValue: "Armênia",
    code: "AM",
    id: 13
  },
  { label: "Aruba", value: "Aruba", altValue: "Aruba", code: "AW", id: 14 },
  {
    label: "Austrália",
    value: "Australia",
    altValue: "Austrália",
    code: "AU",
    id: 15
  },
  {
    label: "Áustria",
    value: "Austria",
    altValue: "Áustria",
    code: "AT",
    id: 16
  },
  {
    label: "Azerbaijão",
    value: "Azerbaijan",
    altValue: "Azerbaijão",
    code: "AZ",
    id: 17
  },
  {
    label: "Bahamas",
    value: "Bahamas",
    altValue: "Bahamas",
    code: "BS",
    id: 18
  },
  {
    label: "Bahrein",
    value: "Bahrain",
    altValue: "Bahrein",
    code: "BH",
    id: 19
  },
  {
    label: "Bangladesh",
    value: "Bangladesh",
    altValue: "Bangladesh",
    code: "BD",
    id: 20
  },
  {
    label: "Barbados",
    value: "Barbados",
    altValue: "Barbados",
    code: "BB",
    id: 21
  },
  {
    label: "Belarus",
    value: "Belarus",
    altValue: "Belarus",
    code: "BY",
    id: 22
  },
  {
    label: "Bélgica",
    value: "Belgium",
    altValue: "Bélgica",
    code: "BE",
    id: 23
  },
  { label: "Belize", value: "Belize", altValue: "Belize", code: "BZ", id: 24 },
  { label: "Benin", value: "Benin", altValue: "Benin", code: "BJ", id: 25 },
  {
    label: "Bermudas",
    value: "Bermuda",
    altValue: "Bermudas",
    code: "BM",
    id: 26
  },
  {
    label: "Bolívia",
    value: "Bolivia",
    altValue: "Bolívia",
    code: "BO",
    id: 27
  },
  {
    label: "Bósnia-Herzegóvina",
    value: "Bosnia & Herzegovina",
    altValue: "Bósnia-Herzegóvina",
    code: "BA",
    id: 28
  },
  {
    label: "Botsuana",
    value: "Botswana",
    altValue: "Botsuana",
    code: "BW",
    id: 29
  },
  { label: "Brasil", value: "Brazil", altValue: "Brasil", code: "BR", id: 30 },
  { label: "Brunei", value: "Brunei", altValue: "Brunei", code: "BN", id: 31 },
  {
    label: "Bulgária",
    value: "Bulgaria",
    altValue: "Bulgária",
    code: "BG",
    id: 32
  },
  {
    label: "Burkina Fasso",
    value: "Burkina Faso",
    altValue: "Burkina Fasso",
    code: "BF",
    id: 33
  },
  {
    label: "Burundi",
    value: "Burundi",
    altValue: "Burundi",
    code: "BI",
    id: 34
  },
  { label: "Butão", value: "Bhutan", altValue: "Butão", code: "BT", id: 35 },
  {
    label: "Cabo Verde",
    value: "Cape Verde",
    altValue: "Cabo Verde",
    code: "CV",
    id: 36
  },
  {
    label: "Camarões",
    value: "Cameroon",
    altValue: "Camarões",
    code: "CM",
    id: 37
  },
  {
    label: "Camboja",
    value: "Cambodia",
    altValue: "Camboja",
    code: "KH",
    id: 38
  },
  { label: "Canadá", value: "Canada", altValue: "Canadá", code: "CA", id: 39 },
  {
    label: "Canárias",
    value: "Canary Islands",
    altValue: "Canárias",
    code: "IC",
    id: 40
  },
  {
    label: "Cazaquistão",
    value: "Kazakhstan",
    altValue: "Cazaquistão",
    code: "KZ",
    id: 41
  },
  {
    label: "Ceuta e Melilla",
    value: "Ceuta & Melilla",
    altValue: "Ceuta e Melilla",
    code: "EA",
    id: 42
  },
  { label: "Chade", value: "Chad", altValue: "Chade", code: "TD", id: 43 },
  { label: "Chile", value: "Chile", altValue: "Chile", code: "CL", id: 44 },
  { label: "China", value: "China", altValue: "China", code: "CN", id: 45 },
  { label: "Chipre", value: "Cyprus", altValue: "Chipre", code: "CY", id: 46 },
  {
    label: "Cingapura",
    value: "Singapore",
    altValue: "Cingapura",
    code: "SG",
    id: 47
  },
  {
    label: "Colômbia",
    value: "Colombia",
    altValue: "Colômbia",
    code: "CO",
    id: 48
  },
  {
    label: "Comores",
    value: "Comoros",
    altValue: "Comores",
    code: "KM",
    id: 49
  },
  {
    label: "Congo",
    value: "Congo (Republic)",
    altValue: "Congo",
    code: "CG",
    id: 50
  },
  {
    label: "Coréia do Norte",
    value: "North Korea",
    altValue: "Coréia do Norte",
    code: "KP",
    id: 51
  },
  {
    label: "Coréia do Sul",
    value: "South Korea",
    altValue: "Coréia do Sul",
    code: "KR",
    id: 52
  },
  {
    label: "Costa do Marfim",
    value: "Côte d¿Ivoire",
    altValue: "Costa do Marfim",
    code: "CI",
    id: 53
  },
  {
    label: "Costa Rica",
    value: "Costa Rica",
    altValue: "Costa Rica",
    code: "CR",
    id: 54
  },
  {
    label: "Croácia",
    value: "Croatia",
    altValue: "Croácia",
    code: "HR",
    id: 55
  },
  { label: "Cuba", value: "Cuba", altValue: "Cuba", code: "CU", id: 56 },
  {
    label: "Curaçao",
    value: "Curaçao",
    altValue: "Curaçao",
    code: "CW",
    id: 57
  },
  {
    label: "Diego Garcia",
    value: "Diego Garcia",
    altValue: "Diego Garcia",
    code: "DG",
    id: 58
  },
  {
    label: "Dinamarca",
    value: "Denmark",
    altValue: "Dinamarca",
    code: "DK",
    id: 59
  },
  {
    label: "Djibuti",
    value: "Djibouti",
    altValue: "Djibuti",
    code: "DJ",
    id: 60
  },
  {
    label: "Dominica",
    value: "Dominica",
    altValue: "Dominica",
    code: "DM",
    id: 61
  },
  { label: "Egito", value: "Egypt", altValue: "Egito", code: "EG", id: 62 },
  {
    label: "El Salvador",
    value: "El Salvador",
    altValue: "El Salvador",
    code: "SV",
    id: 63
  },
  {
    label: "Emirados Árabes Unidos",
    value: "United Arab Emirates",
    altValue: "Emirados Árabes Unidos",
    code: "AE",
    id: 64
  },
  {
    label: "Equador",
    value: "Ecuador",
    altValue: "Equador",
    code: "EC",
    id: 65
  },
  {
    label: "Eritréia",
    value: "Eritrea",
    altValue: "Eritréia",
    code: "ER",
    id: 66
  },
  {
    label: "Eslováquia",
    value: "Slovakia",
    altValue: "Eslováquia",
    code: "SK",
    id: 67
  },
  {
    label: "Eslovênia",
    value: "Slovenia",
    altValue: "Eslovênia",
    code: "SI",
    id: 68
  },
  { label: "Espanha", value: "Spain", altValue: "Espanha", code: "ES", id: 69 },
  {
    label: "Estados Unidos",
    value: "United States",
    altValue: "Estados Unidos",
    code: "US",
    id: 70
  },
  {
    label: "Estônia",
    value: "Estonia",
    altValue: "Estônia",
    code: "EE",
    id: 71
  },
  {
    label: "Etiópia",
    value: "Ethiopia",
    altValue: "Etiópia",
    code: "ET",
    id: 72
  },
  { label: "Fiji", value: "Fiji", altValue: "Fiji", code: "FJ", id: 73 },
  {
    label: "Filipinas",
    value: "Philippines",
    altValue: "Filipinas",
    code: "PH",
    id: 74
  },
  {
    label: "Finlândia",
    value: "Finland",
    altValue: "Finlândia",
    code: "FI",
    id: 75
  },
  { label: "França", value: "France", altValue: "França", code: "FR", id: 76 },
  { label: "Gabão", value: "Gabon", altValue: "Gabão", code: "GA", id: 77 },
  { label: "Gâmbia", value: "Gambia", altValue: "Gâmbia", code: "GM", id: 78 },
  { label: "Gana", value: "Ghana", altValue: "Gana", code: "GH", id: 79 },
  {
    label: "Geórgia",
    value: "Georgia",
    altValue: "Geórgia",
    code: "GE",
    id: 80
  },
  {
    label: "Gibraltar",
    value: "Gibraltar",
    altValue: "Gibraltar",
    code: "GI",
    id: 81
  },
  {
    label: "Grã-Bretanha (Reino Unido, UK)",
    value: "United Kingdom",
    altValue: "Grã-Bretanha (Reino Unido, UK)",
    code: "GB",
    id: 82
  },
  {
    label: "Granada",
    value: "Grenada",
    altValue: "Granada",
    code: "GD",
    id: 83
  },
  { label: "Grécia", value: "Greece", altValue: "Grécia", code: "GR", id: 84 },
  {
    label: "Groelândia",
    value: "Greenland",
    altValue: "Groelândia",
    code: "GL",
    id: 85
  },
  {
    label: "Guadalupe",
    value: "Guadeloupe",
    altValue: "Guadalupe",
    code: "GP",
    id: 86
  },
  {
    label: "Guam (Território dos Estados Unidos)",
    value: "Guam",
    altValue: "Guam (Território dos Estados Unidos)",
    code: "GU",
    id: 87
  },
  {
    label: "Guatemala",
    value: "Guatemala",
    altValue: "Guatemala",
    code: "GT",
    id: 88
  },
  {
    label: "Guernsey",
    value: "Guernsey",
    altValue: "Guernsey",
    code: "GG",
    id: 89
  },
  { label: "Guiana", value: "Guyana", altValue: "Guiana", code: "GY", id: 90 },
  {
    label: "Guiana Francesa",
    value: "French Guiana",
    altValue: "Guiana Francesa",
    code: "GF",
    id: 91
  },
  { label: "Guiné", value: "Guinea", altValue: "Guiné", code: "GN", id: 92 },
  {
    label: "Guiné Equatorial",
    value: "Equatorial Guinea",
    altValue: "Guiné Equatorial",
    code: "GQ",
    id: 93
  },
  {
    label: "Guiné-Bissau",
    value: "Guinea-Bissau",
    altValue: "Guiné-Bissau",
    code: "GW",
    id: 94
  },
  { label: "Haiti", value: "Haiti", altValue: "Haiti", code: "HT", id: 95 },
  {
    label: "Holanda",
    value: "Netherlands",
    altValue: "Holanda",
    code: "NL",
    id: 96
  },
  {
    label: "Honduras",
    value: "Honduras",
    altValue: "Honduras",
    code: "HN",
    id: 97
  },
  {
    label: "Hong Kong",
    value: "Hong Kong",
    altValue: "Hong Kong",
    code: "HK",
    id: 98
  },
  {
    label: "Hungria",
    value: "Hungary",
    altValue: "Hungria",
    code: "HU",
    id: 99
  },
  { label: "Iêmen", value: "Yemen", altValue: "Iêmen", code: "YE", id: 100 },
  {
    label: "Ilha Bouvet",
    value: "Bouvet Island",
    altValue: "Ilha Bouvet",
    code: "BV",
    id: 101
  },
  {
    label: "Ilha de Ascensão",
    value: "Ascension Island",
    altValue: "Ilha de Ascensão",
    code: "AC",
    id: 102
  },
  {
    label: "Ilha de Clipperton",
    value: "Clipperton Island",
    altValue: "Ilha de Clipperton",
    code: "CP",
    id: 103
  },
  {
    label: "Ilha de Man",
    value: "Isle of Man",
    altValue: "Ilha de Man",
    code: "IM",
    id: 104
  },
  {
    label: "Ilha Natal",
    value: "Christmas Island",
    altValue: "Ilha Natal",
    code: "CX",
    id: 105
  },
  {
    label: "Ilha Pitcairn",
    value: "Pitcairn Islands",
    altValue: "Ilha Pitcairn",
    code: "PN",
    id: 106
  },
  {
    label: "Ilha Reunião",
    value: "Réunion",
    altValue: "Ilha Reunião",
    code: "RE",
    id: 107
  },
  {
    label: "Ilhas Aland",
    value: "Åland Islands",
    altValue: "Ilhas Aland",
    code: "AX",
    id: 108
  },
  {
    label: "Ilhas Cayman",
    value: "Cayman Islands",
    altValue: "Ilhas Cayman",
    code: "KY",
    id: 109
  },
  {
    label: "Ilhas Cocos",
    value: "Cocos (Keeling) Islands",
    altValue: "Ilhas Cocos",
    code: "CC",
    id: 110
  },
  {
    label: "Ilhas Cook",
    value: "Cook Islands",
    altValue: "Ilhas Cook",
    code: "CK",
    id: 111
  },
  {
    label: "Ilhas Faroes",
    value: "Faroe Islands",
    altValue: "Ilhas Faroes",
    code: "FO",
    id: 112
  },
  {
    label: "Ilhas Geórgia do Sul e Sandwich do Sul",
    value: "South Georgia & South Sandwich Islands",
    altValue: "Ilhas Geórgia do Sul e Sandwich do Sul",
    code: "GS",
    id: 113
  },
  {
    label: "Ilhas Heard e McDonald (Território da Austrália)",
    value: "Heard & McDonald Islands",
    altValue: "Ilhas Heard e McDonald (Território da Austrália)",
    code: "HM",
    id: 114
  },
  {
    label: "Ilhas Malvinas",
    value: "Falkland Islands (Islas Malvinas)",
    altValue: "Ilhas Malvinas",
    code: "FK",
    id: 115
  },
  {
    label: "Ilhas Marianas do Norte",
    value: "Northern Mariana Islands",
    altValue: "Ilhas Marianas do Norte",
    code: "MP",
    id: 116
  },
  {
    label: "Ilhas Marshall",
    value: "Marshall Islands",
    altValue: "Ilhas Marshall",
    code: "MH",
    id: 117
  },
  {
    label: "Ilhas Menores dos Estados Unidos",
    value: "U.S. Outlying Islands",
    altValue: "Ilhas Menores dos Estados Unidos",
    code: "UM",
    id: 118
  },
  {
    label: "Ilhas Norfolk",
    value: "Norfolk Island",
    altValue: "Ilhas Norfolk",
    code: "NF",
    id: 119
  },
  {
    label: "Ilhas Salomão",
    value: "Solomon Islands",
    altValue: "Ilhas Salomão",
    code: "SB",
    id: 120
  },
  {
    label: "Ilhas Seychelles",
    value: "Seychelles",
    altValue: "Ilhas Seychelles",
    code: "SC",
    id: 121
  },
  {
    label: "Ilhas Tokelau",
    value: "Tokelau",
    altValue: "Ilhas Tokelau",
    code: "TK",
    id: 122
  },
  {
    label: "Ilhas Turks e Caicos",
    value: "Turks & Caicos Islands",
    altValue: "Ilhas Turks e Caicos",
    code: "TC",
    id: 123
  },
  {
    label: "Ilhas Virgens (Estados Unidos)",
    value: "U.S. Virgin Islands",
    altValue: "Ilhas Virgens (Estados Unidos)",
    code: "VI",
    id: 124
  },
  {
    label: "Ilhas Virgens (Inglaterra)",
    value: "British Virgin Islands",
    altValue: "Ilhas Virgens (Inglaterra)",
    code: "VG",
    id: 125
  },
  { label: "Índia", value: "India", altValue: "Índia", code: "IN", id: 126 },
  {
    label: "Indonésia",
    value: "Indonesia",
    altValue: "Indonésia",
    code: "ID",
    id: 127
  },
  { label: "Irã", value: "Iran", altValue: "Irã", code: "IR", id: 128 },
  { label: "Iraque", value: "Iraq", altValue: "Iraque", code: "IQ", id: 129 },
  {
    label: "Irlanda",
    value: "Ireland",
    altValue: "Irlanda",
    code: "IE",
    id: 130
  },
  {
    label: "Islândia",
    value: "Iceland",
    altValue: "Islândia",
    code: "IS",
    id: 131
  },
  { label: "Israel", value: "Israel", altValue: "Israel", code: "IL", id: 132 },
  { label: "Itália", value: "Italy", altValue: "Itália", code: "IT", id: 133 },
  {
    label: "Jamaica",
    value: "Jamaica",
    altValue: "Jamaica",
    code: "JM",
    id: 134
  },
  { label: "Japão", value: "Japan", altValue: "Japão", code: "JP", id: 135 },
  { label: "Jersey", value: "Jersey", altValue: "Jersey", code: "JE", id: 136 },
  {
    label: "Jordânia",
    value: "Jordan",
    altValue: "Jordânia",
    code: "JO",
    id: 137
  },
  {
    label: "Kiribati",
    value: "Kiribati",
    altValue: "Kiribati",
    code: "KI",
    id: 138
  },
  { label: "Kosovo", value: "Kosovo", altValue: "Kosovo", code: "XK", id: 139 },
  { label: "Kuait", value: "Kuwait", altValue: "Kuait", code: "KW", id: 140 },
  { label: "Laos", value: "Laos", altValue: "Laos", code: "LA", id: 141 },
  {
    label: "Lesoto",
    value: "Lesotho",
    altValue: "Lesoto",
    code: "LS",
    id: 142
  },
  {
    label: "Letônia",
    value: "Latvia",
    altValue: "Letônia",
    code: "LV",
    id: 143
  },
  {
    label: "Líbano",
    value: "Lebanon",
    altValue: "Líbano",
    code: "LB",
    id: 144
  },
  {
    label: "Libéria",
    value: "Liberia",
    altValue: "Libéria",
    code: "LR",
    id: 145
  },
  { label: "Líbia", value: "Libya", altValue: "Líbia", code: "LY", id: 146 },
  {
    label: "Liechtenstein",
    value: "Liechtenstein",
    altValue: "Liechtenstein",
    code: "LI",
    id: 147
  },
  {
    label: "Lituânia",
    value: "Lithuania",
    altValue: "Lituânia",
    code: "LT",
    id: 148
  },
  {
    label: "Luxemburgo",
    value: "Luxembourg",
    altValue: "Luxemburgo",
    code: "LU",
    id: 149
  },
  { label: "Macau", value: "Macau", altValue: "Macau", code: "MO", id: 150 },
  {
    label: "Macedônia (República Yugoslava)",
    value: "Macedonia (FYROM)",
    altValue: "Macedônia (República Yugoslava)",
    code: "MK",
    id: 151
  },
  {
    label: "Madagascar",
    value: "Madagascar",
    altValue: "Madagascar",
    code: "MG",
    id: 152
  },
  {
    label: "Malásia",
    value: "Malaysia",
    altValue: "Malásia",
    code: "MY",
    id: 153
  },
  { label: "Malaui", value: "Malawi", altValue: "Malaui", code: "MW", id: 154 },
  {
    label: "Maldivas",
    value: "Maldives",
    altValue: "Maldivas",
    code: "MV",
    id: 155
  },
  { label: "Mali", value: "Mali", altValue: "Mali", code: "ML", id: 156 },
  { label: "Malta", value: "Malta", altValue: "Malta", code: "MT", id: 157 },
  {
    label: "Marrocos",
    value: "Morocco",
    altValue: "Marrocos",
    code: "MA",
    id: 158
  },
  {
    label: "Martinica",
    value: "Martinique",
    altValue: "Martinica",
    code: "MQ",
    id: 159
  },
  {
    label: "Maurício",
    value: "Mauritius",
    altValue: "Maurício",
    code: "MU",
    id: 160
  },
  {
    label: "Mauritânia",
    value: "Mauritania",
    altValue: "Mauritânia",
    code: "MR",
    id: 161
  },
  {
    label: "Mayotte",
    value: "Mayotte",
    altValue: "Mayotte",
    code: "YT",
    id: 162
  },
  { label: "México", value: "Mexico", altValue: "México", code: "MX", id: 163 },
  {
    label: "Micronésia",
    value: "Micronesia",
    altValue: "Micronésia",
    code: "FM",
    id: 164
  },
  {
    label: "Moçambique",
    value: "Mozambique",
    altValue: "Moçambique",
    code: "MZ",
    id: 165
  },
  {
    label: "Moldova",
    value: "Moldova",
    altValue: "Moldova",
    code: "MD",
    id: 166
  },
  { label: "Mônaco", value: "Monaco", altValue: "Mônaco", code: "MC", id: 167 },
  {
    label: "Mongólia",
    value: "Mongolia",
    altValue: "Mongólia",
    code: "MN",
    id: 168
  },
  {
    label: "Montenegro",
    value: "Montenegro",
    altValue: "Montenegro",
    code: "ME",
    id: 169
  },
  {
    label: "Montserrat",
    value: "Montserrat",
    altValue: "Montserrat",
    code: "MS",
    id: 170
  },
  {
    label: "Myanma",
    value: "Myanmar (Burma)",
    altValue: "Myanma",
    code: "MM",
    id: 171
  },
  {
    label: "Namíbia",
    value: "Namibia",
    altValue: "Namíbia",
    code: "NA",
    id: 172
  },
  { label: "Nauru", value: "Nauru", altValue: "Nauru", code: "NR", id: 173 },
  { label: "Nepal", value: "Nepal", altValue: "Nepal", code: "NP", id: 174 },
  {
    label: "Nicarágua",
    value: "Nicaragua",
    altValue: "Nicarágua",
    code: "NI",
    id: 175
  },
  { label: "Níger", value: "Niger", altValue: "Níger", code: "NE", id: 176 },
  {
    label: "Nigéria",
    value: "Nigeria",
    altValue: "Nigéria",
    code: "NG",
    id: 177
  },
  { label: "Niue", value: "Niue", altValue: "Niue", code: "NU", id: 178 },
  {
    label: "Noruega",
    value: "Norway",
    altValue: "Noruega",
    code: "NO",
    id: 179
  },
  {
    label: "Nova Caledônia",
    value: "New Caledonia",
    altValue: "Nova Caledônia",
    code: "NC",
    id: 180
  },
  {
    label: "Nova Zelândia",
    value: "New Zealand",
    altValue: "Nova Zelândia",
    code: "NZ",
    id: 181
  },
  { label: "Omã", value: "Oman", altValue: "Omã", code: "OM", id: 182 },
  {
    label: "Países Baixos Caribenhos",
    value: "Caribbean Netherlands",
    altValue: "Países Baixos Caribenhos",
    code: "BQ",
    id: 183
  },
  { label: "Palau", value: "Palau", altValue: "Palau", code: "PW", id: 184 },
  {
    label: "Palestina",
    value: "Palestine",
    altValue: "Palestina",
    code: "PS",
    id: 185
  },
  { label: "Panamá", value: "Panama", altValue: "Panamá", code: "PA", id: 186 },
  {
    label: "Papua-Nova Guiné",
    value: "Papua New Guinea",
    altValue: "Papua-Nova Guiné",
    code: "PG",
    id: 187
  },
  {
    label: "Paquistão",
    value: "Pakistan",
    altValue: "Paquistão",
    code: "PK",
    id: 188
  },
  {
    label: "Paraguai",
    value: "Paraguay",
    altValue: "Paraguai",
    code: "PY",
    id: 189
  },
  { label: "Peru", value: "Peru", altValue: "Peru", code: "PE", id: 190 },
  {
    label: "Polinésia Francesa",
    value: "French Polynesia",
    altValue: "Polinésia Francesa",
    code: "PF",
    id: 191
  },
  {
    label: "Polônia",
    value: "Poland",
    altValue: "Polônia",
    code: "PL",
    id: 192
  },
  {
    label: "Porto Rico",
    value: "Puerto Rico",
    altValue: "Porto Rico",
    code: "PR",
    id: 193
  },
  {
    label: "Portugal",
    value: "Portugal",
    altValue: "Portugal",
    code: "PT",
    id: 194
  },
  { label: "Qatar", value: "Qatar", altValue: "Qatar", code: "QA", id: 195 },
  { label: "Quênia", value: "Kenya", altValue: "Quênia", code: "KE", id: 196 },
  {
    label: "Quirguistão",
    value: "Kyrgyzstan",
    altValue: "Quirguistão",
    code: "KG",
    id: 197
  },
  {
    label: "República Centro-Africana",
    value: "Central African Republic",
    altValue: "República Centro-Africana",
    code: "CF",
    id: 198
  },
  {
    label: "República Democrática do Congo",
    value: "Congo (DRC)",
    altValue: "República Democrática do Congo",
    code: "CD",
    id: 199
  },
  {
    label: "República Dominicana",
    value: "Dominican Republic",
    altValue: "República Dominicana",
    code: "DO",
    id: 200
  },
  {
    label: "República Tcheca",
    value: "Czech Republic",
    altValue: "República Tcheca",
    code: "CZ",
    id: 201
  },
  {
    label: "Romênia",
    value: "Romania",
    altValue: "Romênia",
    code: "RO",
    id: 202
  },
  { label: "Ruanda", value: "Rwanda", altValue: "Ruanda", code: "RW", id: 203 },
  {
    label: "Rússia (antiga URSS) - Federação Russa",
    value: "Russia",
    altValue: "Rússia (antiga URSS) - Federação Russa",
    code: "RU",
    id: 204
  },
  {
    label: "Saara Ocidental",
    value: "Western Sahara",
    altValue: "Saara Ocidental",
    code: "EH",
    id: 205
  },
  {
    label: "Saint-Pierre e Miquelon",
    value: "St. Pierre & Miquelon",
    altValue: "Saint-Pierre e Miquelon",
    code: "PM",
    id: 206
  },
  {
    label: "Samoa Americana",
    value: "American Samoa",
    altValue: "Samoa Americana",
    code: "AS",
    id: 207
  },
  {
    label: "Samoa Ocidental",
    value: "Samoa",
    altValue: "Samoa Ocidental",
    code: "WS",
    id: 208
  },
  {
    label: "San Marino",
    value: "San Marino",
    altValue: "San Marino",
    code: "SM",
    id: 209
  },
  {
    label: "Santa Helena",
    value: "St. Helena",
    altValue: "Santa Helena",
    code: "SH",
    id: 210
  },
  {
    label: "Santa Lúcia",
    value: "St. Lucia",
    altValue: "Santa Lúcia",
    code: "LC",
    id: 211
  },
  {
    label: "São Bartolomeu",
    value: "St. Barthélemy",
    altValue: "São Bartolomeu",
    code: "BL",
    id: 212
  },
  {
    label: "São Cristóvão e Névis",
    value: "St. Kitts & Nevis",
    altValue: "São Cristóvão e Névis",
    code: "KN",
    id: 213
  },
  {
    label: "São Martim",
    value: "St. Martin",
    altValue: "São Martim",
    code: "MF",
    id: 214
  },
  {
    label: "São Martinho",
    value: "Sint Maarten",
    altValue: "São Martinho",
    code: "SX",
    id: 215
  },
  {
    label: "São Tomé e Príncipe",
    value: "São Tomé & Príncipe",
    altValue: "São Tomé e Príncipe",
    code: "ST",
    id: 216
  },
  {
    label: "São Vicente e Granadinas",
    value: "St. Vincent & Grenadines",
    altValue: "São Vicente e Granadinas",
    code: "VC",
    id: 217
  },
  {
    label: "Senegal",
    value: "Senegal",
    altValue: "Senegal",
    code: "SN",
    id: 218
  },
  {
    label: "Serra Leoa",
    value: "Sierra Leone",
    altValue: "Serra Leoa",
    code: "SL",
    id: 219
  },
  { label: "Sérvia", value: "Serbia", altValue: "Sérvia", code: "RS", id: 220 },
  { label: "Síria", value: "Syria", altValue: "Síria", code: "SY", id: 221 },
  {
    label: "Somália",
    value: "Somalia",
    altValue: "Somália",
    code: "SO",
    id: 222
  },
  {
    label: "Sri Lanka",
    value: "Sri Lanka",
    altValue: "Sri Lanka",
    code: "LK",
    id: 223
  },
  {
    label: "Suazilândia",
    value: "Swaziland",
    altValue: "Suazilândia",
    code: "SZ",
    id: 224
  },
  { label: "Sudão", value: "Sudan", altValue: "Sudão", code: "SD", id: 225 },
  {
    label: "Sudão do Sul",
    value: "South Sudan",
    altValue: "Sudão do Sul",
    code: "SS",
    id: 226
  },
  { label: "Suécia", value: "Sweden", altValue: "Suécia", code: "SE", id: 227 },
  {
    label: "Suíça",
    value: "Switzerland",
    altValue: "Suíça",
    code: "CH",
    id: 228
  },
  {
    label: "Suriname",
    value: "Suriname",
    altValue: "Suriname",
    code: "SR",
    id: 229
  },
  {
    label: "Svalbard",
    value: "Svalbard & Jan Mayen",
    altValue: "Svalbard",
    code: "SJ",
    id: 230
  },
  {
    label: "Tadjiquistão",
    value: "Tajikistan",
    altValue: "Tadjiquistão",
    code: "TJ",
    id: 231
  },
  {
    label: "Tailândia",
    value: "Thailand",
    altValue: "Tailândia",
    code: "TH",
    id: 232
  },
  { label: "Taiwan", value: "Taiwan", altValue: "Taiwan", code: "TW", id: 233 },
  {
    label: "Tanzânia",
    value: "Tanzania",
    altValue: "Tanzânia",
    code: "TZ",
    id: 234
  },
  {
    label: "Território Britânico do Oceano índico",
    value: "British Indian Ocean Territory",
    altValue: "Território Britânico do Oceano índico",
    code: "IO",
    id: 235
  },
  {
    label: "Territórios do Sul da França",
    value: "French Southern Territories",
    altValue: "Territórios do Sul da França",
    code: "TF",
    id: 236
  },
  {
    label: "Timor-Leste",
    value: "Timor-Leste",
    altValue: "Timor-Leste",
    code: "TL",
    id: 237
  },
  { label: "Togo", value: "Togo", altValue: "Togo", code: "TG", id: 238 },
  { label: "Tonga", value: "Tonga", altValue: "Tonga", code: "TO", id: 239 },
  {
    label: "Trinidad e Tobago",
    value: "Trinidad & Tobago",
    altValue: "Trinidad e Tobago",
    code: "TT",
    id: 240
  },
  {
    label: "Tristão da Cunha",
    value: "Tristan da Cunha",
    altValue: "Tristão da Cunha",
    code: "TA",
    id: 241
  },
  {
    label: "Tunísia",
    value: "Tunisia",
    altValue: "Tunísia",
    code: "TN",
    id: 242
  },
  {
    label: "Turcomenistão",
    value: "Turkmenistan",
    altValue: "Turcomenistão",
    code: "TM",
    id: 243
  },
  {
    label: "Turquia",
    value: "Turkey",
    altValue: "Turquia",
    code: "TR",
    id: 244
  },
  { label: "Tuvalu", value: "Tuvalu", altValue: "Tuvalu", code: "TV", id: 245 },
  {
    label: "Ucrânia",
    value: "Ukraine",
    altValue: "Ucrânia",
    code: "UA",
    id: 246
  },
  { label: "Uganda", value: "Uganda", altValue: "Uganda", code: "UG", id: 247 },
  {
    label: "Uruguai",
    value: "Uruguay",
    altValue: "Uruguai",
    code: "UY",
    id: 248
  },
  {
    label: "Uzbequistão",
    value: "Uzbekistan",
    altValue: "Uzbequistão",
    code: "UZ",
    id: 249
  },
  {
    label: "Vanuatu",
    value: "Vanuatu",
    altValue: "Vanuatu",
    code: "VU",
    id: 250
  },
  {
    label: "Vaticano",
    value: "Vatican City",
    altValue: "Vaticano",
    code: "VA",
    id: 251
  },
  {
    label: "Venezuela",
    value: "Venezuela",
    altValue: "Venezuela",
    code: "VE",
    id: 252
  },
  {
    label: "Vietnã",
    value: "Vietnam",
    altValue: "Vietnã",
    code: "VN",
    id: 253
  },
  {
    label: "Wallis e Futuna",
    value: "Wallis & Futuna",
    altValue: "Wallis e Futuna",
    code: "WF",
    id: 254
  },
  { label: "Zâmbia", value: "Zambia", altValue: "Zâmbia", code: "ZM", id: 255 },
  {
    label: "Zimbábue",
    value: "Zimbabwe",
    altValue: "Zimbábue",
    code: "ZW",
    id: 256
  }
];

export const en_USList = [
  {
    label: "",
    value: "",
    altValue: "",
    id: 0
  },
  {
    label: "Afghanistan",
    value: "Afghanistan",
    altValue: "Afeganistão",
    code: "AF",
    id: 1
  },
  {
    label: "South Africa",
    value: "South Africa",
    altValue: "África do Sul",
    code: "ZA",
    id: 2
  },
  {
    label: "Albania",
    value: "Albania",
    altValue: "Albânia",
    code: "AL",
    id: 3
  },
  {
    label: "Germany",
    value: "Germany",
    altValue: "Alemanha",
    code: "DE",
    id: 4
  },
  {
    label: "Andorra",
    value: "Andorra",
    altValue: "Andorra",
    code: "AD",
    id: 5
  },
  { label: "Angola", value: "Angola", altValue: "Angola", code: "AO", id: 6 },
  {
    label: "Anguilla",
    value: "Anguilla",
    altValue: "Anguilla",
    code: "AI",
    id: 7
  },
  {
    label: "Antarctica",
    value: "Antarctica",
    altValue: "Antártida",
    code: "AQ",
    id: 8
  },
  {
    label: "Antigua & Barbuda",
    value: "Antigua & Barbuda",
    altValue: "Antígua e Barbuda",
    code: "AG",
    id: 9
  },
  {
    label: "Saudi Arabia",
    value: "Saudi Arabia",
    altValue: "Arábia Saudita",
    code: "SA",
    id: 10
  },
  {
    label: "Algeria",
    value: "Algeria",
    altValue: "Argélia",
    code: "DZ",
    id: 11
  },
  {
    label: "Argentina",
    value: "Argentina",
    altValue: "Argentina",
    code: "AR",
    id: 12
  },
  {
    label: "Armenia",
    value: "Armenia",
    altValue: "Armênia",
    code: "AM",
    id: 13
  },
  { label: "Aruba", value: "Aruba", altValue: "Aruba", code: "AW", id: 14 },
  {
    label: "Australia",
    value: "Australia",
    altValue: "Austrália",
    code: "AU",
    id: 15
  },
  {
    label: "Austria",
    value: "Austria",
    altValue: "Áustria",
    code: "AT",
    id: 16
  },
  {
    label: "Azerbaijan",
    value: "Azerbaijan",
    altValue: "Azerbaijão",
    code: "AZ",
    id: 17
  },
  {
    label: "Bahamas",
    value: "Bahamas",
    altValue: "Bahamas",
    code: "BS",
    id: 18
  },
  {
    label: "Bahrain",
    value: "Bahrain",
    altValue: "Bahrein",
    code: "BH",
    id: 19
  },
  {
    label: "Bangladesh",
    value: "Bangladesh",
    altValue: "Bangladesh",
    code: "BD",
    id: 20
  },
  {
    label: "Barbados",
    value: "Barbados",
    altValue: "Barbados",
    code: "BB",
    id: 21
  },
  {
    label: "Belarus",
    value: "Belarus",
    altValue: "Belarus",
    code: "BY",
    id: 22
  },
  {
    label: "Belgium",
    value: "Belgium",
    altValue: "Bélgica",
    code: "BE",
    id: 23
  },
  { label: "Belize", value: "Belize", altValue: "Belize", code: "BZ", id: 24 },
  { label: "Benin", value: "Benin", altValue: "Benin", code: "BJ", id: 25 },
  {
    label: "Bermuda",
    value: "Bermuda",
    altValue: "Bermudas",
    code: "BM",
    id: 26
  },
  {
    label: "Bolivia",
    value: "Bolivia",
    altValue: "Bolívia",
    code: "BO",
    id: 27
  },
  {
    label: "Bosnia & Herzegovina",
    value: "Bosnia & Herzegovina",
    altValue: "Bósnia-Herzegóvina",
    code: "BA",
    id: 28
  },
  {
    label: "Botswana",
    value: "Botswana",
    altValue: "Botsuana",
    code: "BW",
    id: 29
  },
  { label: "Brazil", value: "Brazil", altValue: "Brasil", code: "BR", id: 30 },
  { label: "Brunei", value: "Brunei", altValue: "Brunei", code: "BN", id: 31 },
  {
    label: "Bulgaria",
    value: "Bulgaria",
    altValue: "Bulgária",
    code: "BG",
    id: 32
  },
  {
    label: "Burkina Faso",
    value: "Burkina Faso",
    altValue: "Burkina Fasso",
    code: "BF",
    id: 33
  },
  {
    label: "Burundi",
    value: "Burundi",
    altValue: "Burundi",
    code: "BI",
    id: 34
  },
  { label: "Bhutan", value: "Bhutan", altValue: "Butão", code: "BT", id: 35 },
  {
    label: "Cape Verde",
    value: "Cape Verde",
    altValue: "Cabo Verde",
    code: "CV",
    id: 36
  },
  {
    label: "Cameroon",
    value: "Cameroon",
    altValue: "Camarões",
    code: "CM",
    id: 37
  },
  {
    label: "Cambodia",
    value: "Cambodia",
    altValue: "Camboja",
    code: "KH",
    id: 38
  },
  { label: "Canada", value: "Canada", altValue: "Canadá", code: "CA", id: 39 },
  {
    label: "Canary Islands",
    value: "Canary Islands",
    altValue: "Canárias",
    code: "IC",
    id: 40
  },
  {
    label: "Kazakhstan",
    value: "Kazakhstan",
    altValue: "Cazaquistão",
    code: "KZ",
    id: 41
  },
  {
    label: "Ceuta & Melilla",
    value: "Ceuta & Melilla",
    altValue: "Ceuta e Melilla",
    code: "EA",
    id: 42
  },
  { label: "Chad", value: "Chad", altValue: "Chade", code: "TD", id: 43 },
  { label: "Chile", value: "Chile", altValue: "Chile", code: "CL", id: 44 },
  { label: "China", value: "China", altValue: "China", code: "CN", id: 45 },
  { label: "Cyprus", value: "Cyprus", altValue: "Chipre", code: "CY", id: 46 },
  {
    label: "Singapore",
    value: "Singapore",
    altValue: "Cingapura",
    code: "SG",
    id: 47
  },
  {
    label: "Colombia",
    value: "Colombia",
    altValue: "Colômbia",
    code: "CO",
    id: 48
  },
  {
    label: "Comoros",
    value: "Comoros",
    altValue: "Comores",
    code: "KM",
    id: 49
  },
  {
    label: "Congo (Republic)",
    value: "Congo (Republic)",
    altValue: "Congo",
    code: "CG",
    id: 50
  },
  {
    label: "North Korea",
    value: "North Korea",
    altValue: "Coréia do Norte",
    code: "KP",
    id: 51
  },
  {
    label: "South Korea",
    value: "South Korea",
    altValue: "Coréia do Sul",
    code: "KR",
    id: 52
  },
  {
    label: "Côte d¿Ivoire",
    value: "Côte d¿Ivoire",
    altValue: "Costa do Marfim",
    code: "CI",
    id: 53
  },
  {
    label: "Costa Rica",
    value: "Costa Rica",
    altValue: "Costa Rica",
    code: "CR",
    id: 54
  },
  {
    label: "Croatia",
    value: "Croatia",
    altValue: "Croácia",
    code: "HR",
    id: 55
  },
  { label: "Cuba", value: "Cuba", altValue: "Cuba", code: "CU", id: 56 },
  {
    label: "Curaçao",
    value: "Curaçao",
    altValue: "Curaçao",
    code: "CW",
    id: 57
  },
  {
    label: "Diego Garcia",
    value: "Diego Garcia",
    altValue: "Diego Garcia",
    code: "DG",
    id: 58
  },
  {
    label: "Denmark",
    value: "Denmark",
    altValue: "Dinamarca",
    code: "DK",
    id: 59
  },
  {
    label: "Djibouti",
    value: "Djibouti",
    altValue: "Djibuti",
    code: "DJ",
    id: 60
  },
  {
    label: "Dominica",
    value: "Dominica",
    altValue: "Dominica",
    code: "DM",
    id: 61
  },
  { label: "Egypt", value: "Egypt", altValue: "Egito", code: "EG", id: 62 },
  {
    label: "El Salvador",
    value: "El Salvador",
    altValue: "El Salvador",
    code: "SV",
    id: 63
  },
  {
    label: "United Arab Emirates",
    value: "United Arab Emirates",
    altValue: "Emirados Árabes Unidos",
    code: "AE",
    id: 64
  },
  {
    label: "Ecuador",
    value: "Ecuador",
    altValue: "Equador",
    code: "EC",
    id: 65
  },
  {
    label: "Eritrea",
    value: "Eritrea",
    altValue: "Eritréia",
    code: "ER",
    id: 66
  },
  {
    label: "Slovakia",
    value: "Slovakia",
    altValue: "Eslováquia",
    code: "SK",
    id: 67
  },
  {
    label: "Slovenia",
    value: "Slovenia",
    altValue: "Eslovênia",
    code: "SI",
    id: 68
  },
  { label: "Spain", value: "Spain", altValue: "Espanha", code: "ES", id: 69 },
  {
    label: "United States",
    value: "United States",
    altValue: "Estados Unidos",
    code: "US",
    id: 70
  },
  {
    label: "Estonia",
    value: "Estonia",
    altValue: "Estônia",
    code: "EE",
    id: 71
  },
  {
    label: "Ethiopia",
    value: "Ethiopia",
    altValue: "Etiópia",
    code: "ET",
    id: 72
  },
  { label: "Fiji", value: "Fiji", altValue: "Fiji", code: "FJ", id: 73 },
  {
    label: "Philippines",
    value: "Philippines",
    altValue: "Filipinas",
    code: "PH",
    id: 74
  },
  {
    label: "Finland",
    value: "Finland",
    altValue: "Finlândia",
    code: "FI",
    id: 75
  },
  { label: "France", value: "France", altValue: "França", code: "FR", id: 76 },
  { label: "Gabon", value: "Gabon", altValue: "Gabão", code: "GA", id: 77 },
  { label: "Gambia", value: "Gambia", altValue: "Gâmbia", code: "GM", id: 78 },
  { label: "Ghana", value: "Ghana", altValue: "Gana", code: "GH", id: 79 },
  {
    label: "Georgia",
    value: "Georgia",
    altValue: "Geórgia",
    code: "GE",
    id: 80
  },
  {
    label: "Gibraltar",
    value: "Gibraltar",
    altValue: "Gibraltar",
    code: "GI",
    id: 81
  },
  {
    label: "United Kingdom",
    value: "United Kingdom",
    altValue: "Grã-Bretanha (Reino Unido, UK)",
    code: "GB",
    id: 82
  },
  {
    label: "Grenada",
    value: "Grenada",
    altValue: "Granada",
    code: "GD",
    id: 83
  },
  { label: "Greece", value: "Greece", altValue: "Grécia", code: "GR", id: 84 },
  {
    label: "Greenland",
    value: "Greenland",
    altValue: "Groelândia",
    code: "GL",
    id: 85
  },
  {
    label: "Guadeloupe",
    value: "Guadeloupe",
    altValue: "Guadalupe",
    code: "GP",
    id: 86
  },
  {
    label: "Guam",
    value: "Guam",
    altValue: "Guam (Território dos Estados Unidos)",
    code: "GU",
    id: 87
  },
  {
    label: "Guatemala",
    value: "Guatemala",
    altValue: "Guatemala",
    code: "GT",
    id: 88
  },
  {
    label: "Guernsey",
    value: "Guernsey",
    altValue: "Guernsey",
    code: "GG",
    id: 89
  },
  { label: "Guyana", value: "Guyana", altValue: "Guiana", code: "GY", id: 90 },
  {
    label: "French Guiana",
    value: "French Guiana",
    altValue: "Guiana Francesa",
    code: "GF",
    id: 91
  },
  { label: "Guinea", value: "Guinea", altValue: "Guiné", code: "GN", id: 92 },
  {
    label: "Equatorial Guinea",
    value: "Equatorial Guinea",
    altValue: "Guiné Equatorial",
    code: "GQ",
    id: 93
  },
  {
    label: "Guinea-Bissau",
    value: "Guinea-Bissau",
    altValue: "Guiné-Bissau",
    code: "GW",
    id: 94
  },
  { label: "Haiti", value: "Haiti", altValue: "Haiti", code: "HT", id: 95 },
  {
    label: "Netherlands",
    value: "Netherlands",
    altValue: "Holanda",
    code: "NL",
    id: 96
  },
  {
    label: "Honduras",
    value: "Honduras",
    altValue: "Honduras",
    code: "HN",
    id: 97
  },
  {
    label: "Hong Kong",
    value: "Hong Kong",
    altValue: "Hong Kong",
    code: "HK",
    id: 98
  },
  {
    label: "Hungary",
    value: "Hungary",
    altValue: "Hungria",
    code: "HU",
    id: 99
  },
  { label: "Yemen", value: "Yemen", altValue: "Iêmen", code: "YE", id: 100 },
  {
    label: "Bouvet Island",
    value: "Bouvet Island",
    altValue: "Ilha Bouvet",
    code: "BV",
    id: 101
  },
  {
    label: "Ascension Island",
    value: "Ascension Island",
    altValue: "Ilha de Ascensão",
    code: "AC",
    id: 102
  },
  {
    label: "Clipperton Island",
    value: "Clipperton Island",
    altValue: "Ilha de Clipperton",
    code: "CP",
    id: 103
  },
  {
    label: "Isle of Man",
    value: "Isle of Man",
    altValue: "Ilha de Man",
    code: "IM",
    id: 104
  },
  {
    label: "Christmas Island",
    value: "Christmas Island",
    altValue: "Ilha Natal",
    code: "CX",
    id: 105
  },
  {
    label: "Pitcairn Islands",
    value: "Pitcairn Islands",
    altValue: "Ilha Pitcairn",
    code: "PN",
    id: 106
  },
  {
    label: "Réunion",
    value: "Réunion",
    altValue: "Ilha Reunião",
    code: "RE",
    id: 107
  },
  {
    label: "Åland Islands",
    value: "Åland Islands",
    altValue: "Ilhas Aland",
    code: "AX",
    id: 108
  },
  {
    label: "Cayman Islands",
    value: "Cayman Islands",
    altValue: "Ilhas Cayman",
    code: "KY",
    id: 109
  },
  {
    label: "Cocos (Keeling) Islands",
    value: "Cocos (Keeling) Islands",
    altValue: "Ilhas Cocos",
    code: "CC",
    id: 110
  },
  {
    label: "Cook Islands",
    value: "Cook Islands",
    altValue: "Ilhas Cook",
    code: "CK",
    id: 111
  },
  {
    label: "Faroe Islands",
    value: "Faroe Islands",
    altValue: "Ilhas Faroes",
    code: "FO",
    id: 112
  },
  {
    label: "South Georgia & South Sandwich Islands",
    value: "South Georgia & South Sandwich Islands",
    altValue: "Ilhas Geórgia do Sul e Sandwich do Sul",
    code: "GS",
    id: 113
  },
  {
    label: "Heard & McDonald Islands",
    value: "Heard & McDonald Islands",
    altValue: "Ilhas Heard e McDonald (Território da Austrália)",
    code: "HM",
    id: 114
  },
  {
    label: "Falkland Islands (Islas Malvinas)",
    value: "Falkland Islands (Islas Malvinas)",
    altValue: "Ilhas Malvinas",
    code: "FK",
    id: 115
  },
  {
    label: "Northern Mariana Islands",
    value: "Northern Mariana Islands",
    altValue: "Ilhas Marianas do Norte",
    code: "MP",
    id: 116
  },
  {
    label: "Marshall Islands",
    value: "Marshall Islands",
    altValue: "Ilhas Marshall",
    code: "MH",
    id: 117
  },
  {
    label: "U.S. Outlying Islands",
    value: "U.S. Outlying Islands",
    altValue: "Ilhas Menores dos Estados Unidos",
    code: "UM",
    id: 118
  },
  {
    label: "Norfolk Island",
    value: "Norfolk Island",
    altValue: "Ilhas Norfolk",
    code: "NF",
    id: 119
  },
  {
    label: "Solomon Islands",
    value: "Solomon Islands",
    altValue: "Ilhas Salomão",
    code: "SB",
    id: 120
  },
  {
    label: "Seychelles",
    value: "Seychelles",
    altValue: "Ilhas Seychelles",
    code: "SC",
    id: 121
  },
  {
    label: "Tokelau",
    value: "Tokelau",
    altValue: "Ilhas Tokelau",
    code: "TK",
    id: 122
  },
  {
    label: "Turks & Caicos Islands",
    value: "Turks & Caicos Islands",
    altValue: "Ilhas Turks e Caicos",
    code: "TC",
    id: 123
  },
  {
    label: "U.S. Virgin Islands",
    value: "U.S. Virgin Islands",
    altValue: "Ilhas Virgens (Estados Unidos)",
    code: "VI",
    id: 124
  },
  {
    label: "British Virgin Islands",
    value: "British Virgin Islands",
    altValue: "Ilhas Virgens (Inglaterra)",
    code: "VG",
    id: 125
  },
  { label: "India", value: "India", altValue: "Índia", code: "IN", id: 126 },
  {
    label: "Indonesia",
    value: "Indonesia",
    altValue: "Indonésia",
    code: "ID",
    id: 127
  },
  { label: "Iran", value: "Iran", altValue: "Irã", code: "IR", id: 128 },
  { label: "Iraq", value: "Iraq", altValue: "Iraque", code: "IQ", id: 129 },
  {
    label: "Ireland",
    value: "Ireland",
    altValue: "Irlanda",
    code: "IE",
    id: 130
  },
  {
    label: "Iceland",
    value: "Iceland",
    altValue: "Islândia",
    code: "IS",
    id: 131
  },
  { label: "Israel", value: "Israel", altValue: "Israel", code: "IL", id: 132 },
  { label: "Italy", value: "Italy", altValue: "Itália", code: "IT", id: 133 },
  {
    label: "Jamaica",
    value: "Jamaica",
    altValue: "Jamaica",
    code: "JM",
    id: 134
  },
  { label: "Japan", value: "Japan", altValue: "Japão", code: "JP", id: 135 },
  { label: "Jersey", value: "Jersey", altValue: "Jersey", code: "JE", id: 136 },
  {
    label: "Jordan",
    value: "Jordan",
    altValue: "Jordânia",
    code: "JO",
    id: 137
  },
  {
    label: "Kiribati",
    value: "Kiribati",
    altValue: "Kiribati",
    code: "KI",
    id: 138
  },
  { label: "Kosovo", value: "Kosovo", altValue: "Kosovo", code: "XK", id: 139 },
  { label: "Kuwait", value: "Kuwait", altValue: "Kuait", code: "KW", id: 140 },
  { label: "Laos", value: "Laos", altValue: "Laos", code: "LA", id: 141 },
  {
    label: "Lesotho",
    value: "Lesotho",
    altValue: "Lesoto",
    code: "LS",
    id: 142
  },
  {
    label: "Latvia",
    value: "Latvia",
    altValue: "Letônia",
    code: "LV",
    id: 143
  },
  {
    label: "Lebanon",
    value: "Lebanon",
    altValue: "Líbano",
    code: "LB",
    id: 144
  },
  {
    label: "Liberia",
    value: "Liberia",
    altValue: "Libéria",
    code: "LR",
    id: 145
  },
  { label: "Libya", value: "Libya", altValue: "Líbia", code: "LY", id: 146 },
  {
    label: "Liechtenstein",
    value: "Liechtenstein",
    altValue: "Liechtenstein",
    code: "LI",
    id: 147
  },
  {
    label: "Lithuania",
    value: "Lithuania",
    altValue: "Lituânia",
    code: "LT",
    id: 148
  },
  {
    label: "Luxembourg",
    value: "Luxembourg",
    altValue: "Luxemburgo",
    code: "LU",
    id: 149
  },
  { label: "Macau", value: "Macau", altValue: "Macau", code: "MO", id: 150 },
  {
    label: "Macedonia (FYROM)",
    value: "Macedonia (FYROM)",
    altValue: "Macedônia (República Yugoslava)",
    code: "MK",
    id: 151
  },
  {
    label: "Madagascar",
    value: "Madagascar",
    altValue: "Madagascar",
    code: "MG",
    id: 152
  },
  {
    label: "Malaysia",
    value: "Malaysia",
    altValue: "Malásia",
    code: "MY",
    id: 153
  },
  { label: "Malawi", value: "Malawi", altValue: "Malaui", code: "MW", id: 154 },
  {
    label: "Maldives",
    value: "Maldives",
    altValue: "Maldivas",
    code: "MV",
    id: 155
  },
  { label: "Mali", value: "Mali", altValue: "Mali", code: "ML", id: 156 },
  { label: "Malta", value: "Malta", altValue: "Malta", code: "MT", id: 157 },
  {
    label: "Morocco",
    value: "Morocco",
    altValue: "Marrocos",
    code: "MA",
    id: 158
  },
  {
    label: "Martinique",
    value: "Martinique",
    altValue: "Martinica",
    code: "MQ",
    id: 159
  },
  {
    label: "Mauritius",
    value: "Mauritius",
    altValue: "Maurício",
    code: "MU",
    id: 160
  },
  {
    label: "Mauritania",
    value: "Mauritania",
    altValue: "Mauritânia",
    code: "MR",
    id: 161
  },
  {
    label: "Mayotte",
    value: "Mayotte",
    altValue: "Mayotte",
    code: "YT",
    id: 162
  },
  { label: "Mexico", value: "Mexico", altValue: "México", code: "MX", id: 163 },
  {
    label: "Micronesia",
    value: "Micronesia",
    altValue: "Micronésia",
    code: "FM",
    id: 164
  },
  {
    label: "Mozambique",
    value: "Mozambique",
    altValue: "Moçambique",
    code: "MZ",
    id: 165
  },
  {
    label: "Moldova",
    value: "Moldova",
    altValue: "Moldova",
    code: "MD",
    id: 166
  },
  { label: "Monaco", value: "Monaco", altValue: "Mônaco", code: "MC", id: 167 },
  {
    label: "Mongolia",
    value: "Mongolia",
    altValue: "Mongólia",
    code: "MN",
    id: 168
  },
  {
    label: "Montenegro",
    value: "Montenegro",
    altValue: "Montenegro",
    code: "ME",
    id: 169
  },
  {
    label: "Montserrat",
    value: "Montserrat",
    altValue: "Montserrat",
    code: "MS",
    id: 170
  },
  {
    label: "Myanmar (Burma)",
    value: "Myanmar (Burma)",
    altValue: "Myanma",
    code: "MM",
    id: 171
  },
  {
    label: "Namibia",
    value: "Namibia",
    altValue: "Namíbia",
    code: "NA",
    id: 172
  },
  { label: "Nauru", value: "Nauru", altValue: "Nauru", code: "NR", id: 173 },
  { label: "Nepal", value: "Nepal", altValue: "Nepal", code: "NP", id: 174 },
  {
    label: "Nicaragua",
    value: "Nicaragua",
    altValue: "Nicarágua",
    code: "NI",
    id: 175
  },
  { label: "Niger", value: "Niger", altValue: "Níger", code: "NE", id: 176 },
  {
    label: "Nigeria",
    value: "Nigeria",
    altValue: "Nigéria",
    code: "NG",
    id: 177
  },
  { label: "Niue", value: "Niue", altValue: "Niue", code: "NU", id: 178 },
  {
    label: "Norway",
    value: "Norway",
    altValue: "Noruega",
    code: "NO",
    id: 179
  },
  {
    label: "New Caledonia",
    value: "New Caledonia",
    altValue: "Nova Caledônia",
    code: "NC",
    id: 180
  },
  {
    label: "New Zealand",
    value: "New Zealand",
    altValue: "Nova Zelândia",
    code: "NZ",
    id: 181
  },
  { label: "Oman", value: "Oman", altValue: "Omã", code: "OM", id: 182 },
  {
    label: "Caribbean Netherlands",
    value: "Caribbean Netherlands",
    altValue: "Países Baixos Caribenhos",
    code: "BQ",
    id: 183
  },
  { label: "Palau", value: "Palau", altValue: "Palau", code: "PW", id: 184 },
  {
    label: "Palestine",
    value: "Palestine",
    altValue: "Palestina",
    code: "PS",
    id: 185
  },
  { label: "Panama", value: "Panama", altValue: "Panamá", code: "PA", id: 186 },
  {
    label: "Papua New Guinea",
    value: "Papua New Guinea",
    altValue: "Papua-Nova Guiné",
    code: "PG",
    id: 187
  },
  {
    label: "Pakistan",
    value: "Pakistan",
    altValue: "Paquistão",
    code: "PK",
    id: 188
  },
  {
    label: "Paraguay",
    value: "Paraguay",
    altValue: "Paraguai",
    code: "PY",
    id: 189
  },
  { label: "Peru", value: "Peru", altValue: "Peru", code: "PE", id: 190 },
  {
    label: "French Polynesia",
    value: "French Polynesia",
    altValue: "Polinésia Francesa",
    code: "PF",
    id: 191
  },
  {
    label: "Poland",
    value: "Poland",
    altValue: "Polônia",
    code: "PL",
    id: 192
  },
  {
    label: "Puerto Rico",
    value: "Puerto Rico",
    altValue: "Porto Rico",
    code: "PR",
    id: 193
  },
  {
    label: "Portugal",
    value: "Portugal",
    altValue: "Portugal",
    code: "PT",
    id: 194
  },
  { label: "Qatar", value: "Qatar", altValue: "Qatar", code: "QA", id: 195 },
  { label: "Kenya", value: "Kenya", altValue: "Quênia", code: "KE", id: 196 },
  {
    label: "Kyrgyzstan",
    value: "Kyrgyzstan",
    altValue: "Quirguistão",
    code: "KG",
    id: 197
  },
  {
    label: "Central African Republic",
    value: "Central African Republic",
    altValue: "República Centro-Africana",
    code: "CF",
    id: 198
  },
  {
    label: "Congo (DRC)",
    value: "Congo (DRC)",
    altValue: "República Democrática do Congo",
    code: "CD",
    id: 199
  },
  {
    label: "Dominican Republic",
    value: "Dominican Republic",
    altValue: "República Dominicana",
    code: "DO",
    id: 200
  },
  {
    label: "Czech Republic",
    value: "Czech Republic",
    altValue: "República Tcheca",
    code: "CZ",
    id: 201
  },
  {
    label: "Romania",
    value: "Romania",
    altValue: "Romênia",
    code: "RO",
    id: 202
  },
  { label: "Rwanda", value: "Rwanda", altValue: "Ruanda", code: "RW", id: 203 },
  {
    label: "Russia",
    value: "Russia",
    altValue: "Rússia (antiga URSS) - Federação Russa",
    code: "RU",
    id: 204
  },
  {
    label: "Western Sahara",
    value: "Western Sahara",
    altValue: "Saara Ocidental",
    code: "EH",
    id: 205
  },
  {
    label: "St. Pierre & Miquelon",
    value: "St. Pierre & Miquelon",
    altValue: "Saint-Pierre e Miquelon",
    code: "PM",
    id: 206
  },
  {
    label: "American Samoa",
    value: "American Samoa",
    altValue: "Samoa Americana",
    code: "AS",
    id: 207
  },
  {
    label: "Samoa",
    value: "Samoa",
    altValue: "Samoa Ocidental",
    code: "WS",
    id: 208
  },
  {
    label: "San Marino",
    value: "San Marino",
    altValue: "San Marino",
    code: "SM",
    id: 209
  },
  {
    label: "St. Helena",
    value: "St. Helena",
    altValue: "Santa Helena",
    code: "SH",
    id: 210
  },
  {
    label: "St. Lucia",
    value: "St. Lucia",
    altValue: "Santa Lúcia",
    code: "LC",
    id: 211
  },
  {
    label: "St. Barthélemy",
    value: "St. Barthélemy",
    altValue: "São Bartolomeu",
    code: "BL",
    id: 212
  },
  {
    label: "St. Kitts & Nevis",
    value: "St. Kitts & Nevis",
    altValue: "São Cristóvão e Névis",
    code: "KN",
    id: 213
  },
  {
    label: "St. Martin",
    value: "St. Martin",
    altValue: "São Martim",
    code: "MF",
    id: 214
  },
  {
    label: "Sint Maarten",
    value: "Sint Maarten",
    altValue: "São Martinho",
    code: "SX",
    id: 215
  },
  {
    label: "São Tomé & Príncipe",
    value: "São Tomé & Príncipe",
    altValue: "São Tomé e Príncipe",
    code: "ST",
    id: 216
  },
  {
    label: "St. Vincent & Grenadines",
    value: "St. Vincent & Grenadines",
    altValue: "São Vicente e Granadinas",
    code: "VC",
    id: 217
  },
  {
    label: "Senegal",
    value: "Senegal",
    altValue: "Senegal",
    code: "SN",
    id: 218
  },
  {
    label: "Sierra Leone",
    value: "Sierra Leone",
    altValue: "Serra Leoa",
    code: "SL",
    id: 219
  },
  { label: "Serbia", value: "Serbia", altValue: "Sérvia", code: "RS", id: 220 },
  { label: "Syria", value: "Syria", altValue: "Síria", code: "SY", id: 221 },
  {
    label: "Somalia",
    value: "Somalia",
    altValue: "Somália",
    code: "SO",
    id: 222
  },
  {
    label: "Sri Lanka",
    value: "Sri Lanka",
    altValue: "Sri Lanka",
    code: "LK",
    id: 223
  },
  {
    label: "Swaziland",
    value: "Swaziland",
    altValue: "Suazilândia",
    code: "SZ",
    id: 224
  },
  { label: "Sudan", value: "Sudan", altValue: "Sudão", code: "SD", id: 225 },
  {
    label: "South Sudan",
    value: "South Sudan",
    altValue: "Sudão do Sul",
    code: "SS",
    id: 226
  },
  { label: "Sweden", value: "Sweden", altValue: "Suécia", code: "SE", id: 227 },
  {
    label: "Switzerland",
    value: "Switzerland",
    altValue: "Suíça",
    code: "CH",
    id: 228
  },
  {
    label: "Suriname",
    value: "Suriname",
    altValue: "Suriname",
    code: "SR",
    id: 229
  },
  {
    label: "Svalbard & Jan Mayen",
    value: "Svalbard & Jan Mayen",
    altValue: "Svalbard",
    code: "SJ",
    id: 230
  },
  {
    label: "Tajikistan",
    value: "Tajikistan",
    altValue: "Tadjiquistão",
    code: "TJ",
    id: 231
  },
  {
    label: "Thailand",
    value: "Thailand",
    altValue: "Tailândia",
    code: "TH",
    id: 232
  },
  { label: "Taiwan", value: "Taiwan", altValue: "Taiwan", code: "TW", id: 233 },
  {
    label: "Tanzania",
    value: "Tanzania",
    altValue: "Tanzânia",
    code: "TZ",
    id: 234
  },
  {
    label: "British Indian Ocean Territory",
    value: "British Indian Ocean Territory",
    altValue: "Território Britânico do Oceano índico",
    code: "IO",
    id: 235
  },
  {
    label: "French Southern Territories",
    value: "French Southern Territories",
    altValue: "Territórios do Sul da França",
    code: "TF",
    id: 236
  },
  {
    label: "Timor-Leste",
    value: "Timor-Leste",
    altValue: "Timor-Leste",
    code: "TL",
    id: 237
  },
  { label: "Togo", value: "Togo", altValue: "Togo", code: "TG", id: 238 },
  { label: "Tonga", value: "Tonga", altValue: "Tonga", code: "TO", id: 239 },
  {
    label: "Trinidad & Tobago",
    value: "Trinidad & Tobago",
    altValue: "Trinidad e Tobago",
    code: "TT",
    id: 240
  },
  {
    label: "Tristan da Cunha",
    value: "Tristan da Cunha",
    altValue: "Tristão da Cunha",
    code: "TA",
    id: 241
  },
  {
    label: "Tunisia",
    value: "Tunisia",
    altValue: "Tunísia",
    code: "TN",
    id: 242
  },
  {
    label: "Turkmenistan",
    value: "Turkmenistan",
    altValue: "Turcomenistão",
    code: "TM",
    id: 243
  },
  {
    label: "Turkey",
    value: "Turkey",
    altValue: "Turquia",
    code: "TR",
    id: 244
  },
  { label: "Tuvalu", value: "Tuvalu", altValue: "Tuvalu", code: "TV", id: 245 },
  {
    label: "Ukraine",
    value: "Ukraine",
    altValue: "Ucrânia",
    code: "UA",
    id: 246
  },
  { label: "Uganda", value: "Uganda", altValue: "Uganda", code: "UG", id: 247 },
  {
    label: "Uruguay",
    value: "Uruguay",
    altValue: "Uruguai",
    code: "UY",
    id: 248
  },
  {
    label: "Uzbekistan",
    value: "Uzbekistan",
    altValue: "Uzbequistão",
    code: "UZ",
    id: 249
  },
  {
    label: "Vanuatu",
    value: "Vanuatu",
    altValue: "Vanuatu",
    code: "VU",
    id: 250
  },
  {
    label: "Vatican City",
    value: "Vatican City",
    altValue: "Vaticano",
    code: "VA",
    id: 251
  },
  {
    label: "Venezuela",
    value: "Venezuela",
    altValue: "Venezuela",
    code: "VE",
    id: 252
  },
  {
    label: "Vietnam",
    value: "Vietnam",
    altValue: "Vietnã",
    code: "VN",
    id: 253
  },
  {
    label: "Wallis & Futuna",
    value: "Wallis & Futuna",
    altValue: "Wallis e Futuna",
    code: "WF",
    id: 254
  },
  { label: "Zambia", value: "Zambia", altValue: "Zâmbia", code: "ZM", id: 255 },
  {
    label: "Zimbabwe",
    value: "Zimbabwe",
    altValue: "Zimbábue",
    code: "ZW",
    id: 256
  }
];
