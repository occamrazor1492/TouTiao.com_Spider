(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// window.open("https://www.toutiao.com/c/user/relation/72429602158/?tab=following#mid=1581470053428237", "_self")

// for (j = 1; j < 20; j += 1) {
//     window.scrollTo(0,document.body.scrollHeight);
// }
// window.scrollTo(0,document.body.scrollHeight);

// obj = document.getElementById("table").getElementsByTagName("dd")

// var result = []
// for (i = 1; i< obj.length; i += 3) {
//     var string = obj[i].innerHTML
//     var name = obj[i].innerText.match(/^\D*?\n/g)
//     objs = {"link": string.match(/href="\/c\/user\/\d*\//g)[0].slice(14,-1), "name": name.replace(/\n|\r/g, "").slice(0,-1)}
//     result.push(objs)
// }

// console.save(result)

//--------------------

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//init count
//localStorage.setItem("Totalcount", 1)

async function content(sessionCount) {
    for (j = 1; j < 10; j += 1) {
        window.scrollTo(0,document.body.scrollHeight);
        console.log('Taking a break...');
       var waitTime1 = Math.floor(Math.random() * 3000 + 5000)
        await sleep(waitTime1);
        console.log('1 second later');
    }
    var waitTime = Math.floor(Math.random() * 3000 + 8000)
    await sleep(waitTime);
    document.getElementsByClassName("lbtn")
// get object from local storage
    var objsUserPage = JSON.parse(localStorage.getItem("objsUserPage"))


    // incase the final value is like 18, 15, 12, 9 then i+1 would get no value
    var htmlPageLength = document.getElementsByClassName("lbtn").length
    // if (htmlPageLength % 3 == 0) {
    //     htmlPageLength -= 1
    // } else if (htmlPageLength % 3 == 1) {
    //     htmlPageLength -= 2
    // } else {
    //     htmlPageLength = htmlPageLength
    // }

    for(i = 1; i < htmlPageLength; i+=1 ) {
        // var userName = document.getElementById("wrapper").getElementsByClassName("yheader")[0].innerText.match(/\n\n\D*?\n/g)
        // userName = userName.toString().replace(/\n|\r|\t/g, "")
        // //var obj = {"阅读量": document.getElementsByClassName("lbtn")[i].innerText.slice(0,-4), "评论数": document.getElementsByClassName("lbtn")[i+1].innerText.slice(1,-3), "链接": document.getElementsByClassName("lbtn")[i].href, "时间":document.getElementsByClassName("lbtn")[i+2].innerText.slice(2,), "用户名": userName}
        // var obj = {"阅读量": document.getElementsByClassName("lbtn")[i].innerText.slice(0,-4), "评论数": document.getElementsByClassName("lbtn")[i+1].innerText.slice(1,-3), "链接": document.getElementsByClassName("lbtn")[i].href, "时间":document.getElementsByClassName("lbtn")[i+2].innerText.slice(2,), "用户名": userName}

        // user xPath to get getElements
        var reading = getElementByXpath('//*[@id="wrapper"]/div[2]/div[2]/div/div[3]/div/ul/li['+ i + ']/div/div[1]/div/div[2]/div[1]/a[1]')
        var comment = getElementByXpath('//*[@id="wrapper"]/div[2]/div[2]/div/div[3]/div/ul/li['+ i + ']/div/div[1]/div/div[2]/div[1]/a[2]')
        var time = getElementByXpath('//*[@id="wrapper"]/div[2]/div[2]/div/div[3]/div/ul/li['+ i + ']/div/div[1]/div/div[2]/div[1]/span')
        var accountName = getElementByXpath('//*[@id="wrapper"]/div[1]/div/ul/li[1]/a/span[1]')

        // if (reading == null) {
        //   reading = {"innerText":"empty"}
        //   reading = {"href": "empty"}
        // }
        // if (comment == null) {
        //   comment = {"innerText":"empty"}
        // }
        // if (time == null) {
        //   time = {"innerText":"empty"}
        // }
        // if (accountName == null) {
        //   accountName = {"innerText":"empty"}
        // }

        if (reading != null && comment != null && time != null && accountName != null) {
         var readingText = reading.innerText.match(/\d(\.\d*|\d*)/g)
         var commentText = comment.innerText.match(/\d(\.\d*|\d*)/g)
         var timeText = time.innerText.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2}/g)
         var accountNameText = accountName.innerText
         var hrefText = reading.href

         if (readingText == null) {
          readingText = [NaN]
         }
         if (commentText == null) {
           commentText = [NaN]
         }
         if (timeText == null) {
           timeText = [NaN]
         }
         if (accountNameText == null) {
           accountNameText = NaN
         }

         var obj = {"reading": readingText[0], "comment": commentText[0], "time": timeText[0], "accountName": accountNameText, "link": hrefText}
        }







        objsUserPage.push(obj)


    }

    localStorage.setItem("Totalcount", sessionCount+1)
    console.log("Totalcount is " + JSON.parse(localStorage.getItem("Totalcount")))
 //   console.save(objsUserPage)
    localStorage.setItem("objsUserPage", JSON.stringify(objsUserPage))
    var userIdLink = JSON.parse(localStorage.getItem("result"))[sessionCount].link
    var userLink = "https://www.toutiao.com/c/user/"+ userIdLink + "/#mid=" + Math.floor(Math.random() * 9999999999999 + 10000000000)
    window.open(userLink, "_self")


}

// length: JSON.parse(localStorage.getItem("result")).length

var sessionCount = JSON.parse(localStorage.getItem("Totalcount"))
if (sessionCount > JSON.parse(localStorage.getItem("result")).length ) {
    console.save(JSON.parse(localStorage.getItem("objsUserPage")))
} else {
    content(sessionCount);
}
