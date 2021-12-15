$(document).ready(function () {
    let dataTable;
    var batidas = [];

    montaTabela();

    function montaTabela() {
        let urlBatidas = "http://ec2-34-203-243-53.compute-1.amazonaws.com:8080/batidas";
        $.ajax({
            url: urlBatidas,
            type: 'GET',
            success: function (data) {
                batidas = data;
                let tabela = "<thead> <tr> <td>Nome</td><td>Maior Tempo Inatividade</td><td>Inatividade total</td><td>Horario batida inicio</td><td>Horario batida fim</td></tr> </thead>"
                tabela = tabela.concat("<tbody>")
                batidas.forEach((batida) => {
                    tabela = tabela.concat("<tr>");
                    tabela = tabela.concat("<td>" + batida.nome + "</td>");
                    tabela = tabela.concat("<td>" + batida.maior_tempo_inatividade + " Segundos</td>");
                    tabela = tabela.concat("<td>" + batida.inatividade_total + " Segundos</td>");
                    tabela = tabela.concat("<td>" + new Date(batida.horario_batida_inicio).toLocaleString() + "</td>");
                    tabela = tabela.concat("<td>" + new Date(batida.horario_batida_fim).toLocaleString() + "</td>");
                    tabela = tabela.concat("</tr>");
                })
                tabela = tabela.concat("</tbody>")

                $("#tabela_batida").html(tabela);
                dataTable = $('#tabela_batida').DataTable({
                    paging: false
                });
            }
        });
    }



})
