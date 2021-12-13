$(document).ready(function () {
    var objMock = [
        { id: 1, nome: "Roberto", token: "56afb8ca-e0e7-4512-9500-37e403dabf78", configuracao: 1 },
        { id: 2, nome: "Pedro", token: "36b6f4f0-941e-4a21-9df1-261ac924d987", configuracao: 3 },
        { id: 3, nome: "Carlos", token: "c0f1d261-baca-4ca1-9413-826cee1404ae", configuracao: 2 },
        { id: 4, nome: "Lucas", token: "bde53a60-bc30-44f6-a402-74c2674afb8d", configuracao: 2 },
        { id: 5, nome: "Marcos", token: "c4d3f463-3bd1-4319-92b6-cdbd2cb5053f", configuracao: 1 },
        { id: 6, nome: "Luiz", token: "c8fce62e-c00f-46af-a6f2-2941f90b8bcb", configuracao: 1 }
    ]

    var selectConfig = [
        { id: 1, nome: "Padrão" },
        { id: 2, nome: "Diretores" },
        { id: 3, nome: "Secretárias" },
    ]

    let tabela = "<thead> <tr> <td>Nome</td><td>Token</td><td>Configuração</td><td>Opções</td> </tr> </thead>"
    tabela = tabela.concat("<tbody>")
    objMock.forEach((usuario) => {
        tabela = tabela.concat("<tr>");
        tabela = tabela.concat("<td>" + usuario.nome + "</td>");
        tabela = tabela.concat("<td>" + usuario.token + "</td>");
        tabela = tabela.concat("<td>" + usuario.configuracao + "</td>");
        tabela = tabela.concat("<td> <button value='" + usuario.token + "' class='btn btn-info'>Copiar Token</button> </td>");
        tabela = tabela.concat("</tr>");
    })
    tabela = tabela.concat("</tbody>")

    $("#tabela_usuario").html(tabela);
    $('#tabela_usuario').DataTable({
        paging: false,
        scrollY: 200
    });

    let select = "<select class='form-select'>";
    select = select.concat("<option selected>Selecione uma opção</option>")
    selectConfig.forEach((config) => {
        select = select.concat("<option value='" + config.id + "'> " + config.nome + " </option>");
    })
    select = select.concat("</select>")

    $("#configuracoes").html(select);


    $('.btn-info').click(function () {
        navigator.clipboard.writeText($(this).val());
        alert("Copiado")
    });
}

)
