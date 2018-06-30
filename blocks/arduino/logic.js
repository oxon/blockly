'use strict';

goog.provide('Blockly.Blocks.oxocard.logic');

goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.require('Blockly.ColorDefinitions');

Blockly.Blocks['oxocard_logic_boolean'] = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
				["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
				["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]
			]), "BOOL");
		this.setOutput(true, 'Boolean');
	  this.setColour(Blockly.ColorDefinitions.LOGIC);
		this.setTooltip("%{BKY_LOGIC_BOOLEAN_TOOLTIP}");
	},
	getBlockType: function() {
	  return Blockly.Types.BOOLEAN;
	}
};
