import app from "../components/firebase"
import { getDatabase, ref, onValue } from "firebase/database"
import { AppContext } from "./appContext"
import { useEffect, useRef, useState } from "react"

const jobsToLoad = 10
export const AppProvider = ({ children }) => {
    const [jobList, setJobList] = useState([])

    const [jobListSmall, setJobListSmall] = useState([])
    const database = getDatabase(app)


    useEffect(() => {
        const update_list = async () => {
            const temp = []
            const date = new Date()
            const lastDate = new Date("08/01/2022")

            while (date > lastDate) {
                const date_st = String(date.getMonth() + 1).padStart(2, '0') + ":" + date.getDate() + ":" + +String(date.getFullYear()).substring(2, 4)
                const reference = ref(database, "JobUpdates/" + date_st)
                date.setDate(date.getDate() - 1)
                const date_st1 = String(date.getMonth() + 1).padStart(2, '0') + "/" + date.getDate() + "/" + +String(date.getFullYear()).substring(2, 4)

                onValue(reference, (snapshot) => {
                    snapshot.forEach(child => {
                        // jobList.push([child.val().Heading, child.val().Description, child.val().Link])
                        // console.log(child.val())
                        // setJobList((jobList) => [...jobList, { heading: child.val().Heading, desc: child.val().Description, link: child.val().Link }])
                        temp.push({ heading: child.val().Heading, desc: child.val().Description, link: child.val().Link, pdf: child.val().PdfUrl, date: date_st1 })

                    })

                    setJobList([...temp])
                    setJobListSmall([...temp].slice(0, jobsToLoad))
                });

            }

        }
        update_list()
    }, [])

    const loadMoreJobs = () => {
        let endIndex = Math.min((jobListSmall.length + jobsToLoad), jobList.length)
        setJobListSmall((prev) => prev.concat(jobList.slice(jobListSmall.length, endIndex)))
        console.log(jobList)
    }

    return (
        <AppContext.Provider value={{ jobList, setJobList, jobListSmall, loadMoreJobs }}>
            {children}
        </AppContext.Provider >
    )
}