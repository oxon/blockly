/**
 * @license
 * Visual Blocks Language
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

/**
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 *
 * After modifying this file, either run "build.py" from the parent directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq.json, and they show up in the translation console.
 */

/// {{Notranslate}} Hue value for all logic blocks.
Blockly.Msg.LOGIC_HUE = '210';
/// {{Notranslate}} Hue value for all loop blocks.
Blockly.Msg.LOOPS_HUE = '120';
/// {{Notranslate}} Hue value for all math blocks.
Blockly.Msg.MATH_HUE = '230';
/// {{Notranslate}} Hue value for all text blocks.
Blockly.Msg.TEXTS_HUE = '160';
/// {{Notranslate}} Hue value for all list blocks.
Blockly.Msg.LISTS_HUE = '260';
/// {{Notranslate}} Hue value for all colour blocks.
Blockly.Msg.COLOUR_HUE = '20';
/// {{Notranslate}} Hue value for all variable blocks.
Blockly.Msg.VARIABLES_HUE = '330';
/// {{Notranslate}} Hue value for all variable dynamic blocks.
Blockly.Msg.VARIABLES_DYNAMIC_HUE = '310';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.PROCEDURES_HUE = '290';

/// default name - A simple, general default name for a variable, preferably short.
/// For more context, see
/// [[Translating:Blockly#infrequent_message_types]].\n{{Identical|Item}}
Blockly.Msg.VARIABLES_DEFAULT_NAME = 'item';
/// button text - Button that sets a calendar to today's date.\n{{Identical|Today}}
Blockly.Msg.TODAY = 'Today';

// Context menus.
/// context menu - Make a copy of the selected block (and any blocks it contains).\n{{Identical|Duplicate}}
Blockly.Msg.DUPLICATE_BLOCK = 'Duplicate';
/// context menu - Add a descriptive comment to the selected block.
Blockly.Msg.ADD_COMMENT = 'Add Comment';
/// context menu - Remove the descriptive comment from the selected block.
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
/// context menu - Change from 'external' to 'inline' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.EXTERNAL_INPUTS = 'External Inputs';
/// context menu - Change from 'internal' to 'external' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.INLINE_INPUTS = 'Inline Inputs';
/// context menu - Permanently delete the selected block.
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
/// context menu - Permanently delete the %1 selected blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
/// confirmation prompt - Question the user if they really wanted to permanently delete all %1 blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
/// context menu - Reposition all the blocks so that they form a neat line.
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
/// context menu - Make the appearance of the selected block smaller by hiding some information about it.
Blockly.Msg.COLLAPSE_BLOCK = 'Collapse Block';
/// context menu - Make the appearance of all blocks smaller by hiding some information about it.  Use the same terminology as in the previous message.
Blockly.Msg.COLLAPSE_ALL = 'Collapse Blocks';
/// context menu - Restore the appearance of the selected block by showing information about it that was hidden (collapsed) earlier.
Blockly.Msg.EXPAND_BLOCK = 'Expand Block';
/// context menu - Restore the appearance of all blocks by showing information about it that was hidden (collapsed) earlier.  Use the same terminology as in the previous message.
Blockly.Msg.EXPAND_ALL = 'Expand Blocks';
/// context menu - Make the selected block have no effect (unless reenabled).
Blockly.Msg.DISABLE_BLOCK = 'Disable Block';
/// context menu - Make the selected block have effect (after having been disabled earlier).
Blockly.Msg.ENABLE_BLOCK = 'Enable Block';
/// context menu - Provide helpful information about the selected block.\n{{Identical|Help}}
Blockly.Msg.HELP = 'Help';
/// context menu - Undo the previous action.\n{{Identical|Undo}}
Blockly.Msg.UNDO = 'Undo';
/// context menu - Undo the previous undo action.\n{{Identical|Redo}}
Blockly.Msg.REDO = 'Redo';

// Variable renaming.
/// prompt - This message is only seen in the Opera browser.  With most browsers, users can edit numeric values in blocks by just clicking and typing.  Opera does not allows this, so we have to open a new window and prompt users with this message to chanage a value.
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
/// dropdown choice - When the user clicks on a variable block, this is one of the dropdown menu choices.  It is used to rename the current variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.RENAME_VARIABLE = 'Rename variable...';
/// prompt - Prompts the user to enter the new name for the selected variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].\n\nParameters:\n* %1 - the name of the variable to be renamed.
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';

// Variable creation
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_VARIABLE = 'Create variable...';
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_STRING_VARIABLE = 'Create string variable...';
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_NUMBER_VARIABLE = 'Create number variable...';
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_COLOUR_VARIABLE = 'Create colour variable...';
/// prompt - Prompts the user to enter the type for a variable.
Blockly.Msg.NEW_VARIABLE_TYPE_TITLE = 'New variable type:';
/// prompt - Prompts the user to enter the name for a new variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
/// alert - Tells the user that the name they entered is already in use.
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
/// alert - Tells the user that the name they entered is already in use for another type.
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another type: "%2".';

// Variable deletion.
/// confirm -  Ask the user to confirm their deletion of multiple uses of a variable.
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
/// alert - Tell the user that they can't delete a variable because it's part of the definition of a function.
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
/// dropdown choice - Delete the currently selected variable.
Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Colour Blocks.
/// {{Optional}} url - Information about colour.
Blockly.Msg.COLOUR_PICKER_HELPURL = 'https://en.wikipedia.org/wiki/Color';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette].
Blockly.Msg.COLOUR_PICKER_TOOLTIP = 'Choose a colour from the palette.';
/// {{Optional}} url - A link that displays a random colour each time you visit it.
Blockly.Msg.COLOUR_RANDOM_HELPURL = 'http://randomcolour.com';
/// block text - Title of block that generates a colour at random.
Blockly.Msg.COLOUR_RANDOM_TITLE = 'random colour';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#generating-a-random-colour https://github.com/google/blockly/wiki/Colour#generating-a-random-colour].
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = 'Choose a colour at random.';
/// {{Optional}} url - A link for color codes with percentages (0-100%) for each component, instead of the more common 0-255, which may be more difficult for beginners.
Blockly.Msg.COLOUR_RGB_HELPURL = 'http://www.december.com/html/spec/colorper.html';
/// block text - Title of block for [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TITLE = 'colour with';
/// block input text - The amount of red (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Red}}
Blockly.Msg.COLOUR_RGB_RED = 'red';
/// block input text - The amount of green (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_GREEN = 'green';
/// block input text - The amount of blue (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Blue}}
Blockly.Msg.COLOUR_RGB_BLUE = 'blue';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TOOLTIP = 'Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.';
/// {{Optional}} url - A useful link that displays blending of two colors.
Blockly.Msg.COLOUR_BLEND_HELPURL = 'http://meyerweb.com/eric/tools/color-blend/';
/// block text - A verb for blending two shades of paint.
Blockly.Msg.COLOUR_BLEND_TITLE = 'blend';
/// block input text - The first of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR1 = 'colour 1';
/// block input text - The second of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR2 = 'colour 2';
/// block input text - The proportion of the [https://github.com/google/blockly/wiki/Colour#blending-colours blend] containing the first color; the remaining proportion is of the second colour.  For example, if the first colour is red and the second color blue, a ratio of 1 would yield pure red, a ratio of .5 would yield purple (equal amounts of red and blue), and a ratio of 0 would yield pure blue.\n{{Identical|Ratio}}
Blockly.Msg.COLOUR_BLEND_RATIO = 'ratio';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#blending-colours https://github.com/google/blockly/wiki/Colour#blending-colours].
Blockly.Msg.COLOUR_BLEND_TOOLTIP = 'Blends two colours together with a given ratio (0.0 - 1.0).';

// Loop Blocks.
/// {{Optional}} url - Describes 'repeat loops' in computer programs; consider using the translation of the page [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_REPEAT_HELPURL = 'https://en.wikipedia.org/wiki/For_loop';
/// block input text - Title of [https://github.com/google/blockly/wiki/Loops#repeat repeat block].\n\nParameters:\n* %1 - the number of times the body of the loop should be repeated.
Blockly.Msg.CONTROLS_REPEAT_TITLE = 'repeat %1 times';
/// block text - Preceding the blocks in the body of the loop.  See [https://github.com/google/blockly/wiki/Loops https://github.com/google/blockly/wiki/Loops].\n{{Identical|Do}}
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = 'do';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat https://github.com/google/blockly/wiki/Loops#repeat].
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.';
/// {{Optional}} url - Describes 'while loops' in computer programs; consider using the translation of [https://en.wikipedia.org/wiki/While_loop https://en.wikipedia.org/wiki/While_loop], if present, or [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = 'https://github.com/google/blockly/wiki/Loops#repeat';
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-while repeat while] the following condition is true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'repeat while';
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-until repeat until] the following condition becomes true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'repeat until';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-until https://github.com/google/blockly/wiki/Loops#repeat-until].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';

/// {{Optional}} url - Describes 'for loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/For_loop https://en.wikipedia.org/wiki/For_loop], if present.
Blockly.Msg.CONTROLS_FOR_HELPURL = 'https://github.com/google/blockly/wiki/Loops#count-with';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#count-with https://github.com/google/blockly/wiki/Loops#count-with].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOR_TOOLTIP = 'Have the given variable take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.';
/// block text - Repeatedly counts a variable (%1)
/// starting with a (usually lower) number in a range (%2),
/// ending with a (usually higher) number in a range (%3), and counting the
/// iterations by a number of steps (%4).  As in
/// [https://github.com/google/blockly/wiki/Loops#count-with
/// https://github.com/google/blockly/wiki/Loops#count-with].
/// [[File:Blockly-count-with.png]]
Blockly.Msg.CONTROLS_FOR_TITLE = 'count with %1 from %2 to %3 by %4';
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

/// {{Optional}} url - Describes 'for-each loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Foreach https://en.wikipedia.org/wiki/Foreach] if present.
Blockly.Msg.CONTROLS_FOREACH_HELPURL = 'https://github.com/google/blockly/wiki/Loops#for-each';
/// block text - Title of [https://github.com/google/blockly/wiki/Loops#for-each for each block].
/// Sequentially assigns every item in array %2 to the valiable %1.
Blockly.Msg.CONTROLS_FOREACH_TITLE = 'for each item %1 in list %2';
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/// block text - Description of [https://github.com/google/blockly/wiki/Loops#for-each for each blocks].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = 'For each item in a list, set the variable "%1" to the item, and then do some statements.';

/// {{Optional}} url - Describes control flow in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow], if it exists.
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = 'https://github.com/google/blockly/wiki/Loops#loop-termination-blocks';
/// dropdown - The current loop should be exited.  See [https://github.com/google/blockly/wiki/Loops#break https://github.com/google/blockly/wiki/Loops#break].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out of loop';
/// dropdown - The current iteration of the loop should be ended and the next should begin.  See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration of loop';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#break-out-of-loop https://github.com/google/blockly/wiki/Loops#break-out-of-loop].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and continue with the next iteration.';
/// warning - The user has tried placing a block outside of a loop (for each, while, repeat, etc.), but this type of block may only be used within a loop.  See [https://github.com/google/blockly/wiki/Loops#loop-termination-blocks https://github.com/google/blockly/wiki/Loops#loop-termination-blocks].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning: This block may only be used within a loop.';

// Logic Blocks.
/// {{Optional}} url - Describes conditional statements (if-then-else) in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_else https://en.wikipedia.org/wiki/If_else], if present.
Blockly.Msg.CONTROLS_IF_HELPURL = 'https://github.com/google/blockly/wiki/IfElse';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-blocks 'if' blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-blocks if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements. Otherwise, do the second block of statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-blocks if-else-if blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-else-blocks if-else-if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].
/// It is recommended, but not essential, that this have text in common with the translation of 'else if'\n{{Identical|If}}
Blockly.Msg.CONTROLS_IF_MSG_IF = 'if';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English words "otherwise if" would probably be clearer than "else if", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = 'else if';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English word "otherwise" would probably be superior to "else", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSE = 'else';
Blockly.Msg.CONTROLS_IF_MSG_THEN = 'then';
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this if block.';
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
/// tooltip - Describes the 'else if' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
/// tooltip - Describes the 'else' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';

