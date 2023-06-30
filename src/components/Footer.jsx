import { TbBrandOpenai } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="w-full text-white mt-auto flex justify-center items-center h-12 font-default text-xs">
      Created with &lt; 🔥/ &gt; by Sreejit. Powered by OpenAI <span className="text-purple-700 text-[1.5rem] flex justify-center items-center ml-1"><TbBrandOpenai /></span>
    </div>
  );
}