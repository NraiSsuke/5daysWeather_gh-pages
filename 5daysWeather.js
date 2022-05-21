function weatherCheck(weatherNow){
    //取得した細かい天気の情報を、大まかな天気に分けている。
    //webページの背景色を設定する時に利用している。
    var weather;
    if(weatherNow == "Clouds" | weatherNow == "Mist" | 
        weatherNow == "Smoke" | weatherNow == "Haze" | 
        weatherNow == "Dust" | weatherNow == "Fog" | 
        weatherNow == "Sand" | weatherNow == "Ash" | 
        weatherNow == "Squall" | weatherNow == "Tornado"){
        weather = "cloud";
    }
    else if(weatherNow == "Drizzle" | weatherNow == "Rain"){
        weather = "rain";
    }
    else if(weatherNow == "Thunderstorm"){
        weather = "thunder";
    }
    else if(weatherNow == "Snow"){
        weather = "snow";
    }
    else if(weatherNow == "Clear"){
        weather = "clear";
    }
    return weather;
}

function TimeCheck_Color(timeNow){
    //現在時刻を取得し、昼か夜に分けている。
    //webページの背景色を決定する時に利用している。
    var time;
    if(timeNow == "6" | timeNow == "9" | timeNow == "12" | timeNow == "15"){
        time = "bright";
    }
    else if(timeNow == "18" | timeNow == "21" | timeNow == "0" | timeNow == "3"){
        time = "night";
    }
    return time;
}

function HTMLcolor(WeatherTime){
    //WeatherCheckとTimeCheckの情報を基に背景色を決定している。
    var html = document.getElementById("html");
    var h1 = document.getElementById("h1");
    if(WeatherTime == "clear_bright"){
        html.style.backgroundColor = "#6bf";
        html.style.color = "#fff";
        h1.style.color = "#f75";
    }else if(WeatherTime == "cloud_bright"){
        html.style.backgroundColor = "#ccc";
        html.style.color = "#777";
        h1.style.color = "#777";
    }else if(WeatherTime == "rain_bright"){
        html.style.backgroundColor = "#ddd";
        html.style.color = "#5ac";
        h1.style.color = "#5ac";
    }else if(WeatherTime == "snow_bright"){
        html.style.backgroundColor = "#fff";
        html.style.color = "#741";
        h1.style.color = "#222";
    }else if(WeatherTime == "thunder_bright"){
        html.style.backgroundColor = "#666";
        html.style.color = "#222";
        h1.style.color = "#ff9";
    }else if(WeatherTime == "clear_night"){
        html.style.backgroundColor = "#114";
        html.style.color = "#ffc";
        h1.style.color = "#ff0";
    }else if(WeatherTime == "cloud_night"){
        html.style.backgroundColor = "#222";
        html.style.color = "#556";
        h1.style.color = "##666";
    }else if(WeatherTime == "rain_night"){
        html.style.backgroundColor = "#212";
        html.style.color = "#47c";
        h1.style.color = "#47c";
    }else if(WeatherTime == "snow_night"){
        html.style.backgroundColor = "#224";
        html.style.color = "#9ac";
        h1.style.color = "#9ac";
    }else if(WeatherTime == "thunder_night"){
        html.style.backgroundColor = "#222";
        html.style.color = "#444";
        h1.style.color = "#ffa";
    }
}