/// button text - Text on a button inside a dialogue window, which will accept or acknowledge the contents of the dialogue when pressed.\n{{Identical|OK}}
Blockly.Msg.IOS_OK = 'OK';
/// button text - Text on a button inside a dialogue window, which will close or cancel the dialogue when pressed.\n{{Identical|Cancel}}
Blockly.Msg.IOS_CANCEL = 'Cancel';
/// alert - Title text for an error dialogue.\n{{Identical|Error}}
Blockly.Msg.IOS_ERROR = 'Error';
/// header text - Title of a section that displays a list of parameters (aka. "inputs") that have been defined for a procedure. This is used inside a dialogue window to configure a procedure.\n{{Identical|Input}}
Blockly.Msg.IOS_PROCEDURES_INPUTS = 'INPUTS';
/// button text - Text on a button which will add a parameter (aka. "input") to a procedure. This is used inside a dialogue window to configure a procedure. NOTE: The "+" should be preserved at the beginning of the text.
Blockly.Msg.IOS_PROCEDURES_ADD_INPUT = '+ Add Input';
/// option text - Text describing an option to allow statements to be added within a procedure. This is used inside a dialogue window to configure a procedure.
Blockly.Msg.IOS_PROCEDURES_ALLOW_STATEMENTS = 'Allow statements';
/// alert - Error message when duplicate parameters (aka. "inputs") have been defined on a procedure. This is used inside a dialogue window to configure procedure parameters.
Blockly.Msg.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = 'This function has duplicate inputs.';
/// button text - Text on a button which will open a variable creation dialogue when pressed. NOTE: The "+" should be preserved at the beginning of the text.
Blockly.Msg.IOS_VARIABLES_ADD_VARIABLE = '+ Add Variable';
/// button text - Text on a button inside a variable creation dialogue, which will add a variable when pressed.\n{{Identical|Add}}
Blockly.Msg.IOS_VARIABLES_ADD_BUTTON = 'Add';
/// button text - Text on a button inside a variable rename dialogue, which will rename a variable when pressed.\n{{Identical|Rename}}
Blockly.Msg.IOS_VARIABLES_RENAME_BUTTON = 'Rename';
/// button text - Text on a button inside a variable deletion dialogue, which will delete a variable when pressed.\n{{Identical|Delete}}
Blockly.Msg.IOS_VARIABLES_DELETE_BUTTON = 'Delete';
/// placeholder text - Placeholder text used inside a text input, where a variable name should be entered.
Blockly.Msg.IOS_VARIABLES_VARIABLE_NAME = 'Variable name';
/// alert - Error message that is displayed when the user attempts to create a variable without a name.
Blockly.Msg.IOS_VARIABLES_EMPTY_NAME_ERROR = 'You can\'t use an empty variable name.';

/// {{Optional}} url - Information about comparisons.
Blockly.Msg.LOGIC_COMPARE_HELPURL = 'https://en.wikipedia.org/wiki/Inequality_(mathematics)';
/// tooltip - Describes the equals (=) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = 'Returns true if both inputs equal each other.';
/// tooltip - Describes the not equals (≠) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = 'Returns true if both inputs are not equal to each other.';
/// tooltip - Describes the less than (<) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = 'Returns true if the first input is smaller than the second input.';
/// tooltip - Describes the less than or equals (≤) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = 'Returns true if the first input is smaller than or equal to the second input.';
/// tooltip - Describes the greater than (>) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = 'Returns true if the first input is greater than the second input.';
/// tooltip - Describes the greater than or equals (≥) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = 'Returns true if the first input is greater than or equal to the second input.';

/// {{Optional}} url - Information about the Boolean conjunction ("and") and disjunction ("or") operators.  Consider using the translation of [https://en.wikipedia.org/wiki/Boolean_logic https://en.wikipedia.org/wiki/Boolean_logic], if it exists in your language.
Blockly.Msg.LOGIC_OPERATION_HELPURL = 'https://github.com/google/blockly/wiki/Logic#logical-operations';
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = 'Returns true if both inputs are true.';
/// block text - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].\n{{Identical|And}}
Blockly.Msg.LOGIC_OPERATION_AND = 'and';
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = 'Returns true if at least one of the inputs is true.';
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].\n{{Identical|Or}}
Blockly.Msg.LOGIC_OPERATION_OR = 'or';

/// {{Optional}} url - Information about logical negation.  The translation of [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation] is recommended if it exists in the target language.
Blockly.Msg.LOGIC_NEGATE_HELPURL = 'https://github.com/google/blockly/wiki/Logic#not';
/// block text - This is a unary operator that returns ''false'' when the input is ''true'', and ''true'' when the input is ''false''.
/// \n\nParameters:\n* %1 - the input (which should be either the value "true" or "false")
Blockly.Msg.LOGIC_NEGATE_TITLE = 'not %1';
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation].
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false. Returns false if the input is true.';

/// {{Optional}} url - Information about the logic values ''true'' and ''false''.  Consider using the translation of [https://en.wikipedia.org/wiki/Truth_value https://en.wikipedia.org/wiki/Truth_value] if it exists in your language.
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = 'https://github.com/google/blockly/wiki/Logic#values';
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''true''.\n{{Identical|True}}
Blockly.Msg.LOGIC_BOOLEAN_TRUE = 'true';
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''false''.\n{{Identical|False}}
Blockly.Msg.LOGIC_BOOLEAN_FALSE = 'false';
/// tooltip - Indicates that the block returns either of the two possible [https://en.wikipedia.org/wiki/Truth_value logical values].
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

/// {{Optional}} url - Provide a link to the translation of [https://en.wikipedia.org/wiki/Nullable_type https://en.wikipedia.org/wiki/Nullable_type], if it exists in your language; otherwise, do not worry about translating this advanced concept.
Blockly.Msg.LOGIC_NULL_HELPURL = 'https://en.wikipedia.org/wiki/Nullable_type';
/// block text - In computer languages, ''null'' is a special value that indicates that no value has been set.  You may use your language's word for "nothing" or "invalid".\n{{Identical|Null}}
Blockly.Msg.LOGIC_NULL = 'null';
/// tooltip - This should use the word from the previous message.
Blockly.Msg.LOGIC_NULL_TOOLTIP = 'Returns null.';

/// {{Optional}} url - Describes the programming language operator known as the ''ternary'' or ''conditional'' operator.  It is recommended that you use the translation of [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:] if it exists.
Blockly.Msg.LOGIC_TERNARY_HELPURL = 'https://en.wikipedia.org/wiki/%3F:';
/// block input text - Label for the input whose value determines which of the other two inputs is returned.  In some programming languages, this is called a ''''predicate''''.
Blockly.Msg.LOGIC_TERNARY_CONDITION = 'test';
/// block input text - Indicates that the following input should be returned (used as output) if the test input is true.  Remember to try to keep block text terse (short).
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = 'if true';
/// block input text - Indicates that the following input should be returned (used as output) if the test input is false.
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = 'if false';
/// tooltip - See [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:].
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = 'Check the condition in "test". If the condition is true, returns the "if true" value; otherwise returns the "if false" value.';

// Math Blocks.
/// {{Optional}} url - Information about (real) numbers.
Blockly.Msg.MATH_NUMBER_HELPURL = 'https://en.wikipedia.org/wiki/Number';
/// tooltip - Any positive or negative number, not necessarily an integer.
Blockly.Msg.MATH_NUMBER_TOOLTIP = 'A number.';

/// {{Optional}} math - The symbol for the binary operation addition.
Blockly.Msg.MATH_ADDITION_SYMBOL = '+';
/// {{Optional}} math - The symbol for the binary operation indicating that the right operand should be
/// subtracted from the left operand.
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = '-';
/// {{Optional}} math - The binary operation indicating that the left operand should be divided by
/// the right operand.
Blockly.Msg.MATH_DIVISION_SYMBOL = '÷';
/// {{Optional}} math - The symbol for the binary operation multiplication.
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = '×';
/// {{Optional}} math - The symbol for the binary operation exponentiation.  Specifically, if the
/// value of the left operand is L and the value of the right operand (the exponent) is
/// R, multiply L by itself R times.  (Fractional and negative exponents are also legal.)
Blockly.Msg.MATH_POWER_SYMBOL = '^';

/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_SIN = 'sin';
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_COS = 'cos';
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_TAN = 'tan';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_ASIN = 'asin';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_ACOS = 'acos';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_ATAN = 'atan';

/// {{Optional}} url - Information about addition, subtraction, multiplication, division, and exponentiation.
Blockly.Msg.MATH_ARITHMETIC_HELPURL = 'https://en.wikipedia.org/wiki/Arithmetic';
/// tooltip - See [https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Subtraction https://en.wikipedia.org/wiki/Subtraction].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Multiplication https://en.wikipedia.org/wiki/Multiplication].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Division_(mathematics) https://en.wikipedia.org/wiki/Division_(mathematics)].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Exponentiation https://en.wikipedia.org/wiki/Exponentiation].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to the power of the second number.';

/// {{Optional}} url - Information about the square root operation.
Blockly.Msg.MATH_SINGLE_HELPURL = 'https://en.wikipedia.org/wiki/Square_root';
/// dropdown - This computes the positive [https://en.wikipedia.org/wiki/Square_root square root] of its input.  For example, the square root of 16 is 4.
Blockly.Msg.MATH_SINGLE_OP_ROOT = 'square root';
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
/// dropdown - This leaves positive numeric inputs changed and inverts negative inputs.  For example, the absolute value of 5 is 5; the absolute value of -5 is also 5.  For more information, see [https://en.wikipedia.org/wiki/Absolute_value https://en.wikipedia.org/wiki/Absolute_value].
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = 'absolute';
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';

/// tooltip - Calculates '''0-n''', where '''n''' is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Natural_logarithm|natural logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number.';
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Common_logarithm common logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = 'Return the base 10 logarithm of a number.';
/// tooltip - Multiplies [https://en.wikipedia.org/wiki/E_(mathematical_constant) e] by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = 'Return e to the power of a number.';
/// tooltip - Multiplies 10 by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';

/// {{Optional}} url - Information about the trigonometric functions sine, cosine, tangent, and their inverses (ideally using degrees, not radians).
Blockly.Msg.MATH_TRIG_HELPURL = 'https://en.wikipedia.org/wiki/Trigonometric_functions';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = 'Return the sine of a degree (not radian).';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = 'Return the cosine of a degree (not radian).';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = 'Return the tangent of a degree (not radian).';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent sine function], using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = 'Return the arcsine of a number.';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent cosine] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = 'Return the arccosine of a number.';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent tangent] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = 'Return the arctangent of a number.';

/// {{Optional}} url - Information about the mathematical constants Pi (π), e, the golden ratio (φ), √ 2, √ 1/2, and infinity (∞).
Blockly.Msg.MATH_CONSTANT_HELPURL = 'https://en.wikipedia.org/wiki/Mathematical_constant';
/// tooltip - Provides the specified [https://en.wikipedia.org/wiki/Mathematical_constant mathematical constant].
Blockly.Msg.MATH_CONSTANT_TOOLTIP = 'Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).';
/// dropdown - A number is '''even''' if it is a multiple of 2.  For example, 4 is even (yielding true), but 3 is not (false).
Blockly.Msg.MATH_IS_EVEN = 'is even';
/// dropdown - A number is '''odd''' if it is not a multiple of 2.  For example, 3 is odd (yielding true), but 4 is not (false).  The opposite of "odd" is "even".
Blockly.Msg.MATH_IS_ODD = 'is odd';
/// dropdown - A number is [https://en.wikipedia.org/wiki/Prime prime] if it cannot be evenly divided by any positive integers except for 1 and itself.  For example, 5 is prime, but 6 is not because 2 × 3 = 6.
Blockly.Msg.MATH_IS_PRIME = 'is prime';
/// dropdown - A number is '''whole''' if it is an [https://en.wikipedia.org/wiki/Integer integer].  For example, 5 is whole, but 5.1 is not.
Blockly.Msg.MATH_IS_WHOLE = 'is whole';
/// dropdown - A number is '''positive''' if it is greater than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_POSITIVE = 'is positive';
/// dropdown - A number is '''negative''' if it is less than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_NEGATIVE = 'is negative';
/// dropdown - A number x is divisible by y if y goes into x evenly.  For example, 10 is divisible by 5, but 10 is not divisible by 3.
Blockly.Msg.MATH_IS_DIVISIBLE_BY = 'is divisible by';
/// tooltip - This block lets the user specify via a dropdown menu whether to check if the numeric input is even, odd, prime, whole, positive, negative, or divisible by a given value.
Blockly.Msg.MATH_IS_TOOLTIP = 'Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.';

/// {{Optional}} url - Information about incrementing (increasing the value of) a variable.
/// For other languages, just use the translation of the Wikipedia page about
/// addition ([https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition]).
Blockly.Msg.MATH_CHANGE_HELPURL = 'https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
/// - As in: ''change'' [the value of variable] ''item'' ''by'' 1 (e.g., if the variable named 'item' had the value 5, change it to 6).
/// %1 is a variable name.
/// %2 is the amount of change.
Blockly.Msg.MATH_CHANGE_TITLE = 'change %1 by %2';
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - This updates the value of the variable by adding to it the following numeric input.\n\nParameters:\n* %1 - the name of the variable whose value should be increased.
Blockly.Msg.MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';

