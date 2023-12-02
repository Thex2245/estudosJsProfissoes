// Switch

const job = prompt ("Informe qual é sua profissão atual:")

switch (job){
    case "programador":
        console.log("Você é um programador!");
        break;
    case "advogado":
        console.log("Você é um advogado!");
        break;
    case "engenheiro":
        console.log("Você é um engenheiro!");
        break;
    case "médico":
        console.log("Você é um advogado");
        break;
    default:
        console.log("Profissão não encontrada!");
}