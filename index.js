const NativeString = mrequire("core:Data.Native.String:1.2.0");

const Maybe = mrequire("core:Data.Maybe:1.2.0");

const Parity = mrequire("core:Data.Parity:1.0.0");
const Ordered = mrequire("core:Data.Ordered:1.0.0");
const Visible = mrequire("core:Data.Show:1.0.0");
const Int = mrequire("core:Data.Int:1.0.2");


function $String(value) {
    this.value = value;
}


//- Creates a `String` from a `Data.Native.String`.
//= of :: Data.Native.String -> String
const of = value =>
    new $String(value);


//- Tests whether or not the parameter has the same value as `this`.
//= String => (==) :: String -> Bool
$String.prototype.$EQUAL$EQUAL = function (other) {
    return this.value === other.value;
};


//- Tests whether or not the parameter has a different value to `this`.
//= String => (!=) :: String -> Bool
$String.prototype.$NOT$EQUAL = Parity.default$NOT$EQUAL;


//= String => (<=) :: String -> Bool
$String.prototype.$LESS$EQUAL = function (other) {
    return this.value <= other.value;
};


//= String => (<) :: String -> Bool
$String.prototype.$LESS = Ordered.default$LESS;


//= String => (>=) :: String -> Bool
$String.prototype.$GREATER$EQUAL = Ordered.default$GREATER$EQUAL;


//= String => (>) :: String -> Bool
$String.prototype.$GREATER = Ordered.default$GREATER;


//= String => compare :: String -> Data.Ordered.Ordering
$String.prototype.compare = Ordered.defaultCompare;


//= String => max :: String -> String
$String.prototype.max = Ordered.defaultMax;


//= String => max :: String -> String
$String.prototype.min = Ordered.defaultMin;


//= String => at :: Data.Int -> Maybe String
$String.prototype.at = function (i) {
    return Maybe.ofNative(NativeString.at(i.toNative())(this.value).map(of));
};


//= String => indexOfFrom :: String -> Int -> Maybe Int
$String.prototype.indexOfFrom = function (pattern) {
    return start =>
        Maybe.ofNative(NativeString.indexOfFrom(pattern.value)(start.toNative())(this.value)).map(Int.of);
};


//= String => indexOf :: String -> Maybe Int
$String.prototype.indexOf = function (pattern) {
    return Maybe.ofNative(NativeString.indexOf(pattern.value)(this.value)).map(Int.of);
};


//= String => length :: () -> Int
$String.prototype.length = function () {
    return Int.of(NativeString.length(this.value));
};


//= String => startsWith :: String -> Bool
$String.prototype.startsWith = function (prefix) {
    return NativeString.startsWith(prefix.value)(this.value);
};


//= String => substring :: Int -> Int -> String
$String.prototype.substring = function (start) {
    return end => of(NativeString.substring(start.toNative())(end.toNative())(this.value));
};


//= String => substringFrom :: Int -> String
$String.prototype.substringFrom = function (start) {
    return of(NativeString.substringFrom(start.toNative())(this.value));
};


//= String => trim :: String
$String.prototype.trim = function () {
    return of(NativeString.trim(this.value));
};


//- Replaces the first occurrence of the first argument with the second argument.
//= String => replace :: String -> String
$String.prototype.replace = function (pattern) {
    return replacement => of(NativeString.replace(pattern.value)(replacement.value)(this.value));
};


//- Replaces all occurrence of the first argument with the second argument.
//= replaceAll :: String -> String -> String
$String.prototype.replaceAll = function (pattern) {
    return replacement => of(NativeString.replaceAll(pattern.value)(replacement.value)(this.value));
};


//- Concatenates two strings together to a create a new string.
//= String => (++) :: String -> String
$String.prototype.$PLUS$PLUS = function(other) {
    return of(this.value + other.value);
};


$String.prototype.show = function () {
    return of("\"")
        .$PLUS$PLUS(this.replaceAll(of("\""))(of("\\\"")))
        .$PLUS$PLUS(of("\""));
};


module.exports = {
    of
};
