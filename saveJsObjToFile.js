const fs = require('fs');

//   JSON.stringify() features with extra capabilities
// - Wraps funcs
// - upon execution, it expose an object, target, into the scope
function bundle(obj) {
    const type = typeof obj;
    if (type === 'string') return "`" + obj + "`";
    if (type === 'boolean' || type === 'number') return obj;
    if (type === 'function') return obj.toString();
    if (Array.isArray(obj)) {
        return '[' + obj.map(item => bundle(item)).join(',') + ']'; 
    }
    let returnValue = [];
    for (var prop in obj) {
        returnValue.push(prop + ': ' + bundle(obj[prop]));
    }
    return '{' + returnValue.join(',') + '}';
};

function saveJsObjectToFile(fileName, object) {
    var textToSave = `module.exports = ` + bundle(object);
    fs.writeFileSync(`${fileName.replace('.js', '')}.js`, textToSave);
}

module.exports = saveJsObjectToFile;
