import React from 'react'

//antd
import { Col, InputNumber, Row, Slider } from 'antd'

const PriceFilter = ({ maxPriceInput, setMaxPriceInput }) => {

     //handle max price input
     const handleMaxPriceInput = (value) => {
        setMaxPriceInput(value)
    }

    return (
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={500}
                    onChange={handleMaxPriceInput}
                    value={typeof maxPriceInput === 'number' ? maxPriceInput : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={500}
                    style={{
                        margin: '0 16px',
                    }}
                    value={maxPriceInput}
                    onChange={handleMaxPriceInput}
                />
            </Col>
        </Row>
    )
}

export default PriceFilter