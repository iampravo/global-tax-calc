import { Country, TaxCalculation, SlabwiseTax } from '../types/tax';
import { northAmericanCountries } from './taxData/northAmerica';
import { europeanCountries } from './taxData/europe';
import { asianCountries } from './taxData/asia';
import { oceaniaCountries } from './taxData/oceania';

export const countries: Country[] = [
  ...northAmericanCountries,
  ...europeanCountries,
  ...asianCountries,
  ...oceaniaCountries
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