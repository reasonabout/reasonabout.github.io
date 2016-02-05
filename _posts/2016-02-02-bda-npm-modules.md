---
layout: post
title:  "Npm Modules"
comments: true
date:   2016-02-02
author: Ben Allred
categories: ['coding']
tags: ['npm', 'javascript', 'open source']
---

There is a first time for everything. This is the story of making and publishing my first npm module. I remember it like it was only a few days ago...

## Notable Preliminary Messages

Npm is a package manager primarily used by applications built on node.js. Npm modules are redistributable pieces of code that can be plugged in to other applications to extend their functionality. For more on what npm is and what it does, visit their [website](https://www.npmjs.com/).

## Negating Preconceived Misconceptions

Because npm is the default package manager for node.js applications, many people think that npm stands for "Node Package Manager". This is incorrect. In fact, npm is not an acronym. It is a backronym that stands for "npm is not an acronym". Those who know this often make up random acronyms when asked what npm stands for, such as "Nautical Pirate Marauders".

## Nuanced Portfolio Motivation

Early on in my time going through Galvanize's full stack web development program (coding bootcamp), I decided I wanted to publish an npm module before the course ended. In absence of an idea for a truly _useful_ piece of modular code, I figured I would write a truly _useless_ one. The result was  [DeBunk](https://www.npmjs.com/package/debunk). The idea was simple: write a small amount of useless code accompanied by excessive documentation that heralds its importance. It was silly. I expected to have a few laughs about it and move on. What I didn't expect was that some of my classmates would want to join in on the fun (perhaps due to me threatening them if they didn't).

## commuNal rePository manageMent

My module's code is open source on [github](https://www.github.com/skuttleman/debunk), and some of my friends submitted contributions to the repository to add similarly useless lines of code. Each of them made me laugh, and I hope they had as much fun contributing them as I had making the module. My favorite of these, was the following:

```js
doesItEqualThree: function(input){
  if(input === 3) {
    return "yes";
  } else {
    return "no";
  }
},
doesItEqualSeventeen: function(input){
  if(input === 17) {
    return "yes";
  } else {
    return "no";
  }
}
```

What makes this contribution particularly enjoyable is not how useless it is - though it is remarkably useless -, but rather what happened next.
A few minutes after this was merged into DeBunk, the following module was posted by the author of the code above in response to itself:  [Destupidify](https://www.npmjs.com/package/destupidify). Oh, the layers. I laughed for years. I have the best friends.

## Npm Publishing Memoirs

Publishing a module to npm is super easy, and doesn't have to be an epic undertaking. It doesn't even have to be useful for anything other than a few laughs. For more on publishing to npm, visit their [documentation](https://docs.npmjs.com/getting-started/publishing-npm-packages).


By [Ben Allred](https://www.github.com/skuttleman)
