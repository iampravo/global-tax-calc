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
    ]
  },
  // ... Add more countries with their respective tax slabs
];

export const calculateTax = (grossSalary: number, country: Country): TaxCalculation => {
  let totalTax = 0;
  const slabwiseTax: SlabwiseTax[] = [];

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

  return {
    grossSalary,
    totalTax,
    netSalary: grossSalary - totalTax,
    slabwiseTax
  };
};