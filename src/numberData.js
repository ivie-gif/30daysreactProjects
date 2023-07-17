const NumberData = ({numbers}) => {
    const list = (numbers.map((number) => {
        return (<li>{number}</li>)
    }))
    return list
}

export default NumberData