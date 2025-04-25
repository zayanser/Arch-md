const fs = require('fs')

module.exports = {
    autoLevelUp(user, xp) {
        const XP_PER_LEVEL = 3500
        const MAX_LEVEL = 15

        user.exp = (user.exp || 0) + xp
        let initialLevel = user.level

        while (user.level < MAX_LEVEL && user.exp >= XP_PER_LEVEL * (user.level + 1)) {
            user.level++
        }

        if (user.level >= MAX_LEVEL && user.exp >= XP_PER_LEVEL * MAX_LEVEL) {
            user.exp = XP_PER_LEVEL * MAX_LEVEL
        }

        return user.level > initialLevel
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})