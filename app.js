const form =
document.getElementById("farmForm");

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const farmer = {

name:
document.getElementById("name").value,

county:
document.getElementById("county").value,

gender:
document.getElementById("gender").value,

birdType:
document.getElementById("birdType").value,

birds:
document.getElementById("birds").value,

income:
document.getElementById("income").value

};

localStorage.setItem(
"farmData",
JSON.stringify(farmer)
);

document.getElementById(
"success"
).innerHTML =

`
✅ Scout Agent Collected Data

✅ Sent To Poultry Health Agent

✅ Sent To Finance Agent

✅ Guardian Agent Review Pending
`;

form.reset();

});

const chartCanvas = document.getElementById("impactChart");

if (chartCanvas) {

    new Chart(chartCanvas, {
        type: "bar",
        data: {
            labels: [
                "Loan Approval",
                "Mortality Reduction",
                "Egg Production"
            ],
            datasets: [{
                label: "FarmUP Impact (%)",
                data: [37, 42, 31]
            }]
        },
        options: {
            responsive: true
        }
    });

}