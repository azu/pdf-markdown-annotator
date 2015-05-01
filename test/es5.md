# ECMAScript 5 Specメモ

## [Page 15](./Ecma-262_5.1.pdf#page=15)

> ECMAScript does not use classes such as those in C++, Smalltalk, 
> or Java.

ECMAScriptはクラスではない。ES6でも同様の記述

## [Page 15](./Ecma-262_5.1.pdf#page=15)

> prototype-based inheritance and shared properties.

代わりにプロトタイプベースである

***

## [Page 17](./Ecma-262_5.1.pdf#page=17)

> 4.3.6 native object object in an ECMAScript implementation whose 
> semantics are fully defined by this specification rather than by 
> the host environment NOTE Standard native objects are defined in 
> this specification. Some native objects are built-in; others may 
> be constructed during the course of execution of an ECMAScript 
> program. 4.3.7 built-in object object supplied by an ECMAScript 
> implementation, independent of the host environment, that is 
> present at the start of the execution of an ECMAScript program 
> NOTE Standard built-in objects are defined in this specification, 
> and an ECMAScript implementation may specify and define others. 
> Every built-in object is a native object. A built-in constructor 
> is a built-in object that is also a constructor. 4.3.8 host 
> object object supplied by the host environment to complete the 
> execution environment of ECMAScript NOTE Any object that is not 
> native is a host object.

- ネイティブオブジェクト
- ビルトインオブジェクト
- ホストオブジェクト

ネイティブはECMAScriptの仕様に書かれてるオブジェクトの事。
ホストオブジェクトはDOM APIとかブラウザが提供してるもの。
ビルトインオブジェクトも一種のネイティブオブジェクトだが、
実行時に提供される?

***

## [Page 20](./Ecma-262_5.1.pdf#page=20)
> Productions  of  the  lexical  and RegExp grammars are distinguished by having two colons ―::‖ as separating punctuation. The lexical and RegExp grammars share some productions.

字句文法と正規表現文法の区切り文字は`::`


## [Page 20](./Ecma-262_5.1.pdf#page=20)
> Productions of the numeric string grammar are distinguished by having three colons ―:::‖ aspunctuation.

数値文字列の区切り文字は`:::`


## [Page 20](./Ecma-262_5.1.pdf#page=20)
> It defines a set of productions, starting from  the  goal  symbol Program,  that  describe  how  sequences  of  tokens  can  form  syntactically  correct ECMAScript programs.

字句文法を繰り返し適応していって、
これが目標記号まで辿りつけない場合がプログラムの構文エラーがある。 = Syntax Errorとなる

字句文法を繰り返す => 構文解析を一回 => 構文文法が生成される

## [Page 20](./Ecma-262_5.1.pdf#page=20)
> Starting  from  a  sentence  consisting  of  a  single  distinguished  nonterminal,  called  the goal  symbol,  a  given context-free  grammar  specifies  a language,  namely,  the  (perhaps  infinite)  set  of  possible  sequences  of terminal symbols that can result from repeatedly replacing any nonterminal in the sequence with a right-hand side of a production for which the nonterminal is the left-hand side

目標記号 = 非終端記号

非終端記号は_斜体_で表現される via P22


## [Page 20](./Ecma-262_5.1.pdf#page=20)
> Productions of the syntactic grammar are distinguished by having just one colon ―:‖ as punctuation.

構文文法の区切り文字は`:`



## [Page 21](./Ecma-262_5.1.pdf#page=21)
> Productions  of  the  JSON  lexical  grammar  are  distinguished  by  having  two  colons  `::` as  separating punctuation

JSONの字句文法の区切り文字は`::`
JSONの構文文法の区切り文字はECMAScriptの構文文法を流用するので`:`となる

## [Page 21](./Ecma-262_5.1.pdf#page=21)

```
ArgumentList:
	AssignmentExpression
    ArgumentList , AssignmentExpression 
```

これはArgumentListが単体のAssignmentExpression **または** ArgumentList , AssignmentExpression となることを表現してる。

----

これを短縮したopt記号を使った

```
VariableDeclaration:
	Identifier Initialiser(opt) 
```

というのは以下の短縮形

