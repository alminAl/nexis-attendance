// import axios from "axios";
import { useEffect, useState } from "react"
import data from '../data.json';

// const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InIxQHQuY29tIiwiRmlyc3RfbmFtZSI6IkZpcnN0IE5hbWUiLCJMYXN0X25hbWUiOiJMYXN0IE5hbWUiLCJVaWQiOiI2Mzg4OWI5MmI4MWEyNzcwYjdmYjJiMzgiLCJleHAiOjE2Njk5ODM2NjV9.TkCeurbCBtpaEuOpz8KbvOYz87eR0FDsFy0NPFACuAA'

const useFeatchData = () => {
    const [tableData, setData] = useState([])

    useEffect(() => {
        const controller = new AbortController();
        let _ = []
        for (let i in data) {
            _.push(data[i])
        }
            
        
        setData(_)


        // const featch = async () => {
        //     try {
        //         await axios.get(
        //             `https://test.nexisltd.com/test`,

        //             {
        //                 headers: {
        //                     "Access-Control-Allow-Origin": "*",
        //                     Authorization: `Bearer ${accessToken}`,
        //                 },
        //                 signal: controller.signal
        //             }
        //         );
        //         // console.log(res)
        //     } catch (error) {
        //         // console.log(error);
        //         controller.abort()
        //     }
        // }
        // featch()
        return () => controller.abort()
    }, [])

    return { tableData }
}

export default useFeatchData 