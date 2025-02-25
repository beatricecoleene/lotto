import React from "react";
import "../css/LotteryTicker.css";

const lotteryInfo = [
  { name: "Powerball", date: "Feb 25, 2025", jackpot: "$200M", numbers: "12, 25, 36, 48, 52, 19" },
  { name: "Mega Millions", date: "Feb 26, 2025", jackpot: "$150M", numbers: "05, 17, 23, 42, 50, 08" },
  { name: "EuroMillions", date: "Feb 27, 2025", jackpot: "€75M", numbers: "04, 16, 28, 33, 41, 07, 10" },
  { name: "SuperLotto Plus", date: "Feb 28, 2025", jackpot: "$85M", numbers: "06, 14, 29, 35, 48, 12" },
  { name: "Lotto 6/49", date: "Mar 1, 2025", jackpot: "CA$10M", numbers: "07, 19, 24, 38, 42, 10" },
  { name: "Oz Lotto", date: "Mar 2, 2025", jackpot: "AU$50M", numbers: "03, 09, 27, 34, 40, 12, 18" }
];

const LotteryTicker = () => {
  return (
    <div className="ticker-wrapper flex items-center">
      <div className="ticker-content">
        {lotteryInfo.concat(lotteryInfo).map((lottery, index) => ( // Duplicate for seamless loop
          <span key={index} className=" font-bold text-gray-700">
            {lottery.name} - {lottery.date} - {lottery.jackpot} - {lottery.numbers}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LotteryTicker;
