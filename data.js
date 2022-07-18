
var year= document.getElementById('year').innerText;
var month = document.getElementById('month').innerText;
var date = document.getElementById('date')
// console.log(month)
 var years =parseInt(year)
function months() {
    
    console.log(month)

    if (month == 'Feb') {

        if (years% 4 == 0 && years % 4 != 100 && years % 4 == 400) {
            date.innerHTML = ''
            for (let i = 1; i <= 29; i++) {
                var option = document.createElement("option");
                option.innerText = i;
                date.append(option)
            }

        }
        else {
            date.innerHTML = ''
            for (let i = 1; i <= 28; i++) {
                var option = document.createElement("option");
                option.innerText = i;
                date.append(option)
            }
        }

    }
    else if (month == 'Jan' || month == 'March' || month == 'May' || month == 'July' || month == 'Sep' || month == 'Oct'|| month == 'Dec') {
        date.innerHTML = ''
        for (let i = 1; i <= 31; i++) {
            var option = document.createElement("option");
            option.innerText = i;
            date.append(option)
        }
    }
    else {
        date.innerHTML = ''
        for (i = 1; i <= 30; i++) {
            var option = document.createElement("option");
            option.innerText = i;
            date.append(option)

        }
    }
    
    
}
var span = document.createElement('span')
span.textContent='reterment age'
var body =document.querySelector('.label')
body.append(span)


var label1 =document.querySelector('.label')
var div1 = document.createElement('select')
    div1.textContent='reterment'
    div1.className ='read'
    div1.setAttribute('class','reterment')
    
    for(let i= 40;i<=65;i++){
        var option =document.createElement('option')
        option.setAttribute('value',i)
        option.innerText =i
        div1.append(option);
       label1.append(div1)
    }

    // console.log(div1);
    var body =document.querySelector('.label')
    var button =document.createElement('button')
    button.textContent='go'
    button.classname='button'
    button.setAttribute('class','button')
    body.append(button)
    console.log(button)

    var arun= document.getElementById('data')