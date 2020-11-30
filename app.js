require('dotenv').config();
// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const text = 'Hello, world!';
const target = 'ru';

async function translateText() {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
    console.log(` ============> (${target}) ${translation}`);
  });
}

translateText();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const textnew = 'اهلا كيف حالك';

// Detects the language. "text" can be a string for detecting the language of
// a single piece of text, or an array of strings for detecting the languages
// of multiple texts.
async function detectLanguage() {
  let [detections] = await translate.detect(textnew);
  detections = Array.isArray(detections) ? detections : [detections];
  console.log('Detections:====================>');
  detections.forEach(detection => {
    console.log(`${detection.input} => ${detection.language}`);
  });
}

detectLanguage();