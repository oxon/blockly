'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.oxocard.util');

goog.require('Blockly.Blocks');


Blockly.Blocks['oxocard_random'] = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.OXOCARD_RANDOM_TITLE)
		  .appendField(new Blockly.FieldTextInput('1', Blockly.FieldTextInput.numberValidator),'NUM');
	  this.setOutput(true, 'Number');
	  this.setTooltip(Blockly.Msg.OXOCARD_RANDOM_TIP);
	  //this.setColour(Blockly.Blocks.oxocard.COLOUR_VARIABLE);
	},
	getBlockType: function() {
	  return Blockly.Types.NUMBER;
	}
  };

  Blockly.Blocks['infinite_loop'] = {
	/**
	 * Waits forever, end of program.
	 * @this Blockly.Block
	 */
	init: function() {
	  this.setHelpUrl('');
	  this.setColour(100);
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.ARD_TIME_INF);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true);
	  this.setTooltip(Blockly.Msg.ARD_TIME_INF_TIP);
	}
  };