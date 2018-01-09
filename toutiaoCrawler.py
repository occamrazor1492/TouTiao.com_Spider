import requests
import json
from pprint import pprint
from urllib import request


url = "https://www.toutiao.com/c/user/3365634632/#mid=323807"

# headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36'}
# page = requests.get(url,headers=headers)
# print(page.status_code)
# page.encoding = page.apparent_encoding
with request.urlopen(url) as res:
    d = json.loads(res.read().decode())
    print(res.status_code)
