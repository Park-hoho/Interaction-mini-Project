import {Ball} from './ball.js';
import {Block} from "./block.js";

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 8);
    this.ball2 = new Ball(this.stageWidth, this.stageHeight, 30, 8);
    this.block = new Block(700, 30, 300, 450);

    // 브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에
    // 해당 애니메이션을 업데이트하는 함수를 호출하게 합니다.
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2,2);
    
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.block.draw(this.ctx);
    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, '#fdd700', this.block);
    this.ball2.draw(this.ctx, this.stageWidth, this.stageHeight,'#87846c', this.block);
  }
}

window.onload = () => {
  new App();
}