/// {{Optional}} url - Information about how numbers are rounded to the nearest integer
Blockly.Msg.MATH_ROUND_HELPURL = 'https://en.wikipedia.org/wiki/Rounding';
/// tooltip - See [https://en.wikipedia.org/wiki/Rounding https://en.wikipedia.org/wiki/Rounding].
Blockly.Msg.MATH_ROUND_TOOLTIP = 'Round a number up or down.';
/// dropdown - This rounds its input to the nearest whole number.  For example, 3.4 is rounded to 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = 'round';
/// dropdown - This rounds its input up to the nearest whole number.  For example, if the input was 2.2, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = 'round up';
/// dropdown - This rounds its input down to the nearest whole number.  For example, if the input was 3.8, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down';

/// {{Optional}} url - Information about applying a function to a list of numbers.  (We were unable to find such information in English.  Feel free to skip this and any other URLs that are difficult.)
Blockly.Msg.MATH_ONLIST_HELPURL = '';
/// dropdown - This computes the sum of the numeric elements in the list.  For example, the sum of the list {1, 4} is 5.
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = 'sum of list';
/// tooltip - Please use the same term for "sum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = 'Return the sum of all the numbers in the list.';
/// dropdown - This finds the smallest (minimum) number in a list.  For example, the smallest number in the list [-5, 0, 3] is -5.
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = 'min of list';
/// tooltip - Please use the same term for "min" or "minimum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest number in the list.';
/// dropdown - This finds the largest (maximum) number in a list.  For example, the largest number in the list [-5, 0, 3] is 3.
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = 'max of list';
/// tooltip
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = 'Return the largest number in the list.';
/// dropdown - This adds up all of the numbers in a list and divides the sum by the number of elements in the list.  For example, the [https://en.wikipedia.org/wiki/Arithmetic_mean average] of the list [1, 2, 3, 4] is 2.5 (10/4).
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = 'average of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Arithmetic_mean https://en.wikipedia.org/wiki/Arithmetic_mean] for more informatin.
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = 'Return the average (arithmetic mean) of the numeric values in the list.';
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Median median] of the numeric values in a list.  For example, the median of the list {1, 2, 7, 12, 13} is 7.
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = 'median of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Median median https://en.wikipedia.org/wiki/Median median] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = 'Return the median number in the list.';
/// dropdown - This finds the most common numbers ([https://en.wikipedia.org/wiki/Mode_(statistics) modes]) in a list.  For example, the modes of the list {1, 3, 9, 3, 9}  are {3, 9}.
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = 'modes of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Mode_(statistics) https://en.wikipedia.org/wiki/Mode_(statistics)] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = 'Return a list of the most common item(s) in the list.';
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Standard_deviation standard deviation] of the numeric values in a list.
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Standard_deviation https://en.wikipedia.org/wiki/Standard_deviation] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = 'Return the standard deviation of the list.';
/// dropdown - This choose an element at random from a list.  Each element is chosen with equal probability.
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = 'random item of list';
/// tooltip - Please use same term for 'random' as in previous entry.
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = 'Return a random element from the list.';

/// {{Optional}} url - information about the modulo (remainder) operation.
Blockly.Msg.MATH_MODULO_HELPURL = 'https://en.wikipedia.org/wiki/Modulo_operation';
/// block text - Title of block providing the remainder when dividing the first numerical input by the second.  For example, the remainder of 10 divided by 3 is 1.\n\nParameters:\n* %1 - the dividend (10, in our example)\n* %2 - the divisor (3 in our example).
Blockly.Msg.MATH_MODULO_TITLE = 'remainder of %1 ÷ %2';
/// tooltip - For example, the remainder of 10 divided by 3 is 1.
Blockly.Msg.MATH_MODULO_TOOLTIP = 'Return the remainder from dividing the two numbers.';

/// {{Optional}} url - Information about constraining a numeric value to be in a specific range.  (The English URL is not ideal.  Recall that translating URLs is the lowest priority.)
Blockly.Msg.MATH_CONSTRAIN_HELPURL = 'https://en.wikipedia.org/wiki/Clamping_(graphics)';
/// block text - The title of the block that '''constrain'''s (forces) a number to be in a given range.
///For example, if the number 150 is constrained to be between 5 and 100, the result will be 100.
///\n\nParameters:\n* %1 - the value to constrain (e.g., 150)\n* %2 - the minimum value (e.g., 5)\n* %3 - the maximum value (e.g., 100).
Blockly.Msg.MATH_CONSTRAIN_TITLE = 'constrain %1 low %2 high %3';
/// tooltip - This compares a number ''x'' to a low value ''L'' and a high value ''H''.  If ''x'' is less then ''L'', the result is ''L''.  If ''x'' is greater than ''H'', the result is ''H''.  Otherwise, the result is ''x''.
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = 'Constrain a number to be between the specified limits (inclusive).';

/// {{Optional}} url - Information about how computers generate random numbers.
Blockly.Msg.MATH_RANDOM_INT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/// block text - The title of the block that generates a random integer (whole number) in the specified range.  For example, if the range is from 5 to 7, this returns 5, 6, or 7 with equal likelihood. %1 is a placeholder for the lower number, %2 is the placeholder for the larger number.
Blockly.Msg.MATH_RANDOM_INT_TITLE = 'random integer from %1 to %2';
/// tooltip - Return a random integer between two values specified as inputs.  For example, if one input was 7 and another 9, any of the numbers 7, 8, or 9 could be produced.
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = 'Return a random integer between the two specified limits, inclusive.';

/// {{Optional}} url - Information about how computers generate random numbers (specifically, numbers in the range from 0 to just below 1).
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/// block text - The title of the block that generates a random number greater than or equal to 0 and less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
/// tooltip - Return a random fraction between 0 and 1.  The value may be equal to 0 but must be less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).';

// Text Blocks.
/// {{Optional}} url - Information about how computers represent text (sometimes referred to as ''string''s).
Blockly.Msg.TEXT_TEXT_HELPURL = 'https://en.wikipedia.org/wiki/String_(computer_science)';
/// tooltip - See [https://github.com/google/blockly/wiki/Text https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

/// {{Optional}} url - Information on concatenating/appending pieces of text.
Blockly.Msg.TEXT_JOIN_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-creation';
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation].
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation create text with] for more information.
Blockly.Msg.TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining together any number of items.';

/// block text - This is shown when the programmer wants to change the number of pieces of text being joined together.  See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.\n{{Identical|Join}}
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = 'join';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';

/// {{Optional}} url - This and the other text-related URLs are going to be hard to translate.  As always, it is okay to leave untranslated or paste in the English-language URL.  For these URLs, you might also consider a general URL about how computers represent text (such as the translation of [https://en.wikipedia.org/wiki/String_(computer_science) this Wikipedia page]).
Blockly.Msg.TEXT_APPEND_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/// block input text - Message that the variable name at %1 will have the item at %2 appended to it.
/// [[File:blockly-append-text.png]]
Blockly.Msg.TEXT_APPEND_TITLE = 'to %1 append text %2';
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-modification https://github.com/google/blockly/wiki/Text#text-modification] for more information.\n\nParameters:\n* %1 - the name of the variable to which text should be appended
Blockly.Msg.TEXT_APPEND_TOOLTIP = 'Append some text to variable "%1".';

/// {{Optional}} url - Information about text on computers (usually referred to as 'strings').
Blockly.Msg.TEXT_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/// block text - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
/// \n\nParameters:\n* %1 - the piece of text to take the length of
Blockly.Msg.TEXT_LENGTH_TITLE = 'length of %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
Blockly.Msg.TEXT_LENGTH_TOOLTIP = 'Returns the number of letters (including spaces) in the provided text.';

/// {{Optional}} url - Information about empty pieces of text on computers (usually referred to as 'empty strings').
Blockly.Msg.TEXT_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Text#checking-for-empty-text';
/// block text - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
/// \n\nParameters:\n* %1 - the piece of text to test for emptiness
Blockly.Msg.TEXT_ISEMPTY_TITLE = '%1 is empty';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.';

/// {{Optional}} url - Information about finding a character in a piece of text.
Blockly.Msg.TEXT_INDEXOF_HELPURL = 'https://github.com/google/blockly/wiki/Text#finding-text';
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode. See [https://github.com/google/blockly/wiki/Text#finding-text https://github.com/google/blockly/wiki/Text#finding-text].
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.';
/// block text - Title of blocks allowing users to find text.  See
/// [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
/// In English the expanded message is "in text %1 find (first|last) occurance of text %3"
/// where %1 and %3 are added by the user. See TEXT_INDEXOF_OPERATOR_FIRST and
/// TEXT_INDEXOF_OPERATOR_LAST for the dropdown text that replaces %2.
Blockly.Msg.TEXT_INDEXOF_TITLE = 'in text %1 %2 %3';
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = 'find first occurrence of text';
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].  This would
/// replace "find first occurrence of text" below.  (For more information on
/// how common text is factored out of dropdown menus, see
/// [https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus
/// https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus)].)
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = 'find last occurrence of text';

/// {{Optional}} url - Information about extracting characters (letters, number, symbols, etc.) from text.
Blockly.Msg.TEXT_CHARAT_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-text';
/// block text - Text for a block to extract a letter (or number,
/// punctuation character, etc.) from a string, as shown below. %1 is added by
/// the user and %2 is replaced by a dropdown of options, possibly followed by
/// another user supplied string. TEXT_CHARAT_TAIL is then added to the end.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TITLE = 'in text %1 %2'
/// dropdown - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index should be obtained from the preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_START = 'get letter #';
/// block text - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index from the end of a given piece of text should be obtained. See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_END = 'get letter # from end';
/// block text - Indicates that the first letter of the following piece of text should be
/// retrieved.  See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FIRST = 'get first letter';
/// block text - Indicates that the last letter (or number, punctuation mark, etc.) of the
/// following piece of text should be retrieved.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_LAST = 'get last letter';
/// block text - Indicates that any letter (or number, punctuation mark, etc.) in the
/// following piece of text should be randomly selected.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_RANDOM = 'get random letter';
/// block text - Text that goes after the rightmost block/dropdown when getting a single letter from
/// a piece of text, as in [https://blockly-demo.appspot.com/static/apps/code/index.html#3m23km these
/// blocks] or shown below.  For most languages, this will be blank.
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TAIL = '';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';

/// See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = 'Returns a specified portion of the text.';
/// {{Optional}} url - Information about extracting characters from text.  Reminder: urls are the
/// lowest priority translations.  Feel free to skip.
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text';
/// block text - Precedes a piece of text from which a portion should be extracted.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = 'in text';
/// dropdown - Indicates that the following number specifies the position (relative to the start
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = 'get substring from letter #';
/// dropdown - Indicates that the following number specifies the position (relative to the end
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this and any other
/// [https://translatewiki.net/wiki/Translating:Blockly#Ordinal_numbers ordinal numbers]
/// on this block.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = 'get substring from letter # from end';
/// block text - Indicates that a region starting with the first letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = 'get substring from first letter';
/// dropdown - Indicates that the following number specifies the position (relative to
/// the start position) of the end of the region of text that should be obtained from the
/// preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = 'to letter #';
/// dropdown - Indicates that the following number specifies the position (relative to the
/// end position) of the end of the region of text that should be obtained from the preceding
/// piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = 'to letter # from end';
/// block text - Indicates that a region ending with the last letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = 'to last letter';
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// extracting a region of text].  In most languages, this will be the empty string.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = '';

/// {{Optional}} url - Information about the case of letters (upper-case and lower-case).
Blockly.Msg.TEXT_CHANGECASE_HELPURL = 'https://github.com/google/blockly/wiki/Text#adjusting-text-case';
/// tooltip - Describes a block to adjust the case of letters.  For more information on this block,
/// see [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = 'Return a copy of the text in a different case.';
/// block text - Indicates that all of the letters in the following piece of text should be
/// capitalized.  If your language does not use case, you may indicate that this is not
/// applicable to your language.  For more information on this block, see
/// [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'to UPPER CASE';
/// block text - Indicates that all of the letters in the following piece of text should be converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'to lower case';
/// block text - Indicates that the first letter of each of the following words should be capitalized and the rest converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = 'to Title Case';

/// {{Optional}} url - Information about trimming (removing) text off the beginning and ends of pieces of text.
Blockly.Msg.TEXT_TRIM_HELPURL = 'https://github.com/google/blockly/wiki/Text#trimming-removing-spaces';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
Blockly.Msg.TEXT_TRIM_TOOLTIP = 'Return a copy of the text with spaces removed from one or both ends.';
/// dropdown - Removes spaces from the beginning and end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].  Note that neither
/// this nor the other options modify the original piece of text (that follows);
/// the block just returns a version of the text without the specified spaces.
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = 'trim spaces from both sides of';
/// dropdown - Removes spaces from the beginning of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the right side.
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = 'trim spaces from left side of';
/// dropdown - Removes spaces from the end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the left side.
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = 'trim spaces from right side of';

