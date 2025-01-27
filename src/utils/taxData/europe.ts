import { Country } from '../../types/tax';

export const europeanCountries: Country[] = [
  {
    id: "uk",
    name: "UK",
    code: "GB",
    taxSlabs: [
      { min: 0, max: 12570, rate: 0 },
      { min: 12571, max: 50270, rate: 20 },
      { min: 50271, max: 125140, rate: 40 },
      { min: 125141, max: null, rate: 45 }
    ],
    deductions: [
      { name: "National Insurance", rate: 12, maxAmount: 50270 },
      { name: "NHS Surcharge", rate: 1.25, maxAmount: null }
    ]
  },
  {
    id: "de",
    name: "Germany",
    code: "DE",
    taxSlabs: [
      { min: 0, max: 10908, rate: 0 },
      { min: 10909, max: 62809, rate: 14 },
      { min: 62810, max: 277825, rate: 42 },
      { min: 277826, max: null, rate: 45 }
    ],
    deductions: [
      { name: "Pension Insurance", rate: 9.3, maxAmount: null },
      { name: "Health Insurance", rate: 7.3, maxAmount: null },
      { name: "Unemployment Insurance", rate: 1.3, maxAmount: null }
    ]
  },
  {
    id: "nl",
    name: "Netherlands",
    code: "NL",
    taxSlabs: [
      { min: 0, max: 73031, rate: 36.93 },
      { min: 73032, max: null, rate: 49.5 }
    ],
    deductions: [
      { name: "Social Security", rate: 27.65, maxAmount: 66956 }
    ]
  },
  {
    id: "ch",
    name: "Switzerland",
    code: "CH",
    taxSlabs: [
      { min: 0, max: 14500, rate: 0 },
      { min: 14501, max: 31600, rate: 0.77 },
      { min: 31601, max: 41400, rate: 0.88 },
      { min: 41401, max: 55200, rate: 2.64 },
      { min: 55201, max: 72500, rate: 2.97 },
      { min: 72501, max: 78100, rate: 5.94 },
      { min: 78101, max: 103600, rate: 6.60 },
      { min: 103601, max: 134600, rate: 8.80 },
      { min: 134601, max: 176000, rate: 11 },
      { min: 176001, max: null, rate: 13.20 }
    ],
    deductions: [
      { name: "AHV/IV/EO", rate: 5.3, maxAmount: null },
      { name: "ALV", rate: 1.1, maxAmount: 148200 },
      { name: "Pension Fund", rate: 7.5, maxAmount: null }
    ]
  }
];