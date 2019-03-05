function t2min(x){
	return (parseInt(x.slice(0,2),10)*60+parseInt(x.slice(3),10));
}
function result(x,time,today){
	if (parseInt(x.slice(0,2))>12){
		return ((t2min(x)-t2min(time)-1).toString() + ' minutes(s) and ' + (60-parseInt(today.getSeconds(),10)).toString() + ' second(s) remaining');
	}
	else{
		return ((t2min(x)-t2min(time)-1).toString() + ' minutes(s) and ' + (60-parseInt(today.getSeconds(),10)).toString() + ' second(s) remaining');
	}
}
function update(){
	var today = new Date();
	var day = today.getDay();
	var time = today.getHours() + ":" + today.getMinutes();
	var minutes = today.getMinutes();
    var remaining;
    var endtime;
	if ([1,3,5].includes(day)){
		if (t2min('07:45') <= minutes && minutes < t2min('08:39')){
            endtime = '8:39'
			remaining = result('08:39',time,today);
		}
		else if (t2min('08:39') <= minutes && minutes < t2min('09:45')){
            endtime = '9:45'
			remaining = result('09:45',time,today);
		}
		else if (t2min('09:45') <= minutes && minutes < t2min('10:47')){
            endtime = '10:47'
			remaining = result('10:47',time,today);
		}
		else if (t2min('10:47') <= minutes && minutes < t2min('11:02')){
            endtime = '11:02'
			remaining = result('11:02',time,today);
		}
		else if (t2min('11:02') <= minutes && minutes < t2min('12:01')){
            endtime = '12:01'
			remaining = result('12:01',time,today);
		}
		else if (t2min('12:01') <= minutes && minutes < t2min('13:03')){
            endtime = '1:03'
			remaining = result('13:03',time,today);
		}
		else if (t2min('13:03') <= minutes && minutes < t2min('13:36')){
            endtime = '1:36'
			remaining = result('13:36',time,today);
		}
		else if (t2min('13:36') <= minutes && minutes < t2min('14:35')){
            endtime = '2:35'
			remaining = result('14:35',time,today);
		}
	}
	else if ([2,4].includes(day)){
		if (t2min('07:45') <= minutes && minutes < t2min('08:33')){
            endtime = '8:33'
			remaining = result('08:33',time,today);
		}
		else if (t2min('08:33') <= minutes && minutes < t2min('09:32')){
            endtime = '9:32'
			remaining = result('09:32',time,today);
		}
		else if (t2min('09:32') <= minutes && minutes < t2min('10:28')){
            endtime = '10:28'
			remaining = result('10:28',time,today);
		}
		else if (t2min('10:28') <= minutes && minutes < t2min('10:42')){
            endtime = '10:42'
			remaining = result('10:42',time,today);
		}
		else if (t2min('10:42') <= minutes && minutes < t2min('11:17')){
            endtime = '11:17'
			remaining = result('11:17',time,today);
		}
		else if (t2min('11:17') <= minutes && minutes < t2min('12:13')){
            endtime = '12:13'
			remaining = result('12:13',time,today);
		}
		else if (t2min('12:13') <= minutes && minutes < t2min('13:09')){
            endtime = '1:09'
			remaining = result('13:09',time,today);
		}
		else if (t2min('13:09') <= minutes && minutes < t2min('13:42')){
            endtime = '1:42'
			remaining = result('13:42',time,today);
		}
		else if (t2min('13:42') <= minutes && minutes < t2min('14:35')){
            endtime = '2:35'
			remaining = result('14:35',time,today);
		}
	}
	if (typeof remaining == 'undefined'){
        endtime = '00:00'
		remaining = 'Not in school'
	}
	var endtimeContainer = document.getElementById("time")
    endtimeContainer.innerHTML = endtime
    var remainingContainer = document.getElementById('timeRemaining')
    remainingContainer.innerHTML = remaining
}
update()