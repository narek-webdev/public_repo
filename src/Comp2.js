import React from 'react'

const arr = [1, 2, 3, 4, 5, 6];

const Comp1 = () => {
    return (
        <div>
            {arr.map(item => {
                return     <p key={item}>{item}</p>
            })}
        </div>
    )
}

export default Comp1;