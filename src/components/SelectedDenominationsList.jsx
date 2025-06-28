import { Fragment } from "react"

export default function selectedDenominationsList({data}) {

    const denominationsList = data.map((coin, index) => {
        return (
            <Fragment key={coin.id}>
                {index != 0 && <span className="me-2">,</span>}
                <span id={coin.id}>{coin.value}</span>
            </Fragment>
            )
        })
        
    return (
        <div className="mb-8">
            <span className="me-10">Selected denominations:</span>
            {denominationsList.length > 0 && "["}
            {denominationsList.length == 0 ? "Choose some denominations!" : denominationsList}
            {denominationsList.length > 0 && "]"}
        </div>
    )
}