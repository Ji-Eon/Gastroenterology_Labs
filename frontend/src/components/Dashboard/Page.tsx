import Carousel from "../Carousel/Carousel";
import thumnail from '../../assets/concept/y_thum_1.png';
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

  const images = [
    `https://media.istockphoto.com/id/2103894533/ko/%EC%82%AC%EC%A7%84/business-people-in-the-office.jpg?s=2048x2048&w=is&k=20&c=vYcB8srl-qvRU0d_ZzUkNokxaj-D_0OmzlzE78Q1Dqw=`,
    `https://cdn.pixabay.com/photo/2021/11/20/03/35/doctor-6810776_1280.png`,
    `https://media.istockphoto.com/id/1979289147/ko/%EC%82%AC%EC%A7%84/ai-%EA%B8%B0%EC%88%A0%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B6%84%EC%84%9D-%EA%B3%BC%ED%95%99%EA%B3%BC-%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B6%84%EC%84%9D%EA%B0%80-%EB%98%90%EB%8A%94-%EA%B3%BC%ED%95%99%EC%9E%90%EB%8A%94-%EC%BB%B4%ED%93%A8%ED%84%B0%EC%9D%98-%EB%B3%B5%EC%9E%A1%ED%95%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%84%B8%ED%8A%B8%EC%97%90-%EB%8C%80%ED%95%9C-%EC%A0%95%EB%B3%B4%EB%A5%BC-%EB%B6%84%EC%84%9D%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4-%EC%BB%B4%ED%93%A8%ED%84%B0%EC%99%80-%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%A9%EB%8B%88%EB%8B%A4-%EC%9D%B8%EC%82%AC%EC%9D%B4%ED%8A%B8-%EA%B0%9C%EB%B0%9C.jpg?s=2048x2048&w=is&k=20&c=7rVRtSPH75DCm8gAa1LCwwB5LXQNibdRkfuec_Dg5Cg=`
  ]

  const onClickMore = (url: string) => {
    navigate(url);
  };

  return (
    <main className="space-y-9 mb-20">
      <Carousel images={images} />
      <section className="flex justify-center">
        <h1 className="font-bold">Gastroenterology Labs AI Connecte Project</h1>
      </section>
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex gap-5 flex-wrap md:flex-nowrap">
          <div className="border border-gray-300 p-4 w-full min-w-96 h-[600px] col-start-1 mx-auto">
            <div className="flex justify-between">
              <h2 className='text-2xl mb-4 font-bold'>Paper</h2>
              <span onClick={()=>onClickMore('research')} className="cursor-pointer">more</span>
            </div>
            <ul className='space-y-2'>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
            </ul>
          </div>
          <div className="border border-gray-300 p-4 w-full min-w-96 h-[600px] col-start-1  mx-auto lg:col-start-2">
            <div className="flex justify-between">
              <h2 className='text-2xl mb-4 font-bold'>News</h2>
              <span onClick={()=>onClickMore('news')} className="cursor-pointer">more</span>
            </div>
            <ul className='space-y-2'>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
              <li className='flex justify-between cursor-pointer hover:text-gray-400'><span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="border border-gray-300 p-4 w-full h-[450px] mx-auto">
          <h2 className='text-2xl mb-4 font-bold'>Professor</h2>
          <div className='flex gap-5 justify-evenly flex-wrap md:flex-nowrap'>
            <div>
              <h3 className='text-xl mb-4 font-semibold'>학력</h3>
              <ul className='space-y-2'>
                <li>윤지대학교 대학원 의학박사 (내과학)</li>
                <li>윤지대학교 대학원 의학석사 (내과학)</li>
                <li>충남대학교 의과대학 학사</li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl mb-4 font-semibold'>경력 및 연수</h3>
              <ul className='space-y-2'>
                <li>(현) 중앙대학교병원 호흡기알레르기내과 임상부교수</li>
                <li>윤산의과대학 호흡기알레르기내과 부교수</li>
                <li>서울아산병원 임상강사</li>
                <li>윤지대학교병원 임상강사</li>
                <li>건양대학교병원 임상강사</li>
                <li>윤지대학교병원 내과 레지던트</li>
                <li>윤지대학교병원 인턴</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className='flex gap-5 overflow-x-auto items-center'>
          <div className='font-semibold text-[26px] text-gray-light pr-4 border-r'>YouTube</div>
          {Array(5).fill(null).map((_, index) => (
            <div key={index} className='text-center shadow cursor-pointer hover:opacity-75'>
              <img src={thumnail} alt="YouTube Thumbnail" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
};

export default Page;