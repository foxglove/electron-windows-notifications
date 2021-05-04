// Create shortcut, just to be sure
require('./shortcut')

// Sample
const appId = 'electron-windows-notifications'
const Notification = require('../src/notification')

const notification = new Notification({
  appId: appId,
  template: '<toast><visual><binding template="ToastText01"><text id="1">%s</text></binding></visual></toast>',
  strings: ['Hi!']
})

notification.on('activated', () => console.log('Activated!'))
notification.show()
