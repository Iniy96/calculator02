let display = document.getElementById("display");

function calculate(number){
    display.value += number;
}
function clr(){
    display.value = "";
}
function del(){
    display.value = display.value.slice(0,-1);
}
function result(){
    if(display.value === ""){
        display.value = "";
    }else{
        try {
            display.value =eval(display.value);
        } catch (error) {
            alert("Enter a valid Input!")
        }
    }
    
}