function addTable(id){
    //テーブルに要素を追加する関数
    var tr_standard = document.getElementById("standard");
    var table = document.getElementById("table");

    var tr = document.createElement('tr');
    table.insertBefore(tr, tr_standard.nextSibling);
    var tr_id = String("tr" + id);
    tr.id = tr_id;

    var month = document.createElement('th');
    tr.appendChild(month);
    var month_id = String("month" + id);
    month.id = month_id;

    var day = document.createElement('th');
    tr.appendChild(day);
    var day_id = String("day" + id);
    day.id = day_id;

    var hour = document.createElement('th');
    tr.appendChild(hour);
    var hour_id = String("hour" + id);
    hour.id = hour_id;

    var temp_max = document.createElement('th');
    tr.appendChild(temp_max);
    var temp_max_id = String("temp_max" + id);
    temp_max.id = temp_max_id;

    var temp_min = document.createElement('th');
    tr.appendChild(temp_min);
    var temp_min_id = String("temp_min" + id);
    temp_min.id = temp_min_id;

    var speed = document.createElement('th');
    tr.appendChild(speed);
    var speed_id = String("speed" + id);
    speed.id = speed_id;

    var humidity = document.createElement('th');
    tr.appendChild(humidity);
    var humidity_id = String("humidity" + id);
    humidity.id = humidity_id;

    var pre_img = document.createElement('th');
    tr.appendChild(pre_img);
    var img = document.createElement('img');
    pre_img.appendChild(img);
    var img_id = String("img" + id);
    img.id = img_id;
    img.width="60"; 
    img.height="60";
}

function resetTable(){
    //テーブルの中にあるデータを削除する関数
    var table = document.getElementById("table");
    var count = table.childElementCount - 3;

    for(i = 0; i < count; i++){
        var month = document.getElementById(String("month" + i));
        var day = document.getElementById(String("day" + i));
        var hour = document.getElementById(String("hour" + i));
        var temp_max = document.getElementById(String("temp_max" + i));
        var temp_min = document.getElementById(String("temp_min" + i));
        var speed = document.getElementById(String("speed" + i));
        var humidity = document.getElementById(String("humidity" + i));
        var img = document.getElementById(String("img" + i));
        var tr = document.getElementById(String("tr" + i));
        month.remove(); day.remove(); hour.remove();
        temp_max.remove(); temp_min.remove(); speed.remove();
        humidity.remove(); img.remove(); tr.remove();
    }
}

function addData(data, key, id, Dcheck){
    //作成したテーブルにデータを追加する関数
    var month = document.getElementById(String("month" + id));
    var day = document.getElementById(String("day" + id));
    var hour = document.getElementById(String("hour" + id));
    var temp_max = document.getElementById(String("temp_max" + id));
    var temp_min = document.getElementById(String("temp_min" + id));
    var speed = document.getElementById(String("speed" + id));
    var humidity = document.getElementById(String("humidity" + id));
    var img = document.getElementById(String("img" + id));
    
    if(Dcheck == true){
        //テーブルに表示するデータが存在する場合
        var ymdh = new Date(data["list"][key]["dt_txt"]);
        month.textContent = ymdh.getMonth() + 1;//月;
        day.textContent = ymdh.getDate();//日
        hour.textContent = ymdh.getHours();//時
        temp_max.textContent = data["list"][key]["main"]["temp_max"];//最高気温
        temp_min.textContent = data["list"][key]["main"]["temp_min"];//最低気温
        speed.textContent = data["list"][key]["wind"]["speed"];//風速(m)
        humidity.textContent = data["list"][key]["main"]["humidity"];//湿度
        var img_icon = data["list"][key]["weather"][0]["icon"];
        img.src = "http://openweathermap.org/img/wn/" + img_icon + "@2x.png";//天気アイコン
    }
    else{
        //テーブルに表示するがデータが存在しない場合
        month.textContent = "None";
        day.textContent = "None";
        hour.textContent = "None";
        temp_max.textContent = "None";
        temp_min.textContent = "None";
        speed.textContent = "None";
        humidity.textContent = "None";
    }
}

function TimeCheck_Box(){
    var count = [];
    //チェックボックスで選択されている時間の数をcounterに格納
    for(var i = 0; i <= 7; i++){
        time_select = document.getElementById(String("time_select" + i));
        if(time_select.checked){
            count[i] = i;
        }
        else{
            count[i] = -1;
        }
    }
    return count;
}

