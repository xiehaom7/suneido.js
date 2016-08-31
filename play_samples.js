window.play_samples = {
'function':
`f = function (a, b = 1) {
    return a + b
}
f(100)`,

'class':
`class
    {
    x: 123
    f()
        {
        }
    }`,

'MapN':
`f = function (s) { s $ '|' }
'hello world'.MapN(2, f)`,

'slice object':
`x = #(1, 2, 3, 4)
x[1 :: 2]`,

'slice string':
`s = "123456789"
s[1 .. -1]`,

'params':
`f = function (a, b='', c=1) { }
f.Params()`,
}
