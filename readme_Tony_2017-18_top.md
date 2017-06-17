# UK General Election after 2018 border change using 2017 votes and Tony's Top Up System

Over at [Electoral Calculus](http://www.electoralcalculus.co.uk/boundaries2018.html)
they have modelled the 2017 election results using the new proposed seats from the 2018 Boundary Reviews. 

So far these changes seem to reinforce the issues with FPTP reducing the spectrum of MPs.

Tony Kennick suggested that we should see if returning to the 650 MPs we currently have using a top-up list to fill those 50 seats.

The D'Hondt algorithm was tweaked to start from the projected FPTP results based on the UK General Election Results June 2017.

I have done this with 2 different methods (code for both in Tony_TopUp_2017-18.js)

1) Topping up each region seperately thus giving some regional MP's for underrepresented parties.  (the top up seats were distributed based on the proportion of 2018 seats in each region and not the population / electorate in each region) 

2) Applying the 50 seats to the UK as a whole at a National Level

Tables are presented for each region (and the whole UK twice once as totals for the regional mode; and the National Top Up).

* Party 
* Votes 
* Topped Up Seats - The total number of seats for a party after the top is applied to the 2018 boundary projections.
* Topped Up votes/seats - the number of votes per MP after the top is applied
* Top Up - the number of seat allocated by D'Hondt
* 2018 FPTP Seats - The projected number of FPTP seats on the 2018 boundaries
* 2018 FPTP votes/seats -  the number of votes per MP for the 2018 projection

N.B. Independent Candidates by definition don't have a party so there votes have been zeroes so they don't leak out in to the D'Hondt pool.
