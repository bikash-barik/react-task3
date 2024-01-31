import { LuInstagram } from "react-icons/lu";
export const SocialMediaCard = ({imgUrl}) => {
    return (
      <div className="md:w-[300px] md:h-[300px] h-40 w-40 cursor-pointer relative">
        <div className="absolute  w-full h-full hover:bg-black hover:bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
          <LuInstagram className="text-5xl text-white"/>
        </div>
        <img
          src={imgUrl}
          alt=""
          className="w-full h-full object-cover rounded"
        />
      </div>
    );
  };