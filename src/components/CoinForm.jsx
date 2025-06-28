import { useEffect, useState } from "react"
import { coinDenominations } from "../data/coinDenominations"
import CoinOutputList from "./CoinOutputList"
import SelectList from "./SelectList"
import SelectedDenominationsList from "./SelectedDenominationsList"

export default function CoinForm() {
    
    const [coinOutput, setCoinOutput] = useState([])
    
    const formInitialState = {
        amount : 0,
        selectedDenomination: 0
    }

    const [inputs, setInputs] = useState(formInitialState)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [submissionData, setSubmissionData] = useState({
        amount: 0,
        denominationsList: []
    })

    useEffect(() => {
        if (!isSubmitted) return

        const postData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/count`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: submissionData.amount,
                denominationsList : submissionData.denominationsList.map(coin => coin.value).sort((a, b) => a - b)
            }),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            console.log('Response:', data)
            
            setCoinOutput(
                data.map((coin, index) => {
                    return {id: index, value: coin}
                }) 
            )
        } catch (error) {
            console.error('Error posting data:', error)
        }

        setIsSubmitted(false)
    }

    postData()
  }, [isSubmitted])
 
    function handleOnChange(e) {
        // onChange for each form element
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })

        // for text input amount
        if (e.target.name === "amount") {
            setSubmissionData({
                ...submissionData,
                amount: e.target.value
            })
        } else {
            // return if default selection
            if (e.target.value === "") return
            // for select options
            setSubmissionData({
                ...submissionData,
                denominationsList: 
                [  
                    ...submissionData.denominationsList,
                    {
                        id: submissionData.denominationsList.length,
                        value: e.target.value
                    }
                ]
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsSubmitted(true)
    }

  return (
    <>
        {coinOutput.length > 0 && <CoinOutputList data={coinOutput}/>}

        <form className="border border-dashed p-10 text-left" onSubmit={handleSubmit}>
            
            <SelectedDenominationsList data={submissionData.denominationsList}/>
            
            <SelectList data={coinDenominations} onClickOption={handleOnChange}/>

            <div>
                <span className="me-10">Target Amount:</span>
                <input className="border-b-3" type="number" min="0" max="10000" step="0.01" id="amount" name="amount" value={inputs.amount ?? 0} onChange={handleOnChange}/>
            </div>

            <button className="bg-sky-400 hover:bg-sky-800 hover:text-slate-50 transition duration-200 ease-in-out px-5 py-2 mt-15 cursor-pointer" type="submit">Submit</button>
        </form>
    </>
  )
}