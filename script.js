const converterBtn = document.getElementById("convert-btn");
const saida = document.getElementById("output");

const convertToRoman = (num) => {
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let result = "";
    for (const [roman, value] of romanNumerals) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }
    return result;
};

converterBtn.addEventListener("click", () => {
    const num = parseInt(document.getElementById("number").value);

    if (isNaN(num) || num < 1 || num > 3999) {
        saida.classList.remove("hidden");
        saida.textContent = "Por favor, digite um número válido (entre 1 e 3999).";
    } else {
        const roman = convertToRoman(num);
        saida.classList.remove("hidden");
        console.log(roman); // Verifica se o valor de roman está correto no console
        saida.textContent = roman;
    }
});
