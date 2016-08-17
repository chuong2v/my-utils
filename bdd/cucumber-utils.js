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
	if (data == "true" || data == "false") {
		return data == "true";
	}
	if (typeof data == "string" && (data.charAt(0) == '{' || data.charAt(0) == '[')) {
		return JSON.parse(data);
	}
}
module.exports = {
	setSubDocValue,
	validateData
}