import { DisplayItem } from "../../libs/types"

const termsKo: DisplayItem[] = [
  {
    title: "대표농도경로(RCP, Representative Concentration Pathway) 시나리오",
    description: "RCP 시나리오는 인간 활동이 대기에 미치는 복사불균형량으로 온실가스 농도를 정하였습니다. 복사강제력을 대표로 하여 사회·경제 시나리오는 여러 가지가 될 수 있다는 의미에서 ‘대표'라는 표현을 사용하고 온실가스 배출 시나리오의 시간에 따른 변화를 강조하기 위해 ’경로'라는 의미를 포함합니다. 4개의 RCP 시나리오 중 RCP8.5 시나리오는 감축 없이 현재 추세로 온실가스가 배출되는 경우를 전망하는 것이고, RCP2.6 시나리오는 지구 스스로 회복가능한 수준으로 온실가스 감축이 이루어지는 경우로 파리협정에서 제시된 목표에 가장 근접하는 시나리오입니다.",
    source: "환경부",
    sourceUrl: "http://www.me.go.kr/home/web/dictionary/read.do?pagerOffset=340&maxPageItems=10&maxIndexPages=10&searchKey=&searchValue=&menuId=10448&orgCd=&boardMasterId=&dicSeq=347&decorator="
  },
  {
    title: "탄소 어카운팅(Carbon Accounting)",
    description: "탄소 회계. 기업의 사업활동으로 인해 발생하는 온실가스 배출량과 감축량을 탄소로 환산하는 과정을 지칭합니다.",
    source: "요다위키",
    sourceUrl: "https://yoda.wiki/wiki/Carbon_accounting"
  },
  {
    title: "온실가스 배출권거래제",
    description: "정부가 온실가스를 배출하는 사업장을 대상으로 연단위 배출권 할당하여 할당범위 내에서 배출행위를 할 수 있도록 하고, 할당된 사업장의 실질적 온실가스 배출량을 평가하여 여분 또는 부족분의 배출권에 대하여는 사업장간 거래를 허용하는 제도입니다. 사업장간 자유로운 거래를 통하여 업체의 온실가스 감축활동을 유도하고 기후변화에 대응하는 것을 목표로 합니다.",
    source: "한국환경공단",
    sourceUrl: "https://www.keco.or.kr/kr/business/climate/contentsid/1520/index.do"
  },
  {
    title: "온실가스",
    description: "지구온난화의 원인이 되는 대기 중 가스형태의 물질을 지칭합니다. 지표면에서 반사되는 복사에너지를 흡수해 지구온도를 높이는 온실효과를 일으킵니다. 교토의정서에서 규제대상으로 규정한 6대 온실가스는 이산화탄소(CO₂), 메탄(CH₄), 아산화질소(N₂O), 수소불화탄소(HFCs), 과불화탄소(PFCs), 육불화황(SF·)이지만, 이 중 이산화탄소의 양이 가장 많아 온난화에 가장 큰 영향을 미칩니다. 온실가스는 원래 지구 온도 유지에 꼭 필요한 존재이지만, 산업화 이후 이산화탄소 등 온실가스가 과다배출되면서 온난화가 급속히 진행되고 있습니다.",
    source: "환경부",
    sourceUrl: "https://www.me.go.kr/home/web/dictionary/read.do?pagerOffset=0&maxPageItems=10&maxIndexPages=10&searchKey=&searchValue=&menuId=10448&orgCd=&condition.createDeptName=%EC%98%A8%EC%8B%A4%EA%B0%80%EC%8A%A4&boardMasterId=&dicSeq=896&decorator"
  },
  {
    title: "탄소중립",
    description: "대기 중 이산화탄소 농도 증가를 막기 위해 인간 활동에 의한 배출량은 최대한 감소시키고, 흡수량은 증대하여 순 배출량이 ‘0’이 된 상태를 의미합니다. 인간 활동으로 배출하는 온실가스(+요인)는 최대한 줄이고, 배출되는 온실가스는 산림 흡수나 CCUS로 제거(-요인)하여 실질적인 배출량을 ‘0’ 수준으로 낮추는 것을 탄소중립(Net zero)이라고 합니다.",
    source: "탄소중립 녹생성장위원회",
    sourceUrl: "https://www.2050cnc.go.kr/base/contents/view?contentsNo=9&menuLevel=2&menuNo=11"
  },
];

const terms: DisplayItem[] = [
    {
    title: "CCUS, Carbon Capture, Utilization, Storage",
    description: "이산화탄소 포집, 저장, 활용 기술. CCUS기술은 이산화탄소가 생산되는 근원지에서부터 공기 중으로 방출되는 것을 막고(Carbon Capture) 필요한 곳에서 사용(Utilization)하거나 지하에 저장(Storage) 하는 기술입니다.",
    source: "대한민국 정책브리핑",
    sourceUrl: "https://www.korea.kr/news/visualNewsView.do?newsId=148886348"
  },
  {
    title: "PPM, parts per million",
    description: " 백만분의 일을 나타내는 영문 parts per million의 약자입니다. 일정한 부피의 물이나 유체의 무게가 1일 경우 이 속에 100만분의 1 무게 만큼의 오염 물질이 포함된 것을 말합니다.",
    source: "고용노동부 천안고용노동지청",
    sourceUrl: "https://www.moel.go.kr/local/cheonan/info/dataroom/view.do?bbs_seq=66005"
  },
  {
    title: "IPCC, Intergovernmental Panel on Climate Change",
    description: "기후 변화에 관한 정부 간 협의체. 기후변화와 관련된 전 지구적 위험을 평가하고 국제적 대책을 마련하기 위해 세계기상기구(WMO)와 유엔환경계획(UNEP)이 공동으로 설립한 유엔 산하 국제 협의체입니다. IPCC에는 전 세계 과학자가 참가해 기후변화 추세 및 원인규명, 기후변화에 따른 생태학적·사회경제적 영향 평가와 그에 대한 대응 전략을 분석한 보고서를 발간합니다. 기후 변화 문제의 해결을 위한 노력이 인정되어 2007년 노벨 평화상 수상하였습니다.",
    
    sourceUrl: "https://ko.wikipedia.org/wiki/기후_변화에_관한_정부간_협의체"
  },
   {
    title: "Business as Usual (BAU) / 온실가스 배출 전망치",
    description: "특별한 조치를 취하지 않을 경우 배출될 것으로 예상되는 미래 온실가스 배출전망치로, 감축목표 산정의 기준이 됩니다. 우리나라는 2015년 파리 기후변화회의를 앞두고 2015년 6월, 2030년 BAU(약 85천만톤) 대비 37%의 온실가스를 줄이겠다는 자발적 감축 목표를 UN 기후변화협약 사무국에 제출했습니다.",
    source: "환경부",
    sourceUrl: "https://me.go.kr/home/web/dictionary/read.do?pagerOffset=0&maxPageItems=10&maxIndexPages=10&searchKey=%E3%85%82&searchValue=&menuId=10448&orgCd=&condition.createDeptName=%EB%B0%B0%EC%B6%9C&boardMasterId=&dicSeq=8&decorator="
  },

]



module.exports = {
  termsKo: termsKo.sort((a, b) => (a.title.localeCompare(b.title))),
  terms: terms.sort((a, b) => (a.title.localeCompare(b.title)))
}
