import React, { ReactNode } from 'react';
import trendup from '../Dashboard/images/trendup.svg';
import trenddown from '../Dashboard/images/trenddown.svg';

interface CardDataStatsProps {
  title: string;
  total: any;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-3xl border border-stroke bg-white py-6 px-7 shadow-default text-center">
      <div className="flex bg-white  justify-between items-center mb-4">
        <span className="text-md  text-left font-medium">{title}</span>
        <div className="flex   h-11.5 w-16.5 items-center justify-center">
          {children}
        </div>
      </div>
      <h4 className="text-left   text-3xl mb-2 font-bold text-black">
        {total}
      </h4>

      <div className="flex px-1 mt-4 items-end justify-between">
        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && 'text-meta-3'
          } ${levelDown && 'text-meta-5'}`}
        >
          {rate}
          {levelUp && <img src={trendup} alt="Trend Up" />}
          {levelDown && <img src={trenddown} alt="Trend Down" />}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
