const convert = require('./convert')

test('convert cotacao 4 quantidade 4', () => {
    expect(convert.convert(4, 4)).toBe(16)
})
test('convert cotacao 0 quantidade 4', () => {
    expect(convert.convert(0, 4)).toBe(0)
})

test('toMoney converts float', () => {
    expect(convert.toMoney(2)).toBe('2.00')
})

test('toMoney converts string to float', () => {
    expect(convert.toMoney('2')).toBe('2.00')
})