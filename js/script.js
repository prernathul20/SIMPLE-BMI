function calculateBMI(){
    var weight =parseFloat(document.getElementById(txt-weight).value);
    var heightCm =parseFloat(document.getElementById(txt-height).value);
    var heightm = heightCm/100;
    var bmi =( weight/(heightm * heightm)).toFixed(2);
    document.getElementById(txt-bmi).innerHTML= "BMI :" + bmi;
}
    
