var types = {"0": "ドラゴン", "1": "神", "2": "悪魔", "3": "マシン", "4": "バランス", "5": "攻撃", "6": "体力", "7": "回復", "8": "進化用", "9": "能力覚醒用", "10": "強化合成用", "11": "売却用"};
var types_rev = {"ドラゴン": "0", "神": "1", "悪魔": "2", "マシン": "3", "バランス": "4", "攻撃": "5", "体力": "6", "回復": "7", "進化用": "8", "能力覚醒用": "9", "強化合成用": "10", "売却用": "11"};

var double_rule = {"fire": "wood", "water": "fire", "wood": "water", "light": "dark", "dark": "light"};
var half_rule = {"fire": "water", "water": "wood", "wood": "fire", "light": "", "dark": ""};

var chi_to_eng = {"火": "fire", "水": "water", "木": "wood", "光": "light", "暗": "dark"};
var eng_to_chi = {"fire": "火", "water": "水", "wood": "木", "light": "光", "dark": "暗"};

var img_path = {
  "火": "img/top01.png",
  "水": "img/top02.png",
  "木": "img/top03.png",
  "光": "img/top04.png",
  "暗": "img/top05.png",
  "HP強化": "img/k1.png",
  "攻撃強化": "img/k2.png",
  "回復強化": "img/k3.png",
  "火ダメージ軽減": "img/k4.png",
  "水ダメージ軽減": "img/k5.png",
  "木ダメージ軽減": "img/k6.png",
  "光ダメージ軽減": "img/k7.png",
  "闇ダメージ軽減": "img/k8.png",
  "自動回復": "img/k9.png",
  "バインド耐性": "img/k10.png",
  "暗闇耐性": "img/k11.png",
  "お邪魔耐性": "img/k12.png",
  "毒耐性": "img/k13.png",
  "火ドロップ強化": "img/k14.png",
  "水ドロップ強化": "img/k15.png",
  "水ドロップ強化": "img/k16.png",
  "光ドロップ強化": "img/k17.png",
  "闇ドロップ強化": "img/k18.png",
  "操作時間延長": "img/k19.png",
  "バインド回復": "img/k20.png",
  "スキルブースト": "img/k21.png",
  "火属性強化": "img/k22.png",
  "水属性強化": "img/k23.png",
  "木属性強化": "img/k24.png",
  "光属性強化": "img/k25.png",
  "闇属性強化": "img/k26.png",
  "2体攻撃": "img/k27.png",
  "封印耐性": "img/k28.png",
  "回復ドロップ強化": "img/k29.png",
  "マルチブースト": "img/k30.png",
  "ドラゴンキラー": "img/k31.png",
  "神キラー": "img/k32.png",
  "悪魔キラー": "img/k33.png",
  "マシンキラー": "img/k34.png",
  "バランスキラー": "img/k35.png",
  "攻撃キラー": "img/k36.png",
  "体力キラー": "img/k37.png",
  "回復キラー": "img/k38.png",
  "進化用キラー": "img/k39.png",
  "能力覚醒用キラー": "img/k40.png",
  "強化合成用キラー": "img/k41.png",
  "売却用キラー": "img/k42.png",
  "コンボ強化": "img/k43.png",
  "ガードブレイク": "img/k44.png",
  "追加攻撃": "img/k46.png",
  "チームHP強化": "img/k47.png",
  "チーム回復強化": "img/k48.png",
  "ダメージ無効貫通": "img/k49.png",
  "超追加攻撃": "img/k50.png",
  "スキルチャージ": "img/k51.png",
  "バインド耐性＋": "img/k52.png",
  "操作時間延長＋": "img/k53.png",
  "雲耐性": "img/k54.png",
  "操作不可耐性": "img/k55.png",
  "スキルブースト＋": "img/k56.png",
  "HP80％以上強化": "img/k57.png",
  "HP50％以下強化": "img/k58.png",
  "回復L字消し": "img/k59.png",
  "L字消し攻撃": "img/k60.png",
  "超コンボ強化": "img/k61.png",
  "暗闇耐性＋": "img/k68.png",
  "お邪魔耐性＋": "img/k69.png",
  "毒耐性＋": "img/k70.png",
  "お邪魔ドロップの加護": "img/k71.png",
  "毒ドロップの加護": "img/k72.png",
  "スキルボイス": "img/k80.png",
  "ダンジョンボーナス": "img/k81.png",
  "コンボドロップ": "img/k82.png",
  "HP弱化": "img/k83.png",
  "攻撃弱化": "img/k84.png",
  "回復弱化": "img/k85.png",
  };
