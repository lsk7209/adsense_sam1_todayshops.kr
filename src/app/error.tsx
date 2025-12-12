'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-red-100">
                <div className="text-6xl mb-6">⚠️</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">오류가 발생했습니다</h2>
                <p className="text-slate-600 mb-8 text-sm">
                    잠시 후 다시 시도해 주세요.<br />
                    문제가 지속되면 관리자에게 문의 바랍니다.
                </p>
                <div className="flex gap-3">
                    <button
                        onClick={() => reset()}
                        className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-lg font-bold hover:bg-slate-200 transition-colors"
                    >
                        다시 시도
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                        홈으로
                    </button>
                </div>
            </div>
        </div>
    );
}
