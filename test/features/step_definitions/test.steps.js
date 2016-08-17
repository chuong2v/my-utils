var Utils = require("./../../../").Cucumber;
module.exports = function() {
    this.When(/^I send example data$/, function(table, callback) {
        var data = table.hashes()[0];
        for(key in data){
            console.log(key, typeof Utils.validateData(data[key]), Utils.validateData(data[key]));
        }
        callback();
    });
}