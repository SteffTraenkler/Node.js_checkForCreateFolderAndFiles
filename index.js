const fs = require('fs')

if (!fs.existsSync('./MyFunnyFolder/')) {
    fs.mkdirSync('./MyFunnyFolder')
} else if (fs.existsSync('./MyFunnyFolder/')) {
    fs.rmdirSync('./MyFunnyFolder')
}

if (!fs.existsSync('./What/isThis.txt')) {
    fs.mkdirSync('./What')
    fs.appendFileSync('./What/isThis.txt', '', 'utf8', (err) => {
        if (err) {
            console.log('failed to create isThis.txt file');
        }
        console.log('isThis.txt file created');
    })
}
