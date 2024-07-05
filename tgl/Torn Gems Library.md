# Torn Gems Library

<strong>This is a library with two parts: Langer and CustomElements. Langer is a language handler which depends on a language json file loaded via the "\_required/Functions.js". CustomElements is a set of classes to create custom UI components. I made these to have consistent elements with styling that is already done for some extent.

Be sure to add your JSON files in Functions.js. Note that the language handler needs the alias "Lang" to work. Otherwise, you will have to edit the script.</strong>

`{ alias: 'Lang', path: './assets/data/---YOUR FILE NAME---.json' }`

## Usage table of CustomElements

| Class                            | Element           | Attributes                   | Possible values                                                                                   | Example                                                                                 |
| -------------------------------- | ----------------- | ---------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Buttons](#buttons)              | tgl-button        | btype; size; shape; content  | accept, cancel, back, normal, success, warning, danger; any number; rounded, square; any string   | `<tgl-button btype="back" size="1" shape="square" content="Content text"></tgl-button>` |
| [LanguageMenus](#language-menus) | tgl-language-menu | languages                    | Whatever you name the field in your JSON, in my case: EN HU NL                                    | `<tgl-language-menu languages="EN HU NL"></tgl-language-menu>`                          |
| [Sliders](#sliders)              | tgl-slider        | size; shape; min; max; value | any number; rounded, square; any number; any number; any number;                                  | `<tgl-slider size="2" shape="square" min="0" max="100" value="30"></tgl-slider>`        |
| [Slide Toggles](#slid-toggles)   | tgl-slide-toggle  | size; shape;                 | any number; rounded, square;                                                                      | `<tgl-slide-toggle size="1" shape="square"><tgl-slide-toggle>`                          |
| [Tags](#tags)                    | tgl-tag           | tag-type; tag-icon           | script, prog, docs, tools; Whatever you name the field in your JSON, in my case: MD, CPP, VSC, JS | `<tgl-tag tag-type="docs" tag-icon="MD"></tgl-tag>`                                     |
| [Tag Bars](#tag-bar)             | tgl-tag-bar       |                              |                                                                                                   | `<tgl-tag-bar> <tgl-tag></tgl-tag> </tgl-tag-bar>`                                      |

<br>
