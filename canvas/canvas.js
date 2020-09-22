let $canvas = document.querySelector('canvas')
$canvas.width = document.documentElement.clientWidth
$canvas.height = document.documentElement.clientHeight
let ctx = $canvas.getContext('2d')

// 事件函数
let last

ctx.fillStyle = 'black'
ctx.strokeStyle = 'black'
ctx.lineWidth = 4
ctx.lineCap = 'round'
let canPaint = false
// 画线
function drawLine(ctx, start, end) {
  if(ctx) {
    ctx.beginPath()
    ctx.moveTo(start[0], start[1])
    ctx.lineTo(end[0], end[1])
    ctx.stroke()
  }
}

function touchStart(e) {
  canPaint = true
  last = [e.clientX, e.clientY]
}
function touchMove(e) {
  if (canPaint) {
    drawLine(ctx, last, [e.clientX, e.clientY])
    last = [e.clientX, e.clientY]
  }
}
function touchEnd(e) {
  canPaint = false
}
$canvas.addEventListener('mousedown', (e) => {
  touchStart(e)
})
$canvas.addEventListener('mousemove', (e) => {
  touchMove(e)
})
$canvas.addEventListener('mouseup', (e) => {
  touchEnd(e)
})