function addSelectDay2(data, last_key, day, dayCount){
    resetTable();
    var checkBox = TimeCheck_Box();
    var checked = 0;

    for(i = 0; i < 8; i++){
        if(checkBox[i] != -1){checked++;}
    }
    checked--;

    if(checked == -1){ //チェックボックスが何も選択されていない場合
        if(day == "first"){ //今日
            var first = dayCount;
            if(dayCount == 8){
                dayCount--;
            }
            for(i = 0; i <= 7; i++){ //合計８つある時間を表示
                if(0 <= last_key){
                    addTable(dayCount);
                    addData(data, last_key, dayCount, true);
                    dayCount--;
                    last_key--;
                }
                else if(first != 8){
                    addTable(0);
                    addData(data, 0, 0, false);
                    return;
                }
            }
        }
        else if(day == "last"){ //４日後、５日後
            if(dayCount == -1){
                addTable(0);
                addData(data, 0, 0, false);
                return;
            }
            else if(dayCount != 8){
                addTable(dayCount);
                addData(data, 0, dayCount, false);
            }
            for(i = dayCount - 1; i >= 0; i--){
                addTable(i);
                addData(data, last_key, i, true);
                last_key--;
                dayCount--;
                if(dayCount < 0){return;}
            }
        }
    }
    else{ //チェックボックスに選択されている時間がある場合
        checked = 0;
        if(day == "first"){ //今日
            None = 8 - dayCount;
            for(i = 7; i >= 0; i--){
                if(checkBox[i] != -1){
                    checked++;
                    if(i <= None - 1){break;}
                }
            }
            checked--;
            for(i = 7; i >= 0; i--){ //合計８つある時間を表示
                if(checkBox[i] != -1){
                    if(0 <= last_key){
                        addTable(checked);
                        addData(data, last_key, checked, true);
                    }
                    else{
                        addTable(0);
                        addData(data, 0, 0, false);
                        return;
                    }
                    checked--;
                }
                last_key--;
            }
        }
        else if(day == "last"){  //４日後、５日後
            var None = 8 - dayCount;
            for(i = 7; i >= 0; i--){
                if(checkBox[i] != -1){
                    if(i > dayCount){
                        i = dayCount;
                        checked++;
                    }
                    else{checked++;}
                }
            }
            checked--;
            for(i = 7; i >= 0; i--){
                if(dayCount == -1){ //データがない場合
                    addTable(0);
                    addData(data, 0, 0, false);
                    return;
                }
                else if(checkBox[i] != -1){
                    if(i > dayCount){
                        addTable(checked);
                        addData(data, 0, checked, false);
                        i = dayCount;
                    }
                    else{
                        addTable(checked);
                        addData(data, last_key, checked, true);
                    }
                    checked--;
                }
                if(dayCount - 1 >= i){last_key--;}
                if(checked < 0){return;}
            }
        }
    }
}

function addSelectDay1(data, first_key){
    resetTable();
    var checkBox = TimeCheck_Box();
    var checked = 0;
    for(i = 0; i < 8; i++){
        if(checkBox[i] == i){checked++;}
    }
    checked--;
    var id = 7;
    if(checked == -1){ //チェックボックスが何も選択されていない場合
        for(key = first_key + 7; key >= first_key; key--, id--){ 
            addTable(id);
            addData(data, key, id, true);
        }
        return;
    }
    else{ //チェックボックスに選択されている時間がある場合
        for(key = first_key + 7; key >= first_key; key--, id--){
            id_name = (String("time_select" + id));
            check = document.getElementById(id_name).checked;
            if(check == true){
                addTable(checked);
                addData(data, key, checked, true);
                checked--;
            }
        }
    }
}

