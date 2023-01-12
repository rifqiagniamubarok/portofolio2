import Layouts from '../components/Layouts';

const portofolio = () => {
  return (
    <div>
      <Layouts title="Portofolio">
        <div className="grid grid-cols-2 gap-2">
          <div className="h-[80px] bg-slate-400 rounded-md relative"></div>
          <div className="h-[80px] bg-slate-400 rounded-md relative"></div>
        </div>
      </Layouts>
    </div>
  );
};
export default portofolio;
