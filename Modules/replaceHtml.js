module.exports = function replaceHtml(template, product){
    let output = template.replace("{{%NAME%}}", product.name);
    output = output.replace("{{%MODELNAME%}}", product.modeName);
    output = output.replace("{{%MODELNO%}}", product.modelNumber);
    output = output.replace("{{%AGE%}}", product.age);
    output = output.replace("{{%BEHAVIOUR%}}", product.behaviour);
    output = output.replace("{{%DESCRIPTION%}}", product.Description);
    output = output.replace("{{%PRICE%}}", product.price);
    output = output.replace("{{%COLOR%}}", product.color);
    output = output.replace("{{%PRODUCTIMAGE%}}", product.productImage);
    output = output.replace("{{%ID%}}", product.id);
    output = output.replace("{{%DESCRIPTION%}}", product.Description);
    return output;
}