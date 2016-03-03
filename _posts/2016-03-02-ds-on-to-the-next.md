---
layout: post
title:  "O(n) to the next"
comments: true
date:   2016-03-02
author: David Shibley
featured_image: /assets/ds/2016/01/bigO.png
categories: meta
tags: Galvanize

---
## O(n) to the next.
An intro to big O notation.

What is the big O? For a programmer, big O is a notation used to establish the efficiency of a given function. By simply knowing seven different types of big O’s and how they relate with each other you can figure out the performance cost of pretty much any code set. Big O is based on upper limits, meaning if we are counting the possible outcomes of a scenario it only cares about the worst case scenario. Which means coders can control the “cost” of their app simply by choosing one type of function over another.

### The seven sisters

So what are the seven big O’s?

`Constant - O(1)
`
`Logarithmic - O(logn)`

`Linear - O(n)`

`Linearithmic - O(n logn)`

`Polynomial - O(n^2)
`
`Exponential - O(2^n)`

`Factorial -O(n!)`

  ![Current Directory](/assets/ds/2016/03/complexity.png)

Umm, WTF David….
Ok, I’m sorry. I said all you needed to know was those seven things but I’m sure they make no sense at this point if you have never seen them. Not to mention its syntax is reminiscent of daily bouts of second period math anxiety, pop tarts and the smell of the weird kid that sat next to you. Perhaps a slightly closer look at each will dissolve some of that anxiety. So to those of you that didn’t hit the back button as soon as I started mashing numbers with letters, thank you. Now prepare to dive into the crazy world of upper limits. Hold onto your butts. . .

### Constant

The first sister, Constant is pretty straight forward. Since big O is used by programmers to evaluate the worst case scenario for performance of a function, the constant represents a scenario where there is only a set possible outcome. Meaning if we have a sorted array of colors `[red, blue, green, yellow, orange]` and we want to select yellow, it would take only once to select yellow since it is in the fourth spot of the array we can select it by its position. This is the fastest possible performance.  It is practically instantaneous.

### Logarithmic

As the second sister, Logarithmic sits right on the shoulders of her other sister. The two when graphed are so similar that you can not physically tell a difference. Mathematically there is an obvious distinction. With `O(logn)` we are dealing with binary evaluating a sorted array with a binary search or a balanced search tree, as well as all operations in a binomial heap. Ok I know, total WTF moment again and I apologize. That was the technical definition. What does that mean in terms that we normal human beings can understand? I will do my best to translate. Simple definition, `O(logn)` deals with data sets similar in example to a sorted binary tree and the worse case scenario of selecting an item from that tree. Even simpler: Binary tree just means a tree graph in which any one node (piece of data, represented by the circles) can only have only one parent, one sibling and up to two children.

  ![Current Directory](/assets/ds/2016/03/btree.png)

Why is this `O(logn)` and how is it basically the same graphically as `O(1)`? Selecting an item from a sorted binary tree graph is a lot like taking a whole pie and cutting it in half and figuring out which half you want to keep, then you cut the half you kept into quarters and decide which quarter you want to keep and then again into eighths and continue until you have found the pie size you want. With binary trees if you want the bigger half you evaluate to the right and if you want the smaller piece you evaluate to the left.

Consider the tree graph above. If we wanted to select the number seven we would first start at the top and evaluate if eight is the number we were looking for. It is not so next check to see if eight is greater than or less than seven (the number that we are trying to select). Since the number seven is less than eight, we will know that seven must exist on the left side of the tree so we evaluate the left child. Seven is greater than three however so we will evaluate its right child which in this case is six. Since seven is greater than six we evaluate to the right and find seven, the node we wanted. This type of computation is the second most performant and also practically instantaneous.

### Linear

