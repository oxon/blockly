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
		+ ');\n'
};

Blockly.Arduino.oxocard_handle_auto_turnoff = function() {
  var timeout = Blockly.Arduino.valueToCode(this, 'TIMEOUT', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'AutoTurnOff::getInstance().configureAutoTurnOff(' + timeout + ');\n'
		+ 'AutoTurnOff::getInstance().enableAutoTurnOff();\n';
};

Blockly.Arduino.oxocard_disable_auto_turnoff = function(block) {
	 return 'AutoTurnOff::getInstance().disableAutoTurnOff();\n';
};

Blockly.Arduino.oxocard_read_battery_voltage = function(block) {
	var code = 'oxocard.system->readBatteryVoltage()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_is_battery_fully_charged = function(block) {
	var code = 'oxocard.system->isBatteryFullyCharged()';
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
  var code = 'oxocard.weather->get' +dropdown_button +'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_weather_get_city = function() {;
  var code = 'oxocard.weather->getName()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
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

// DIRECT
Blockly.Arduino.oxocard_comm_send_direct_message = function(block) {
	var msg = Blockly.Arduino.valueToCode(this, 'MSG', Blockly.Arduino.ORDER_NONE) ||  '""' ;
	var receiver = Blockly.Arduino.valueToCode(this, 'RECEIVER', Blockly.Arduino.ORDER_NONE) ||  '""' ;
	return 'oxocard.communication->sendDirectMessage(' + msg + ', ' + receiver + ');\n';
};

Blockly.Arduino.oxocard_comm_send_direct_number = function() {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var receiver = Blockly.Arduino.valueToCode(this, 'RECEIVER', Blockly.Arduino.ORDER_NONE) ||  '""' ;
	return 'oxocard.communication->sendDirectNumber(' + num + ', ' + receiver + ');\n';
};

Blockly.Arduino.oxocard_comm_send_direct_message_and_number = function(block) {
	var msg = Blockly.Arduino.valueToCode(this, 'MSG', Blockly.Arduino.ORDER_NONE) ||  '""' ;
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var receiver = Blockly.Arduino.valueToCode(this, 'RECEIVER', Blockly.Arduino.ORDER_NONE) ||  '""' ;
	return 'oxocard.communication->sendDirectMessageAndNumber(\n  ' + msg + ',\n  ' + num + ',\n  ' + receiver + '\n);\n';
};

Blockly.Arduino.oxocard_comm_check_for_direct = function() {
	var code = 'oxocard.communication->isDirectMessageAndNotFiltered()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_direct_message_from = function() {
	var msg = Blockly.Arduino.valueToCode(this, 'MSG', Blockly.Arduino.ORDER_NONE) ||  '""' ;
	var from = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_NONE) ||  '""' ;
	var code = 'oxocard.communication->compareDirectMessageFrom(' + msg + ', ' + from + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_direct_message = function() {
	var msg = Blockly.Arduino.valueToCode(this, 'MSG', Blockly.Arduino.ORDER_NONE) ||  '""' ;
	var code = 'oxocard.communication->compareDirectMessage(' + msg + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_direct_number = function() {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var code = 'oxocard.communication->compareDirectNumber(' + num + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_direct_message = function() {
  var code = 'oxocard.communication->getDirectMessage()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_direct_number = function() {
  var code = 'oxocard.communication->getDirectNumber()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_direct_message = function() {
  var code = 'oxocard.communication->getDirectMessage()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_direct_number = function() {
  var code = 'oxocard.communication->getDirectNumber()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// BROADCAST
Blockly.Arduino.oxocard_comm_send_broadcast_message = function(block) {
	var msg = Blockly.Arduino.valueToCode(this, 'MSG', Blockly.Arduino.ORDER_NONE) ||  '""' ;
	return 'oxocard.communication->sendBroadcastMessage(' + msg + ');\n';
};

Blockly.Arduino.oxocard_comm_send_broadcast_number = function() {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'oxocard.communication->sendBroadcastNumber(' + num + ');\n';
};

Blockly.Arduino.oxocard_comm_send_broadcast_message_and_number = function(block) {
	var msg = Blockly.Arduino.valueToCode(this, 'MSG', Blockly.Arduino.ORDER_NONE) ||  '""' ;
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	return 'oxocard.communication->sendBroadcastMessageAndNumber(' + msg + ', ' + num + ');\n';
};

Blockly.Arduino.oxocard_comm_check_for_broadcast = function() {
	var code = 'oxocard.communication->isBroadcastMessage()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_broadcast_message = function() {
	var msg = Blockly.Arduino.valueToCode(this, 'MSG', Blockly.Arduino.ORDER_NONE) ||  '""' ;
	var code = 'oxocard.communication->compareBroadcastMessage(' + msg + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_compare_broadcast_number = function() {
	var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 0;
	var code = 'oxocard.communication->compareBroadcastNumber(' + num + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_broadcast_message = function() {
  var code = 'oxocard.communication->getBroadcastMessage()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.oxocard_comm_get_broadcast_number = function() {
  var code = 'oxocard.communication->getBroadcastNumber()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
