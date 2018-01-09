# stringTest = "&#24500;&#24145;&#23226;&#24501;&#24508;&#28326;&#23226;&#23226;&#40692;&#24500;&#23226;㣲&#23226;&#30291;&#28546;&#24505;&#24501;&#24500;&#24509;𪑛&#25074;懲&#24505;&#28552;"

stringTest = "&#24500;&#24145;&#23226;&#24501;&#24508;&#28326;&#23226;&#23226;&#40692;&#24500;&#23226;㣲&#23226;&#30291;&#28546;&#24505;&#24501;&#24500;&#24509;𪑛&#25074;懲&#24505;&#28552;&#24494;&#24500;&#24501;&#34183;&#24509;&#30309;&#39988;&#40692;&#28691;&#35257;㠞䥩&#24145;&#30656;㜫䉠&#30291;&#38714;㣲&#24510;&#34274;䘗&#23990;㵟"
stringTestList = stringTest.split(";")

stringTestListSet = set(stringTestList)

stringTestListSetList = list(stringTestListSet)

# print(len(stringTestListSetList))
# print("orgin list" + " " + str(len(stringTestList)))

resutl = ""
for i in stringTestListSetList:
    resutl += str(i) +";"

resutl = resutl[:-1]
print(resutl)

weiCharString = "媺徵矀瀓㣲徾徽徴㣲媺癥鰴㵟徹徼藢幑微溦懲徹薇澈㜫䉠癓澂㠞䥩幑霺癓覹𪑛懲䘗嶶黴"

# print(len(list(charString)))
weiArrayList = []
for i in range(0,len(weiCharString)):
    weiArrayList.append(weiCharString[i])

danRenPang = "亻"

# read xin from file into an arrray
filepath = 'yan.txt'
yanArrayList = []
with open(filepath) as fp:
   line = fp.readline()
   while line:
       # print("Line {}: {}".format(cnt, line.strip()))
       line = fp.readline().strip('\n')
       yanArrayList.append(line)

result1 = []
for i in range(0, len(weiArrayList)):
    for j in range(0, len(yanArrayList)):
        a = weiArrayList[i] + danRenPang +yanArrayList[j] + "abfwatch"
        result1.append(a)

print(len(result1))
