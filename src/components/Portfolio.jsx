import ngo from "../assets/portfolio/ngo.png";
import cryptoview from "../assets/portfolio/cryptoview.png";
import FoodMap from "../assets/portfolio/FoodMap.png";
import Rscomputers from "../assets/portfolio/Rscomputers.jpg";
import jaybhavani from "../assets/portfolio/jaybhavani.png";
import portfolio from "../assets/portfolio/portfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ngo,
      desc: "A NGO Site for nog to manage the child labours and give them benefit of government schemes.",
      code: "https://github.com/kamatkarsujay/NGO-Site",
      demo: "https://ngositereact.netlify.app/",
    },
    {
      id: 2,
      src: Rscomputers,
      desc: "An E-commerce platform that lets users buy computers parts and build their own PC",
      code: "https://github.com/kamatkarsujay/MERN-E-Com-Site",
      demo: "https://mern-rscomputers-store.herokuapp.com/",
    },
    {
      id: 3,
      src: cryptoview,
      desc: "An one place to do the analysis of cryptocurrencies and see news about cryptocurrencies.",
      code: "https://github.com/kamatkarsujay/cryptoview",
      demo: "https://cryptoview-delta.vercel.app/",
    },
    {
      id: 4,
      src: FoodMap,
      desc: "This is a mobile app, which lets you click a picture of a dish and gives you a detailed recipe using a ML model. ",
      code: "https://github.com/Maitreyi22/ImageToRecipe",
      demo: "https://github.com/Maitreyi22/ImageToRecipe",
    },
    {
      id: 5,
      src: portfolio,
      desc: "I made this portfolio using reactjs and tailwind css and deployed with vercel.",
      code: "https://github.com/kamatkarsujay/sujay-portfolio",
      demo: "https://sujaykamatkar.vercel.app/",
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
          <p className="py-6 text-gray-500">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, desc }) => (
            <div
              key={id}
              className="shadow-md rounded-lg cursor-pointer duration-200 hover:scale-105"
            >
              <img src={src} alt="" className="rounded-t-md	" />
              <p className="px-4 pt-2">{desc}</p>
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
          <div className="shadow-md rounded-lg cursor-pointer duration-200 hover:scale-105">
            <img src={jaybhavani} alt="" className="rounded-t-md	" />
            <p className="px-4 pt-2">
              This was a freelancing project for an enterprise called Jaybhavani
              Enterprises.
            </p>
            <div className="flex items-center justify-center">
              <a
                href="https://jaybhavani.in/"
                target="_blank"
                className="px-6 py-3 m-4"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
