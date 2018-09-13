//一，定义模块
//导入工具包require("node_modules里对应的模块")
let gulp = require("gulp");//本地安装gulp所用到的地方
let connect = require("gulp-connect");



//二，定义任务
gulp.task("copy",function(){
	gulp.src(["./biyao/**/*"])
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\biyao"));
});

gulp.task("sever",function(){
	connect.server({
		root:"localhost",
		livereload: true	
	})
})

gulp.task("watch",function(){
	gulp.watch("biyao/**/*",["copy"]);
})