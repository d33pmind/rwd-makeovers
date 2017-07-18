# Chapter 8

## Improving Speed & Performance

> “An image is worth a 1,000 words. A 1,000 word text file is about 7kb.” 
> — Christopher Schmitt

### More than Just a JPEG

While we are send out those images on devices that are small and online thanks to celluar networks, the image quality on these cameras are impressive. We can now send high resolution photos, usually in a JPEG format, which a bitmap raster image. And that image format and others like it are being asked to stretch and clog up networks on all sorts of devices, internet speed, and display sizes. 

If we have a full-size JPEG image of a vacation photo, someone on the other end might have a Fiber connection and a large screen to quickly and easily appreciate your image. However, if another visitor might be viewing your photo on an old mobile phone with a small display screen on a cellular network, the problem arises. 

While there may be negilibe cost in that you make a site visitor wait to see an image. 

If you are a business that only sends publishes high resolution product JPEGs on your site, there is a very real impact to the amount of money you can get from 

### The Cost of Viewing Images Online

In 2010, the average size of a web page was 702kb with 416kb of that file size resulting from images only (see http://httparchive.org/interesting.php?a=All&l=Nov%2015%202010). In 2017, the web page's size has ballooned to 3034kb (~3Mb) with 1714kb (~1.7Mb) from images. In almost a decade, the web is delivering over three times the sizes of images—yet high-speed internet is not available around the world. Even though cellular speeds have become faster, they are still not match for an Wifi through a router connected to a solid cable modem. Not everyone drives in the fast lane on the internet. 

**Image 01 Piechart comparison of file size growth **

These image files sizes carry some potential serious costs for site visitors. Not all mobile data plans are created equal, but one thing in common is they are not free. At current data plan prices, a modern traditional web page is going to cost someone in U.S.A. aboput 33¢ while someone in Canada is going to have to pay about 62¢. (See Table 2.1)

| Country | Cost per MB |
|:-:|:-:|
| Canada | 36¢ |
| Japan | 25¢ |
| Brazil | 25¢ |
| Germany | 23¢ |
| U.S.A. | 19¢ |

* Table 2.1 - Relative cost for additional MB over a data limit in different countries. More information at https://whatdoesmysitecost.com/#usdCost * 

While that might not seem like a lot of money, expecting users to continually download large images is an expensive proposition for two reasons: 

1. One is that web sites are a collection of pages, so the price could balloon if the visitors decide to stick around click through the rest of the site--and hopfully retturn. 
2. The second, you are quite literally asking your visitors to pay for the privelege of reading your web site. 

When creating visuals as it comes to images like JPEGs, we need to find a way to deliver images in a sane and concise manner.

## Figuring out the Right Image to Send

In order to figure out how to display the right image size, there are three factors to consider:

1. Screen resolution
2. Bandwidth
3. Browser width window

With so many different size devices, different varying speeds (including people dropping in and out of celluar range), and people using multi-devices to surf and shop online, the problem of grows almost exponentially--it's almolst as if we have to an image in dozens or hundreds of resolutions for almost any scenario. 

For fear of oversimplication, let's realize we are trying to retrofit legacy web sites, let's focus down to preparing two images: one large for great displays and one for mobile-friendly devices. 

| Connection Speed | Display Size | Browser Window | Image Size |
|:-:|:-:|:-:|:-:|
| Fast | Large | Large | Large |
| Slow | Small | Small | Small |

Now that we know the contexts for picking the right image, we can work out how best to deliver the right image at the right.

### Delivering the Right Image for the Right Situation 

Thanks to work in updating the HTML5 speficiation, we can use a straightforward HTML attribute to make the simple img element even more powerful! 

First, let’s look an image from one of our layouts: 

```
<img src="product-landscape.jpg" alt="Our amazing french fries" />
```

It's a regular image set for display at traditional fixed width layout. As it is, we swap out the image for a smaller, mobile friendly version:

```
<img src="product-landscape-mobile.jpg" alt="Our amazing french fries" />
```

Next, we use the `srcset` attribute. The `srcset` attribute can take multiple values. Here we only need two values: the path to an image and what context.

```
<img src="product-landscape-mobile.jpg" alt="Our amazing french fries" 
    srcset="path/to/product-landscape-HD.jpg 2x" />
```

The first value for `srcset`, again, is simply the path to a large image. The second value, 2x, tells the browser that, if the resolution display is retina display or retina, display the larger image. 

This is a simple image swap, leaving the mobile friendly image in place and serving up the HD version for devices that can handle it and should be more than appropriate for most needs. 

### Fine Tuning Delivery

If you want to make more versions of the same image, we can continue to fine tune the delivery of the appropriate image more:

```
<img src="product-landscape-mobile.jpg" alt="Our amazing french fries" 
    srcset="path/to/product-landscape-HD.jpg 2x, 
    product-landscape-mobile.jpg 600w,
    product-landscape-HD-small.jpg 600w 2x" />
```

We added a couple of new values into `srcset` attribute through comma-separated list. 

The first new pair,  `product-landscape-mobile.jpg 600w`, re-lists the same mobile friendly image that is in the original `src` attribuite original value re-affirming to the browser that the image is ideal when the browser width is less than 600 pixels wide. 

The last value pair is also talks about browser width being 600 pixels or less. However, it tells the browser that even though the display small, if the display is high density or a retina display, use the  `product-landscape-HD-small.jpg` instead of the mobile friendly version. 

*NOTE: At this time, however, there is not an easy or standard way to detect the speed a user is viewing your site without additional JavaScript and page weight across browsers. One method, through the Network Information API is possible, but is only supported by android browsers (See https://caniuse.com/#feat=netinfo).* 

### Fast Speed Wins

For quick speed and performance wins, these are some tips to reduce page bloat.

If you are creating new images for web delivery, it's important to *really know your image formats*. Different image file formats use different alorgirythms for compressing. Knowing how these images figure out how to reduce their file size, you can leverage them when creating new images. Yes, JPEGs are better photo delivery than GIFs. But did you know that adding Guassian blur a little bit, will help bring down the file size further? Also, try compressing images around 70-90% from 100% and ask if anyone sees a difference in image quality. Most people won't and you will save a lot in terms of file. 

Make sure to *optimize all your images*. Free optimization tools like ImageOptim (see https://imageoptim.com/mac) for Mac or PNGGUantlet (see https://pnggauntlet.com/) allow for simple drag-and-drop of image files. Using lossless algorithms, they replace your original images with smaller files without any loss in image quality. 

If you have a large number JPEGs on your site, *try Guetzli*. It's a new JPEG encoder from Google (see http://christopher.org/guetzli-googles-new-jpeg-encoder/). It's not lossless image optimizer--you will lose image quality, however the loss is barely perceptual. Also, the optimization process is slow, but worth it. I've seen savings around an average 40% compared with other optimizers. 

The last suggestion is not image related, but focused on jQuery. JavaScript support in browsers is better than when jQuery first came out and is only getting better. If your legacy site uses jQuery, it might be time to do an inventory and see if you can *swap out any jQuery code or plugins for vanilla JavaScript*. Checkout http://youmightnotneedjquery.com/ for ways to reduce your depenency on JavaScript frameworks or plugins. 

### In Conclusion

Working with a legacy site or a new responsive site from the ground up, keep the focus on creating a big visual presentation with the smallest footprint possible. And that's possible by limiting the number of images used in a design and always be optimizing the iamges you do use. 




