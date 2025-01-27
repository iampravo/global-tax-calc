import { Country, TaxCalculation, SlabwiseTax } from '../types/tax';

export const countries: Country[] = [
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
  },
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

export const calculateTax = (grossSalary: number, country: Country): TaxCalculation => {
  let totalTax = 0;
  let totalDeductions = 0;
  const slabwiseTax: SlabwiseTax[] = [];

  // Calculate tax based on slabs
  for (const slab of country.taxSlabs) {
    const slabMin = slab.min;
    const slabMax = slab.max ?? Infinity;
    
    if (grossSalary > slabMin) {
      const taxableAmount = Math.min(grossSalary - slabMin, slabMax - slabMin);
      const taxForSlab = (taxableAmount * slab.rate) / 100;
      
      totalTax += taxForSlab;
      slabwiseTax.push({
        slab,
        taxAmount: taxForSlab,
        taxableAmount
      });
    }
  }

  // Calculate additional deductions
  const deductions = country.deductions.map(deduction => {
    const deductibleAmount = deduction.maxAmount 
      ? Math.min(grossSalary, deduction.maxAmount)
      : grossSalary;
    const amount = (deductibleAmount * deduction.rate) / 100;
    totalDeductions += amount;
    return {
      name: deduction.name,
      amount
    };
  });

  return {
    grossSalary,
    totalTax,
    totalDeductions,
    netSalary: grossSalary - totalTax - totalDeductions,
    slabwiseTax,
    deductions
  };
};