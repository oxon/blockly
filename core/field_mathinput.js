/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.FieldMathInput');

goog.require('Blockly.FieldTextInput');
goog.require('Blockly.Msg');
goog.require('goog.asserts');
goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.userAgent');


/**
 * Class for an editable math field.
 * @param {string} text The initial content of the field.
 * @param {Function=} opt_validator An optional function that is called
 *     to validate any constraints on what the user entered.  Takes the new
 *     text as an argument and returns either the accepted text, a replacement
 *     text, or null to abort the change.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldMathInput = function(text, opt_validator) {
  Blockly.FieldMathInput.superClass_.constructor.call(this, text,
      opt_validator);
	  this.setValidator(this.mathValidator);
};
goog.inherits(Blockly.FieldMathInput, Blockly.FieldTextInput);


/**
 * Allow browser to spellcheck this field.
 * @private
 */
Blockly.FieldMathInput.prototype.spellcheck_ = false;


Blockly.FieldMathInput.prototype.mathValidator = function(newText) {
	newText = String(newText);
	var pattern = new RegExp("[^a-zA-Z0-9-+*/()%^. ]", "g");

	var openBrackets = 0;
	var closingBrackets = 0;
	if (!pattern.test(newText)) {
		for (var i=0; i < newText.length; i++) {
			if(newText.charAt(i) == '(')
				openBrackets++;
			if(newText.charAt(i) == ')')
				closingBrackets++;
		}
		if(closingBrackets != openBrackets)
			newText = null;
		//TODO change text color
	} else {
		newText = null;
	}

	return newText;
}
