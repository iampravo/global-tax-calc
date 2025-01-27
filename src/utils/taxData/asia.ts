import { Country } from '../../types/tax';

export const asianCountries: Country[] = [
  {
    id: "ae",
    name: "UAE",
    code: "AE",
    taxSlabs: [
      { min: 0, max: null, rate: 0 }
    ],
    deductions: []
  },
  {
    id: "in",
    name: "India",
    code: "IN",
    taxSlabs: [
      { min: 0, max: 300000, rate: 0 },
      { min: 300001, max: 600000, rate: 5 },
      { min: 600001, max: 900000, rate: 10 },
      { min: 900001, max: 1200000, rate: 15 },
      { min: 1200001, max: 1500000, rate: 20 },
      { min: 1500001, max: null, rate: 30 }
    ],
    deductions: [
      { name: "EPF", rate: 12, maxAmount: null },
      { name: "Professional Tax", rate: 2.5, maxAmount: 30000 }
    ]
  },
  {
    id: "sg",
    name: "Singapore",
    code: "SG",
    taxSlabs: [
      { min: 0, max: 20000, rate: 0 },
      { min: 20001, max: 30000, rate: 2 },
      { min: 30001, max: 40000, rate: 3.5 },
      { min: 40001, max: 80000, rate: 7 },
      { min: 80001, max: 120000, rate: 11.5 },
      { min: 120001, max: 160000, rate: 15 },
      { min: 160001, max: 200000, rate: 18 },
      { min: 200001, max: 240000, rate: 19 },
      { min: 240001, max: 280000, rate: 19.5 },
      { min: 280001, max: 320000, rate: 20 },
      { min: 320001, max: null, rate: 22 }
    ],
    deductions: [
      { name: "CPF", rate: 20, maxAmount: 102000 }
    ]
  },
  {
    id: "jp",
    name: "Japan",
    code: "JP",
    taxSlabs: [
      { min: 0, max: 1950000, rate: 5 },
      { min: 1950001, max: 3300000, rate: 10 },
      { min: 3300001, max: 6950000, rate: 20 },
      { min: 6950001, max: 9000000, rate: 23 },
      { min: 9000001, max: 18000000, rate: 33 },
      { min: 18000001, max: 40000000, rate: 40 },
      { min: 40000001, max: null, rate: 45 }
    ],
    deductions: [
      { name: "Health Insurance", rate: 5, maxAmount: null },
      { name: "Pension", rate: 9.15, maxAmount: null },
      { name: "Employment Insurance", rate: 0.3, maxAmount: null }
    ]
  }
];