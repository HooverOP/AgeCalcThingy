document.addEventListener("DOMContentLoaded", function() {

    const dot = document.getElementById("dot");
    const output = document.querySelector(".output");

    function AgeCalc() {
        const birth = new Date(dot.value);
        const time = new Date();
        const age = time.getFullYear() - birth.getFullYear();
        output.textContent = `You are ${age} years old`;
        
    }
    dot.addEventListener("change", AgeCalc);
});