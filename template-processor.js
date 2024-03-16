"use strict";

function TemplateProcessor(template) {
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
    let filledTemplate = this.template;

    for (const property in dictionary) {
        if (Object.prototype.hasOwnProperty.call(dictionary, property)) {
            const regex = new RegExp('{{' + property + '}}', 'g');
            filledTemplate = filledTemplate.replace(regex, dictionary[property]);
        }
    }

    return filledTemplate;
};

module.exports = TemplateProcessor;
