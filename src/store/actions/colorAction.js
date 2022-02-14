export const actionType = {
    INCREASE_COLOR: 'INCREASE_COLOR',
    DECREASE_COLOR: 'DECREASE_COLOR',
}

export const increaseColor = (color) => {
    return {
        type: actionType.INCREASE_COLOR,
        color: color,
    }
}

export const decreaseColor = (color) => {
    return {
        type: actionType.DECREASE_COLOR,
        color: color,
    }
}