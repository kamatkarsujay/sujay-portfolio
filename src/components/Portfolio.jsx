import ngo from "../assets/portfolio/ngo.png";
import cryptoview from "../assets/portfolio/cryptoview.png";
import FoodMap from "../assets/portfolio/FoodMap.png";
import Rscomputers from "../assets/portfolio/Rscomputers.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ngo,
      code: "https://github.com/kamatkarsujay/NGO-Site",
      demo: "https://ngositereact.netlify.app/",
    },
    {
      id: 2,
      src: Rscomputers,
      code: "https://github.com/kamatkarsujay/MERN-E-Com-Site",
      demo: "https://mern-rscomputers-store.herokuapp.com/",
    },
    {
      id: 3,
      src: cryptoview,
      code: "https://github.com/kamatkarsujay/cryptoview",
      demo: "https://github.com/kamatkarsujay/cryptoview",
    },
    {
      id: 4,
      src: FoodMap,
      code: "https://github.com/Maitreyi22/ImageToRecipe",
      demo: "https://github.com/Maitreyi22/ImageToRecipe",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-slate-100 to-slate-200 w-full md:h-full pt-44"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md rounded-lg cursor-pointer duration-200 hover:scale-105"
            >
              <img src={src} alt="" className="rounded-t-md	" />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" className="w-1/2 px-6 py-3 m-4">
                  Demo
                </a>
                <a href={code} target="_blank" className="w-1/2 px-6 py-3 m-4">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
