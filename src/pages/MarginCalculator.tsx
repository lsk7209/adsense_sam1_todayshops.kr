import { useState } from 'react';
import { SEO } from '../components/layout/SEO';
import { TrendingUp, RefreshCw, Copy, CheckCheck } from 'lucide-react';

type CalcMode = 'margin' | 'price';

export const MarginCalculator = () => {
    const [mode, setMode] = useState<CalcMode>('margin');
    const [cost, setCost] = useState('');
    const [price, setPrice] = useState(''); // Used in 'margin' mode
    const [targetMargin, setTargetMargin] = useState(''); // Used in 'price' mode
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const numCost = parseFloat(cost.replace(/,/g, '')) || 0;
    const numPrice = parseFloat(price.replace(/,/g, '')) || 0;
    const numTargetMargin = parseFloat(targetMargin) || 0;

    let resultMargin = 0;
    let resultProfit = 0;
    let resultMarkup = 0;
    let resultPrice = 0;

    if (mode === 'margin') {
        // 마진율 계산 모드
        if (numPrice > 0) {
            resultProfit = numPrice - numCost;
            resultMargin = (resultProfit / numPrice) * 100;
            resultMarkup = numCost > 0 ? (resultProfit / numCost) * 100 : 0;
        }
    } else {
        // 판매가 계산 모드 (목표 마진율 기준)
        // Margin = (Price - Cost) / Price
        // Price * Margin = Price - Cost
        // Cost = Price * (1 - Margin)
        // Price = Cost / (1 - Margin)
        if (numTargetMargin < 100) {
            resultPrice = numCost / (1 - numTargetMargin / 100);
            resultProfit = resultPrice - numCost;
            resultMargin = numTargetMargin;
        }
    }

    const formatNumber = (num: number) => new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 0 }).format(num);
    const formatPercent = (num: number) => new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 2 }).format(num);

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 1500);
    };

    const handleReset = () => {
        setCost('');
        setPrice('');
        setTargetMargin('');
    };

    return (
        <>
            <SEO
                title="마진율 계산기 - 이익률, 마크업, 판매가 설정"
                description="매입가와 판매가를 입력하여 마진율과 순이익을 계산하세요. 목표 마진율에 따른 적정 판매가 계산 기능 포함. 쇼핑몰, 도소매 필수 도구."
                keywords="마진율 계산기, 마크업 계산, 이익률 계산, 판매가 계산기, 마진 계산법, 손익분기점"
            />
            <div className="container section">
                <div className="calculator-layout">

                    <div className="card calculator-card">
                        <div className="card-header">
                            <h1 className="card-title">
                                <TrendingUp className="icon-gold" size={28} />
                                마진율 계산기
                            </h1>
                            <button onClick={handleReset} className="btn-reset" aria-label="초기화">
                                <RefreshCw size={20} />
                            </button>
                        </div>

                        <div className="input-section">
                            <div className="input-group">
                                <label className="label">계산 모드</label>
                                <div className="tab-group">
                                    <button
                                        className={`tab ${mode === 'margin' ? 'active' : ''}`}
                                        onClick={() => setMode('margin')}
                                    >
                                        마진율 구하기
                                    </button>
                                    <button
                                        className={`tab ${mode === 'price' ? 'active' : ''}`}
                                        onClick={() => setMode('price')}
                                    >
                                        판매가 구하기
                                    </button>
                                </div>
                            </div>

                            <div className="input-group">
                                <label className="label">매입가 (원가)</label>
                                <input
                                    type="text"
                                    className="input input-lg"
                                    value={cost ? Number(cost.replace(/,/g, '')).toLocaleString() : ''}
                                    onChange={(e) => setCost(e.target.value.replace(/[^0-9]/g, ''))}
                                    placeholder="0"
                                />
                            </div>

                            {mode === 'margin' ? (
                                <div className="input-group">
                                    <label className="label">판매가</label>
                                    <input
                                        type="text"
                                        className="input input-lg"
                                        value={price ? Number(price.replace(/,/g, '')).toLocaleString() : ''}
                                        onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ''))}
                                        placeholder="0"
                                    />
                                </div>
                            ) : (
                                <div className="input-group">
                                    <label className="label">목표 마진율 (%)</label>
                                    <input
                                        type="number"
                                        className="input input-lg"
                                        value={targetMargin}
                                        onChange={(e) => setTargetMargin(e.target.value)}
                                        placeholder="예: 30"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="result-section">
                            {mode === 'margin' ? (
                                <>
                                    <div className="result-row highlight-row">
                                        <span className="result-label">마진율 (Margin)</span>
                                        <div className="result-value-group">
                                            <span className="result-value accent">{formatPercent(resultMargin)}%</span>
                                        </div>
                                    </div>
                                    <div className="result-row">
                                        <span className="result-label">마크업 (Markup)</span>
                                        <span className="result-value">{formatPercent(resultMarkup)}%</span>
                                    </div>
                                    <div className="result-row total-row">
                                        <span className="result-label">총 이익금</span>
                                        <div className="result-value-group">
                                            <span className="result-value">{formatNumber(resultProfit)}원</span>
                                            <button onClick={() => handleCopy(resultProfit.toString(), 'profit')} className="btn-copy">
                                                {copiedField === 'profit' ? <CheckCheck size={16} /> : <Copy size={16} />}
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="result-row highlight-row">
                                        <span className="result-label">권장 판매가</span>
                                        <div className="result-value-group">
                                            <span className="result-value accent">{formatNumber(resultPrice)}원</span>
                                            <button onClick={() => handleCopy(Math.round(resultPrice).toString(), 'price')} className="btn-copy">
                                                {copiedField === 'price' ? <CheckCheck size={16} /> : <Copy size={16} />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="result-row total-row">
                                        <span className="result-label">예상 이익금</span>
                                        <span className="result-value">{formatNumber(resultProfit)}원</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Guide Content */}
                    <article className="content-article card">
                        <h2>마진율(Margin) vs 마크업(Markup) 완벽 정리</h2>

                        <div className="content-block">
                            <h3>🤔 사장님이 헷갈리는 '마진'의 진실</h3>
                            <p>
                                "원가 10,000원짜리를 20% 남기고 싶어서 12,000원에 팔았는데, 정산해보니 돈이 안 맞아요!"<br />
                                많은 초보 사업자분들이 <b>마진(Margin)</b>과 <b>마크업(Markup)</b>을 혼동하여 판매가를 잘못 설정하는 경우가 많습니다.
                            </p>
                            <ul>
                                <li><b>마진율 (이익률)</b>: 판매가 대비 이익의 비율입니다. "판매가의 몇 %를 내가 가져가는가?"</li>
                                <li><b>마크업 (가산율)</b>: 원가 대비 붙이는 이익의 비율입니다. "원가에 몇 %를 더 붙일 것인가?"</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>📝 마진율 계산 공식</h3>
                            <div className="formula-box">
                                <p><b>마진율 공식 (Margin):</b></p>
                                <code>마진율(%) = (판매가 - 원가) ÷ 판매가 × 100</code>
                                <p><b>마크업 공식 (Markup):</b></p>
                                <code>마크업(%) = (판매가 - 원가) ÷ 원가 × 100</code>
                            </div>
                            <p>
                                예를 들어 원가 10,000원을 20,000원에 팔면?<br />
                                이익은 10,000원입니다. 이때 <b>마크업은 100%</b>이지만, <b>마진율은 50%</b>입니다.
                                손익분기점 계산이나 플랫폼 수수료(판매가 기준 징수)를 고려할 때는 반드시 <b>'마진율'</b> 기준으로 계산해야 손해를 보지 않습니다.
                            </p>
                        </div>

                        <div className="content-block">
                            <h3>💡 적정 판매가 설정 팁</h3>
                            <p>
                                오픈마켓(스마트스토어, 쿠팡 등) 수수료가 보통 10~15% 내외임을 감안하면,
                                최소한 <b>마진율 25~30%</b> 이상을 목표로 잡아야 광고비와 운영비를 제하고도 순수익을 남길 수 있습니다.
                                위 계산기의 '판매가 구하기' 모드를 활용하여 목표 마진에 맞는 판매가를 시뮬레이션 해보세요.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};
