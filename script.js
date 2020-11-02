var types = {"0": "ドラゴン", "1": "神", "2": "悪魔", "3": "マシン", "4": "バランス", "5": "攻撃", "6": "体力", "7": "回復", "8": "進化用", "9": "能力覚醒用", "10": "強化合成用", "11": "売却用"};
var types_rev = {"ドラゴン": "0", "神": "1", "悪魔": "2", "マシン": "3", "バランス": "4", "攻撃": "5", "体力": "6", "回復": "7", "進化用": "8", "能力覚醒用": "9", "強化合成用": "10", "売却用": "11"};

var double_rule = {"fire": "wood", "water": "fire", "wood": "water", "light": "dark", "dark": "light"};
var half_rule = {"fire": "water", "water": "wood", "wood": "fire", "light": "", "dark": ""};

var chi_to_eng = {"火": "fire", "水": "water", "木": "wood", "光": "light", "暗": "dark",
"神": "god", "龍": "dragon", "惡魔": "demon", "機械": "machine", "平衡": "balance",
"攻擊": "attack", "體力": "strength", "回復": "healing", "進化用": "evo", "覺醒用": "aw", "強化用": "power"};
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
  "木ドロップ強化": "img/k16.png",
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
  "コンボドロップ生成": "img/k82.png",
  "HP弱化": "img/k83.png",
  "攻撃弱化": "img/k84.png",
  "回復弱化": "img/k85.png",
  "覚醒アシスト": "img/assist.png",
  "攻擊": "images/type/attack.png",
  "覺醒用": "images/type/aw.png",
  "平衡": "images/type/balance.png",
  "惡魔": "images/type/demon.png",
  "龍": "images/type/dragon.png",
  "進化用": "images/type/evo.png",
  "神": "images/type/god.png",
  "回復": "images/type/healing.png",
  "機械": "images/type/machine.png",
  "強化用": "images/type/power.png",
  "體力": "images/type/strength.png",
  };
var potential_path = {
  "ドラゴンキラー": "img/sk03.png",
  "神キラー": "img/sk02.png",
  "悪魔キラー": "img/sk04.png",
  "マシンキラー": "img/sk05.png",
  "バランスキラー": "img/sk06.png",
  "攻撃キラー": "img/sk07.png",
  "体力キラー": "img/sk08.png",
  "回復キラー": "img/sk09.png",
  "進化用キラー": "img/sk10.jpg",
  "能力覚醒用キラー": "img/sk11.jpg",
  "強化合成用キラー": "img/sk12.jpg",
  "売却用キラー": "img/sk13.jpg"
};

var awoken_list = [
  "スキルブースト",
  "封印耐性",
  "操作時間延長",
  "コンボ強化",
  "超コンボ強化",

  "2体攻撃",
  "ダメージ無効貫通",
  "L字消し攻撃",
  "HP80％以上強化",
  "HP50％以下強化",

  "ガードブレイク",
  "スキルチャージ",
  "コンボドロップ生成",
  "追加攻撃",
  "超追加攻撃",

  "火ダメージ軽減",
  "水ダメージ軽減",
  "木ダメージ軽減",
  "光ダメージ軽減",
  "闇ダメージ軽減",

  "火属性強化",
  "水属性強化",
  "木属性強化",
  "光属性強化",
  "闇属性強化",

  "火ドロップ強化",
  "水ドロップ強化",
  "木ドロップ強化",
  "光ドロップ強化",
  "闇ドロップ強化",

  "回復ドロップ強化",
  "自動回復",
  "バインド回復",
  "回復L字消し",
  "バインド耐性",

  "HP強化",
  "攻撃強化",
  "回復強化",
  "チームHP強化",
  "チーム回復強化",

  "ドラゴンキラー",
  "神キラー",
  "悪魔キラー",
  "マシンキラー",
  "バランスキラー",

  "攻撃キラー",
  "体力キラー",
  "回復キラー",
  "進化用キラー",
  "能力覚醒用キラー",

  "強化合成用キラー",
  "売却用キラー",
  "マルチブースト",
  "お邪魔ドロップの加護",
  "毒ドロップの加護",

  "暗闇耐性",
  "お邪魔耐性",
  "毒耐性",
  "雲耐性",
  "操作不可耐性",

  "スキルボイス",
  "ダンジョンボーナス",
  "HP弱化",
  "攻撃弱化",
  "回復弱化",

  "覚醒アシスト",
]

