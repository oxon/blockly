'use strict';

goog.require('Blockly.Arduino');


Blockly.Arduino.oxocard_button_ispressed = function() {
  var dropdown_button = this.getFieldValue('BUTTON');
  var code = 'oxocard.button->isPressed(' + dropdown_button + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_button_waitforpressed = function() {
	var dropdown_button = this.getFieldValue('BUTTON');
	return 'oxocard.button->waitForPressed(' + dropdown_button + ')';
  };

Blockly.Arduino.oxocard_update = function() {
	Blockly.Arduino.includes_['oxocard_flashscenario'] = '#include "flashscenario.h"';
	 return 'FlashScenario(&oxocard).run();\n';
};

Blockly.Arduino.oxocard_reboot = function() {
	 return 'oxocard.system->reboot();\n';
};

Blockly.Arduino.oxocard_turn_off = function() {
	 return 'oxocard.system->turnOff();\n';
};

Blockly.Arduino['oxocard_turn_off_with_buttons'] = function() {
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

Blockly.Arduino.oxocard_disable_auto_turnoff = function() {
	 return 'AutoTurnOff::getInstance().disable();\n';
};

Blockly.Arduino.oxocard_read_battery_voltage = function() {
	var code = 'oxocard.battery->getVoltageInMillivolt()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_is_battery_fully_charged = function() {
	var code = 'oxocard.battery->isFullyCharged()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_is_usb_plugged_in = function() {
	var code = 'oxocard.battery->isUsbPluggedIn()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_read_temperature = function() {
	var code = '(int)(round(oxocard.accelerometer->getTemperature()))';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_connect_to_internet = function() {
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
	// var name = Blockly.Arduino.quote_(block.getFieldValue('NAME'));
	// return 'oxocard.communication->start(' + name + ');\n';
	return 'oxocard.communication->start();\n';
};

Blockly.Arduino.oxocard_comm_disable = function() {
	return 'oxocard.communication->stop();\n';
};

Blockly.Arduino.oxocard_comm_wait_for_message = function() {
	return 'oxocard.communication->waitForMessage();\n';
};

Blockly.Arduino.oxocard_comm_wait_for_message_timeout = function() {
	var timeout = Blockly.Arduino.valueToCode(this, 'TIMEOUT', Blockly.Arduino.ORDER_ATOMIC) || 0;
	if (timeout > 65535) timeout = 65535;
	return 'oxocard.communication->waitForMessage(' + timeout + ');\n';
};

// DIRECT
Blockly.Arduino.oxocard_comm_send_direct_message = function(block) {
	var msg = Blockly.Arduino.quote_(block.getFieldValue('MSG'));
	var receiver = Blockly.Arduino.quote_(block.getFieldValue('RECEIVER'));
	return 'oxocard.communication->sendText(' + receiver + ', ' + msg + ');\n';
};

Blockly.Arduino.oxocard_comm_send_direct_number = function(block) {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var receiver = Blockly.Arduino.quote_(block.getFieldValue('RECEIVER'));
	return 'oxocard.communication->sendVariable(' + receiver + ', \"a\", ' + num + ');\n';
};

Blockly.Arduino.oxocard_comm_check_for_direct = function(block) {
	var from = Blockly.Arduino.quote_(block.getFieldValue('FROM'));
	var code = '(oxocard.communication->hasNewMessage() && oxocard.communication->isSender(' + from + '))';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_direct_message_from = function(block) {
	var msg = Blockly.Arduino.quote_(block.getFieldValue('MSG'));
	var from = Blockly.Arduino.quote_(block.getFieldValue('FROM'));
	var code = '(oxocard.communication->isSender(' + from + ') && oxocard.communication->isText(' + msg + '))';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_direct_message = function(block) {
	var msg = Blockly.Arduino.quote_(block.getFieldValue('MSG'));
	var code = 'oxocard.communication->isText(' + msg + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_direct_number_from = function(block) {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var from = Blockly.Arduino.quote_(block.getFieldValue('FROM'));
	var code = '(oxocard.communication->isSender(' + from + ') && oxocard.communication->isVariable(\"a\", ' + num + '))';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_direct_number = function() {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var code = 'oxocard.communication->isVariable(\"a\", ' + num + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_and_draw_direct_message_from = function(block) {
	var from = Blockly.Arduino.quote_(block.getFieldValue('FROM'));
	var isBigFont = this.getFieldValue('BUTTON').toLowerCase();
	return 'if (oxocard.communication->isSender(' + from + ')) {\n'
		+ '  oxocard.matrix->drawText(oxocard.communication->getText(), ' + isBigFont + ');\n'
		+ '}\n';
};

Blockly.Arduino.oxocard_comm_get_direct_number_from = function(block) {
	var from = Blockly.Arduino.quote_(block.getFieldValue('FROM'));
	var code = '(oxocard.communication->isSender(' + from + ') ? oxocard.communication->getVariable(\"a\") : 0)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_direct_number = function() {
	var code = 'oxocard.communication->getVariable(\"a\")';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// EXPERT
Blockly.Arduino.oxocard_comm_send_broadcast_message = function(block) {
	var msg = Blockly.Arduino.quote_(block.getFieldValue('MSG'));
	return 'oxocard.communication->sendText(\"*\", ' + msg + ');\n';
};

Blockly.Arduino.oxocard_comm_send_broadcast_number = function() {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'oxocard.communication->sendVariable(\"*\", \"a\", ' + num + ');\n';
};

Blockly.Arduino.oxocard_comm_check_for_broadcast = function() {
	var code = 'oxocard.communication->hasNewMessage()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_broadcast_message = function(block) {
	var msg = Blockly.Arduino.quote_(block.getFieldValue('MSG'));
	var code = 'oxocard.communication->isText(' + msg + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_broadcast_number = function() {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var code = 'oxocard.communication->isVariable(\"a\", ' + num + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_and_draw_broadcast_message = function() {
	var isText = this.getFieldValue('B').toLowerCase();
	var isBigFont = this.getFieldValue('BUTTON').toLowerCase();
	var code = '';
	if (isText === 'true') code = 'oxocard.matrix->drawText(oxocard.communication->getText(), ' + isBigFont +');\n';
	else code = 'oxocard.matrix->drawText(oxocard.communication->getSender(), ' + isBigFont +');\n';
	return code;
};

Blockly.Arduino.oxocard_comm_get_broadcast_number = function() {
	var key = this.getFieldValue('KEY');
  var code = 'oxocard.communication->getVariable(' + key + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_set_receiver_list = function(block) {
	var name = Blockly.Arduino.quote_(block.getFieldValue('NAME'));
	return 'oxocard.communication->setReceivers(' + name + ');\n';
};

Blockly.Arduino.oxocard_comm_set_user_message = function(block) {
	var text = Blockly.Arduino.quote_(block.getFieldValue('TEXT'));
	return 'oxocard.communication->setText(' + text + ');\n';
};

Blockly.Arduino.oxocard_comm_set_user_value = function() {
	var key = this.getFieldValue('KEY');
	var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'oxocard.communication->setVariable(' + key + ', ' + value + ');\n';
};

Blockly.Arduino.oxocard_comm_send_message = function() {
	return 'oxocard.communication->sendMessage();\n';
};

Blockly.Arduino.oxocard_comm_send_message_to = function(block) {
	var receiver = Blockly.Arduino.quote_(block.getFieldValue('RECEIVER'));
	return 'oxocard.communication->setReceivers(' + receiver + ');\n'
		+ 'oxocard.communication->sendMessage();\n';
};

Blockly.Arduino.oxocard_comm_check_sender = function(block) {
	var name = Blockly.Arduino.quote_(block.getFieldValue('NAME'));
	var code = 'oxocard.communication->isSender(' + name + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_check_is_message_for_me = function() {
	// var code = 'oxocard.communication->isMessageForMe()';
	var code = 'oxocard.communication->hasNewMessage()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_message = function(block) {
	var msg = Blockly.Arduino.quote_(block.getFieldValue('MSG'));
	var code = 'oxocard.communication->isText(' + msg + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_clear_all_messages = function() {
	return 'oxocard.communication->clearAllReceivedMessages();\n';
};

Blockly.Arduino.oxocard_comm_set_communication_type = function() {
	var type = this.getFieldValue('TYPE');
	return 'oxocard.communication->change(' + type + ');\n';
};
