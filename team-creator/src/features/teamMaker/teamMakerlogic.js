const times = [
    {id: 0, time:'15:10.60'},
    {id: 1, time:'13:50.26'},
    {id: 2, time:'15:21.63'},
    {id: 3, time:'15:26.97'},
    {id: 4, time:'13:18.59'},
    {id: 5, time:'13:05.25'},
    {id: 6, time:'13:36.18'},
    {id: 7, time:'14:25.68'},
    {id: 8, time:'15:24.15'}
]

function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;
	if (k > set.length || k <= 0) {
		return [];
	}
	if (k === set.length) {
		return [set];
	}
	if (k === 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	combs = [];

	for (i = 0; i < set.length - k + 1; i++) {
		head = set.slice(i, i + 1);
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}

function tooMS (arr){
    let newArr = []
    arr.map(time => {
        const minute = Number(time.slice(0,2)) * 60000
        const second = Number(time.slice(3,5)) * 1000
        const milSec = Number(time.slice(6))
        newArr.push(minute + second + milSec)
    }) 
  return newArr  
}

function totalRaceTimes (combos, timesObj) {
    const totaledArr = []
    combos.map(combo => {
        let comboTotal = 0
        combo.map(r => {
            comboTotal += timesObj[r]
            return ''
        })
        totaledArr.push({combo, total:comboTotal})
        return comboTotal
    })
    return totaledArr
}

function averageRaceTime (timesArr) {
    var total = 0
    for(let i = 0; i < timesArr.length; i++){
        total += timesArr[i].total
    }
    return total / timesArr.length
}
  

function closest (raceTimesObjArr, goal, num){
    let arr = []
    raceTimesObjArr.map(time => {
        arr.push(time.total)
    })
    const closestTime =  arr.reduce((prev, curr) => {
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev)
    })
    return {combo: raceTimesObjArr[arr.indexOf(closestTime)].combo ,total:closestTime, num}
}

function nthClosest (raceTimesObjArr, goal, teams){
    const usedRacers = []
    const closestTimes = []
    let arr = raceTimesObjArr
    let b = 0

    for(let i = 0; i < teams; i){
        const close = closest(arr, goal, b)
        const newArr = arr.filter(time => time.total !== close.total)
        arr = newArr
        b++

        if(!usedRacers.includes(close.combo[0]) && !usedRacers.includes(close.combo[1]) && !usedRacers.includes(close.combo[2])) {
            close.combo.map(racer => usedRacers.push(racer))
            closestTimes.push(close)
            i++
        }
    }
    return closestTimes
}

function findClosestNthTimes (racerObj, teamSize) {
    let racers = []
    let times = []
    racerObj.map(racer => {
        racers.push(racer.id)
        times.push(racer.time)
    })

    const raceTimesObj = totalRaceTimes(k_combinations(racers, teamSize),tooMS(times))
    const raceTimesAverage = averageRaceTime(totalRaceTimes(k_combinations(racers, teamSize),tooMS(times)))

    return nthClosest(raceTimesObj, raceTimesAverage, teamSize)
}

console.log(findClosestNthTimes(times ,3))