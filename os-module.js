const os = require('os');

// Info about currrent user
const user = os.userInfo()


// method returns the system uptime in secs
console.log(`the sys uptime is ${os.uptime()} secs`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)