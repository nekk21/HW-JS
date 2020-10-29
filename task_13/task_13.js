const express = require('express')
const zlib = require('zlib')
const fs = require('fs')
const path = require('path')
const multer = require('multer')

const app = express()
const port = 4000

// app.get('/', (req, res) => {
//     res.send(':)')
// })

/////////////////////////////////////////////// ZIP DIR

const source = path.join(__dirname, 'folderImg')
const out = path.join(__dirname, 'newZipImg.zip')

const archiver = require('archiver')

function zipDirectory(source, out) {
    const archive = archiver('zip', { zlib: { level: 9 } })
    const stream = fs.createWriteStream(out)

    return new Promise((resolve, reject) => {
        archive
            .directory(source, false)
            .on('error', err => reject(err))
            .pipe(stream)

        stream.on('close', () => resolve())
        archive.finalize()
    })
}
// zipDirectory(source, out)

/////////////////////////////////////////////// STORE

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    },
})

const upload = multer({ storage: storage })

app.get('/newZipImg', (req, res, next) => {
    res.sendFile(out)
})

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
})

app.use((req, res, next) => {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)")
})

app.listen(port, () => console.log(`server started on port ${port}`))
