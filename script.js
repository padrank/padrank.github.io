var types = {"0": "ドラゴン", "1": "神", "2": "悪魔", "3": "マシン", "4": "バランス", "5": "攻撃", "6": "体力", "7": "回復", "8": "進化用", "9": "能力覚醒用", "10": "強化合成用", "11": "売却用"};
var types_rev = {"ドラゴン": "0", "神": "1", "悪魔": "2", "マシン": "3", "バランス": "4", "攻撃": "5", "体力": "6", "回復": "7", "進化用": "8", "能力覚醒用": "9", "強化合成用": "10", "売却用": "11"};

var double_rule = {"fire": "wood", "water": "fire", "wood": "water", "light": "dark", "dark": "light"};
var half_rule = {"fire": "water", "water": "wood", "wood": "fire", "light": "", "dark": ""};

var chi_to_eng = {"火": "fire", "水": "water", "木": "wood", "光": "light", "暗": "dark"};
var eng_to_chi = {"fire": "火", "water": "水", "wood": "木", "light": "光", "dark": "暗"};

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
      new_option = new Option("L", "L");
      orb.options.add(new_option);
    }
    if(i == 9){
      new_option = new Option("Square", "square");
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
      
    var process = {"awoken": [], "potential": [], "super_awoken": [], "property": "normal"};
      
    // choose lv99 attack or lv110 attack
    var basic_attack = datas[i].attack_99;
    if(level == 110){
      basic_attack = Math.max(datas[i].attack_99, datas[i].attack_110);
    }

    // basic_attack increase when number of orb increase
    basic_attack *= (1 + (0.25 * orb));

    // basic_attack increase when combo increase
    basic_attack *= (1 + (0.25 * (combo - 1)));

    // double attack or half attack because of property rule
    if(double_rule[chi_to_eng[datas[i].main_property]] == enemy_property){
      basic_attack *= 2;
      process["property"] = "double";
    }
    if(half_rule[chi_to_eng[datas[i].main_property]] == enemy_property){
      basic_attack *= 1/2;
      process["property"] = "half";
    }

    // awoken
    for(var j = 0; j < datas[i].awoken.length; j++) {
      if(enemy_type.includes(types_rev[datas[i].awoken[j].replace("キラー", "")])){
        basic_attack *= 3;
        process["awoken"].push(datas[i].awoken[j]);
      }
      if(team_hp > 80 && datas[i].awoken[j] == "HP80％以上強化"){
        basic_attack *= 1.5;
        process["awoken"].push(datas[i].awoken[j]);
      }
      if(team_hp < 50 && datas[i].awoken[j] == "HP50％以下強化"){
        basic_attack *= 2;
        process["awoken"].push(datas[i].awoken[j]);
      }
      if(shape == "U" && datas[i].awoken[j] == "2体攻撃"){
        basic_attack *= 1.5;
        process["awoken"].push(datas[i].awoken[j]);
      }
      if(shape == "L" && datas[i].awoken[j] == "L字消し攻撃"){
        basic_attack *= 1.5;
        process["awoken"].push(datas[i].awoken[j]);
      }
      if(shape == "square" && datas[i].awoken[j] == "ダメージ無効貫通"){
        basic_attack *= 2.5;
        process["awoken"].push(datas[i].awoken[j]);
      }
      if(combo >= 7 && datas[i].awoken[j] == "コンボ強化"){
        basic_attack *= 2;
        process["awoken"].push(datas[i].awoken[j]);
      }
      if(combo >= 10 && datas[i].awoken[j] == "超コンボ強化"){
        basic_attack *= 5;
        process["awoken"].push(datas[i].awoken[j]);
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
        process["potential"].push(datas[i].potential[j]);
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
            process["super_awoken"].push(datas[i].super_awoken[j]);
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
            process["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && shape == "square"){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "ダメージ無効貫通"){
            basic_attack *= 2.5;
            flag = true;
            process["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && team_hp < 50){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "HP50％以下強化"){
            basic_attack *= 2;
            flag = true;
            process["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && combo >= 7){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "コンボ強化"){
            basic_attack *= 2;
            flag = true;
            process["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && team_hp > 80){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "HP80％以上強化"){
            basic_attack *= 1.5;
            flag = true;
            process["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && shape == "U"){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "2体攻撃"){
            basic_attack *= 1.5;
            flag = true;
            process["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
      if(!flag && shape == "L"){
        for(var j = 0; j < datas[i].super_awoken.length; j++) {
          if(datas[i].super_awoken[j] == "L字消し攻撃"){
            basic_attack *= 1.5;
            flag = true;
            process["super_awoken"].push(datas[i].super_awoken[j]);
          }
        }
      }
    }

    
    // result = {"name": datas[i].name, "main_property": datas[i].main_property, "process": process, "attack": basic_attack};
       
    result = [datas[i].name, image_url, datas[i].main_property, JSON.stringify(process), basic_attack];
    results.push(result);

  }
  
  results = results.sort(function(a, b){
      return parseFloat(a[4]) < parseFloat(b[4]) ? 1 : -1;
  });
                         
  console.log(results);
    
  document.getElementById("result").innerHTML = '<table id="result-table" class="display" width="100%"></table>';
  var result_table = document.getElementById("result-table");
  var table_innerHTML = "<thead><tr><th>Name</th><th>Main Property</th><th>Process</th><th>Attack</th></tr></thead><tbody>";
  for(var r = 0; r < Math.min(100, results.length); r++) {
    table_innerHTML += '<tr><td><img src="' + results[r][1] + '" width="50px" height="50px"> ' + results[r][0] + "</td>";
    table_innerHTML += "<td>" + results[r][2] + "</td><td>" + results[r][3] + "</td><td>" + results[r][4] + "</td></tr>"; 
  }
  table_innerHTML += "</tbody>";
  result_table.innerHTML = table_innerHTML;
    
  $(document).ready(function() {
      $('#result-table').DataTable( {
          "order": [[ 3, "desc" ]]
      } );
  } );
  

}


    