const NativeString = mrequire("core:Data.Native.String:1.2.0");

const Maybe = mrequire("core:Data.Maybe:1.2.0");

const Parity = mrequire("core:Data.Parity:1.0.0");
const Ordered = mrequire("core:Data.Ordered:1.0.0");
const Visible = mrequire("core:Data.Show:1.0.0");
const Int = mrequire("core:Data.Int:1.0.0");


function $String(value) {
    this.value = value;
}


const of = value =>
    new $String(value);


//- Tests whether or not the parameter has the same value as `this`.
//= String => (==) :: String -> Bool
$String.prototype.$EQUAL$EQUAL = function (other) {
    return this.value === other.value;
};
assumptionEqual(of("Hello").$EQUAL$EQUAL(of("Hello")), true);
assumptionEqual(of("Hello").$EQUAL$EQUAL(of("World")), false);


//- Tests whether or not the parameter has a different value to `this`.
//= String => (!=) :: String -> Bool
$String.prototype.$NOT$EQUAL = Parity.default$NOT$EQUAL;
assumptionEqual(of("Hello").$NOT$EQUAL(of("World")), true);
assumptionEqual(of("Hello").$NOT$EQUAL(of("Hello")), false);


//= String => (<=) :: String -> Bool
$String.prototype.$LESS$EQUAL = function (other) {
    return this.value <= other.value;
};
assumptionEqual(of("Hello").$LESS$EQUAL(of("World")), true);
assumptionEqual(of("Hello").$LESS$EQUAL(of("Hello")), true);
assumptionEqual(of("World").$LESS$EQUAL(of("Hello")), false);


//= String => (<) :: String -> Bool
$String.prototype.$LESS = Ordered.default$LESS;
assumptionEqual(of("Hello").$LESS(of("World")), true);
assumptionEqual(of("Hello").$LESS(of("Hello")), false);
assumptionEqual(of("World").$LESS(of("Hello")), false);


//= String => (>=) :: String -> Bool
$String.prototype.$GREATER$EQUAL = Ordered.default$GREATER$EQUAL;
assumptionEqual(of("Hello").$GREATER$EQUAL(of("World")), false);
assumptionEqual(of("Hello").$GREATER$EQUAL(of("Hello")), true);
assumptionEqual(of("World").$GREATER$EQUAL(of("Hello")), true);


//= String => (>) :: String -> Bool
$String.prototype.$GREATER = Ordered.default$GREATER;
assumptionEqual(of("Hello").$GREATER(of("World")), false);
assumptionEqual(of("Hello").$GREATER(of("Hello")), false);
assumptionEqual(of("World").$GREATER(of("Hello")), true);


//= String => compare :: String -> Data.Ordered.Ordering
$String.prototype.compare = Ordered.defaultCompare;
assumptionEqual(of("Hello").compare(of("World")), Ordered.LT);
assumptionEqual(of("Hello").compare(of("Hello")), Ordered.EQ);
assumptionEqual(of("World").compare(of("Hello")), Ordered.GT);


//= String => max :: String -> String
$String.prototype.max = Ordered.defaultMax;
assumptionEqual(of("Hello").max(of("World")), of("World"));
assumptionEqual(of("Hello").max(of("Hello")), of("Hello"));
assumptionEqual(of("World").max(of("Hello")), of("World"));


//= String => max :: String -> String
$String.prototype.min = Ordered.defaultMin;
assumptionEqual(of("Hello").min(of("World")), of("Hello"));
assumptionEqual(of("Hello").min(of("Hello")), of("Hello"));
assumptionEqual(of("World").min(of("Hello")), of("Hello"));


//= String => at :: Data.Int -> Maybe String
$String.prototype.at = function (i) {
    return Maybe.ofNative(NativeString.at(i.toNative())(this.value).map(of));
};
assumptionEqual(of("Hello").at(Int.of(0)), Maybe.Just(of("H")));
assumptionEqual(of("Hello").at(Int.of(1)), Maybe.Just(of("e")));
assumptionEqual(of("Hello").at(Int.of(5)), Maybe.Nothing);


