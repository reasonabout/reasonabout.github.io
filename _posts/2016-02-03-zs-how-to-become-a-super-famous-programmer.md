---
layout: post
title:  "How To Become A Super Famous Programmer in Seven Minutes, or Making Your First Open Source Contribution"
comments: true
date:   2015-02-03 00:00:00 -0701
author: Zac Smith
featured_image: http://classiccinemaimages.com/wp-content/uploads/2013/01/Cary-Grant-1936.jpg
categories: meta
tags: Galvanize, open source

---
On my bus ride home, I like to zone out and read the New York Times on my phone. But what about all those typos! I mean, how does that even happen? It's the New York frickin' Times!

The best I can do is send out [a hopelessly ineffectual tweet](https://twitter.com/billyzacsmith/status/693249645124784128).

But here's one thing open source software has over the newspaper of record: when you run across something that's broken, you can actually fix it! For serious! You, little old you, can actually fix the thing that bajillions of people use. Wow!

Let me tell you about a thing that happened yesterday. I was teaching myself Ruby on Rails, reading through the official documentation on their site. And there it was: a typo! Somebody totally forgot to put in an apostrophe! Whaaa! How is this even possible! I mean, this is *the* Ruby on Rails?!?!

But then I remembered, hey, this is Open Source software! I can fix this!

Here's how it works:

- Find the repository for the project on GitHub and fork the repo. ![Fork](/assets/zs/2016/02/fork.png)
- `git clone` it down to your computer.
- Make the change on your version.
- `git commit` it with a nice message. It seems to be pretty standard to write "Fix typo." Here's what not to do: When I fixed a typo in the Angular docs, I wrote "Fixed up a tiny little typo, that wasn't so bad, but, ya know, jus' trying to help out, LOLZ!" They were like, "Um, yeah. Thanks for your contribution." So just keep it short and not overly sweet.
- `git push` it to your repo. Now your changes are published to GitHub. We just need to notify the folks who manage the original repo. That's what pull requests are for.
- Click "Make pull request." ![Pull request](/assets/zs/2016/02/pull-request.png) You'll be prompted to review your change. Click the obvious stuff, and that's it!

On these big projects, like Rails, there seems to be someone tasked with reviewing these little pull requests. They'll take a look, and if they like your proposed change, they'll merge it into the master code base. You'll see something like this:
![Merge notification](/assets/zs/2016/02/pull-request-merged.png)

Soak in the fame! Eat glory like it's triple-stacked pancakes!

But in all seriousness, this is a good way to warm up to making contributions to real software. Plus, it's good practice for when they open source the New York Times.

* * *

Originally published on [billyzac.github.io](http://billyzac.github.io/2015/02/03/how-to-become-a-world-famous-programmer.html)
