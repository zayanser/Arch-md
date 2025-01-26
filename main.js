const {fork} = require('child_process');
const chalk = require('chalk')

async function start(){
const child = fork('./index.js')
//send message to child
//child.send("Hello Child")

//send child to parent
child.on("message",msg=>{
console.log('child to parent =>',msg)
})

child.on("close",(anu)=>{
//console.log('terclose',anu)
console.log(chalk.black(chalk.bgRed(`Arch Md is restarting..`)))
start()
})

child.on("exit",(anu2)=>{
//console.log('terexit',anu2)
})

}
start()