//データをテーブルの表示する関数
function getWeather(submit, area, time){
    document.getElementById(submit).onclick=function(){

        //「日時指定」ボタンを押したときの処理
        if(submit == "date_submit"){
            var date;
            var date_select = document.getElementsByName("date_select");
        
            //どの日時が選択されているかチェックし、dateに格納
            for(var i = 0; i < 7; i++){
                if(date_select.item(i).checked){
                    date = date_select.item(i).value;
                }
            }

            var japan = document.getElementById("japan").value;
            var world = document.getElementById("world").value;
        
            //処理ができなくなる状態時にアラートを行う処理
            if(japan == "" && world == ""){
                window.alert("地域を選択してください。");
                return;
            }
            if(date == null){
                window.alert("日を選択してください");
                return;
            }
        
            //「日本の主な地域」の選択肢が優先されるようにする処理
            if(japan == ""){area = "world";}
            else{area = "japan";}
        }

        var city = document.getElementById(area).value;
        var url_data = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=60a522562a9a259b985d968d4b5e91e9&units=metric&lang=ja";

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                var data = JSON.parse(xmlhttp.responseText);

                var num = 2; //現在の時刻を取得できるキー番号
                
                var ymdh_now = new Date(data["list"][num]["dt_txt"]); 

                //選択した地名と天気を、テキストに表示する
                var cityText = document.getElementById("cityText");
                var year = document.getElementById("year");
                year.textContent = ymdh_now.getFullYear();
                cityText.textContent = "現在の" + data["city"]["name"] + "の天気：" + data["list"][num]["weather"][0]["description"];  

                //現在の天気と時刻を計算し、背景色を変更する
                var Now_Weather = data["list"][num]["weather"][0]["main"];
                var nowWeather = weatherCheck(Now_Weather);
                var Now_Time = ymdh_now.getHours();
                var nowTime = TimeCheck_Color(Now_Time);
                var WeatherTime = nowWeather + "_" + nowTime;
                HTMLcolor(WeatherTime);

                //一日の最初の時間がある場所を指定
                var nowHour = ymdh_now.getHours();
                
                //現在の時刻を基に、現在日と５日目の表示できる時間を特定
                if(time == true){
                    if(nowHour == "0"){
                        Tday_L = 9; Tday_D = 8;
                        Fday_L = 39; Fday_D = 6;
                        Lday_L = 0; Lday_D = -1;
                    }
                    else if(nowHour == "3"){
                        Tday_L = 8; Tday_D = 8;
                        Fday_L = 39; Fday_D = 7;
                        Lday_L = 0; Lday_D = -1;
                    }
                    else if(nowHour == "6"){
                        Tday_L = 7; Tday_D = 8;
                        Fday_L = 39; Fday_D = 8;
                        Lday_L = 0; Lday_D = -1;
                    }
                    else if(nowHour == "9"){
                        Tday_L = 6; Tday_D = 7;
                        Fday_L = 38; Fday_D = 8;
                        Lday_L = 39; Lday_D = 1;
                    }
                    else if(nowHour == "12"){
                        Tday_L = 5; Tday_D = 6;
                        Fday_L = 37; Fday_D = 8;
                        Lday_L = 39; Lday_D = 2;
                    }
                    else if(nowHour == "15"){
                        Tday_L = 4; Tday_D = 5;
                        Fday_L = 36; Fday_D = 8;
                        Lday_L = 39; Lday_D = 3;
                    }
                    else if(nowHour == "18"){
                        Tday_L = 3; Tday_D = 4;
                        Fday_L = 35; Fday_D = 8;
                        Lday_L = 39; Lday_D = 4;
                    }
                    else if(nowHour == "21"){
                        Tday_L = 2; Tday_D = 3;
                        Fday_L = 34; Fday_D = 8;
                        Lday_L = 39; Lday_D = 5;
                    }

                    if(date == "now"){ //「現在時刻」を選択の場合
                        resetTable();
                        addTable(0);
                        addData(data, 2, 0, true);
                    }
                    else if(date == "today"){ //「今日」を選択の場合
                        addSelectDay2(data, Tday_L, "first", Tday_D)
                    }
                    else if(date == "1D"){ //「明日」を選択の場合
                        first = Tday_L + 1;
                        addSelectDay1(data, first);
                    }
                    else if(date == "2D"){ //「明後日」を選択の場合
                        first = Tday_L + 9;
                        addSelectDay1(data, first);
                    }
                    else if(date == "3D"){ //「３日後」を選択の場合
                        first = Tday_L + 17;
                        addSelectDay1(data, first);
                    }
                    else if(date == "4D"){ //「４日後」を選択の場合
                        addSelectDay2(data, Fday_L, "last", Fday_D);
                    }
                    else if(date == "5D"){ //「５日後」を選択の場合
                        addSelectDay2(data, Lday_L, "last", Lday_D);
                    }
                }
                else{ //「地域のみ」選択の場合
                    resetTable();
                    for(var i = 39; i >= 0; i--){  
                        addTable(i);
                        addData(data, i, i, true);
                    }
                }
            }
            else {
            }
          }
        }
    xmlhttp.open("GET", url_data);
    xmlhttp.send();
    }
}

