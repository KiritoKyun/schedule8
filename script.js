function t2min(x){
	return (parseInt(x.slice(0,2),10)*60+parseInt(x.slice(3),10))
}
var latetimer; var updatetimer; var endtime; var remaining; var customtime; var latestarttimer; mobileDetect = mobileDetector();
function mobileDetector(){
	if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
		return true
	}
	return false
}
function check(){
	if (typeof remaining == 'undefined'){
		clear()
	}
}
function setlatestarttimer(){
	latestarttimer = setInterval(latestart,1000)
	clearInterval(updatetimer)
	document.getElementById('late').style.visibility = 'hidden'
	customtime = null
	clear()
}
function definetime(){
	window.today = new Date()
	window.day = today.getDay()
	window.minutes = today.getHours()*60 + today.getMinutes()
}
function convertendtime(x){
	if (parseInt(x.slice(0,2),10)<13){
		return parseInt(x.slice(0,2),10).toString() + ':' + x.slice(3)
	}
	return (parseInt(x.slice(0,2),10)-12).toString() + ':' + x.slice(3)
}
function commitchanges(){
	document.getElementById('time').innerHTML = endtime
	document.getElementById('timeRemaining').innerHTML = remaining
}
function final(timearray){
	for (var i = 0; i < timearray.length - 1; i++){
		if (t2min(timearray[i]) <= minutes && minutes < t2min(timearray[i+1])){
			endtime = convertendtime(timearray[i+1])
			remaining = (t2min(timearray[i+1])-minutes-1).toString() + ' minute(s) and ' + (60-parseInt(today.getSeconds(),10)).toString() + ' second(s) remaining'
			commitchanges()
			break
		}
	}
}
function update(){
	definetime()
	if (customtime != null){
		endtime = convertendtime(customtime)
		if (today.getHours() > 12){
			var customtime24 = (parseInt(customtime.slice(0,2),10)+12).toString() + customtime.slice(2)
			remaining = (t2min(customtime24)-minutes-1).toString() + ' minute(s) and ' + (60-parseInt(today.getSeconds(),10)).toString() + ' second(s) remaining'
			var custime = customtime24
		}
		else{
			remaining = (t2min(customtime)-minutes-1).toString() + ' minute(s) and ' + (60-parseInt(today.getSeconds(),10)).toString() + ' second(s) remaining'
			var custime = customtime
		}
		commitchanges()
		if (t2min(custime)-minutes == 0){
			document.getElementById('time').innerHTML = 'Time\'s up!'
			document.getElementById('timeRemaining').innerHTML = ''
			clearInterval(updatetimer)
		}
	}
	else if ([1,3,5].includes(day)){
		var normaltimes = ['07:45','08:39','09:45','10:47','11:02','12:01','13:03','13:36','14:35']
		final(normaltimes)
	}
	else if ([2,4].includes(day)){
		var tutorialtimes = ['07:45','08:33','09:32','10:28','10:42','11:17','12:13','13:09','13:42','14:35']
		final(tutorialtimes)
	}
	check()
}
function clear(){
	endtime = '00:00'
	remaining = 'Not in school'
	commitchanges()
}
function latestart(){
	definetime()
	var latestarttimes = ['09:14','09:54','10:39','10:51','11:36','12:21','13:06','13:36','14:20']
	final(latestarttimes)
	check()
}
function customtimer(){
	window.customtime = prompt('Please enter your custom time (XX:XX):')
	clearInterval(latestarttimer)
	update()
	updatetimer = setInterval(update,1000)
}
update()
var updatetimer = setInterval(update,1000)
if (mobileDetect ==  false){
	document.getElementById('customtimer').style.visibility = 'visible'
}
if (day == 3){
	document.getElementById('late').style.visibility = 'visible'
}