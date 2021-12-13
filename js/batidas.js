$(document).ready(function () {
    let dataTable;
    var objMock = [
        { nome: "Mateus", maior_tempo_inatividade: 0, inatividade_total: 0, horario_batida_inicio: "2021-12-08 23:01:46" , horario_batida_fim: "2021-12-08 23:01:56"},
        { nome: "Mateus", maior_tempo_inatividade: 0, inatividade_total: 0, horario_batida_inicio: "2021-12-08 23:01:46" , horario_batida_fim: "2021-12-08 23:02:00"},
        { nome: "Jeffe", maior_tempo_inatividade: 25, inatividade_total: 15, horario_batida_inicio: "2021-12-08 23:50:01" , horario_batida_fim: "2021-12-08 23:54:42"},
        { nome: "Pedro", maior_tempo_inatividade: 464, inatividade_total: 460, horario_batida_inicio: "2021-12-11 15:42:16" , horario_batida_fim: "2021-12-11 15:50:08"},

    ]
    montaTabela();
    
    function montaTabela(){
        let tabela = "<thead> <tr> <td>Nome</td><td>Maior Tempo Inatividade</td><td>Inatividade total</td><td>Horario batida inicio</td><td>Horario batida fim</td></tr> </thead>"
        tabela = tabela.concat("<tbody>")
        objMock.forEach((batida) => {
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
 
})
