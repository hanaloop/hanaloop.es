'use client';

import { usePathname } from 'next/navigation';
import { getLocaleFromPathname, toClientHref } from '@/lib/locales';

const CBAMBanner = () => {
    const pathname = usePathname();
    const locale = getLocaleFromPathname(pathname);

    return (
        <div className="w-full p-5 mt-10 rounded-lg text-center text-base border ">
            <h2 className="text-2xl font-bold text-blue-500 my-4">EU CBAM 확정기 점검 단독 세션 안내</h2>
            CBAM 실제 상황에 맞춘 실무 중심의 맞춤형 세션 <br/>
            <a href={toClientHref(locale, '/blog/2025/20250405-cbam-support-program#지원조건-및-자격')}>EU CBAM 확정기 점검 단독 세션 상세 내용 링크</a><br/>

            <div className="w-full  p-6">
                <button className="hover:text-white bg-blue-500 text-white rounded-md p-3">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSelfVDwZQvntubPe__5fbxvGFtavpuxJ7HjTkMIKVWllkh10g/viewform" target="_blank" className="no-underline">세션 신청하기</a>
                </button>
                <div className="pt-3 text-sm">추가 비용 없이 진행되는 프로그램으로 편히 문의 주세요.</div>
            </div>
        </div>
    )
}

export default CBAMBanner
