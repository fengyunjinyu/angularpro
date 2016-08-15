(function( window, undefined ) {

    var jQuery = {};

    jQuery.extend = function() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if ( typeof target === "boolean" ) {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
            target = {};
        }

        // extend jQuery itself if only one argument is passed
        if ( length === i ) {
            target = this;
            --i;
        }

        for ( ; i < length; i++ ) {
            // Only deal with non-null/undefined values
            if ( (options = arguments[ i ]) != null ) {
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];

                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];

                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[ name ] = jQuery.extend( deep, clone, copy );

                        // Don't bring in undefined values
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };
    window.jQuery = window.$ = jQuery;




})( window );

function dline(){

    console.log("jpss");

}

var drawCircle=function(options) {
    console.log("jxx");
    var defaults = {
        elem: null,
        size: 0,
        color:"#00a2ea"
    };
    var opts = $.extend({}, defaults, options);
    if (!opts.elem) {
        return;
    }

    var r = new Raphael(opts.elem, 110, 110),
        rad = 54,	  //圆半径
        init = true,
        speed = 200,
        z = null,
        txt = null;
		
		//绘制灰色原型
		
	function drawCircle(){
		var circle = r.circle(55,55,54);
        circle.attr("stroke" , "#e8e8e8");
        circle.attr("stroke-width","2");
		
	}
        

    function minit() {
		/*
    	var circle = r.circle(55,55,54);
        circle.attr("stroke" , "#e8e8e8");
        circle.attr("stroke-width","2");
		*/
        r.customAttributes.arc = function(value, total, R) {
            var alpha = 360 / total * value,  // x°
                a = (90 - alpha) * Math.PI / 180,
                x = 55 + R * Math.cos(a),
                y = 55 - R * Math.sin(a),
                path;
            if (total == value) {
                //M50,28A22,22,0,0,1,50,72
                path = [
                    ["M", 55, 55 - R],
                    ["A", R, R, 1, 1, 1, 49.99, 50 - R]
                ];
            }else{
                path = [
                    ["M", 55, 55 - R],
                    ["A", R, R, 0, +(alpha > 180), 1, x, y]
                ];
            }
            return {
                path: path
            }
        };

        r.path().attr({
            arc: [43, 43, rad],
            'stroke-width': 0,
            'stroke': "none"
        });

        if(opts.size){
            z = r.path().attr({
                arc: [0.01, 100, rad],
                'stroke-width':2,
                'stroke': opts.color
            });
            updateVal(opts.size, 100, rad, z, 2);
        }
        /*

        txt = r.text(50, 50, opts.size).attr({
            font: "100 30px Arial",
            fill: "#000000"
        });
        r.text(73, 55,"%").attr({
            font: "100 15px Arial",
            fill: "#ff4657"
        });
        */
    }

    function updateVal(value, total, R, hand, id) {
        if (init) {
        	if(value<total){
        		hand.animate({
                    arc: [value, total, R]
                }, 900, ">");
        	}else{
        		hand.animate({
                    arc: [99.99, total, R]
                }, 900, ">");
        	}
        } else {
            if (!value || value == total) {
                value = total;
                hand.animate({
                    arc: [value, total, R]
                }, 750, "bounce", function() {
                    hand.attr({
                        arc: [0, total, R]
                    });
                });
            } else {
                hand.animate({
                    arc: [value, total, R]
                }, 750, "elastic");
            }
        }
    }
    //继承修改参数对象  ， 不可添加
    this.extend = function(options){
        opts = $.extend({}, opts, options);
    };
    //重新绘制
    this.reDraw  = function(){
        minit();
    };
	this.drawCircle = function(){
		r.clear();
		drawCircle();
	}
	this.drawPath = function(){
		minit();
	}
    //清除当前svg内容
    this.clearDraw = function(){
		//r.path.remove();
        r.clear();
    };
    this.drawPathSize = function(size){
        this.extend({size:size});
        this.drawPath();
    }
};