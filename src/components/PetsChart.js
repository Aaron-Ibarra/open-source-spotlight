import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

export default function PetsChart() {
  const data = [
    { x: 'dogs', y: 69000000 },
    { x: 'cats', y: 45300000 },
    { x: 'fish', y: 11800000 },
    { x: 'birds', y: 9900000 },
    { x: 'reptiles', y: 5700000 },
  ];

  return (
    <>
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={['Dogs', 'Cats', 'Fish', 'Birds', 'Reptiles']}
        />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1000000}m`} />
        <VictoryBar
          data={data}
          categories={{ x: ['dogs', 'cats', 'fish', 'birds', 'reptiles'] }}
          y="y"
        />
      </VictoryChart>
    </>
  );
}
