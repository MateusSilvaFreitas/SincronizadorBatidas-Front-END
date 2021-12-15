$(document).ready(function () {
  let dataTable;
  var configs = []

  montaTabela();

  function montaTabela() {
    let urlConfig = "http://ec2-34-203-243-53.compute-1.amazonaws.com:3333/configs";
    $.ajax({
      url: urlConfig,
      type: 'GET',
      success: function (data) {
        configs = data;
        let tabela = "<thead> <tr> <td>Nome</td><td>Tempo ciclo</td><td>Quantidade ciclos</td></tr> </thead>"
        tabela = tabela.concat("<tbody>")
        configs.forEach((config) => {
          tabela = tabela.concat("<tr>");
          tabela = tabela.concat("<td>" + config.nome + "</td>");
          tabela = tabela.concat("<td>" + config.qntdTempoCiclo + "</td>");
          tabela = tabela.concat("<td>" + config.qntdCiclosInativo + "</td>");
          tabela = tabela.concat("</tr>");
        })
        tabela = tabela.concat("</tbody>")

        $("#tabela_config").html(tabela);
        dataTable = $('#tabela_config').DataTable({
          paging: false
        });
      }
    });
  }


  $("#formConfig").submit(function (event) {
    event.preventDefault();
    var nome = $("#nome").val();
    var tempoCiclo = $("#tempoCiclo").val();
    var qntdCiclo = $("#qntdCiclo").val();

    var settings = {
      "url": "http://ec2-34-203-243-53.compute-1.amazonaws.com:3333/config",
      "type": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "user": {
          "nome": nome,
          "qntdTempoCiclo": tempoCiclo,
          "qntdCiclosInativo": qntdCiclo
        }
      }),
    };

    $.ajax(settings).done(function () {
      dataTable.destroy();
      montaTabela();
      $("#nome").val("");
      $("#tempoCiclo").val("");
      $("#qntdCiclo").val("");
      alert("Configuração criada com sucesso!")
    });
  })
})
