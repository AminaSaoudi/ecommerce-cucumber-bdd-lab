// cucumber.js
module.exports = {
    default: {
        paths : ['features/**/*.feature'],
    require: [
        'src/steps/**/*.ts',
        'src/support/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: [
        'progress-bar',
        'summary'
    ],
    publishQuiet: true
    }
}
    