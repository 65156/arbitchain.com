const newText = document.getElementById("newText");

fetch('test.txt')
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    const name = data.split(/\r?\n/);
    showNewText(name)
  })

const showNewText = (name) => {
  const txt = document.createTextNode(`${name[0]} `);
  newText.appendChild(txt)
  let indx = 0;
  let val = 0;
  const runApp = setInterval(() => {
    indx++;
    // indx = indx % name.length
    const span = document.createElement('span')
    const txt = document.createTextNode(`${name[indx]} `);
    span.appendChild(txt)
    if (indx % 2 !== 0) {
      span.style.color = '#ff0055'
    }
    newText.appendChild(span)
    if(indx >= name.length - 1){
      clearInterval(runApp)
    }
  }, 1000);
}





