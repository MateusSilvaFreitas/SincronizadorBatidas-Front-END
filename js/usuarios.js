$(document).ready(function () {
    let dataTable;

    montaTabela();
    montaSelectConfig();

    function montaTabela() {
        let urlUsers = "http://ec2-34-203-243-53.compute-1.amazonaws.com:3333/users";
        let users = []
        $.ajax({
            url: urlUsers,
            type: 'GET',
            success: function (data) {
                users = data;
                let tabela = "<thead> <tr> <td>Nome</td><td>Token</td><td>Configuração</td><td>Opções</td> </tr> </thead>"
                tabela = tabela.concat("<tbody>")
                users.forEach((usuario) => {
                    tabela = tabela.concat("<tr>");
                    tabela = tabela.concat("<td>" + usuario.nome + "</td>");
                    tabela = tabela.concat("<td>" + usuario.token + "</td>");
                    tabela = tabela.concat("<td>" + usuario.id_config_usuario + "</td>");
                    tabela = tabela.concat("<td> <button value='" + usuario.token + "' class='btn btn-info' onclick='copiarToken(this)'>Copiar Token</button> </td>");
                    tabela = tabela.concat("</tr>");
                })
                tabela = tabela.concat("</tbody>")

                $("#tabela_usuario").html(tabela);
                dataTable = $('#tabela_usuario').DataTable({
                    paging: false,
                    scrollY: 200
                });
            }
        });
    }

    function montaSelectConfig(){
        let urlConfig = "http://ec2-34-203-243-53.compute-1.amazonaws.com:3333/configs";
        var selectConfig = []
        
        $.ajax({
            url: urlConfig,
            type: 'GET',
            success: function (data) {
                selectConfig = data;
                let select = "<label for='selectConfig' class='form-label'>Configuração</label><select id='selectConfig' class='form-select'>";
                select = select.concat("<option selected>Selecione uma opção</option>")
                selectConfig.forEach((config) => {
                    select = select.concat("<option value='" + config.id + "'> " + config.nome + " </option>");
                })
                select = select.concat("</select>")
    
                $("#configuracoes").html(select);
            }
        });
    }

    $("#formUsuario").submit(function (event) {
        event.preventDefault();
        var nomeUsu = $("#nome").val();
        var config = $("#selectConfig").val();
        if (isNaN(config)) {
            alert("Informe uma configuração")
        } else {
            var settings = {
                "url": "http://ec2-34-203-243-53.compute-1.amazonaws.com:3333/user",
                "type": "POST",
                "timeout": 0,
                "headers": {
                  "Content-Type": "application/json"
                },
                "data": JSON.stringify({
                  "user": {
                    "nome": nomeUsu,
                    "id_config_usuario": config
                  }
                }),
              };
              
              $.ajax(settings).done(function () {
                dataTable.destroy();
                montaTabela();
                $("#nome").val("");
                $("#selectConfig").val("Selecione uma opção");
                alert("Usuário criado com sucesso!")
              });
        }
    })
}

)
