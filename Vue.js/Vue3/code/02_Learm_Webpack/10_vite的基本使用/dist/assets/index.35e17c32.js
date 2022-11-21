import { o as i, c as a, t as u, l as d, a as p } from './vendor.e3c3bbec.js'
const f = function () {
  const o = document.createElement('link').relList
  if (o && o.supports && o.supports('modulepreload')) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e)
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === 'childList')
        for (const s of t.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && l(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(e) {
    const t = {}
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossorigin === 'anonymous'
        ? (t.credentials = 'omit')
        : (t.credentials = 'same-origin'),
      t
    )
  }
  function l(e) {
    if (e.ep) return
    e.ep = !0
    const t = n(e)
    fetch(e.href, t)
  }
}
f()
function m(r, o) {
  return r + o
}
function _(r, o) {
  return r * o
}
var g = (r, o) => {
  const n = r.__vccOpts || r
  for (const [l, e] of o) n[l] = e
  return n
}
const y = {
  data() {
    return { message: 'Hello App' }
  }
}
function v(r, o, n, l, e, t) {
  return i(), a('h2', null, u(e.message), 1)
}
var h = g(y, [
  ['render', v],
  ['__scopeId', 'data-v-519de65c']
])
console.log('Hello World')
console.log(m(20, 30))
console.log(d.join(['abc', 'cba'], '-'))
const c = document.createElement('div')
c.className = 'title'
c.innerHTML = 'Hello Vite'
document.body.appendChild(c)
console.log(_(2, 2))
p(h).mount('#app')
