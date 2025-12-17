//Using Array constructor

const arr1 = Array()

let arr2 = new Array()

console.log(arr1)
console.log(arr2)

//Using Object constructor

const obj1 = Object()   
let obj2 = new Object()
console.log(obj1)
console.log(obj2)
//Using Function constructor

const func1 = Function('x', 'y', 'return x + y')
let func2 = new Function('x', 'y', 'return x * y')
console.log(func1(2, 3))
console.log(func2(2, 3))    
//Using String constructor

const str1 = String('Hello World')  
let str2 = new String('Hello JavaScript')
console.log(str1)
console.log(str2)
//Using Number constructor
const num1 = Number(42)
let num2 = new Number(100)
console.log(num1)
console.log(num2)
//Using Boolean constructor 
const bool1 = Boolean(true)
let bool2 = new Boolean(false)
console.log(bool1)
console.log(bool2)  
//Using Date constructor
const date1 = Date()
let date2 = new Date()
console.log(date1)
console.log(date2)
//Using RegExp constructor
const regex1 = RegExp('\\d+')
let regex2 = new RegExp('\\w+')
console.log(regex1)
console.log(regex2)
//Using Error constructor
const error1 = Error('This is an error message')
let error2 = new Error('This is another error message')
console.log(error1) 
console.log(error2)
//Using Map constructor
//const map1 = Map()
let map2 = new Map()    
//console.log(map1)
console.log(map2)   
//Using Set constructor
// const set1 = Set()
let set2 = new Set()
// console.log(set1)
console.log(set2)   
//Using WeakMap constructor
const weakMap1 = WeakMap()
let weakMap2 = new WeakMap()    
console.log(weakMap1)
console.log(weakMap2)
//Using WeakSet constructor
const weakSet1 = WeakSet()
let weakSet2 = new WeakSet()    
console.log(weakSet1)
console.log(weakSet2)   
//Using ArrayBuffer constructor
const buffer1 = ArrayBuffer(8)
let buffer2 = new ArrayBuffer(16)
console.log(buffer1)
console.log(buffer2)
//Using DataView constructor
const view1 = DataView(buffer1)
let view2 = new DataView(buffer2)
console.log(view1)
console.log(view2)  
//Using Promise constructor
const promise1 = Promise((resolve, reject) => {
    resolve('Promise resolved')
})
let promise2 = new Promise((resolve, reject) => {
    reject('Promise rejected')
})
console.log(promise1)
console.log(promise2)
//Using Symbol constructor
const sym1 = Symbol('description1')
let sym2 = new Symbol('description2')
console.log(sym1)
console.log(sym2)   
//Using BigInt constructor
const bigInt1 = BigInt(9007199254741991)
let bigInt2 = new BigInt(9007199254741992)
console.log(bigInt1)
console.log(bigInt2)    
//Using TypedArray constructor
const int8Array1 = Int8Array(8)
let int8Array2 = new Int8Array(16)
console.log(int8Array1)
console.log(int8Array2)
//Using Float32Array constructor
const float32Array1 = Float32Array(8)
let float32Array2 = new Float32Array(16)
console.log(float32Array1)
console.log(float32Array2)
//Using Float64Array constructor    
const float64Array1 = Float64Array(8)
let float64Array2 = new Float64Array(16)
console.log(float64Array1)
console.log(float64Array2)  
//Using Int16Array constructor
const int16Array1 = Int16Array(8)
let int16Array2 = new Int16Array(16)
console.log(int16Array1)
console.log(int16Array2)
//Using Uint8Array constructor
const uint8Array1 = Uint8Array(8)
let uint8Array2 = new Uint8Array(16)
console.log(uint8Array1)
console.log(uint8Array2)
//Using Uint16Array constructor
const uint16Array1 = Uint16Array(8)
let uint16Array2 = new Uint16Array(16)
console.log(uint16Array1)
console.log(uint16Array2)
//Using Uint32Array constructor
const uint32Array1 = Uint32Array(8)
let uint32Array2 = new Uint32Array(16)
console.log(uint32Array1)
console.log(uint32Array2)
//Using Int32Array constructor
const int32Array1 = Int32Array(8)
let int32Array2 = new Int32Array(16)
console.log(int32Array1)
console.log(int32Array2)
//Using BigInt64Array constructor
const bigInt64Array1 = BigInt64Array(8)
let bigInt64Array2 = new BigInt64Array(16)
console.log(bigInt64Array1)
console.log(bigInt64Array2) 
//Using BigUint64Array constructor
const bigUint64Array1 = BigUint64Array(8)
let bigUint64Array2 = new BigUint64Array(16)
console.log(bigUint64Array1)
console.log(bigUint64Array2)    
//Using SharedArrayBuffer constructor
const sharedBuffer1 = SharedArrayBuffer(8)
let sharedBuffer2 = new SharedArrayBuffer(16)
console.log(sharedBuffer1)
console.log(sharedBuffer2)
//Using Atomics constructor
const atomics1 = Atomics
let atomics2 = new Atomics()
console.log(atomics1)
console.log(atomics2)
//Using Intl constructor
const intl1 = Intl
let intl2 = new Intl()
console.log(intl1)
console.log(intl2)
//Using WebAssembly constructor
const wasm1 = WebAssembly
let wasm2 = new WebAssembly()
console.log(wasm1)
console.log(wasm2)  
//Using Reflect constructor
const reflect1 = Reflect
let reflect2 = new Reflect()
console.log(reflect1)
console.log(reflect2)
//Using Proxy constructor
const target = {}
const handler = {}      
const proxy1 = Proxy(target, handler)
let proxy2 = new Proxy(target, handler)
console.log(proxy1)
console.log(proxy2) 
//Using URL constructor
const url1 = URL('https://www.example.com')
let url2 = new URL('https://www.example.com')
console.log(url1)
console.log(url2)   
//Using URLSearchParams constructor
const params1 = URLSearchParams('name=John&age=30')
let params2 = new URLSearchParams('name=Jane&age=25')
console.log(params1)
console.log(params2)
//Using TextEncoder constructor
const encoder1 = TextEncoder()
let encoder2 = new TextEncoder()    
console.log(encoder1)
console.log(encoder2)   
//Using TextDecoder constructor
const decoder1 = TextDecoder()
let decoder2 = new TextDecoder()    
console.log(decoder1)
console.log(decoder2)   
//Using Crypto constructor
const crypto1 = Crypto()
let crypto2 = new Crypto()    
console.log(crypto1)
console.log(crypto2)
//Using Performance constructor
const performance1 = Performance()
let performance2 = new Performance()    
console.log(performance1)
console.log(performance2)
//Using NavigationTiming constructor
const navTiming1 = NavigationTiming()
let navTiming2 = new NavigationTiming()    
console.log(navTiming1)
console.log(navTiming2) 
//Using Screen constructor
const screen1 = Screen()
let screen2 = new Screen()    
console.log(screen1)
console.log(screen2)
//Using History constructor 
const history1 = History()
let history2 = new History()    
console.log(history1)
console.log(history2)
//Using Location constructor
const location1 = Location()
let location2 = new Location()    
console.log(location1)
console.log(location2)  
//Using Navigator constructor
const navigator1 = Navigator()
let navigator2 = new Navigator()    
console.log(navigator1)
console.log(navigator2)
//Using Document constructor
const document1 = Document()
let document2 = new Document()    
console.log(document1)
console.log(document2)  
//Using Element constructor
const element1 = Element()
let element2 = new Element()    
console.log(element1)
console.log(element2)   
//Using Event constructor
const event1 = Event('click')
let event2 = new Event('mouseover')    
console.log(event1)
console.log(event2) 
//Using CustomEvent constructor
const customEvent1 = CustomEvent('myEvent', { detail: { key: 'value' } })
let customEvent2 = new CustomEvent('anotherEvent', { detail: { anotherKey: 'anotherValue' } })    
console.log(customEvent1)
console.log(customEvent2)   
//Using MouseEvent constructor
const mouseEvent1 = MouseEvent('click', { clientX: 100, clientY: 200 })
let mouseEvent2 = new MouseEvent('mousemove', { clientX: 150, clientY: 250 })    
console.log(mouseEvent1)
console.log(mouseEvent2)
//Using KeyboardEvent constructor
const keyboardEvent1 = KeyboardEvent('keydown', { key: 'a' })
let keyboardEvent2 = new KeyboardEvent('keyup', { key: 'Enter' })    
console.log(keyboardEvent1)
console.log(keyboardEvent2)
//Using TouchEvent constructor
const touchEvent1 = TouchEvent('touchstart')
let touchEvent2 = new TouchEvent('touchend')    
console.log(touchEvent1)
console.log(touchEvent2)
//Using WheelEvent constructor
const wheelEvent1 = WheelEvent('wheel', { deltaY: 100 })
let wheelEvent2 = new WheelEvent('wheel', { deltaY: -100 })    
console.log(wheelEvent1)
console.log(wheelEvent2)    
//Using FocusEvent constructor
const focusEvent1 = FocusEvent('focus')
let focusEvent2 = new FocusEvent('blur')    
console.log(focusEvent1)
console.log(focusEvent2)    
//Using AnimationEvent constructor
const animationEvent1 = AnimationEvent('animationstart')
let animationEvent2 = new AnimationEvent('animationend')    
console.log(animationEvent1)
console.log(animationEvent2)
//Using TransitionEvent constructor
const transitionEvent1 = TransitionEvent('transitionstart')
let transitionEvent2 = new TransitionEvent('transitionend')    
console.log(transitionEvent1)
console.log(transitionEvent2)
//Using MessageEvent constructor
const messageEvent1 = MessageEvent('message', { data: 'Hello' })
let messageEvent2 = new MessageEvent('message', { data: 'World' })    
console.log(messageEvent1)
console.log(messageEvent2)
//Using StorageEvent constructor
const storageEvent1 = StorageEvent('storage', { key: 'name', newValue: 'John' })
let storageEvent2 = new StorageEvent('storage', { key: 'age', newValue: '30' })    
console.log(storageEvent1)
console.log(storageEvent2)
//Using PopStateEvent constructor
const popStateEvent1 = PopStateEvent('popstate', { state: { page: 1 } })
let popStateEvent2 = new PopStateEvent('popstate', { state: { page: 2 } })    
console.log(popStateEvent1)
console.log(popStateEvent2) 
//Using HashChangeEvent constructor
const hashChangeEvent1 = HashChangeEvent('hashchange', { oldURL: 'http://example.com#old', newURL: 'http://example.com#new' })
let hashChangeEvent2 = new HashChangeEvent('hashchange', { oldURL: 'http://example.com#first', newURL: 'http://example.com#second' })    
console.log(hashChangeEvent1)
console.log(hashChangeEvent2)   
//Using BeforeUnloadEvent constructor
const beforeUnloadEvent1 = BeforeUnloadEvent('beforeunload')
let beforeUnloadEvent2 = new BeforeUnloadEvent('beforeunload')    
console.log(beforeUnloadEvent1)
console.log(beforeUnloadEvent2) 
//Using ClipboardEvent constructor
const clipboardEvent1 = ClipboardEvent('copy')
let clipboardEvent2 = new ClipboardEvent('paste')    
console.log(clipboardEvent1)
console.log(clipboardEvent2)

