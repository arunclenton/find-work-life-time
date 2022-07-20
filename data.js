
// var year= document.getElementById('year').innerText;
// var month = document.getElementById('month').innerText;
// var date = document.getElementById('date')
// // console.log(month)
//  var years =parseInt(year)
// function months() {
    
//     console.log(month)

//     if (month == 2) {

//         if (years% 4 == 0 && years % 4 != 100 && years % 4 == 400) {
//             date.innerHTML = ''
//             for (let i = 1; i <= 29; i++) {
//                 var option = document.createElement("option");
//                 option.innerText = i;
//                 date.append(option)
//             }

//         }
//         else {
//             date.innerHTML = ''
//             for (let i = 1; i <= 28; i++) {
//                 var option = document.createElement("option");
//                 option.innerText = i;
//                 date.append(option)
//             }
//         }

//     }
//     else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 9 || month == 10 || month == 12) {
//         date.innerHTML = ''
//         for (let i = 1; i <= 31; i++) {
//             var option = document.createElement("option");
//             option.innerText = i;
//             date.append(option)
//         }
//     }
//     else {
//         date.innerHTML = ''
//         for (i = 1; i <= 30; i++) {
//             var option = document.createElement("option");
//             option.innerText = i;
//             date.append(option)

//         }
//     }
    
    
// }
// var span = document.createElement('span')
// span.textContent='reterment age'
// var body =document.querySelector('.label')
// body.append(span)


// var label1 =document.querySelector('.label')
// var div1 = document.createElement('select')
//     div1.textContent='reterment'
//     div1.className ='read'
//     div1.setAttribute('class','reterment')
    
//     for(let i= 40;i<=65;i++){
//         var option =document.createElement('option')
//         option.setAttribute('value',i)
//         option.innerText =i
//         div1.append(option);
//        label1.append(div1)
//     }

//     // console.log(div1);
//     var body =document.querySelector('.label')
//     var button =document.createElement('button')
//     button.textContent='go'
//     button.classname='button'
//     button.setAttribute('class','button')
//     body.append(button)
//     console.log(button)

var month = document.getElementById("month")
// console.log(month);
var days = document.getElementById('days')
var year = document.getElementById("years")
var reage = document.getElementById("reage")
var btn = document.getElementById("go")
var non = document.getElementById('non')
// var body

// console.log(reage.value)

year.addEventListener('click', changeyr)
function changeyr() {
    yr = year.value
    // console.log(yr)
    
    document.getElementById('month').value = ''
    document.getElementById('days').value = ''
}





btn.addEventListener('click', go)
function go() {
    non.innerHTML = '';
    var reyear = new Date()
    
    var curentyear = (reyear.getUTCFullYear());
    // console.log(curentyear)
    
    var curentage = (curentyear - yr)
    // console.log(curentage)
    var furage = (reage.value - curentage)
    // console.log(furage)
     



     
    var curmon = (reyear.getUTCMonth());
    var balanceagemonth = Math.abs((12) - (month.value))
    // console.log(curmon)
    // console.log(balanceagemonth)
    


     
    var curday = (reyear.getUTCDate());
    if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12) {
        var balanceageday = Math.abs((31) - (days.value))
        
        // console.log(balanceageday)
    }
    else if (month.value == 2) {
        if ((0 == yr % 4) && (0 != yr % 100) || (0 == yr % 400)) {
            var balanceageday = Math.abs((29) - (days.value))
            
            // console.log(balanceageday)
        }
        else {
            var balanceageday = Math.abs((28) - (days.value))
             
        //     console.log(balanceageday)
         }
    }
    else {
        var balanceageday = Math.abs((30) - (days.value))
         
        // console.log(balanceageday)
    }




     
    for (i = 1; i <= furage; i++) {
         
        
        // console.log(i)
        var button = document.createElement('button')
        button.setAttribute('style', 'background-color: red');
         
        non.appendChild(button)
    }
    for (i = 1; i <= balanceagemonth; i++) {
        // console.log(i)
        var button = document.createElement('button')
        button.setAttribute('style', 'background-color: red');
         
        non.appendChild(button)
    }
    for (i = 1; i <= balanceageday; i++) {
        // console.log(i)
        var button = document.createElement('button')
        button.setAttribute('style', 'background-color: blue');
         
        non.appendChild(button)
    }
     
}


month.addEventListener("click", change)
function change() {
    document.getElementById('days').value = ''
    if (month.value == 2) {
        days.innerHTML = ''
        document.getElementById('days').value = ''
        if ((0 == yr % 4) && (0 != yr % 100) || (0 == yr % 400)) {
            days.innerHTML = ''
            for (i = 1; i <= 29; i++) {
                var option = document.createElement('option')
                var optionText = document.createTextNode(i);
                // console.log(option);
                var option1 = option.appendChild(optionText)
                days.appendChild(option)
            }
        }
        else {
            days.innerHTML = ''
            for (i = 1; i <= 28; i++) {
                var option = document.createElement('Option')
                var optionText = document.createTextNode(i);
                // console.log(option);
                var option1 = option.appendChild(optionText)
                days.appendChild(option)
            }
        }
    }
    else if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12) {
        days.innerHTML = ''
        for (i = 1; i <= 31; i++) {
            var option = document.createElement('Option')
            const optionText = document.createTextNode(i);
            // console.log(option);
            days.appendChild(option)
            var option1 = option.appendChild(optionText)
        }
    }
    else if (month.value == 00) {
    }
    else {
        days.innerHTML = ''
        for (i = 1; i <= 30; i++) {
            var option = document.createElement('Option')
            const optionText = document.createTextNode(i);
            // console.log(option);
            var option1 = option.appendChild(optionText)
            days.appendChild(option)
        }
    }
}
