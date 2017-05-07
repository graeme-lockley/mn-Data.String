const Assert = require("assert");
const Unit = mrequire("core:Test.Unit:v1.0.0");

const Int = mrequire("core:Data.Int:1.0.4");
const Maybe = mrequire("core:Data.Maybe:1.2.0");
const Ordered = mrequire("core:Data.Ordered:1.0.0");

const String = require("../../index.js");


Unit.newSuite("Data.String")
    .case("(==)", () => {
        Assert.deepEqual(String.of("Hello").$EQUAL$EQUAL(String.of("Hello")), true);
        Assert.deepEqual(String.of("Hello").$EQUAL$EQUAL(String.of("World")), false);
    })
    .case("(!=)", () => {
        Assert.deepEqual(String.of("Hello").$NOT$EQUAL(String.of("World")), true);
        Assert.deepEqual(String.of("Hello").$NOT$EQUAL(String.of("Hello")), false);
    })
    .case("(<=)", () => {
        Assert.deepEqual(String.of("Hello").$LESS$EQUAL(String.of("World")), true);
        Assert.deepEqual(String.of("Hello").$LESS$EQUAL(String.of("Hello")), true);
        Assert.deepEqual(String.of("World").$LESS$EQUAL(String.of("Hello")), false);
    })
    .case("(<)", () => {
        Assert.deepEqual(String.of("Hello").$LESS(String.of("World")), true);
        Assert.deepEqual(String.of("Hello").$LESS(String.of("Hello")), false);
        Assert.deepEqual(String.of("World").$LESS(String.of("Hello")), false);
    })
    .case("(>=)", () => {
        Assert.deepEqual(String.of("Hello").$GREATER$EQUAL(String.of("World")), false);
        Assert.deepEqual(String.of("Hello").$GREATER$EQUAL(String.of("Hello")), true);
        Assert.deepEqual(String.of("World").$GREATER$EQUAL(String.of("Hello")), true);
    })
    .case("(>)", () => {
        Assert.deepEqual(String.of("Hello").$GREATER(String.of("World")), false);
        Assert.deepEqual(String.of("Hello").$GREATER(String.of("Hello")), false);
        Assert.deepEqual(String.of("World").$GREATER(String.of("Hello")), true);
    })
    .case("compare", () => {
        Assert.deepEqual(String.of("Hello").compare(String.of("World")), Ordered.LT);
        Assert.deepEqual(String.of("Hello").compare(String.of("Hello")), Ordered.EQ);
        Assert.deepEqual(String.of("World").compare(String.of("Hello")), Ordered.GT);
    })
    .case("max", () => {
        Assert.deepEqual(String.of("Hello").max(String.of("World")), String.of("World"));
        Assert.deepEqual(String.of("Hello").max(String.of("Hello")), String.of("Hello"));
        Assert.deepEqual(String.of("World").max(String.of("Hello")), String.of("World"));
    })
    .case("min", () => {
        Assert.deepEqual(String.of("Hello").min(String.of("World")), String.of("Hello"));
        Assert.deepEqual(String.of("Hello").min(String.of("Hello")), String.of("Hello"));
        Assert.deepEqual(String.of("World").min(String.of("Hello")), String.of("Hello"));
    })
    .case("at", () => {
        Assert.deepEqual(String.of("Hello").at(Int.of(0)), Maybe.Just(String.of("H")));
        Assert.deepEqual(String.of("Hello").at(Int.of(1)), Maybe.Just(String.of("e")));
        Assert.deepEqual(String.of("Hello").at(Int.of(5)), Maybe.Nothing);
    })
    .case("indexFrom", () => {
        Assert.deepEqual(String.of("hello").indexOfFrom(String.of("world"))(Int.of(2)), Maybe.Nothing);
        Assert.deepEqual(String.of("hello").indexOfFrom(String.of("hello"))(Int.of(2)), Maybe.Nothing);
        Assert.deepEqual(String.of("hello").indexOfFrom(String.of("ll"))(Int.of(2)), Maybe.Just(Int.of(2)));
    })
    .case("indexOf", () => {
        Assert.deepEqual(String.of("hello").indexOf(String.of("world")), Maybe.Nothing);
        Assert.deepEqual(String.of("hello").indexOf(String.of("hello")), Maybe.Just(Int.of(0)));
        Assert.deepEqual(String.of("hello").indexOf(String.of("ll")), Maybe.Just(Int.of(2)));
    })
    .case("length", () => {
        Assert.deepEqual(String.of("").length(), Int.of(0));
        Assert.deepEqual(String.of("hello").length(), Int.of(5));
    })
    .case("startsWith", () => {
        Assert.deepEqual(String.of("hello").startsWith(String.of("he")), true);
        Assert.deepEqual(String.of("hello").startsWith(String.of("wor")), false);
    })
    .case("substring", () => {
        Assert.deepEqual(String.of("hello").substring(Int.of(1))(Int.of(3)), String.of("el"));
    })
    .case("substringFrom", () => {
        Assert.deepEqual(String.of("hello").substringFrom(Int.of(1)), String.of("ello"));
    })
    .case("replace", () => {
        Assert.deepEqual(String.of("hello").replace(String.of("l"))(String.of("L")), String.of("heLlo"));
        Assert.deepEqual(String.of("he**o").replace(String.of("*"))(String.of("=")), String.of("he=*o"));
    })
    .case("replaceAll", () => {
        Assert.deepEqual(String.of("hello").replaceAll(String.of("l"))(String.of("L")), String.of("heLLo"));
        Assert.deepEqual(String.of("he**o").replaceAll(String.of("*"))(String.of("=")), String.of("he==o"));
    })
    .case("(++)", () => {
        Assert.deepEqual(String.of("Hello").$PLUS$PLUS(String.of("World")), String.of("HelloWorld"));
    })
    .case("show", () => {
        Assert.deepEqual(String.of("abc").show(), String.of("\"abc\""));
        Assert.deepEqual(String.of("a\"bc").show(), String.of("\"a\\\"bc\""));
    })
    .case("lowerCase", () => {
        Assert.deepEqual(String.of("Hello World").lowerCase(), String.of("hello world"));
    })
    .case("upperCase", () => {
        Assert.deepEqual(String.of("Hello World").upperCase(), String.of("HELLO WORLD"));
    })
;