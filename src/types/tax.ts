export interface Country {
  id: string;
  name: string;
  code: string;
  taxSlabs: TaxSlab[];
  deductions: Deduction[];
}

export interface TaxSlab {
  min: number;
  max: number | null;
  rate: number;
}

export interface Deduction {
  name: string;
  rate: number;
  maxAmount: number | null;
}

export interface TaxCalculation {
  grossSalary: number;
  totalTax: number;
  totalDeductions: number;
  netSalary: number;
  slabwiseTax: SlabwiseTax[];
  deductions: DeductionCalculation[];
}

export interface SlabwiseTax {
  slab: TaxSlab;
  taxAmount: number;
  taxableAmount: number;
}

export interface DeductionCalculation {
  name: string;
  amount: number;
}

export interface SelectedCountry {
  country: Country;
  grossSalary: number;
}