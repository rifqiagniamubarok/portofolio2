import Layouts from '../components/Layouts';
import dayjs from 'dayjs';
const education = () => {
  const dataOfEducations = [
    {
      id: 1,
      name: 'Politeknik Negeri Medan',
      location: 'Medan',
      level: 'Associate Degree in',
      desc: 'Electrical Major',
      start: '2019',
      end: '2021',
      desks: [],
    },
    {
      id: 2,
      name: 'Alterra Academy',
      location: '',
      level: 'Certificate in',
      desc: ' a fullstack developer bootcamp',
      start: '2021-08',
      end: '2022-01',
      desks: [],
    },
    {
      id: 3,
      name: 'Junior Web Developer BPPTIK',
      location: '',
      level: 'Certificate in',
      desc: 'a training for junior web developer ',
      start: '2022-08',
      end: '2022-08',
      desks: [],
    },
  ];
  return (
    <div>
      <Layouts title="Education">
        <div className="w-full">
          {dataOfEducations.map((education, index) => (
            <div className="flex items-center mb-4" key={index}>
              <div className="w-[28px]">
                <div className="bg-primarybluebg w-[12px] h-[12px] rounded-full text-white flex justify-center items-center">
                  <div className="bg-white w-[4px] h-[4px] rounded-full"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xs lg:text-lg font-medium">
                      {education.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs lg:text-base font-light">
                      Sep/22-sep/22
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs lg:text-base text-slate-500">
                    {education.level} | {education.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layouts>
    </div>
  );
};
export default education;
