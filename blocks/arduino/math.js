'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.oxocard.math');

goog.require('Blockly.Blocks');
goog.require('Blockly.ColorDefinitions');


Blockly.Blocks.math_decrement = {
	/**
	 * Block for adding to a variable in place.
	 * @this Blockly.Block
	 */
	init: function() {
		this.appendDummyInput()
		.appendField(Blockly.Msg.OXOCARD_MATH_DECREMENT_TITLE);
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable(
				Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATH_DECREMENT_TIP);
		this.setColour(Blockly.ColorDefinitions.VARIABLES);
	},
	getVarType: function(varName) {
		return Blockly.Types.NUMBER;
	}
};

Blockly.Blocks.math_increment = {
	/**
	 * Block for adding to a variable in place.
	 * @this Blockly.Block
	 */
	init: function() {
		this.appendDummyInput()
		.appendField(Blockly.Msg.OXOCARD_MATH_INCREMENT_TITLE);
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable(
				Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATH_INCREMENT_TIP);
		this.setColour(Blockly.ColorDefinitions.VARIABLES);
	},
	getVarType: function(varName) {
		return Blockly.Types.NUMBER;
	}
};

Blockly.Blocks.math_set_var_with = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATH_SET_VAR_WITH_TITLE)
			.appendField(new Blockly.FieldVariable(
				Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATH_SET_VAR_WITH_TITLE2)
			.appendField(new Blockly.FieldMathInput('1*(1+2)'), 'EXPRESSION')
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATH_SET_VAR_WITH_TIP);
		this.setColour(Blockly.ColorDefinitions.VARIABLES);
	},
	getVarType: function(varName) {
		return Blockly.Types.NUMBER;
	}
};

Blockly.Blocks.math_set_oxocard_random = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_RANDOM_TITLE1);
			this.appendValueInput('FROM')
				.setCheck('Number')
				.setAlign(Blockly.ALIGN_RIGHT);
			this.appendValueInput('TO')
			.appendField(Blockly.Msg.OXOCARD_RANDOM_TITLE2)
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT);
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setTooltip(Blockly.Msg.OXOCARD_RANDOM_TIP);
		this.setColour(Blockly.ColorDefinitions.VARIABLES);
	},
	getBlockType: function() {
	  return Blockly.Types.NUMBER;
	}
  };
