(function($) {
    $.fn.jzoom = function(options) {
        return this.each(function() {
            //设置默认属性
            var defaultOptions = {
                width: 400,
                height: 400,
                position: "right",
                offsetX: 20,
                offsetY: 0,
                opacity: 0.6,
                bgColor: "#fff",
                loading: "Loading..."
            };

            //用户自定义属性
            options = $.extend(true, defaultOptions, options);

            //获取容器，设置默认定位，并使图片的宽高与容器相同
            var $jzoom = $(this);
            var jzoomPosition = $jzoom.css('position');
            if (jzoomPosition === "static") {
                $jzoom.css('position', 'relative');
            }
            $jzoom.find('img').css({
                width: $jzoom.width() + "px",
                height: $jzoom.height() + "px"
            });

            //获取镜片div，设置样式，部分样式从属性设置中取得
            var $jzoomLens = $('<div></div>');
            $jzoomLens.css({
                position: "absolute",
                zIndex: "990",
                opacity: defaultOptions.opacity,
                cursor: "move",
                border: "1px solid #ccc",
                backgroundColor: defaultOptions.bgColor
            });

            //获取放大镜div，设置样式，部分样式从属性设置中取得
            var $jzoomDiv = $('<div></div>');
            var jzoomDivLeft, jzoomDivTop;
            switch (defaultOptions.position) {
                case "top":
                    jzoomDivLeft = 0;
                    jzoomDivTop = -$jzoom.height() - defaultOptions.offsetY;
                    break;
                case "right":
                    jzoomDivLeft = $jzoom.width() + defaultOptions.offsetX;
                    jzoomDivTop = 0;
                    break;
                case "bottom":
                    jzoomDivLeft = 0;
                    jzoomDivTop = $jzoom.height() + defaultOptions.offsetY;
                    break;
                case "left":
                    jzoomDivLeft = -$jzoom.width() - defaultOptions.offsetX;
                    jzoomDivTop = 0;
                    break;
            }
            $jzoomDiv.css({
                left: jzoomDivLeft + "px",
                top: jzoomDivTop + "px",
                width: defaultOptions.width + "px",
                height: defaultOptions.height + "px",
                position: "absolute",
                zIndex: "999",
                overflow: "hidden",
                border: "1px solid #ccc",
                fontSize: "20px",
                textAlign: "center",
                lineHeight: defaultOptions.height + "px"
            });

            //获取大图，并设置后缀名和文件格式，与载入文字一起添加到容器中
            var $zoomImg = createZoomImg(defaultOptions.suffixName, defaultOptions.imgType);
            $jzoomDiv.append($zoomImg).append(defaultOptions.loading);

            //声明全局变量和常量
            var flag = 0,
                JzoomOffset = $jzoom.offset(),
                CriticalX, CriticalY,
                finalX, finalY,
                DistProportionX, DistProportionY;

            //添加鼠标事件
            //由于大图的宽高在首次进入容器时才能得到，因此一些依赖它的变量和常量的计算与其一起放到函数中
            $jzoom.mouseenter(function() {
                    $jzoomLens.show();
                    $jzoomDiv.show();
                    if (flag === 0) {
                        firstEnter();
                        flag++;
                    }
                })
                .mousemove(function(e) {
                    //计算镜片div坐标
                    finalX = calcDistance(e.pageX, JzoomOffset.left, $jzoomLens.width(), CriticalX);
                    finalY = calcDistance(e.pageY, JzoomOffset.top, $jzoomLens.height(), CriticalY);

                    $jzoomLens.css({
                        left: finalX + "px",
                        top: finalY + "px"
                    });

                    //计算大图的偏移坐标
                    $zoomImg.css({
                        left: -finalX * DistProportionX + "px",
                        top: -finalY * DistProportionY + "px"
                    });
                })
                .mouseleave(function() {
                    $jzoomLens.hide();
                    $jzoomDiv.hide();
                });

            /**
             * 创建大图
             * @param  {String} suffixName 大图后缀
             * @param  {String} imgType    图片格式
             * @return {jQuery}            返回jQuery对象
             */
            function createZoomImg(suffixName, imgType) {
                var imgSrc = $jzoom.find("img").attr("src");

                suffixName = suffixName || "_big";

                var point = imgSrc.lastIndexOf(".");

                imgType = imgType || imgSrc.substring(point + 1);

                var newImgSrc = imgSrc.substring(0, point) + suffixName + "." + imgType;
                var newImg = $('<img>').attr("src", newImgSrc).css('position', 'absolute');
                return newImg;
            }

            /**
             * 首次触发鼠标事件
             */
            function firstEnter() {
                $jzoom.append($jzoomLens).append($jzoomDiv);

                //计算镜片div的宽高比例
                var VolProportionX = $zoomImg.width() / $jzoom.width();
                var VolProportionY = $zoomImg.height() / $jzoom.height();

                $jzoomLens.css({
                    width: $jzoomDiv.width() / VolProportionX + "px",
                    height: $jzoomDiv.height() / VolProportionY + "px"
                });

                //计算镜片div的临界坐标
                CriticalX = $jzoom.width() - $jzoomLens.outerWidth();
                CriticalY = $jzoom.height() - $jzoomLens.outerHeight();

                //计算大图的偏移比例
                DistProportionX = ($zoomImg.width() - $jzoomDiv.width()) / CriticalX;
                DistProportionY = ($zoomImg.height() - $jzoomDiv.height()) / CriticalY;
            }

            /**
             * 计算距离
             * @param  {Mumber} pageD     鼠标坐标
             * @param  {Number} offsetD   容器偏移距离
             * @param  {Number} lensW     镜片div宽高
             * @param  {Number} criticalD 镜片div临界坐标
             * @return {[type]}           镜片div坐标
             */
            function calcDistance(pageD, offsetD, lensW, criticalD) {
                var finalD,
                    distance = pageD - offsetD - lensW / 2;

                if (distance >= 0 && distance <= criticalD) {
                    finalD = distance;
                } else if (distance < 0) {
                    finalD = 0;
                } else {
                    finalD = criticalD;
                }

                return finalD;
            }
        });
    };
})(jQuery);
