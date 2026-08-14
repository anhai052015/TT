const FLAGS = {
  "PAPUA NEW GUINEA": "🇵🇬",
  "UNITED STATES": "🇺🇸",
  "UNITED KINGDOM": "🇬🇧",
  "UNITED ARAB EMIRATES": "🇦🇪",
  "SAUDI ARABIA": "🇸🇦",
  "COSTA RICA": "🇨🇷",
  "PUERTO RICO": "🇵🇷",
  "SOUTH AFRICA": "🇿🇦",
  "EL SALVADOR": "🇸🇻",
  "TRINIDAD AND TOBAGO": "🇹🇹",
  "DOMINICAN REPUBLIC": "🇩🇴",
  "REPUBLIC OF KOREA": "🇰🇷",
  "NORTH KOREA": "🇰🇵",
  "NEW ZEALAND": "🇳🇿",
  "BOSNIA AND HERZEGOVINA": "🇧🇦",
  "SRI LANKA": "🇱🇰",
  "CZECH REPUBLIC": "🇨🇿",
  "SOLOMON ISLANDS": "🇸🇧",
  "SIERRA LEONE": "🇸🇱",
  "NORTH MACEDONIA": "🇲🇰",
  "NORTHERN MARIANA": "🇲🇵",
  "IVORY COAST": "🇨🇮",
  "AFGHANISTAN": "🇦🇫",
  "ALBANIA": "🇦🇱",
  "ALGERIA": "🇩🇿",
  "ANGOLA": "🇦🇴",
  "ARGENTINA": "🇦🇷",
  "ARMENIA": "🇦🇲",
  "AUSTRALIA": "🇦🇺",
  "AUSTRIA": "🇦🇹",
  "AZERBAIJAN": "🇦🇿",
  "BAHRAIN": "🇧🇭",
  "BANGLADESH": "🇧🇩",
  "BARBADOS": "🇧🇧",
  "BELARUS": "🇧🇾",
  "BELGIUM": "🇧🇪",
  "BOLIVIA": "🇧🇴",
  "BOTSWANA": "🇧🇼",
  "BRAZIL": "🇧🇷",
  "BULGARIA": "🇧🇬",
  "BURMA": "🇲🇲",
  "MYANMAR": "🇲🇲",
  "CAMBODIA": "🇰🇭",
  "CAMEROON": "🇨🇲",
  "CANADA": "🇨🇦",
  "CHILE": "🇨🇱",
  "CHINA": "🇨🇳",
  "COLOMBIA": "🇨🇴",
  "CROATIA": "🇭🇷",
  "CUBA": "🇨🇺",
  "CYPRUS": "🇨🇾",
  "DENMARK": "🇩🇰",
  "DOMINICA": "🇩🇲",
  "ECUADOR": "🇪🇨",
  "EGYPT": "🇪🇬",
  "ETHIOPIA": "🇪🇹",
  "FIJI": "🇫🇯",
  "FINLAND": "🇫🇮",
  "FRANCE": "🇫🇷",
  "GABON": "🇬🇦",
  "GEORGIA": "🇬🇪",
  "GERMANY": "🇩🇪",
  "GHANA": "🇬🇭",
  "GREECE": "🇬🇷",
  "GREENLAND": "🇬🇱",
  "GUATEMALA": "🇬🇹",
  "GUAM": "🇬🇺",
  "GUINEA": "🇬🇳",
  "GUYANA": "🇬🇾",
  "HAITI": "🇭🇹",
  "HONDURAS": "🇭🇳",
  "HUNGARY": "🇭🇺",
  "ICELAND": "🇮🇸",
  "INDIA": "🇮🇳",
  "INDONESIA": "🇮🇩",
  "IRAN": "🇮🇷",
  "IRAQ": "🇮🇶",
  "IRELAND": "🇮🇪",
  "ISRAEL": "🇮🇱",
  "ITALY": "🇮🇹",
  "JAMAICA": "🇯🇲",
  "JAPAN": "🇯🇵",
  "JORDAN": "🇯🇴",
  "KAZAKHSTAN": "🇰🇿",
  "KENYA": "🇰🇪",
  "KYRGYZSTAN": "🇰🇬",
  "KOREA": "🇰🇷",
  "KUWAIT": "🇰🇼",
  "LAOS": "🇱🇦",
  "LATVIA": "🇱🇻",
  "LEBANON": "🇱🇧",
  "LIBYA": "🇱🇾",
  "LITHUANIA": "🇱🇹",
  "LUXEMBOURG": "🇱🇺",
  "MADAGASCAR": "🇲🇬",
  "MALAYSIA": "🇲🇾",
  "MALDIVES": "🇲🇻",
  "MALI": "🇲🇱",
  "MALTA": "🇲🇹",
  "MAURITIUS": "🇲🇺",
  "MEXICO": "🇲🇽",
  "MOLDOVA": "🇲🇩",
  "MONGOLIA": "🇲🇳",
  "MONTENEGRO": "🇲🇪",
  "MOROCCO": "🇲🇦",
  "MOZAMBIQUE": "🇲🇿",
  "NAMIBIA": "🇳🇦",
  "NEPAL": "🇳🇵",
  "NETHERLANDS": "🇳🇱",
  "NEW CALEDONIA": "🇳🇨",
  "NICARAGUA": "🇳🇮",
  "NIGER": "🇳🇪",
  "NIGERIA": "🇳🇬",
  "NORWAY": "🇳🇴",
  "OMAN": "🇴🇲",
  "PAKISTAN": "🇵🇰",
  "PALAU": "🇵🇼",
  "PANAMA": "🇵🇦",
  "PARAGUAY": "🇵🇾",
  "PERU": "🇵🇪",
  "PHILIPPINES": "🇵🇭",
  "POLAND": "🇵🇱",
  "PORTUGAL": "🇵🇹",
  "QATAR": "🇶🇦",
  "ROMANIA": "🇷🇴",
  "RUSSIA": "🇷🇺",
  "RWANDA": "🇷🇼",
  "SAMOA": "🇼🇸",
  "SENEGAL": "🇸🇳",
  "SERBIA": "🇷🇸",
  "SEYCHELLES": "🇸🇨",
  "SINGAPORE": "🇸🇬",
  "SLOVAKIA": "🇸🇰",
  "SLOVENIA": "🇸🇮",
  "SOMALIA": "🇸🇴",
  "SPAIN": "🇪🇸",
  "SUDAN": "🇸🇩",
  "SURINAME": "🇸🇷",
  "SWEDEN": "🇸🇪",
  "SWITZERLAND": "🇨🇭",
  "SYRIA": "🇸🇾",
  "TAIWAN": "🇹🇼",
  "TAJIKISTAN": "🇹🇯",
  "TANZANIA": "🇹🇿",
  "THAILAND": "🇹🇭",
  "TIBET": "🇨🇳",
  "TOGO": "🇹🇬",
  "TUNISIA": "🇹🇳",
  "TURKEY": "🇹🇷",
  "TURKMENISTAN": "🇹🇲",
  "UGANDA": "🇺🇬",
  "UKRAINE": "🇺🇦",
  "URUGUAY": "🇺🇾",
  "UZBEKISTAN": "🇺🇿",
  "VANUATU": "🇻🇺",
  "VENEZUELA": "🇻🇪",
  "VIETNAM": "🇻🇳",
  "YEMEN": "🇾🇪",
  "ZAMBIA": "🇿🇲",
  "ZIMBABWE": "🇿🇼",
};

