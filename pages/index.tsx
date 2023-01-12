import Layouts from '../components/Layouts';

export default function Home() {
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'ReactJS',
    'NextJS',
    'Redux',
    'NodeJs',
    'MYSQL',
  ];
  return (
    <>
      <div>
        <Layouts title="About">
          <div>
            <p className="font-text text-xs lg:text-base">
              I am a Front End developer who is comfortable using Typescript,
              ReactJs and NextJs. I have Back End skill also in NodeJs more
              precisely in Expressjs. I am not from a computer or informatics
              major, but i am from an electrical engineering major in college. I
              have a high interest and passion in the world of programmer.
            </p>
            <div className="mt-4 flex flex-wrap gap-1 lg:mt-[40px]">
              {skills.map((skill, index) => (
                <div className="bg-slate-300 p-1 rounded-sm" key={index}>
                  <p className="text-xs text-primaryblue lg:text-base">
                    #{skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Layouts>
      </div>
    </>
  );
}
