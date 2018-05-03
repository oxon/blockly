'use strict';

goog.require('Blockly.JSON');

Blockly.JSON.oxocard_matrix_draw_rgb_image = function() {
var statement = {
	'name': 'drawRGBImage',
	'arguments':[]
};

//var posX = Blockly.JSON.valueToCode(this, 'X', Blockly.Arduino.ORDER_NONE) || 0;
	//var posY = Blockly.JSON.valueToCode(this, 'Y', Blockly.Arduino.ORDER_NONE) || 0;
	var posX =0;
	var posY = 0;





	
	for(var i=0, l=8; i<l; i++){
		for(var j=0, ll=8; j<l; j++){
			let x = j;
			let y = i;
			if((x >= 0) && (x < 8) && (y >= 0) && (y < 8)){
				var value= this.getFieldValue(i + '' + j);
				if(value != 'FALSE'){
					
					var r = parseInt(value.substring(1,3),16);
					var g = parseInt(value.substring(3,5),16);
					var b = parseInt(value.substring(5,7),16);
					statement.arguments.push(r);
					statement.arguments.push(g);
					statement.arguments.push(b);
					continue;
				}else{
					statement.arguments.push(0);statement.arguments.push(0);statement.arguments.push(0);

				}
			}
		}
	}
console.log(statement);
	Blockly.JSON.addStatement(statement);
	return '';
};