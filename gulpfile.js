//一，定义模块
//导入工具包require("node_modules里对应的模块")
let gulp = require("gulp");//本地安装gulp所用到的地方
let connect = require("gulp-connect");
let sass = require("gulp-sass");


//二，定义任务
gulp.task("copy",function(){
	gulp.src(["./biyao/**/*"])
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\biyao"));
});

// gulp.task("sever",function(){
// 	connect.server({
// 		root:"localhost",
// 		livereload: true	
// 	})
// })

// gulp.task("sass",function(){
// 	gulp.src("./sass/**/*.sass")
// 	.pipe(sass())
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\biyao\\css\\shopCar.css"));
// });

gulp.task("watch",function(){
	gulp.watch("biyao/**/*",["copy"]);

})