var potential_path = {"ドラゴンキラー": "img/sk03.png", "神キラー": "img/sk02.png", "悪魔キラー": "img/sk04.png", "マシンキラー": "img/sk05.png", "バランスキラー": "img/sk06.png", "攻撃キラー": "img/sk07.png", "体力キラー": "img/sk08.png", "回復キラー": "img/sk09.png", "進化用キラー": "img/sk10.jpg", "能力覚醒用キラー": "img/sk11.jpg", "強化合成用キラー": "img/sk12.jpg", "売却用キラー": "img/sk13.jpg"}

var property_filter = {"fire": true, "water": true, "wood": true, "light": true, "dark": true};

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
    var new_option = new Option(i, i);
    orb.options.add(new_option);
    if(i == 5){
      new_option = new Option("L字型", "L");
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

function monsterPropertyClick(self){
  if(document.getElementById(self.id).classList.contains("table-dark")){
    document.getElementById(self.id).classList.remove("table-dark");
    property_filter[self.id] = false;
  }
  else{
    document.getElementById(self.id).classList.add("table-dark");
    property_filter[self.id] = true;
  }
}

function updateClick(){
  if(document.getElementById("update-content").classList.contains("d-none")){
    document.getElementById("update-content").classList.remove("d-none");
  }
  else{
    document.getElementById("update-content").classList.add("d-none");
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

function orbChange(){
  var orb = document.getElementById('orb').value;

  if(orb == 'square'){
    document.getElementById('square-promise-div').classList.remove('d-none');

    document.getElementById('orb-div').classList.remove('col-lg-6');
    document.getElementById('orb-div').classList.remove('col-sm-12');

    document.getElementById('orb-div').classList.add('col-lg-3');
    document.getElementById('orb-div').classList.add('col-sm-6');

    document.getElementById('square-promise').selectedIndex = 0;
  }
  else{
    document.getElementById('square-promise-div').classList.add('d-none');

    document.getElementById('orb-div').classList.remove('col-lg-3');
    document.getElementById('orb-div').classList.remove('col-sm-6');

    document.getElementById('orb-div').classList.add('col-lg-6');
    document.getElementById('orb-div').classList.add('col-sm-12');

    document.getElementById('square-promise').selectedIndex = 1;
  }
}

function plusOrMultiChange(){
  var plus = document.getElementById('plus').value;
  var multi = document.getElementById('multi').value;

  if(plus == 495 && multi == "no"){
    document.getElementById('super-awoken').selectedIndex  = 0;
    document.getElementById('super-awoken').options[0].disabled = false;
  }
  else{
    document.getElementById('super-awoken').selectedIndex  = 1;
    document.getElementById('super-awoken').options[0].disabled = true;
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
  var square_promise = document.getElementById('square-promise').value;
  var combo = document.getElementById('combo').value;
  var level = document.getElementById('level').value;
  var plus = document.getElementById('plus').value;
  var multi = document.getElementById('multi').value;
  var potential_num = document.getElementById('potential-num').value;
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
      if(multi == "yes" && datas[i].awoken[j] == "マルチブースト"){
        basic_attack *= 1.5;
        processes["awoken"].push(datas[i].awoken[j]);
      }
    }

    // potential awoken killer
    var flag = false;
    datas[i].potential.push("進化用キラー");
    datas[i].potential.push("能力覚醒用キラー");
    datas[i].potential.push("強化合成用キラー");
    datas[i].potential.push("売却用キラー");
    for(var j = 0; j < datas[i].potential.length; j++) {
      if(enemy_type.includes(types_rev[datas[i].potential[j].replace("キラー", "")])){
        if(!flag){
          basic_attack *= Math.pow(1.5, potential_num);
        }
        flag = true;
        processes["potential"].push(datas[i].potential[j]);
      }
    }
    datas[i].potential.pop();
    datas[i].potential.pop();
    datas[i].potential.pop();
    datas[i].potential.pop();

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
              lv, origin_attack, basic_attack, datas[i]];
    results.push(result);

  }

  results = results.sort(function(a, b){
      return parseFloat(a[8]) < parseFloat(b[8]) ? 1 : -1;
  });

  // console.log(results);

  document.getElementById("result").innerHTML = '<table id="result-table" class="display nowrap" width="100%"></table>';
  var result_table = document.getElementById("result-table");
  var table_innerHTML = "<thead><tr><th>名前</th><th>属性</th><th></th><th>攻撃力(レベル)</th><th>最終攻撃力</th></tr></thead><tbody>";
  var rank = 1;
  for(var r = 0; r < Math.min(100, results.length); r++) {
    if(square_promise == 'yes' && !results[r][3].includes('ダメージ無効貫通') && !results[r][5].includes('ダメージ無効貫通')){
      continue;
    }
    if(!property_filter[chi_to_eng[[results[r][2]]]]) {
      continue;
    }

    table_innerHTML += '<tr><td><div>' + rank + '. <img src="' + results[r][1] + '" width="50px" height="50px"> ' + results[r][0] + "</div><div>";

    for(var a = 0; a < results[r][9].awoken.length; a++){
      table_innerHTML += '<img src="' + img_path[results[r][9].awoken[a]] + '" width="20px" height="20px">';
    }

    if (results[r][9].super_awoken.length > 0) {
      table_innerHTML += '  超覚醒: ';
      for(var a = 0; a < results[r][9].super_awoken.length; a++){
        table_innerHTML += '<img src="' + img_path[results[r][9].super_awoken[a]] + '" width="20px" height="20px">';
      }
    }

    table_innerHTML += '</td>'

    table_innerHTML += '<td><img src="' + img_path[results[r][2]] + '" width="15px" height="15px">' + results[r][2] + "</td>";

    table_innerHTML += "<td>";
    if(results[r][3].length != 0){
      table_innerHTML += "<div>覚醒：";
      for(var p = 0; p < results[r][3].length; p++){
        table_innerHTML += '<img src="' + img_path[results[r][3][p]] + '" width="30px" height="30px">' + ' ';
      }
      table_innerHTML += "</div>";
    }

    if(results[r][4].length != 0 && potential_num != 0){
      table_innerHTML += "<div>潜在覚醒：";
      table_innerHTML += '<img src="' + potential_path[results[r][4][0]] + '" width="75px" height="25px">' + '*' + potential_num + ' ';
      for(var p = 1; p < results[r][4].length; p++){
        table_innerHTML += 'or <img src="' + potential_path[results[r][4][p]] + '" width="75px" height="25px">' + '*' + potential_num + ' ';
      }
      table_innerHTML += "</div>";
    }

    if(results[r][5].length != 0){
      table_innerHTML += "<div>超覚醒：";
      table_innerHTML += '<img src="' + img_path[results[r][5][0]] + '" width="30px" height="30px"> ';
      for(var p = 1; p < results[r][5].length; p++){
        table_innerHTML += 'or <img src="' + img_path[results[r][5][p]] + '" width="30px" height="30px">';
      }
      table_innerHTML += "</div>";
    }

    table_innerHTML += "</td>";
    table_innerHTML += "<td>" + results[r][7] + "(Lv." + results[r][6] + ")</td>";
    table_innerHTML += "<td>" + results[r][8].toFixed(1) + "</td></tr>";

    rank += 1;
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
