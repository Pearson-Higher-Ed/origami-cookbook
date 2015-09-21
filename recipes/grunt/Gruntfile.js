module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({

		connect: {
			local: {
				options: {
					port: 9000,
					base: '.',
					keepalive: true
				}
			}
		},

		origami: {
			dist: {
				js: 'origami-main.js',
				sass: 'origami-main.scss'
			}
		}
	});

	grunt.registerMultiTask('origami', function () {
		var done = this.async();

		function dataToArgs(task, data) {
			var args = [];

			args.push(task);

			Object.keys(data).forEach(function (key) {
				args.push('--' + key);
				args.push(data[key]);
			});

			return args;
		}

		var obtProcOptions = {
			cmd: 'obt',
			args: dataToArgs('build', this.data),
			opts: {
				stdio: 'inherit'
			}
		};

		grunt.util.spawn(obtProcOptions, done);
	});

	grunt.registerTask('serve', ['origami', 'connect']);

	grunt.registerTask('default', ['origami']);

};
