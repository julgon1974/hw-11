
//    let output = document.getElementById("output");
//    let output2 = document.getElementById("output2");
//    let output3 = document.getElementById("output3");

//    let today = new Date();

//    let time = today.toLocaleTimeString()


//targil 1


//    function thirdFunc (str){
//        return str + "<br>"+ "end";
//    }

//    function secondFunc() {
//        return thirdFunc(time)
//    }

//    const firstFunc = () =>{
//        let second = secondFunc();
//        output.innerHTML = "start" + "<br>" + second 
//    }

//    firstFunc()




//targil 3




//    function runCode() {
//        console.log (time)
//        output.innerHTML = "start" + "<br>"
//        setTimeout(() => { output2.innerHTML = time}, 3*1000)
//        output3.innerHTML = "end"

//    }

//    runCode()




//targil 4



//    output.innerHTML = "start"

//    const firstRan = () => {
//        let numRand = Math.floor(Math.random() * 100);
//        setTimeout(function () { output2.innerHTML=numRand }, 2000)
//    }
//    firstRan()

//    const secondRan = () => {
//        let numRand = Math.floor(Math.random() * 100);
//        setTimeout(function () { output2.innerHTML = numRand }, 5000)
//    }
//    secondRan()

//    const thirdRan = () => {
//        let numRand = Math.floor(Math.random() * 100);
//        setTimeout(function () { output2.innerHTML = numRand }, 7000)
//    }
//    thirdRan()
//    output3.innerHTML = "end"


////targil 5

//    let numRand = 0

//    let startNum = JSON.parse(document.getElementById("output4").innerHTML)


//    const changeNum = () => {
//        startNum = +prompt("enter number")
//        return startNum
//    }

//    const runCode = () => {

//        setInterval(randomNumInStart, 1 * 1000);
//    }


//    const randomNumInStart = () => {

//            numRand = Math.floor(Math.random() * startNum);
//            output2.innerHTML = numRand
    
//    }
//    runCode()



////targil 6

//    const paintBcgd = () => {

//    setInterval(() => {

//        let x = Math.floor(Math.random() * 256);
//        let y = Math.floor(Math.random() * 256);
//        let z = Math.floor(Math.random() * 256);
//        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
//        document.body.style.background = bgColor;
//    },6 * 1000)
//    }

//targil 7


//    const paintBackgrounAndAlert = () => {
//        document.body.style.backgroundColor = "Green";
//        setInterval(() => { alert("Done") }, 1*1000)

//    }

//    paintBackgrounAndAlert()


//targil 8

//    const doWork = (elem, num) => {

//        elem.innerHTML = num
//    }

//        const RandomNumberAfterDelay = (callback) => {
//            let num = Math.floor(Math.random() * 100)
//            let elem = setTimeout(() => { output2.innerHTML = num }, 5 * 1000)
//            callback(elem,num)
       
//    }
//    const runCode = () => {
//        RandomNumberAfterDelay(doWork)
//    }


//targil 9

//const doWork = (elem, num) => {
       
//    elem.innerHTML = num
    
//    }

//const RandomNumberAfterDelay = (callback, limit ) => {

//            let num = Math.floor(Math.random() * limit)
//            let elem = setTimeout(() => { output2.innerHTML = num }, 5 * 1000)
//            console.log(limit)

//    }
//const runCode = () => {
//        let limit = 25
//        RandomNumberAfterDelay(doWork, limit)
//    }


//targil 10

//const doWork = (elem, num) => {

//    elem.innerHTML = num

//    }

//const RandomNumberAfterDelay = (callback, first, last ) => {

//            let num = Math.floor(Math.random() * (last - first + 1) + first)
//            let elem = setTimeout(() => { output2.innerHTML = num }, 5 * 1000)

//    }
//const runCode = () => {
//    let first = 50
//    let last = 55
//        RandomNumberAfterDelay(doWork, first, last)
//    }


//targil 11

//    const doWork = (elem, numEven) => {

//        elem.innerHTML = numEven

//        }

//    const RandomNumberAfterDelay = (callback, first, last) => {

//        for (i = 0; i < 2; i++) {

//            let num = Math.floor(Math.random() * (last - first + 1) + first)

//            if (num % 2 === 0) {
//                let elem = setTimeout(() => { output2.innerHTML = num }, 1 * 1000)
//            } else {
//                num = Math.floor(Math.random() * (last - first + 1) + first+1)
//            }
            
//        }

//        }
//    const runCode = () => {
//        let first = 10
//        let last = 80

//            RandomNumberAfterDelay(doWork, first, last)
//        }


//targil 12



//function getUserFromServer(callback) {

//    setTimeout(() => {
//        const user = { firstName: "Moishe", lastName: "Ufnik" }
//        return printName(user)
//    }, 4000);

//}

//const printName = (user) => {
//    console.log(user.firstName + " " + user.lastName)
//    output2.innerHTML = user.firstName + " " + user.lastName
//}

//const runCode = () => {
//    getUserFromServer(printName)
//}


////targil 13



//function getGradesFromServer(callback) {
//    setTimeout(() => {
//        const grades = [100, 98, 75, 80, 100, 87]
//        return printName(grades)
//    }, 7000);
//}

//const printName = (grades) => {
//    output2.innerHTML = grades.join('  ___  ')
//}

//const runCode = () => {
//    getGradesFromServer(printName)
//}

////targil 14

//const runCode = () => {

//   setInterval(displayTime, 1*1000)
//}

//const displayTime = () => {
//    const now = new Date
//    const time = now.toLocaleTimeString()
//    output2.innerHTML = time

//    let x = Math.floor(Math.random() * 256);
//    let y = Math.floor(Math.random() * 256);
//    let z = Math.floor(Math.random() * 256);
//    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

//    output2.style.color = bgColor
//}


///PROMISE
///targil 1

let min = document.getElementById("min");
let max = document.getElementById("max");
let numRandom;


let myPromise = new Promise((resolve, reject) =>

{
    setTimeout(() =>
{

    const generate7BoomAfterDelayAsync = (min, max) => {
        numRandom = JSON.parse(Math.floor(Math.random() * (max.value - min.value + 1) + min.value))


        if (numRandom % 10 === 7 || numRandom % 7 === 0) {
            resolve("boom")
        } else {
            reject("error")
        }
    }


}, 1000)


});

myPromise.then((value)=> {alert(value)})


const runCode = () => {
  
    generate7BoomAfterDelayAsync(min, max)
}
