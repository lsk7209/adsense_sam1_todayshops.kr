export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b h-16 mb-8"></header>
            <main className="container mx-auto px-4 py-8 animate-pulse">
                {/* Header Skeleton */}
                <div className="mb-8 border-b pb-6">
                    <div className="h-4 bg-slate-200 rounded w-1/3 mb-4"></div>
                    <div className="h-10 bg-slate-200 rounded w-1/2 mb-4"></div>
                    <div className="h-6 bg-slate-200 rounded w-1/4"></div>
                </div>

                {/* Content Skeleton */}
                <div className="mb-12">
                    <div className="h-8 bg-slate-200 rounded w-32 mb-6"></div>
                    <div className="h-32 bg-slate-200 rounded w-full"></div>
                </div>

                {/* Grid Skeleton */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="h-48 bg-slate-200 rounded"></div>
                    <div className="h-48 bg-slate-200 rounded"></div>
                </div>
            </main>
        </div>
    );
}
