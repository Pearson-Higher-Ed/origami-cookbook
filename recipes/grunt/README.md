# Building components manually using [Grunt](http://gruntjs.com/)

It is preferable for new products to use [Gulp.js](http://gulpjs.com/) as a build tool, since the [Origami build tools](https://github.com/Financial-Times/origami-build-tools) provide composable tasks that can be used in a gulp build stream. This recipe is targeted to older products that use [Grunt](http://gruntjs.com/) as their build tool. In the example, the build tools are invoked via the command-line to generate the CSS and JS bundles.

## Building and running the example

1. Change into the recipe's root directory: `cd recipes/grunt`
2. Run `npm install && bower install`
3. Run `grunt serve`

To simply build the bundle, run `grunt`. This will output `build/main.js` and `build/main.css`.
