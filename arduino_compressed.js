// Do not edit this file; automatically generated by build.py.
'use strict';

/*
 Licensed under the Apache License, Version 2.0 (the "License"):
          http://www.apache.org/licenses/LICENSE-2.0
*/
Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.StaticTyping=new Blockly.StaticTyping;
Blockly.Arduino.addReservedWords("Blockly,setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,integer,constants,floating,point,void,boolean,char,unsigned,byte,int,word,long,float,double,string,String,array,static,volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts","user_main");
Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_MULTIPLICATIVE=3;Blockly.Arduino.ORDER_ADDITIVE=4;Blockly.Arduino.ORDER_SHIFT=5;Blockly.Arduino.ORDER_RELATIONAL=6;Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;
Blockly.Arduino.ORDER_ASSIGNMENT=14;Blockly.Arduino.ORDER_NONE=99;Blockly.Arduino.PinTypes={INPUT:"INPUT",OUTPUT:"OUTPUT",PWM:"PWM",SERVO:"SERVO",STEPPER:"STEPPER",SERIAL:"SERIAL",I2C:"I2C/TWI",SPI:"SPI"};Blockly.Arduino.DEF_FUNC_NAME=Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_;
Blockly.Arduino.init=function(a){Blockly.Arduino.includes_=Object.create(null);Blockly.Arduino.definitions_=Object.create(null);Blockly.Arduino.variables_=Object.create(null);Blockly.Arduino.codeFunctions_=Object.create(null);Blockly.Arduino.userFunctions_=Object.create(null);Blockly.Arduino.functionNames_=Object.create(null);Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);var b=Blockly.Arduino.StaticTyping.collectVarsWithTypes(a);
Blockly.Arduino.StaticTyping.setProcedureArgs(a,b);for(var c in b)Blockly.Arduino.addVariable(c,Blockly.Arduino.getArduinoType_(b[c])+" "+Blockly.Arduino.variableDB_.getName(c,Blockly.Variables.NAME_TYPE)+";")};
Blockly.Arduino.finish=function(a){var b=['#include "OXOcardRunner.h"\n'],c=[],d=[],e=[],f;for(f in Blockly.Arduino.includes_)b.push(Blockly.Arduino.includes_[f]);b.length&&b.push("\n");for(f in Blockly.Arduino.variables_)d.push(Blockly.Arduino.variables_[f]);d.length&&d.push("\n");for(f in Blockly.Arduino.definitions_)c.push(Blockly.Arduino.definitions_[f]);c.length&&c.push("\n");for(f in Blockly.Arduino.codeFunctions_)e.push(Blockly.Arduino.codeFunctions_[f]);for(f in Blockly.Arduino.userFunctions_)e.push(Blockly.Arduino.userFunctions_[f]);
e.length&&e.push("\n");delete Blockly.Arduino.includes_;delete Blockly.Arduino.definitions_;delete Blockly.Arduino.codeFunctions_;delete Blockly.Arduino.userFunctions_;delete Blockly.Arduino.functionNames_;delete Blockly.Arduino.setups_;delete Blockly.Arduino.pins_;Blockly.Arduino.variableDB_.reset();b=b.join("\n")+d.join("\n")+c.join("\n")+e.join("\n\n");a="void user_main() {\n  "+a.replace(/\n/g,"\n  ")+"\n}";return b+a};
Blockly.Arduino.addInclude=function(a,b){void 0===Blockly.Arduino.includes_[a]&&(Blockly.Arduino.includes_[a]=b)};Blockly.Arduino.addDeclaration=function(a,b){void 0===Blockly.Arduino.definitions_[a]&&(Blockly.Arduino.definitions_[a]=b)};Blockly.Arduino.addVariable=function(a,b,c){var d=!1;if(c||void 0===Blockly.Arduino.variables_[a])Blockly.Arduino.variables_[a]=b,d=!0;return d};
Blockly.Arduino.addSetup=function(a,b,c){var d=!1;if(c||void 0===Blockly.Arduino.setups_[a])Blockly.Arduino.setups_[a]=b,d=!0;return d};Blockly.Arduino.addFunction=function(a,b){if(void 0===Blockly.Arduino.codeFunctions_[a]){var c=Blockly.Arduino.variableDB_.getDistinctName(a,Blockly.Generator.NAME_TYPE);Blockly.Arduino.codeFunctions_[a]=b.replace(Blockly.Arduino.DEF_FUNC_NAME,c);Blockly.Arduino.functionNames_[a]=c}return Blockly.Arduino.functionNames_[a]};
Blockly.Arduino.reservePin=function(a,b,c,d){void 0!==Blockly.Arduino.pins_[b]?Blockly.Arduino.pins_[b]!=c?a.setWarningText(Blockly.Msg.ARD_PIN_WARN1.replace("%1",b).replace("%2",d).replace("%3",c).replace("%4",Blockly.Arduino.pins_[b]),d):a.setWarningText(null,d):(Blockly.Arduino.pins_[b]=c,a.setWarningText(null,d))};Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};
Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.Arduino.scrub_=function(a,b){if(null===b)return"";var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=this.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=this.allNestedComments(d))&&(c+=this.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=this.blockToCode(e);return c+b+e};
Blockly.Arduino.getArduinoType_=function(a){switch(a.typeId){case Blockly.Types.SHORT_NUMBER.typeId:return"char";case Blockly.Types.NUMBER.typeId:return"int";case Blockly.Types.LARGE_NUMBER.typeId:return"long";case Blockly.Types.DECIMAL.typeId:return"float";case Blockly.Types.TEXT.typeId:return"String";case Blockly.Types.CHARACTER.typeId:return"char";case Blockly.Types.BOOLEAN.typeId:return"boolean";case Blockly.Types.NULL.typeId:return"void";case Blockly.Types.UNDEF.typeId:return"undefined";case Blockly.Types.CHILD_BLOCK_MISSING.typeId:return"int";
default:return"Invalid Blockly Type"}};Blockly.Arduino.noGeneratorCodeInline=function(){return["",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.noGeneratorCodeLine=function(){return""};Blockly.Arduino.logic={};Blockly.Arduino.controls_if=function(a){var b=0,c=Blockly.Arduino.valueToCode(a,"IF"+b,Blockly.Arduino.ORDER_NONE)||"false",d=Blockly.Arduino.statementToCode(a,"DO"+b),e="if ("+c+") {\n"+d+"}";for(b=1;b<=a.elseifCount_;b++)c=Blockly.Arduino.valueToCode(a,"IF"+b,Blockly.Arduino.ORDER_NONE)||"false",d=Blockly.Arduino.statementToCode(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.elseCount_&&(d=Blockly.Arduino.statementToCode(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};
Blockly.Arduino.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.Arduino.ORDER_EQUALITY:Blockly.Arduino.ORDER_RELATIONAL,d=Blockly.Arduino.valueToCode(a,"A",c)||"0";a=Blockly.Arduino.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.Arduino.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.Arduino.ORDER_LOGICAL_AND:Blockly.Arduino.ORDER_LOGICAL_OR,d=Blockly.Arduino.valueToCode(a,"A",c)||"false";a=Blockly.Arduino.valueToCode(a,"B",c)||"false";if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};
Blockly.Arduino.logic_negate=function(a){var b=Blockly.Arduino.ORDER_UNARY_PREFIX;return["!"+(Blockly.Arduino.valueToCode(a,"BOOL",b)||"false"),b]};Blockly.Arduino.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.logic_null=function(a){return["NULL",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.logic_ternary=function(a){var b=Blockly.Arduino.valueToCode(a,"IF",Blockly.Arduino.ORDER_CONDITIONAL)||"false",c=Blockly.Arduino.valueToCode(a,"THEN",Blockly.Arduino.ORDER_CONDITIONAL)||"null";a=Blockly.Arduino.valueToCode(a,"ELSE",Blockly.Arduino.ORDER_CONDITIONAL)||"null";return[b+" ? "+c+" : "+a,Blockly.Arduino.ORDER_CONDITIONAL]};Blockly.Arduino.math={};Blockly.Arduino.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));Infinity==a?a="INFINITY":-Infinity==a&&(a="-INFINITY");return[a,Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.Arduino.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Arduino.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Arduino.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Arduino.ORDER_MULTIPLICATIVE],POWER:[null,Blockly.Arduino.ORDER_NONE]}[a.getFieldValue("OP")],c=b[0];b=b[1];var d=Blockly.Arduino.valueToCode(a,"A",b)||"0";a=Blockly.Arduino.valueToCode(a,"B",b)||"0";return c?[d+c+a,b]:["Math.pow("+d+", "+a+")",Blockly.Arduino.ORDER_UNARY_POSTFIX]};
Blockly.Arduino.math_single=function(a){var b=a.getFieldValue("OP");if("NEG"==b)return a=Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_UNARY_PREFIX)||"0","-"==a[0]&&(a=" "+a),["-"+a,Blockly.Arduino.ORDER_UNARY_PREFIX];a="ABS"==b||"ROUND"==b.substring(0,5)?Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"0":"SIN"==b||"COS"==b||"TAN"==b?Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_MULTIPLICATIVE)||"0":Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_NONE)||
"0";switch(b){case "ABS":var c="abs("+a+")";break;case "ROOT":c="sqrt("+a+")";break;case "LN":c="log("+a+")";break;case "EXP":c="exp("+a+")";break;case "POW10":c="pow(10,"+a+")";break;case "ROUND":c="round("+a+")";break;case "ROUNDUP":c="ceil("+a+")";break;case "ROUNDDOWN":c="floor("+a+")";break;case "SIN":c="sin("+a+" / 180 * Math.PI)";break;case "COS":c="cos("+a+" / 180 * Math.PI)";break;case "TAN":c="tan("+a+" / 180 * Math.PI)"}if(c)return[c,Blockly.Arduino.ORDER_UNARY_POSTFIX];switch(b){case "LOG10":c=
"log("+a+") / log(10)";break;case "ASIN":c="asin("+a+") / M_PI * 180";break;case "ACOS":c="acos("+a+") / M_PI * 180";break;case "ATAN":c="atan("+a+") / M_PI * 180";break;default:throw"Unknown math operator: "+b;}return[c,Blockly.Arduino.ORDER_MULTIPLICATIVE]};
Blockly.Arduino.math_constant=function(a){return{PI:["M_PI",Blockly.Arduino.ORDER_UNARY_POSTFIX],E:["M_E",Blockly.Arduino.ORDER_UNARY_POSTFIX],GOLDEN_RATIO:["(1 + sqrt(5)) / 2",Blockly.Arduino.ORDER_MULTIPLICATIVE],SQRT2:["M_SQRT2",Blockly.Arduino.ORDER_UNARY_POSTFIX],SQRT1_2:["M_SQRT1_2",Blockly.Arduino.ORDER_UNARY_POSTFIX],INFINITY:["INFINITY",Blockly.Arduino.ORDER_ATOMIC]}[a.getFieldValue("CONSTANT")]};
Blockly.Arduino.math_number_property=function(a){var b=Blockly.Arduino.valueToCode(a,"NUMBER_TO_CHECK",Blockly.Arduino.ORDER_MULTIPLICATIVE)||"0",c=a.getFieldValue("PROPERTY");if("PRIME"==c)return a=Blockly.Arduino.addFunction("mathIsPrime",["boolean "+Blockly.Arduino.DEF_FUNC_NAME+"(int n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods\n  if (n == 2 || n == 3) {\n    return true;\n  }\n  // False if n is NaN, negative, is 1.\n  // And false if n is divisible by 2 or 3.\n  if (isnan(n) || (n <= 1) || (n == 1) || (n % 2 == 0) || (n % 3 == 0)) {\n    return false;\n  }\n  // Check all the numbers of form 6k +/- 1, up to sqrt(n).\n  for (int x = 6; x <= sqrt(n) + 1; x += 6) {\n    if (n % (x - 1) == 0 || n % (x + 1) == 0) {\n      return false;\n    }\n  }\n  return true;\n}"].join("\n")),
Blockly.Arduino.addInclude("math","#include <math.h>"),[a+"("+b+")",Blockly.Arduino.ORDER_UNARY_POSTFIX];switch(c){case "EVEN":var d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":Blockly.Arduino.addInclude("math","#include <math.h>");d="(floor("+b+") == "+b+")";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.Arduino.valueToCode(a,"DIVISOR",Blockly.Arduino.ORDER_MULTIPLICATIVE)||"0",d=b+" % "+a+" == 0"}return[d,Blockly.Arduino.ORDER_EQUALITY]};
Blockly.Arduino.math_change=function(a){var b=Blockly.Arduino.valueToCode(a,"DELTA",Blockly.Arduino.ORDER_ADDITIVE)||"0";return Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" += "+b+";\n"};Blockly.Arduino.math_decrement=function(a){var b=Blockly.Arduino.valueToCode(a,"DELTA",Blockly.Arduino.ORDER_ADDITIVE)||"0";return Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" -= "+b+";\n"};Blockly.Arduino.math_round=Blockly.Arduino.math_single;
Blockly.Arduino.math_trig=Blockly.Arduino.math_single;Blockly.Arduino.math_on_list=Blockly.Arduino.noGeneratorCodeInline;Blockly.Arduino.math_modulo=function(a){var b=Blockly.Arduino.valueToCode(a,"DIVIDEND",Blockly.Arduino.ORDER_MULTIPLICATIVE)||"0";a=Blockly.Arduino.valueToCode(a,"DIVISOR",Blockly.Arduino.ORDER_MULTIPLICATIVE)||"0";return[b+" % "+a,Blockly.Arduino.ORDER_MULTIPLICATIVE]};
Blockly.Arduino.math_constrain=function(a){var b=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_NONE)||"0",c=Blockly.Arduino.valueToCode(a,"LOW",Blockly.Arduino.ORDER_NONE)||"0";a=Blockly.Arduino.valueToCode(a,"HIGH",Blockly.Arduino.ORDER_NONE)||"0";return["("+b+" < "+c+" ? "+c+" : ( "+b+" > "+a+" ? "+a+" : "+b+"))",Blockly.Arduino.ORDER_UNARY_POSTFIX]};
Blockly.Arduino.math_random_int=function(a){var b=Blockly.Arduino.valueToCode(a,"FROM",Blockly.Arduino.ORDER_NONE)||"0";a=Blockly.Arduino.valueToCode(a,"TO",Blockly.Arduino.ORDER_NONE)||"0";var c=Blockly.Arduino.variableDB_.getDistinctName("math_random_int",Blockly.Generator.NAME_TYPE);Blockly.Arduino.math_random_int.random_function=c;return[Blockly.Arduino.addFunction("mathRandomInt",["int "+Blockly.Arduino.DEF_FUNC_NAME+"(int min, int max) {","  if (min > max) {\n    // Swap min and max to ensure min is smaller.\n    int temp = min;\n    min = max;\n    max = temp;\n  }\n  return min + (rand() % (max - min + 1));\n}"].join("\n"))+
"("+b+", "+a+")",Blockly.Arduino.ORDER_UNARY_POSTFIX]};Blockly.Arduino.math_random_float=function(a){return["(rand() / RAND_MAX)",Blockly.Arduino.ORDER_UNARY_POSTFIX]};Blockly.Arduino.oxocard_matrix_draw_image=function(){for(var a="oxocard.matrix->drawImage(",b=0;8>b;b++){0!=b&&(a+="\t\t");a+="0b";for(var c=0;8>c;c++)a+="TRUE"==this.getFieldValue(b+""+c)?"1":"0";a+=",";7!=b&&(a+="\n")}console.log(a);return a+" 0, 0);\n"};
Blockly.Arduino.oxocard_matrix_set_color=function(){var a=this.getFieldValue("COLOR"),b=parseInt(a.substring(1,3),16),c=parseInt(a.substring(3,5),16);a=parseInt(a.substring(5,7),16);return"oxocard.matrix->setForeColor("+("makeRGBVal("+b+", "+c+", "+a+"));\n")};Blockly.Arduino.oxocard_matrix_update=function(){return"oxocard.matrix->update();"};Blockly.Arduino.procedures={};
Blockly.Arduino.procedures_defreturn=function(a){var b=Blockly.Arduino.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=Blockly.Arduino.statementToCode(a,"STACK");Blockly.Arduino.STATEMENT_PREFIX&&(c=Blockly.Arduino.prefixLines(Blockly.Arduino.STATEMENT_PREFIX.replace(/%1/g,"'"+a.id+"'"),Blockly.Arduino.INDENT)+c);Blockly.Arduino.INFINITE_LOOP_TRAP&&(c=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+c);var d=Blockly.Arduino.valueToCode(a,"RETURN",Blockly.Arduino.ORDER_NONE)||
"";d&&(d="  return "+d+";\n");for(var e=[],f=0;f<a.arguments_.length;f++)e[f]=Blockly.Arduino.getArduinoType_(a.getArgType(a.arguments_[f]))+" "+Blockly.Arduino.variableDB_.getName(a.arguments_[f],Blockly.Variables.NAME_TYPE);f=Blockly.Types.NULL;a.getReturnType&&(f=a.getReturnType());f=Blockly.Arduino.getArduinoType_(f);c=f+" "+b+"("+e.join(", ")+") {\n"+c+d+"}";c=Blockly.Arduino.scrub_(a,c);Blockly.Arduino.userFunctions_[b]=c;return null};Blockly.Arduino.procedures_defnoreturn=Blockly.Arduino.procedures_defreturn;
Blockly.Arduino.procedures_callreturn=function(a){for(var b=Blockly.Arduino.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Arduino.valueToCode(a,"ARG"+d,Blockly.Arduino.ORDER_NONE)||"null";return[b+"("+c.join(", ")+")",Blockly.Arduino.ORDER_UNARY_POSTFIX]};
Blockly.Arduino.procedures_callnoreturn=function(a){for(var b=Blockly.Arduino.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Arduino.valueToCode(a,"ARG"+d,Blockly.Arduino.ORDER_NONE)||"null";return b+"("+c.join(", ")+");\n"};
Blockly.Arduino.procedures_ifreturn=function(a){var b="if ("+(Blockly.Arduino.valueToCode(a,"CONDITION",Blockly.Arduino.ORDER_NONE)||"false")+") {\n";a.hasReturnValue_?(a=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_NONE)||"null",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};
Blockly.Arduino.arduino_functions=function(a){var b=Blockly.Arduino.statementToCode(a,"SETUP_FUNC");b&&Blockly.Arduino.addSetup("userSetupCode",b,!0);a=a.getInputTargetBlock("LOOP_FUNC");b=Blockly.Arduino.blockToCode(a);if(!goog.isString(b))throw'Expecting code from statement block "'+a.type+'".';return b};Blockly.Arduino.time={};Blockly.Arduino.oxocard_time_delay=function(a){return"delay("+(Blockly.Arduino.valueToCode(a,"DELAY_TIME_MILI",Blockly.Arduino.ORDER_ATOMIC)||"0")+");\n"};Blockly.Arduino.oxocard_infinite_loop=function(a){return"while(1);\n"};Blockly.Arduino.variables={};Blockly.Arduino.variables_get=function(a){return[Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.variables_set=function(a){var b=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_ASSIGNMENT)||"0";return Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+b+";\n"};
Blockly.Arduino.variables_set_type=function(a){var b=Blockly.Arduino.valueToCode(a,"VARIABLE_SETTYPE_INPUT",Blockly.Arduino.ORDER_ASSIGNMENT)||"0";return["("+Blockly.Arduino.getArduinoType_(Blockly.Types[a.getFieldValue("VARIABLE_SETTYPE_TYPE")])+")("+b+")",Blockly.Arduino.ORDER_ATOMIC]};