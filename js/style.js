var slideIndex = 1;

$(document).ready(function(){

    var checkAboutMe,checkExperience = false;
    
    $("#aboutMe").hover(
      function(){
        checkAboutMe = false;
        timeout = setTimeout(function(){
              $("#aboutMeList").toggle(500);
              checkAboutMe = true;
            },200);
      },
      function(){
        if(checkAboutMe == false){
          clearTimeout(timeout);
        }else{
          $("#aboutMeList").toggle(500);
        }
      });

    $("#experience").hover(
      function(){
        checkExperience = false;
        timeout = setTimeout(function(){
                $("#expList").toggle(500);
                checkExperience = true;
              },200);
        },
        function(){
          if(checkExperience == false){
            clearTimeout(timeout);
          }else{
            $("#expList").toggle(500);
          }
        });

    var clickAboutMeRead = 0;
    $("#aboutMeText").click(function(){
        if(clickAboutMeRead == 0){
          $("#aboutMeText").html("Go Back");
          clickAboutMeRead = 1;
        }else{
          $("#aboutMeText").html("Read More");
          clickAboutMeRead = 0;
        }
        $("#more").slideToggle(500);
    });
    
    var clickUniformRead = 0;
    $("#uniformRead").click(function(){
        if(clickUniformRead == 0){
          $("#uniformRead").html("Go Back");
          clickUniformRead = 1;
        }else{
          $("#uniformRead").html("Read More");
          clickUniformRead = 0;
        }
        $("#uniformSlidesContainer").slideToggle(500);
        $("#uniformHide").slideToggle(500);
    });

    var clickEcRead = 0;
    $("#ecRead").click(function(){
      if(clickEcRead == 0){
        $("#ecRead").html("Go Back");
        clickEcRead = 1;
      }else{
        $("#ecRead").html("Read More");
        clickEcRead = 0;
      }
      $("#ecSlidesContainer").slideToggle(500);
      $("#ecHide").slideToggle(500);
    });

    var clickDSRead = 0;
    $("#DepartmentSocietyRead").click(function(){
      if(clickDSRead == 0){
        $("#DepartmentSocietyRead").html("Go Back");
        clickDSRead = 1;
      }else{
        $("#DepartmentSocietyRead").html("Read More");
        clickDSRead = 0;
      }
      $("#DSSlidesContainer").slideToggle(500);
      $("#DSHide").slideToggle(500);
    });

    $("#SPECAPIColorBox").click(function(){
      modalHead = "SPEC文件推薦API";
      slideImg1 = "img/SPECAPI-6.png";
      slideImg2 = "img/SPECAPI-2.png";
      slideImg3 = "img/SPECAPI-3.png";
      slideImg4 = "img/SPECAPI-4.png";
      slideImg5 = "img/SPECAPI-5.png";

      imgAlt1 = "本專案執行結果";
      imgAlt2 = "取出每篇SPEC使用的資料表與模組";
      imgAlt3 = "去除停用詞、標點符號、換行符號等";
      imgAlt4 = "貼標籤的規則";
      imgAlt5 = "模型預測結果";

      content = "<div class='ui header'>利用NLP的技術，快速的找到可參考的系統規格書</div>\
                <p>&nbsp&nbsp&nbsp&nbsp本專案為SPEC文件推薦，為2020年暑假在國泰⼈壽壽險資訊部實習的實習專案，目的期望透過SPEC推薦系統使系統分析師在撰寫SPEC時若遇到不熟悉的領域或缺乏靈感時，\
                能夠透過輸入寫到⼀半的SPEC⽂件至推薦系統，\
                而推薦系統的推薦可使其快速的找到過去可參考的SPEC。</p>\
                <p>&nbsp&nbsp&nbsp&nbsp在使用方面，使用者僅需上傳SPEC文件(docx檔案)，系統將推薦其他過去相關的SPEC檔名與相關的機率，\
                並以JSON回傳推薦結果。但本專案目前的資料集內僅含AA理賠的主程式SPEC，\
                若要擴充其推薦能力需要加新的SPEC檔案至dataset/spec資料夾內，並執行create_dataset.py以產出新的SPEC關聯資料集。</p>\
                <p>&nbsp&nbsp&nbsp&nbsp本專案歷經了SPEC⽂件的前處理(jieba斷詞)、特徵⼯程(TFIDF、PCA)與分群(KMeans、階層演\
                  算法)、驗證分群(COS相似度)、上標籤還有模型訓練(隨機森林、類神經網路)與評估，最後架設成\
                  Flask API 與部門內的聊天機器⼈串接。專案結束後獲得部門主管肯定，在實習結束後給予預聘的offer。</p>\
                <p>&nbsp&nbsp&nbsp&nbspGitHub連結：<a href='https://github.com/TimgleCT/SPEC_Recommendation_API'>https://github.com/TimgleCT/SPEC_Recommendation_API</a></p>";

      setModalElement();
      setSlideImgWidth("200vw");
      setModalWidth("large");
      showSlides(slideIndex);
      $('#portfolioModal').modal('show');  
    });

    $("#LSTMStock").click(function(){
      modalHead = "LSTM股價預測";
      slideImg1 = "img/LSTMStock-1.png";
      slideImg2 = "img/LSTMStock-2.png";
      slideImg3 = "img/LSTMStock-3.png";
      slideImg4 = "img/LSTMStock-4.png";
      slideImg5 = "img/LSTMStock-5.png";

      imgAlt1 = "TSMC美股股票資料集";
      imgAlt2 = "簡易的LSTM模型";
      imgAlt3 = "訓練過程的Loss";
      imgAlt4 = "模型連續預測30天的預測結果";
      imgAlt5 = "預測4/29的股價";

      content = "<div class='ui header'>閒暇時的自我練習</div>\
                <p>&nbsp&nbsp&nbsp&nbsp本專案為自己利用閒暇時間，為了複習資料分析與python所實作的自學專案。我從美國Yahoo股票網站下載台積電與台灣50 ETF股價歷史資訊(日期、開盤價、收盤價、最高價、最低價、成交量與調整後的收盤價)，\
                將資料前處理後(標準化&將日期分為年、月、日、星期)。以30天的股票歷史資料去預測第31天的調整後收盤價，模型僅採用一層的LSTM，曾試圖增加層數或LSTM單元的結果並有明顯差異，甚至是結果更差。\
                也有嘗試增加其他的特徵資料，例如道瓊指數、標準普爾500指數與納斯達克100指數，結果也未有顯著的變好。</p>\
                <p>&nbsp&nbsp&nbsp&nbspColab連結：<a href='https://reurl.cc/kVxVzr'>https://reurl.cc/kVxVzr</a></p>";

      setModalElement();
      setSlideImgWidth("250vw");
      setModalWidth("large");
      showSlides(slideIndex);
      $('#portfolioModal').modal('show');  
    });

    $("#DcardPopularArticle").click(function(){
      modalHead = "預測Dcard熱門文章";
      slideImg1 = "img/DcardPopularArticle-1.png";
      slideImg2 = "img/DcardPopularArticle-2.png";
      slideImg3 = "img/DcardPopularArticle-3.png";
      slideImg4 = "img/DcardPopularArticle-4.png";
      slideImg5 = "img/DcardPopularArticle-5.png";

      imgAlt1 = "Liner SVM 預測結果";
      imgAlt2 = "SVM 預測結果";
      imgAlt3 = "隨機森林預測結果";
      imgAlt4 = "1D-CNN模型預測結果";
      imgAlt5 = "GRU模型預測結果";

      content = "<div class='ui header'>應徵2020 Dcard資料工程師實習生作業</div>\
                <p>&nbsp&nbsp&nbsp&nbsp本作品為2020年4月應徵Dcard資料工程師時，Dcard所指派之作業，目的是要透過文章發文後11小時內的收藏、留言、愛心、分享數，來預測其在36小時後是否會成為熱門文章(愛心數>=1000)。\
                訓練資料集約有78萬筆資料，測試資料約有22萬筆資料。起初我期望以CNN深度學習來完成本作業，過程中有諸多挑戰與困難，\
                例如：資料不平衡的問題(非熱門文章數>>熱門文章數)、資料前處理的時間耗時。在作業時間截止前雖有完成，但效能表現不到Dcard要求標準，故沒有順利晉級到下一階段。</p>\
                <p>&nbsp&nbsp&nbsp&nbsp但在事後我有繼續完善本作業，在截止後的一週後優化完成，有解決交作業時資料前處理時間過長的問題，\
                也有透過嘗試其他機器學習演算法來達到更好的預測效果。我總共用了五種方法來實作本作業，\
                分別是CNN、GRU、SVM、Liner SVM、Random Forest，而在最終以機器學習的Random Forest表現最好，準確度達98%，F1值達0.57。</p>";

      setModalElement();
      setSlideImgWidth("250vw");
      setModalWidth("large");
      showSlides(slideIndex);
      $('#portfolioModal').modal('show');  
    });

      $("#timekeeperColorBox").click(function(){
          modalHead = "TimeKeeper 智慧鬧鐘";
          slideImg1 = "img/timekeeper-8.png";
          slideImg2 = "img/timekeeper-1.png";
          slideImg3 = "img/timekeeper-2.png";
          slideImg4 = "img/timekeeper-3.png";
          slideImg5 = "img/timekeeper-4.png";

          imgAlt1 = "三種模式可供選擇";
          imgAlt2 = "系統首頁";
          imgAlt3 = "好友頁面";
          imgAlt4 = "加入好友頁面";
          imgAlt5 = "個人資料頁面";
          content = "<div class='ui header'>結合AI、社群、Open Data的時間管家</div>\
                    <p>&nbsp&nbsp&nbsp&nbspTimekeeper是一款利用人工智慧、社群網路與開放資料來實現智慧鬧鐘的軟體。\
                    利⽤手機內建的加速度感測器、麥克風與螢幕使用狀態來了解使用者關閉鬧鐘後的手機使用行為，\
                    並以CNN類神經網路模型來判斷使用者是否起床，進而決定是否幫其自動增設貪睡鬧鐘，\
                    解決⼈們關閉鬧鐘後不⼩⼼睡著的問題。</p>\
                    <p>&nbsp&nbsp&nbsp&nbsp若是Timekeeper還是無法叫醒使用者，Timekeeper還可通知使用者的其他好友，\
                    期望社群好友以實際的方式來幫助叫醒使用者，\
                    藉此可以解決使用者因熟睡聽不見鬧鐘的困擾，也可以讓好友們掌握使用者是否已經起床的資訊，\
                    免於睡過頭而對團隊造成傷害的情形發生。</p>\
                    <p>&nbsp&nbsp&nbsp&nbsp系統也能藉由向政府資料開放平台內的行政機關辦公日曆表，\
                    與災害示警公開資料平台內的資訊，取得放假資料與臨時停班停課通知，讓使用者不必等待政府公告就能安心的休息。</p>\
                    <p>&nbsp&nbsp&nbsp&nbsp本專題為我們首次完成 Android 的應用程式，而我負責後端程式編寫，完成人工智慧、登入註冊、社群好友的功能。\
                    本專題也獲得科技部⼤專⽣研究計畫的補助、在第六屆激發學⽣創意競賽中獲得佳作，並於專題展中榮獲第三名。</p>\
                    <img src = 'img/timekeeper-5.png'>";

          setModalElement();
          setSlideImgWidth("42vw");
          setModalWidth("large");
          showSlides(slideIndex);
          $('#portfolioModal').modal('show');  
        });

      $("#ncuGroceryShoppingManColorBox").click(function(){
          modalHead = "中央買菜郎";
          slideImg1 = "img/ncuGroceryShoppingMan-1.png";
          slideImg2 = "img/ncuGroceryShoppingMan-2.png";
          slideImg3 = "img/ncuGroceryShoppingMan-3.png";
          slideImg4 = "img/ncuGroceryShoppingMan-4.png";
          slideImg5 = "img/ncuGroceryShoppingMan-5.png";

          imgAlt1 = "登入後首頁";
          imgAlt2 = "選擇查詢市場";
          imgAlt3 = "預算清單";
          imgAlt4 = "一週價格走勢";
          imgAlt5 = "加入預算清單";
          content = "<div class='ui header'>以 Django MTV 架構完成的開放資料應用</div>\
                    <p>&nbsp&nbsp&nbsp&nbsp當代比價風氣興盛，人們購物時常上網比價，買到心中認為CP值最高的商品；人們會先估好預算，\
                    帶足夠的現金再出門採買，然而農產品這類商品的購買卻只能靠經驗來判斷，一般民眾不易取得相關資訊。</p>\
                    <p>&nbsp&nbsp&nbsp&nbsp中央買菜郎能透過行政院農委會的開放資料揭露農產品市場價格之外，也提供收藏、預算表、價格走勢的功能。\
                    揭露農產品市場價格可協助消費者在購買能產品時預防奸商；收藏幫助使用者快速查看常買的商品價格；預算表幫助消費者\
                    安排菜單與預算，而價格走勢則能幫助消費者了解此產品何時買較為划算。</p>\
                    <p>&nbsp&nbsp&nbsp&nbsp本專案後端採用 Django MTV的框架編寫，前端有使用部分 Kendo UI 的元件，最後也上傳至雲端部屬平台 \
                    Heroku，不過因 Heroku 免費方案資料庫存量的限制，無法全面運作。</p>\
                    <p>網址：<a href = 'https://ncu-grocery-shopping-man.herokuapp.com/'>https://ncu-grocery-shopping-man.herokuapp.com/</a></p>\
                    ";

          setModalElement();
          setSlideImgWidth("200vw");
          setModalWidth("large");
          showSlides(slideIndex);
          $('#portfolioModal').modal('show');  
        });   

        $("#lxmlDcardColorBox").click(function(){
          modalHead = "Dcard 文章關鍵字熱度爬蟲";
          slideImg1 = "img/lxmlDcard-1.png";
          slideImg2 = "img/lxmlDcard-2.png";
          slideImg3 = "img/lxmlDcard-3.png";
          slideImg4 = "img/lxmlDcard-4.png";
          slideImg5 = "img/lxmlDcard-5.png";

          imgAlt1 = "2019年4月 蔡英文熱度";
          imgAlt2 = "2019年4月 郭台銘熱度";
          imgAlt3 = "2019年4月 賴清德熱度";
          imgAlt4 = "2019年4月 柯文哲熱度";
          imgAlt5 = "2019年4月 朱立倫熱度";
          content = "<div class='ui header'>簡單的 Dcard 時事版文章爬蟲</div>\
                    <p>&nbsp&nbsp&nbsp&nbsp2019年4月，全台對2020總統大選候選人的未來將由誰來出線非常關注，媒體、社群討論度極高，\
                    大家都非常好奇與爭論民調的輸贏，而當時我因旁聽Python的課程，加上對該議題的好齊心，\
                    便起心想透過爬蟲來了解在 Dcard 上，各個可能候選人的討論熱度，便試做這個爬蟲程式。</p>\
                    <p>&nbsp&nbsp&nbsp&nbsp這隻爬蟲是使用 Python 的 lxml 套件，依照 XPath 取得網頁上的內容。\
                    也利用了 Selenium 的 Web Driver 來模擬滑鼠滾動以自動載入多數頁面。在取得文章標題後依照使用者先前輸入之關鍵字篩選，\
                    最後將符合結果的統計出來，便能得知該議題在某段時間內 Dcard 時事版的討論熱度。</p>\
                    <p>GitHub網址：<a href = ''></a></p>\
                    ";

          setModalElement();
          setSlideImgWidth("200vw");
          setModalWidth("large");
          showSlides(slideIndex);
          $('#portfolioModal').modal('show');  
        });

        $("#busColorBox").click(function(){
          modalHead = "高雄老司機";
          slideImg1 = "img/bus-1.png";
          slideImg2 = "img/bus-2.png";
          slideImg3 = "img/bus-3.png";
          slideImg4 = "img/bus-4.png";
          slideImg5 = "img/bus-5.png";

          imgAlt1 = "高雄老司機首頁";
          imgAlt2 = "路線動態搜尋畫面";
          imgAlt3 = "依關鍵字顯示符合路線";
          imgAlt4 = "顯示該路線動態";
          imgAlt5 = "收藏路線";
          content = "<div class='ui header'>網頁版的高雄公車通</div>\
                    <p>&nbsp&nbsp&nbsp&nbsp利⽤PTX交通部開放資料提供的高雄公⾞動態資訊與路線資料，\
                    參考高雄公車通 App 的功能，將其以 Javascript 仿製出來，可以說是網頁板的高雄公車通。</p>\
                    <p>&nbsp&nbsp&nbsp&nbsp高雄老司機可查詢公⾞站牌、路線的即時的動態資訊、收藏站牌與路線，路線動態資訊由即時向開放資料的API取得，\
                    ，而收藏功能使用 local storage 實作。高雄公車通也已將服務放在 GitHub Pages上。</p>\
                    <p>&nbsp&nbsp&nbsp&nbsp在此專案中，我負責路線查詢的部分。向開放資料 API 取得路線、站牌、即時動態資料，\
                    並使其能夠隨著使用者的輸入，動態篩選出使用者欲查的路線；以及定時更新頁面以顯示最新資訊。</p>\
                    <p>高雄老司機網址：<a href = 'https://timglect.github.io/BusApp'>https://timglect.github.io/BusApp</a></p>\
                    ";

          setModalElement();
          setSlideImgWidth("100vw");
          setModalWidth("large");
          showSlides(slideIndex);
          $('#portfolioModal').modal('show');  
        });


        $("#chineseNumColorBox").click(function(){
          modalHead = "中文數字手寫辨識";
          slideImg1 = "img/chineseNum-1.jpg";
          slideImg2 = "img/chineseNum-2.jpg";
          slideImg3 = "img/chineseNum-3.jpg";
          slideImg4 = "img/chineseNum-4.jpg";
          slideImg5 = "img/chineseNum-5.jpg";

          imgAlt1 = "經處理的 28 x 28 中文數字手寫圖片";
          imgAlt2 = "CNN 類神經網路結構";
          imgAlt3 = "準確度隨著訓練次數的增加而上升";
          imgAlt4 = "loss 值隨著訓練次數增加而減少";
          imgAlt5 = "混淆矩陣";
          content = "<div class='ui header'>深度學習的入門</div>\
                    <p>&nbsp&nbsp&nbsp&nbsp課堂上全班合力蒐集約一萬八千份的中文數字(一 ~ 十)手寫圖片資料。在將收集到的手寫資料預處理後，\
                    將其轉為 28 x 28 的圖片大小，再利用 Keras 實現 CNN 卷積式類神經網路進行深度學習。 CNN 模組由兩層卷積層兩層池化層組成，\
                    最後由softmax來進行分類。而訓練與測試資料的分配，其中的一萬六千份資料作為訓練資料，兩千份做為測試資料，\
                    最後模型訓練結果準確度達到九成。</p>\
                    \
                    <p>&nbsp&nbsp&nbsp&nbsp本專案是我首次接觸到人工智慧的技術與 Python 語言的應用，\
                    了解資料預處理與優化對於深度學習準確度的重要性。。此專案在使用 CNN 之前，\
                    也有使用無卷積池化的單純 MLP 多層感知機的實作，但結果準確度相對較差。</p>\
                    <p>GitHub網址：<a href = ''></a></p>\
                    ";

          setModalElement();
          setSlideImgWidth("200vw");
          setModalWidth("large");
          showSlides(slideIndex);
          $('#portfolioModal').modal('show');  
        });


        $("#timerColorBox").click(function(){
          modalHead = "Timer Bus";
          slideImg1 = "img/timer-1.jpg";
          slideImg2 = "img/timer-2.jpg";
          slideImg3 = "img/timer-3.jpg";
          slideImg4 = "img/timer-4.jpg";
          slideImg5 = "img/timer-5.jpg";

          imgAlt1 = "首頁－輸入目的地";
          imgAlt2 = "檢視大眾運輸與行人路線規劃";
          imgAlt3 = "地圖顯示路線規劃";
          imgAlt4 = "路線中捷運站即時動態";
          imgAlt5 = "行走中仍可檢視文字規劃";
          content = "<div class='ui header'>Google 路線規劃與捷運即時動態資料的結合</div>\
                    <p>&nbsp&nbsp&nbsp&nbsp本專案利用 Node.js 的後端技術與 Google Map API 實作大眾運輸導航功能，\
                    並將服務佈署於雲端伺服器 Heroku。但不同的是加上利用了 PTX 交通部開放資料取得捷運動態資訊，\
                    可得知導航路線中的捷運站下班車還剩下多少時間，幫助使用者掌握自身步行速度。</p>\
                    \
                    <p>&nbsp&nbsp&nbsp&nbsp其中我負責利用 Node.js 提供的 request 模組抓取 PTX 交通部開放資料，取出 Google\
                    API 路線規劃所經之捷運站動態資料。而這次專案也是我們首次以 Node.js 架構完成後端的實作，\
                    也第一次學習 Heroku 雲端伺服器服務的使用與開放資料的應用。</p>\
                    <p>timer 網址：<a href = 'https://timerbus.herokuapp.com/'>https://timerbus.herokuapp.com/</a></p>\
                    ";

          setModalElement();
          setSlideImgWidth("40vw");
          setModalWidth("");
          showSlides(slideIndex);
          $('#portfolioModal').modal('show');  
        });

      
      showSlides(slideIndex);

      var clickE = 0; 
      $('#intern').click(function(){
        $("#internBar").toggle(500);
        if(clickE == 0){
          $('#intern').children(".head").children("i").css('transform','rotate(180deg)');
          clickE = 1;
        }else{
          $('#intern').children(".head").children("i").css('transform','rotate(0deg)');
          clickE = 0;
        }
      });

      var clickA = 0; 
      $('#bookAward').click(function(){
        $("#bookAwardBar").toggle(500);
        if(clickA == 0){
          $('#bookAward').children(".head").children("i").css('transform','rotate(180deg)');
          clickA = 1;
        }else{
          $('#bookAward').children(".head").children("i").css('transform','rotate(0deg)');
          clickA = 0;
        }
      });

      var clickB = 0;
      $('#competitionAward').click(function(){
        $("#competitionAwardBar").toggle(500);
        if(clickB == 0){
          $('#competitionAward').children(".head").children("i").css('transform','rotate(180deg)');
          clickB = 1;
        }else{
          $('#competitionAward').children(".head").children("i").css('transform','rotate(0deg)');
          clickB = 0;
        }
      });

      var clickC = 0;
      $('#leaderAward').click(function(){
        $("#leaderAwardBar").toggle(500);
        if(clickC == 0){
          $('#leaderAward').children(".head").children("i").css('transform','rotate(180deg)');
          clickC = 1;
        }else{
          $('#leaderAward').children(".head").children("i").css('transform','rotate(0deg)');
          clickC = 0;
        }
      });

      var clickD = 0;
      $('#volunteerAward').click(function(){
        $("#volunteerAwardBar").toggle(500);
        if(clickD == 0){
          $('#volunteerAward').children(".head").children("i").css('transform','rotate(180deg)');
          clickD = 1;
        }else{
          $('#volunteerAward').children(".head").children("i").css('transform','rotate(0deg)');
          clickD = 0;
        }
      });
        
});


        function setSlideImgWidth(width){
          $('#slideImgDiv').attr("style","width:" + width);
        }

        function setModalWidth(size){
          $('#portfolioModal').attr("class","ui longer "+ size +" modal");
        }

        var modalHead,slideImg1,slideImg2,slideImg3,slideImg4,slideImg5,imgAlt1,imgAlt2,imgAlt3,imgAlt4,imgAlt5;
        var content
        function setModalElement(){
          $('#modalHead').html(modalHead);
          $('#slideImg-1').attr("src",slideImg1);
          $('#slideImg-2').attr("src",slideImg2);
          $('#slideImg-3').attr("src",slideImg3);
          $('#slideImg-4').attr("src",slideImg4);
          $('#slideImg-5').attr("src",slideImg5);

          $('#columImg-1').attr("src",slideImg1);
          $('#columImg-1').attr("alt",imgAlt1);

          $('#columImg-2').attr("src",slideImg2);
          $('#columImg-2').attr("alt",imgAlt2);

          $('#columImg-3').attr("src",slideImg3);
          $('#columImg-3').attr("alt",imgAlt3);

          $('#columImg-4').attr("src",slideImg4);
          $('#columImg-4').attr("alt",imgAlt4);

          $('#columImg-5').attr("src",slideImg5);
          $('#columImg-5').attr("alt",imgAlt5);

          $('#modalDescription').html(content);
          
        }
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("demo");
          var captionText = document.getElementById("caption");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
          captionText.innerHTML = dots[slideIndex-1].alt;
        }

    