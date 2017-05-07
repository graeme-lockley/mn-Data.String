

### (==)

```haskell
String => (==) :: String -> Bool
```

Tests whether or not the parameter has the same value as `this`.

### (!=)

```haskell
String => (!=) :: String -> Bool
```

Tests whether or not the parameter has a different value to `this`.

### (<=)

```haskell
String => (<=) :: String -> Bool
```


### (<)

```haskell
String => (<) :: String -> Bool
```


### (>=)

```haskell
String => (>=) :: String -> Bool
```


### (>)

```haskell
String => (>) :: String -> Bool
```


### compare

```haskell
String => compare :: String -> Data.Ordered.Ordering
```


### max

```haskell
String => max :: String -> String
```


### max

```haskell
String => max :: String -> String
```


### at

```haskell
String => at :: Data.Int -> Maybe String
```


### indexOfFrom

```haskell
String => indexOfFrom :: String -> Int -> Maybe Int
```


### indexOf

```haskell
String => indexOf :: String -> Maybe Int
```


### length

```haskell
String => length :: () -> Int
```


### startsWith

```haskell
String => startsWith :: String -> Bool
```


### substring

```haskell
String => substring :: Int -> Int -> String
```


### substringFrom

```haskell
String => substringFrom :: Int -> String
```


### trim

```haskell
String => trim :: String
```


### replace

```haskell
String => replace :: String -> String
```

Replaces the first occurrence of the first argument with the second argument.

### replaceAll

```haskell
replaceAll :: String -> String -> String
```

Replaces all occurrence of the first argument with the second argument.

### (++)

```haskell
String => (++) :: String -> String
```

Concatenates two strings together to a create a new string.


## Dependencies

* [Data.Native.String (1.2.0)](https://github.com/graeme-lockley/mn-Data.Native.String)
* [Data.Maybe (1.2.0)](https://github.com/graeme-lockley/mn-Data.Maybe)
* [Data.Parity (1.0.0)](https://github.com/graeme-lockley/mn-Data.Parity)
* [Data.Ordered (1.0.0)](https://github.com/graeme-lockley/mn-Data.Ordered)
* [Data.Show (1.0.0)](https://github.com/graeme-lockley/mn-Data.Show)
* [Data.Int (1.0.1)](https://github.com/graeme-lockley/mn-Data.Int)