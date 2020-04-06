let html = document.querySelector('.html')
let style = document.querySelector(".style");
let string = `/* 如何通过css画个太极
* 首先准备一个div
* <div class="app" ></div > 
* 然后为这个div写css
**/
.app{
  border: 1px solid;
  width: 200px;
  height: 200px;
}
/* 接下来把 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个圆
**/
.app{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
.app{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
.app::before{
  content: "";
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
.app::after{
  content: "";
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`

let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>"
    } else if (string[n] === " ") {
      string2 += "&nbsp;"
    } else if (string[n] === "<") {
      string2 += "&lt;"
    } else if (string[n] === ">") {
      string2 += "&gt;"
    } else {
      string2 += string[n]
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999999);
    html.scrollTo(0, 9999999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 1)
}

step()