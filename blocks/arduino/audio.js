'use strict';

goog.provide('Blockly.Blocks.oxocard.audio');

goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.require('Blockly.ColorDefinitions');


Blockly.Blocks.oxocard_audio_wait_for_tone = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_WAIT_FOR_TONE_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_WAIT_FOR_TONE_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_wait_not_for_tone = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_WAIT_NOT_FOR_TONE_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_WAIT_NOT_FOR_TONE_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_set_volume = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendValueInput('VOL')
			.appendField(Blockly.Msg.OXOCARD_AUDIO_SET_VOLUME_TITLE).setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		// this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_SET_VOLUME_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_get_volume = {
  helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OXOCARD_AUDIO_GET_VOLUME_TITLE)
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_GET_VOLUME_TIP);
    this.setColour(Blockly.ColorDefinitions.AUDIO);
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks.oxocard_audio_volume_up = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_VOLUME_UP_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_VOLUME_UP_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_volume_down = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_VOLUME_DOWN_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_VOLUME_DOWN_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_set_octave = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_SET_OCTAVE_TITLE)
			.appendField(new Blockly.FieldDropdown([["C3", "C3"],
				["C4", "C4"], ["C5", "C5"], ["C6", "C6"],
				["C7", "C7"], ["C8", "C8"]]), "OCTAVE")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_SET_OCTAVE_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_set_waveform = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_SET_WAVEFORM_TITLE)
			.appendField(new Blockly.FieldDropdown(
				[[Blockly.Msg.OXOCARD_AUDIO_WAVE_SINE, "WAVE_SINE"],
				[Blockly.Msg.OXOCARD_AUDIO_WAVE_SQUARE, "WAVE_SQUARE"],
				[Blockly.Msg.OXOCARD_AUDIO_WAVE_SAWTOOTH, "WAVE_SAWTOOTH"],
				[Blockly.Msg.OXOCARD_AUDIO_WAVE_TRIANGLE, "WAVE_TRIANGLE"]]), "WAVEFORM")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_SET_WAVEFORM_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_set_bpm = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendValueInput('BPM')
			.appendField(Blockly.Msg.OXOCARD_AUDIO_SET_BPM_TITLE).setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		// this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_SET_BPM_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_wait = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_WAIT_TITLE)
			.appendField(new Blockly.FieldDropdown([["1/1", "NOTE_DUR_WHOLE"],
				["1/2", "NOTE_DUR_HALF"], ["1/4", "NOTE_DUR_QUARTER"],
				["1/8", "NOTE_DUR_EIGHTH"], ["1/16", "NOTE_DUR_SIXTEENTH"],
				["1/32", "NOTE_DUR_THIRTY_SECOND"]]), "DUR")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_WAIT_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_record_for = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_RECORD_FOR_TITLE)
			.appendField(new Blockly.FieldDropdown([["250ms", "250"],
				["500ms", "500"], ["1s", "1000"],
				["1.5s", "1500"], ["2s", "2000"],
				["2.5s", "2500"], ["3s", "3000"]]), "DUR")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_RECORD_FOR_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_play_recorded = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_PLAY_RECORDED_TITLE)
			.appendField(new Blockly.FieldDropdown([["1", "false"],
				["∞", "true"]]), "FOREVER")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_PLAY_RECORDED_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_wait_for_loud_noise = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_WAIT_FOR_LOUD_NOISE_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_WAIT_FOR_LOUD_NOISE_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_stop_tone = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_STOP_TONE_TITLE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_STOP_TONE_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_play_tone = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_TITLE)
			.appendField(new Blockly.FieldDropdown([["C", "C"], ["CS", "CS"],
				["D", "D"], ["DS", "DS"], ["E", "E"], ["F", "F"],
				["FS", "FS"], ["G", "G"], ["GS", "GS"], ["A", "A"],
				["AS", "AS"], ["B", "B"], ["REST", "REST"]]), "NOTE")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_play_tone_dur_ms = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_TITLE)
			.appendField(new Blockly.FieldDropdown([["C", "C"], ["CS", "CS"],
				["D", "D"], ["DS", "DS"], ["E", "E"], ["F", "F"],
				["FS", "FS"], ["G", "G"], ["GS", "GS"], ["A", "A"],
				["AS", "AS"], ["B", "B"], ["REST", "REST"]]), "NOTE")
		this.appendValueInput('DUR').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_play_tone_dur = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_TITLE)
			.appendField(new Blockly.FieldDropdown([["C", "C"], ["CS", "CS"],
				["D", "D"], ["DS", "DS"], ["E", "E"], ["F", "F"],
				["FS", "FS"], ["G", "G"], ["GS", "GS"], ["A", "A"],
				["AS", "AS"], ["B", "B"], ["REST", "REST"]]), "NOTE")
			.appendField(new Blockly.FieldDropdown([["1/1", "NOTE_DUR_WHOLE"],
				["1/2", "NOTE_DUR_HALF"], ["1/4", "NOTE_DUR_QUARTER"],
				["1/8", "NOTE_DUR_EIGHTH"], ["1/16", "NOTE_DUR_SIXTEENTH"],
				["1/32", "NOTE_DUR_THIRTY_SECOND"]]), "DUR")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_play_tone_hz = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendValueInput('FRQ')
			.appendField(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_HZ_TITLE)
			.setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_HZ_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_play_tone_hz_dur_ms = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendValueInput('FRQ')
			.appendField(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_HZ_TITLE)
			.setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput('DUR').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_HZ_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_play_tone_hz_dur = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendValueInput('FRQ')
			.appendField(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_HZ_TITLE)
			.setCheck('Number')
		this.appendDummyInput().appendField(new Blockly.FieldDropdown([["1/1", "NOTE_DUR_WHOLE"],
				["1/2", "NOTE_DUR_HALF"], ["1/4", "NOTE_DUR_QUARTER"],
				["1/8", "NOTE_DUR_EIGHTH"], ["1/16", "NOTE_DUR_SIXTEENTH"],
				["1/32", "NOTE_DUR_THIRTY_SECOND"]]), "DUR")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_HZ_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};

Blockly.Blocks.oxocard_audio_play_sound_effect = {
	helpUrl: 'http://www.oxocard.ch/oxocard-befehle/',
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OXOCARD_AUDIO_PLAY_SOUND_EFFECT_TITLE)
			.appendField(new Blockly.FieldDropdown([
				["Alarm", "alarm"],
				["Baby sneeze", "baby_sneeze"],
				["Bee", "bee"],
				["Cannon", "cannon"],
				["Choo choo", "choo_choo"],
				["Cling", "cling"],
				["Crash", "crash"],
				["Crickets", "crickets"],
				["Cuckoo clock", "cuckoo_clock"],
				["Firecrackers", "firecrackers"],
				["Flute", "flute"],
				["Jungle", "jungle"],
				["Knife throw", "knife_throw"],
				["Open can", "open_can"],
				["Pew", "pew"],
				["Phone", "phone"],
				["Pling", "pling"],
				["Pool shot", "pool_shot"],
				["Rifle", "rifle"],
				["Sirene", "sirene"],
				["Slap", "slap"],
				["Spin jump", "spin_jump"],
				["Spurs", "spurs"],
				["Turkey", "turkey"],
				["Water", "water"]
			]), "SOUND")
			.appendField(new Blockly.FieldDropdown([
				["1", "false"],
				["∞", "true"]
			]), "FOREVER")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OXOCARD_AUDIO_PLAY_SOUND_EFFECT_TIP);
		this.setColour(Blockly.ColorDefinitions.AUDIO);
	}
};
