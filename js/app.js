document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href ="http://127.0.0.1:5500/answer.html"
})


function getElementValueById(elementById){
    const element = document.getElementById(elementById);
    const elementString = element.value;
    const elementValue = parseFloat(elementString);
    element.value = '';
    return elementValue
}

function setElementValueById(valueById, newValue){
    const calculation = document.getElementById(valueById);
   calculation.value = newValue;

}
document.getElementById('triangle-calculate').addEventListener('click', function(){
    
    const triangleBase = getElementValueById('triangle-base');
    const triangleHeight = getElementValueById('triangle-height');
    const newTriangleValue = .5 * triangleBase * triangleHeight;
    

    setElementValueById('triangle-result', newTriangleValue)
    const calculationArea = document.getElementById('Calculation-field');
    calculationArea.style.visibility = 'visible';
    

    
})