`O(n)` is the first middle sister and she comes with the popularity to prove it. Linear computations are extremely common in programming. One of the first functions people learn when beginning to code is a for loop. If you have done this, you have done a linear computation. Graphically speaking, linear means a constant slope or a steady rise over run. Ringing some dusty bells? From a programming perspective we make an equation whose worst possible performance outcome increases at a steady rate. For loops are a great example of a linear computation because it literally is saying “for every (blank) do (blank) which computationally says giving n number of items the worst possible outcome would be n number of times. More clearly `O(n)` means if we wanted to select an item from an unsorted array where the worst possible outcome would be having to check every item in the array before you found the one you want. If we were looking for seven in this array it would take us looking through every number before we found seven `[1,5,3,9,8,4,6,2,7]`. I guess by that definition, finding my keys tends to be a O(n) computation because they always seem to be in the last place I look.

### Linearithmic

As the second middle sister, Linearithmic is an interesting one. She challenges the world to look differently, to see how interaction with others can have an affect. Linearithmic computations are the first on the compounded computations. This just means that you are doing more than one computation and you are looking at the multiplication of those computations. An example of this would be if you had a for loop `O(n)` and inside of that for loop you were checking every time for a specific node in a binary tree `O(logn)` we would express this mathematically as `O(n) * O(logn) = O(n logn)`. It is important to note that this is the world that sorts live in. For more on sorts or any questions feel free to reach out to me.

### Polynomial

Let’s affectionately refer to her as Poly. Poly learned from her big sis Linearithmic. Poly understood the importance of knowing the relationship between multiple `O(n)` computations. This is much like with Linearithmic computations but instead of multiplying `O(logn)` to `O(n)` we are multiplying `O(n)` to other `O(n)`'s. Mathematically it looks like this: `O(n) * O(n) = O(n^2)`. Reference the complexity graph above and look for the teal colored line. That my friends, is Polly. Since she grows at an exponential rate, the number of computations per element `n` reaches an unstable quantity pretty quickly. At about thirty elements, `n = 30`, you have to do nine hundred computations and at `n = 40` we have to make sixteen hundred computations. Increases like that are BAD for computers, you want to limit these kind of algorithms as much as possible. An example of a `O(n^2)` equation would be a nested for statement.

Grab your totems cause we are about to get all Inception on this. Imagine a for statement within a for statement. That would be `n^2`. If you went another layer deeper you get a for loop within a for loop within a for loop or `n^3` and so on and so forth. At `O(n^3)` or three nested for loops, when `n` is 100 we would need to make a million computations in the worst case scenario to find the item we want. This sounds like a lot, do a million math problems? Ef that. The computer however can do that many computations pretty quickly depending on the speed of the computer. For instance, ever wondered what the numbers on a processor spec means? Ever bragged about your computer or phone “well my new phone is the (some phone) and it has a (some number) Ghz processor”. What you are bragging about is the amount of computations your device can make. G refers to gigs and hz means per second. Gigs is short for gigabyte or one billion bytes, eight bits to a byte and each can be represented as a computation. So for a device with a 1.2 Ghz processor and a x64 processor, it theoretically can handle __76.8 billion computations per second!__

### Exponential & Factorial

Computers these days are fast, but they all do have limits. Exponential and Factorial are fraternal twins and the babies of the family. They are generally not enjoyable to deal with, think . These computations break those limits very very quickly. The expressions themselves have limits as well. We call those limits to infinity or the limit as, in this case number of computations, approaches infinity. If you look again to the complexity graph, look for the orange and the sky-blue lines. Those are the exponential and factorial graphs. See how the lines go basically vertical? The vertical lines just get infinitely closer to perfectly vertical but never quite reach it. The interesting thing about these kinds of computations is that in theory, no computer in the world no matter its performance could compute exponentially or factorially beyond a certain number and we can see that visually on the graph. Writing code that uses either of these computations would be volatile and not recommended. Luckily we would rarely see this kind of computation in programming.

Thank you for checking out my blog on big O notation. If you have any questions, corrections or just wanna nerd out with me feel free to contact me. Also if you have requests for a specific blog topic I will try to get to it.

-[David Shibley](davidjshibley@gmail.com)                            

 [Email](davidjshibley@gmail.com)  
 [@D_Shibs](https://twitter.com/D_Shibs)  
 [in/David-Shibley](https://www.linkedin.com/in/davidshibley)  
