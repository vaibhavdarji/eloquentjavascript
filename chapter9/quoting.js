/**
 * Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.

Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.
*/



const quotingStyle = text => text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');

quotingStyle("'I'm the cook,' he said, 'it's my job.'");
quotingStyle("'I'm the cook' he said, 'it's my job'");