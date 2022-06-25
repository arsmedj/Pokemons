import React from "react";

import { STATS_ICONS } from "../data";

const Stats = ({ stats }) => {
  return (
    <div className="stats-container">
      {stats.map((s, idx) => {
        let color = null;
        if (s.base_stat > 70) color = "hard";
        if (s.base_stat < 70) color = "middle";
        if (s.base_stat < 50) color = "low";

        let statKey = s.stat.name.replace("-", "");
        return (
          <div className="stat-item" key={idx}>
            <div className="stat-icon">{STATS_ICONS[statKey]}</div>
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
