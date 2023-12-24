import React, { useEffect, useState } from 'react'
import "../CryptoCovertor/Convertor.css"
import { Card, Input, Select } from 'antd';
import { DollarOutlined } from '@ant-design/icons';

function Convertor(props) {
    const API = props.APIkey;
    const [Select1, setSelect1] = useState("BTC")
    const [rateSelect1, setRateSelect1] = useState(0.000027)
    const [Select2, setSelect2] = useState("INR")
    const [rateSelect2, setRateSelect2] = useState(83.124376)
    const [inputvalue, setInputValue] = useState("0")
    const [resultValue, setresultValue] = useState("0")
    const [CurrencyList, setCurrencyList] = useState([]);

    const URL = `https://exchange-rates.abstractapi.com/v1/live/?api_key=${API}&base=USD`
    useEffect(() => {
        fetchAPI()
    }, [])

    async function fetchAPI() {
        const response = await fetch(URL)
        const jsonData = await response.json();
        if (jsonData.exchange_rates) {
            const currencies = Object.entries(jsonData.exchange_rates).map(([key, value]) => ({
                label: key,
                value: value,
            }));
            setCurrencyList(currencies)
        }
    }
    useEffect(() => {
        const res = (inputvalue * rateSelect2) / rateSelect1
        setresultValue(res)
       
    }, [inputvalue, Select1, Select2, resultValue])
    
    return (
        <>
            <main>

                <Card
                    className='Card'
                    title={<h1><DollarOutlined /> Crypto Convertor</h1>}
                    bordered={false}
                    style={{
                        width: 500,
                    }}
                >
                    <Input placeholder="Enter Amount" allowClear onChange={(e) => setInputValue(e.target.value)} />

                    <div className='Options'>

                        <Select
                            labelInValue
                            onSelect={(value) => {
                                setRateSelect1(value.value)
                                setSelect1(value.label)
                            }}
                            defaultValue={{ value: '0.000027', label: "BTC" }}
                            style={{ width: 170 }}
                            options={
                                CurrencyList.map((e) => ({
                                    value: e.value,
                                    label: e.label,
                                }))
                            }
                        />
                        <Select
                            labelInValue
                            onSelect={(value) => {
                                setRateSelect2(value.value)
                                setSelect2(value.label)
                            }}
                            defaultValue={{ value: '83.124376', label: "INR" }}
                            style={{ width: 170 }}
                            options={
                                CurrencyList.map((e) => ({
                                    value: e.value,
                                    label: e.label,

                                }))
                            }
                        />
                    </div>
                    <h2>{inputvalue} {Select1} = {resultValue} {Select2}</h2>
                </Card>

            </main>
        </>
    )
}

export default Convertor;