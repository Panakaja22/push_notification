// Generate vapIDKeys by running the command `node push.js`

var push = require('web-push')

// let vapIdKeys = push.generateVAPIDKeys();

// console.log(vapIdKeys)

let vapidKeys = {
    publicKey:'BKBolRC4aiE-YLXYuY8BLkiuBB4JpWQY-ZNBmQfko7_bBbK3By2LS1jyXDaDJ5MpldqtBZDIdwmDZB4DkFH9nsI',
    privateKey:'38YT3mNM3hFrr6bc4iy_Iy7HKVUgN6SOZGayvJRrU98'
}

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)


let sub = {};

push.sendNotification(sub, 'test message')