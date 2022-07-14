var year = document.getElementById('year');
var month = document.getElementById('month');
var date = document.getElementById('date');

console.log(month)

function months() {
    var m = month.value
    console.log(m)

    if (m == 2) {

        if (year.value % 4 == 0) {
            date.innerHTML = ''
            for (let i = 1; i <= 29; i++) {
                var option = document.createElement("option");
                option.innerText = i
                date.add(option)
            }

        }
        else {
            date.innerHTML = ''
            for (let i = 1; i <= 28; i++) {
                var option = document.createElement("option");
                option.innerText = i
                date.add(option)
            }
        }

    }
    else if (m == 'jan' || m == 'march' || m == 'may' || m == 'july' || m == 'aug' || m == 'oct' || m == 'dec') {
        date.innerHTML = ''
        for (let i = 1; i <= 31; i++) {
            var option = document.createElement("option");
            option.innerText = i
            date.add(option)
        }
    }
    else {
        date.innerHTML = ''
        for (i = 1; i <= 30; i++) {
            var option = document.createElement("option");
            option.innerText = i
            date.add(option)

        }
    }
    // console.log(year.value)
}