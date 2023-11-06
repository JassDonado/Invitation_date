const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function (){
    alert('Estas citada a ir conmigo a crepes and waffles cuando regreses de cartagena mi amor precioso. El dia lunes a las 7PM')
});

const noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover',function (){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transforms','translate(-${randomX}%,-${randomY}%)');
})