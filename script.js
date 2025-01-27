
let currentDay = document.querySelector("#CD");
let currentMonth = document.querySelector("#CM");
let currentYear = document.querySelector("#CY");
let birthDay = document.querySelector("#BD");
let birthtMonth = document.querySelector("#BM");
let birthYear = document.querySelector("#BY");
let result = document.querySelector(".result")
let click = document.querySelector("button");
let color=document.querySelectorAll('h1');
// setInterval(()=>{
//   color.forEach((e)=>{
//     e.style.webkitTextStroke=`2px ${rgb()}`;
//   });
// },1000);
const rgb=()=>{
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}
click.addEventListener('click', () => {
  let A = eval(currentDay.value);
  let B = eval(currentMonth.value);
  let C = eval(currentYear.value);
  let a = eval(birthDay.value);
  let b = eval(birthtMonth.value);
  let c = eval(birthYear.value);
  console.log(A + B + C + a + b + c);
  setTimeout(()=>{
     currentDay.value='';
     currentMonth.value='';
     currentYear.value='';
     birthDay.value='';
     birthtMonth.value='';
     birthYear.value='';
  },3000);
  setTimeout(()=>{
    result.innerText='';
  },5000);
  //  AD=ageDate,AM=ageMonth,AY=ageYear
  switch (B) {
    case 1:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      else if (A <= a && B >= b && C > c) {
        ad = (A + 31) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      else if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      else if (A <= a && B <= b && C > c) {
        ad = (A + 31) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    case 2:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      if (A <= a && B >= b && C > c) {
        ad = (A + 28) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      if (A <= a && B <= b && C > c) {
        ad = (A + 28) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    case 3:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      if (A <= a && B >= b && C > c) {
        ad = (A + 31) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      if (A <= a && B <= b && C > c) {
        ad = (A + 31) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    case 4:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      if (A <= a && B >= b && C > c) {
        ad = (A + 30) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      if (A <= a && B <= b && C > c) {
        ad = (A + 30) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    case 5:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      if (A <= a && B >= b && C > c) {
        ad = (A + 31) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      if (A <= a && B <= b && C > c) {
        ad = (A + 31) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    case 6:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      if (A <= a && B >= b && C > c) {
        ad = (A + 30) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      if (A <= a && B <= b && C > c) {
        ad = (A + 30) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    case 7:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      if (A <= a && B >= b && C > c) {
        ad = (A + 31) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      if (A <= a && B <= b && C > c) {
        ad = (A + 31) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    case 8:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      if (A <= a && B >= b && C > c) {
        ad = (A + 31) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      if (A <= a && B <= b && C > c) {
        ad = (A + 31) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    case 9:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      if (A <= a && B >= b && C > c) {
        ad = (A + 30) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      if (A <= a && B <= b && C > c) {
        ad = (A + 30) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    case 10:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      if (A <= a && B >= b && C > c) {
        ad = (A + 31) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      if (A <= a && B <= b && C > c) {
        ad = (A + 31) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    case 11:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      if (A <= a && B >= b && C > c) {
        ad = (A + 30) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      if (A <= a && B <= b && C > c) {
        ad = (A + 30) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    case 12:
      if (A >= a && B >= b && C > c) {
        ad = A - a;
        am = B - b;
        ay = C - c;
      }
      if (A <= a && B >= b && C > c) {
        ad = (A + 31) - a;
        am = (B - 1) - b;
        ay = C - c;
      }
      if (A >= a && B <= b && C > c) {
        ad = A - a;
        am = (B + 12) - b;
        ay = (C - 1) - c;
      }
      if (A <= a && B <= b && C > c) {
        ad = (A + 31) - a;
        am = (B + 11) - b;
        ay = (C - 1) - c;
      }
      result.innerText = `You are ${ay} years ${am} months ${ad} days`;
      break;
    default:
      result.innerText = "Enter Date";
  }
});
