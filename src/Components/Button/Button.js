

/* eslint-disable react/prop-types */
const ButtonCom = ({title,fun}) => {
  return (
    <>

    <div className="  relative flex flex-wrap cursor-pointer items-center justify-center w-[100%] h-auto">

      <button onClick={fun} className=" flex flex-wrap items-center justify-center relative w-full   bg-white border-2 border-rose-500 text-rose-500  text-sm py-2 px-3 font-semibold cursor-pointer rounded-lg lg:mt-3 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:tracking-wider">

    
        <p className="font-mono">{title}</p>
      </button>
      </div>
    </>
  );
};

export default ButtonCom;