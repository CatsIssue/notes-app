const yargs = require('yargs');
const note = require('./note.js');
const validator = require('validator');
const chalk = require('chalk');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'what do',
    builder: {
        title: {
            describe: "redefined describe",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "option body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       note.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove",
    builder: {
        title: {
            describe: "what to delete",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.removeNote(argv.title);
    }
});

yargs.command({
    command: "read",
    describe: 'read some data',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.readNote(argv.title);
    }
})

note.listNotes();
yargs.argv;