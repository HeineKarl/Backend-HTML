
const dateInput = document.querySelector('.date-input')

const casesList = Array.from(document.querySelector('#cases-list').children)
dateInput.addEventListener('change', dateInputFilter)


async function dateInputFilter(e) {
    console.log('hi');
    let dateInputByUser = e.target.value;
    const data = await filterByDate(dateInputByUser)
    
    let counter;
    
    casesList.forEach(caseList => {
        if(counter === undefined) counter = 0;
        caseList.innerHTML = data[counter].brgy
        counter += 1
    })
}













async function filterByDate(dateByUser) {
   const data = await MeycauayanBrgyInfo()
   let today;
   
if(dateByUser === undefined) {
    
    const objectDate = new Date()
    const year = objectDate.getFullYear()
    const day = objectDate.getDate()
    const month = objectDate.getMonth() + 1
    
    today = `${year}-${month}-${day}`
}

if(dateByUser !== undefined) today = dateByUser

// console.log(today);

let filteredBarangay = [];

    data.filter((barangay) => {
        let date = barangay.date
        let endSlice = date.search('T')
        let dataDate = date.slice(0, endSlice)

        if(dataDate === today) {
            // console.log(barangay);
            filteredBarangay = [barangay]
        }

    })

    // console.log(filteredBarangay);
    return filteredBarangay
}






async function MeycauayanBrgyInfo() {
    const url = 'https://act-form-v1-1.herokuapp.com/api/cases'
    const res = await fetch(url)
    const data = await res.json()
    return data
}

