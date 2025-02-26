import LotteryTicker from "./LotteryTicker";
import { PiSpeakerHighFill } from "react-icons/pi";



const Welcome = () => {
  return (
    <div className="flex flex-col gap-2  mx-[10%] p-10">
        <div className="relative bg-red-500 flex flex-col border-2 h-100 rounded-3xl p-3">
            <div className=" flex-grow"></div>
            <button className="absolute w-1/5 left-[12%] bottom-[15%] bg-blue-500 border p-3 rounded-2xl"
                onClick={() => window.location.href = '/login'}>
                PLAY NOW
            </button>
        </div>

        <div className=" flex flex-row gap-2 items-center">
            <PiSpeakerHighFill />
            <LotteryTicker />
        </div>
    </div>

  )
}

export default Welcome