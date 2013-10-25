sprite-packer
=============

pack your images into a single sprite sheet, create a css file with image details and compress the size of the image file

This uses [ grunt-sprite-packer ](https://npmjs.org/package/grunt-sprite-packer) and [ ImageMagick ](http://www.imagemagick.org/script/index.php) for converting images to spritesheet 

Please install [ ImageMagick ](http://www.imagemagick.org/script/install-source.php)

And for image compression this uses [ imagemin ](https://npmjs.org/package/grunt-contrib-imagemin)

Now run ```npm install```.
This will install  grunt, sprite-packer and imagemin.


Next run ```grunt```.
This will cretae a sprite sheet sprite.png under images folder and sprite.css under css directory and reduces the size of image by compressing it.
