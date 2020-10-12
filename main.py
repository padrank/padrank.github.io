import requests
import warnings
import json
import os
import re

from bs4 import BeautifulSoup

warnings.filterwarnings('ignore')

HEADERS = {
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-TW,zh;q=0.9,en;q=0.8,ja;q=0.7,zh-CN;q=0.6'
    }


def main():

    error_list = []
    datas = []
    i = 1

    while True:
        
        if i > 6700:
            break
        
        if i % 10 == 0:
            print(i)
            
        try:
            r = requests.get('https://pad.skyozora.com/pets/{}'.format(i), headers=HEADERS, verify=False)
        except:
            print('Retry id {}'.format(i))
            continue

        if r.status_code == requests.codes.ok:

            if r.text.find('主屬性:') == -1:
                print('No pet with id {}'.format(i))
                i += 1
                continue
            else:
                
                row = {}
                    
                jp_name = r.text[r.text.find('No.') : r.text.find('</h3>', r.text.find('No.'))]
                main_property = r.text[r.text.find('主屬性:') + 4 : r.text.find('"', r.text.find('主屬性:'))]
                if r.text.find('副屬性:') != -1:
                    sub_property = r.text[r.text.find('副屬性:') + 4 : r.text.find('"', r.text.find('副屬性:'))]
                else:
                    sub_property = ''

                if r.text.find('LV.99') != -1:
                    attack_99 = r.text[r.text.find('攻擊力: ', r.text.find('LV.99')) + 5 : r.text.find('</td>', r.text.find('攻擊力: ', r.text.find('LV.99')) + 5)]
                else:
                    attack_99 = 0

                if r.text.find('LV.110') != -1:
                    attack_110 = r.text[r.text.find('攻擊力: ', r.text.find('LV.110')) + 5 : r.text.find('</td>', r.text.find('攻擊力: ', r.text.find('LV.110')) + 5)]
                else:
                    attack_110 = 0

                potential_text = r.text[r.text.find('可以設定的殺手潛在覺醒: ') + 13 : r.text.find('\t\t', r.text.find('可以設定的殺手潛在覺醒: '))]
                potentials = []
                while True:
                    if potential_text.find("title") != -1:
                        potentials.append(potential_text[potential_text.find('title') + 7 : potential_text.find('"', potential_text.find('title') + 7)])
                        potential_text = potential_text[potential_text.find("title") + 7:]
                    else:
                        break

                awoken_text = r.text[r.text.find('覺醒技能</td>') + 9 : r.text.find('</td>', r.text.find('覺醒技能</td>') + 9)]
                awokens = []
                while True:
                    if awoken_text.find("【") != -1:
                        awokens.append(awoken_text[awoken_text.find('【') + 1 : awoken_text.find('】', awoken_text.find('【') + 1)])
                        awoken_text = awoken_text[awoken_text.find('【') + 1:]
                    else:
                        break

                super_awoken_text = r.text[r.text.find('超覺醒</a></td>') + 12 : r.text.find('</td>', r.text.find('超覺醒</a></td>') + 12)]
                super_awokens = []
                while True:
                    if super_awoken_text.find("【") != -1:
                        super_awokens.append(super_awoken_text[super_awoken_text.find('【') + 1 : super_awoken_text.find('】', super_awoken_text.find('【') + 1)])
                        super_awoken_text = super_awoken_text[super_awoken_text.find("【") + 1:]
                    else:
                        break
                row = {'name': jp_name, 
                       'main_property': main_property, 
                       'sub_property': sub_property, 
                       'attack_99': attack_99, 
                       'attack_110': attack_110, 
                       'potential': potentials,
                       'awoken': awokens, 
                       'super_awoken' :super_awokens}

                soup = BeautifulSoup(r.text, 'html.parser')

                skill = soup.find_all("td", colspan='5')[0].decode_contents()
                skill_min_cd = soup.find_all("td", width='46', style="font-size:20px")[1].decode_contents().strip()
                skill_max_cd = soup.find_all("td", width='46', style="font-size:20px")[0].decode_contents().strip()

                leader_skill = soup.find_all("td", colspan='2', bgcolor="#000000")[2].decode_contents()

                row['skill'] = skill
                row['skill_min_cd'] = skill_min_cd
                row['skill_max_cd'] = skill_max_cd
                row['leader_skill'] = leader_skill.replace('<br/>', '')

                monster_types = []
                tmp_types = soup.find('td', bgcolor='#000000', class_="", style="font-size:14px").find_all('a')
                for tmp_type in tmp_types:
                    monster_types.append(tmp_type.get('title'))

                row['type'] = monster_types

                evos = []

                for evo in soup.find_all("a", class_='EvoTarget'):
                    link = evo.get('href')
                    if link.startswith('pets'):
                        evos.append(link.split('/')[1])

                row['evo'] = evos
                
                datas.append(row)
        else:
            error_list.append(i)
            print('Error with id {}'.format(i))

        i += 1

    datas_json = json.dumps(datas, ensure_ascii=False)
    with open('new_datas.json', 'w', encoding='utf-8') as f:
        f.write(datas_json)

    with open('datas.js', 'w', encoding='utf-8') as f:
        f.write('var datas = {} ;'.format(datas_json))

if __name__ == '__main__':
    main()