import React from "react";

import { STATS_ICONS } from "../data";
import { IStat } from "../types";

interface StatsProps {
  stats: IStat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="stats-container">
      {stats.map((s: IStat, idx: number) => {
        let color = "";
        if (s.base_stat > 70) color = "hard";
        if (s.base_stat < 70) color = "middle";
        if (s.base_stat < 50) color = "low";
        return (
          <div className="stat-item" key={idx}>
            <div className="stat-icon">{STATS_ICONS.get(s.stat.name)()}</div>
            <div className="stat-value">
              {s.stat.name} : <span className={color}>{s.base_stat}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
