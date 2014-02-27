JS/Html Project Template
------------------------

This template is a skeleton project for a JS/Html project.

It has **Grunt** build system and **Jasmine** testings.


#### Commands
* To first install all the dependencies, run `npm install`
* To build, run `grunt`
* To Test, run `grunt test`
* And I also added `grunt watch` to automatically build and test upon change

#### Folder structures
* `src` will hold all the source files for you projects (.js)
* `lib` will contain all the 3rd party libraries (for example, lodash, Q, etc.)
* `config` all the code that is configurations (for example, js objects with settings)
* `test` will hold all the test code and helpers
* `static` will hold all the static files in your projects (for example, all the html files, css, favicon etc.)

#### Build
When built, all the `.js` files will be concatenated and copied into `target/main.js`.  
It will concatenate it in the following way:

* First all the files in `lib` folder,
* then `config` 
* and eventually `src` folder.

Then all the files in `static` folder will be copied into `target` folder as it is.

#### Testings
All the tests must be in the `test` folder and end with `*.spec.js`.
