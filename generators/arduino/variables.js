/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating Arduino code for variables blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.variables');

goog.require('Blockly.Arduino');

/**
 * Code generator for variable (X) getter.
 * Arduino code: loop { X }
 * @param {Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['variables_get'] = function(block) {
	var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'),
		Blockly.Variables.NAME_TYPE);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for variable (X) setter (Y).
 * Arduino code: type X;
 *               loop { X = Y; }
 * @param {Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['variables_set'] = function(block) {
	var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',
		Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
	var varName = Blockly.Arduino.variableDB_.getName(
		block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	return varName + ' = ' + argument0 + ';\n';
};

/**
 * Code generator for variable (X) casting (Y).
 * Arduino code: loop { (Y)X }
 * @param {Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['variables_set_type'] = function(block) {
	var argument0 = Blockly.Arduino.valueToCode(block, 'VARIABLE_SETTYPE_INPUT',
		Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
	var varType = Blockly.Arduino.getArduinoType_(
		Blockly.Types[block.getFieldValue('VARIABLE_SETTYPE_TYPE')]);
	var code = '(' + varType + ')(' + argument0 + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_list_add = function(block) {
	var val = Blockly.Arduino.valueToCode(
		block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return 'oxocard.numberList->add(' + val + ');\n';
};

Blockly.Arduino.oxocard_list_add_color = function(block) {
	var r = Blockly.Arduino.valueToCode(
		block, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var g = Blockly.Arduino.valueToCode(
		block, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var b = Blockly.Arduino.valueToCode(
		block, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return 'oxocard.colorList->add(rgb(' + r + ', ' + g +  ', ' + b + '));\n';
};

Blockly.Arduino.oxocard_list_get = function(block) {
	var value = Blockly.Arduino.valueToCode(
		block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'oxocard.numberList->get(' + value + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_list_get_color = function(block) {
	var value = Blockly.Arduino.valueToCode(
		block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var color = this.getFieldValue('COLOR');
	var code = 'oxocard.colorList->get(' + value + ').' + color;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_list_remove = function(block) {
	var value = Blockly.Arduino.valueToCode(
		block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return 'oxocard.numberList->remove(' + value + ');\n';
};

Blockly.Arduino.oxocard_list_remove_color = function(block) {
	var value = Blockly.Arduino.valueToCode(
		block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return 'oxocard.colorList->remove(' + value + ');\n';
};

Blockly.Arduino.oxocard_pus_has_variable = function(block) {
  var key = this.getFieldValue('KEY');
  var code = 'oxocard.persistentUserStorage->hasVariable(' + key + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_pus_set_variable = function(block) {
  var key = this.getFieldValue('KEY');
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || 0;
  return 'oxocard.persistentUserStorage->saveVariable(' + key + ', ' + value + ');\n';
};

Blockly.Arduino.oxocard_pus_get_variable = function(block) {
  var key = this.getFieldValue('KEY');
  var code = 'oxocard.persistentUserStorage->loadVariable(' + key + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_pus_delete_variable = function(block) {
  var key = this.getFieldValue('KEY');
  return 'oxocard.persistentUserStorage->deleteVariable(' + key + ');\n';
};
