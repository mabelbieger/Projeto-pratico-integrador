const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

//fazer scafolding da api primeiro
//ver a arquitetura q será usada

//sistema q crie uma tarefa, salvar em memoria só, exemplo do array vazio e acrescentava registros nele,
//data criacao descricao titulo status prazos (isso de cada tarefa).git

//.env .gitignore .models fora da pasta src