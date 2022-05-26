let inputDay = document.getElementById("dayTime");
let inputMonth = document.getElementById("dayMonth");
let inputSepnd = document.getElementById("spends");
let inputEquipament = document.getElementById("equipament");
let selectPercent = document.getElementById("percent");

let results = document.getElementById("resultado");

let spendsMonth = spends + (inputEquipament.value /12);
let totalWorked = inputDay.value * inputMonth.value;


function total() {
    var equipamentPerMonth = (Number(inputEquipament.value) / 12);
    var allSpending = equipamentPerMonth + Number(inputSepnd.value);
    var hoursMonth = Number(inputDay.value) * Number(inputMonth.value);
    var percent = selectPercent.value / 100;
    

    const resultadoFinal = (allSpending / hoursMonth / (1 - percent));
    resultado.innerHTML =  `<p class="results">Horas trabalhadas no mês: ${hoursMonth} Hrs. <p>
    <p class="results"> Ganho mensal: R$ ${Math.round(resultadoFinal * hoursMonth)},00 </p>
    <p class="results"> Despesas: R$ ${Math.round(allSpending)},00 | Lucro: R$ ${Math.round((resultadoFinal * hoursMonth) - allSpending)},00 </p>
    <p> Esse é o valor que você deve cobrar por hora de trabalho: R$ ${Math.round(resultadoFinal)},00.
     Lembre-se que esse valor, pode variar de acordo com sua região, <br> voce pode cobrar mais do que isso se achar justo, ou cobrar menos
      se achar sua hora de trabalho acima da média. Pesquise qual o valor médio que os profissionais da sua região cobram. 
      Também vale ressaltar, que nesse cálculo, simulamos que seus equipamentos deve se pagar em 12 meses (1 ano).</p>`;

}

