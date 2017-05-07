

### (==)

```haskell
String => (==) :: String -> Bool
```

Tests whether or not the parameter has the same value as `this`.

#### Examples:

```haskell
of("Hello").$EQUAL$EQUAL(of("Hello")) == true
of("Hello").$EQUAL$EQUAL(of("World")) == false
```

### (!=)

```haskell
String => (!=) :: String -> Bool
```

Tests whether or not the parameter has a different value to `this`.

#### Examples:

```haskell
of("Hello").$NOT$EQUAL(of("World")) == true
of("Hello").$NOT$EQUAL(of("Hello")) == false
```

### (<=)

```haskell
String => (<=) :: String -> Bool
```


#### Examples:

```haskell
of("Hello").$LESS$EQUAL(of("World")) == true
of("Hello").$LESS$EQUAL(of("Hello")) == true
of("World").$LESS$EQUAL(of("Hello")) == false
```

### (<)

```haskell
String => (<) :: String -> Bool
```


#### Examples:

```haskell
of("Hello").$LESS(of("World")) == true
of("Hello").$LESS(of("Hello")) == false
of("World").$LESS(of("Hello")) == false
```

### (>=)

```haskell
String => (>=) :: String -> Bool
```


#### Examples:

```haskell
of("Hello").$GREATER$EQUAL(of("World")) == false
of("Hello").$GREATER$EQUAL(of("Hello")) == true
of("World").$GREATER$EQUAL(of("Hello")) == true
```

### (>)

```haskell
String => (>) :: String -> Bool
```


#### Examples:

```haskell
of("Hello").$GREATER(of("World")) == false
of("Hello").$GREATER(of("Hello")) == false
of("World").$GREATER(of("Hello")) == true
```

### compare

```haskell
String => compare :: String -> Data.Ordered.Ordering
```


#### Examples:

```haskell
of("Hello").compare(of("World")) == Ordered.LT
of("Hello").compare(of("Hello")) == Ordered.EQ
of("World").compare(of("Hello")) == Ordered.GT
```

### max

```haskell
String => max :: String -> String
```


#### Examples:

```haskell
of("Hello").max(of("World")) == of("World")
of("Hello").max(of("Hello")) == of("Hello")
of("World").max(of("Hello")) == of("World")
```

### max

```haskell
String => max :: String -> String
```


#### Examples:

```haskell
of("Hello").min(of("World")) == of("Hello")
of("Hello").min(of("Hello")) == of("Hello")
of("World").min(of("Hello")) == of("Hello")
```

### at

```haskell
String => at :: Data.Int -> Maybe String
```


#### Examples:

```haskell
of("Hello").at(Int.of(0)) == Maybe.Just(of("H"))
of("Hello").at(Int.of(1)) == Maybe.Just(of("e"))
of("Hello").at(Int.of(5)) == Maybe.Nothing
```

### indexOfFrom

```haskell
String => indexOfFrom :: String -> Int -> Maybe Int
```


#### Examples:

```haskell
of("hello").indexOfFrom(of("world"))(Int.of(2)) == Maybe.Nothing
of("hello").indexOfFrom(of("hello"))(Int.of(2)) == Maybe.Nothing
of("hello").indexOfFrom(of("ll"))(Int.of(2)) == Maybe.Just(Int.of(2))
```

### indexOf

```haskell
String => indexOf :: String -> Maybe Int
```


#### Examples:

```haskell
of("hello").indexOf(of("world")) == Maybe.Nothing
of("hello").indexOf(of("hello")) == Maybe.Just(of(0))
of("hello").indexOf(of("ll")) == Maybe.Just(of(2))
```

### length

```haskell
String => length :: () -> Int
```


#### Examples:

```haskell
of("").length() == Int.of(0)
of("hello").length() == Int.of(5)
```

### startsWith

```haskell
String => startsWith :: String -> Bool
```


#### Examples:

```haskell
of("hello").startsWith(of("he")) == true
of("hello").startsWith(of("wor")) == false
```

### substring

```haskell
String => substring :: Int -> Int -> String
```


#### Examples:

```haskell
of("hello").substring(Int.of(1))(Int.of(3)) == of("el")
```

### substringFrom

```haskell
String => substringFrom :: Int -> String
```


#### Examples:

```haskell
of("hello").substringFrom(Int.of(1)) == of("ello")
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

#### Examples:

```haskell
of("hello").replace(of("l"))(of("L")) == of("heLlo")
of("he**o").replace(of("*"))(of("=")) == of("he=*o")
```

### replaceAll

```haskell
replaceAll :: String -> String -> String
```

Replaces all occurrence of the first argument with the second argument.

#### Examples:

```haskell
of("hello").replaceAll(of("l"))(of("L")) == of("heLLo")
of("he**o").replaceAll(of("*"))(of("=")) == of("he==o")
```

### (++)

```haskell
String => (++) :: String -> String
```

Concatenates two strings together to a create a new string.

#### Examples:

```haskell
of("Hello").$PLUS$PLUS(of("World")) == of("HelloWorld")
of("abc").show() == of("\"abc\"")
of("a\"bc").show() == of("\"a\\\"bc\"")
```


## Dependencies

* [Data.Native.String (1.2.0)](https://github.com/graeme-lockley/mn-Data.Native.String)
* [Data.Maybe (1.2.0)](https://github.com/graeme-lockley/mn-Data.Maybe)
* [Data.Parity (1.0.0)](https://github.com/graeme-lockley/mn-Data.Parity)
* [Data.Ordered (1.0.0)](https://github.com/graeme-lockley/mn-Data.Ordered)
* [Data.Show (1.0.0)](https://github.com/graeme-lockley/mn-Data.Show)