/// {{Optional}} url - Information about displaying text on computers.
Blockly.Msg.TEXT_PRINT_HELPURL = 'https://github.com/google/blockly/wiki/Text#printing-text';
/// block text - Display the input on the screen.  See
/// [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
/// \n\nParameters:\n* %1 - the value to print
Blockly.Msg.TEXT_PRINT_TITLE = 'print %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';
/// {{Optional}} url - Information about getting text from users.
Blockly.Msg.TEXT_PROMPT_HELPURL = 'https://github.com/google/blockly/wiki/Text#getting-input-from-the-user';
/// dropdown - Specifies that a piece of text should be requested from the user with
/// the following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = 'prompt for text with message';
/// dropdown - Specifies that a number should be requested from the user with the
/// following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = 'prompt for number with message';
/// dropdown - Precedes the message with which the user should be prompted for
/// a number.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = 'Prompt for user for a number.';
/// dropdown - Precedes the message with which the user should be prompted for some text.
/// See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = 'Prompt for user for some text.';

/// block text - Title of a block that counts the number of instances of
/// a smaller pattern (%1) inside a longer string (%2).
Blockly.Msg.TEXT_COUNT_MESSAGE0 = 'count %1 in %2';
/// {{Optional}} url - Information about counting how many times a string appears in another string.
Blockly.Msg.TEXT_COUNT_HELPURL = 'https://github.com/google/blockly/wiki/Text#counting-substrings';
/// tooltip - Short description of a block that counts how many times some text occurs within some other text.
Blockly.Msg.TEXT_COUNT_TOOLTIP = 'Count how many times some text occurs within some other text.';

/// block text - Title of a block that returns a copy of text (%3) with all
/// instances of some smaller text (%1) replaced with other text (%2).
Blockly.Msg.TEXT_REPLACE_MESSAGE0 = 'replace %1 with %2 in %3';
/// {{Optional}} url - Information about replacing each copy text (or string, in computer lingo) with other text.
Blockly.Msg.TEXT_REPLACE_HELPURL = 'https://github.com/google/blockly/wiki/Text#replacing-substrings';
/// tooltip - Short description of a block that replaces copies of text in a large text with other text.
Blockly.Msg.TEXT_REPLACE_TOOLTIP = 'Replace all occurances of some text within some other text.';

/// block text - Title of block that returns a copy of text (%1) with the order
/// of letters and characters reversed.
Blockly.Msg.TEXT_REVERSE_MESSAGE0 = 'reverse %1';
/// {{Optional}} url - Information about reversing a letters/characters in text.
Blockly.Msg.TEXT_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Text#reversing-text';
/// tooltip - See [https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_REVERSE_TOOLTIP = 'Reverses the order of the characters in the text.';

// Lists Blocks.
/// {{Optional}} url - Information on empty lists.
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-empty-list';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = 'create empty list';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

/// {{Optional}} url - Information on building lists.
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = 'create list with';
/// block text - This appears in a sub-block when [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs changing the number of inputs in a ''''create list with'''' block].\n{{Identical|List}}
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

/// {{Optional}} url - Information about [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value repeated the specified number of times.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with
/// https://github.com/google/blockly/wiki/Lists#create-list-with].
///\n\nParameters:\n* %1 - the item (text) to be repeated\n* %2 - the number of times to repeat it
Blockly.Msg.LISTS_REPEAT_TITLE = 'create list with item %1 repeated %2 times';

/// {{Optional}} url - Information about how the length of a list is computed (i.e., by the total number of elements, not the number of different elements).
Blockly.Msg.LISTS_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#length-of';
/// block text - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of].
/// \n\nParameters:\n* %1 - the list whose length is desired
Blockly.Msg.LISTS_LENGTH_TITLE = 'length of %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of Blockly:Lists:length of].
Blockly.Msg.LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.';

/// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#is-empty https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#is-empty';
/// block text - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
/// \n\nParameters:\n* %1 - the list to test
Blockly.Msg.LISTS_ISEMPTY_TITLE = '%1 is empty';
/// block tooltip - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = 'Returns true if the list is empty.';

/// block text - Title of blocks operating on [https://github.com/google/blockly/wiki/Lists lists].
Blockly.Msg.LISTS_INLIST = 'in list';

/// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list
/// https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list].
Blockly.Msg.LISTS_INDEX_OF_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list';
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_FIRST = 'find first occurrence of item';
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_LAST = 'find last occurrence of item';
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode.  See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.';

Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get an item from a list] without removing it from the list.
Blockly.Msg.LISTS_GET_INDEX_GET = 'get';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get and remove an item from a list], as opposed to merely getting
/// it without modifying the list.
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = 'get and remove';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#removing-an-item
/// remove an item from a list].\n{{Identical|Remove}}
Blockly.Msg.LISTS_GET_INDEX_REMOVE = 'remove';
/// dropdown - Indicates that an index relative to the front of the list should be used to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item get and/or remove
/// an item from a list].  Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_START = '#';
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to [https://github.com/google/blockly/wiki/Lists#getting-a-single-item access an item in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_END = '# from end';
/// dropdown - Indicates that the '''first''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FIRST = 'first';
/// dropdown - Indicates that the '''last''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_LAST = 'last';
/// dropdown - Indicates that a '''random''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_RANDOM = 'random';
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// accessing an item from a list].  In most languages, this will be the empty string.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_TAIL = '';
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// tooltip - Indicates the ordinal number that the first item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = '%1 is the first item.';
/// tooltip - Indicates the ordinal number that the last item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = '%1 is the last item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = 'Returns the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Returns the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Returns the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Returns a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = 'Removes and returns the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Removes and returns the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Removes and returns the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Removes and returns a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = 'Removes the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Removes the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Removes the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Removes a random item in a list.';
/// {{Optional}} url - Information about putting items in lists.
Blockly.Msg.LISTS_SET_INDEX_HELPURL = 'https://github.com/google/blockly/wiki/Lists#in-list--set';
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--set
/// Replaces an item in a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_SET = 'set';
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--insert-at
/// Inserts an item into a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INSERT = 'insert at';
/// block text - The word(s) after the position in the list and before the item to be set/inserted.
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = 'as';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = 'Sets the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = 'Inserts the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserts the item at the start of a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = 'Append the item to the end of a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserts the item randomly in a list.';

/// {{Optional}} url - Information describing extracting a sublist from an existing list.
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-a-sublist';
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// dropdown - Indicates that an index relative to the front of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
/// Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = 'get sub-list from #';
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = 'get sub-list from # from end';
/// dropdown - Indicates that the
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist sublist to extract]
/// should begin with the list's first item.
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = 'get sub-list from first';
/// dropdown - Indicates that an index relative to the front of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = 'to #';
/// dropdown - Indicates that an index relative to the end of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = 'to # from end';
/// dropdown - Indicates that the '''last''' item in the given list should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist the end
/// of the selected sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = 'to last';
/// block text - This appears in the rightmost position ("tail") of the
/// sublist block, as described at
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist].
/// In English and most other languages, this is the empty string.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = '';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist] for more information.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = 'Creates a copy of the specified portion of a list.';

/// {{Optional}} url - Information describing sorting a list.
Blockly.Msg.LISTS_SORT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#sorting-a-list';
/// Sort as type %1 (numeric or alphabetic) in order %2 (ascending or descending) a list of items %3.\n{{Identical|Sort}}
Blockly.Msg.LISTS_SORT_TITLE = 'sort %1 %2 %3';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#sorting-a-list].
Blockly.Msg.LISTS_SORT_TOOLTIP = 'Sort a copy of a list.';
/// sorting order or direction from low to high value for numeric, or A-Z for alphabetic.\n{{Identical|Ascending}}
Blockly.Msg.LISTS_SORT_ORDER_ASCENDING = 'ascending';
/// sorting order or direction from high to low value for numeric, or Z-A for alphabetic.\n{{Identical|Descending}}
Blockly.Msg.LISTS_SORT_ORDER_DESCENDING = 'descending';
/// sort by treating each item as a number.
Blockly.Msg.LISTS_SORT_TYPE_NUMERIC = 'numeric';
/// sort by treating each item alphabetically, case-sensitive.
Blockly.Msg.LISTS_SORT_TYPE_TEXT = 'alphabetic';
/// sort by treating each item alphabetically, ignoring differences in case.
Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE = 'alphabetic, ignore case';

/// {{Optional}} url - Information describing splitting text into a list, or joining a list into text.
Blockly.Msg.LISTS_SPLIT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists';
/// dropdown - Indicates that text will be split up into a list (e.g. "a-b-c" -> ["a", "b", "c"]).
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = 'make list from text';
/// dropdown - Indicates that a list will be joined together to form text (e.g. ["a", "b", "c"] -> "a-b-c").
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = 'make text from list';
/// block text - Prompts for a letter to be used as a separator when splitting or joining text.
Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = 'with delimiter';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-list-from-text
/// https://github.com/google/blockly/wiki/Lists#make-list-from-text] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = 'Split text into a list of texts, breaking at each delimiter.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-text-from-list
/// https://github.com/google/blockly/wiki/Lists#make-text-from-list] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = 'Join a list of texts into one text, separated by a delimiter.';

/// {{Optional}} url - Information describing reversing a list.
Blockly.Msg.LISTS_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Lists#reversing-a-list';
/// block text - Title of block that returns a copy of a list (%1) with the order of items reversed.
Blockly.Msg.LISTS_REVERSE_MESSAGE0 = 'reverse %1';
/// tooltip - Short description for a block that reverses a copy of a list.
Blockly.Msg.LISTS_REVERSE_TOOLTIP = 'Reverse a copy of a list.';

/// grammar - Text that follows an ordinal number (a number that indicates
/// position relative to other numbers).  In most languages, such text appears
/// before the number, so this should be blank.  An exception is Hungarian.
/// See [[Translating:Blockly#Ordinal_numbers]] for more information.
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = '';

// Variables Blocks.
/// {{Optional}} url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_GET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#get';
/// tooltip - This gets the value of the named variable without modifying it.
Blockly.Msg.VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';
/// context menu - Selecting this creates a block to set (change) the value of this variable.
/// \n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_GET_CREATE_SET = 'Create "set %1"';

/// {{Optional}} url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_SET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#set';
/// block text - Change the value of a mathematical variable: '''set [the value of] x to 7'''.\n\nParameters:\n* %1 - the name of the variable.\n* %2 - the value to be assigned.
Blockly.Msg.VARIABLES_SET = 'set %1 to %2';
/// tooltip - This initializes or changes the value of the named variable.
Blockly.Msg.VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';
/// context menu - Selecting this creates a block to get (change) the value of
/// this variable.\n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_SET_CREATE_GET = 'Create "get %1"';

// Procedures Blocks.
/// {{Optional}} url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that do not have return values.
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/// block text - This precedes the name of the function when defining it.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#c84aoc this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = 'to';
/// default name - This acts as a placeholder for the name of a function on a
/// function definition block, as shown on
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#w7cfju this block].
/// The user will replace it with the function's name.
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = 'do something';
/// block text - This precedes the list of parameters on a function's definition block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = 'with:';
/// block text - This precedes the list of parameters on a function's caller block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = 'with:';
/// block text - This appears next to the function's "body", the blocks that should be
/// run when the function is called, as shown in
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = '';
/// tooltip
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = 'Creates a function with no output.';
/// Placeholder text that the user is encouraged to replace with a description of what their function does.
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = 'Describe this function...';
/// {{Optional}} url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that have return values.
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;
/// block text - This imperative or infinite verb precedes the value that is used as the return value
/// (output) of this function.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#6ot5y5 this sample
/// function that returns a value].
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = 'return';
/// tooltip
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = 'Creates a function with an output.';
/// Label for a checkbox that controls if statements are allowed in a function.
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = 'allow statements';

/// alert - The user has created a function with two parameters that have the same name.  Every parameter must have a different name.
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning: This function has duplicate parameters.';

/// {{Optional}} url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that do not return values.
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = 'Run the user-defined function "%1".';

/// {{Optional}} url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that return values.
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.\n\nParameters:\n* %1 - the name of the function.
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = 'Run the user-defined function "%1" and use its output.';

/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block.  It refers to the set of parameters
/// (referred to by the simpler term "inputs") to the function.  See
/// [[Translating:Blockly#function_definitions]].\n{{Identical|Input}}
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs';
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = 'Add, remove, or reorder inputs to this function.';
/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block].  It appears on the block for
/// adding an individual parameter (referred to by the simpler term "inputs") to the function.
/// See [[Translating:Blockly#function_definitions]].
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = 'input name:';
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = 'Add an input to the function.';

