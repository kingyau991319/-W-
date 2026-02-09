document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('pingBtn')
  if (btn) {
    btn.addEventListener('click', () => {
      console.log('Ping from renderer')
      if (window.electronAPI && window.electronAPI.send) {
        window.electronAPI.send('renderer-ping', { time: Date.now() })
      }
    })
  }
})
