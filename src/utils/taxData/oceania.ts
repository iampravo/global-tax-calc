import { Country } from '../../types/tax';

export const oceaniaCountries: Country[] = [
  {
    id: "au",
    name: "Australia",
    code: "AU",
    taxSlabs: [
      { min: 0, max: 18200, rate: 0 },
      { min: 18201, max: 45000, rate: 19 },
      { min: 45001, max: 120000, rate: 32.5 },
      { min: 120001, max: 180000, rate: 37 },
      { min: 180001, max: null, rate: 45 }
    ],
    deductions: [
      { name: "Medicare Levy", rate: 2, maxAmount: null },
      { name: "Superannuation", rate: 11, maxAmount: null }
    ]
  }
];