/// context menu - This appears on the context menu for function calls.  Selecting
/// it causes the corresponding function definition to be highlighted (as shown at
/// [[Translating:Blockly#context_menus]].
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = 'Highlight function definition';
/// context menu - This appears on the context menu for function definitions.
/// Selecting it creates a block to call the function.\n\nParameters:\n* %1 - the name of the function.\n{{Identical|Create}}
Blockly.Msg.PROCEDURES_CREATE_DO = 'Create "%1"';

/// tooltip - If the first value is true, this causes the second value to be returned
/// immediately from the enclosing function.
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true, then return a second value.';
/// {{Optional}} url - Information about guard clauses.
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = 'http://c2.com/cgi/wiki?GuardClause';
/// warning - This appears if the user tries to use this block outside of a function definition.
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = 'Warning: This block may be used only within a function definition.';







/**
 * Ardublockly Types
 */
/// Arduino Types - Character C type char
Blockly.Msg.ARD_TYPE_CHAR = 'Character';
/// Arduino Types - Text C type String
Blockly.Msg.ARD_TYPE_TEXT = 'Text';
/// Arduino Types - Boolean type
Blockly.Msg.ARD_TYPE_BOOL = 'Boolean';
/// Arduino Types - Short number C type char
Blockly.Msg.ARD_TYPE_SHORT = 'Short Number';
/// Arduino Types - Number C type integer
Blockly.Msg.ARD_TYPE_NUMBER = 'Number';
/// Arduino Types - Large number C type long integer
Blockly.Msg.ARD_TYPE_LONG = 'Large Number';
/// Arduino Types - Decimal number C type floating point
Blockly.Msg.ARD_TYPE_DECIMAL = 'Decimal';
/// Arduino Types - Array
Blockly.Msg.ARD_TYPE_ARRAY = 'Array';
/// Arduino Types - Null C type void
Blockly.Msg.ARD_TYPE_NULL = 'Null';
/// Arduino Types - Undefined type
Blockly.Msg.ARD_TYPE_UNDEF = 'Undefined';
/// Arduino Types - Place holder value, indicates block with type not connected
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = 'ChildBlockMissing';

/// Arduino Blocks
Blockly.Msg.ARD_HIGH = 'HIGH';
Blockly.Msg.ARD_LOW = 'LOW';
Blockly.Msg.ARD_ANALOGREAD = 'read analog pin#';
Blockly.Msg.ARD_ANALOGREAD_TIP = 'Returns value between 0 and 1024';
Blockly.Msg.ARD_ANALOGWRITE = 'set analog pin#';
Blockly.Msg.ARD_ANALOGWRITE_TIP = 'Writes analog value between 0 and 255 to a specific PWM Port';
Blockly.Msg.ARD_HIGHLOW_TIP = 'Sets a pin state logic High or Low.';
Blockly.Msg.ARD_DIGITALREAD = 'read digital pin#';
Blockly.Msg.ARD_DIGITALREAD_TIP = 'Reads digital value on a pin: HIGH or LOW';
Blockly.Msg.ARD_DIGITALWRITE = 'set digitial pin#';
Blockly.Msg.ARD_WRITE_TO = 'to';
Blockly.Msg.ARD_DIGITALWRITE_TIP = 'Writes digital value HIGH or LOW to a specific Port';
Blockly.Msg.ARD_BUILTIN_LED = 'set built-in LED';
Blockly.Msg.ARD_BUILTIN_LED_TIP = 'Lights on or off for the built-in LED of the Arduino';
Blockly.Msg.ARD_DEFINE = 'Define';
Blockly.Msg.ARD_TONE_PIN = 'Tone PIN#';
Blockly.Msg.ARD_TONE_FREQ = 'frequency';
Blockly.Msg.ARD_TONE_PIN_TIP = 'Generates audio tones on a pin';
Blockly.Msg.ARD_NOTONE_PIN = 'No tone PIN#';
Blockly.Msg.ARD_NOTONE_PIN_TIP = 'Stops generating a tone on a pin';
Blockly.Msg.ARD_MAP = 'Map';
Blockly.Msg.ARD_MAP_VAL = 'value to [0-';
Blockly.Msg.ARD_MAP_TIP = 'Re-maps a number from [0-1024] to another.';
Blockly.Msg.ARD_FUN_RUN_SETUP = 'Run first:';
Blockly.Msg.ARD_FUN_RUN_LOOP = 'Loop forever:';
Blockly.Msg.ARD_FUN_RUN_TIP = 'Defines the Oxocard setup() and loop() functions.';
Blockly.Msg.ARD_PIN_WARN1 = 'Pin %1 is needed for %2 as pin %3. Already used as %4.';
Blockly.Msg.ARD_SERIAL_SETUP = 'Setup';
Blockly.Msg.ARD_SERIAL_SPEED = ':  speed to';
Blockly.Msg.ARD_SERIAL_BPS = 'bps';
Blockly.Msg.ARD_SERIAL_SETUP_TIP = 'Selects the speed for a specific Serial peripheral';
Blockly.Msg.ARD_SERIAL_PRINT = 'print';
Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = 'add new line';
Blockly.Msg.ARD_SERIAL_PRINT_TIP = 'Prints data to the console/serial port as human-readable ASCII text.';
Blockly.Msg.ARD_SERIAL_PRINT_WARN = 'A setup block for %1 must be added to the workspace to use this block!';
Blockly.Msg.ARD_SERVO_WRITE = 'set SERVO from Pin';
Blockly.Msg.ARD_SERVO_WRITE_TO = 'to';
Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = 'Degrees (0~180)';
Blockly.Msg.ARD_SERVO_WRITE_TIP = 'Sets a Servo to an specified angle';
Blockly.Msg.ARD_SERVO_READ = 'read SERVO from PIN#';
Blockly.Msg.ARD_SERVO_READ_TIP = 'Reads a Servo angle';
Blockly.Msg.ARD_SPI_SETUP = 'Setup';
Blockly.Msg.ARD_SPI_SETUP_CONF = 'configuration:';
Blockly.Msg.ARD_SPI_SETUP_SHIFT = 'data shift';
Blockly.Msg.ARD_SPI_SETUP_MSBFIRST = 'MSBFIRST';
Blockly.Msg.ARD_SPI_SETUP_LSBFIRST = 'LSBFIRST';
Blockly.Msg.ARD_SPI_SETUP_DIVIDE = 'clock divide';
Blockly.Msg.ARD_SPI_SETUP_MODE = 'SPI mode (idle - edge)';
Blockly.Msg.ARD_SPI_SETUP_MODE0 = '0 (Low - Falling)';
Blockly.Msg.ARD_SPI_SETUP_MODE1 = '1 (Low - Rising)';
Blockly.Msg.ARD_SPI_SETUP_MODE2 = '2 (High - Falling)';
Blockly.Msg.ARD_SPI_SETUP_MODE3 = '3 (High - Rising)';
Blockly.Msg.ARD_SPI_SETUP_TIP = 'Configures the SPI peripheral.';
Blockly.Msg.ARD_SPI_TRANS_NONE = 'none';
Blockly.Msg.ARD_SPI_TRANS_VAL = 'transfer';
Blockly.Msg.ARD_SPI_TRANS_SLAVE = 'to slave pin';
Blockly.Msg.ARD_SPI_TRANS_TIP = 'Sends a SPI message to an specified slave device.';
Blockly.Msg.ARD_SPI_TRANS_WARN1 = 'A setup block for %1 must be added to the workspace to use this block!';
Blockly.Msg.ARD_SPI_TRANS_WARN2 = 'Old pin value %1 is no longer available.';
Blockly.Msg.ARD_SPI_TRANSRETURN_TIP = 'Send a SPI message to an specified slave device and get data back.';
Blockly.Msg.ARD_STEPPER_SETUP = 'Setup stepper motor';
Blockly.Msg.ARD_STEPPER_MOTOR = 'stepper motor:';
Blockly.Msg.ARD_STEPPER_DEFAULT_NAME = 'MyStepper';
Blockly.Msg.ARD_STEPPER_NUMBER_OF_PINS = 'Number of pins';
Blockly.Msg.ARD_STEPPER_TWO_PINS = '2';
Blockly.Msg.ARD_STEPPER_FOUR_PINS = '4';
Blockly.Msg.ARD_STEPPER_PIN1 = 'pin1#';
Blockly.Msg.ARD_STEPPER_PIN2 = 'pin2#';
Blockly.Msg.ARD_STEPPER_PIN3 = 'pin3#';
Blockly.Msg.ARD_STEPPER_PIN4 = 'pin4#';
Blockly.Msg.ARD_STEPPER_REVOLVS = 'how many steps per revolution';
Blockly.Msg.ARD_STEPPER_SPEED = 'set speed (rpm) to';
Blockly.Msg.ARD_STEPPER_SETUP_TIP = 'Configures a stepper motor pinout and other settings.';
Blockly.Msg.ARD_STEPPER_STEP = 'move stepper';
Blockly.Msg.ARD_STEPPER_STEPS = 'steps';
Blockly.Msg.ARD_STEPPER_STEP_TIP = 'Turns the stepper motor a specific number of steps.';
Blockly.Msg.ARD_STEPPER_COMPONENT = 'stepper';
Blockly.Msg.ARD_COMPONENT_WARN1 = 'A %1 configuration block with the same %2 name must be added to use this block!';
Blockly.Msg.ARD_TIME_DELAY = 'wait';
Blockly.Msg.ARD_TIME_MS = 'milliseconds';
Blockly.Msg.ARD_TIME_DELAY_TIP = 'Waits specific time in milliseconds';
Blockly.Msg.ARD_TIME_DELAY_MICROS = 'microseconds';
Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = 'Waits specific time in microseconds';
Blockly.Msg.ARD_TIME_MILLIS = 'current elapsed Time (milliseconds)';
Blockly.Msg.ARD_TIME_MILLIS_TIP = 'Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
Blockly.Msg.ARD_TIME_MICROS = 'current elapsed Time (microseconds)';
Blockly.Msg.ARD_TIME_MICROS_TIP = 'Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
Blockly.Msg.ARD_TIME_INF = 'wait forever (end program)';
Blockly.Msg.ARD_TIME_INF_TIP = 'Waits indefinitely, stopping the program.';
Blockly.Msg.ARD_VAR_AS = 'as';
Blockly.Msg.ARD_VAR_AS_TIP = 'Sets a value to a specific type';
/// IO blocks - pulseIn - Block for function pulseIn(), it measure a pulse duration in a given pin.
Blockly.Msg.ARD_PULSE_READ = 'measure %1 pulse on pin #%2';
/// IO blocks - pulseIn - Block similar to ARD_PULSE_READ, but it adds a time-out in microseconds.
Blockly.Msg.ARD_PULSE_READ_TIMEOUT = 'measure %1 pulse on pin #%2 (timeout after %3 μs)';
/// IO blocks - pulseIn - Tooltip for pulseIn() block.
Blockly.Msg.ARD_PULSE_TIP = 'Measures the duration of a pulse on the selected pin.';
/// IO blocks - pulseIn - Tooltip for pulseIn() block when it uses the optional argument for time-out.
Blockly.Msg.ARD_PULSETIMEOUT_TIP = 'Measures the duration of a pulse on the selected pin, if it is within the time-out in microseconds.';
Blockly.Msg.ARD_SETTONE = 'Set tone on pin #';
Blockly.Msg.ARD_TONEFREQ = 'at frequency';
Blockly.Msg.ARD_TONE_TIP = 'Sets tone on pin to specified frequency within range 31 - 65535';
Blockly.Msg.ARD_TONE_WARNING = 'Frequency must be in range 31 - 65535';
Blockly.Msg.ARD_NOTONE = 'Turn off tone on pin #';
Blockly.Msg.ARD_NOTONE_TIP = 'Turns the tone off on the selected pin';

// Oxocard Blocks



// Math
Blockly.Msg.OXOCARD_MATH_INCREMENT_TITLE = 'Add 1 to';
Blockly.Msg.OXOCARD_MATH_INCREMENT_TIP = 'Does increment the variable with the value 1';

Blockly.Msg.OXOCARD_MATH_DECREMENT_TITLE = 'Substract 1 from';
Blockly.Msg.OXOCARD_MATH_DECREMENT_TIP = 'Does decrement the variable with the value -1';

Blockly.Msg.OXOCARD_MATH_SET_VAR_WITH_TITLE = 'Set';
Blockly.Msg.OXOCARD_MATH_SET_VAR_WITH_TITLE2 = 'with';
Blockly.Msg.OXOCARD_MATH_SET_VAR_WITH_TIP = 'Sets a variable with an expression (e.g. 1*(5/8))';

// Logic
Blockly.Msg.OXOCARD_LOGIC_OPERATION_AND = 'and';
Blockly.Msg.OXOCARD_LOGIC_OPERATION_OR = 'or';

