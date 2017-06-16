# UK General Election after 2018 border change using 2017 votes and Tony's Top Up System

Over at {http://www.electoralcalculus.co.uk/boundaries2018.html| Electoral Calculus)
they have modelled the 2017 election results using the new proposed seats from the 2018 Boundary Reviews. 

So far these changes seem to renforce the issues with FPTP reducing the spectrum of MPs.

Tony Kennick suggested that we should see if returning to the 650 MPs we currently have using a top up list to fill those 50 seats.

The D'Hondt algorithm was tweaked to start from the projected FPTP results based on the UK General Election Results June 2017.

Firstly I did this a om Regional Top Up basis but that still under represnted minor  parties vastly. (dhondt_regional_2017-18.js)



GE2015_results.json - contains all the seats in the UK, the region they are in and the valid votes for each candidate.

The code is ugly but I did it in one go in 2015 and wasn't expecting to use it again so soon (be kind).

The output of those calculations is :