var advanced_awoken = {
  'スキルブースト＋': ['スキルブースト', 2],
  '操作時間延長＋': ['操作時間延長', 2],
  'バインド耐性＋': ['バインド耐性', 2],
  '暗闇耐性＋': ['暗闇耐性', 5],
  'お邪魔耐性＋': ['お邪魔耐性', 5],
  '毒耐性＋': ['毒耐性', 5],
}

var property_filter = {"fire": false, "water": false, "wood": false, "light": false, "dark": false};
var type_filter = {"dragon": false, "god": false, "demon": false, "machine": false, "balance": false, "attack": false, "strength": false, "healing": false, "evo": false, "aw": false, "power": false};

function removeOptions(selectbox){
  var i;
  for(i = selectbox.options.length - 1 ; i > 0 ; i--){
    selectbox.remove(i);
  }
}

function init(){

  // initial update-date
  document.getElementById('update-date').innerHTML = update_date;

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
  var combo = document.getElementById("combo");
  for(var i=2;i<=20;i++){
    var new_option = new Option(i,i);
    combo.options.add(new_option);
  }

  // init filter_table
  var awoken_filter_table = document.getElementById("awoken-filter-table");

  var cell_per_row = 5
  var cell_cnt = 0

  for (var item in awoken_list){
    if(cell_cnt % cell_per_row == 0){
      var row = awoken_filter_table.insertRow(-1);
    }
    var cell = row.insertCell(-1);
    cell.className = "text-center";
    cell.id = "td-" + awoken_list[item];
    cell.innerHTML = '<img src="' + img_path[awoken_list[item]] + '"/><select class="form-control" onchange="awokenFilterChange(this.id)" style="padding: 0" id=' + awoken_list[item] +'><option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select>';
    cell_cnt += 1;
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

function showDetail(event, _id){
  detail = document.getElementById('detail-' + _id)
  detail.style.display = 'block';
  // console.log(event.clientY,event.clientX)
  detail.style.top = event.pageY + 'px';
  detail.style.left = event.pageX + 'px';
}

function closeDetail(event, _id){
  detail = document.getElementById('detail-' + _id)
  detail.style.display = 'none';
  detail.style.top ='0';
  detail.style.left = '0';
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

function monsterTypeClick(self){
  if(document.getElementById(self.id).classList.contains("table-dark")){
    document.getElementById(self.id).classList.remove("table-dark");
    type_filter[self.id] = false;
  }
  else{
    document.getElementById(self.id).classList.add("table-dark");
    type_filter[self.id] = true;
  }
}

function clearAwokenFilter(){
  for (var item in awoken_list){
    document.getElementById(awoken_list[item]).value = '0';
    awokenFilterChange(awoken_list[item]);

  }
}

function toggleFilterTable(){

  if(document.getElementById('awoken-filter-table').style.display == "none"){
    document.getElementById('awoken-filter-table').style.display = "table";
    document.getElementById('toggle-super-awoken-filter').style.display = "block";

  }
  else{
    document.getElementById('awoken-filter-table').style.display = "none";
    document.getElementById('toggle-super-awoken-filter').style.display = "none";
  }
}

function awokenFilterChange(id) {
  if (document.getElementById(id).value === '0') {
    document.getElementById('td-' + id).classList.remove("table-dark");
  }
  else {
    document.getElementById('td-' + id).classList.add("table-dark");
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

function applyAwokenFilter(data, awoken_filter){

  var tmp = {};
  for (var awoken in data.awoken){

    if (advanced_awoken[data.awoken[awoken]] != undefined) {
      if (tmp[advanced_awoken[data.awoken[awoken]][0]] === undefined) {
        tmp[advanced_awoken[data.awoken[awoken]][0]] = advanced_awoken[data.awoken[awoken]][1];
      }
      else {
        tmp[advanced_awoken[data.awoken[awoken]][0]] += advanced_awoken[data.awoken[awoken]][1];
      }
    }

    if (tmp[data.awoken[awoken]] === undefined) {
      tmp[data.awoken[awoken]] = 1;
    }
    else {
      tmp[data.awoken[awoken]] += 1;
    }
  }
  if (document.getElementById('super-awoken-filter').checked) {
    for (var super_awoken in data.super_awoken){
      if (tmp[data.super_awoken[super_awoken]] === undefined) {
        tmp[data.super_awoken[super_awoken]] = 1;
      }
      else {
        tmp[data.super_awoken[super_awoken]] += 1;
      }
    }
  }

  for (var key in awoken_filter) {
    if (awoken_filter[key] === 0){
      continue;
    }
    if (tmp[key] === undefined) {
      return false;
    }
    if (awoken_filter[key] > tmp[key]) {
      return false;
    }
  }

  return true;
}

function toCurrency(number) {
    var n = number;
    var r = "";
    do {
        mod = n % 1000;
        n = n / 1000;
        r = ~~mod + (!!r ? "," + r : "")
    } while (n > 1)

    var strNumber = number + "";
    var index = strNumber.indexOf(".");
    if (index > 0) {
        r += strNumber.substring(index);
    }
    return r;
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
  var has_poison = document.getElementById('poison').value;
  var has_jama = document.getElementById('jama').value;
  var has_heart9 = document.getElementById('heart9').value;
  var level = document.getElementById('level').value;
  var plus = document.getElementById('plus').value;
  var multi = document.getElementById('multi').value;
  var voice = document.getElementById('voice').value;
  var potential_num = document.getElementById('potential-num').value;
  var super_awoken = document.getElementById('super-awoken').value;
  var awoken_filter = {};
  var active_skill_text = document.getElementById("active-skill").value;
  var leader_skill_text = document.getElementById("leader-skill").value;

  for (var item in awoken_list){
    awoken_filter[awoken_list[item]] = parseInt(document.getElementById(awoken_list[item]).value);
  }

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

    // check active_skill
    var found = true;
    active_skill_cands = active_skill_text.split(" ");
    for (var c = 0; c < active_skill_cands.length; c++){
      if (!active_skill_cands[c]) continue;
      if (!datas[i]['skill'].includes(active_skill_cands[c])){
        found = false;
        break;
      }
    }
    if (!found){
      continue
    }

    // check leader_skill
    var found = true;
    leader_skill_cands = leader_skill_text.split(" ");
    for (var c = 0; c < leader_skill_cands.length; c++){
      if (!leader_skill_cands[c]) continue;
      if (!datas[i]['leader_skill'].includes(leader_skill_cands[c])){
        found = false;
        break;
      }
    }
    if (!found){
      continue
    }

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
      if(voice == "yes" && datas[i].awoken[j] == "スキルボイス"){
        basic_attack *= 1.1;
        processes["awoken"].push(datas[i].awoken[j]);
      }
      if(has_poison == "yes" && datas[i].awoken[j] == "毒ドロップの加護"){
        basic_attack *= 2;
        processes["awoken"].push(datas[i].awoken[j]);
      }
      if(has_jama == "yes" && datas[i].awoken[j] == "お邪魔ドロップの加護"){
        basic_attack *= 2;
        processes["awoken"].push(datas[i].awoken[j]);
      }
      if(has_heart9 == "yes" && datas[i].awoken[j] == "超追加攻撃"){
        basic_attack *= 2;
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
          if(!datas[i].name.includes("転生")){
            basic_attack /= 1.5;
          }
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

    if (document.getElementById('toggle-filter').checked) {
      if (applyAwokenFilter(datas[i], awoken_filter)) {
        result = [datas[i].name, image_url, datas[i].main_property,
                  processes["awoken"], processes["potential"], processes["super_awoken"],
                  lv, origin_attack, basic_attack, datas[i]];
        results.push(result);
      }
    }
    else{
      result = [datas[i].name, image_url, datas[i].main_property,
                processes["awoken"], processes["potential"], processes["super_awoken"],
                lv, origin_attack, basic_attack, datas[i]];
      results.push(result);
    }
  }

  results = results.sort(function(a, b){
      return parseFloat(a[8]) < parseFloat(b[8]) ? 1 : -1;
  });

  // console.log(results);

  document.getElementById("result").innerHTML = '<table id="result-table" class="display nowrap" width="100%"></table>';
  var result_table = document.getElementById("result-table");
  // var table_innerHTML = "<thead><tr><th>名稱</th><th>主屬性/副屬性</th><th></th><th>原始攻擊(等級)</th><th>最終攻擊</th></tr></thead><tbody>";
  var table_innerHTML = "<thead><tr><th>名稱</th><th>主屬性/副屬性</th><th></th><th>原始攻擊(等級)</th><th>最終攻擊</th><th>主動技能</th><th>初始CD</th><th>最小CD</th><th>隊長技能</th></tr></thead><tbody>";
  var rank = 1;

  var type_filter_rule = "or";
  if(document.getElementById("type-filter-rule").checked){
    type_filter_rule = "and";
  }

  var property_rule = "only_main";
  if(!document.getElementById("property_rule").checked){
    property_rule = "unlimited";
  }

  var property_value = Object.values(property_filter).map(item => item);
  var type_value = Object.values(type_filter).map(item => item);

  var property_all = property_value.every(function(item){return item === false});
  var type_all = type_value.every(function(item){return item === false});
  var max_result_rows = 50;
  for(var r = 0; r < Math.min(max_result_rows, results.length); r++) {
    if(square_promise == 'yes' && !results[r][3].includes('ダメージ無効貫通') && !results[r][5].includes('ダメージ無効貫通')){
      max_result_rows += 1;
      continue;
    }
    if(!property_all){
      // 屬性篩選
      if(property_rule === 'only_main'){
        if(!property_filter[chi_to_eng[[results[r][2].trim()]]]) {
          max_result_rows += 1;
          continue;
        }
      }
      else{
        if(!property_filter[chi_to_eng[[results[r][2].trim()]]] && !property_filter[chi_to_eng[[results[r][9].sub_property]]]) {
          max_result_rows += 1;
          continue;
        }
      }
    }

    if(!type_all){
      // type篩選
      if(type_filter_rule == "or"){
        var flag = false;
        for(var t = 0; t < results[r][9].type.length; t++){
          if(type_filter[chi_to_eng[results[r][9].type[t]]]){
            flag = true
            break;
          }
        }
        if (!flag){
          max_result_rows += 1;
          continue;
        }
      }
      else{
        var tmp_filter = {"dragon": false, "god": false, "demon": false, "machine": false, "balance": false, "attack": false, "strength": false, "healing": false, "evo": false, "aw": false, "power": false};
        for(var t = 0; t < results[r][9].type.length; t++){
          tmp_filter[chi_to_eng[results[r][9].type[t]]] = true;
        }
        if (JSON.stringify(tmp_filter) !== JSON.stringify(type_filter)){
          max_result_rows += 1;
          continue;
        }
      }
    }
    table_innerHTML += '<tr><td>' + rank + '. <img onmouseover="showDetail(event, ' + "'" + results[r][0] + "'" +')" onmouseleave="closeDetail(event, ' + "'" + results[r][0] + "'" + ')" src="' + results[r][1] + '" width="50px" height="50px"> ' + results[r][0] + "</div></a><div>";

    for(var a = 0; a < results[r][9].awoken.length; a++){
      table_innerHTML += '<img src="' + img_path[results[r][9].awoken[a]] + '" width="20px" height="20px">';
    }

    if (results[r][9].super_awoken.length > 0) {
      table_innerHTML += '  超覺醒: ';
      for(var a = 0; a < results[r][9].super_awoken.length; a++){
        table_innerHTML += '<img src="' + img_path[results[r][9].super_awoken[a]] + '" width="20px" height="20px">';
      }
    }

    table_innerHTML += '</div></td>';

    // 屬性
    table_innerHTML += '<td><div><img src="' + img_path[results[r][2].trim()] + '" width="15px" height="15px">' + results[r][2].trim();
    if (results[r][9].sub_property !== "") {
      table_innerHTML += '/<img src="' + img_path[results[r][9].sub_property] + '" width="15px" height="15px">' + results[r][9].sub_property ;
    }
    table_innerHTML += '</div>';

    for(var t = 0; t < results[r][9].type.length; t++){
      table_innerHTML += '<img src="' + img_path[results[r][9].type[t]] + '" width="20px" height="20px">';
    }
    table_innerHTML += "</td></div>";


    table_innerHTML += "<td>";
    if(results[r][3].length != 0){
      table_innerHTML += "<div>覺醒：";
      for(var p = 0; p < results[r][3].length; p++){
        table_innerHTML += '<img src="' + img_path[results[r][3][p]] + '" width="30px" height="30px">' + ' ';
      }
      table_innerHTML += "</div>";
    }

    if(results[r][4].length != 0 && potential_num != 0){
      var tmp = 0;
      if(potential_num == 4 && !results[r][0].includes("転生")){
        tmp = -1;
      }
      var show_potential_num = parseInt(tmp) + parseInt(potential_num);
      table_innerHTML += "<div>潛在覺醒：";
      table_innerHTML += '<img src="' + potential_path[results[r][4][0]] + '" width="75px" height="25px">' + '*' + show_potential_num + ' ';
      for(var p = 1; p < results[r][4].length; p++){
        table_innerHTML += 'or <img src="' + potential_path[results[r][4][p]] + '" width="75px" height="25px">' + '*' + show_potential_num + ' ';
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
    table_innerHTML += "<td>" + results[r][7] + " (Lv." + results[r][6] + ")</td>";
    table_innerHTML += "<td>" + results[r][8].toFixed(1) + "</td>";

    table_innerHTML += '<td><span style="white-space: normal;">' + results[r][9].skill + '</span></td>';
    table_innerHTML += '<td><span>' + results[r][9].skill_max_cd + '</span></td>';
    table_innerHTML += '<td><span>' + results[r][9].skill_min_cd + '</span></td>';
    table_innerHTML += '<td><span>' + results[r][9].leader_skill + '</span></td></tr>';

    rank += 1;

    if (results[r][9].evo.length >= 1){
      var detail_innerHTML = '';
      detail_innerHTML += "<div class='rounded' id='detail-" + results[r][0] + "' style='display:none;position:absolute;background:#CCCCCC;padding:5px'>";
      for(var e = 0; e < results[r][9].evo.length; e++){
        detail_innerHTML += '<span style="padding:5px"><img src="https://gamewith.akamaized.net/article_tools/pad/gacha/' + results[r][9].evo[e] + '.png" width="30px" height="30px"> ';
        detail_innerHTML += results[r][9].evo[e] + '</span>';
      }
      detail_innerHTML += "</div>";

      document.getElementById('detail').innerHTML += detail_innerHTML;
    }
  }

  table_innerHTML += "</tbody>";
  result_table.innerHTML = table_innerHTML;

  // console.log(results);

  $(document).ready(function() {
      $('#result-table').DataTable( {
          "order": [[ 4, "desc" ]],
          "responsive": true,
      } );

  });

  // document.getElementById('result').style.display = 'block';
}

