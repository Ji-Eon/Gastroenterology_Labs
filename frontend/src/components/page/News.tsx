import Carousel from "../Carousel/Carousel";

const News = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2024/11/21/16/18/ai-generated-9214142_1280.jpg'
  ]
  return (
    <main className="space-y-9 mb-20">
      <Carousel images={images} />
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="border-b border-gray-400">
          <h2 className="text-lg text-gray-600">
            <span className="inline-block h-4 w-4 rounded-full clear-both mr-2 border-4 border-gray-400"></span>
            News
          </h2>
        </div>
      </section>
    </main>
  )
};

export default News;
