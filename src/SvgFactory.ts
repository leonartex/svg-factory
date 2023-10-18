"use strict";
const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;

class SvgFactory {
    baseSvg: any;
    constructor(svg: string)
    {
        this.baseSvg = new JSDOM(svg);
    }

    public append(
        anchorId: string,
        element: SvgFactory|string,
    ){
        if(typeof element == 'string'){
            element = new SvgFactory(element);
        }
        // console.log(this.baseSvg.window.document.querySelector("#glauber").appendChild(el.window.document.body));
        this.baseSvg.window.document.querySelector('#'+anchorId).appendChild(element.baseSvg.window.document.body.firstChild);
    }

    public toSvg()
    {
        return this.baseSvg.window.document.body.innerHTML;
    }

    public async saveFile(name: string, path: string = '')
    {
        await fs.writeFileSync('./'+path+name, this.baseSvg.window.document.body.innerHTML);
    }
}

export { SvgFactory }
