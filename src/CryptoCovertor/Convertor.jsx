import React from 'react'
import "../CryptoCovertor/Convertor.css"
import { Card, Input, Select } from 'antd';

function Convertor() {
    const defaultSelect1 = "Bitcoin"
    const defaultSelect2 = "Ether"
    return (
        <>
            <main>
                <Card
                    className='Card'
                    title={<h1> Crypto Convertor</h1>}
                    bordered={false}
                    style={{
                        width: 500,
                    }}
                    block
                >
                    <Input placeholder="Enter Amount" allowClear />


                    <div className='Options'>
                        <Select
                            labelInValue
                            defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
                            style={{ width: 170 }}
                            // onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack (100)',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy (101)',
                                },
                            ]}
                        />


                        <Select
                            labelInValue
                            defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
                            style={{ width: 170 }}
                            // onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack (100)',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy (101)',
                                },
                            ]}
                        />
                    </div>

                    <h2>1 {defaultSelect1} = 13 {defaultSelect2}</h2>
                </Card>

            </main>
        </>
    )
}

export default Convertor;