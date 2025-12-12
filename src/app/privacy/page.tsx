export const metadata = {
    title: '개인정보 처리방침 - 오늘의매장',
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl text-gray-700">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">개인정보 처리방침</h1>

            <div className="prose max-w-none space-y-6">
                <section>
                    <h3 className="text-lg font-bold text-black">1. 개인정보의 처리 목적</h3>
                    <p>
                        '오늘의매장'(이하 '회사')은(는) 다음의 목적을 위하여 개인정보를 처리합니다.
                        처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며
                        이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등
                        필요한 조치를 이행할 예정입니다.
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-black">2. 처리하는 개인정보의 항목</h3>
                    <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                    <ul className="list-disc pl-5">
                        <li>쿠키(Cookie), 접속 로그, 접속 IP 정보 (통계 분석 및 서비스 안정화 목적)</li>
                        <li>문의하기 시: 이메일 주소 (선택적 수집)</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-black">3. 개인정보의 파기</h3>
                    <p>
                        회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는
                        지체없이 해당 개인정보를 파기합니다.
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-black">4. 쿠키의 운용 및 거부</h3>
                    <p>
                        회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는
                        ‘쿠키(cookie)’를 사용합니다. 이용자는 쿠키 설치에 대한 선택권을 가지고 있으며,
                        웹브라우저 옵션 설정을 통해 모든 쿠키를 허용하거나 거부할 수 있습니다.
                    </p>
                </section>

                <p className="text-sm text-gray-500 mt-8">
                    공고일자: 2025년 12월 10일<br />
                    시행일자: 2025년 12월 10일
                </p>
            </div>
        </div>
    );
}
