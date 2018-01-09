import jieba
import synonyms

filepath = 'comment.txt'
commentArrayList = []
with open(filepath) as fp:
   line = fp.readline()
   while line:
       # print("Line {}: {}".format(cnt, line.strip()))
       line = fp.readline().strip('\n')
       commentArrayList.append(line)
commentArrayList1 = []
for i in range(0, len(commentArrayList)-1):
    commentArrayList1.append(commentArrayList[i])

# for i in commentArrayList1:
#     print(i)

weiCharString = "媺徵矀瀓㣲徾徽徴㣲媺癥鰴㵟徹徼藢幑微溦懲徹薇澈㜫䉠癓澂㠞䥩幑霺癓覹𪑛懲䘗嶶黴"

# print(len(list(charString)))
weiArrayList = []
for i in range(0,len(weiCharString)):
    weiArrayList.append(weiCharString[i])

count0 = 0
for i in commentArrayList1:

    # print("-------------------第"  + str(count0)+ "条评论---------------------------------------------------------------------------------------------------------")
    count = 0
    count0 += 1
    for j in weiArrayList:
        count += 1
        j1 = j + "abfwatch"
        result = i.replace("\tinsertPoint", j1)
        # print("——————————————————同一条第" + "  " + str(count) + " 个------------")
        # print(result)





seg_listList = []

seg_list = jieba.cut(commentArrayList1[0], cut_all=False)
# print("Default Mode: " + "/ ".join(seg_list))  # 精确模式
for i in seg_list:
    seg_listList.append(i)

print(seg_listList)
