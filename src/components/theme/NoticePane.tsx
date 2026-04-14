
interface Props {
    disable?: boolean;
}

const NoticePane = ({disable}: Props) => {
  if (disable) {
    return null;
  }
  return (
    <div className="w-full p-5 mt-10 rounded-lg text-center text-base border ">
      <h2 className="text-2xl font-bold text-blue-500 my-4">2026년 중소기업 CBAM 대응 인프라(MRV) 구축 사업</h2>
      중소벤처기업부의 「2026년 중소기업 CBAM 대응 인프라(MRV) 구축 사업」 을 통해 중소기업의 체계적인 배출량 관리 기반 구축을 지원합니다.<br/>
      하나루프는 해당 사업의 수행기관으로서, 참여를 희망하는 기업에 MRV 체계 구축 전반에 대한 통합 지원을 제공합니다.

      <div className="w-full  p-6">
        <button className="hover:text-white bg-blue-500 text-white rounded-md p-3">
          <a href="/blog/2026/20260406-digital-mrv" target="_blank" className="no-underline">구축 사업 내용 확인하기</a>
        </button>
        
      </div>
    </div>
  )
}

export default NoticePane
