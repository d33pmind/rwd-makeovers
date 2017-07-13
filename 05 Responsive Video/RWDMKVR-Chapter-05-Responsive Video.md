# Chapter 5

## Responsive Video 

“We sometimes take to record a video so that we can later see what was happening while we were busy recording a video.” ― Mokokoma Mokhonoana

## The Problem with Online Video

There once was a time when getting a video file onto the Internet and available for viewing on the web was a hardship. Thanks to services like YouTube, the ability to not only have our videos hosted and viewable is now trivial. 

With video, similar approaches to scaling media such as `img` elements will not work. First, images, as discsused in Chapter XX are set to scale based on the width and the height adjusting as needed:

```
img {
    min-width: 100%;
    height: auto;
}
```

While images can take any size take any combination of width and height—small, big, tall, wide—,videos are built on standard proportional relationships. These proportions between its width and its height are called 
*aspect ratios.*

Using the approach for images without aspect ratios set in place for videos, we run into the problem of videos getting clipped or squashed: 

```
iframe {
    min-width: 100%;
    height: auto;
}
```

### SCREENSHOT of video issues 

Standard current aspect ratios among the current video standards are 4:3 and 16:9. When a video scales down or up, there a consistent relationship between the width and height that needs to be maintained. 

Note: Other mobile video standards are square or 1:1 video, which was popularized by Instagram, and 9:16, which is what happens when one fails to rotate their mobile's camera horizontally. 

## Setting up Flexible Videos

First, we are going to need to get the basic HTML from a video hosting site. In this example, we are going to pull the video from YouTube, using their embed share code: 

### SCREENSHOT of YOUTUBE

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/66mQz44pPY4" frameborder="0" allowfullscreen>
```

Next, we're going to wrap a `div` element with a `class` attribute of `content-video`  to signify this class is for containing video.

```
<div class="content-video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/66mQz44pPY4" frameborder="0" allowfullscreen></iframe>
</div>
```

With that code in place and barring any additional CSS rules, the video should appear pretty much as YouTube intended it to look when it appears on another site. 

### SCREENSHOT of Video on percentage

Then to make the video flexible, pinpoint the iframe element and add width and height properties setting them to 100%: 

```
iframe {
  width: 100%;
  height: 100%;
}
```

Since this code could be used for bringing in other media through the embed and object elements, let's add those generic selectors to the CSS rule:

```
iframe, embed, object {
  width: 100%;
  height: 100%;
}
```

The next step is a multi-step process. The first part is to make this iframe expand to completely using absolute positioning:

```
iframe, embed, object {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### SCREENSHOT of Video on percentage

By setting the value of the video to be absolutely positioned, the `iframe` display takes over the entire browser viewport. 

To tame the video, we go up a level and work on the CSS rules for the `iframe`'s container element and set the positioning to `relative`:

```
.content-video {
  position: relative;
}
```

This rather simple line of the code has a somewhat big effect. By setting the positioning of the container element to `relative`, the `iframe`'s is now tamed. The video no longer expands across the entire viewport, but only expands to within the confines of its parent element. 

The value `relative` is a rather banal value that just reaffirms the container element's regular placement on the web page. However, by explicitly stating the use of positioning, we bring an absolutely positioned element under control. I call this technique "shackling."

## Fortifying Aspect Ratio 

With the iframe shackled, the next steps get us closer to bringing the video to showcase in the correct aspect ratio.

First, we set the height of the parent element to zero and to hide any content that would spill over by setting overflow to hidden:  

```
.content-video {
    position: relative;
    height: 0;
    overflow: hidden;
}
```

It's a little unusual to a parent element's height to zero, as that typically keeps content from being seen. That's the opposite of what we want to happen here.

However, we don't want to rely on the height attribute. Using that height attribute gets us back into the same spot as with the iframe and the clipping of content at different browser widths. 

To get consistent aspect ratios from the browser, we look to the `padding` property and use the percentage based values (see https://www.w3.org/TR/CSS2/box.html#propdef-padding): 

> The percentage is calculated with respect to the width of the generated box's containing block, even for 'padding-top' and 'padding-bottom'. 

By setting the padding height to a percentage, the calculated value that the browser renders is always going to be in relation to the height container box. And that height happens to be dictated by the iframe element containing the movie. 

The next important step is to figure out the percentage value. And to find that value, we look to the aspect ration we want to serve.

For a modern video of 16:9 aspect ratio, we divide 9 by 16 and get .5625 or 56.25%! That's the value for padding on the bottom:


```
.content-video {
    position: relative;
    padding-bottom: 56.25%; // 16:9 = .5625 = 56.25% 
    height: 0;
    overflow: hidden;
}
```

### SCREENSHOT of Video final source

And if we want to display content in a 4:3 aspect ratio, the math is even easier: 4 divided by 3 is .75 or 75%:

```
.content-video {
    position: relative;
    padding-bottom: 75% // 4:3 = .75 = 75%
    height: 0;
    overflow: hidden;
}
```

And with that, we have two sets of CSS rules for making responsive the sometimes rigid `iframes` from YouTube. 

## Working with jQuery and Videos

If you are using jQuery already on your site, then using the FitVids plugin is an easy victory to apply a flexible media solution.

### SCREENSHOT  https://github.com/davatron5000/FitVids.js


With a jQuery version of 1.7 or higher, you can use the easy-to-use FitVids.js to convert the width videos in your responsive web design.


``
<script src="jquery.min.js"></script>
<script src="jquery.fitvids.js"></script>
<script>
  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#thing-with-videos").fitVids();
  });
</script>
``

Out of the box, FitVids.js supports YouTube and Vimeo. If you use another video provider or even serve videos yourself, there's an option to customize the video player to support them.

``
<script src="jquery.min.js"></script>
<script src="jquery.fitvids.js"></script>
<script>
  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
     $("#thing-with-videos").fitVids({ customSelector: "iframe[src^='http://example.com'], iframe[src^='http://videohosting.example.com']"});
  });
</script>
``


Note: Don't add jQuery just to add flexible videos plugin. That's more bandwidth than necessary.  

## In Conclusion 
 
While not as easy solution as images, the ability to add responsive video elements is fairly straightforward once we get pass the math. 

If you are working on a legacy site or even a new site from a blank slate,  wrapping your videos in an intrinsic ratio `div` without the JavaScript dependency like jQuery is the best option. 

Maybe that could be automated at the CMS level WordPress short tags or something.