//= String => indexOfFrom :: String -> Int -> Maybe Int
$String.prototype.indexOfFrom = function (pattern) {
    return start =>
        Maybe.ofNative(NativeString.indexOfFrom(pattern.value)(start.toNative())(this.value)).map(Int.of);
};
assumptionEqual(of("hello").indexOfFrom(of("world"))(Int.of(2)), Maybe.Nothing);
assumptionEqual(of("hello").indexOfFrom(of("hello"))(Int.of(2)), Maybe.Nothing);
assumptionEqual(of("hello").indexOfFrom(of("ll"))(Int.of(2)), Maybe.Just(Int.of(2)));


//= String => indexOf :: String -> Maybe Int
$String.prototype.indexOf = function (pattern) {
    return Maybe.ofNative(NativeString.indexOf(pattern.value)(this.value)).map(Int.of);
};
assumptionEqual(of("hello").indexOf(of("world")), Maybe.Nothing);
assumptionEqual(of("hello").indexOf(of("hello")), Maybe.Just(of(0)));
assumptionEqual(of("hello").indexOf(of("ll")), Maybe.Just(of(2)));


//= String => length :: () -> Int
$String.prototype.length = function () {
    return Int.of(NativeString.length(this.value));
};
assumptionEqual(of("").length(), Int.of(0));
assumptionEqual(of("hello").length(), Int.of(5));


//= String => startsWith :: String -> Bool
$String.prototype.startsWith = function (prefix) {
    return NativeString.startsWith(prefix.value)(this.value);
};
assumptionEqual(of("hello").startsWith(of("he")), true);
assumptionEqual(of("hello").startsWith(of("wor")), false);


//= String => substring :: Int -> Int -> String
$String.prototype.substring = function (start) {
    return end => of(NativeString.substring(start.toNative())(end.toNative())(this.value));
};
assumptionEqual(of("hello").substring(Int.of(1))(Int.of(3)), of("el"));


//= String => substringFrom :: Int -> String
$String.prototype.substringFrom = function (start) {
    return of(NativeString.substringFrom(start.toNative())(this.value));
};
assumptionEqual(of("hello").substringFrom(Int.of(1)), of("ello"));


//= String => trim :: String
$String.prototype.trim = function () {
    return of(NativeString.trim(this.value));
};


//- Replaces the first occurrence of the first argument with the second argument.
//= String => replace :: String -> String
$String.prototype.replace = function (pattern) {
    return replacement => of(NativeString.replace(pattern.value)(replacement.value)(this.value));
};
assumptionEqual(of("hello").replace(of("l"))(of("L")), of("heLlo"));
assumptionEqual(of("he**o").replace(of("*"))(of("=")), of("he=*o"));


//- Replaces all occurrence of the first argument with the second argument.
//= replaceAll :: String -> String -> String
$String.prototype.replaceAll = function (pattern) {
    return replacement => of(NativeString.replaceAll(pattern.value)(replacement.value)(this.value));
};
assumptionEqual(of("hello").replaceAll(of("l"))(of("L")), of("heLLo"));
assumptionEqual(of("he**o").replaceAll(of("*"))(of("=")), of("he==o"));


//- Concatenates two strings together to a create a new string.
//= String => (++) :: String -> String
$String.prototype.$PLUS$PLUS = function(other) {
    return of(this.value + other.value);
};
assumptionEqual(of("Hello").$PLUS$PLUS(of("World")), of("HelloWorld"));


$String.prototype.show = function () {
    return of("\"")
        .$PLUS$PLUS(this.replaceAll(of("\""))(of("\\\"")))
        .$PLUS$PLUS(of("\""));
};
assumptionEqual(of("abc").show(), of("\"abc\""));
assumptionEqual(of("a\"bc").show(), of("\"a\\\"bc\""));


module.exports = {
    of
};
