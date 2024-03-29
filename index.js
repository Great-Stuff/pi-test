const PI = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989"
const pi_out = document.querySelector(".pi-out")
const mistake_show = document.querySelector(".mistake-show")
const current_index_show = document.querySelector(".current-index-show")
const digits_correct = document.querySelector(".digits-correct")
const retry = document.querySelector(".retry")
const style = document.querySelector(".style")
const retry_btn = document.querySelector(".retry-btn")
let correct_digits = ""
let index_counter = 0
let mistake_counter = 5
let theme = 0
let css_version = "?"+3.3
setTheme()

function retryModel(){
    retry.showModal()
    digits_correct.textContent = index_counter++
}

function mainLogic(obj){
    let val = String(obj.value)
    if(mistake_counter != 0){
        if(val == PI[index_counter]){
            pi_out.textContent += val
            correct_digits += val
            current_index_show.textContent = index_counter + 1
            index_counter++
        }
        else{
            mistake_counter--
            mistake_show.textContent = mistake_counter
        }
    }
    else{
        pi_out.innerHTML = "<span style='color: green;'>3." + correct_digits + "</span>" + "<span style='color: red;'>" + PI.substring(correct_digits.length) + "</span>"
        retryModel()
    }
    obj.value = ""
}

function changeTheme(){
    if(theme == 0){
        style.setAttribute("href", `dark.css${css_version}`)
        theme = 1
        localStorage.setItem("theme", theme)
    }
    else if(theme == 1){
        style.setAttribute("href", `style.css${css_version}`)
        theme = 0
        localStorage.setItem("theme", theme)
    }
}

function setTheme(){
    if(localStorage.getItem("theme") != 0 && localStorage.getItem("theme") != 1){
        return
    }
    theme = localStorage.getItem("theme")
    if(theme == 0){
        style.setAttribute("href", `style.css${css_version}`)
    }
    else if(theme == 1){
        style.setAttribute("href", `dark.css${css_version}`)
    }
}