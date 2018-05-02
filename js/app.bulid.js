!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t){const o={fillArray(e){let t=new Array(4);return t.fill(e),t},makeMartix(e=0){return Array.from({length:4},()=>this.fillArray(e))},getPosition:(e,t)=>({left:4+24*t,top:4+24*e}),getBcolor(e){switch(e){case 2:return"#eee4da";case 4:return"#ede0c8";case 8:return"#f2b179";case 16:return"#f59463";case 32:return"#f67c5f";case 64:return"#f65e3b";case 128:return"#edcf72";case 256:return"#edcc61";case 512:return"#9c0";case 1024:return"#33b5e5";case 2048:return"#09c";case 4096:return"#a6c"}return"black"},getNumColor:e=>e>4?"#776e65":"white"},r={canMoveLeft(e){for(let t=0;t<e.length;t++)for(let o=1;o<e[t].length;o++)if(0==e[t][o-1]||e[t][o]==e[t][o-1])return!0;return!1},canMoveRight(e){for(let t=0;t<e.length;t++)for(let o=e[t].length-2;o>-1;o--)if(0==e[t][o+1]||e[t][o]==e[t][o+1])return!0;return!1},canMoveUp(e){for(let t=0;t<e.length;t++)for(let o=1;o<e.length;o++)if(0==e[o-1][t]||e[o][t]==e[o-1][t])return!0;return!1},canMoveDown(e){for(let t=0;t<e.length;t++)for(let o=e.length-2;o>-1;o--)if(0==e[o+1][t]||e[o][t]==e[o+1][t])return!0;return!1},noRowBlock(e,t,o,r){for(let n=o+1;n<t;n++)if(0!=r[e][n])return!1;return!0},noColBlock(e,t,o,r){for(let n=o+1;n<e;n++)if(0!=r[n][t])return!1;return!0},noMove(e){return!(this.canMoveLeft(e)||this.canMoveRight(e)||this.canMoveDown(e)||this.canMoveUp(e))}},n={showAnimated(e,t,r){let n=$(".matrix-wrapper").width(),l=$(`#num-cell-${e}-${t}`);l.css({color:`${o.getNumColor(r)}`,"background-color":`${o.getBcolor(r)}`}),l.text(r),l.animate({width:`${.2*n}px`,height:`${.2*n}px`,top:`${o.getPosition(e,t).top}%`,left:`${o.getPosition(e,t).left}%`},80)},moveAnimated(e,t,r,n){$(`#num-cell-${e}-${t}`).animate({top:`${o.getPosition(r,n).top}%`,left:`${o.getPosition(r,n).left}%`},200)}};e.exports=class{static get tool(){return o}static get canMove(){return r}static get animate(){return n}}},function(e,t,o){const r=o(0),n={checkNumCell(e){for(let t=0;t<e.length;t++)for(let o=0;o<e[t].length;o++)if(0==e[t][o])return!1;return!0},randomOneNum(e){if(this.checkNumCell(e))return e;let t=parseInt(Math.floor(4*Math.random())),o=parseInt(Math.floor(4*Math.random())),n=0;for(;n<50&&0!=e[t][o];)t=parseInt(Math.floor(4*Math.random())),o=parseInt(Math.floor(4*Math.random())),n++;if(50==n)for(let r=0;r<e.lenght;r++)for(let n=0;n<e[r].length;n++)0==e[r][n]&&(t=r,o=n);let l=Math.random()<.5?2:4;return e[t][o]=l,r.animate.showAnimated(t,o,l),e},generateNumcell(e){return this.randomOneNum(this.randomOneNum(e))}};e.exports=class{static get Num(){return n}}},function(e,t,o){const r=o(0),n=o(1),l={moveLeft(e){let t=$("#socre"),o=+t.text();if(!r.canMove.canMoveLeft(e))return e;for(let t=0;t<e.length;t++)for(let n=1;n<e[t].length;n++)if(0!=e[t][n])for(let l=0;l<n;l++)0==e[t][l]&&r.canMove.noRowBlock(t,n,l,e)?(r.animate.moveAnimated(t,n,t,l),e[t][l]=e[t][n],e[t][n]=0):e[t][n]==e[t][l]&&r.canMove.noRowBlock(t,n,l,e)&&(r.animate.moveAnimated(t,n,t,l),e[t][l]+=e[t][n],o+=e[t][l],e[t][n]=0);return t.text(o),e},moveRight(e){let t=$("#socre"),o=+t.text();if(!r.canMove.canMoveRight(e))return e;for(let t=0;t<e.length;t++)for(let n=e[t].length-2;n>-1;n--)if(0!=e[t][n])for(let l=e[t].length-1;l>n;l--)0==e[t][l]&&r.canMove.noRowBlock(t,l,n,e)?(r.animate.moveAnimated(t,n,t,l),e[t][l]=e[t][n],e[t][n]=0):e[t][n]==e[t][l]&&r.canMove.noRowBlock(t,l,n,e)&&(r.animate.moveAnimated(t,n,t,l),e[t][l]+=e[t][n],o+=e[t][l],e[t][n]=0);return t.text(o),e},moveUp(e){let t=$("#socre"),o=+t.text();if(!r.canMove.canMoveUp(e))return e;for(let t=0;t<e.length;t++)for(let n=1;n<e.length;n++)if(0!=e[n][t])for(let l=0;l<n;l++)0==e[l][t]&&r.canMove.noColBlock(n,t,l,e)?(r.animate.moveAnimated(n,t,l,t),e[l][t]=e[n][t],e[n][t]=0):e[n][t]==e[l][t]&&r.canMove.noColBlock(n,t,l,e)&&(r.animate.moveAnimated(n,t,l,t),e[l][t]+=e[n][t],o+=e[l][t],e[n][t]=0);return t.text(o),e},moveDown(e){let t=$("#socre"),o=+t.text();if(!r.canMove.canMoveDown(e))return e;for(let t=0;t<e.length;t++)for(let n=e.length-2;n>-1;n--)if(0!=e[n][t])for(let l=e.length-1;l>n;l--)0==e[l][t]&&r.canMove.noColBlock(l,t,n,e)?(r.animate.moveAnimated(n,t,l,t),e[l][t]=e[n][t],e[n][t]=0):e[n][t]==e[l][t]&&r.canMove.noColBlock(l,t,n,e)&&(r.animate.moveAnimated(n,t,l,t),e[l][t]+=e[n][t],o+=e[l][t],e[n][t]=0);return t.text(o),e},isOver(e){n.Num.checkNumCell(e)&&r.canMove.noMove(e)&&alert("GameOver")}};e.exports=class{static get move(){return l}}},function(e,t,o){const r=o(0);e.exports=class{constructor(){this.$wrapper=$(".matrix-wrapper"),this.wrapperWidth=this.$wrapper.width(),this.$wrapper.css("height",`${this.wrapperWidth}px`)}initUI(e){let t="";for(let e=0;e<4;e++)for(let o=0;o<4;o++)t+=`<div class="matrix-cell" style="left:${r.tool.getPosition(e,o).left}%;top:${r.tool.getPosition(e,o).top}%;height:${.2*this.wrapperWidth}px"></div>`;this.$wrapper.append(t),this.getNumCell(e)}getNumCell(e){$(".num-cell").remove();let t="";for(let o=0;o<e.length;o++)for(let n=0;n<e[o].length;n++)0==e[o][n]?t+=`<div class="num-cell" id="num-cell-${o}-${n}"; style="width:0px;height:0px;left:${r.tool.getPosition(o,n).left+10}%;top:${r.tool.getPosition(o,n).top+10}%;"></div>`:t+=`<div class="num-cell" id="num-cell-${o}-${n}"; style="color:${r.tool.getNumColor(e[o][n])};background-color:${r.tool.getBcolor(e[o][n])};width:${.2*this.wrapperWidth}px;height:${.2*this.wrapperWidth}px;left:${r.tool.getPosition(o,n).left}%;top:${r.tool.getPosition(o,n).top}%;">${e[o][n]}</div>`;this.$wrapper.append(t)}}},function(e,t,o){"use strict";o.r(t);o(9);const r=o(0),n=o(3),l=o(1),a=o(2);window.onload=(()=>{let e=r.tool.makeMartix(0),t=new n;t.initUI(e),e=l.Num.generateNumcell(e),$("#start").on("click",()=>{e=r.tool.makeMartix(0),t.initUI(e),e=l.Num.generateNumcell(e)}),$("#save").on("click",()=>{}),$(document).keydown(o=>{switch(o.keyCode){case 37:a.move.moveLeft(e),setTimeout(()=>{t.getNumCell(e)},200),l.Num.generateNumcell(e),setTimeout(()=>{a.move.isOver(e)},250);break;case 38:e=a.move.moveUp(e),setTimeout(()=>{t.getNumCell(e)},200),l.Num.generateNumcell(e),setTimeout(()=>{a.move.isOver(e)},250);break;case 39:e=a.move.moveRight(e),setTimeout(()=>{t.getNumCell(e)},200),l.Num.generateNumcell(e),setTimeout(()=>{a.move.isOver(e)},250);break;case 40:e=a.move.moveDown(e),setTimeout(()=>{t.getNumCell(e)},200),l.Num.generateNumcell(e),setTimeout(()=>{a.move.isOver(e)},250)}});let o=0,i=0,c=0,u=0,m=$(window).width();document.addEventListener("touchstart",e=>{e.preventDefault(),o=e.touches[0].pageX,i=e.touches[0].pageY}),document.addEventListener("touchend",r=>{r.preventDefault(),c=r.changedTouches[0].pageX,u=r.changedTouches[0].pageY;let n=c-o,s=u-i;Math.abs(n)<.3*m&&Math.abs(s)<.3*m||(Math.abs(n)>=Math.abs(s)?n>0?(e=a.move.moveRight(e),setTimeout(()=>{t.getNumCell(e)},200),l.Num.generateNumcell(e),setTimeout(()=>{a.move.isOver(e)},250)):(e=a.move.moveLeft(e),setTimeout(()=>{t.getNumCell(e)},200),l.Num.generateNumcell(e),setTimeout(()=>{a.move.isOver(e)},250)):s>0?(e=a.move.moveDown(e),setTimeout(()=>{t.getNumCell(e)},200),l.Num.generateNumcell(e),setTimeout(()=>{a.move.isOver(e)},250)):(e=a.move.moveUp(e),setTimeout(()=>{t.getNumCell(e)},200),l.Num.generateNumcell(e),setTimeout(()=>{a.move.isOver(e)},250)))})})},,,,,function(e,t){}]);