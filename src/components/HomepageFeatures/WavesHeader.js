/* eslint-disable max-classes-per-file */
import React from 'react';

export default class WavesHeader extends React.Component {
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const parent = document.getElementById('waves-header');
    let ctx = canvas.getContext('2d');
    let width = canvas.clientWidth;
    let height = parent.offsetHeight;
    let bandThickness = height / 7;
    let resized = false;

    const resize = () => {
      ctx = canvas.getContext('2d');
      width = canvas.clientWidth;
      height = parent.offsetHeight;
      canvas.height = height;
      canvas.width = width;
      bandThickness = height / 7;
      ctx.scale(9, 2);
      resized = true;
    };

    const drawWaves = () => {
      resize();
      const waves = [];

      const COLORS = [
        ['#390aad', '#2408a1'],
        ['#279ED7', '#4e42f9'],
        ['#FF7FFC', '#ea7d5d'],
        ['#faf0a3', '#f58f8d'],
        // ['#fff', '#fff'],
      ];

      const grad = (index) => {
        const a = COLORS[index][0];
        const b = COLORS[index][1];
        const grd = ctx.createLinearGradient(0, bandThickness, 0, height / 2);

        grd.addColorStop(0, a);
        // grd.addColorStop(0.25, a);
        // grd.addColorStop(0.75, b);
        grd.addColorStop(1, b);

        return grd;
      };

      class Point {
        constructor(args) {
          // eslint-disable-next-line react/no-unused-class-component-methods
          this.x = args.x;
          this.y = args.y;
          this.index = args.index;
          this.ticks = 1 + args.index * 2;
        }

        // eslint-disable-next-line react/no-unused-class-component-methods
        update() {
          this.ticks += 1;
        }

        // eslint-disable-next-line react/no-unused-class-component-methods
        genY() {
          const a = Math.sin((this.ticks / 30 + this.index / 4)) * 8;
          const b = Math.sin((this.ticks / 40 + this.index / 2)) * 10;
          const c = Math.cos((this.ticks / 50 + this.index / 8)) * 4;
          return a + b + c + this.y;
        }
      }

      const draw = () => {
        if (resized) {
          const points = 40;
          waves.forEach((wave, i) => {
            wave.forEach((point, j) => {
              // eslint-disable-next-line no-param-reassign
              point.x = ((j * width) / points) - 50;
              // eslint-disable-next-line no-param-reassign
              point.y = bandThickness * i + 25;
            });
          });
          resized = false;
        }
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < waves.length; i += 1) {
          const len = waves[i].length;

          ctx.beginPath();
          ctx.moveTo(waves[i][0].x, waves[i][0].y);

          for (let j = 0; j < len; j += 1) {
            const point = waves[i][j];
            ctx.lineTo(
              point.x,
              point.genY(),
            );
            point.update();
          }

          ctx.lineWidth = bandThickness;
          ctx.strokeStyle = grad(i);
          ctx.stroke();
        }

        window.requestAnimationFrame(draw);
      };

      const initWaves = (amt) => {
        for (let i = 0; i < amt; i += 1) {
          const points = 40;

          waves.push([]);

          for (let j = 0; j < points; j += 1) {
            waves[i].push(new Point({
              x: ((j * width) / points) - 50,
              y: bandThickness * i + 25,
              index: j,
            }));
          }
        }

        window.requestAnimationFrame(draw);
      };

      initWaves(4);
    };

    window.addEventListener('resize', resize, false);
    drawWaves();
  }

  render() {
    return (
      <canvas id="canvas" className="w-full canvas-bg diagonal-box" />
    );
  }
}
