import { SEO } from '../../components/layout/SEO';
import { Link } from 'react-router-dom';

export const MarginVsMarkup = () => {
    return (
        <article className="guide-article">
            <SEO
                title="마진율 vs 마크업: 사장님 99%가 틀리는 계산법"
                description="마진(Margin)과 마크업(Markup)의 결정적 차이를 알아보고, 손해 보지 않는 판매가 설정 방법을 공개합니다."
                keywords="마진율 계산, 마크업 계산, 판매가 설정, 마진 계산기, 이익률 공식"
            />

            <h1>마진율 vs 마크업: 열심히 팔아도 남는 게 없다면?</h1>
            <p className="text-lg text-sub font-medium">
                "원가 10,000원짜리에 20% 이익 붙여서 12,000원에 팔았는데, 정산해보니 왜 적자일까요?"
                많은 초보 사장님들이 <strong>마진(Margin)</strong>과 <strong>마크업(Markup)</strong>을 혼동해서 겪는 실수입니다.
            </p>

            <div className="guide-callout">
                <strong>💡 핵심 차이점</strong>
                <ul className="list-disc pl-4 mt-2">
                    <li><strong>마크업(Markup):</strong> 원가에 덧붙이는 이익금 (원가 기준)</li>
                    <li><strong>마진(Margin):</strong> 판매가에서 남는 이익금 (판매가 기준)</li>
                </ul>
            </div>

            <h2>1. 치명적인 실수 예시</h2>
            <p>
                A카페 사장님은 원가 5,000원짜리 커피에 <strong>"30% 마진을 남겨야지"</strong> 생각하고,
                5,000원 × 1.3 = 6,500원에 팔았습니다.
            </p>
            <p>
                <strong>하지만 이건 마진 30%가 아닙니다!</strong>
                <br />
                6,500원에 팔아서 1,500원이 남았으니, 실제 마진율은 (1,500 ÷ 6,500) × 100 = <strong>약 23%</strong>에 불과합니다.
            </p>

            <h2>2. 올바른 판매가 설정 공식</h2>
            <p>
                진짜 마진 30%를 남기려면 어떻게 계산해야 할까요?
            </p>
            <div className="bg-bg-page p-4 rounded-md my-4 font-mono text-sm">
                판매가 = 원가 ÷ (1 - 목표마진율)
            </div>
            <p>
                위의 커피 예시에 적용해보면:
                <br />
                5,000 ÷ (1 - 0.3) = 5,000 ÷ 0.7 = <strong>7,143원</strong>
            </p>
            <p>
                즉, 7,150원 정도에 팔아야 목표했던 30% 마진을 지킬 수 있습니다.
                6,500원에 팔았다면 한 잔당 약 650원씩 손해를 보고 있었던 셈입니다.
            </p>

            <h2>3. 복잡한 계산을 한 번에</h2>
            <p>
                매번 계산기를 두드리며 (1 - 0.x)를 계산하기는 번거롭습니다.
                마진 계산기를 사용하면 '원가'와 '목표 마진율'만 입력해서 정확한 판매가를 바로 확인할 수 있습니다.
            </p>

            <div className="mt-8 p-6 bg-secondary/5 text-center rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-primary mb-2">손해 보지 않는 가격 결정하기</h3>
                <p className="mb-4 text-text-sub">마진율과 판매가를 헷갈리지 않고 정확하게 계산해보세요.</p>
                <Link to="/margin-calculator" className="btn btn-primary inline-flex items-center gap-2">
                    <span className="text-lg">📈</span> 마진 계산기 바로가기
                </Link>
            </div>
        </article>
    );
};
