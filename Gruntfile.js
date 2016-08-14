/**
 * grunt 项目打包
 * 配置文件
 */
module.exports = function(grunt){

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: false,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            },
            development:{
                files:[{
                    expand:true,
                    cwd:'modules/**/{,*/}*.js',
                    src:'*.js',
                    dest:'build/modules.js'
                }]
            }
        },
        less:{
            listdo: {
                files:[
                    {
                        expand:true,
                        cwd:'./html',
                        src:"*.less",
                        dest: "./html",
                        ext:'.css'
                    }
                ]
            },
            development : {
                files:[
                    {
                        expand:true,
                        cwd:'./static/less',
                        src:"*.less",
                        dest: "./static/css",
                        ext:'.css'
                    }
                ]
            },
            production: {
                options: {
                    paths: ['./static'],
                    files:{
                        'css/*.css':'less/*.less'
                    }
                }
            }
        },
        autoprefixer:{
            options: {
                browserslist:['last 2 versions' , 'chrome' , 'ie'],
                map:true
            },
            test:{
                src:'static/css/test.css',
                dest:'build/css/test.css'
            },
            development:{
                expand: true,
                flatten: true,//是否取代原先文件名
                src: 'static/css/*.css',
                dest: 'build/css/auto/'
            }


        },
        cssmin:{
            options:{
                shorthandCompacting: false,
                roundingPrecision:-1
            },
            target:{
                files:[{
                    expand:true,
                    cwd:'static/css',
                    src:[ '*.css','!*.min.css'],
                    dest:'build/css',
                    ext:'.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-autoprefixer");

    grunt.registerTask('default',[
        'uglify:development',
        'less:development',
        'autoprefixer:development',
        'cssmin'
    ]);

    grunt.registerTask('compileless' , [
        'less:listdo'

    ]);

}
