import { Fragment } from "react"
export default function SelectList({data, onClickOption}) {

    const selectList = data.map(coin => {
        return (
            <Fragment key={coin.id}>
                <option id={coin.id} name="selectedDenomination" value={coin.value}>{coin.value}</option>
            </Fragment>
        ) 
    })

    return (
        <div className="border border-dashed">
            <label htmlFor="denominations">Choose a denomination:</label>
            <select name="denominations" id="denominations" onChange={onClickOption}>
                <option id="default" name="default" value="">Please select:</option>
                {selectList}
            </select>
        </div>
    )
}