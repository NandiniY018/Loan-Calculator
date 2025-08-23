document.getElementById('loan-form').addEventListener("submit",function(e){
    document.getElementById("results").style.display = "none";
    document.getElementById("loading").style.display = "block"; 
    setTimeout(calculate,2000);
    e.preventDefault();
});
function calculate(e){
    const amount=document.getElementById("loan_amount");
    const interest=document.getElementById("interest");
    const years=document.getElementById("years");
    const monthlyPayment=document.getElementById("monthly_payment");
    const totalAmount=document.getElementById("total_amount");
    const totalInterest=document.getElementById("total_intrest");

    const principle = parseFloat(amount.value); 
    const calculatedInterest = parseFloat(interest.value) /100/ 12 ;
    const calculatedPayment = parseFloat(years.value) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principle * x * calculatedInterest) / (x-1);
    
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2); 
        totalAmount.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = (monthly * calculatedPayment - principle).toFixed(2);
    
        document.getElementById("results").style.display = "block";
        document.getElementById("loading").style.display = "none"; 
    }else{
        showAlert('Please Enter the Amount');
    }
    e.preventDefault();
}
function showAlert(error){
    const errorDiv = document.createElement("div");
    errorDiv.className = "alter alter-danger";
    errorDiv.appendChild(document.createTextNode(error));

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    card.insertBefore(errorDiv, heading);

    setTimeout(function(){
    document.querySelector('.alter').remove();
},3000)
}