Blockly.Msg.OXOCARD_LOGIC_WHILE_FOREVER_TITLE = 'Do forever';
Blockly.Msg.OXOCARD_LOGIC_WHILE_FOREVER_TIP = 'Repeats the blocks inside forever';

// Matrix
Blockly.Msg.OXOCARD_MATRIX_DRAW_IMAGE_TITLE ='Monochronic image';
Blockly.Msg.OXOCARD_MATRIX_DRAW_IMAGE_TIP = 'Turns on specific pixels';

Blockly.Msg.OXOCARD_MATRIX_DRAW_RGB_IMAGE_TITLE ='Multicolor image';
Blockly.Msg.OXOCARD_MATRIX_DRAW_RGB_IMAGE_TIP = 'Turns on specific pixels with color';

Blockly.Msg.OXOCARD_MATRIX_SET_COLOR_TITLE = 'Set pen color';
Blockly.Msg.OXOCARD_MATRIX_SET_COLOR_TIP = 'The following draw-blocks will draw this color';

Blockly.Msg.OXOCARD_MATRIX_SET_RANDOM_COLOR_TITLE = 'Set random pen color';
Blockly.Msg.OXOCARD_MATRIX_SET_RANDOM_COLOR_TIP = 'The following draw-blocks will draw a random color.';

Blockly.Msg.OXOCARD_MATRIX_SET_COLOR_VAR_TITLE = 'Set pen color';
Blockly.Msg.OXOCARD_MATRIX_SET_COLOR_VAR_TIP = 'The following draw-blocks will draw this color';

Blockly.Msg.OXOCARD_MATRIX_SET_COLOR_ANGLE_TITLE = 'Set color from wheel based on angle';
Blockly.Msg.OXOCARD_MATRIX_SET_COLOR_ANGLE_TIP = 'The following draw-blocks will draw the color coresponding with the angle (0-360°)';

Blockly.Msg.OXOCARD_MATRIX_DRAW_ALL_TITLE = 'Draw all pixels';
Blockly.Msg.OXOCARD_MATRIX_DRAW_ALL_TIP = 'Draws all pixels';

Blockly.Msg.OXOCARD_MATRIX_CLEAR_TITLE = 'Clear display';
Blockly.Msg.OXOCARD_MATRIX_CLEAR_TIP = 'Clears all pixels on the matrix';

Blockly.Msg.OXOCARD_MATRIX_DRAW_PIXEL_TITLE = 'Draw pixel';
Blockly.Msg.OXOCARD_MATRIX_DRAW_PIXEL_TIP = 'Draws the pixel on the defined coordinates';
Blockly.Msg.OXOCARD_MATRIX_CLEAR_PIXEL_TITLE = 'Clear pixel';
Blockly.Msg.OXOCARD_MATRIX_CLEAR_PIXEL_TIP = 'Clears the pixel on the defined coordinates';

Blockly.Msg.OXOCARD_MATRIX_DRAW_LINE_TITLE = 'Draw line';
Blockly.Msg.OXOCARD_MATRIX_DRAW_LINE_TIP = 'Draws a line based on the coordinates defined';
Blockly.Msg.OXOCARD_MATRIX_DRAW_LINE_FROM = 'From';
Blockly.Msg.OXOCARD_MATRIX_DRAW_LINE_TO = 'To';

Blockly.Msg.OXOCARD_MATRIX_DRAW_RECTANGLE_TITLE = 'Draw rectangle';
Blockly.Msg.OXOCARD_MATRIX_DRAW_RECTANGLE_TIP = 'Draws a rectangle based on given positions';
Blockly.Msg.OXOCARD_MATRIX_DRAW_RECTANGLE_WIDTH = 'width';
Blockly.Msg.OXOCARD_MATRIX_DRAW_RECTANGLE_HEIGHT = 'height';

Blockly.Msg.OXOCARD_MATRIX_DRAW_CIRCLE_TITLE = 'Draw circle';
Blockly.Msg.OXOCARD_MATRIX_DRAW_CIRCLE_TIP = 'Draws a circle based on given position and radius';
Blockly.Msg.OXOCARD_MATRIX_DRAW_CIRCLE_RADIUS = 'radius';

Blockly.Msg.OXOCARD_MATRIX_DRAW_TRIANGLE_TITLE = 'Draw triangle';
Blockly.Msg.OXOCARD_MATRIX_DRAW_TRIANGLE_TIP = 'Draws a triangle based on given positions';

Blockly.Msg.OXOCARD_MATRIX_SET_FILL_TITLE = 'Fill';
Blockly.Msg.OXOCARD_MATRIX_SET_FILL_TIP = 'Geometric objects are filled when drawn';

Blockly.Msg.OXOCARD_MATRIX_SET_NOFILL_TITLE = 'No fill';
Blockly.Msg.OXOCARD_MATRIX_SET_NOFILL_TIP = 'Geometric objects are not filled when drawn';

Blockly.Msg.OXOCARD_MATRIX_DRAW_NUMBER_TITLE = 'Draw number';
Blockly.Msg.OXOCARD_MATRIX_DRAW_NUMBER_TIP = 'Draws a number on the display';

Blockly.Msg.OXOCARD_MATRIX_DRAW_TEXT_TITLE = 'Draw text';
Blockly.Msg.OXOCARD_MATRIX_DRAW_TEXT_SMALL_FONT = 'Small font';
Blockly.Msg.OXOCARD_MATRIX_DRAW_TEXT_BIG_FONT = 'Big font';
Blockly.Msg.OXOCARD_MATRIX_DRAW_TEXT_TIP = 'Draws a given text on the display';

Blockly.Msg.OXOCARD_MATRIX_SET_FRAME_BUFFER_TITLE = 'Set frame buffer';
Blockly.Msg.OXOCARD_MATRIX_SET_FRAME_BUFFER_TIP = 'Sets the frame buffer which should be used at the moment';
Blockly.Msg.OXOCARD_MATRIX_COPY_FRAME_BUFFER_CONTENT_TITLE = 'Copy frame buffer content';
Blockly.Msg.OXOCARD_MATRIX_COPY_FRAME_BUFFER_CONTENT_DESTI = 'from ';
Blockly.Msg.OXOCARD_MATRIX_COPY_FRAME_BUFFER_CONTENT_SOURCE = ' to ';
Blockly.Msg.OXOCARD_MATRIX_COPY_FRAME_BUFFER_CONTENT_TIP = 'Copies the content of the given source frame buffer to the other';
Blockly.Msg.OXOCARD_MATRIX_UPDATE_TITLE = 'Update matrix';
Blockly.Msg.OXOCARD_MATRIX_UPDATE_TIP = 'Draws current image';
Blockly.Msg.OXOCARD_MATRIX_ENABLE_AUTO_UPDATE_TITLE = 'Enable auto updating';
Blockly.Msg.OXOCARD_MATRIX_ENABLE_AUTO_UPDATE_TIP = 'Enalbes that all draw functions will be drawn immediately on the display';
Blockly.Msg.OXOCARD_MATRIX_DISABLE_AUTO_UPDATE_TITLE = 'Disable auto updating';
Blockly.Msg.OXOCARD_MATRIX_DISABLE_AUTO_UPDATE_TIP = 'Disalbes that all draw functions will be drawn immediately on the display';
Blockly.Msg.OXOCARD_MATRIX_READ_PIXEL_TITLE = 'read pixel color';
Blockly.Msg.OXOCARD_MATRIX_READ_PIXEL_TIP = 'Returns the color (RGB) of the given pixel';
Blockly.Msg.OXOCARD_MATRIX_IS_PIXEL_TITLE = 'is pixel set?';
Blockly.Msg.OXOCARD_MATRIX_IS_PIXEL_TIP = 'Returns true if at least one color (RGB) of the pixel is set';

Blockly.Msg.OXOCARD_COMMENT_TITLE = 'Comment';
// System
Blockly.Msg.OXOCARD_TURN_OXOCARD_OFF_TITLE = 'Turn Oxocard off';
Blockly.Msg.OXOCARD_TURN_OXOCARD_OFF_TITLE2 = 'Click to set the Buttons';
Blockly.Msg.OXOCARD_TURN_OXOCARD_OFF_TITLE3 = 'to turn on again';
Blockly.Msg.OXOCARD_TURN_OXOCARD_OFF_TIP = 'Turns off the card';
Blockly.Msg.OXOCARD_TURN_OXOCARD_OFF_TIP2 = 'Turns off the card and set the buttons able to wake the card up';
Blockly.Msg.OXOCARD_REBOOT_TITLE = 'Reset Oxocard';
Blockly.Msg.OXOCARD_REBOOT_TIP = 'Resets the Oxocard';
Blockly.Msg.OXOCARD_AUTO_TURNOFF_WP_TITLE = 'Handle auto turnoff';
Blockly.Msg.OXOCARD_AUTO_TURNOFF_WP_TIP = 'Enters sleep mode after 2 minutes';
Blockly.Msg.OXOCARD_AUTO_TURNOFF_TITLE = 'Handle auto turnoff';
Blockly.Msg.OXOCARD_AUTO_TURNOFF_TIMEOUT_FIELD = 'with timeout [s]';
Blockly.Msg.OXOCARD_AUTO_TURNOFF_TIP = 'Enters sleep mode after given timeout';
Blockly.Msg.OXOCARD_NO_AUTO_TURNOFF_TITLE = 'Disable auto turnoff';
Blockly.Msg.OXOCARD_NO_AUTO_TURNOFF_TIP = 'Disables the auto turnoff functionality';
Blockly.Msg.OXOCARD_READ_BATTERY_VOLTAGE_TITLE = 'read battery voltage [mV]';
Blockly.Msg.OXOCARD_READ_BATTERY_VOLTAGE_TIP = 'Reads the battery voltage in V';
Blockly.Msg.OXOCARD_IS_BATTERY_FULLY_CHARGED_TITLE = 'is battery fully charged?';
Blockly.Msg.OXOCARD_IS_BATTERY_FULLY_CHARGED_TIP = 'Returns true if battery is fully charged';
Blockly.Msg.OXOCARD_IS_USB_PLUGGED_IN_TITLE = 'is USB cable plugged in?';
Blockly.Msg.OXOCARD_IS_USB_PLUGGED_IN_TIP = 'Returns true if USB cable is plugged in';
Blockly.Msg.OXOCARD_READ_TEMPERATURE_TITLE = 'read temperature [°C]';
Blockly.Msg.OXOCARD_READ_TEMPERATURE_TIP = 'Reads the temperature in °C (+/- 2°C precision)';
Blockly.Msg.OXOCARD_BUTTON_PRESSED_TITLE = 'is button pressed?';
Blockly.Msg.OXOCARD_BUTTON_PRESSED_TIP = 'Checks if the button is pressed; Returns true or false';
Blockly.Msg.OXOCARD_BUTTON_WAITFORPRESSED_TITLE = 'Wait until button is pressed:';
Blockly.Msg.OXOCARD_BUTTON_WAITFORPRESSED_TIP = 'Waits until the button is pressed';
Blockly.Msg.OXOCARD_BUTTON_L1 = 'L1 (top left)';
Blockly.Msg.OXOCARD_BUTTON_L2 = 'L2 (bottom left outside)';
Blockly.Msg.OXOCARD_BUTTON_L3 = 'L3 (bottom left inside)';
Blockly.Msg.OXOCARD_BUTTON_R1 = 'R1 (top right)';
Blockly.Msg.OXOCARD_BUTTON_R2 = 'R2 (bottom right outside)';
Blockly.Msg.OXOCARD_BUTTON_R3 = 'R3 (bottom right inside)';
Blockly.Msg.OXOCARD_BUTTON_ANY = 'Any';
Blockly.Msg.OXOCARD_GET_TIMER_SECONDS_TITLE = 'Get timer seconds';
Blockly.Msg.OXOCARD_GET_TIMER_SECONDS_TIP = 'Returns the seconds value uf the timer';
Blockly.Msg.OXOCARD_RESET_TIMER_TITLE = 'Reset timer';
Blockly.Msg.OXOCARD_RESET_TIMER_TIP = 'Resets the timer';
Blockly.Msg.OXOCARD_PRINT_TITLE = 'Print';
Blockly.Msg.OXOCARD_PRINT_TIP = 'Prints the given number or string to the console';
Blockly.Msg.OXOCARD_PRINTLN_TITLE = 'Println';
Blockly.Msg.OXOCARD_PRINTLN_TIP = 'Prints the given number or string to the console (with new line)';
Blockly.Msg.OXOCARD_UPDATE_TITLE = 'Update Oxocard';
Blockly.Msg.OXOCARD_UPDATE_TIP = 'Updates the Oxocard with the newest code from Blokly';
Blockly.Msg.OXOCARD_AP_MODE_TITLE = 'Configuration mode';
Blockly.Msg.OXOCARD_AP_MODE_TIP = 'Puts the Oxocard into the configuration/ap-mode. After connecting to the WiFi you can configure the Oxocard.';
Blockly.Msg.OXOCARD_PAIRING_MODE_TITLE = 'Pair with blockly';
Blockly.Msg.OXOCARD_PAIRING_MODE_TIP = 'Puts the Oxocard into the pairing-mode. This allows that the Oxocard can be repaired with a blockly.';

