// Get kasun data bmi1, height1, mass1
// Get chamal data bmi2, height2, mass2


var bmi1, height1, mass1;
var bmi2, height2, mass2;


height1=1.5;
height2=1.8;

mass1=55;
mass2=60;

bmi1 = mass1/ ((height1)**2);
bmi2 = mass2/ ((height2)**2);

console.log('BMI of kasun is '+bmi1);
console.log('BMI of chamal is '+bmi2);

if(bmi1> bmi2){
    console.log('Kasun has heighest BMI');
}else{
    console.log('Chamal has heighest BMI');
}

if(bmi1> bmi2){
    alert('Kasun has heighest BMI');
}else{
    alert('Chamal has heighest BMI');
}
    