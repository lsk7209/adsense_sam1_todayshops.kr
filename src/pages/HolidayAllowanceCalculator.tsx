import { useState } from 'react';
import { SEO } from '../components/layout/SEO';
import { Copy, RefreshCw, CheckCheck, Info, Calendar } from 'lucide-react';

export const HolidayAllowanceCalculator = () => {
    const [hourlyRate, setHourlyRate] = useState('');
    const [weeklyHours, setWeeklyHours] = useState('');
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const numericHourlyRate = parseFloat(hourlyRate.replace(/,/g, '')) || 0;
    const numericWeeklyHours = parseFloat(weeklyHours) || 0;

    // Logic: (Weekly Hours / 40) * 8 * Hourly Rate
    // If Weekly Hours > 40, cap calculation base at 40 (max 8hrs allowance usually)
    // Eligibility: Must work 15+ hours/week

    const isEligible = numericWeeklyHours >= 15;

    // Calculate standard hours per week (usually 40)
    const standardWeekHours = 40;

    // Allowance Hours = (Work Hours / 40) * 8
    // Cap work hours at 40 for this calculation part to ensure max 8hrs allowance
    const calculationHours = Math.min(numericWeeklyHours, standardWeekHours);

    const allowanceHours = (calculationHours / standardWeekHours) * 8;
    const holidayAllowance = Math.floor(allowanceHours * numericHourlyRate);

    const totalWeeklyPay = (numericWeeklyHours * numericHourlyRate) + holidayAllowance;
    const estimatedMonthlyPay = Math.floor(totalWeeklyPay * 4.345); // Average weeks per month

    const formatNumber = (num: number) => new Intl.NumberFormat('ko-KR').format(num);

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 1500);
    };

    return (
        <>
            <SEO
                title="주휴수당 계산기 - 2025 최저시급/알바 주휴수당 조건 완벽정리"
                description="아르바이트 주휴수당 지급 조건(15시간 이상)과 계산법을 확인하세요. 2025년 최저시급 기준 예상 주휴수당을 1초 만에 계산해드립니다."
                keywords="주휴수당 계산기, 알바 주휴수당 조건, 2025 최저시급, 주휴수당 계산법, 아르바이트 계산기"
            />
            <div className="container section">
                <div className="calculator-layout">
                    {/* Calculator Card */}
                    <div className="card calculator-card">
                        <div className="card-header">
                            <h1 className="card-title">
                                <Calendar className="icon-gold" size={28} />
                                주휴수당 계산기
                            </h1>
                            <button onClick={() => { setHourlyRate(''); setWeeklyHours(''); }} className="btn-reset" aria-label="초기화">
                                <RefreshCw size={20} />
                            </button>
                        </div>

                        <div className="input-section">
                            <div className="input-group">
                                <label className="label">시급 (원)</label>
                                <input
                                    type="text"
                                    className="input input-lg"
                                    value={hourlyRate ? Number(hourlyRate.replace(/,/g, '')).toLocaleString() : ''}
                                    onChange={(e) => setHourlyRate(e.target.value.replace(/[^0-9]/g, ''))}
                                    placeholder="2025년 최저시급: 10,030원"
                                />
                            </div>
                            <div className="input-group">
                                <label className="label">주간 근무 시간 (시간)</label>
                                <input
                                    type="number"
                                    className="input input-lg"
                                    value={weeklyHours}
                                    onChange={(e) => setWeeklyHours(e.target.value)}
                                    placeholder="예: 20"
                                />
                                <p className="help-text">일주일 동안 일하는 총 시간</p>
                            </div>
                        </div>

                        {numericHourlyRate > 0 && numericWeeklyHours > 0 ? (
                            <div className="result-section">
                                {isEligible ? (
                                    <>
                                        <div className="result-row highlight-row">
                                            <span className="result-label">예상 주휴수당 (주급)</span>
                                            <div className="result-value-group">
                                                <span className="result-value accent">{formatNumber(holidayAllowance)}원</span>
                                                <button onClick={() => handleCopy(holidayAllowance.toString(), 'allowance')} className="btn-copy">
                                                    {copiedField === 'allowance' ? <CheckCheck size={16} /> : <Copy size={16} />}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="detail-table">
                                            <div className="detail-row">
                                                <span>기본 주급 (근무시간 × 시급)</span>
                                                <span>{formatNumber(numericWeeklyHours * numericHourlyRate)}원</span>
                                            </div>
                                            <div className="detail-row sub">
                                                <span>+ 주휴수당</span>
                                                <span className="plus">+{formatNumber(holidayAllowance)}원</span>
                                            </div>
                                            <div className="divider" />
                                            <div className="detail-row header-row">
                                                <span>총 주급 합계</span>
                                                <span className="total">{formatNumber(totalWeeklyPay)}원</span>
                                            </div>
                                            <div className="detail-row sub-detail">
                                                <span>예상 월급 (주급 × 4.345주)</span>
                                                <span>약 {formatNumber(estimatedMonthlyPay)}원</span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="not-eligible">
                                        <h3>⚠️ 주휴수당 대상이 아닙니다</h3>
                                        <p>
                                            주간 근무 시간이 <strong>15시간 미만</strong>인 경우,
                                            근로기준법상 주휴수당 지급 대상에서 제외됩니다.
                                        </p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="empty-state">
                                <Info size={48} color="var(--border-color)" />
                                <p>시급과 근무 시간을 입력하면 주휴수당이 계산됩니다.</p>
                            </div>
                        )}
                    </div>

                    {/* SEO Content Article */}
                    <article className="content-article card">
                        <h2>주휴수당, 나도 받을 수 있을까?</h2>
                        <div className="content-block">
                            <h3>✅ 주휴수당 지급 조건 3가지</h3>
                            <p>
                                다음 3가지 조건을 모두 충족해야 주휴수당을 받을 수 있습니다.
                            </p>
                            <ul>
                                <li><strong>1. 주 15시간 이상 근무</strong>: 일주일간 소정근로시간이 15시간 이상이어야 합니다.</li>
                                <li><strong>2. 개근</strong>: 계약한 날짜에 결근 없이 모두 출근해야 합니다. (지각/조퇴는 결근 아님)</li>
                                <li><strong>3. 계속 근로</strong>: 다음 주에도 출근이 예정되어 있어야 합니다. (퇴사하는 마지막 주에는 발생하지 않는다는 행정해석이 있음)</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>🧮 2025년 최저시급과 주휴수당</h3>
                            <p>
                                2025년 최저시급은 <strong>10,030원</strong>입니다.
                                주 40시간(하루 8시간, 주 5일) 근무 시, 주휴수당을 포함한 실질 시급은 약 12,036원 꼴이 됩니다.
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
                    color: var(--text-primary);
                    font-size: var(--text-lg);
                    margin-top: 8px;
                }
                .sub { color: var(--text-sub); }
                .sub-detail { color: var(--text-muted); padding-left: 0; font-size: var(--text-xs); margin-top: 4px; }
                .plus { color: var(--secondary); }
                .total { color: var(--primary); font-weight: 800; }
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

                .not-eligible {
                    text-align: center;
                    color: var(--error);
                    padding: var(--space-4);
                    background: #FEF2F2;
                    border-radius: var(--radius-md);
                }
                .not-eligible h3 { margin-bottom: var(--space-2); color: #DC2626; }
                .not-eligible p { color: #991B1B; font-size: var(--text-sm); line-height: 1.5; }
                
                .content-article { padding: var(--space-8); }
                .content-article h2 { margin-bottom: var(--space-6); }
                .content-article h3 {
                    font-size: var(--text-lg);
                    margin-top: var(--space-6);
                    margin-bottom: var(--space-3);
                    color: var(--primary);
                }
                .content-block p { color: var(--text-sub); line-height: 1.7; margin-bottom: var(--space-4); }
                .content-block ul { padding-left: 20px; color: var(--text-sub); line-height: 1.6; }
                .content-block li { margin-bottom: 8px; }
            `}</style>
        </>
    );
};
