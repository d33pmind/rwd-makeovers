# Chapter 2

## Working with Responsive Images

> “The best images are the ones that retain their strength and impact over the years, regardless of the number of times they are viewed.” — Anne Geddes

### Stretching Images

I believe the initial succcess of the web is rooted in the ability for the browser to display images. Ever since Netscape Navigator created what was then a propertiy HTML element `img` for displaying an image, the web started to move faster and farther from its intended goal of sharing scientific data. On the web, we're now sharing vacation photos as we're vacationing. 

To make our design adapt to difference devices, we need our images to stretch and scale for all the difference devices. When a visitor views our site on a small screen, the images need to shrink. And when another visitor vists from a large screen, our images needs to expand to their full potential (See Figure 2-1). 

**Image 01**

With CSS, we can easily scale our images as a browser width expands or resizes by using the `width` property set to percentage value of a hundred (see Figure 2-2):

```
img {
    width: 100%;
}
```

**Image 02**

While the standard practice has been to use avoid using HTML width and height attributes with in the img element, using the width CSS width property overwrites that value allowing the image to stretch horizontally. But the height attribute still dictates how tall the image appears--and will create image distortions if not addressed (See Figure 2-3).

**Image 03**

The workaround is to use the height CSS property and set it `auto`:

```
img {
    width: 100%;
    height: auto;
}
```

The value of `auto` is tells the browser to essentialy caculate the size of the image based on other criteria. In this instance, since we set the width to 100%, the browser looks to that value and scales images appropriately to their own instrinic ratio of width and height. 

### Locking in the Images

As the browser resizes down, however, our flexible image stretches beyond its parent container--the `div` creating the column (see Figure 2-4). 

**Image 04**

To keep an image from expanding beyond its parent container, exchange `width` for the CSS property `max-width`:

```
img {
    max-width: 100%
    height: auto;
}
```

We can leave this rule set to affect all images on our site without worry--as the max-width property will only expand an image up to its own internal width. In other words, there won't be any stretching.

### In Conclusion

While this straightforward CSS rule set, this flexible imagery approach is one of the hallmarks of responsive web design as all inline images in our pages are set to be delivered responsively in our sites. 

While in Chapter 8 there is more about images and responsive web design as it relates to speed and performance, the next chapter focuses on converting logo to scalable vector format.


