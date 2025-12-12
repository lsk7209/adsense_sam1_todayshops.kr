import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-slate-100">
                <div className="text-6xl mb-6">🏪</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">페이지를 찾을 수 없습니다</h2>
                <p className="text-slate-600 mb-8">
                    요청하신 매장 정보나 페이지가 존재하지 않습니다.<br />
                    삭제되었거나 주소가 변경되었을 수 있습니다.
                </p>
                <Link
                    href="/"
                    className="block w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                    홈으로 돌아가기
                </Link>
            </div>
        </div>
    );
}
