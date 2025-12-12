export const metadata = {
    title: '서비스 소개 - 오늘의매장',
    description: '오늘의매장은 데이터와 기술로 로컬 비즈니스의 가치를 전달합니다.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">서비스 소개</h1>

            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4 text-blue-700">우리의 미션</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    **오늘의매장**은 수많은 로컬 가게들이 디지털 세상에서 소외되지 않도록 돕습니다.
                    단순한 주소와 전화번호를 넘어, 각 매장이 가진 고유의 매력과 이야기를 AI 기술로 발굴하여 전달합니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    우리는 데이터(Data)와 사람(Human), 그리고 기술(AI)을 연결하여
                    더 스마트한 로컬 라이프스타일을 제안합니다.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4 text-blue-700">핵심 기술</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>공공데이터 기반 실시간 상권 분석</li>
                    <li>Generative AI (Gemini Pro)를 활용한 마이크로 카피라이팅</li>
                    <li>Next.js 기반의 초고속 웹 퍼포먼스 및 SEO 최적화</li>
                </ul>
            </section>

            <div className="bg-gray-50 p-6 rounded-lg border">
                <p className="text-sm text-gray-500 text-center">
                    오늘의매장 프로젝트팀 | contact@today-shop.com
                </p>
            </div>
        </div>
    );
}
