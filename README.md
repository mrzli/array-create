# Array Create

This library contains some array creation functions.

## Installation

```bash
npm install --save @gmjs/array-create
```

## API

### `arrayOfConstant`

Creates an array filled with a given constant value. The `length` is provided as the first argument, the second parameter (`value`) is the constant that will fill the array.

```ts
const array = arrayOfConstant(3, 'some-value');
console.log(array);
// ['some-value', 'some-value', 'some-value']
```

### `arrayOfMapped`

Creates an array of mapped values. The `length` is provided as the first argument. Second parameters, the `mapper`, is a function that takes the index of the array as an argument and returns the value for that index, and it generates a 'mapped' value for each index.

```ts
const array = arrayOfMapped(3, (index) => index * 2);
console.log(array);
// [0, 2, 4]
```

### `arrayOfOnes

### `arrayOfUndefined`

Creates an array of `undefined` values. The `length` is provided as the first argument.

```ts
const array = arrayOfUndefined(3);
console.log(array);
// [undefined, undefined, undefined]
```

### `range`

Generates an array with a range of values.

The first parameter defined the `from` (starting) value, the second parameter defines the `to` (limit) value. The `to` value is not included in the range, meaning that the possible values in array can only be within `[from, to)`.

It has an optional `step` parameter that specifies the step size. If not specified, the step size is `1`. Step size can be negative, in which case the possible values in array are within `(to, from]`, again starting with the `from` value.

```ts
const output = range(0, 5);
console.log(output);
// [0, 1, 2, 3, 4]
```

```ts
const output = range(1, 6, 2);
console.log(output);
// [1, 3, 5]
```

```ts
const output = range(5, 0, -1);
console.log(output);
// [5, 4, 3, 2, 1]
```
