function combine<T1 extends string | number, T2 extends string | number>(a: T1, b: T2): CombinationResult<T1, T2>  {
    if (typeof a === 'number' && typeof b === 'number') {
        return (a + b) as CombinationResult<T1, T2>
    }else{
        return (a as string + b as string as CombinationResult<T1, T2>)
    }
}

type CombinationResult<T1 extends string | number, T2 extends string | number> =
    T1 extends number ?
    T2 extends number ? number :
        string :
        string

let result = combine(10, 20)

function reverseString(stc: string) {
    // ...
}

// reverseString(result) //not work