function addOption(japanese, key, id){
    //addSelect関数で使用している。
    //２つ目のプルダウンメニューに地域を追加する関数。
    var select = document.getElementById("japan");
    a = document.createElement("option");
    a.id = id;
    a.textContent = japanese;
    a.value = key;
    select.appendChild(a);
}

function addSelect(){
    //1つ目のプルダウンメニューの値によって、
    //追加する地域を分ける関数
    area = document.getElementById("japan8");
    var option = document.getElementById("0");
    if(!(option == null)){
        japan = document.getElementById("japan");
        japan = japan.childElementCount;
        for(i = 0; i < japan; i = i + 1){
            option = document.getElementById(String(i));
            option.remove();
        }
    }

    if(area.value == "touhoku"){
        addOption("", "", "0");
        addOption("北海道", "Hokkaido", "1");
        addOption("青森", "Aomori", "2");
        addOption("岩手", "Iwate", "3");
        addOption("秋田", "Akita", "4");
        addOption("宮城", "Miyagi", "5");
        addOption("山形", "Yamagata", "6");
        addOption("福島", "Fukushima", "7");
    }
    else if(area.value == "kantou"){
        addOption("", "", "0");
        addOption("東京", "tokyo", "1");
        addOption("神奈川", "kanagawa", "2");
        addOption("千葉", "chiba", "3");
        addOption("埼玉", "saitama", "4");
        addOption("茨城", "ibaraki", "5");
        addOption("栃木", "tochigi", "6");
        addOption("群馬", "gunma", "7");
    }
    else if(area.value == "tyuubu"){
        addOption("", "", "0");
        addOption("新潟", "nigata", "1");
        addOption("山梨", "yamanashi", "2");
        addOption("長野", "nagano", "3");
        addOption("富山", "toyama", "4");
        addOption("静岡", "shizuoka", "5");
        addOption("愛知", "aichi", "6");
        addOption("岐阜", "gifu", "7");
        addOption("石川", "ishikawa", "8");
        addOption("福井", "Fukui", "9");
    }
    else if(area.value == "kinki"){
        addOption("", "", "0");
        addOption("京都", "kyoto", "1");
        addOption("大阪", "osaka", "2");
        addOption("奈良", "nara", "3");
        addOption("滋賀", "shiga", "4");
        addOption("三重", "mie", "5");
        addOption("兵庫", "hyogo", "6");
        addOption("和歌山", "wakayama", "7");
    }
    else if(area.value == "sikoku"){
        addOption("", "", "0");
        addOption("鳥取", "tottori", "1");
        addOption("岡山", "okayama", "2");
        addOption("島根", "shimane", "3");
        addOption("広島", "hiroshima", "4");
        addOption("山口", "yamaguchi", "5");
        addOption("香川", "kagawa", "6");
        addOption("徳島", "tokushima", "7");
        addOption("愛媛", "ehime", "8");
        addOption("高知", "kochi", "9");
    }
    else if(area.value == "kyuusyuu"){ 
        addOption("", "", "0");
        addOption("福岡", "fukuoka", "1");
        addOption("大分", "oita", "2");
        addOption("宮城", "miyagi", "3");
        addOption("熊本", "kumamoto", "4");
        addOption("佐賀", "saga", "5");
        addOption("長崎", "nagasaki", "6");
        addOption("鹿児島", "kagoshima", "7");
        addOption("沖縄", "okinawa", "8");
    }
}

window.onload=function(){
    document.getElementById("japan8").onchange = addSelect;
    document.getElementById("data_reset").onclick=function(){
        for(i = 0; i < 8; i++){
            var checkbox = document.getElementById(String("time_select" + i));
            checkbox.checked = false;
        }
    }

    getWeather("japan_submit", "japan", false);
    getWeather("world_submit", "world", false);
    getWeather("date_submit", null, true)
}