// Display
Blockly.Msg.OXOCARD_TURN_DISPLAY_ON_TITLE = 'Turn display on';
Blockly.Msg.OXOCARD_TURN_DISPLAY_ON_TIP = 'Turns the whole display on';
Blockly.Msg.OXOCARD_CLEAR_DISPLAY_TITLE = 'Clear display';
Blockly.Msg.OXOCARD_CLEAR_DISPLAY_TIP = 'Turns the whole display off';
Blockly.Msg.OXOCARD_FILL_DISPLAY_TITLE = 'Fill display';
Blockly.Msg.OXOCARD_FILL_DISPLAY_TIP = 'Writes value between 0 and 255';

Blockly.Msg.OXOCARD_DRAW_CHAR_TITLE = 'Draw char';
Blockly.Msg.OXOCARD_DRAW_CHAR_TIP = 'Draws single character (A - Z)';
Blockly.Msg.OXOCARD_DRAW_DIGIT_TITLE = 'Draw digit';
Blockly.Msg.OXOCARD_DRAW_DIGIT_TIP = 'Draws single digit (0 - 9)';
Blockly.Msg.OXOCARD_DRAW_NUMBER_TITLE = 'Draw number';
Blockly.Msg.OXOCARD_DRAW_NUMBER_TIP = 'Draws a number (0 - 99)';

Blockly.Msg.OXOCARD_SMILE_TITLE = 'Draw smile';
Blockly.Msg.OXOCARD_SMILE_TIP = 'A simple smile :)';
Blockly.Msg.OXOCARD_WINK_TITLE = 'Draw wink';
Blockly.Msg.OXOCARD_WINK_TIP = 'A simple wink ;)';

// Accelerometer
Blockly.Msg.OXOCARD_GET_ACCELERATION_TITLE = 'get acceleration';
Blockly.Msg.OXOCARD_GET_ACCELERATION_TIP = 'Returns the selected accelerometer axis value';
Blockly.Msg.OXOCARD_GET_ORIENTATION_TITLE = 'get orientation';
Blockly.Msg.OXOCARD_GET_ORIENTATION_TIP = 'Returns the orientation of the Oxocard';
Blockly.Msg.OXOCARD_IS_ORIENTATION_TITLE = 'is orientation';
Blockly.Msg.OXOCARD_IS_ORIENTATION_UP_FIELD = 'Up';
Blockly.Msg.OXOCARD_IS_ORIENTATION_DOWN_FIELD = 'Down';
Blockly.Msg.OXOCARD_IS_ORIENTATION_HORIZONTALLY_FIELD = 'Horizontally';
Blockly.Msg.OXOCARD_IS_ORIENTATION_VERTICALLY_FIELD = 'Vertically';
Blockly.Msg.OXOCARD_IS_ORIENTATION_HALF_UP_FIELD = 'Tilt up';
Blockly.Msg.OXOCARD_IS_ORIENTATION_HALF_DOWN_FIELD = 'Tilt down';
Blockly.Msg.OXOCARD_IS_ORIENTATION_HALF_LEFT_FIELD = 'Tilt left';
Blockly.Msg.OXOCARD_IS_ORIENTATION_HALF_RIGHT_FIELD = 'Tilt right';
Blockly.Msg.OXOCARD_IS_ORIENTATION_TIP = 'Returns if the Oxocard is in the given orientation';
Blockly.Msg.OXOCARD_SET_CURSOR_TITLE = 'Set cursor';
Blockly.Msg.OXOCARD_SET_CURSOR_TIP = 'Sets the position of the cursor';
Blockly.Msg.OXOCARD_GET_CURSOR_VALUE_TITLE = 'get cursor ';
Blockly.Msg.OXOCARD_GET_CURSOR_VALUE_TIP = 'Gets the x- or y-value of the cursor';

// Bluetooth
Blockly.Msg.OXOCARD_SETUP_AS_IBEACON_TITLE = 'Setup the Oxocard as iBeacon';
Blockly.Msg.OXOCARD_SETUP_AS_IBEACON_ID_FIELD = 'With the ID';
Blockly.Msg.OXOCARD_SETUP_AS_IBEACON_TIP = 'Sets the Oxocard up as iBeacon with the given ID';
Blockly.Msg.OXOCARD_FIND_IBEACON_TITLE = 'Find iBeacon with the ID';
Blockly.Msg.OXOCARD_FIND_IBEACON_TIP = 'Search for iBeacons with the given ID';

// Speaker
Blockly.Msg.OXOCARD_TONE_TITLE = 'Play tone';
Blockly.Msg.OXOCARD_TONE_FREQUENCY_FIELD = 'with frequency';
Blockly.Msg.OXOCARD_TONE_DURATION_FIELD = 'for the duration';
Blockly.Msg.OXOCARD_TONE_TIP = 'Plays a tone for the givern time';
Blockly.Msg.OXOCARD_TONE_NO_DURATION_TITLE = 'Play tone';
Blockly.Msg.OXOCARD_TONE_NO_DURATION_TIP = 'Plays a tone';
Blockly.Msg.OXOCARD_NO_TONE_TITLE = 'No tone';
Blockly.Msg.OXOCARD_NO_TONE_TIP = 'Stops the tone';

// Weather
Blockly.Msg.OXOCARD_WEATHER_GET_FROM_TITLE = 'Get weatherdata from';
Blockly.Msg.OXOCARD_WEATHER_GET_FROM_TIP = 'Gets the weatherdata from the selected city';
Blockly.Msg.OXOCARD_WEATHER_GET_VALUE_TITLE = 'read';
Blockly.Msg.OXOCARD_WEATHER_GET_VALUE_TEMP = 'Temperature (°C)';
Blockly.Msg.OXOCARD_WEATHER_GET_VALUE_DEWPOINT = 'Dew point (°C)';
Blockly.Msg.OXOCARD_WEATHER_GET_VALUE_HUMIDITY = 'Humidity (%)';
Blockly.Msg.OXOCARD_WEATHER_GET_VALUE_WIND = 'Wind (km/h)';
Blockly.Msg.OXOCARD_WEATHER_GET_VALUE_PRECIPITATION = 'Precipitation (mm)';
Blockly.Msg.OXOCARD_WEATHER_GET_VALUE_TIP = 'Reads a value from the weatherdata';
Blockly.Msg.OXOCARD_WEATHER_GET_AND_DRAW_CITY_TITLE = 'Draw city name';
Blockly.Msg.OXOCARD_WEATHER_GET_AND_DRAW_CITY_TIP = 'Draws the name of the city from the weatherdata';
Blockly.Msg.OXOCARD_WEATHER_DRAW_ICON_TITLE = 'Draw forecast icon';
Blockly.Msg.OXOCARD_WEATHER_DRAW_ICON_TIP = 'Draws the weather forecast icon';

// Communication
Blockly.Msg.OXOCARD_COMM_ENABLE_TITLE1 = 'Enable messages (sender:';
Blockly.Msg.OXOCARD_COMM_ENABLE_TIP = 'Enables the sending and receiving of messages';
Blockly.Msg.OXOCARD_COMM_DISABLE_TITLE = 'Disable messages';
Blockly.Msg.OXOCARD_COMM_DISABLE_TIP = 'Disables the sending and receiving of messages';
Blockly.Msg.OXOCARD_COMM_WAIT_FOR_MESSAGE_TITLE = 'Wait for messages';
Blockly.Msg.OXOCARD_COMM_WAIT_FOR_MESSAGE_TIP = 'Waits until a new message is received';
Blockly.Msg.OXOCARD_COMM_WAIT_FOR_MESSAGE_TIMEOUT_FIELD = 'with timeout [s]';
Blockly.Msg.OXOCARD_COMM_WAIT_FOR_MESSAGE_TIMEOUT_TIP = 'Waits for a given time for a message';
Blockly.Msg.OXOCARD_COMM_SEND_DIRECT_MESSAGE_AT = 'at';
Blockly.Msg.OXOCARD_COMM_SEND_DIRECT_MESSAGE_TITLE = 'Send direct message';
Blockly.Msg.OXOCARD_COMM_SEND_DIRECT_MESSAGE_TIP = 'Sends a message to the specified Oxocard';
Blockly.Msg.OXOCARD_COMM_SEND_DIRECT_NUMBER_TITLE = 'Send direct number';
Blockly.Msg.OXOCARD_COMM_SEND_DIRECT_NUMBER_TIP = 'Sends a number to the specified Oxocard';
Blockly.Msg.OXOCARD_COMM_CHECK_FOR_DIRECT_TITLE1 = 'new direct message';
Blockly.Msg.OXOCARD_COMM_CHECK_FOR_DIRECT_TITLE2 = 'received?';
Blockly.Msg.OXOCARD_COMM_CHECK_FOR_DIRECT_TIP = 'Checks if a new direct message was received';
Blockly.Msg.OXOCARD_COMM_COMPARE_DIRECT_MESSAGE_TITLE = 'compare direct message';
Blockly.Msg.OXOCARD_COMM_COMPARE_DIRECT_MESSAGE_FROM = 'from';
Blockly.Msg.OXOCARD_COMM_COMPARE_DIRECT_MESSAGE_TIP = 'Compares the direct message with the given message';
Blockly.Msg.OXOCARD_COMM_COMPARE_DIRECT_NUMBER_TITLE = 'compare direct number';
Blockly.Msg.OXOCARD_COMM_COMPARE_DIRECT_NUMBER_TIP = 'Compares the direct number with the given number';
Blockly.Msg.OXOCARD_COMM_GET_AND_DRAW_DIRECT_MESSAGE_TITLE = 'Draw direct message';
Blockly.Msg.OXOCARD_COMM_GET_AND_DRAW_DIRECT_MESSAGE_TIP = 'Draws the text from the received direct message';
Blockly.Msg.OXOCARD_COMM_GET_DIRECT_NUMBER_TITLE = 'get number';
Blockly.Msg.OXOCARD_COMM_GET_DIRECT_NUMBER_TIP = 'Reads the number from the received direct message';
Blockly.Msg.OXOCARD_COMM_SEND_BROADCAST_MESSAGE_TITLE = 'Send broadcast message';
Blockly.Msg.OXOCARD_COMM_SEND_BROADCAST_MESSAGE_TIP = 'Sends a broadcast message with the given text';
Blockly.Msg.OXOCARD_COMM_SEND_BROADCAST_NUMBER_TITLE = 'Send broadcast number';
Blockly.Msg.OXOCARD_COMM_SEND_BROADCAST_NUMBER_TIP = 'Broadcasts a number to every Oxocard';
Blockly.Msg.OXOCARD_COMM_CHECK_FOR_BROADCAST_TITLE = 'new message received?';
Blockly.Msg.OXOCARD_COMM_CHECK_FOR_BROADCAST_TIP = 'Checks if the received message is new and permitted';
Blockly.Msg.OXOCARD_COMM_COMPARE_BROADCAST_MESSAGE_TITLE = 'compare broadcast message';
Blockly.Msg.OXOCARD_COMM_COMPARE_BROADCAST_MESSAGE_TIP = 'Compares the received broadcast message with the given message';
Blockly.Msg.OXOCARD_COMM_COMPARE_BROADCAST_NUMBER_TITLE = 'compare broadcast number';
Blockly.Msg.OXOCARD_COMM_COMPARE_BROADCAST_NUMBER_TIP = 'Compares the received broadcast number with the given number';
Blockly.Msg.OXOCARD_COMM_GET_AND_DRAW_BROADCAST_MESSAGE_TITLE = 'Draw received message';
Blockly.Msg.OXOCARD_COMM_GET_AND_DRAW_BROADCAST_MESSAGE_TEXT = 'Text';
Blockly.Msg.OXOCARD_COMM_GET_AND_DRAW_BROADCAST_MESSAGE_SENDER = 'Sender';
Blockly.Msg.OXOCARD_COMM_GET_AND_DRAW_BROADCAST_MESSAGE_TIP = 'Draws the text or the sender of the received message';
Blockly.Msg.OXOCARD_COMM_GET_BROADCAST_NUMBER_TITLE = 'read received variable';
Blockly.Msg.OXOCARD_COMM_GET_BROADCAST_NUMBER_TIP = 'Reads the value of the defined variable of the received message';
Blockly.Msg.OXOCARD_COMM_SET_RECEIVER_LIST_TITLE = 'Set receiver';
Blockly.Msg.OXOCARD_COMM_SET_RECEIVER_LIST_TIP = 'Sets the receiver list with one or more names (e.g. "Oxocard20, Tim, James"). To reset the list, leave the input field empty. To locally send to all participants write a "*"';
Blockly.Msg.OXOCARD_COMM_SET_USER_MESSAGE_TITLE = 'Set message text';
Blockly.Msg.OXOCARD_COMM_SET_USER_MESSAGE_TIP = 'Sets the text message to be sent';
Blockly.Msg.OXOCARD_COMM_SET_USER_VALUE_TITLE = 'Set message variable';
Blockly.Msg.OXOCARD_COMM_SET_USER_VALUE_WITH = 'with';
Blockly.Msg.OXOCARD_COMM_SET_USER_VALUE_TIP = 'Sets the value of a variable to be sent';
Blockly.Msg.OXOCARD_COMM_SEND_MESSAGE_TITLE = 'Send message';
Blockly.Msg.OXOCARD_COMM_SEND_MESSAGE_TIP = 'Sends a message with previously defined text and variables';
Blockly.Msg.OXOCARD_COMM_SEND_MESSAGE_TO_TIP = 'Sends a message with previously defined text and variables to one or more receivers (e.g. "Oxocard20, Tim, James" or a "*" to locally send to all participants)';
Blockly.Msg.OXOCARD_COMM_CHECK_SENDER_TITLE = 'is message from';
Blockly.Msg.OXOCARD_COMM_CHECK_SENDER_TIP = 'Checks if received message is from the given sender';
Blockly.Msg.OXOCARD_COMM_IS_MESSAGE_FOR_ME_TITLE = 'is message for me?';
Blockly.Msg.OXOCARD_COMM_IS_MESSAGE_FOR_ME_TIP = 'Checks if received message is for me';
Blockly.Msg.OXOCARD_COMM_COMPARE_MESSAGE_TITLE = 'compare received message';
Blockly.Msg.OXOCARD_COMM_COMPARE_MESSAGE_TIP = 'Compares the received message with the given message';
Blockly.Msg.OXOCARD_COMM_CLEAR_ALL_MESSAGES_TITLE = 'Clear all received messages';
Blockly.Msg.OXOCARD_COMM_CLEAR_ALL_MESSAGES_TIP = 'Clears all the received messages';
Blockly.Msg.OXOCARD_COMM_SET_COMMUNICATION_TYPE_TITLE = 'Set communication type';
Blockly.Msg.OXOCARD_COMM_SET_COMMUNICATION_TYPE_TYPE1 = 'Local (faster, WLAN only)';
Blockly.Msg.OXOCARD_COMM_SET_COMMUNICATION_TYPE_TYPE2 = 'Global (slower, worldwide)';
Blockly.Msg.OXOCARD_COMM_SET_COMMUNICATION_TYPE_TIP = 'Sets the communication type to either local (within the same network) or global (internet)';

