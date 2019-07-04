var single_color_cross_count = {"7x6": 4, "6x5": 2, "5x4": 1};
var multi_color_cross_count = {"7x6": 6, "6x5": 3, "5x4": 2};

function search(){
    var board_size = document.getElementById("board-size").value;

    var results = [];

    for(var i = 0; i < leader_skill_datas.length; i++){        
        var id = leader_skill_datas[i].name.substr(3, leader_skill_datas[i].name.indexOf("-") - 4);
        var image_url = "https://gamewith.akamaized.net/article_tools/pad/gacha/" + id + ".png";

        var times = 1;
        for(var j = 0; j < leader_skill_datas[i]["n"].length; j++){
            var tmp = leader_skill_datas[i]["n"][j].toString().replace("倍", "");
            if(tmp.indexOf("N") != -1){
                tmp = tmp.replace("N", "");
                for(var _ = 0; _ < single_color_cross_count[board_size]; _++){
                    times *= parseFloat(tmp);
                }
            }
            else if(tmp.indexOf("O") != -1){
                tmp = tmp.replace("O", "");
                for(var _ = 0; _ < multi_color_cross_count[board_size]; _++){
                    times *= parseFloat(tmp);
                }
            }
            else{
                times *= parseFloat(tmp);
            }
        }
        row = [leader_skill_datas[i]["name"], image_url, leader_skill_datas[i]["leader_skill"], times];
        results.push(row);
    }
    results = results.sort(function(a, b){
        return parseFloat(a[3]) < parseFloat(b[3]) ? 1 : -1;
    });

    for (var r = 0; r < results.length; r++){
        results[r].push(r+1);
    }

    document.getElementById("result").innerHTML = '<table id="result-table" class="display" width="100%"></table>';
    var result_table = document.getElementById("result-table");
    var table_innerHTML = "<thead><tr><th>名稱</th><th>隊長技能</th><th>單邊最高倍率</th></tr></thead><tbody>";
    for(var r = 0; r < Math.min(100, results.length); r++) {
        table_innerHTML += '<tr><td>' + results[r][4] + '. <img src="' + results[r][1] + '" width="50px" height="50px"> ' + results[r][0] + "</td>";
        
        table_innerHTML += "<td>" + results[r][2] + "</td>";
        table_innerHTML += "<td>" + results[r][3] + "</td></tr>";
    }
    table_innerHTML += "</tbody>";
    result_table.innerHTML = table_innerHTML;
    
    $(document).ready(function() {
        $('#result-table').DataTable( {
            "order": [[ 2, "desc" ]],
            "responsive": true
        } );
    } );
}