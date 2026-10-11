# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1
- Tool(s): none


## Week 2
- Tool(s):
- What I asked for: {
    1.Why my browser display blank page
    2.Why my add to cart button isn't working
}
- Ai answer:{
    BLANK PAGE
    Problem: React crashed in MenuItemCard on item.price.toFixed(2). Every price in vendors.js was a string ('5', '10'), and toFixed only works on numbers. When a component throws, React unmounts the tree and the page goes blank.
    Solution: Remove the quotes so prices are numbers (price: 5). I also fixed the loction typo to location in the second vendor.

    ADD TO CART NOT WORKING
    Problem: The cart was updating, but Header.jsx never showed it:
    The prop was misspelled as cardCount, while App passes cartCount.
    A leftover const cartCount = 0 kept the badge at 0.
    Solution: Change the parameter to { cartCount } and delete const cartCount = 0.
    root cause: Both were small data and naming mismatches that React doesn’t flag clearly. The console error (F12) and a console.log are the fastest way to find them.

}
    


## Week 3
- Tool(s):
- What I asked for:
- What I kept, changed or rejected, and why:
- One thing the AI got wrong and how I fixed it:
