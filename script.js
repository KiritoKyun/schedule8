function t2min(x){
	return (parseInt(x.slice(0,2),10)*60+parseInt(x.slice(3),10))
}
var latetimer; var updatetimer; var endtime; var remaining;
function check(){
	if (typeof remaining == 'undefined'){
		clear()
	}
}
function setlatestarttimer(){
	setInterval(latestart,1000)
	clearInterval(updatetimer)
	document.getElementById('late').innerHTML = ''
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
	if ([1,3,5].includes(day)){
		var normaltimes = ['06:45','07:37','08:41','09:50','10:54','11:09','12:10','13:14','13:44','14:45']
		final(normaltimes)
	}
	else if ([2,4].includes(day)){
		var tutorialtimes = ['06:45','07:37','08:41','09:50','10:54','11:09','12:10','13:14','13:44','14:45']
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
	var latestarttimes = ['8:30','09:09','09:57','10:50','11:05','11:50','12:38','13:26','14:00','14:45']
	final(latestarttimes)
	check()
}
update()
var updatetimer = setInterval(update,1000)
if (day == 3){
	document.getElementById('late').innerHTML = 'Click if late start'
}