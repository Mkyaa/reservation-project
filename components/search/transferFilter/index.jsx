import React from 'react'

//styles
import { Checkbox } from 'antd'

const OptionFilter = ({ option, onChange }) => {
    return (
        <Checkbox.Group
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
            onChange={onChange}
        >
            {
                option.map((item, index) => (
                    <Checkbox key={index} value={item.value}>{item.value} ({item.count})</Checkbox>
                ))
            }
        </Checkbox.Group>

    )
}

export default OptionFilter