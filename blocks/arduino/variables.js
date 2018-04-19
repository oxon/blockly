/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Block for the Arduino map functionality.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: This block can be improved to set the new range properly.
 */
'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.ColorDefinitions');

Blockly.Blocks['variables_set_type'] = {
  /**
   * Block for variable casting.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/HomePage');
    this.setColour(100);
    this.appendValueInput('VARIABLE_SETTYPE_INPUT');
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_VAR_AS)
        .appendField(new Blockly.FieldDropdown(
                         Blockly.Types.getValidTypeArray()),
                     'VARIABLE_SETTYPE_TYPE');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.ARD_VAR_AS_TIP);
  },
  /**
   * Assigns a type to the block based on the selected type to cast.
   * @return {!string} Blockly type for this block configuration.
   * @this Blockly.Block
   */
  getBlockType: function() {
    var blocklyTypeKey = this.getFieldValue('VARIABLE_SETTYPE_TYPE');
    return Blockly.Types[blocklyTypeKey];
  }
};


Blockly.Blocks['text'] = {
	/**
	 * Block for text value.
	 * @this Blockly.Block
	 */
	init: function() {
	  this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
	  this.setColour(Blockly.ColorDefinitions.VARIABLES);
	  this.appendDummyInput()
		  .appendField(this.newQuote_(true))
		  .appendField(new Blockly.FieldTextInput('', function(text) {
				var pattern = new RegExp("^[\x20-\x7F]+$", "g");
				return pattern.test(text) ? text : null;
			}), 'TEXT')
		  .appendField(this.newQuote_(false));
	  this.setOutput(true, Blockly.Types.TEXT.output);
	  // Assign 'this' to a variable for use in the tooltip closure below.
	  var thisBlock = this;
	  // Text block is trivial.  Use tooltip of parent block if it exists.
	  this.setTooltip(function() {
		var parent = thisBlock.getParent();
		return (parent && parent.getInputsInline() && parent.tooltip) ||
			Blockly.Msg.TEXT_TEXT_TOOLTIP;
	  });
	},
	/**
	 * Create an image of an open or closed quote.
	 * @param {boolean} open True if open quote, false if closed.
	 * @return {!Blockly.FieldImage} The field image of the quote.
	 * @this Blockly.Block
	 * @private
	 */
	newQuote_: function(open) {
	  if (open == this.RTL) {
		var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
	  } else {
		var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
	  }
	  return new Blockly.FieldImage(file, 12, 12, '"');
	},
	/** @return {!string} Type of the block, text block always a string. */
	getBlockType: function() {
	  return Blockly.Types.TEXT;
	}
};

Blockly.Blocks.oxocard_list_add = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendValueInput("VALUE")
			.setCheck("Number")
			.appendField(Blockly.Msg.OXOCARD_LIST_ADD_TITLE1 + Blockly.Msg.OXOCARD_LIST_ADD_TITLE1_5);
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_LIST_ADD_TITLE2);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_LIST_ADD_TIP);
		this.setColour(Blockly.ColorDefinitions.VARIABLES);
	}
};

Blockly.Blocks.oxocard_list_add_color = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendValueInput("R")
			.setCheck("Number")
			.appendField(Blockly.Msg.OXOCARD_LIST_ADD_TITLE1 + ' R:');
		this.appendValueInput("G")
			.setCheck("Number")
			.appendField('G:');
		this.appendValueInput("B")
			.setCheck("Number")
			.appendField('B:');
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_LIST_ADD_COLOR_TITLE2);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_LIST_ADD_COLOR_TIP);
		this.setColour(Blockly.ColorDefinitions.VARIABLES);
	}
};

Blockly.Blocks.oxocard_list_get = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendValueInput("VALUE")
			.setCheck("Number")
			.appendField(Blockly.Msg.OXOCARD_LIST_GET_TITLE1);
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_LIST_GET_TITLE2);
		this.setOutput(true, 'Number');
		this.setTooltip(Blockly.Msg.OXOCARD_LIST_GET_TIP);
		this.setColour(Blockly.ColorDefinitions.VARIABLES);
	},
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks.oxocard_list_get_color = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendValueInput("VALUE")
			.setCheck("Number")
			.appendField(Blockly.Msg.OXOCARD_LIST_GET_TITLE1);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(
				[
					["R", "r"],
					["G", "g"],
					["B", "b"]
				]), "COLOR");
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_LIST_GET_COLOR_TITLE2);
		this.setOutput(true, 'Number');
		this.setInputsInline(true);
		this.setTooltip(Blockly.Msg.OXOCARD_LIST_GET_COLOR_TIP);
		this.setColour(Blockly.ColorDefinitions.VARIABLES);
	},
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks.oxocard_list_remove = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendValueInput("VALUE")
			.setCheck("Number")
			.appendField(Blockly.Msg.OXOCARD_LIST_REMOVE_TITLE1);
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_LIST_REMOVE_TITLE2);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_LIST_REMOVE_TIP);
		this.setColour(Blockly.ColorDefinitions.VARIABLES);
	}
};

Blockly.Blocks.oxocard_list_remove_color = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendValueInput("VALUE")
			.setCheck("Number")
			.appendField(Blockly.Msg.OXOCARD_LIST_REMOVE_TITLE1);
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_LIST_REMOVE_COLOR_TITLE2);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_LIST_REMOVE_COLOR_TIP);
		this.setColour(Blockly.ColorDefinitions.VARIABLES);
	}
};
