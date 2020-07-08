// https://www.codewars.com/kata/5846aaffdbb1b19d300001fb/train/javascript
// Level 7kyu

/** Directions **/

//You are to implement a getDate function, which takes a unix timestamp and a locale as input and returns the formatted date based on the locale.
//
// the locale formats to use are stored in the preloaded structure formats. For example,
//
// Example:
//
// getDate(1481020142, 'en-GB') -> '06/12/2016' (format->'dd/mm/yyyy')
// getDate(1481020142, 'de-DE') -> '06.12.2016' (format->'dd.mm.yyyy')
// getDate(1481020142, 'hu-HU') -> '2016. 12. 06.' (format->'yyyy. mm. dd.')

// copied from the formats object that holds all the possible values
let formats = { 'ar-SA': 'dd/mm/yy',
    'bg-BG': 'dd.m.yyyy',
    'ca-ES': 'dd/mm/yyyy',
    'zh-TW': 'yyyy/m/d',
    'cs-CZ': 'd.m.yyyy',
    'da-DK': 'dd-mm-yyyy',
    'de-DE': 'dd.mm.yyyy',
    'el-GR': 'd/m/yyyy',
    'en-US': 'm/d/yyyy',
    'fi-FI': 'd.m.yyyy',
    'fr-FR': 'dd/mm/yyyy',
    'he-IL': 'dd/mm/yyyy',
    'hu-HU': 'yyyy. mm. dd.',
    'is-IS': 'd.m.yyyy',
    'it-IT': 'dd/mm/yyyy',
    'ja-JP': 'yyyy/mm/dd',
    'ko-KR': 'yyyy-mm-dd',
    'nl-NL': 'd-m-yyyy',
    'nb-NO': 'dd.mm.yyyy',
    'pl-PL': 'yyyy-mm-dd',
    'pt-BR': 'd/m/yyyy',
    'ro-RO': 'dd.mm.yyyy',
    'ru-RU': 'dd.mm.yyyy',
    'hr-HR': 'd.m.yyyy',
    'sk-SK': 'd. m. yyyy',
    'sq-AL': 'yyyy-mm-dd',
    'sv-SE': 'yyyy-mm-dd',
    'th-TH': 'd/m/yyyy',
    'tr-TR': 'dd.mm.yyyy',
    'ur-PK': 'dd/mm/yyyy',
    'id-ID': 'dd/mm/yyyy',
    'uk-UA': 'dd.mm.yyyy',
    'be-BY': 'dd.mm.yyyy',
    'sl-SI': 'd.m.yyyy',
    'et-EE': 'd.mm.yyyy',
    'lv-LV': 'yyyy.mm.dd.',
    'lt-LT': 'yyyy.mm.dd',
    'fa-IR': 'mm/dd/yyyy',
    'vi-VN': 'dd/mm/yyyy',
    'hy-Am': 'dd.mm.yyyy',
    'az-Latn-AZ': 'dd.mm.yyyy',
    'eu-ES': 'yyyy/mm/dd',
    'mk-mK': 'dd.mm.yyyy',
    'af-ZA': 'yyyy/mm/dd',
    'ka-GE': 'dd.mm.yyyy',
    'fo-FO': 'dd-mm-yyyy',
    'hi-IN': 'dd-mm-yyyy',
    'ms-mY': 'dd/mm/yyyy',
    'kk-KZ': 'dd.mm.yyyy',
    'ky-KG': 'dd.mm.yy',
    'sw-KE': 'm/d/yyyy',
    'uz-Latn-UZ': 'dd/mm yyyy',
    'tt-RU': 'dd.mm.yyyy',
    'pa-IN': 'dd-mm-yy',
    'gu-IN': 'dd-mm-yy',
    'ta-IN': 'dd-mm-yyyy',
    'te-IN': 'dd-mm-yy',
    'kn-IN': 'dd-mm-yy',
    'mr-IN': 'dd-mm-yyyy',
    'sa-IN': 'dd-mm-yyyy',
    'mn-mN': 'yy.mm.dd',
    'gl-ES': 'dd/mm/yy',
    'kok-IN': 'dd-mm-yyyy',
    'syr-SY': 'dd/mm/yyyy',
    'dv-mV': 'dd/mm/yy',
    'ar-IQ': 'dd/mm/yyyy',
    'zh-CN': 'yyyy/m/d',
    'de-CH': 'dd.mm.yyyy',
    'en-GB': 'dd/mm/yyyy',
    'es-mX': 'dd/mm/yyyy',
    'fr-BE': 'd/mm/yyyy',
    'it-CH': 'dd.mm.yyyy',
    'nl-BE': 'd/mm/yyyy',
    'nn-NO': 'dd.mm.yyyy',
    'pt-PT': 'dd-mm-yyyy',
    'sr-Latn-CS': 'd.m.yyyy',
    'sv-FI': 'd.m.yyyy',
    'az-Cyrl-AZ': 'dd.mm.yyyy',
    'ms-BN': 'dd/mm/yyyy',
    'uz-Cyrl-UZ': 'dd.mm.yyyy',
    'ar-EG': 'dd/mm/yyyy',
    'zh-HK': 'd/m/yyyy',
    'de-AT': 'dd.mm.yyyy',
    'en-AU': 'd/mm/yyyy',
    'es-ES': 'dd/mm/yyyy',
    'fr-CA': 'yyyy-mm-dd',
    'sr-Cyrl-CS': 'd.m.yyyy',
    'ar-LY': 'dd/mm/yyyy',
    'zh-SG': 'd/m/yyyy',
    'de-LU': 'dd.mm.yyyy',
    'en-CA': 'dd/mm/yyyy',
    'es-GT': 'dd/mm/yyyy',
    'fr-CH': 'dd.mm.yyyy',
    'ar-DZ': 'dd-mm-yyyy',
    'zh-mO': 'd/m/yyyy',
    'de-LI': 'dd.mm.yyyy',
    'en-NZ': 'd/mm/yyyy',
    'es-CR': 'dd/mm/yyyy',
    'fr-LU': 'dd/mm/yyyy',
    'ar-mA': 'dd-mm-yyyy',
    'en-IE': 'dd/mm/yyyy',
    'es-PA': 'mm/dd/yyyy',
    'fr-mC': 'dd/mm/yyyy',
    'ar-TN': 'dd-mm-yyyy',
    'en-ZA': 'yyyy/mm/dd',
    'es-DO': 'dd/mm/yyyy',
    'ar-Om': 'dd/mm/yyyy',
    'en-Jm': 'dd/mm/yyyy',
    'es-VE': 'dd/mm/yyyy',
    'ar-YE': 'dd/mm/yyyy',
    'en-029': 'mm/dd/yyyy',
    'es-CO': 'dd/mm/yyyy',
    'ar-SY': 'dd/mm/yyyy',
    'en-BZ': 'dd/mm/yyyy',
    'es-PE': 'dd/mm/yyyy',
    'ar-JO': 'dd/mm/yyyy',
    'en-TT': 'dd/mm/yyyy',
    'es-AR': 'dd/mm/yyyy',
    'ar-LB': 'dd/mm/yyyy',
    'en-ZW': 'm/d/yyyy',
    'es-EC': 'dd/mm/yyyy',
    'ar-KW': 'dd/mm/yyyy',
    'en-PH': 'm/d/yyyy',
    'es-CL': 'dd-mm-yyyy',
    'ar-AE': 'dd/mm/yyyy',
    'es-UY': 'dd/mm/yyyy',
    'ar-BH': 'dd/mm/yyyy',
    'es-PY': 'dd/mm/yyyy',
    'ar-QA': 'dd/mm/yyyy',
    'es-BO': 'dd/mm/yyyy',
    'es-SV': 'dd/mm/yyyy',
    'es-HN': 'dd/mm/yyyy',
    'es-NI': 'dd/mm/yyyy',
    'es-PR': 'dd/mm/yyyy',
    'am-ET': 'd/m/yyyy',
    'tzm-Latn-DZ': 'dd-mm-yyyy',
    'iu-Latn-CA': 'd/mm/yyyy',
    'sma-NO': 'dd.mm.yyyy',
    'mn-mong-CN': 'yyyy/m/d',
    'gd-GB': 'dd/mm/yyyy',
    'en-mY': 'd/m/yyyy',
    'prs-AF': 'dd/mm/yy',
    'bn-BD': 'dd-mm-yy',
    'wo-SN': 'dd/mm/yyyy',
    'rw-RW': 'm/d/yyyy',
    'qut-GT': 'dd/mm/yyyy',
    'sah-RU': 'mm.dd.yyyy',
    'gsw-FR': 'dd/mm/yyyy',
    'co-FR': 'dd/mm/yyyy',
    'oc-FR': 'dd/mm/yyyy',
    'mi-NZ': 'dd/mm/yyyy',
    'ga-IE': 'dd/mm/yyyy',
    'se-SE': 'yyyy-mm-dd',
    'br-FR': 'dd/mm/yyyy',
    'smn-FI': 'd.m.yyyy',
    'moh-CA': 'm/d/yyyy',
    'arn-CL': 'dd-mm-yyyy',
    'ii-CN': 'yyyy/m/d',
    'dsb-DE': 'd. m. yyyy',
    'ig-NG': 'd/m/yyyy',
    'kl-GL': 'dd-mm-yyyy',
    'lb-LU': 'dd/mm/yyyy',
    'ba-RU': 'dd.mm.yy',
    'nso-ZA': 'yyyy/mm/dd',
    'quz-BO': 'dd/mm/yyyy',
    'yo-NG': 'd/m/yyyy',
    'ha-Latn-NG': 'd/m/yyyy',
    'fil-PH': 'm/d/yyyy',
    'ps-AF': 'dd/mm/yy',
    'fy-NL': 'd-m-yyyy',
    'ne-NP': 'm/d/yyyy',
    'se-NO': 'dd.mm.yyyy',
    'iu-Cans-CA': 'd/m/yyyy',
    'sr-Latn-RS': 'd.m.yyyy',
    'si-LK': 'yyyy-mm-dd',
    'sr-Cyrl-RS': 'd.m.yyyy',
    'lo-LA': 'dd/mm/yyyy',
    'km-KH': 'yyyy-mm-dd',
    'cy-GB': 'dd/mm/yyyy',
    'bo-CN': 'yyyy/m/d',
    'sms-FI': 'd.m.yyyy',
    'as-IN': 'dd-mm-yyyy',
    'ml-IN': 'dd-mm-yy',
    'en-IN': 'dd-mm-yyyy',
    'or-IN': 'dd-mm-yy',
    'bn-IN': 'dd-mm-yy',
    'tk-Tm': 'dd.mm.yy',
    'bs-Latn-BA': 'd.m.yyyy',
    'mt-mT': 'dd/mm/yyyy',
    'sr-Cyrl-mE': 'd.m.yyyy',
    'se-FI': 'd.m.yyyy',
    'zu-ZA': 'yyyy/mm/dd',
    'xh-ZA': 'yyyy/mm/dd',
    'tn-ZA': 'yyyy/mm/dd',
    'hsb-DE': 'd. m. yyyy',
    'bs-Cyrl-BA': 'd.m.yyyy',
    'tg-Cyrl-TJ': 'dd.mm.yy',
    'sr-Latn-BA': 'd.m.yyyy',
    'smj-NO': 'dd.mm.yyyy',
    'rm-CH': 'dd/mm/yyyy',
    'smj-SE': 'yyyy-mm-dd',
    'quz-EC': 'dd/mm/yyyy',
    'quz-PE': 'dd/mm/yyyy',
    'hr-BA': 'd.m.yyyy.',
    'sr-Latn-mE': 'd.m.yyyy',
    'sma-SE': 'yyyy-mm-dd',
    'en-SG': 'd/m/yyyy',
    'ug-CN': 'yyyy-m-d',
    'sr-Cyrl-BA': 'd.m.yyyy',
    'es-US': 'm/d/yyyy'
};

