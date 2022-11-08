const translate = require('translate');
const input = require('input');
const colors = require('colors');
const Gradient = require('gradient-string');
const config = require('./db/config.json')

console.clear();



function main() {

    console.log(Gradient.retro(`════════════════════════════════════════════════════════════════════════════                
     ████████╗██████╗  █████╗ ██████╗ ██╗   ██╗████████╗ █████╗ ██████╗ 
     ╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██║   ██║╚══██╔══╝██╔══██╗██╔══██╗
        ██║   ██████╔╝███████║██║  ██║██║   ██║   ██║   ██║  ██║██████╔╝
        ██║   ██╔══██╗██╔══██║██║  ██║██║   ██║   ██║   ██║  ██║██╔══██╗
        ██║   ██║  ██║██║  ██║██████╔╝╚██████╔╝   ██║   ╚█████╔╝██║  ██║
        ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝    ╚═╝    ╚════╝ ╚═╝  ╚═╝`))
    console.log(Gradient.retro(`════════════════════════════════════════════════════════════════════════════`))
    console.log('                              By: F4kieLofy\n'.blue)
}


async function translateString( str, translateTo ) {
    translate.engine = `${config.engine}`;
    translate.from = `${config.sua_linguagem}`;
    translate.key = `${config.key}`;

	const translated_string = await translate(str, translateTo);
	console.log('[TRADUTOR]> '.yellow + translated_string);
    
}

// Português > Inglês
async function traduzindo(){
    main();
    var texto = await input.text('> Digite o texto que quer traduzir: ')

    translateString(texto, { to: "en" });
}

traduzindo()