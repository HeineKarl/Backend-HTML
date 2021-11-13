import axios from 'axios'


const url = 'http://localhost:5000/api/cases/'

export class CaseService {
	static getCase() {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url)
				const data = res.data
				// console.log(data.forEach((log)=> console.log(log)));
				resolve(data.map((cases) => ({ ...cases, date: new Date(cases.date) })))
			} catch (err) {
				console.log('error')
				reject(err)
			}
		})
	}

    static updateCase(id, brgy, numCases, recoveries, death, suspected) {

        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(url + id, {
                brgy,
			    numCases,
			    recoveries,
			    death,
                suspected,
                })
                const data = res.data



            } catch (err) {
                console.log('error');
                reject(err)
            }
        })

    }

	static insertCase(brgy, numCases, recoveries, death, suspected) {
		return axios.post(url, {
			brgy,
			numCases,
			recoveries,
			death,
            suspected,
		})
	}
}


