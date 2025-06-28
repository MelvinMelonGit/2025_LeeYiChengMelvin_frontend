import { Fragment, useState } from "react"
import { coinDenominations } from "../data/coinDenominations"
import SelectList from "./SelectList"

export default function CoinForm() {

    const formInitialState = {
        amount : 0,
        selectedDenomination: 0
    }

    const [form, setForm] = useState(formInitialState)

    const [submissionData, setSubmissionData] = useState({
        amount: 0,
        denominationsList: []
    })
 
    function handleOnChange(e) {
        // onChange for each form element
        setForm({
            [e.target.name] : e.target.value
        })

        // for text input amount
        if (e.target.name === "amount") {
            setSubmissionData({
                ...submissionData,
                amount: e.target.value
            })
        } else {
            // for default selection
            if (e.target.value === "") return
            // for select options
            setSubmissionData({
                ...submissionData,
                denominationsList: 
                [  
                    ...submissionData.denominationsList,
                    e.target.value
                ]
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input type="number" id="amount" name="amount" value={form.amount ?? ""} onChange={handleOnChange}/>

        <h2>Selected denominations:</h2>
        {submissionData.denominationsList.map(coin => {
            return (
                <Fragment key={coin.id}>
                    <span className="me-5">{coin}</span>
                </Fragment>
               
            )
        })}
        
        <SelectList data={coinDenominations} onClickOption={handleOnChange}/>

        <button type="submit">Submit</button>
    </form>
  )
}