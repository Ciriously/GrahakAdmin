import React, { ReactNode } from 'react';

import trendup from '../Dashboard/images/trendup.svg';
import trenddown from '../Dashboard/images/trenddown.svg';

interface CardDataStatsProps {
  title: string;
  total: string;
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
    <div className="rounded-3xl border border-stroke bg-white py-6 px-7.5 shadow-default text-center">
      <div className="flex justify-end">
        <div className="flex h-11.5 w-16.5 items-center justify-center ">
          {children}
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <span className="text-md font-medium">{title}</span>

          <h4 className="text-title-lg font-bold text-black ">{total}</h4>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && 'text-meta-3'
          } ${levelDown && 'text-meta-5'} `}
        >
          {rate}

          {levelUp && <img src={trendup} />}
          {levelDown && <img src={trenddown} />}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
