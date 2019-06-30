var types = {"0": "ドラゴン", "1": "神", "2": "悪魔", "3": "マシン", "4": "バランス", "5": "攻撃", "6": "体力", "7": "回復", "8": "進化用", "9": "能力覚醒用", "10": "強化合成用", "11": "売却用"};
var types_rev = {"ドラゴン": "0", "神": "1", "悪魔": "2", "マシン": "3", "バランス": "4", "攻撃": "5", "体力": "6", "回復": "7", "進化用": "8", "能力覚醒用": "9", "強化合成用": "10", "売却用": "11"};

var double_rule = {"fire": "wood", "water": "fire", "wood": "water", "light": "dark", "dark": "light"};
var half_rule = {"fire": "water", "water": "wood", "wood": "fire", "light": "", "dark": ""};

var chi_to_eng = {"火": "fire", "水": "water", "木": "wood", "光": "light", "暗": "dark"};
var eng_to_chi = {"fire": "火", "water": "水", "wood": "木", "light": "光", "dark": "暗"};

var img_path = {"火": "img/top01.png", "水": "img/top02.png", "木": "img/top03.png", "光": "img/top04.png", "暗": "img/top05.png", "2体攻撃": "img/k27.png","ドラゴンキラー": "img/k31.png", "神キラー": "img/k32.png", "悪魔キラー": "img/k33.png", "マシンキラー": "img/k34.png", "バランスキラー": "img/k35.png", "攻撃キラー": "img/k36.png", "体力キラー": "img/k37.png", "回復キラー": "img/k38.png", "進化用キラー": "img/k39.png", "能力覚醒用キラー": "img/k40.png", "強化合成用キラー": "img/k41.png", "売却用キラー": "img/k42.png", "コンボ強化": "img/k43.png", "ダメージ無効貫通": "img/k49.png", "HP80％以上強化": "img/k57.png", "HP50％以下強化": "img/k58.png", "L字消し攻撃": "img/k60.png", "超コンボ強化": "img/k61.png"};
var potential_path = {"ドラゴンキラー": "img/sk03.png", "神キラー": "img/sk02.png", "悪魔キラー": "img/sk04.png", "マシンキラー": "img/sk05.png", "バランスキラー": "img/sk06.png", "攻撃キラー": "img/sk07.png", "体力キラー": "img/sk08.png", "回復キラー": "img/sk09.png", "進化用キラー": "img/sk10.jpg", "能力覚醒用キラー": "img/sk11.jpg", "強化合成用キラー": "img/sk12.jpg", "売却用キラー": "img/sk13.jpg"}

function removeOptions(selectbox){
  var i;
  for(i = selectbox.options.length - 1 ; i > 0 ; i--){
    selectbox.remove(i);
  }
}

function init(){

  // initial type selection
  var type1 = document.getElementById("type1");
  for(var t=0;t<Object.keys(types).length;t++){
    var new_option = new Option(types[t],t);
    type1.options.add(new_option);
  }

  // initial orb selection
  var orb = document.getElementById("orb");
  for(var i=4;i<30;i++){
    var new_option = new Option(i,i);
    orb.options.add(new_option);
    if(i == 5){
      new_option = new Option("L字", "L");
      orb.options.add(new_option);
    }
    if(i == 9){
      new_option = new Option("正方形", "square");
      orb.options.add(new_option);
    }
  }

  // initial combo selection
  var orb = document.getElementById("combo");
  for(var i=2;i<=20;i++){
    var new_option = new Option(i,i);
    orb.options.add(new_option);
  }
}

function initType2(){
  var type1_selected = document.getElementById("type1").value;
  var type2 = document.getElementById("type2");
  removeOptions(type2);
  if(type1_selected != "none"){
    for(var t=0;t<Object.keys(types).length;t++){
      if(t == type1_selected)
        continue
      var new_option = new Option(types[t],t);
      type2.options.add(new_option);
    }
  }
  initType3()
}

function initType3(){
  var type1_selected = document.getElementById("type1").value;
  var type2_selected = document.getElementById("type2").value;
  var type3 = document.getElementById("type3");
  removeOptions(type3);
  if(type1_selected != "none" && type2_selected != "none"){
    for(var t=0;t<Object.keys(types).length;t++){
      if(t == type1_selected || t == type2_selected)
        continue
      var new_option = new Option(types[t],t);
      type3.options.add(new_option);
    }
  }
}

