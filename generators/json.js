
goog.provide('Blockly.JSON');

goog.require('Blockly.Generator');


Blockly.JSON = new Blockly.Generator('JSON');
Blockly.JSON.init = function(workspace) {
	console.log("json-init.");
	//Blockly.JSON.output = Object.create(null);
	Blockly.JSON.output = {'calls':[]};
}

Blockly.JSON.finish = function(code) {
	console.log("json-finish.");
	console.log(code);
	console.log(Blockly.JSON.output);
	return JSON.stringify(Blockly.JSON.output);
}

Blockly.JSON.addStatement = function(statement){
	Blockly.JSON.output['calls'].push(statement);
}