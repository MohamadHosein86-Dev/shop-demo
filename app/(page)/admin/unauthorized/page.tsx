import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 mb-4">دسترسی غیرمجاز</h1>
        <p className="text-gray-600 mb-6">شما دسترسی لازم برای مشاهده این صفحه را ندارید. لطفاً ابتدا وارد شوید.</p>
        <Link href="/admin/login" className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          ورود به پنل ادمین
        </Link>
      </div>
    </div>
  );
}
