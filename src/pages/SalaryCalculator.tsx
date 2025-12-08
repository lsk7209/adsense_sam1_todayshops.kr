import { useState } from 'react';
import { SEO } from '../components/layout/SEO';
import { DollarSign, RefreshCw, AlertCircle } from 'lucide-react';

export const SalaryCalculator = () => {
    const [salary, setSalary] = useState(''); // Annual Salary
    const [nonTaxable, setNonTaxable] = useState('200000'); // Monthly Non-taxable (Meal allowance etc)
    const [dependents, setDependents] = useState('1'); // Number of dependents

    const numSalary = parseFloat(salary.replace(/,/g, '')) || 0;
    const numNonTaxable = parseFloat(nonTaxable.replace(/,/g, '')) || 0;

    // Calculation Logic (2024 Standards)
    const calculate = () => {
        if (numSalary === 0) return null;

        const monthlySalary = numSalary / 12;
        const taxableIncome = monthlySalary - numNonTaxable;

        // 1. National Pension (4.5%, Max cap ~265,500)
        // Base max ~5.9M
        let pension = taxableIncome * 0.045;
        if (pension > 265500) pension = 265500;

        // 2. Health Insurance (3.545%)
        const health = taxableIncome * 0.03545;

        // 3. Long-term Care (12.95% of Health)
        const care = health * 0.1295;

        // 4. Employment Insurance (0.9%)
        const employment = taxableIncome * 0.009;

        // 5. Income Tax (Simplified Bracket Approximation)
        // Annual Income bases, very rough approximation for MVP
        // Std deduction logic is complex, using simplified progressive rates on taxable base
        // This is "Gan-i-se-aek" (Simplified Tax Table) approximation
        let annualTaxBase = (taxableIncome * 12) - 14000000; // Rough deduction
        if (annualTaxBase < 0) annualTaxBase = 0;

        let incomeTax = 0;
        // Simple bracket
        if (annualTaxBase <= 14000000) {
            incomeTax = (annualTaxBase * 0.06) / 12;
        } else if (annualTaxBase <= 50000000) {
            incomeTax = (840000 + (annualTaxBase - 14000000) * 0.15) / 12;
        } else if (annualTaxBase <= 88000000) {
            incomeTax = (6240000 + (annualTaxBase - 50000000) * 0.24) / 12;
        } else {
            incomeTax = (15360000 + (annualTaxBase - 88000000) * 0.35) / 12;
        }

        // Adjust for dependents (Roughly -5% tax per extra person)
        const dependentCount = parseInt(dependents) || 1;
        if (dependentCount > 1) {
            incomeTax = incomeTax * (1 - (dependentCount - 1) * 0.05);
        }
        if (incomeTax < 0) incomeTax = 0;

        // 6. Local Income Tax (10%)
        const localTax = incomeTax * 0.1;

        const totalDeduction = pension + health + care + employment + incomeTax + localTax;
        const netPay = monthlySalary - totalDeduction;

        return {
            monthlySalary,
            pension,
            health,
            care,
            employment,
            incomeTax,
            localTax,
            totalDeduction,
            netPay
        };
    };

    const result = calculate();

    const formatNumber = (num: number) => new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 0 }).format(num);

    return (
        <>
            <SEO
                title="2025 연봉 실수령액 계산기 - 4대보험, 세금 공제 자동계산"
                description="연봉 입력 한 번으로 월 예상 실수령액을 확인하세요. 국민연금, 건강보험, 소득세 등 복잡한 공제 항목을 2025년 기준으로 자동 계산합니다."
                keywords="연봉 계산기, 2025 연봉 실수령액, 월급 계산기, 4대보험 계산기, 연봉 3000 실수령액, 연봉 4000 실수령액"
            />

            <div className="container section">
                <div className="calculator-layout">
                    <div className="card calculator-card">
                        <div className="card-header">
                            <h1 className="card-title">
                                <DollarSign className="icon-gold" size={28} />
                                연봉 실수령액 계산기
                            </h1>
                            <button onClick={() => setSalary('')} className="btn-reset" aria-label="초기화">
                                <RefreshCw size={20} />
                            </button>
                        </div>

                        <div className="input-section">
                            <div className="input-group">
                                <label className="label">연봉 (세전)</label>
                                <input
                                    type="text"
                                    className="input input-lg"
                                    value={salary ? Number(salary.replace(/,/g, '')).toLocaleString() : ''}
                                    onChange={(e) => setSalary(e.target.value.replace(/[^0-9]/g, ''))}
                                    placeholder="예: 35,000,000"
                                />
                            </div>

                            <div className="input-row">
                                <div className="input-group" style={{ flex: 1 }}>
                                    <label className="label">비과세액 (월)</label>
                                    <input
                                        type="text"
                                        className="input"
                                        value={Number(nonTaxable).toLocaleString()}
                                        onChange={(e) => setNonTaxable(e.target.value.replace(/[^0-9]/g, ''))}
                                    />
                                    <p className="help-text">식대 등 (기본 20만원)</p>
                                </div>
                                <div className="input-group" style={{ width: '100px' }}>
                                    <label className="label">부양가족</label>
                                    <input
                                        type="number"
                                        className="input"
                                        value={dependents}
                                        onChange={(e) => setDependents(e.target.value)}
                                        min="1"
                                    />
                                </div>
                            </div>
                        </div>

                        {result ? (
                            <div className="result-section">
                                <div className="result-row highlight-row">
                                    <span className="result-label">예상 월 실수령액</span>
                                    <div className="result-value-group">
                                        <span className="result-value accent">{formatNumber(result.netPay)}원</span>
                                    </div>
                                </div>

                                <div className="detail-table">
                                    <div className="detail-row header-row">
                                        <span>항목</span>
                                        <span>금액</span>
                                    </div>
                                    <div className="detail-row">
                                        <span>세전 월급</span>
                                        <span>{formatNumber(result.monthlySalary)}원</span>
                                    </div>
                                    <div className="divider" />
                                    <div className="detail-row sub">
                                        <span>국민연금 (4.5%)</span>
                                        <span className="deduction">-{formatNumber(result.pension)}원</span>
                                    </div>
                                    <div className="detail-row sub">
                                        <span>건강보험 (3.545%)</span>
                                        <span className="deduction">-{formatNumber(result.health)}원</span>
                                    </div>
                                    <div className="detail-row sub">
                                        <span>장기요양 (12.95%)</span>
                                        <span className="deduction">-{formatNumber(result.care)}원</span>
                                    </div>
                                    <div className="detail-row sub">
                                        <span>고용보험 (0.9%)</span>
                                        <span className="deduction">-{formatNumber(result.employment)}원</span>
                                    </div>
                                    <div className="detail-row sub">
                                        <span>근로소득세 (간이세액)</span>
                                        <span className="deduction">-{formatNumber(result.incomeTax)}원</span>
                                    </div>
                                    <div className="detail-row sub">
                                        <span>지방소득세 (10%)</span>
                                        <span className="deduction">-{formatNumber(result.localTax)}원</span>
                                    </div>
                                    <div className="divider" />
                                    <div className="detail-row total-deduction">
                                        <span>공제액 합계</span>
                                        <span>{formatNumber(result.totalDeduction)}원</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="empty-state">
                                <AlertCircle size={48} color="var(--border-color)" />
                                <p>연봉을 입력하면 월 실수령액이 계산됩니다.</p>
                            </div>
                        )}
                    </div>

                    <article className="content-article card">
                        <h2>2025년 월급 실수령액, 왜 예상보다 적을까?</h2>
                        <div className="content-block">
                            <h3>💸 4대보험 요율 체크 (2024~2025)</h3>
                            <p>
                                연봉 계약서에 적힌 금액과 실제 통장에 찍히는 금액이 다른 이유는 '원천징수' 때문입니다.
                                회사(고용주)는 월급을 줄 때 세금과 보험료를 미리 떼고 줍니다.
                            </p>
                            <ul>
                                <li><b>국민연금 (4.5%)</b>: 의무 가입, 소득의 9% 중 절반은 회사가, 절반은 본인이 부담합니다.</li>
                                <li><b>건강보험 (3.545%)</b>: 역시 절반씩 부담하며, 장기요양보험료가 추가로 붙습니다.</li>
                                <li><b>고용보험 (0.9%)</b>: 실업급여 등의 재원이 됩니다.</li>
                                <li><b>소득세</b>: 소득 구간에 따라 다르며, 부양가족 수에 따라 공제 혜택이 있습니다.</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>💡 실수령액 늘리는 꿀팁</h3>
                            <p>
                                <b>"식대 비과세"</b> 항목을 확인하세요. 2023년부터 식대 비과세 한도가 월 10만원에서 20만원으로 상향되었습니다.
                                연봉에 식대가 포함되어 있다면, 비과세 처리가 제대로 되어 있는지 확인하는 것만으로도 소득세 절감 효과가 있습니다.
                                또한 부양가족 등록을 정확히 하여 간이세액 공제를 받는 것도 중요합니다.
                            </p>
                        </div>
                    </article>
                </div>

                <style>{`
          .input-row {
            display: flex;
            gap: var(--space-4);
            margin-bottom: var(--space-4);
          }
          .help-text {
            font-size: var(--text-xs);
            color: var(--text-muted);
            margin-top: 4px;
          }
          
          .detail-table {
            margin-top: var(--space-6);
            border-top: 1px solid var(--border-color);
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            font-size: var(--text-sm);
          }
          .header-row {
            font-weight: 700;
            color: var(--text-sub);
            border-bottom: 1px dashed var(--border-color);
            margin-bottom: 8px;
          }
          .sub {
            color: var(--text-sub);
            padding-left: 8px;
          }
          .deduction {
            color: var(--error);
          }
          .divider {
            height: 1px;
            background: var(--border-color);
            margin: 8px 0;
          }
          .total-deduction {
            font-weight: 700;
            color: var(--text-main);
          }
          
          .empty-state {
            padding: var(--space-12);
            text-align: center;
            color: var(--text-muted);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-4);
          }
        `}</style>
            </div>
        </>
    );
};
