const NumberData = ({numbers}) => {
    const list = numbers.map((number) => <li>{number}</li>)
    return list
}

export default NumberData