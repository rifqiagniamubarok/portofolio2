import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { CgClose } from '@react-icons/all-files/cg/CgClose';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface layoutProps {
  children: React.ReactNode;
  title: string;
}

const Layouts = (props: layoutProps) => {
  const { children, title } = props;
  const router = useRouter();
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const handleBurgerIcon = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  const handleLinkTo = (link: string) => {
    router.push(link);
  };

  return (
    <div className="bg-primarybluebg w-screen h-screen flex justify-center items-center ">
      <div className="bg-primarywhitebg w-[340px] h-[554px] sm:w-[500px] sm:h-[640px] lg:w-[1000px] lg:h-[600px] rounded-[8px] px-[20px] py-[16px] lg:py-[80px] lg:px-[60px] relative lg:grid lg:grid-cols-7">
        <div className="lg:col-span-3">
          {isOpenNavbar && (
            <div className="absolute w-full h-full bg-slate-700 z-30 top-0 left-0 rounded-[8px] opacity-90 px-[20px] py-[16px]">
              <div className="flex justify-end">
                <div onClick={handleBurgerIcon}>
                  <CgClose className="fill text-slate-200" />
                </div>
              </div>
              <div className="h-full flex flex-col items-end gap-3 justify-center text-slate-200">
                <div onClick={() => handleLinkTo('/')}>
                  <p className="text-slate-200 font-text text-md">About</p>
                </div>
                <hr className="border-0.5 text-slate-300 w-[200px]" />
                <div onClick={() => handleLinkTo('/experience')}>
                  <p className="text-slate-200 font-text text-md">Experience</p>
                </div>
                <hr className="border-0.5 text-slate-300 w-[200px]" />
                <div onClick={() => handleLinkTo('/education')}>
                  <p className="text-slate-200 font-text text-md">Education</p>
                </div>
                <hr className="border-0.5 text-slate-300 w-[200px]" />
                <div onClick={() => handleLinkTo('/portofolio')}>
                  <p className="text-slate-200 font-text text-md">Portofolio</p>
                </div>
                <hr className="border-0.5 text-slate-300 w-[200px]" />
                <div onClick={() => handleLinkTo('/contact')}>
                  <p className="text-slate-200 font-text text-md">Contact</p>
                </div>
              </div>
            </div>
          )}
          <div className="absolute top-3 z-20 sm:top-6 sm:ml-12">
            <p className="font-judul1 text-primaryblue text-4xl sm:text-5xl">
              Hello{' '}
            </p>
            <p className="font-judul1 text-secondarymain ml-[30px] sm:ml-[60px] text-5xl">
              I&apos;m
            </p>
          </div>
          <div className="flex justify-end items-start sm:invisible">
            <div
              onClick={handleBurgerIcon}
              className={`${isOpenNavbar && 'invisible'}`}
            >
              <FiMenu />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="realtive max-w-[140px] max-h-[140px]  rounded-full overflow-hidden">
              <div className="absolute w-[140px] h-[140px] bg-primaryblue rounded-full opacity-60"></div>
              <Image
                src="/images/myphoto.png"
                width={150}
                height={150}
                alt="profile pic"
                className="static overflow-hidden"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            <p className="text-center font-judul2 text-primaryblue text-lg lg:text-2xl font-medium">
              RIFQI AGNIA MUABROK
            </p>
            <p className="text-center text-md lg:text-xl">
              Front End Developer
            </p>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="mt-2">
            <div className="flex justify-center text-lg font-medium text-primaryblue sm:hidden">
              <p>{title}</p>
            </div>
            <div className="flex justify-center mb-4 sm:hidden">
              <hr className="border border-primaryblue w-[30px]" />
            </div>
            <div className="hidden sm:inline-block  w-full lg:mb-[32px]">
              <div className="flex justify-center items-center gap-3 w-full mb-2 text-lg lg:text-xl">
                <p
                  className={`${
                    title === 'About' ? 'text-primaryblue' : 'text-slate-400'
                  }  font-medium cursor-pointer`}
                  onClick={() => handleLinkTo('/')}
                >
                  About
                </p>
                <p
                  className={`${
                    title === 'Experience'
                      ? 'text-primaryblue'
                      : 'text-slate-400'
                  }  font-medium cursor-pointer`}
                  onClick={() => handleLinkTo('/experience')}
                >
                  Experience
                </p>
                <p
                  className={`${
                    title === 'Education'
                      ? 'text-primaryblue'
                      : 'text-slate-400'
                  }  font-medium cursor-pointer`}
                  onClick={() => handleLinkTo('/education')}
                >
                  Education
                </p>
                <p
                  className={`${
                    title === 'Portofolio'
                      ? 'text-primaryblue'
                      : 'text-slate-400'
                  }  font-medium cursor-pointer`}
                  onClick={() => handleLinkTo('/portofolio')}
                >
                  Portofolio
                </p>
                <p
                  className={`${
                    title === 'Contact' ? 'text-primaryblue' : 'text-slate-400'
                  }  font-medium cursor-pointer`}
                  onClick={() => handleLinkTo('/contact')}
                >
                  Contact
                </p>
              </div>
              <div className="flex justify-center mb-6 ">
                <hr className="border border-primaryblue w-[320px] lg:w-[400px]" />
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layouts;
