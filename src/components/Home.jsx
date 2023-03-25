import { Link } from "react-scroll";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-slate-100 to-slate-200"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center
      h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            with good problem-solving skills and ability to work well with
            teams. I've been building full stack applications for almost 1 year.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500}>
              <button
                className="group w-fit px-6 py-3 my-2
              text-white flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={23} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-3xl shadow-xl mx-auto w-2/3 md:w-full
            "
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
