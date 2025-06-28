import { Fragment } from "react"

export default function CoinOutputList({data}) {

    return (
        <div className="text-gray-600">
            <span className="inline-block mb-5">You need {data.length} coins and the following denominations:</span>
            <span className="flex flex-wrap justify-self-center max-w-2xl">
                {"["}
                    {data.map((coin, index) => {
                        return (
                            <Fragment key={coin.id}>
                                {index != 0 && <span className="me-2">,</span>}
                                <span>{coin.value}</span>
                            </Fragment>                  
                        )
                    })}
                {"]"}
            </span>
        </div>
    )
}