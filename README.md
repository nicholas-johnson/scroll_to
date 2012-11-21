scroll_to.js
============

A smooth little jQuery plugin to scroll to any element. Works nicely with internal anchors and falls back gracefully in the absence of JavaScript.

## The Scenario

Let's say you have a page with a bunch of internal anchors, like this:

    <ul>
      <li>
        <a href="#cheese">Cheese</a>
      </li>
      <li>
        <a href="#ham">Ham</a>
      </li>
    </ul>

And you had matching elements like so:

    <section id="cheese">
      Cheese is nice.
    </section>
    <section id="ham">
      Ham, not so much.
    </section>

Clicking the anchors would make the site jump to the correct section. This is the default behaviour. It would be much nicer though if the scroll could be animated a little, so the user get's a sense of what's happening.

## Enter scroll_to.js

Scroll_to.js will allow you to scroll to any element. By default the href attribute is used to determine the scroll anchor, but you can override this.

## Usage

Let's convert all internal anchors to scroll_to anchors.

First import:

    <script src="scroll_to.js"></script>

Now within your jQuery, hook up every internal anchor. Do something like:

    $(function() {
      $('a[href*="#"]').not('a[href="#"]')
                       .scroll_to();
    });

This will apply scroll_to to every internal anchor, but not to anchors in which the href attribute is just a #. eg:

    <a href="#cheese">Cheese</a>

will be hooked up, but not

    <a href="#">Some other link</a>

## Scrolling elsewhere

If you'd like to choose where to scroll to, you can do this too. Just set a data-scroll-to attribute, so we might have:

<h1 data-scroll-to="#top">My Site</h1>