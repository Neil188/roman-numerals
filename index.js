const symbols = require('./symbols');

const numerals = num => {

    // if not numeric throw invalid input error

    // if <0 or >3999 throw out of range error

    if (num === 0)
        return 'nulla'

    let remain = num
    return symbols.reduce( ( acc,{symbol,val} ) => {
            if (val > remain)
                return acc

            const count = Math.floor( remain / val )
            remain -= count * val

            return [ ...acc, symbol.repeat(count) ]
        }, [])
        .join('')

}

module.exports = numerals;
