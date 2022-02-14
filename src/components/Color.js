import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseColor, decreaseColor } from '../store/actions/colorAction';

const Color = ( ) => {
    const color = useSelector((store) => store.colorReducer)
    const dispatch = useDispatch();

    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Rojo: {color.red}</th>
                        <th>Azul: {color.blue}</th>
                        <th>Verde: {color.green}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button className='redButton' onClick={() => dispatch(increaseColor('red'))}>+</button></td>
                        <td><button className='blueButton' onClick={() => dispatch(increaseColor('blue'))}>+</button></td>
                        <td><button className='greenButton' onClick={() => dispatch(increaseColor('green'))}>+</button> </td>
                    </tr>
                    <tr>
                        <td><button className='redButton' onClick={() => dispatch(decreaseColor('red'))}>-</button></td>
                        <td><button className='blueButton' onClick={() => dispatch(decreaseColor('blue'))}>-</button></td>
                        <td><button className='greenButton' onClick={() => dispatch(decreaseColor('green'))}>-</button></td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Color;