const covidCases = [
    {
        date: new Date(),
        brgy: "Bagbaguin",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Bahay Pare",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Bancal",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Banga",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Bayugo",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Caingin",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Calvario",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Camalig",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Hulo",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Iba",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Langka",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Lawa",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Libtong",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Liputan",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Longos",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Malhacan",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Pajo",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Pandayan",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Pantoc",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Perez",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Poblacion",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "St. Francis Gasak",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Saluysoy",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Tugatog",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Ubihan",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
    {
        date: new Date(),
        brgy: "Zamora",
        numCases: 0,
        recoveries: 0,
        death:0,
        suspected: 0,
    },
]



const casesList = document.querySelector('#cases-list')
const caseItems = Array.from(casesList.children)

let index;


caseItems.forEach(caseItem => {
   caseItem.innerHTML = insertTemplate()

   const barangayClass =  caseItem.querySelector('.brgy')
   const totalCasesClass = caseItem.querySelector('.total-cases')
   const recoveryClass =  caseItem.querySelector('.recovery-cases')
   const deathClass=  caseItem.querySelector('.death-cases')
   const suspectedClass =  caseItem.querySelector('.suspected-cases')


   
    if(index === undefined) index = 0



   
       barangayClass.textContent = covidCases[index].brgy
       totalCasesClass.textContent = covidCases[index].numCases
       recoveryClass.textContent = covidCases[index].recoveries
       deathClass.textContent = covidCases[index].death
       suspectedClass.textContent = covidCases[index].suspected



       index += 1
 

})






function insertTemplate() {
    const container = document.createElement('div')
    const brgy = document.createElement('h1')
    const totalCases = document.createElement('h2')
    const recoveryCases = document.createElement('h2')
    const deathCases = document.createElement('h2')
    const suspectedCases = document.createElement('h2')

        
    container.appendChild(brgy).classList.add('brgy')

    container.appendChild(totalCases).classList.add('total-cases')
    container.appendChild(recoveryCases).classList.add('recovery-cases')
    container.appendChild(deathCases).classList.add('death-cases')
    container.appendChild(suspectedCases).classList.add('suspected-cases')

    return container.innerHTML
    
}























