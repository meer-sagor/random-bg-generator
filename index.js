const btn = document.querySelector('button');
const h4 = document.querySelector('h4')


btn.addEventListener('click', ()=>{
  // const randomBg = Math.floor(Math.random() * 16777215).toString(16);

  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)

  console.log(`rgb(${r}, ${g}, ${b})`);

  // document.body.style.background = `#${randomBg}`;
  document.body.style.background = `rgb(${r}, ${g}, ${b})`
  
  // h4.textContent = `#${randomBg}`
  h4.textContent = `rgb(${r}, ${g}, ${b})`
})