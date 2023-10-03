// Generate vapIDKeys by running the command `node push.js`

var push = require('web-push')

// let vapIdKeys = push.generateVAPIDKeys();

// console.log(vapIdKeys)

let vapidKeys = {
    publicKey:'BKBolRC4aiE-YLXYuY8BLkiuBB4JpWQY-ZNBmQfko7_bBbK3By2LS1jyXDaDJ5MpldqtBZDIdwmDZB4DkFH9nsI',
    privateKey:'38YT3mNM3hFrr6bc4iy_Iy7HKVUgN6SOZGayvJRrU98'
}

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)


let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/dFhPz4YLt-I:APA91bHKOPB1qHGLtHIs5S52JSWPble_O95qAtfiQ0zKIpa1GCaSuOw9x13Gv5PA5h7aZlwlTgBisH9cOyW4pt6BbiTd2bsUOJiT16zqAB2ZT2eR1qUx4uJ3x3FFyOofy4lbtaEeu6vk",
expirationTime:null,
keys:
{p256dh:"BLQ9OdEJLeJnPAd3ZN_o0uqgSpq_kSXE7db-onmK3CC_RlorDpvtzd8rXhHDrlLQUDaJ8k43oH6Xnm71O5qfjuU",
auth:"5KqAMU3PiNOctOY2ZjmS0Q"}} ;

push.sendNotification(sub, 'test message')