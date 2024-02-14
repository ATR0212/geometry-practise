function calculateRectangle(){
    const rectangleWidth = rectangleAreaCalculation('rectangle-width');
    const rectangleLong = rectangleAreaCalculation('rectangle-long')

    const area = rectangleWidth * rectangleLong;
    // console.log(area);
}






function rectangleAreaCalculation(inputId){
    const inputField = document.getElementById(inputId);
    const inputArea = inputField.value;
    const result = parseFloat(inputArea);
    return result;
}
