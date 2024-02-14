// triangle calculation

function triangleAreaCalculate() {
    const triangleCalculate = document.getElementById('triangle-base');
    const triangleBase = triangleCalculate.value;
    const base = parseFloat (triangleBase);
    // console.log(base);

    // triangle height
    const triangleHeight = document.getElementById('triangle-height');
    const heightCalculate = triangleHeight.value;
    const height = parseFloat(heightCalculate);
    console.log(height);
}