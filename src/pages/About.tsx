import SectionTitle from "../components/SectionTitle";
import Music from "../components/home/music/Music";
import Skills from "../components/home/skills/Skills";
import Movies from "../components/home/movies/Movies";

function About() {
  return (
    <div className="flex flex-col gap-8">
      {/* About me */}
      <div className="flex flex-col gap-4">
        <SectionTitle title={"about me"} />
        <div className="flex flex-row items-center gap-2">
          <img src={`/home/me_3.jpg`} className="h-96 rounded-xl aspect-6/10 object-cover" />
          <p className="text-secondary-text px-2">
            I'm Gavin Normand, a third-year honors Computer Science student at
            Northeastern University, pursuing a bachelor's degree with a
            concentration in Software and a minor in Mathematics.
            <br />
            <br />
            I spend a lot of my time building software. I work on projects
            through Sandbox, a student-led software consultancy, as well as
            personal projects and freelance work. I'm especially interested in
            robotics, artificial intelligence, machine learning, computer
            vision, and intelligent systems.
            <br />
            <br />I grew up in Millstone, New Jersey, and now spend most of the
            year in Boston. Outside of tech, I'm usually outdoors or spending
            time with friends, family, and my dog. I enjoy pickup basketball,
            hiking, biking, running, skiing, tennis, music, and watching the NBA
            and NFL.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-4">
        <SectionTitle title={"skills"} />
        <div className="px-2">
          <Skills />
        </div>
      </div>

      {/* Music */}
      <div className="flex flex-col gap-4">
        <SectionTitle title={"music"} />
        <div className="px-2">
          <Music />
        </div>
      </div>

      {/* Movies */}
      <div className="flex flex-col gap-4">
        <SectionTitle title={"movies"} />
        <div className="px-2">
          <Movies />
        </div>
      </div>
    </div>
  );
}

export default About;
