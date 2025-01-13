// import Carousel from "../Carousel/Carousel";
import thumnail from '../../assets/concept/y_thum_1.png';

const Page = () => {

  return (
    <main className="space-y-9 mb-20">
      {/* <Carousel images={images} /> */}
      <section className="flex justify-center">
        <h1>Gastroenterology Labs AI Connecte Project</h1>
      </section>
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex gap-5 flex-wrap md:flex-nowrap">
          <div className="border border-gray-300 p-4 w-full min-w-96 h-[600px] col-start-1 mx-auto">
            <h2 className='text-2xl mb-4 font-bold'>Paper</h2>
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
            <h2 className='text-2xl mb-4 font-bold'>News & Notice</h2>
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
          <div className='flex gap-5 justify-evenly'>
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