// Audio
Blockly.Msg.OXOCARD_AUDIO_WAIT_FOR_TONE_TITLE = 'Wait after tones';
Blockly.Msg.OXOCARD_AUDIO_WAIT_FOR_TONE_TIP = 'Waits after every following tone';
Blockly.Msg.OXOCARD_AUDIO_WAIT_NOT_FOR_TONE_TITLE = 'Continue after tones';
Blockly.Msg.OXOCARD_AUDIO_WAIT_NOT_FOR_TONE_TIP = 'Does not wait after every following tone';
Blockly.Msg.OXOCARD_AUDIO_SET_VOLUME_TITLE = 'Set volume';
Blockly.Msg.OXOCARD_AUDIO_SET_VOLUME_TIP = 'Sets the voume of the audio output';
Blockly.Msg.OXOCARD_AUDIO_GET_VOLUME_TITLE = 'get volume';
Blockly.Msg.OXOCARD_AUDIO_GET_VOLUME_TIP = 'Gets the volume from the audio output';
Blockly.Msg.OXOCARD_AUDIO_VOLUME_UP_TITLE = 'Volume up';
Blockly.Msg.OXOCARD_AUDIO_VOLUME_UP_TIP = 'Turns the volume one step up';
Blockly.Msg.OXOCARD_AUDIO_VOLUME_DOWN_TITLE = 'Volume down';
Blockly.Msg.OXOCARD_AUDIO_VOLUME_DOWN_TIP = 'Turns the volume one step down';
Blockly.Msg.OXOCARD_AUDIO_SET_OCTAVE_TITLE = 'Set octave';
Blockly.Msg.OXOCARD_AUDIO_SET_OCTAVE_TIP = 'Sets the global octave for the tones';
Blockly.Msg.OXOCARD_AUDIO_SET_WAVEFORM_TITLE = 'Set waveform';
Blockly.Msg.OXOCARD_AUDIO_WAVE_SINE = 'Sine';
Blockly.Msg.OXOCARD_AUDIO_WAVE_SQUARE = 'Square';
Blockly.Msg.OXOCARD_AUDIO_WAVE_SAWTOOTH = 'Sawtooth';
Blockly.Msg.OXOCARD_AUDIO_WAVE_TRIANGLE = 'Triangle';
Blockly.Msg.OXOCARD_AUDIO_SET_WAVEFORM_TIP = 'Sets the global waveform for the tones';
Blockly.Msg.OXOCARD_AUDIO_SET_BPM_TITLE = 'Set BPM';
Blockly.Msg.OXOCARD_AUDIO_SET_BPM_TIP = 'Sets the global beats per minute (BPM)';
Blockly.Msg.OXOCARD_AUDIO_WAIT_TITLE = 'Wait';
Blockly.Msg.OXOCARD_AUDIO_WAIT_TIP = 'Waits for a given tone duration';
Blockly.Msg.OXOCARD_AUDIO_STOP_TONE_TITLE = 'Stop tone';
Blockly.Msg.OXOCARD_AUDIO_STOP_TONE_TIP = 'Stops the current playing tone';
Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_TITLE = 'Play tone';
Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_TIP = 'Plays a tone. the octave can set with the corresponding block';
Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_HZ_TITLE = 'Play tone (Hertz)';
Blockly.Msg.OXOCARD_AUDIO_PLAY_TONE_HZ_TIP = 'Plays a tone in Hertz';
Blockly.Msg.OXOCARD_AUDIO_RECORD_FOR_TITLE = 'Record for';
Blockly.Msg.OXOCARD_AUDIO_RECORD_FOR_TIP = 'Records audio data for given time in milliseconds';
Blockly.Msg.OXOCARD_AUDIO_PLAY_RECORDED_TITLE = 'Play recorded';
Blockly.Msg.OXOCARD_AUDIO_PLAY_RECORDED_TIP = 'Plays the recorded audio data';
Blockly.Msg.OXOCARD_AUDIO_WAIT_FOR_LOUD_NOISE_TITLE = 'Wait for a loud noise';
Blockly.Msg.OXOCARD_AUDIO_WAIT_FOR_LOUD_NOISE_TIP = 'Waits until a loud noise is measured by the microphone';
Blockly.Msg.OXOCARD_AUDIO_PLAY_SOUND_EFFECT_TITLE = 'Play sound effect';
Blockly.Msg.OXOCARD_AUDIO_PLAY_SOUND_EFFECT_TIP = 'Plays a selected sound effect once or forever';

// Time
Blockly.Msg.OXOCARD_TIME_GET_MILLIS_TITLE = 'milliseconds since program start';
Blockly.Msg.OXOCARD_TIME_GET_MILLIS_TIP = 'Returns the past milliseconds since the program start';
Blockly.Msg.OXOCARD_TIME_UPDATE_TITLE = 'Synchronize time';
Blockly.Msg.OXOCARD_TIME_UPDATE_TIP = 'Updates the time on the Oxocard';
Blockly.Msg.OXOCARD_TIME_GET_FROM_TITLE = 'Use timezone from ';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_1 = 'Pacific - Samoa / Pago';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_2 = 'Pacific - Honolulu / Papeete';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_3 = 'Pacific - Auckland / Anchorage';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_4 = 'America - Los Angeles / Vancouver';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_5 = 'America - Phoenix / Calgary';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_6 = 'America - Chicago / Mexico City';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_7 = 'America - New York / Toronto';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_8 = 'America - Santiago / Halifax';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_9 = 'America - São Paulo / Buenos Aires';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_10 = 'Atlantic - Cape Verde / Praia';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_11 = 'Europe - London / Lisbon';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_12 = 'Europe - Zurich / Warsaw';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_13 = 'Europe - Athens / Helsinki';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_14 = 'Europe - Moscow / Baghdad';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_15 = 'Asia - Baku / Dubai';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_16 = 'Asia - Karachi / Yekaterinburg';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_17 = 'Asia - Dhaka / Omsk';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_18 = 'Asia - Jakarta / Bangkok';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_19 = 'Asia - Beijing / Pago';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_20 = 'Asia - Tokyo / Yakutsk';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_21 = 'Australia - Port Moresby / Brisbane';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_22 = 'Australia - Sydney / Nouméa';
Blockly.Msg.OXOCARD_TIME_GET_FROM_ID_23 = 'Pacific - Auckland / Suva';
Blockly.Msg.OXOCARD_TIME_GET_FROM_TIP = 'Gets the time of a given city';
Blockly.Msg.OXOCARD_TIME_GET_VALUE_TITLE = 'Get time ';
Blockly.Msg.OXOCARD_TIME_GET_VALUE_SECOND = 'second';
Blockly.Msg.OXOCARD_TIME_GET_VALUE_MINUTE = 'minute';
Blockly.Msg.OXOCARD_TIME_GET_VALUE_HOUR = 'hour';
Blockly.Msg.OXOCARD_TIME_GET_VALUE_WEEKDAY = 'weekday';
Blockly.Msg.OXOCARD_TIME_GET_VALUE_DAY = 'day';
Blockly.Msg.OXOCARD_TIME_GET_VALUE_MONTH = 'month';
Blockly.Msg.OXOCARD_TIME_GET_VALUE_YEAR = 'year';
Blockly.Msg.OXOCARD_TIME_GET_VALUE_TIP = 'Gets a specific value from the time (e.g. seconds)';

// List
Blockly.Msg.OXOCARD_LIST_ADD_TITLE1 = 'Append';
Blockly.Msg.OXOCARD_LIST_ADD_TITLE1_5 = ' value';
Blockly.Msg.OXOCARD_LIST_ADD_TITLE2 = 'to the list';
Blockly.Msg.OXOCARD_LIST_ADD_COLOR_TITLE2 = 'to the color list';
Blockly.Msg.OXOCARD_LIST_ADD_TIP = 'Append given value to the list';
Blockly.Msg.OXOCARD_LIST_ADD_COLOR_TIP = 'Append given value to the color list';
Blockly.Msg.OXOCARD_LIST_GET_TITLE1 = 'Get element No.';
Blockly.Msg.OXOCARD_LIST_GET_TITLE2 = 'from the list';
Blockly.Msg.OXOCARD_LIST_GET_COLOR_TITLE2 = 'from the color list';
Blockly.Msg.OXOCARD_LIST_GET_TIP = 'Get defined element from the list';
Blockly.Msg.OXOCARD_LIST_GET_COLOR_TIP = 'Get defined element from the color list';
Blockly.Msg.OXOCARD_LIST_REMOVE_TITLE1 = 'Remove element No.';
Blockly.Msg.OXOCARD_LIST_REMOVE_TITLE2 = 'from the list';
Blockly.Msg.OXOCARD_LIST_REMOVE_COLOR_TITLE2 = 'from the color list';
Blockly.Msg.OXOCARD_LIST_REMOVE_TIP = 'Remove defined element from the list';
Blockly.Msg.OXOCARD_LIST_REMOVE_COLOR_TIP = 'Remove defined element from the color list';

// Other
Blockly.Msg.OXOCARD_RANDOM_TITLE1 = 'Random from';
Blockly.Msg.OXOCARD_RANDOM_TITLE2 = 'to';
Blockly.Msg.OXOCARD_RANDOM_TIP = 'Returns a random number between (and with) the first given value to (and with) the second value';
Blockly.Msg.OXOCARD_CONNECT_TO_INTERNET_TITLE = 'Connect with internet';
Blockly.Msg.OXOCARD_CONNECT_TO_INTERNET_TIP = 'Opens a connection to the internet';

/**
 * Ardublockly instances
 */
/// Instances - Menu item to indicate that it will create a new instance
Blockly.Msg.NEW_INSTANCE = 'New instance...';
/// Instances - Menu item to rename an instance name
Blockly.Msg.RENAME_INSTANCE = 'Rename instance...';
/// Instances - Menu item to create a new instance name and apply it to that block
Blockly.Msg.NEW_INSTANCE_TITLE = 'New instance name:';
/// Instances - Confirmation message that a number of instances will be renamed to a new name
Blockly.Msg.RENAME_INSTANCE_TITLE = 'Rename all "%1" instances to:';
