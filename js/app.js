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

function alertByNumber(numberValue){

    if(numberValue !== number){
        alert('please fill up correctly')
    }
}

document.getElementById('triangle-calculate').addEventListener('click', function(){
    
    const triangleBase = getElementValueById('triangle-base');
    const triangleHeight = getElementValueById('triangle-height');
    const newTriangleValue = .5 * triangleBase * triangleHeight;
    setElementValueById('triangle-result', newTriangleValue)
    const calculationArea = document.getElementById('triangle-calculation');
    calculationArea.style.visibility = 'visible';
    
    
      
})
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleLength = getElementValueById('rectangle-length');
    const rectangleWidth = getElementValueById('rectangle-width');
    const newRectangleValue = rectangleLength * rectangleWidth;
    setElementValueById('rectangle-result', newRectangleValue);
    const calculationArea = document.getElementById('rectangle-calculation');
    calculationArea.style.visibility = 'visible';
})
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBase = getElementValueById('parallelogram-base');
    const parallelogrameHeight = getElementValueById('parallelogram-height');
    const newparallelogramValue = parallelogramBase * parallelogrameHeight;
    setElementValueById('parallelogram-result', newparallelogramValue);
    const calculationArea = document.getElementById('parallelogram-calculation');
    calculationArea.style.visibility = 'visible';
})

document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusDiaOne = getElementValueById('rhombus-dia1');
    const rhombusDiaTwo = getElementValueById('rhombus-dia2');
    const newRhombusValue = .5 * rhombusDiaOne * rhombusDiaTwo;
    setElementValueById('rhombus-result', newRhombusValue);
    const calculationArea = document.getElementById('rhombus-calculation');
    calculationArea.style.visibility = 'visible';
})

document.getElementById('penta-btn').addEventListener('click', function(){
    const pentagonBase = getElementValueById('pentagon-base');
    const pentagonDia = getElementValueById('pentagon-dia');
    const newPentaValue = .5 * pentagonBase * pentagonDia;
    setElementValueById('pentagon-result', newPentaValue);
    const calculationArea = document.getElementById('pentagon-calculation');
    calculationArea.style.visibility = 'visible';
})
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const firstEllipseElement = getElementValueById('first-input');
    const secondEllipseElement = getElementValueById('second-input');
    const newEllipseValue = 3.1416 * firstEllipseElement * secondEllipseElement;
    setElementValueById('ellipse-result', newEllipseValue);
    const calculationArea = document.getElementById('ellipse-calculation');
    calculationArea.style.visibility = 'visible';
})
