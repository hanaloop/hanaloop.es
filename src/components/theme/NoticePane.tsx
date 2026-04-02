
interface Props {
    disable?: boolean;
}

const NoticePane = ({disable}: Props) => {
  if (disable) {
    return null;
  }
  return (
    <div className="w-full p-5 mt-10 rounded-lg text-center text-base border ">
      <h2 className="text-2xl font-bold text-blue-500 my-4">EU CBAM 확정기 점검 단독 세션 안내</h2>
      CBAM 실제 상황에 맞춘 실무 중심의 맞춤형 세션<br/>
      <a href="/blog/2026/20260331-cbam-session">EU CBAM 확정기 점검 단독 세션 상세 내용 링크</a><br/>

      <div className="w-full  p-6">
        <button className="hover:text-white bg-blue-500 text-white rounded-md p-3">
          <a href="https://calendar.app.google/eeasmqr7gkWh3Nvr9" target="_blank" className="no-underline">세션 신청하기</a>
        </button>
        <div className="pt-3 text-sm">추가 비용 없이 진행되는 프로그램으로 편히 문의 주세요.</div>
      </div>
    </div>
  )
}

export default NoticePane