function hpChange(){
  var bar = document.getElementById('hp-bar');
  var select = document.getElementById('hp-select').value;
  $('#hp-bar').width(select + "%").attr('aria-valuenow', select);
}

function levelChange(){
  var level = document.getElementById('level').value;

  if(level == 99){
    document.getElementById('super-awoken').selectedIndex  = 1;
  }
}

function plusChange(){
  var plus = document.getElementById('plus').value;

  if(plus == 0){
    document.getElementById('super-awoken').selectedIndex  = 1;
  }
}

function search(){
  var enemy_property = document.getElementById("property").value;
  var type1 = document.getElementById('type1').value;
  var type2 = document.getElementById('type2').value;
  var type3 = document.getElementById('type3').value;
  var enemy_type = [type1, type2, type3];
  var team_hp = document.getElementById('hp-select').value;
  var orb = document.getElementById('orb').value;
  var combo = document.getElementById('combo').value;
  var level = document.getElementById('level').value;
  var plus = document.getElementById('plus').value;
  var super_awoken = document.getElementById('super-awoken').value;

  var shape = "none";
  if(orb == "square"){
    shape = "square";
    orb = 9;
  }
  else if(orb == "L"){
    shape = "L";
    orb = 5;
  }
  else if(orb == 4){
    shape = "U";
  }

  var results = [];
    
  for (var i = 0; i < datas.length; i++) {
    var id = datas[i].name.substr(3, datas[i].name.indexOf("-") - 4);
    var image_url = "https://gamewith.akamaized.net/article_tools/pad/gacha/" + id + ".png";
      
    var processes = {"awoken": [], "potential": [], "super_awoken": [], "property": "normal"};
      
    // choose lv99 attack or lv110 attack
    var basic_attack = datas[i].attack_99;
    var lv = '99';
    if(level == 110){
      basic_attack = Math.max(datas[i].attack_99, datas[i].attack_110);
      lv = '110';
    }
    basic_attack += parseInt(plus);
    var origin_attack = basic_attack;

    // basic_attack increase when number of orb increase
    basic_attack *= (1 + (0.25 * (orb - 3)));

    // basic_attack increase when combo increase
    basic_attack *= (1 + (0.25 * (combo - 1)));

    // double attack or half attack because of property rule
    if(double_rule[chi_to_eng[datas[i].main_property]] == enemy_property){
      basic_attack *= 2;
      processes["property"] = "double";
    }
    if(half_rule[chi_to_eng[datas[i].main_property]] == enemy_property){
      basic_attack *= 1/2;
      processes["property"] = "half";
    }

    // awoken
    for(var j = 0; j < datas[i].awoken.length; j++) {
      if(enemy_type.includes(types_rev[datas[i].awoken[j].replace("キラー", "")])){
        basic_attack *= 3;
        processes["awoken"].push(datas[i].awoken[j]);
      }
      if(team_hp > 80 && datas[i].awoken[j] == "HP80％以上強化"){
        basic_attack *= 1.5;
        processes["awoken"].push(datas[i].awoken[j]);
      }
      if(team_hp < 50 && datas[i].awoken[j] == "HP50％以下強化"){
        basic_attack *= 2;
        processes["awoken"].push(datas[i].awoken[j]);
      }
      if(shape == "U" && datas[i].awoken[j] == "2体攻撃"){
        basic_attack *= 1.5;
        processes["awoken"].push(datas[i].awoken[j]);
      }
      if(shape == "L" && datas[i].awoken[j] == "L字消し攻撃"){
        basic_attack *= 1.5;
        processes["awoken"].push(datas[i].awoken[j]);
      }
      if(shape == "square" && datas[i].awoken[j] == "ダメージ無効貫通"){
        basic_attack *= 2.5;
        processes["awoken"].push(datas[i].awoken[j]);
      }
      if(combo >= 7 && datas[i].awoken[j] == "コンボ強化"){
        basic_attack *= 2;
        processes["awoken"].push(datas[i].awoken[j]);
      }
      if(combo >= 10 && datas[i].awoken[j] == "超コンボ強化"){
        basic_attack *= 5;
        processes["awoken"].push(datas[i].awoken[j]);
      }
    }
      
    // potential awoken killer
    var flag = false;
    for(var j = 0; j < datas[i].potential.length; j++) {
      if(enemy_type.includes(types_rev[datas[i].potential[j].replace("キラー", "")])){
        if(!flag){
          basic_attack *= 1.5*1.5*1.5;
        }
        flag = true;
        processes["potential"].push(datas[i].potential[j]);
      }
    }
      
    // super awoken
    flag = false;
    if(super_awoken == "yes" && level == 110){
      if(!flag && combo >= 10){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "超コンボ強化"){
            basic_attack *= 5;
            flag = true;
            processes["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(enemy_type.includes(types_rev[datas[i].super_awoken[j].replace("キラー", "")])){
            if(!flag){
              basic_attack *= 3;
            }
            flag = true;
            processes["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && shape == "square"){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "ダメージ無効貫通"){
            basic_attack *= 2.5;
            flag = true;
            processes["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && team_hp < 50){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "HP50％以下強化"){
            basic_attack *= 2;
            flag = true;
            processes["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && combo >= 7){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "コンボ強化"){
            basic_attack *= 2;
            flag = true;
            processes["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && team_hp > 80){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "HP80％以上強化"){
            basic_attack *= 1.5;
            flag = true;
            processes["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && shape == "U"){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "2体攻撃"){
            basic_attack *= 1.5;
            flag = true;
            processes["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && shape == "L"){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "L字消し攻撃"){
            basic_attack *= 1.5;
            flag = true;
            processes["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
    }

    
    // result = {"name": datas[i].name, "main_property": datas[i].main_property, "processes": processes, "attack": basic_attack};
       
    result = [datas[i].name, image_url, datas[i].main_property, 
              processes["awoken"], processes["potential"], processes["super_awoken"], 
              lv, origin_attack, basic_attack];
    results.push(result);

  }
  
  results = results.sort(function(a, b){
      return parseFloat(a[8]) < parseFloat(b[8]) ? 1 : -1;
  });

  for (var r = 0; r < results.length; r++){
    results[r].push(r+1);
  }
                         
  // console.log(results);
    
  document.getElementById("result").innerHTML = '<table id="result-table" class="display nowrap" width="100%"></table>';
  var result_table = document.getElementById("result-table");
  var table_innerHTML = "<thead><tr><th>名稱</th><th>主屬性</th><th></th><th>原始攻擊(等級)</th><th>最終攻擊</th></tr></thead><tbody>";
  for(var r = 0; r < Math.min(100, results.length); r++) {
    table_innerHTML += '<tr><td>' + results[r][9] + '. <img src="' + results[r][1] + '" width="50px" height="50px"> ' + results[r][0] + "</td>";
    table_innerHTML += '<td><img src="' + img_path[results[r][2]] + '" width="15px" height="15px">' + results[r][2] + "</td>";

    table_innerHTML += "<td>";
    if(results[r][3].length != 0){
      table_innerHTML += "<div>覺醒：";
      for(var p = 0; p < results[r][3].length; p++){
        table_innerHTML += '<img src="' + img_path[results[r][3][p]] + '" width="30px" height="30px">' + ' ';
      }
      table_innerHTML += "</div>";
    }

    if(results[r][4].length != 0){
      table_innerHTML += "<div>潛在覺醒：";
      table_innerHTML += '<img src="' + potential_path[results[r][4][0]] + '" width="75px" height="25px">' + '*3 ';
      for(var p = 1; p < results[r][4].length; p++){
        table_innerHTML += 'or <img src="' + potential_path[results[r][4][p]] + '" width="75px" height="25px">' + '*3 ';
      }
      table_innerHTML += "</div>";
    }

    if(results[r][5].length != 0){
      table_innerHTML += "<div>超覺醒：";
      table_innerHTML += '<img src="' + img_path[results[r][5][0]] + '" width="30px" height="30px"> ';
      for(var p = 1; p < results[r][5].length; p++){
        table_innerHTML += 'or <img src="' + img_path[results[r][5][p]] + '" width="30px" height="30px">';
      }
      table_innerHTML += "</div>";
    }

    table_innerHTML += "</td>";
    table_innerHTML += "<td>" + results[r][7] + "(Lv." + results[r][6] + ")</td>";
    table_innerHTML += "<td>" + results[r][8] + "</td></tr>"; 
  }
  table_innerHTML += "</tbody>";
  result_table.innerHTML = table_innerHTML;
    
  $(document).ready(function() {
      $('#result-table').DataTable( {
          "order": [[ 4, "desc" ]],
          "responsive": true
      } );
  } );
  

}


    