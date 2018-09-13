//构造函数创建类。类名第一个字母大写
window.onload = function(){
	let box = document.getElementById("box");
	let arrImgs = ["img/1.jpg","img/2.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/12.jpg"];
	let a = new GlideImgs(box,1080,360,0,10,"rgba(0,0,0,0)",arrImgs,6,4000);
	a.ulBox(0,20,10,10);
	a.imgsMove();
}

function Accordion(){
	this.addDom = addDom;
	this.objDom = objDom;
	this.width = width;
	this.height	= height;
	this.ulDom = ulDom;
	this.imgsArr = imgsArr;
}
Accordion.prototype.creatUI = function() {
	this.ulDom = document.createElement(ul);
	this.ulDom.style.width = this.width;
	this.ulDom.style.height = this.height;
	this.ulDom.style.position = "relative";
	this.addDom.appendChild(this.ulDom);

	for(let i=0;i<this.imgsArr.length-1;i++){
		let li = document.createElement("li");
		this.ulDom.appendChild(li);
		li.style.zIndex = "100";
		li.style.width = this.width-10+"px";
		li.style.height = this.height+"px";
		li.style.cursor = "pointer";
		li.style.float = "left";
		li.style.listStyle = "none";
		li.style.paddingLeft = "10px";

	}
	
	this.lis = this.ulDom.childNodes;
	this.lis[0].style.paddingLeft = "0";
	for(let j=0;j<this.lis.length-1;j++){
		let a = document.createElement("a");
		this.lis[j].appendChild(a);
		a.style.width = this.width-10+"px";
		a.style.height = this.height+"px";
		a.style.display = "block";
		a.style.cursor = "pointer";
		a.style.float = "left";


	}
};
function GlideImgs(objBox,width,height,left,top,lisColor,imgSrc,imgNum,timeSpace){
		this.objBox = objBox;
		this.width = width;
		this.height = height;
		this.left = left;
		this.top = top;
		this.lisColor = lisColor;
		this.imgSrc = imgSrc;
		this.imgNum = imgNum;
		this.timeSpace = timeSpace;
		this.spanLeft = null;
		this.spanRight = null;
		
		//初始化轮播框
		this.objBox.style.position = "relative";
		this.objBox.style.left = this.left+"px";
		this.objBox.style.top = this.top+"px";
		this.objBox.style.width = this.width+"px";
		this.objBox.style.height = this.height+"px";
		this.objBox.style.overflow = "hidden";
		this.objBox.style.margin = "0 auto";
		
		this.ulBox = (right,bottom,width,height)=>{
			for(let m=0;m<this.imgNum;m++){
				this.objBox.appendChild( document.createElement("img"));
			}
			
			this.img = this.objBox.childNodes;
			for(let j=0;j<this.img.length;j++){
				this.img[j].style.position = "absolute";
				this.img[j].style.width = this.width+"px";
				this.img[j].style.height = this.height+"px";
				this.img[j].src = imgSrc[j];
				this.img[j].style.opacitys = "0";
			}
				this.img[0].style.zIndex = "1";
			let ul = document.createElement("ul");
			this.objBox.appendChild(ul);
			ul.style.position = 'absolute';
			ul.style.width = "880px";
			ul.style.height = "17px";
			ul.style.display = "flex";
			ul.style.justifyContent = "center";
			ul.style.right = right+"px";
			ul.style.bottom = bottom+"px";
			ul.style.margin = "0";
			ul.style.zIndex = "10";
			
			for(let i=0;i<this.imgNum;i++){
				let li = document.createElement("li");
				ul.appendChild(li);
				li.style.width = width+"px";
				li.style.height = height+"px";
				li.style.borderRadius  = "50%";
				li.style.border = "2px solid #523669";
				li.style.cursor = "pointer";
				li.style.backgroundColor = this.lisColor;
				li.style.float = "left";
				li.style.listStyle = "none";
				li.style.margin = "0 10px";
			}
			
			this.lis = this.objBox.lastElementChild.childNodes;
			this.lis[0].style.backgroundColor = '#F7B200';
			this.lis[0].style.border = "2px solid rgba(0,0,0,0)"; 
			for(let n=0;n<this.lis.length;n++){
				this.lis[n].onclick = ()=>{this.goImg(n);};
			}
			
			this.spanLeft = document.createElement("span");
			this.objBox.appendChild(this.spanLeft);
			this.spanLeft.addEventListener("click",this.toLeft,false);
			this.spanLeft.style.cssText = "display:none;position: absolute; top:50%; left:220px; z-index:10; margin-top:-32px; width: 48px; height:48px; background:url(img/slider-left.png) no-repeat center center; background-size: 100% 100%; border-radius:2px; cursor:pointer; ";
			this.spanLeft.className = "banner-left-span";

			this.spanRight = document.createElement("span");
			this.objBox.appendChild(this.spanRight);
			this.spanRight.addEventListener("click",this.toRight,false);
			this.spanRight.style.cssText = "display:none;position: absolute; top:50%; right:20px; z-index:10; margin-top:-24px; width: 48px; height:48px; background:url(img/slider-right.png) no-repeat center center; background-size: 100% 100%; border-radius:2px; cursor:pointer; ";
			this.spanRight.className = "banner-right-span";
		}
		
		let ordTimer;
		this.ord = 0;//记录图片序号
		this.imgsMove = ()=>{
			ordTimer = setInterval(()=>{
				let outOrd = this.ord;
				this.ord++;
				if(this.ord>this.imgNum-1){
					this.ord = 0;
				}
				this.changes(outOrd,this.ord);
				this.changeLis(this.ord);
			},this.timeSpace)
		}
		
		this.toLeft = ()=>{
			let outOrd = this.ord;
			this.ord--;
			if(this.ord<0){
				 this.ord = this.imgSrc.length-1;
			}
			console.log(outOrd,this.ord);
			console.log(this.imgSrc.length)
			this.changes(outOrd,this.ord);
			this.changeLis(this.ord);
		}

		this.toRight = ()=>{
			let outOrd = this.ord;
			this.ord++;
			if(this.ord>this.imgSrc.length-1){
				 this.ord = 0;
			}
			console.log(outOrd,this.ord);
			console.log(this.imgSrc.length)
			this.changes(outOrd,this.ord);
			this.changeLis(this.ord);
		}

		this.changes = function(outOrd,sub){
			//把指定的图片显示出来[outNum]淡出，[inNum]淡ru
			let imgs = this.objBox.childNodes;
			for(var i=0;i<imgs.length-3;i++){
				imgs[i].style.zIndex = "0";
			}
			imgs[outOrd].style.zIndex = "2";
			imgs[sub].style.zIndex = "1";
			
			let opacitys = 0;
			let director = 1;
			let offTime = setInterval(function(){
				//改变数据
				opacitys = opacitys+director*0.05;
				//处理边界
					if(opacitys>=1){
						opacitys=1;
						clearInterval(offTime);
					}
				//改变样式
				imgs[outOrd].style.opacity =1-opacitys;
				imgs[sub].style.opacity = opacitys;	
				},this.timeSpace/2/(this.width/this.inc))
		}
		
		this.changeLis = function(num){
			for(let i=0;i<this.lis.length;i++){
				this.lis[i].style.border = "2px solid #523669";
				this.lis[i].style.backgroundColor = this.lisColor;
			}
			this.lis[num].style.backgroundColor = "#F7B200";
			this.lis[num].style.border = "2px solid rgba(0,0,0,0)"; 
		}
		
		this.goImg = (num)=>{
			window.clearInterval(ordTimer);
			let outOrd = ord;
			ord = num;
			this.changeLis(num);
			this.changes(outOrd,num);
			this.imgsMove();
		}
		
		this.objBox.onmouseover = ()=>{
			window.clearInterval(ordTimer);
		}
		
		this.objBox.onmouseout = ()=>{
			this.imgsMove();
		}
	}

