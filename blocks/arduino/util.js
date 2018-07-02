'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.oxocard.util');

goog.require('Blockly.Blocks');
goog.require('Blockly.ColorDefinitions');

Blockly.Blocks['infinite_loop'] = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.setColour(Blockly.ColorDefinitions.VARIABLES);
		this.appendDummyInput()
			.appendField(Blockly.Msg.ARD_TIME_INF);
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setTooltip(Blockly.Msg.ARD_TIME_INF_TIP);
	}
};
