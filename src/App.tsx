import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { VATCalculator } from './pages/VATCalculator';
import { MarginCalculator } from './pages/MarginCalculator';
import { SalaryCalculator } from './pages/SalaryCalculator';
import { FreelanceSalaryCalculator } from './pages/FreelanceSalaryCalculator';
import { HolidayAllowanceCalculator } from './pages/HolidayAllowanceCalculator';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { GuideLayout } from './pages/guides/GuideLayout';
import { VatExplained } from './pages/guides/VatExplained';
import { MarginVsMarkup } from './pages/guides/MarginVsMarkup';
import { SalaryTable2025 } from './pages/guides/SalaryTable2025';
import { FreelanceTaxGuide } from './pages/guides/FreelanceTaxGuide';

import { HolidayAllowanceGuide } from './pages/guides/HolidayAllowanceGuide';
import { TaxpayerTypeGuide } from './pages/guides/TaxpayerTypeGuide';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="vat-calculator" element={<VATCalculator />} />
        <Route path="margin-calculator" element={<MarginCalculator />} />
        <Route path="salary-calculator" element={<SalaryCalculator />} />
        <Route path="freelance-calculator" element={<FreelanceSalaryCalculator />} />
        <Route path="holiday-allowance-calculator" element={<HolidayAllowanceCalculator />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />

        {/* Guides */}
        <Route path="guides" element={<GuideLayout />}>
          <Route path="vat-explained" element={<VatExplained />} />
          <Route path="margin-vs-markup" element={<MarginVsMarkup />} />
          <Route path="2025-salary-table" element={<SalaryTable2025 />} />
          <Route path="freelance-tax-guide" element={<FreelanceTaxGuide />} />
          <Route path="holiday-allowance-guide" element={<HolidayAllowanceGuide />} />
          <Route path="taxpayer-type-guide" element={<TaxpayerTypeGuide />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App
