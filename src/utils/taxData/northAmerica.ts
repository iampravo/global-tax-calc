import { Country } from '../../types/tax';

export const northAmericanCountries: Country[] = [
  {
    id: "usa",
    name: "USA",
    code: "US",
    taxSlabs: [
      { min: 0, max: 11000, rate: 10 },
      { min: 11001, max: 44725, rate: 12 },
      { min: 44726, max: 95375, rate: 22 },
      { min: 95376, max: 182100, rate: 24 },
      { min: 182101, max: 231250, rate: 32 },
      { min: 231251, max: 578125, rate: 35 },
      { min: 578126, max: null, rate: 37 }
    ],
    deductions: [
      { name: "Social Security", rate: 6.2, maxAmount: 160200 },
      { name: "Medicare", rate: 1.45, maxAmount: null },
      { name: "State Tax (Average)", rate: 4.6, maxAmount: null }
    ]
  },
  {
    id: "ca",
    name: "Canada",
    code: "CA",
    taxSlabs: [
      { min: 0, max: 53359, rate: 15 },
      { min: 53360, max: 106717, rate: 20.5 },
      { min: 106718, max: 165430, rate: 26 },
      { min: 165431, max: 235675, rate: 29 },
      { min: 235676, max: null, rate: 33 }
    ],
    deductions: [
      { name: "CPP", rate: 5.95, maxAmount: 63100 },
      { name: "EI", rate: 1.63, maxAmount: 61500 }
    ]
  }
];