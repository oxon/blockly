'use strict';

goog.provide('Blockly.Arduino.time');

goog.require('Blockly.Arduino');


/**
 * Code generator for the delay Arduino block.
 * Arduino code: loop { delay(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.Arduino['oxocard_time_delay'] = function(block) {
  var delayTime = Blockly.Arduino.valueToCode(
      block, 'DELAY_TIME_MILI', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'delay(' + delayTime + ');\n';
  return code;
};

Blockly.Arduino.oxocard_time_get_millis = function() {
  var code = 'millis()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_set_time_zone = function() {
	var timeZone = this.getFieldValue('ZONE');
	return 'oxocard.clock->setTimeZone(' + timeZone + ');\n';
};

Blockly.Arduino.oxocard_time_get_value = function() {
  var valueType = this.getFieldValue('TYPE');
  var code = 'oxocard.clock->get' + valueType + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_time_set_manual = function() {
	var code = 'oxocard.clock->setManualTime(';
	var h = Blockly.Arduino.valueToCode(this, 'H', Blockly.Arduino.ORDER_NONE);
	var m = Blockly.Arduino.valueToCode(this, 'M', Blockly.Arduino.ORDER_NONE);
	var s = Blockly.Arduino.valueToCode(this, 'S', Blockly.Arduino.ORDER_NONE);
	return code += h + ', ' + m + ', ' + s + ');\n';
};