const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)
//Me devuelve...
/*
{
  uid: -1,
  gid: -1,
  username: 'OS',
  homedir: 'C:\\Users\\OS',
  shell: null
}
*/

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`) //The System Uptime is 2479726 seconds

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);
/*
{
  name: 'Windows_NT',
  release: '10.0.19042',
  totalMem: 12097904640,
  freeMem: 4872208384
}
*/