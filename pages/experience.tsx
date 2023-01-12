import Layouts from '../components/Layouts';
import dayjs from 'dayjs';

const experience = () => {
  const today = dayjs().format('DD/MM/YY');
  const dataJobs = [
    {
      name: 'PT.Raksasa Indonesia',
      start: '2022-09-13',
      end: '',
      position: 'Fulltime Front End Dev',
      location: 'medan',
      description:
        'Profound hybrid startup company in industries with International standard in Indonesia',
      desks: [
        'Build a responsive website',
        'Build a website using Material UI liblary',
        'Build a inventory management website',
        'Make Bar, Line and Multi Chart for display many datas',
        'Cooperate with UI/UX designer, Backend Developers and Other FrontEnd Developer for building website',
        'Make a dynamic map for rack positions in a warehouse',
        'Using Openstreetmap to display the position of the warehouse',
      ],
    },
  ];
  return (
    <>
      <Layouts title="Experience">
        <div>
          {dataJobs.map((job, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <p className="text-sm lg:text-lg font-text font-medium ">
                  {job.name}
                </p>
                <p className="text-xs lg:text-base font-text ">
                  {dayjs(job.start).format('MMM/YY')}-
                  {job.end ? dayjs(job.end).format('MMM/YY') : 'Now'}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-xs lg:text-base font-text text-slate-500">
                  {job.description}
                </p>
              </div>
              <div className="mt-2">
                <ul>
                  {job.desks.map((desk, deskIndex) => (
                    <li
                      key={deskIndex}
                      className="text-xs lg:text-base text-slate-500"
                    >
                      - {desk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Layouts>
    </>
  );
};
export default experience;