```
VariableDeclaration:
	Identifier
    Identifier Initialiser
```

であるとか。
## [Page 22](./Ecma-262_5.1.pdf#page=22)
> [lookahead set]

![先読み](http://monosnap.com/image/OHO2tj2OlblNoIXxsWdfe7wSxmjJ1y.png)

というのは 先読み setで指定された文字列は、直後の入力トークンでは含まれてないということを示す。

つまり

```
LookaheadExample::
	n [ lookahead ∉ {1,3,5,7,9} ] DecimalDigits
```

というのは `n{0,2,4,6,8}` という感じになって、nの後に奇数含まない10進数の数字となる。




## [Page 24](./Ecma-262_5.1.pdf#page=24)
> 12© Ecma International 2011In order to facilitate their use in multiple parts of this specification,some algorithms, called abstractoperations, are named and written in parameterised functional form so that they may be referenced by name from within other algorithms.

ECMAScriptでは抽象演算と言われるアルゴリズムが定義されていて、色々なアルゴリズムが互いに参照してる。
ただし、ここで書かれるアルゴリズムより効率的なものはもちろんあり、このアルゴリズムをそのまま使う必要は必ずしもない。
アルゴリズムの再利用をしたいという目的。



## [Page 24](./Ecma-262_5.1.pdf#page=24)
> such  a  floating-point  number  must  be finite, and if it is +0or 0then the corresponding mathematical value is simply 0

ES5では+-0は数学的な値は単に0とする
ES6でも同じ記述。



## [Page 24](./Ecma-262_5.1.pdf#page=24)
> If  an algorithm is defined to ―throw an exception‖, execution of the algorithm is terminated and no result is returned.  

アルゴリズムが例外を投げるとき

- アルゴリズムは終了
- 結果は返さない
- "if an exception was thrown..." と表現されるところまで飛ぶ
	- そこから続ける
- 例外キャッチする処理がアルゴリズムにないならそこで終わり



## [Page 25](./Ecma-262_5.1.pdf#page=25)
>  If an actual source text is encoded in a form other than 16-bit code units it must be processed as if it was first converted to UTF-16

かならず最初にUTF-16にしてから始める

## [Page 25](./Ecma-262_5.1.pdf#page=25)
> Throughout the rest of this document, the phrase ―code unit‖ and the word ―character‖ will be used to refer to a 16-bit  unsigned  value  used  to  represent  a  single  16-bit unit of text. 

ES5だとSourceCharacter:: any Unicode code unitだけど
ES6だとSourceCharacter:: any Unicode code pointで、
10.1.1 Static Semantics: UTF16Encoding ( cp )でcode pointが決めてある。
## [Page 27](./Ecma-262_5.1.pdf#page=27)
> Line Terminator Characters

JSONがJSのサブセットじゃなくなってる問題の`\u2028`とかはES5だとどういう関係になってるんだろ?

---
## [Page 28](./Ecma-262_5.1.pdf#page=28)
> Syntax


グラマーは[ECMAScript Syntax Grammar 6th Edition / Draft](http://teramako.github.io/ECMAScript/ecma6th_syntax.html "ECMAScript Syntax Grammar 6th Edition / Draft")を使うと移動できるので見やすい




## [Page 29](./Ecma-262_5.1.pdf#page=29)
> Unicode escape sequences are also permitted in an IdentifierName, where they contribute a single character to the IdentifierName,  as  computed  by  the  CV  of  the UnicodeEscapeSequence(see  7.8.4). 

`\u0061 = 100` は `a= 100` と変換されてから解釈される。
## [Page 31](./Ecma-262_5.1.pdf#page=31)
> FutureReservedWord

ES6で代替ここにある将来の予約語は消化されて、ES6だとawait、asyncが代わりある。



## [Page 31](./Ecma-262_5.1.pdf#page=31)
> DivPunctuator ::one of

正規表現と区別するために
`DivPunctuator`というふうに除算演算子は分けてる = 目標記号


## [Page 36](./Ecma-262_5.1.pdf#page=36)
> A regular expression literal is an input element that is converted to a RegExp object (see 15.10) each time the literal  is  evaluated.  Two  regular  expression  literals  in  a  program  evaluate  to  regular  expression  objects  that never compare as ===to each other even if the two literals' contents are identical.

ES5から`/ /` は常に新しい正規表現オブジェクトを作るようになった。

[正規表現リテラルのes3からes5の間での変化 - ぶれすとつーる](http://nazomikan.hateblo.jp/entry/2014/03/12/020734 "正規表現リテラルのes3からes5の間での変化 - ぶれすとつーる")




## [Page 37](./Ecma-262_5.1.pdf#page=37)
> An  implementation  may extend  the  regular  expression  constructor's  grammar,

実装は正規表現コンストラクタのグラマーを拡張していいのか。

## [Page 42](./Ecma-262_5.1.pdf#page=42)
> This  procedurecorresponds exactly to the behaviour of the IEEE 754 ―round to nearest‖ mode

基本はIEEE 754互換の丸めモード。

1. 0.5未満
	- 切り下げ
2. 0.5より大きい
	- 切り上げ
3. 0.5の時
	- 偶数となる方へ丸め込み


0.5が1となるのをボウシするための、再近接偶数丸めモード(RNモード)という方法らしい
## [Page 42](./Ecma-262_5.1.pdf#page=42)
> An  Object  is  a  collection  of  properties.Each  property  is  either  a  named  data  property,  a  named  accessor property, or an internal property

- 名前付きデータプロパティ
- 名前付きアクセサプロパティ
- 内部プロパティ

の3つ

ES6だと

- データプロパティ
- アクセサプロパティ

になってる。

そして、OrdinaryオブジェクトとExoticオブジェクトという概念がでてくる。

"内部プロパティ"という言い方がES6ではなくなっていて、internal slotsが代わりっぽい。

## [Page 44](./Ecma-262_5.1.pdf#page=44)
>  its [[Prototype]] depends on the implementation. Every [[Prototype]] chain must have finite length

prototypeチェーンは有限の長さである。

## [Page 44](./Ecma-262_5.1.pdf#page=44)
> This  specification  defines  no  ECMAScript  language  operators  or  built-in  functions  that  permit  a  program  to modify an object‘s [[Class]] or [[Prototype]] internal properties or to change the value of [[Extensible]] from falseto true. Implementation  specific  extensions  that  modify  [[Class]],  [[Prototype]]  or  [[Extensible]]  must  not  violate  the  invariants defined in the preceding paragraph


`[[Extensible]]`をfalseからtrueにする物自体が仕様には存在していない。
これは不変性を保つためである。

この辺はES6だとSymbolやProxyHandlerなどによって大きく変わってる。
## [Page 53](./Ecma-262_5.1.pdf#page=53)
> n  the  following  algorithm,  the term ―Reject‖ means ―If Throwis true,  then  throw  a TypeErrorexception, otherwise return false‖.The algorithm contains steps that test various fields of the Property Descriptor Descfor specific  values.  

"Reject"は例外フラグが立ってるならthrow TypeError、そうじゃないならfalseを返すという意味
## [Page 54](./Ecma-262_5.1.pdf#page=54)
> Type Conversion and Testing

JavaScriptの型変換の定義

## [Page 59](./Ecma-262_5.1.pdf#page=59)
> The ToInt32 abstract operation is idempotent: if applied to a result that it produced, the second application leaves that value unchanged

ToUnit16/32には同じ値を二度適応しても、同じになる冪等性がある

## [Page 62](./Ecma-262_5.1.pdf#page=62)
> The SameValue Algorithm

値が同じかのチェックアルゴリズム

`SameValue(x, y)`

x == null なら trueになる

## [Page 62](Ecma-262_5.1.pdf#page=62&zoom=auto,-13,439)
> There are three types of ECMAScript executable code:

ES5だと

- global
- eval
- Function

の3つの実行可能なコードがある。


## [Page 63](Ecma-262_5.1.pdf#page=62&zoom=auto,-13,110)
> Strict Mode Code

strict modeも上の3つがそれぞれ対応がある。

- global
- eval
- Function


## [Page 63](Ecma-262_5.1.pdf#page=63&zoom=auto,-13,558)
> A Lexical Environment consists of an  Environment  Record  and  a  possibly  null  reference  to  an outerLexical  Environment.  Usually  a  Lexical Environment   is   associated   with   some   specific   syntactic   structure   of   ECMAScript   code   such   as   a FunctionDeclaration,  a WithStatement,  ora Catch clause  of  a TryStatementand  a  new  Lexical  Environment  is created each time such code is evaluated.

レキシカル環境。
ES5だといわゆるFunctionスコープとか、catchで生まれるスコープのこと。

レキシカル環境は内から外へとつながっていく感じ。
## [Page 63](Ecma-262_5.1.pdf#page=63&zoom=auto,-13,305)
> 10.2.1 Environment Records

と

> 10.2.1.1Declarative Environment Records

の違いは宣言的なEnvironment Recordsはimmutableなバインディングを提供する点。
## [Page 65](Ecma-262_5.1.pdf#page=65&zoom=auto,-13,813)
> The  behaviour  of  the  concrete  specification  methods  for  Declarative  Environment  Records  is  defined  by  the following algorithms.


基本的にバインディングとはそのメソッドが呼び出された箇所のEnvironment  Recordsを参照して、そこに対してバインディングを作ったり、消したり、そこから取得したりする操作。

## [Page 69](Ecma-262_5.1.pdf#page=69&zoom=auto,-13,454)
> 10.3.1Identifier Resolution

での識別子の解決がまさにそのLexicalEnviromentを使って、identifierの解決をしている。

## [Page 66](Ecma-262_5.1.pdf#page=66&zoom=auto,-13,487)
> 10.2.1.2Object Environment Records

`with`専用のバインディング環境

ES6だとこれらに加えて、
"8.1.1.5 Module Environment Records"がる


## [Page 72](Ecma-262_5.1.pdf#page=72&zoom=auto,-13,721)
> Set the [[Class]] internal property of objto "Arguments"

argumentsは`[[Class]]`の内部プロパティに保存されている。
## [Page 73](Ecma-262_5.1.pdf#page=72&zoom=auto,-13,82)
> 14.Else, strictis true so

strict modeではarguments.calleeとかが使えないのは、argument.cllee.callerに対して`thrower`という関数を設定しているため。


## [Page 75](Ecma-262_5.1.pdf#page=75&zoom=auto,-13,832)
> Expressions
> 11.1Primary Expressions

基本式！


## [Page 75](Ecma-262_5.1.pdf#page=75&zoom=auto,-13,832)
> 11.1.1The thisKeyword
> The thiskeyword evaluates to the value of the ThisBinding of the current execution context.

`this`はその実行コンテキストの`ThisBinding`の値を見ている
## [Page 79](Ecma-262_5.1.pdf#page=79&zoom=auto,-13,399)
> Properties are accessed by name, using either the dot notation:

dot notationとbracket notationはMDNじゃなくて仕様にも乗ってたのか

## [Page 85](Ecma-262_5.1.pdf#page=85&zoom=auto,-13,423)
> The  result  of  a  floating-point  multiplication  is  governed  by  the  rules  of  IEEE  754  binary  double-precision arithmetic:

NaNの場合どうなるかは書く演算子のところに書いてある。

## [Page 90](Ecma-262_5.1.pdf#page=90&zoom=auto,-13,372)
> The comparison x< y, where xandyare values, produces true, false, or undefined(which indicates that at least  one  operand  is NaN).

比較の結果はtrue, false, undefinedがあるのか

## 疑問

(normal, empty, empty)

というそれぞれが何なのかってどこに書いていてあるだろ?

(関数, 戻り値, 関数の引数) みたいな感じだけど

(type, value, args)

## [Page 113](Ecma-262_5.1.pdf#page=113&zoom=auto,-13,375)
> NOTEThe processes for initiating the evaluation of a Programand for dealing with the result of such an evaluation are defined by an ECMAScript implementation and not by this specification

`Program`の評価過程は実装依存?

## [Page 114](Ecma-262_5.1.pdf#page=114&zoom=auto,-13,553)
> 15Standard Built-in ECMAScript Objects

ECMAScriptオブジェクトについての定義