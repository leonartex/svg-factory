"use strict";
const { SvgFactory } = require('./SvgFactory');
const fs = require('fs');

async function show() {
    console.log(SvgFactory);

    let mapMarkerSvg = await fs.readFileSync('./misc/map-marker.svg', { encoding: 'utf8' });
    let starSvg = await fs.readFileSync('./misc/star.svg', { encoding: 'utf8' });
    let circle = await fs.readFileSync('./misc/circle.svg', { encoding: 'utf8' });

    let mapMarker = new SvgFactory(mapMarkerSvg);
    mapMarker.append('glauber', circle);
    await mapMarker.saveFile('marcador.svg', 'icons/');
}

show();