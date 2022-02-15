// let myage=20
// console.log(myage)


// mydogage=20
// mydogage++
// console.log(mydogage)

// let bonuspoints=50
// console.log(bonuspoints)
// bonuspoints+=100
// console.log(bonuspoints)
// bonuspoints-=25
// console.log(bonuspoints)
// bonuspoints+=70
// console.log(bonuspoints)
 let countEl=document.getElementById("count-pple")
 let count=0
 let countstr=document.getElementById("save-para")
 function increment(){
     count++
     countEl.innerText=count
 }



 function save(){
     let tempi=count +" - "
     countstr.textContent+=tempi
    //  console.log(count)
    count=0
    countEl.innerText=count
 }

//  let welcomeEl=document.getElementById("welcome-para")
//  let str1="Hii  welcome,"
//  let str2="see what I'm learning"

//  welcomeEl.innerText=str1+str2+" 👋🏻"
 

// let username="per"
// let message="you have a new notification"
// console.log(message+", "+username)