/**
 *  created by ling on 2017-12-4 18:11.
 */
(function ($) {

    // var $page = $(".page");
    var PI = Math.PI,

        $bookWrap = $(".book-wrap"),

        pointX,

        pointY,

        offsetLeft = $bookWrap[0].offsetLeft,

        offsetTop = $bookWrap[0].offsetTop,

        pageWidth = $bookWrap[0].clientWidth,

        pageHeight = $bookWrap[0].clientHeight,

        pointAngTan = 0;

    //角度转弧度
    function getRad(degrees) {
        return degrees/180*PI;
    }
    //弧度转角度
    function getDeg(radians) {
        return radians*180/PI;
    }
    //翻页
    function flip(disX,disY,rotateAngle){
        var deg = -rotateAngle;
        var cssArgs = {
            "transform":"translate("+disX+"px"+","+disY+"px) "
            + " rotate(" + deg
            + "deg)"
        }
        this.css(cssArgs);
    }
    //获取鼠标在page内的相对坐标
    function getPoint(evt) {
        var coordinate = [];
        coordinate[0] = evt.pageX - offsetLeft;
        coordinate[1] = evt.pageY - offsetTop;
        pointX = coordinate[0];
        pointY = coordinate[1];
        return coordinate;
    }
    //
    function getDel(direction) {
        /*
        * r1:右上翻页
        * r2:右下翻页
        * l1:左上翻页
        * l2:左下翻页
        * */
        var distance = [];
        switch (direction){
            case "r1":
                break;
            case "r2":
                distance[0] = pointX;
                distance[1] = pointY;
                console.log("i am run")

                break;
            default:
                break;
        }
        return distance;
    }

    $.fn.flip = flip;

    console.log(offsetLeft,offsetTop)
    var deg2 = 2 * getDeg(Math.atan(30/30));
    console.log("deg2",deg2)

   $bookWrap[0].addEventListener("mouseover",function (evt) {
        console.log(getPoint(evt))
    });
   $bookWrap[0].addEventListener("mousemove",function (evt) {
        var point = getPoint(evt);
        var pointDistance = getDel("r2");
        var deg = 2 * getDeg(Math.atan(pointY/(pageWidth-pointX)));

        $(".corner").flip(pointDistance[0],pointDistance[1],deg);
        console.log("xy",point,pointDistance,deg+"deg",pointY/(pageWidth-pointX));

    });
   $bookWrap[0].addEventListener("mouseup",function (evt) {
        console.log(getPoint(evt))

    });

})(jQuery)