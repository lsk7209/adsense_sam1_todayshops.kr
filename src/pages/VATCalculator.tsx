import { useState } from 'react';
import { SEO } from '../components/layout/SEO';
import { Calculator, Copy, RefreshCw, CheckCheck } from 'lucide-react';

type TaxMode = 'include' | 'exclude';

export const VATCalculator = () => {
    const [amount, setAmount] = useState<string>('');
    const [taxRate, setTaxRate] = useState<string>('10');
    const [mode, setMode] = useState<TaxMode>('include');
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const numericAmount = parseFloat(amount.replace(/,/g, '')) || 0;
    const numericRate = parseFloat(taxRate) || 10;

    let supplyValue = 0;
    let vatAmount = 0;
    let totalAmount = 0;

    if (mode === 'include') {
        // 합계금액에서 부가세 포함
        // Supply = Total / (1 + Rate/100)
        supplyValue = Math.round(numericAmount / (1 + numericRate / 100));
        totalAmount = numericAmount;
        vatAmount = totalAmount - supplyValue;
    } else {
        // 공급가액에서 부가세 별도
        supplyValue = numericAmount;
        vatAmount = Math.round(numericAmount * (numericRate / 100));
        totalAmount = supplyValue + vatAmount;
    }

    const formatNumber = (num: number) => new Intl.NumberFormat('ko-KR').format(num);

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 1500);
    };

    const handleReset = () => {
        setAmount('');
        setTaxRate('10');
    };

    return (
        <>
            <SEO
                title="부가세 계산기 - 일반과세자/간이과세자용 (2025)"
                description="공급가액와 합계금액 기준 부가세(VAT) 자동 계산기. 부가세 별도/포함 계산을 한번에. 세금계산서 발행 시 필수 도구."
                keywords="부가세 계산기, 부가가치세 계산, VAT 계산기, 부가세 별도 계산, 부가세 포함 계산"
            />
            <div className="container section">
                <div className="calculator-layout">

                    {/* Main Calculator Card */}
                    <div className="card calculator-card">
                        <div className="card-header">
                            <h1 className="card-title">
                                <Calculator className="icon-gold" size={28} />
                                부가세 계산기
                            </h1>
                            <button onClick={handleReset} className="btn-reset" aria-label="초기화">
                                <RefreshCw size={20} />
                            </button>
                        </div>

                        <div className="input-section">
                            <div className="input-group">
                                <label className="label">계산 기준</label>
                                <div className="tab-group">
                                    <button
                                        className={`tab ${mode === 'include' ? 'active' : ''}`}
                                        onClick={() => setMode('include')}
                                    >
                                        합계금액 (VAT 포함)
                                    </button>
                                    <button
                                        className={`tab ${mode === 'exclude' ? 'active' : ''}`}
                                        onClick={() => setMode('exclude')}
                                    >
                                        공급가액 (VAT 별도)
                                    </button>
                                </div>
                            </div>

                            <div className="input-group">
                                <label className="label">
                                    {mode === 'include' ? '합계금액' : '공급가액'} (원)
                                </label>
                                <input
                                    type="text"
                                    className="input input-lg"
                                    value={amount ? Number(amount.replace(/,/g, '')).toLocaleString() : ''}
                                    onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
                                    placeholder="금액을 입력하세요"
                                />
                            </div>

                            <div className="input-group">
                                <label className="label">세율 (%)</label>
                                <input
                                    type="number"
                                    className="input"
                                    value={taxRate}
                                    onChange={(e) => setTaxRate(e.target.value)}
                                    placeholder="기본 10%"
                                />
                            </div>
                        </div>

                        <div className="result-section">
                            <div className="result-row">
                                <span className="result-label">공급가액</span>
                                <div className="result-value-group">
                                    <span className="result-value">{formatNumber(supplyValue)}원</span>
                                    <button onClick={() => handleCopy(supplyValue.toString(), 'supply')} className="btn-copy">
                                        {copiedField === 'supply' ? <CheckCheck size={16} /> : <Copy size={16} />}
                                    </button>
                                </div>
                            </div>
                            <div className="result-row highlight-row">
                                <span className="result-label">부가세 (VAT)</span>
                                <div className="result-value-group">
                                    <span className="result-value accent">{formatNumber(vatAmount)}원</span>
                                    <button onClick={() => handleCopy(vatAmount.toString(), 'vat')} className="btn-copy">
                                        {copiedField === 'vat' ? <CheckCheck size={16} /> : <Copy size={16} />}
                                    </button>
                                </div>
                            </div>
                            <div className="result-row total-row">
                                <span className="result-label">합계금액</span>
                                <div className="result-value-group">
                                    <span className="result-value">{formatNumber(totalAmount)}원</span>
                                    <button onClick={() => handleCopy(totalAmount.toString(), 'total')} className="btn-copy">
                                        {copiedField === 'total' ? <CheckCheck size={16} /> : <Copy size={16} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Guide Content for SEO */}
                    <article className="content-article card">
                        <h2>부가가치세(VAT) 계산 방법 가이드</h2>

                        <div className="content-block">
                            <h3>💡 부가세 포함 vs 별도, 어떻게 다른가요?</h3>
                            <p>
                                사업을 하다 보면 자금을 입금받거나 결제할 때 <b>'부가세 별도'</b>인지 <b>'부가세 포함'</b>인지
                                혼동될 때가 많습니다. 특히 견적서나 세금계산서를 발행할 때 계산 실수가 발생하면 세금 신고 시 불이익을 받을 수 있습니다.
                            </p>
                            <ul>
                                <li><b>부가세 포함(합계금액 기준)</b>: 소비자가 최종 결제한 금액입니다. 음식점, 소매업 등 B2C 거래에서 주로 사용합니다.</li>
                                <li><b>부가세 별도(공급가액 기준)</b>: 실제 물건 가격입니다. 제조업, 도매업 등 B2B 거래에서 주로 사용하며, 여기에 10% 세율을 더해 청구합니다.</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>📊 부가세 계산 공식</h3>
                            <div className="formula-box">
                                <p><b>VAT 포함 금액에서 공급가액 구하기:</b></p>
                                <code>공급가액 = 합계금액 ÷ 1.1</code>
                                <p><b>VAT 포함 금액에서 세액 구하기:</b></p>
                                <code>부가가치세 = 합계금액 - (합계금액 ÷ 1.1)</code>
                            </div>
                            <p>
                                예를 들어 110,000원을 결제받았다면, 나누기 1.1을 하여 공급가액은 100,000원이 되고,
                                나머지 10,000원이 부가세가 됩니다.
                            </p>
                        </div>

                        <div className="content-block">
                            <h3>⚠️ 사업자 필독 주의사항</h3>
                            <p>
                                일반과세자는 10% 세율이 적용되지만, 간이과세자는 업종별 부가가치율이 적용되어
                                실제 납부 세액이 다를 수 있습니다. 하지만 거래 상대방에게 세금계산서(또는 현금영수증)를
                                발행할 때는 위 계산기처럼 표준 10% 세율로 표기하여 발행하는 것이 일반적입니다.
                            </p>
                        </div>
                    </article>
                </div>
            </div>

            <style>{`
        .calculator-layout {
          display: grid;
          gap: var(--space-8);
          max-width: 800px;
          margin: 0 auto;
        }
        
        .calculator-card {
          border: 1px solid var(--border-color);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-6);
          padding-bottom: var(--space-4);
          border-bottom: 1px solid var(--border-color);
        }
        
        .card-title {
          font-size: var(--text-2xl);
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin: 0;
        }
        .icon-gold { color: var(--secondary); }

        .btn-reset {
          color: var(--text-muted);
          transition: 0.2s;
        }
        .btn-reset:hover { color: var(--primary); transform: rotate(45deg); }

        /* Tabs */
        .tab-group {
          display: flex;
          gap: var(--space-2);
          background: var(--bg-page);
          padding: 4px;
          border-radius: var(--radius-md);
        }
        .tab {
          flex: 1;
          padding: 10px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          color: var(--text-sub);
          transition: 0.2s;
        }
        .tab.active {
          background: white;
          color: var(--primary);
          box-shadow: var(--shadow-sm);
        }

        .input-lg {
          font-size: var(--text-xl);
          font-weight: 700;
          padding: 1rem;
        }

        /* Results */
        .result-section {
          background: var(--bg-page);
          border-radius: var(--radius-md);
          padding: var(--space-6);
          margin-top: var(--space-6);
        }
        .result-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-3);
          padding: var(--space-2) 0;
        }
        .total-row {
          margin-top: var(--space-4);
          padding-top: var(--space-4);
          border-top: 1px dashed var(--border-color);
          font-weight: 700;
          font-size: var(--text-lg);
        }
        .result-label {
          color: var(--text-sub);
        }
        .result-value-group {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        .result-value {
          font-feature-settings: "tnum";
          font-weight: 600;
        }
        .result-value.accent {
          color: var(--secondary);
        }
        .btn-copy {
          padding: 4px;
          color: var(--text-muted);
        }
        .btn-copy:hover { color: var(--primary); }

        /* Article */
        .content-article {
          padding: var(--space-8);
        }
        .content-article h2 { margin-bottom: var(--space-6); }
        .content-article h3 { 
          font-size: var(--text-lg); 
          margin-top: var(--space-6);
          margin-bottom: var(--space-3);
        }
        .content-block { margin-bottom: var(--space-6); }
        .content-block p { color: var(--text-sub); margin-bottom: var(--space-4); }
        .content-block ul { 
          padding-left: 20px; 
          color: var(--text-sub); 
        }
        .content-block li { margin-bottom: 8px; }
        
        .formula-box {
          background: var(--bg-page);
          padding: var(--space-4);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--secondary);
          margin: var(--space-4) 0;
        }
        .formula-box code {
          display: block;
          font-weight: 700;
          color: var(--primary);
          margin: 8px 0 16px;
          font-size: 1.1em;
        }
      `}</style>
        </>
    );
};
