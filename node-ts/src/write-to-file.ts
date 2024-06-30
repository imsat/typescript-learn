import fs from 'fs'

let text: string = 'Hello from Typescript!'

function doneWritingFile(err: NodeJS.ErrnoException | null): void {
    if(err) {
        return console.log('There was an error!')
    }
    console.log('Done!')
}

fs.writeFile('file.txt', text, doneWritingFile)