/** Function **/

function getDate(uts, loc){
    let date = new Date(uts * 1000);
    // variables for each possible day, month year value
    let day = date.getDate().toString();
    // variable for if day is 1 digit and I need the 0 before it
    let d;
    if (day.length === 1) {
        d = '0' + day;
    } else {
        d = day;
    }
    // for some reason there is a problem with the values for month... they are off by 1
    let month = date.getMonth() + 1;
    month = month.toString();
    let m;
    if (month.length === 1) {
        m = '0' + month;
    } else {
        m = month;
    }
    let year = date.getFullYear().toString();
    let y = date.getFullYear().toString().slice(2,4);
    console.log(day, d, month, m, year, y);
    return formats[loc].replace('yyyy', year).replace('yy', y).replace('dd', d).replace('d', day).replace('mm', m).replace('m', month);
}

/** Advanced Solution (Refactored) **/

// this was frustrating because the function didn't work with toLocaleString or Intl.DateTimeFormat as expected

/** Test Cases **/

getDate(1481020142, 'en-GB'); // => '06/12/2016'
getDate(1481020142, 'en-US'); // => '12/6/2016'
getDate(1481020142, 'de-DE'); // => '06.12.2016'
getDate(1577896806, 'hu-HU'); // => '2020. 01. 01.'
