let filmEl=document.querySelector("#film")
let antallEl=document.querySelector("#antall")
let fornavnEl=document.querySelector("#fornavn")
let etternavnEl=document.querySelector("#etternavn")
let tlfEl=document.querySelector("#tlfnr")
let epostEl=document.querySelector("#epost")
let kjopEl=document.querySelector("#kjop")
let slettEl=document.querySelector("#slett")
let bilettarray=[]


function kjopBillett() {
    let obj={"film":filmEl.value,"antallBillett":antallEl.value,"navn":fornavnEl.value+etternavnEl.value,"tlfnr":tlfEl.value,"epost":epostEl.value}
    bilettarray.push(obj)
    filmEl.value="Velg film her"
    antallEl.value=""
    fornavnEl.value=""
    etternavnEl.value=""
    tlfEl.value=""
    epostEl.value=""
    console.log(bilettarray)
}

function slettBillett() {
    bilettarray=[]
}

kjopEl.addEventListener("click",kjopBillett)
slettEl.addEventListener("click",slettBillett)


