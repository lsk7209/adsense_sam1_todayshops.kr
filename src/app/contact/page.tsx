export const metadata = {
    title: '문의하기 - 오늘의매장',
    description: '오늘의매장 관련 제휴, 오류 신고, 기타 문의를 남겨주세요.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-2xl">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">문의하기</h1>

            <p className="text-gray-600 mb-8">
                서비스 이용 중 불편한 점이나 제휴 문의는 아래 양식을 통해 보내주세요.
                <br />평일 기준 24시간 이내에 답변 드리겠습니다.
            </p>

            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="example@email.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">문의 유형</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                        <option>정보 수정 요청</option>
                        <option>서비스 오류 신고</option>
                        <option>제휴 문의</option>
                        <option>기타</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
                    <textarea
                        rows={5}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="구체적인 내용을 적어주세요."
                    ></textarea>
                </div>

                <button
                    type="button" // Static demo, so type button
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    문의 보내기
                </button>
            </form>
        </div>
    );
}
