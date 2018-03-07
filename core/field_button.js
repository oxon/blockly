// 'use strict';

goog.provide('Blockly.FieldButton');

goog.require('Blockly.Field');

Blockly.FieldButton = function(width, height, text, opt_validator) {
	Blockly.FieldButton.superClass_.constructor.call(this, '', opt_validator);
	this.fixedSize_ = {};
	this.size_.width = this.fixedSize_.width = width;
	this.size_.height = this.fixedSize_.height = height;
	
	this.text_ = text;
};

goog.inherits(Blockly.FieldButton, Blockly.Field);

Blockly.FieldButton.prototype.text_ = 'L1';
Blockly.FieldButton.prototype.EDITABLE = true;
Blockly.FieldButton.prototype.CURSOR = 'pointer';

Blockly.FieldButton.prototype.state_ = false;


Blockly.FieldButton.prototype.init = function() {
	if (this.fieldGroup_) {
		// Field has already been initialized once.
		return;
	}
	// Build the DOM.
	this.fieldGroup_ = Blockly.utils.createSvgElement('g', {}, null);
	if (!this.visible_) {
		this.fieldGroup_.style.display = 'none';
	}
	
	this.customXSpacing=14;
	this.borderRect_ = Blockly.utils.createSvgElement('rect',
		{'rx': 10,
		'ry': 10,
		'x': 0,
		'y': 0,
		'height': this.size_.height,
		'style': 'fill: #444',
		'fill-opacity': 1}, this.fieldGroup_);
	/** @type {!Element} */
	this.textElement_ = Blockly.utils.createSvgElement('text',
		{'class': 'blocklyText', 'x': this.size_.width/2 - 8, 'y': this.size_.height/2 + 6,
		'style': 'fill: #fff'},
		this.fieldGroup_);
		
	this.updateEditable();
	this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_);
	this.mouseDownWrapper_ = Blockly.bindEventWithChecks_(
		this.fieldGroup_,
		'mousedown',
		this,
		this.onMouseDown_
	);
	// Force a render.
	this.render_();
};


Blockly.FieldButton.prototype.updateWidth = function() {
	this.size_.width = this.fixedSize_.width;
	if (this.borderRect_) {
		this.borderRect_.setAttribute('width', this.size_.width);
	}
};

Blockly.FieldButton.prototype.onMouseDown_ = function(e) {
	if (!this.sourceBlock_ || !this.sourceBlock_.workspace) {
		return;
	}
	var gesture = this.sourceBlock_.workspace.getGesture(e);
	if (gesture) {
		if (Blockly.Events.isEnabled()) {
			Blockly.Events.fire(
				new Blockly.Events.Change(this.sourceBlock_, 'field', this.name, this.state_, !this.state_)
			);
		}
		this.state_ = !this.state_;
		if (this.borderRect_) {
			if(this.state_){
				this.borderRect_.style.fill = '#fff';
				this.textElement_.style.fill = '#000'
			} else {
				this.borderRect_.style.fill = '#444';
				this.textElement_.style.fill = '#fff'
			}
		}
	}
};

/**
 * Return 'TRUE' if the button is checked, 'FALSE' otherwise.
 * @return {string} Current state.
 */
Blockly.FieldButton.prototype.getValue = function() {
  return String(this.state_).toUpperCase();
};
