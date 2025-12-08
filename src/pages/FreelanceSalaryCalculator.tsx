import { useState } from 'react';
import { SEO } from '../components/layout/SEO';
import { Calculator, Copy, RefreshCw, CheckCheck, Info } from 'lucide-react';

export const FreelanceSalaryCalculator = () => {
    const [amount, setAmount] = useState('');
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const numericAmount = parseFloat(amount.replace(/,/g, '')) || 0;

    // 3.3% Tax Calculation
    const taxRate = 0.033; // 3% Income Tax + 0.3% Local Tax
    const taxAmount = Math.floor(numericAmount * taxRate); // Floor to integer
    const netPay = numericAmount - taxAmount;

    // Breakdown
    const incomeTax = Math.floor(numericAmount * 0.03);
    const localIncomeTax = taxAmount - incomeTax; // Ensure total matches 3.3%

    const formatNumber = (num: number) => new Intl.NumberFormat('ko-KR').format(num);

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 1500);
    };

    return (
        <>
            <SEO
                title="프리랜서 3.3% 계산기 - 알바소득세/실수령액 자동계산 (2025)"
                description="프리랜서, 아르바이트 급여 실수령액을 3.3% 세금 공제 기준으로 정확히 계산해드립니다. 3.3% 계산법과 환급 방법까지 확인하세요."
                keywords="프리랜서 계산기, 3.3% 계산기, 알바 세금 계산기, 3.3프로 계산, 실수령액 계산기"
            />
            <div className="container section">
                <div className="calculator-layout">
                    {/* Calculator Card */}
                    <div className="card calculator-card">
                        <div className="card-header">
                            <h1 className="card-title">
                                <Calculator className="icon-gold" size={28} />
                                프리랜서 3.3% 실수령액 계산기
                            </h1>
                            <button onClick={() => setAmount('')} className="btn-reset" aria-label="초기화">
                                <RefreshCw size={20} />
                            </button>
                        </div>

                        <div className="input-section">
                            <div className="input-group">
                                <label className="label">지급 총액 (세전)</label>
                                <input
                                    type="text"
                                    className="input input-lg"
                                    value={amount ? Number(amount.replace(/,/g, '')).toLocaleString() : ''}
                                    onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
                                    placeholder="예: 1,000,000"
                                />
                                <p className="help-text">계약된 금액을 입력하세요</p>
                            </div>
                        </div>

                        {numericAmount > 0 ? (
                            <div className="result-section">
                                <div className="result-row highlight-row">
                                    <span className="result-label">실수령액</span>
                                    <div className="result-value-group">
                                        <span className="result-value accent">{formatNumber(netPay)}원</span>
                                        <button onClick={() => handleCopy(netPay.toString(), 'net')} className="btn-copy">
                                            {copiedField === 'net' ? <CheckCheck size={16} /> : <Copy size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="detail-table">
                                    <div className="detail-row header-row">
                                        <span>항목</span>
                                        <span>금액</span>
                                    </div>
                                    <div className="detail-row">
                                        <span>지급 총액</span>
                                        <span>{formatNumber(numericAmount)}원</span>
                                    </div>
                                    <div className="divider" />
                                    <div className="detail-row sub">
                                        <span>원천징수세 (3.3%)</span>
                                        <span className="deduction">-{formatNumber(taxAmount)}원</span>
                                    </div>
                                    <div className="detail-row sub-detail">
                                        <span>└ 소득세 (3%)</span>
                                        <span>{formatNumber(incomeTax)}원</span>
                                    </div>
                                    <div className="detail-row sub-detail">
                                        <span>└ 지방소득세 (0.3%)</span>
                                        <span>{formatNumber(localIncomeTax)}원</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="empty-state">
                                <Info size={48} color="var(--border-color)" />
                                <p>금액을 입력하면 공제액과 실수령액이 계산됩니다.</p>
                            </div>
                        )}
                    </div>

                    {/* SEO Content Article */}
                    <article className="content-article card">
                        <h2>프리랜서 3.3% 세금이란?</h2>
                        <div className="content-block">
                            <h3>💡 누가 3.3%를 떼나요?</h3>
                            <p>
                                회사에 소속되지 않고 독립적으로 용역을 제공하는 **프리랜서**나 **아르바이트(일용직 제외)**의 경우,
                                사업소득세(3%)와 지방소득세(0.3%)를 합쳐 총 **3.3%**를 원천징수하고 급여를 받습니다.
                                4대보험 가입자가 아닌 경우 대부분 이 방식이 적용됩니다.
                            </p>
                        </div>

                        <div className="content-block">
                            <h3>💰 떼인 세금, 돌려받을 수 있나요?</h3>
                            <p>
                                **네, 받으실 수도 있습니다.**<br />
                                매년 5월 **종합소득세 신고 기간**에 신고를 하면, 1년 동안 낸 세금(기납부세액)과
                                실제 소득 대비 내야 할 세금(결정세액)을 비교합니다.
                            </p>
                            <p>
                                소득이 적어 결정세액이 0원이라면, 미리 냈던 3.3% 세금을 **전액 환급**받을 수 있습니다.
                                "삼쩜삼" 같은 서비스나 홈택스를 통해 5년 전 내역까지 조회 가능하니 꼭 챙기시길 바랍니다.
                            </p>
                        </div>

                        <div className="content-block">
                            <h3>⚠️ 주의사항</h3>
                            <p>
                                월 소득이 일정 수준 이상이거나 고용 기간이 길어지면 **4대보험 가입 대상**이 될 수 있습니다.
                                이 경우 3.3% 공제가 아닌 4대보험료 공제 후 실수령액을 계산해야 하므로,
                                본인의 계약 형태(근로자 vs 프리랜서)를 정확히 확인하시기 바랍니다.
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

                .input-section { margin-bottom: var(--space-6); }
                .input-group { margin-bottom: var(--space-4); }
                .input-lg {
                    font-size: var(--text-xl);
                    font-weight: 700;
                    padding: 1rem;
                }
                .help-text {
                    font-size: var(--text-xs);
                    color: var(--text-muted);
                    margin-top: 4px;
                }

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
                }
                .result-label { color: var(--text-sub); }
                .result-value-group {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                }
                .result-value.accent {
                    color: var(--secondary);
                    font-size: var(--text-2xl);
                    font-weight: 800;
                }
                .btn-copy { color: var(--text-muted); padding: 4px; }
                .btn-copy:hover { color: var(--primary); }

                .detail-table {
                    margin-top: var(--space-6);
                    border-top: 1px solid var(--border-color);
                    font-size: var(--text-sm);
                }
                .detail-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 8px 0;
                }
                .header-row {
                    font-weight: 700;
                    color: var(--text-sub);
                    border-bottom: 1px dashed var(--border-color);
                    margin-bottom: 8px;
                }
                .sub { color: var(--text-sub); padding-left: 8px; }
                .sub-detail { color: var(--text-muted); padding-left: 20px; font-size: var(--text-xs); }
                .deduction { color: var(--error); }
                .divider {
                    height: 1px;
                    background: var(--border-color);
                    margin: 8px 0;
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
                
                .content-article { padding: var(--space-8); }
                .content-article h2 { margin-bottom: var(--space-6); }
                .content-article h3 {
                    font-size: var(--text-lg);
                    margin-top: var(--space-6);
                    margin-bottom: var(--space-3);
                    color: var(--primary);
                }
                .content-block p { color: var(--text-sub); line-height: 1.7; margin-bottom: var(--space-4); }
            `}</style>
        </>
    );
};
