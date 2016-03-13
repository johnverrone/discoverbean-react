const path = require('path');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

var config = {
    //Entry points to the project
    entry: {
        src: PATHS.src
    },
    output: {
        path: PATHS.build,    //Path of output file
        filename: 'bundle.js'
    },
};

module.exports = config;
