
# Job Calculator

The application was made to calculate working hours for freelancers. The user can say how many hours a day he intends to work, how many days in the month, what his expenses are, the value of his equipment, and the profit margin he wants.

## references

 - [Calculation source](https://www.youtube.com/watch?v=5LVqVcl9ICY&t=855s)
 
## how it works

How does the calculation work?
The user determines how many hours per day he wants to work (X value)
The user determines how many days in the month he wants to work (Y value)
The user determines the total amount of their monthly expenses (Z value)
The user determines the value of their equipment (W value)
and finally the user chooses his profit margin (value %)

Calculation:

First the application determines how many hours will be worked in the month =
Y*X = TimeMonth

Then the application determines the user's monthly expenses, taking their monthly expenses, and dividing the value of their equipment by 12, simulating that the equipment pays for itself in 1 year =

Z + (W/12) = TotalSpends

Finally the calculation for the final result =

(TotalSpends / Time Month (1 - %))


## Autor

- [@devwebbrasil](https://github.com/DevWebBrasil)

