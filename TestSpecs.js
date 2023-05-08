/* 

Unit Tests:

    1. A function called "multiplication" that returns the product of the two input numbers.

        Giving the function any input that is not a number will return with an error "Incorrect input"
        Giving the function two numbers (positive or negative) should multiply them together and return that calculation
        Giving the function no numbers/inputs in should return with nothing
        Giving the function only one number should return that one input

    2. A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays. 

        Giving the function two arrays of integers should return one array with only odd numbers in ascending order
        Giving the function one array of integers should return all odd numbers contained in the parent array in ascending order
        Giving the function no arrays should return with nothing
        Giving the function anything other than an array containing integers should return with an error "Incorrect input"
        Giving the function arrays containing multiple of the same odd number should only return that number once in the child array

Functional Tests:

    1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest. 

            User will be asked to login if member or have 2nd option for guest checkout
            After selecting guest checkout the system will ask the user if theyd like to create an account (yes or no)
            (Yes)If the user decides to create an account they will be given a unique ID after inputting their information (name, address, email)
                This unique ID would be emailed to the user
                The user will then be moved to the main page where they will be shown the items they have added to their cart
            (No)If the user decided to not create an account they will then be moved to the main page where they will be shown the items in their cart
            If our user decided to not add anything to their cart and tried to checkout they will be unable to move into the payment section and would only be shown an empty cart with an error (There is nothing in your cart)
            If our user decided to add some items and hit the checkout button they will be prompted with options of payment (debit/credit card, paypal)
            When our user selects debit/credit card they will be prompted to input their card information and (e-mail, shipping/billing address, name, phone number) for payment
            When our user selects paypal they will have a separate window open which connects them with paypal's log in screen to complete payment
                If our users payment is declined they will be notified by an error and returned to the checkout page containing their cart
            When our users payment has been approved they will be prompted with a thank you message and a receipt would be e-mailed to them (either the e-mail connected to their paypal or basic billing information taken when checking out with a debit/credit card)

*/