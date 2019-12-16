const fs = require('fs');
const chalk = require('chalk');

const newNode = () => {
    console.log("Current state");
}

const addNote = (title, body) => {
    const notes = loadNotes();
     
    const duplicateNote = notes.find((note) => note.title == title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("New note added");
    } else {
        console.log("No need note");
    }
    

}


const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
         console.log(chalk.green.inverse("Notes removed"));
         saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse("No note found"));
    }

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.red.inverse('My all notes'));

    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => notes.title == title);

    if(note) {
        console.log(chalk.green.inverse(note.title));
        console.log(chalk.green.inverse(note.body));
    } else {
        console.log(chalk.red.inverse("This note not found"));
    }
}










const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;

    } catch(e) {
        return [];
    }
}
const age = 25;
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    newNode: newNode,
    listNotes: listNotes,
    readNote: readNote
}