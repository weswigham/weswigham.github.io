---
layout: post
title: Newer Beginnings
author: Wesley Wigham
---

Here I am again, wiping away an old post to replace it with something new. This time, it's for something worthwhile, though! Here's what's powering this site _right now:_

- [Jekyll](http://jekyllrb.com) <small> A static site generator </small>
- [Lanyon](http://lanyon.getpoole.com) <small> A superb Jekyll theme </small>
- [Sideswipe](http://github.com/weswigham/sideswipe.js) <small> A unique way of linking pages together </small>

###Jekyll
Jekyll is a ruby gem for generating static sites - there's a good chance you've heard of it. Github allows its users to publish unprocessed jekyll to Github pages for hosting, where it happiply compiles the repository to the final site for you.

###Lanyon
Lanyon is a minimalist theme for a Jekyll site. Sporting a collapsed sidebar, a tiny title bar, and no horizontal navbar, its layout is unique to most static jekyll sites. I've used the light red `08` lanyon subtheme for my site (it offers 8 subthemes) - I think it contrasts with the white backgrounds fairly well.

###Sideswipe
Sideswipe is a tool of my own invention. It relies heavily upon [Hammer.js](http://eightmedia.github.io/hammer.js/) for touch events, and jQuery for some DOM manipulation. I include the sideswipe javascript file in the site, then activate it with:
```js
var Swipe = sideswipe(".content", ["/", "/blog/", "/about/"]);
```
This tells sideswipe to listen for `swipeleft` and `swiperight` events on the site's `/`, `/blog/`, and `/about/` paths. When it gets one, it transitions the section of the page given by the `.content` selector to the next one, as given by the order of the paths in the array.

Here's an example. Say you're on `/blog/` (as you are now). If you `swipeleft` the content area of this page will slide out to the left, and the content area of `/about/` will slide in from the right. If you `swiperight`, the content area will slide out to the right, and the root page content area will slide in from the left. 

There's nothing too special about the effect in and of itself - what's cool is how the pages are designed. As you can see, `/`, `/blog/`, and `/about/` are all full pages in their own right - no `section` tags or any of that nonsense, I don't send you my entire site on every page. The javascript goes out and fetches the missing content whenever it captures one of the `swipe` events - this lets me seperate a website into as many unique pages as I'd like, while still letting me paginate and link them as though they were all internal to the main page. Conceptually, by passing the `body` as the selector, I could even use `sideswipe` as a sort of presentation enabler a la `reveal.js`.

Conceptually sideswipe was pretty simple, but it's somewhat ugly right now, and I plan to improve it a bit. I'd like to add the following:

- Pre-cacheing of previous/next pages to allow for faster transitions (no need to wait for ajax calls to complete)
- Rewrite to use a fixed frame instead of a relative size in order to remove an annoying glitch where the content area resizes as scrollbars appear/disappear
- Investigate how to control the laying of the DOM elements to control, say, whether the transitioning block renders beneath the sidebar or above it
- Expose interface to a programatic transition between pages (so I can have buttons)

That's all for now - I'll be sure to post more later about 'hip' new technologies I've been using.