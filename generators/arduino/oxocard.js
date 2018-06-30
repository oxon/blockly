'use strict';

goog.require('Blockly.Arduino');


Blockly.Arduino.oxocard_button_ispressed = function() {
  var dropdown_button = this.getFieldValue('BUTTON');
  var code = 'oxocard.button->isPressed(' + dropdown_button + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_update = function(block) {
	Blockly.Arduino.includes_['oxocard_flashscenario'] = '#include "flashscenario.h"';
	 return 'FlashScenario(&oxocard).run();\n';
};

Blockly.Arduino.oxocard_reboot = function(block) {
	 return 'oxocard.system->reboot();\n';
};

Blockly.Arduino.oxocard_turn_off = function(block) {
	 return 'oxocard.system->turnOff();\n';
};

Blockly.Arduino['oxocard_turn_off_with_buttons'] = function(block) {
	var valueL1 = this.getFieldValue("L1").toLowerCase();
	var valueL2 = this.getFieldValue("L2").toLowerCase();
	var valueL3 = this.getFieldValue("L3").toLowerCase();
	var valueR1 = this.getFieldValue("R1").toLowerCase();
	var valueR2 = this.getFieldValue("R2").toLowerCase();
	var valueR3 = this.getFieldValue("R3").toLowerCase();
	return 'oxocard.system->turnOff(\n'
		+ '  oxocard.button->createButtonByte(\n'
		+ '  ' + valueL1 + ', ' + valueL2 + ', ' + valueL3 + ',\t// L1, L2, L3\n'
		+ '  ' + valueR1 + ', ' + valueR2 + ', ' + valueR3 + ')\t// R1, R2, R3\n'
		+ ');\n';
};

Blockly.Arduino.oxocard_handle_auto_turnoff = function() {
  var timeout = Blockly.Arduino.valueToCode(this, 'TIMEOUT', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'AutoTurnOff::getInstance().configure(' + timeout + ');\n'
		+ 'AutoTurnOff::getInstance().enable();\n';
};

Blockly.Arduino.oxocard_disable_auto_turnoff = function(block) {
	 return 'AutoTurnOff::getInstance().disable();\n';
};

Blockly.Arduino.oxocard_read_battery_voltage = function(block) {
	var code = 'oxocard.battery->getVoltageInMillivolt()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_is_battery_fully_charged = function(block) {
	var code = 'oxocard.battery->isFullyCharged()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_is_usb_plugged_in = function(block) {
	var code = 'oxocard.battery->isUsbPluggedIn()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_read_temperature = function(block) {
	var code = '(int)(round(oxocard.accelerometer->getTemperature()))';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_connect_to_internet = function(block) {
	 return 'oxocard.wifi->autoConnect();\n';
};


Blockly.Arduino.oxocard_statemachine = function(block) {

	var defs = 'int statemachine_value = 0;\n';
	var code = '';
	console.log(block);
	console.log(block.stateCount_);

	for (var i = 0; i < block.states_.length; i++) {
		var stateName = block.states_[i].toUpperCase();
		defs = '#define STATE_'+ stateName + ' ' + i + '\n' + defs;

		var state_code = Blockly.Arduino.statementToCode(block, 'STATE' + i, Blockly.Arduino.ORDER_NONE);
		if(i > 0) code += 'else ';
		code += 'if(statemachine_value == ' + stateName + '){\n' + state_code + '\n}';
	}

	Blockly.Arduino.addDeclaration('STATEMENT_MACHINE', defs);
	return code += '\n';
};


/* ---------- Accelerometer ---------- */
Blockly.Arduino.oxocard_get_acceleration = function() {
  var dropdown_button = this.getFieldValue('AXIS');
  var code = 'oxocard.accelerometer->get' +dropdown_button +'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_is_orientation = function() {
  var dropdown_button = this.getFieldValue('DIRECTION');
  var code = 'oxocard.accelerometer->isOrientation(LIS3DE::' + dropdown_button +')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_set_cursor = function() {
	var posX = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_NONE);
	var posY = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_NONE);
	return 'oxocard.accelerometer->setRootCursor(' + posX + ',' + posY + ');\n';
};

Blockly.Arduino.oxocard_get_cursor_value = function() {
  var dropdown_button = this.getFieldValue('AXIS');
  var code = 'oxocard.accelerometer->getCursor' +dropdown_button +'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/* ---------- Weather ---------- */
Blockly.Arduino.oxocard_get_weather = function() {
  var dropdown_button = this.getFieldValue('CITY');
  return 'oxocard.weather->downloadWeatherForTown("' +dropdown_button +'");\n';
};

Blockly.Arduino.oxocard_weather_get_value = function() {
  var dropdown_button = this.getFieldValue('TYPE');
  var code = '(int)(round(oxocard.weather->get' + dropdown_button +'()))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_weather_get_and_draw_city = function() {
	var isBigFont = this.getFieldValue('BUTTON').toLowerCase();
	return 'oxocard.matrix->drawText(oxocard.weather->getName(), ' + isBigFont +');\n';
};

Blockly.Arduino.oxocard_weather_get_icon = function() {
  var code = 'oxocard.weather->getIcon()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/* ---------- Communication ---------- */
Blockly.Arduino.oxocard_comm_enable = function(block) {
	var name = Blockly.Arduino.quote_(block.getFieldValue('NAME'));
	return 'oxocard.communication->start(' + name + ');\n';
};

Blockly.Arduino.oxocard_comm_enable_with_name_and_id = function(block) {
	var name = Blockly.Arduino.quote_(block.getFieldValue('NAME'));
	var senderId = Blockly.Arduino.valueToCode(this, 'SENDER_ID', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'oxocard.communication->start(' + name + ', ' + senderId + ');\n';
};

Blockly.Arduino.oxocard_comm_disable = function(block) {
	return 'oxocard.communication->stop();\n';
};

Blockly.Arduino.oxocard_comm_wait_for_message = function(block) {
	return 'oxocard.communication->waitForMessages();\n';
};

Blockly.Arduino.oxocard_comm_wait_for_message_timeout = function() {
	var timeout = Blockly.Arduino.valueToCode(this, 'TIMEOUT', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'oxocard.communication->waitForMessages(' + timeout + ');\n';
};

Blockly.Arduino.oxocard_comm_wait_for_message_timeout_ms = function() {
	var timeout = Blockly.Arduino.valueToCode(this, 'TIMEOUT', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'oxocard.communication->waitForMessagesInMilliseconds(' + timeout + ');\n';
};

// DIRECT
Blockly.Arduino.oxocard_comm_send_direct_message = function(block) {
	var msg = Blockly.Arduino.quote_(block.getFieldValue('MSG'));
	var receiver = Blockly.Arduino.quote_(block.getFieldValue('RECEIVER'));
	return 'oxocard.communication->sendDirectMessage(' + msg + ', ' + receiver + ');\n';
};

Blockly.Arduino.oxocard_comm_send_direct_number = function(block) {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var receiver = Blockly.Arduino.quote_(block.getFieldValue('RECEIVER'));
	return 'oxocard.communication->sendDirectNumber(' + num + ', ' + receiver + ');\n';
};

Blockly.Arduino.oxocard_comm_check_for_direct = function(block) {
	var from = Blockly.Arduino.quote_(block.getFieldValue('FROM'));
	var code = 'oxocard.communication->isNewDirectMessageFrom(' + from + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_direct_message_from = function(block) {
	var msg = Blockly.Arduino.quote_(block.getFieldValue('MSG'));
	var from = Blockly.Arduino.quote_(block.getFieldValue('FROM'));
	var code = 'oxocard.communication->compareDirectMessageFrom(' + msg + ', ' + from + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_direct_message = function(block) {
	var msg = Blockly.Arduino.quote_(block.getFieldValue('MSG'));
	var code = 'oxocard.communication->compareDirectMessage(' + msg + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_direct_number_from = function(block) {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var from = Blockly.Arduino.quote_(block.getFieldValue('FROM'));
	var code = 'oxocard.communication->compareDirectNumberFrom(' + num + ', ' + from + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_direct_number = function() {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var code = 'oxocard.communication->compareDirectNumber(' + num + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_and_draw_direct_message_from = function(block) {
	var from = Blockly.Arduino.quote_(block.getFieldValue('FROM'));
	var isBigFont = this.getFieldValue('BUTTON').toLowerCase();
	return 'oxocard.matrix->drawText(\n'
		+ '  oxocard.communication->getDirectMessageFrom(' + from + '),\n'
		+ '  ' + isBigFont + '\n'
		+ ');\n';
};

Blockly.Arduino.oxocard_comm_get_direct_number_from = function(block) {
	var from = Blockly.Arduino.quote_(block.getFieldValue('FROM'));
	var code = 'oxocard.communication->getDirectNumberFrom(' + from + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_direct_number = function() {
	var code = 'oxocard.communication->getDirectNumber()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// EXPERT
Blockly.Arduino.oxocard_comm_send_broadcast_message = function(block) {
	var msg = Blockly.Arduino.quote_(block.getFieldValue('MSG'));
	var code = 'oxocard.communication->setText(' + msg + ');\n';
	code += 'oxocard.communication->sendMessage();\n';
	return code;
};

Blockly.Arduino.oxocard_comm_send_broadcast_number = function() {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'oxocard.communication->sendBroadcastNumber(' + num + ');\n';
};

Blockly.Arduino.oxocard_comm_check_for_broadcast = function() {
	var code = 'oxocard.communication->isNewMessage()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_broadcast_message = function(block) {
	var msg = Blockly.Arduino.quote_(block.getFieldValue('MSG'));
	var code = 'oxocard.communication->compareBroadcastMessage(' + msg + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_broadcast_number = function() {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var code = 'oxocard.communication->compareBroadcastNumber(' + num + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_and_draw_broadcast_message = function() {
	var n = this.getFieldValue('N');
	var isBigFont = this.getFieldValue('BUTTON').toLowerCase();
	return 'oxocard.matrix->drawText(oxocard.communication->getMessage(' + n + '), ' + isBigFont +');\n';
};

Blockly.Arduino.oxocard_comm_get_broadcast_number = function() {
	var n = this.getFieldValue('N');
  var code = 'oxocard.communication->getValue(' + n + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_set_sender_whitelist = function(block) {
	var name = Blockly.Arduino.quote_(block.getFieldValue('NAME'));
	return 'oxocard.communication->setSenderWhitelist(' + name + ');\n';
};

Blockly.Arduino.oxocard_comm_set_receiver_list = function(block) {
	var name = Blockly.Arduino.quote_(block.getFieldValue('NAME'));
	return 'oxocard.communication->setReceiverList(' + name + ');\n';
};

Blockly.Arduino.oxocard_comm_set_user_message = function(block) {
	var text = Blockly.Arduino.quote_(block.getFieldValue('TEXT'));
	return 'oxocard.communication->setText(' + text + ');\n';
};

Blockly.Arduino.oxocard_comm_set_user_value = function(block) {
	var key = this.getFieldValue('KEY');
	var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'oxocard.communication->setValue(' + key + ', ' + value + ');\n';
};

Blockly.Arduino.oxocard_comm_send_message = function() {
	return 'oxocard.communication->sendMessage();\n';
};

Blockly.Arduino.oxocard_comm_check_sender = function(block) {
	var name = Blockly.Arduino.quote_(block.getFieldValue('NAME'));
	var code = 'oxocard.communication->isMessageFrom(' + name + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
