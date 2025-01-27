export interface Country {
  id: string;
  name: string;
  code: string;
  taxSlabs: TaxSlab[];
}

export interface TaxSlab {
  min: number;
  max: number | null;
  rate: number;
}

export interface TaxCalculation {
  grossSalary: number;
  totalTax: number;
  netSalary: number;
  slabwiseTax: SlabwiseTax[];
}

export interface SlabwiseTax {
  slab: TaxSlab;
  taxAmount: number;
  taxableAmount: number;
}

export interface SelectedCountry {
  country: Country;
  grossSalary: number;
}