// USGS 'place' thường kết thúc bằng tên bang của Mỹ
const US_STATES = [
  "ALASKA", "HAWAII", "CALIFORNIA", "OREGON", "WASHINGTON",
  "NEVADA", "MONTANA", "IDAHO", "WYOMING", "UTAH", "ARIZONA",
  "NEW MEXICO", "COLORADO", "TEXAS", "OKLAHOMA", "KANSAS",
  "NEBRASKA", "NORTH DAKOTA", "SOUTH DAKOTA", "MINNESOTA",
  "IOWA", "MISSOURI", "ARKANSAS", "LOUISIANA", "MISSISSIPPI",
  "ALABAMA", "GEORGIA", "FLORIDA", "SOUTH CAROLINA", "NORTH CAROLINA",
  "TENNESSEE", "KENTUCKY", "VIRGINIA", "WEST VIRGINIA", "MARYLAND",
  "DELAWARE", "NEW JERSEY", "PENNSYLVANIA", "NEW YORK", "CONNECTICUT",
  "RHODE ISLAND", "MASSACHUSETTS", "VERMONT", "NEW HAMPSHIRE", "MAINE",
  "INDIANA", "OHIO", "MICHIGAN", "WISCONSIN", "ILLINOIS",
  "VIRGIN ISLANDS",
];

// Tỉnh bang của Canada → cờ Canada
const CA_PROVINCES = [
  "BRITISH COLUMBIA", "ALBERTA", "SASKATCHEWAN", "MANITOBA",
  "ONTARIO", "QUEBEC", "NEW BRUNSWICK", "NOVA SCOTIA",
  "PRINCE EDWARD ISLAND", "NEWFOUNDLAND", "YUKON",
  "NORTHWEST TERRITORIES", "NUNAVUT",
];

const FALLBACK = "🌍";

// Sắp xếp key dài trước để tránh khớp nhầm (vd: "GUINEA" trong "PAPUA NEW GUINEA")
const SORTED_KEYS = Object.keys(FLAGS).sort((a, b) => b.length - a.length);

function matches(text, name) {
  const pattern = "\\b" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b";
  return new RegExp(pattern).test(text);
}

// Nhận tên khu vực/quốc gia, trả về emoji cờ tương ứng
export function getFlag(regionText) {
  if (!regionText) return FALLBACK;

  const text = regionText.toUpperCase();

  for (const key of SORTED_KEYS) {
    if (matches(text, key)) {
      return FLAGS[key];
    }
  }

  for (const state of US_STATES) {
    if (matches(text, state)) {
      return "🇺🇸";
    }
  }

  for (const province of CA_PROVINCES) {
    if (matches(text, province)) {
      return "🇨🇦";
    }
  }

  return FALLBACK;
}
