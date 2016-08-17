var setSubDocValue = function(obj, keys, value) {
	var returnObj = Object.clone(obj);
	var curSub = returnObj[keys[0]];
	if (keys.length == 1) {
		returnObj[keys[0]] = value;
	} else {
		try {
			returnObj[keys[0]] = setSubDocValue(curSub, keys.slice(1), value);
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

module.exports = {
	setSubDocValue,
	validateData
}