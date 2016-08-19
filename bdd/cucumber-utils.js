var setValue = function(obj, keys, value) {
    var returnObj = Object.clone(obj);
    var curSub = returnObj[keys[0]];
    if (keys.length == 1) {
        returnObj[keys[0]] = value;
    } else {
        try {
            returnObj[keys[0]] = setValue(curSub, keys.slice(1), value);
        } catch (error) {
            throw new Error("KEY_NOT_FOUND", error);
        }
    }
    return returnObj;
}

var validateData = function(data) {
    try {
        return JSON.parse(data);
    } catch (error) {
        return data;
    }
}

var insertData(Model, table, pathToTmpl, done) {
    var list = table.hashes();
    var tmpl;
    if (pathToTmpl) {
        try {
            tmpl = JSON.parse(fs.readFileSync(pathToTmpl));
        } catch (error) {
            done(error);
        }
    }
    var objList = [];
    list.forEach(function(item) {
        var doc = tmpl ? new Model(tmpl) : new Model();
        Object.keys(item).forEach(function(key) {
            var value = Utils.validateData(item[key]);
            var subKeys = key.split(".");
            doc = Utils.setSubDocValue(doc, subKeys, value);
        })
        objList.push(doc);
    })
    return Model.create(objList)
        .then(function(result) {
            console.log('Inserted', result.length, result.length < 2 ? "doc" : "docs");
            done();
        }).catch(function(error) {
            done(error);
        });
}

module.exports = {
    setValue,
    validateData,
    insertData
}