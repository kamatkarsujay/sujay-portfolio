const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-slate-200 to-slate-100 pt-44"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-700">
            About
          </p>
        </div>
        <p className=" text-gray-500 mt-20">
          Hi, my name is Sujay Kamatkar. Dedicated and efficient software
          developer/full stack developer. My expertise is in ReactJS,
          JavaScript, NodeJS, and C++.
        </p>

        <br />

        <p className=" text-gray-500">
          I have worked on various projects alongside my studies to gain
          practical experience. I love learning about the latest trends and
          technologies in the industry. Seeking to use my strong set of skills
          to contribute to the team.
        </p>
      </div>
    </div>
  );
};
export default About;
