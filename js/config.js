$(document).ready(function () {
    let dataTable;
    var objMock = [
        { id: 1, nome: "Padrão", tempoCiclo: 1, qntdCiclo: 5 },
        { id: 2, nome: "Diretores", tempoCiclo: 4, qntdCiclo: 5 },
        { id: 3, nome: "Secretárias", tempoCiclo: 2, qntdCiclo: 5},

    ]

    montaTabela();
    
    function montaTabela(){
        let tabela = "<thead> <tr> <td>Nome</td><td>Tempo ciclo</td><td>Quantidade ciclos</td></tr> </thead>"
        tabela = tabela.concat("<tbody>")
        objMock.forEach((config) => {
            tabela = tabela.concat("<tr>");
            tabela = tabela.concat("<td>" + config.nome + "</td>");
            tabela = tabela.concat("<td>" + config.tempoCiclo + "</td>");
            tabela = tabela.concat("<td>" + config.qntdCiclo + "</td>");
            tabela = tabela.concat("</tr>");
        })
        tabela = tabela.concat("</tbody>")

        $("#tabela_config").html(tabela);
        dataTable = $('#tabela_config').DataTable({
            paging: false
        });
    }
 

    $("#formConfig").submit(function(event){
        event.preventDefault();
        var nome = $("#nome").val();
        var tempoCiclo = $("#tempoCiclo").val();
        var qntdCiclo = $("#qntdCiclo").val();
        /*ENVIAR PARA O BACK A CONFIG CRIADA E RE-GERAR A TABELA COM O USUÁRIO NOVO*/
        objMock.push({nome: nome, tempoCiclo: tempoCiclo, qntdCiclo: qntdCiclo})
        dataTable.destroy();
        montaTabela();
        $("#nome").val("");
        $("#tempoCiclo").val("");
        $("#qntdCiclo").val("");

        
    })
})
