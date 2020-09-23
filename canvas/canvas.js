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

function touchStart(start) {
  canPaint = true
  last = start
}
function touchMove(move) {
  if (canPaint) {
    drawLine(ctx, last, move)
    last = move
  }
}
function touchEnd(e) {
  canPaint = false
}
if ('ontouchstart' in document) {
  $canvas.addEventListener('touchstart', (e) => {
    const touch = e.touches[0]
    touchStart([touch.clientX, touch.clientY])
  })
  $canvas.addEventListener('touchmove', (e) => {
    const touch = e.touches[0]
    touchMove([touch.clientX, touch.clientY])
  })
  $canvas.addEventListener('touchend', (e) => {
    touchEnd(e)
  })
} else {
  $canvas.addEventListener('mousedown', (e) => {
    touchStart([e.clientX, e.clientY])
  })
  $canvas.addEventListener('mousemove', (e) => {
    touchMove([e.clientX, e.clientY])
  })
  $canvas.addEventListener('mouseup', (e) => {
    touchEnd(e)
  })
}

