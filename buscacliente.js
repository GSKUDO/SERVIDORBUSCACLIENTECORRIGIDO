let clientes = [];
let tabela;

function carregarcliente() {
    fetch('/users')
        .then(resposta => resposta.json())
        .then(texto => {
            clientes = texto
            tabela = [];
            document.getElementById("mensagemerro").innerHTML = "";
            console.log(clientes)
            console.log(Array.isArray(clientes))

            let comparativo = document.getElementById("campobusca").value;

            const field = "name";

            clientes.forEach( function(cliente, index) {
                const name = cliente["name"];
                if (name.includes(comparativo)){
                    tabela.push(`<tr>
                    <td>${clientes[index].id}</td>
                    <td>${clientes[index].name}</td>
                    <td>${clientes[index].email}</td>
                    </tr>`);
                }
            });

            console.log("resultado nome" + tabela)

            if (tabela == "") {
                document.getElementById("mensagemerro").innerHTML = "Não encontrado: " + comparativo;
            }else{
                document.querySelector("#tblista tbody").innerHTML = tabela.join("");
            }
        })
}       

function carregarid() {
    fetch('/users')
        .then(resposta => resposta.json())
        .then(texto => {
            clientes = texto
            tabela = [];
            document.getElementById("mensagemerro").innerHTML = "";
            console.log(clientes)
            console.log(Array.isArray(clientes))

            let comparativo = document.getElementById("campobuscaid").value;
            
             const field = "id";

             clientes.forEach( function(cliente, index) {
                 console.log("valor do cliente[id]" + cliente["id"]);
                 console.log("valor comparativo" + comparativo)
                 const id = cliente["id"];
                 if (id == comparativo){
                     tabela.push(`<tr>
                     <td>${clientes[index].id}</td>
                     <td>${clientes[index].name}</td>
                     <td>${clientes[index].email}</td>
                     </tr>`);
                 }
            });
            
             console.log("resultado id" + tabela)

             if (tabela == "") {
                document.getElementById("mensagemerro").innerHTML = "Não encontrado: " + comparativo;
            }else{
                 document.querySelector("#tblista tbody").innerHTML = tabela.join("");
            }
        })
}       

function carregaremail() {
    fetch('/users')
        .then(resposta => resposta.json())
        .then(texto => {
            clientes = texto
            tabela = []
            document.getElementById("mensagemerro").innerHTML = "";
            console.log(clientes)
            console.log(Array.isArray(clientes))

            let comparativo = document.getElementById("campobuscaemail").value;
            const field = "email";

            clientes.forEach( function(cliente, index) {
                const email = cliente["email"];
                if (email.includes(comparativo)){
                    tabela.push(`<tr>
                    <td>${clientes[index].id}</td>
                    <td>${clientes[index].name}</td>
                    <td>${clientes[index].email}</td>
                    </tr>`);
                }
            });

            console.log("resultado email" + tabela)

            if (tabela == "") {
                document.getElementById("mensagemerro").innerHTML = "Não encontrado: " + comparativo;
            }else{
                document.querySelector("#tblista tbody").innerHTML = tabela.join("");
            }
        })
}       