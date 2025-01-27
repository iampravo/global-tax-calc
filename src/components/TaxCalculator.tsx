import React, { useState } from 'react';
import { Country, SelectedCountry, TaxCalculation } from '../types/tax';
import { countries, calculateTax } from '../utils/taxData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

const TaxCalculator = () => {
  const [selectedCountries, setSelectedCountries] = useState<SelectedCountry[]>([]);
  const [selectedCountryId, setSelectedCountryId] = useState<string>("");

  const handleAddCountry = () => {
    const country = countries.find(c => c.id === selectedCountryId);
    if (country && !selectedCountries.some(sc => sc.country.id === country.id)) {
      setSelectedCountries([...selectedCountries, { country, grossSalary: 0 }]);
      setSelectedCountryId("");
    }
  };

  const handleSalaryChange = (countryId: string, salary: string) => {
    setSelectedCountries(prev =>
      prev.map(sc =>
        sc.country.id === countryId
          ? { ...sc, grossSalary: Number(salary) || 0 }
          : sc
      )
    );
  };

  const calculateTaxForCountry = (selectedCountry: SelectedCountry): TaxCalculation => {
    return calculateTax(selectedCountry.grossSalary, selectedCountry.country);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">International Tax Calculator</h1>
      
      <div className="flex gap-4 mb-8">
        <Select value={selectedCountryId} onValueChange={setSelectedCountryId}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.id} value={country.id}>
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleAddCountry} disabled={!selectedCountryId}>
          <Plus className="mr-2 h-4 w-4" /> Add Country
        </Button>
      </div>

      <div className="grid gap-6">
        {selectedCountries.map((sc) => {
          const taxCalculation = calculateTaxForCountry(sc);
          return (
            <Card key={sc.country.id} className="w-full">
              <CardHeader>
                <CardTitle>{sc.country.name} Tax Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Gross Annual Salary
                    </label>
                    <Input
                      type="number"
                      value={sc.grossSalary || ""}
                      onChange={(e) => handleSalaryChange(sc.country.id, e.target.value)}
                      placeholder="Enter gross salary"
                      className="w-full"
                    />
                  </div>

                  {sc.grossSalary > 0 && (
                    <div className="space-y-4">
                      <div className="grid gap-4">
                        {taxCalculation.slabwiseTax.map((st, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>
                              {st.slab.min.toLocaleString()} - {st.slab.max ? st.slab.max.toLocaleString() : '∞'} ({st.slab.rate}%)
                            </span>
                            <span>{st.taxAmount.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-4 space-y-2">
                        <div className="flex justify-between font-semibold">
                          <span>Total Annual Tax:</span>
                          <span>{taxCalculation.totalTax.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Annual Net Salary:</span>
                          <span>{taxCalculation.netSalary.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Monthly Net Salary:</span>
                          <span>{(taxCalculation.netSalary / 12).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TaxCalculator;