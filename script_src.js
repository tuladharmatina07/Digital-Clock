function showTime(){
                var date = new Date();
                var h = date.getHours(); // 0 - 24
                var m = date.getMinutes(); // 0 - 50
                var s = date.getSeconds(); // 0- 59
                var session = "AM";
                if (h == 0){
                    h = 12;
                }
                if (h > 12){
                    h = h-12;
                    session = "PM";
                }

                h = (h<10) ? "0" +h : h;
                m = (m<10) ? "0" +m : m;
                s = (s<10) ? "0" +s : s;
                
                var time = h + " : " + m + " : "+ s +" "+ session;
                document.getElementById("TimeDisplay").innerText = time;
                document.getElementById("TimeDisplay").textContent = time;
                setTimeout(showTime, 1000);

                var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

                var currentDay = days[date.getDay()];
                var currentDate = date.getDate();
                var currentMonth = months[date.getMonth()];
                var currentYear = date.getFullYear();
                var date = currentDay +", " + currentDate +" "+ currentMonth+ ", " + currentYear;

                document.getElementById("DateDayDisplay").innerText = date;
                document.getElementById("DateDayDisplay").textContent = date;

            }
showTime();