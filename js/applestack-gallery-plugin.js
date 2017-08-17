
    function jqGallery (configs) {
        jqGallery.prototype.JQGConfig = configs;
        jqGallery.prototype.thisOBJ = this.JQGConfig.objName;
        jqGallery.prototype.renderThumbnails();
    }

    jqGallery.prototype.renderThumbnails = function () {
        var imgArray = this.JQGConfig.imagesArray;
        var thumbWrap = $(this.JQGConfig.thumbsElements);
        thumbWrap.empty();

        for(var img in imgArray){
            imagesName = imgArray[img];
            thumbWrap.append('<div class="eachThumbWrap" onclick="'+this.thisOBJ+'.popImge(\''+imagesName+'\')"><img src="img/thumb/'+imagesName+'" class="resize"></div>');
        }
    }

    jqGallery.prototype.popImge = function(imgName){
        $('#fullimage').remove();
        $('body').append('<div id="fullimages" class="popBG"><div class="popImgWrap"><div class="closeBtn" onclick="$(\'#fullimages\').remove();">X</div><img src="img/full/'+imgName+'"></div></div>');
    }
