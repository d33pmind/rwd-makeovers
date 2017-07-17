# Chapter 1
## Embracing the Internet’s Multi-Device World 

> “The web has moved beyond the desktop and it's not moving back.” 
> — Ethan Marcotte 

### Welcome to the multi-device world

Hey, everyone! Before WiFi and mobile devices, people used to access the Internet on their phone. Through telephone landlines on screeching modems, desktop computers were connecting to the Internet.  

Designing for the web used to mean designing for displays on cathode ray tube monitors that sat on desks. 

**Image 01**

Not only has the Internet cut the cable in your phone, but it's also about every little thing: smart televisions, smart cars, smart fridges, and even smart glasses. 

**Image 02**

For all the devices, Web sites and applications need to get smarter, too, by stretching and resizing to adapt to these various screen sizes for these devices. 

### Building for all these devices

There are two key approaches to building mobile friendly websites: 

* Mobile First 
* Responsive Design

### Mobile First

Mobile First is designing in a way that’s accessible to all your users. The approach is the idea that we start designing for smaller devices and then gradually add the needed images, scripting, and style rules to support larger and larger designs.  

#### Designing for the lowest common denominator

Before the multi-device web, web builders still built for the biggest audience by creating webs sites that would work on the most common technology and connection speed.

With so many devices, there are challenges with any designing for the multi-device world. For example, you cannot control:

* What kind of device is being used to visit your site 
* If the JavaScript might not be loaded or turned off
* if stylesheets not loading;
* The visitor’s connection speed to the internet 

Mobile first is about developing sites that are optimized for low-bandwidth and small screens, thus forcing the focus to be on the content and message being accessible.

My making the focus on open and accessibility for the edge cases, we open up an online presence to the largest possible audience.

### Responsive Design

Responsive design is a set of approaches in web development so that no matter the device, the design can scale. The goals of responsive design allow us to work with a mobile design mindset to create an experience for our visitors that will work regardless of the device they’re using. 

### The tell-tale signs of responsive design

The tenants of responsive design evolve around three techniques to web development: 

1. Fluid grid layout
2. Flexible media
3. Fluid Typography
4. Media queries  

#### Fluid grid layout

Fixed-width layouts that legacy websites have are laid out with pixels. We need to convert these units into what is known as “relative length unit” such as percentages. Conversion between size is larger done by determining the ratio of elements within a page. 

**Image 03**

Most websites have a container element, usually a `div` element, that encapsulates all the other components of a web design. Using a container element is done to add side margins and restrain the width of the page. 

And then the other components within the container element, , such as widths of main columns, side columns, images, and so on.

Legacy sites have these container elements as “fixed widths.” *Fixed widths* means the CSS width property values are set with what is called [absolute length units][1] using pixels. 

In design, we often think of these container elements and those components within the container as a *grid* or grid layout. 

![][image-1]

To be responsive, we need to express our grid—container and container elements in terms of [relative length units][2]. And we do that by using simple math: division!  

	dividend ÷ divisor = quotient 

By taking the “target,” the width of the container element that is usually the width of the page layout itself, we divide the “context” or the element within the container to to figure out the quotient or “result.”  

	dividend ÷ divisor = quotient 
	target ÷ context = result

Let’s look at a CSS example of a simple page with the main column:

	#container { 
		width: 960px;
		margin: 0 auto;
	}
	.column-main {
		width: 640px;
	}

For the container, we set the width to 100% value and the max-width to the original container’s width:

	#content {
		width: 100%;
		max-width: 960px;
		margin: 0 auto;
	}


**NOTE:** If there is a `width` property and value present, its value overrides by the value of the `max-width` property.

Now that the container has been set up, let’s focus on the with of the main column. For a page layout with a width of 960 pixels and a main column width of 640 pixels, what is the result? 

	target ÷ context = result
	640 ÷ 960 = 0.666666667

With the value of the quotient known, we do a quick math conversion to change the value to percentage and apply the full value to the value of the width.   

	#content {
		width: 100%;
		max-width: 960px;
	margin: 0 auto;
	}
	.column-main {
		width: 66.6666667%;
	}

There’s no need to round up or down for computers because, well, they are smart and can handle long values for mathematical problems to produce better accuracy.

#### Flexible media

Since the grid structure expands and re-size, so do the images, videos and typography need to do that as well. Again, we reach for the flexible nature of percentage units to scale the elements of a web page:

	img, iframe, video, audio {
		max-width: 100%; 
		height: auto; 
	}

When using `max-width` property, it restrains the image from growing larger than it’s intrinsic width. For example, if the image is 500 pixels wide and the `max-width` value is 100%, the image does not display larger than 500 pixels wide. 


#### Media queries 

Media queries are a test for the browser. Media queries are written to include bundled CSS rules which are shown when browsers meet certain conditions like height, width, resolution.

If these circumstances are not met, the browser skips over the media query’s CSS rules. For example, we set a media query to set for `screen` and displaying at least at 400 pixels wide:

```	
@media screen and (min-width: 400px) { 
		// when browser is longer than 400px wide, 
	// custom CSS rules go here 
}
```

Since the chapter is about deconstructing legacy sites for mobile delivery, we won’t using min-width for our media queries. Instead, we use `max-width` to define the styles from going big to going small, desktop to mobile. 

#### Fluid Typography

As pages resize, the columns for text grow and shrink, too. Due to the nature of the web text in browsers, HTML text adapt by reflowing to fill the space quite quickly often sometimes with too few or too many words on a line. 

For the sake of legibility and accessibility, in a line of paragraph text, there should be no more than [80 characters][3]. 

The first step is to solve this problem is using `em` units instead of `px` for text. Ems are a scalable unit of measurement that is relative to the base font-size of the browser’s default settings. 

Each browser has their internal base font size, and the standard for the base size is 16 pixels. We can re-affirm that’s the default size of the text by setting the value to 1em or 100%:

	body { 
		font-size: 1em; // 100% also works well here
		line-height: 1.6180339887498948482; 
	}

By setting the font size on the `body` element, we can adjust the type throughout the rest of the page by adjusting the font-size property at different browser widths: 

	body { 
		font-size: 1em; // 100% also works well here
		line-height: 1.6180339887498948482; 
	}
	@media screen and (min-width: 800px) { 
		body {
			font-size: 1.66em;
		}
	}

Using media queries in tandem with font CSS rules, we can adjust the font size through the single `em` value to make sure that each line has the appropriate.  

### Enter Retrofitting

In an ideal world, it would be best to start from a clean slate to build for mobile first and using responsive web design techniques.  However, owner’s of legacy do not often have the luxury of the budgets or time to make that commitment.  

Now that we know the basics for building a site for mobile, we can start to use *retrofit* legacy sites adapt to this multi-device reality. 

Legacy sites typically will have a lot of overhead as it is—so piling on additional resources like images and fonts are to be avoided. One thing we want to do is keep our additions to a makeover project small. 

At most, we want to add one link to a style sheet and, if need be, one JavaScript file to do any patching up. This should be sufficient for our purposes.

Now, let’s retrofit responsibly. 



[1]:	https://drafts.csswg.org/css-values-3/#absolute-lengths
[2]:	https://drafts.csswg.org/css-values-3/#relative-lengths
[3]:	https://www.w3.org/WAI/tutorials/page-structure/styling/#line-length

[image-1]:	# "Examples of wireframes"