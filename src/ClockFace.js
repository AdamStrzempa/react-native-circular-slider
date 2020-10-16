import React, { PureComponent, PropTypes } from 'react';
import { G, Circle, Text, Line } from 'react-native-svg';
import range from 'lodash.range';


export default class ClockFace extends PureComponent {


  render() {
    const { r, stroke } = this.props;
    const faceRadius = r - 0;
    const textRadius = r - 26;

    return (
      <G>
        {
          range(48).map(i => {
            const cos = Math.cos(2 * Math.PI / 48 * i);
            const sin = Math.sin(2 * Math.PI / 48 * i);

            return (
              <Line
                key={i}
                stroke={stroke}
                strokeWidth={i % 4 === 0 ? 3 : 1}
                x1={cos * faceRadius}
                y1={sin * faceRadius}
                x2={cos * (faceRadius - (i % 4 === 0 ? 15 : 10))}
                y2={sin * (faceRadius - (i % 4 === 0 ? 15 : 10))}
              />
            );
          })
        }
      <G transform={{translate: "0, 5"}}>
          {
            range(12).map((h, i) => (
              <Text
                key={i}
                fill={stroke}
                fontSize="16"
                textAnchor="middle"
                x={textRadius * Math.cos(2 * Math.PI / 12 * i - Math.PI / 2 + Math.PI / 6)}
                y={textRadius * Math.sin(2 * Math.PI / 12 * i - Math.PI / 2 + Math.PI / 6)}
              >
                {h + 1}
              </Text>
            ))
          }
        </G>
      </G>
    );
  }
}
