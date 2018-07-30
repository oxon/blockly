'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.oxocard.display');

goog.require('Blockly.Blocks');
goog.require('Blockly.ColorDefinitions');

Blockly.Blocks.oxocard_matrix_draw_image = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {

		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_IMAGE_TITLE);
		for(var i=0, l=8; i<l; i++){
			var input = this.appendDummyInput();
			for(var j=0, ll=8; j<ll; j++){
				input.appendField(new Blockly.FieldLed('FALSE'), i + '' + j);
			}
		}
		this.appendValueInput('X')
			.appendField('x').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('Y')
			.appendField('y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		// this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_DRAW_IMAGE_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};


Blockly.Blocks.oxocard_matrix_draw_rgb_image = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		var theColor = new Blockly.FieldColour();
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_RGB_IMAGE_TITLE);
		for(var i=0, l=8; i<l; i++){
			var input = this.appendDummyInput();
			for(var j=0, ll=8; j<ll; j++){
				var rgbLed = new Blockly.FieldRGBLed('FALSE');
				rgbLed.customXSpacing = 14;
				rgbLed.setSource(theColor);
				input.appendField(rgbLed , i + '' + j);
			}
		}
		this.appendDummyInput().appendField(theColor, 'COLOR');
		this.appendValueInput('X')
			.appendField('x').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('Y')
			.appendField('y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_DRAW_RGB_IMAGE_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_set_color = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_SET_COLOR_TITLE)
			.appendField(new Blockly.FieldColour(), 'COLOR');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_SET_COLOR_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_set_random_color = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_SET_RANDOM_COLOR_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_SET_RANDOM_COLOR_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_set_color_var = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_SET_COLOR_VAR_TITLE);
		this.appendValueInput('R')
			.setCheck(Blockly.Types.NUMBER.checkList).setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('G')
			.setCheck(Blockly.Types.NUMBER.checkList).setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('B')
			.setCheck(Blockly.Types.NUMBER.checkList).setAlign(Blockly.ALIGN_RIGHT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_SET_COLOR_VAR_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_draw_all = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_ALL_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_DRAW_ALL_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_clear = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_CLEAR_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_CLEAR_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_set_fill = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_SET_FILL_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_SET_FILL_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};


Blockly.Blocks.oxocard_matrix_set_nofill = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_SET_NOFILL_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_SET_NOFILL_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_draw_pixel = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_PIXEL_TITLE);
		this.appendValueInput('X')
			.appendField('x')
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('Y')
			.appendField('y')
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_DRAW_PIXEL_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_clear_pixel = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_CLEAR_PIXEL_TITLE);
		this.appendValueInput('X')
			.appendField('x')
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('Y')
			.appendField('y')
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_CLEAR_PIXEL_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_draw_line = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_LINE_TITLE);
		this.appendValueInput('FROM_X')
			.appendField('  ' + Blockly.Msg.OXOCARD_MATRIX_DRAW_LINE_FROM)
			.appendField(' x').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('FROM_Y')
			.appendField('y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('TO_X')
			.appendField('  ' + Blockly.Msg.OXOCARD_MATRIX_DRAW_LINE_TO)
			.appendField(' x').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('TO_Y')
			.appendField('y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_DRAW_LINE_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};


Blockly.Blocks.oxocard_matrix_draw_rectangle = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_RECTANGLE_TITLE);
		this.appendValueInput('X')
			.appendField('x').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('Y')
			.appendField('y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('W')
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_RECTANGLE_WIDTH)
			.setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('H')
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_RECTANGLE_HEIGHT)
			.setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_DRAW_RECTANGLE_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_draw_circle = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_CIRCLE_TITLE);
		this.appendValueInput('X')
			.appendField('x').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('Y')
			.appendField('y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('R')
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_CIRCLE_RADIUS)
			.setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_DRAW_CIRCLE_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_draw_triangle = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_TRIANGLE_TITLE);
		this.appendValueInput('X_ONE')
			.appendField('  P1 x').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('Y_ONE')
			.appendField('y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('X_TWO')
			.appendField('  P2 x').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('Y_TWO')
			.appendField('y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('X_THREE')
			.appendField('  P3  x').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('Y_THREE')
			.appendField('y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_DRAW_TRIANGLE_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_draw_number = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendValueInput('NUMBER')
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_NUMBER_TITLE).setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_DRAW_NUMBER_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_draw_text = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DRAW_TEXT_TITLE)
			.appendField(this.newQuote_(true))
			.appendField(new Blockly.FieldTextInput('Hello', function(text) {
				var pattern = new RegExp("^[\x20-\x7F]+$", "g");
				return pattern.test(text) ? text : null;
			}), 'TEXT')
			.appendField(this.newQuote_(false))
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg.OXOCARD_MATRIX_DRAW_TEXT_SMALL_FONT, "FALSE"],
				[Blockly.Msg.OXOCARD_MATRIX_DRAW_TEXT_BIG_FONT, "TRUE"]
			]), "BUTTON");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_DRAW_TEXT_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
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
	}
};

Blockly.Blocks.oxocard_matrix_set_frame_buffer = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_SET_FRAME_BUFFER_TITLE)
			.appendField(new Blockly.FieldDropdown(
				[
					["#1", "1"],
					["#2", "2"],
					["#3", "3"]
				]), "BUFFER");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_SET_FRAME_BUFFER_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_copy_frame_buffer_content = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_COPY_FRAME_BUFFER_CONTENT_TITLE);
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_COPY_FRAME_BUFFER_CONTENT_DESTI)
			.appendField(new Blockly.FieldDropdown(
				[
					["#1", "1"],
					["#2", "2"],
					["#3", "3"]
				]), "SOURCE");
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_COPY_FRAME_BUFFER_CONTENT_SOURCE)
			.appendField(new Blockly.FieldDropdown(
				[
					["#1", "1"],
					["#2", "2"],
					["#3", "3"]
				]), "DESTI");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_COPY_FRAME_BUFFER_CONTENT_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_update = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_UPDATE_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_UPDATE_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_enable_auto_update = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_ENABLE_AUTO_UPDATE_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_ENABLE_AUTO_UPDATE_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_disable_auto_update = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_DISABLE_AUTO_UPDATE_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_DISABLE_AUTO_UPDATE_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	}
};

Blockly.Blocks.oxocard_matrix_read_pixel = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_READ_PIXEL_TITLE);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(
				[
					["R", "r"],
					["G", "g"],
					["B", "b"]
				]), "COLOR");
		this.appendValueInput('X')
			.appendField('x')
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('Y')
			.appendField('y')
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT);
		this.setOutput(true, 'Number');
		this.setInputsInline(true);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_READ_PIXEL_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	},
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks.oxocard_matrix_is_pixel = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_MATRIX_IS_PIXEL_TITLE);
		this.appendValueInput('X')
			.appendField('x')
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('Y')
			.appendField('y')
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT);
		this.setOutput(true, 'Boolean');
		this.setInputsInline(true);
		this.setTooltip(Blockly.Msg.OXOCARD_MATRIX_IS_PIXEL_TIP);
		this.setColour(Blockly.ColorDefinitions.DISPLAY);
	},
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
};

Blockly.Blocks.oxocard_matrix_draw_weather = {
	helpUrl: 'https://www.oxocard.ch/instructions.html',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_WEATHER_DRAW_ICON_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_WEATHER_DRAW_ICON_TIP);
		this.setColour(Blockly.ColorDefinitions.COMMUNICATION);
	}
};
