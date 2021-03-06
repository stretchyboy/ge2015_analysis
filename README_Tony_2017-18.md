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
## Wales

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Lab| 771354| 22| 35062| 0| 22| 35062 |
| Con| 528839| 7| 75548| 1| 6| 88140 |
| PC| 164466| 2| 82233| 1| 1| 164466 |
| Lib Dem| 71039| 1| 71039| 1| 0| Infinity |
| Women| 177| 0| Infinity| 0| 0| Infinity |
| Ind| 2521| 0| Infinity| 0| 0| Infinity |
| UKIP| 31376| 0| Infinity| 0| 0| Infinity |
| Pirate| 446| 0| Infinity| 0| 0| Infinity |
| Loony| 157| 0| Infinity| 0| 0| Infinity |
| ND| 188| 0| Infinity| 0| 0| Infinity |
| Worth| 31| 0| Infinity| 0| 0| Infinity |
| SPGB| 92| 0| Infinity| 0| 0| Infinity |
| Green| 5128| 0| Infinity| 0| 0| Infinity |


## Scotland

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| SNP| 977568| 32| 30549| 0| 32| 30549 |
| Con| 757949| 12| 63162| 1| 11| 68904 |
| Lab| 717007| 11| 65182| 3| 8| 89626 |
| Lib Dem| 179061| 2| 89531| 0| 2| 89531 |
| Ind| 3645| 0| Infinity| 0| 0| Infinity |
| UKIP| 5302| 0| Infinity| 0| 0| Infinity |
| ND| 538| 0| Infinity| 0| 0| Infinity |
| Women| 337| 0| Infinity| 0| 0| Infinity |
| Referendum| 132| 0| Infinity| 0| 0| Infinity |
| Sovereign| 224| 0| Infinity| 0| 0| Infinity |
| Soc Dem| 148| 0| Infinity| 0| 0| Infinity |
| SCP| 1720| 0| Infinity| 0| 0| Infinity |
| S New| 177| 0| Infinity| 0| 0| Infinity |
| Green| 5886| 0| Infinity| 0| 0| Infinity |


## South East

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 2495275| 74| 33720| 0| 74| 33720 |
| Lab| 1326279| 11| 120571| 3| 8| 165785 |
| Lib Dem| 487243| 4| 121811| 3| 1| 487243 |
| Green| 143863| 1| 143863| 1| 0| Infinity |
| Women| 702| 0| Infinity| 0| 0| Infinity |
| Ind| 23315| 0| Infinity| 0| 0| Infinity |
| Libertarian| 343| 0| Infinity| 0| 0| Infinity |
| ND| 521| 0| Infinity| 0| 0| Infinity |
| CPA| 1031| 0| Infinity| 0| 0| Infinity |
| Patria| 84| 0| Infinity| 0| 0| Infinity |
| Loony| 1304| 0| Infinity| 0| 0| Infinity |
| UKIP| 104509| 0| Infinity| 0| 0| Infinity |
| JACP| 991| 0| Infinity| 0| 0| Infinity |
| Radical| 392| 0| Infinity| 0| 0| Infinity |
| S New| 375| 0| Infinity| 0| 0| Infinity |
| AWP| 282| 0| Infinity| 0| 0| Infinity |
| Just| 52| 0| Infinity| 0| 0| Infinity |
| Pirate| 483| 0| Infinity| 0| 0| Infinity |
| AD| 304| 0| Infinity| 0| 0| Infinity |
| Active Dem| 142| 0| Infinity| 0| 0| Infinity |
| Southampton| 816| 0| Infinity| 0| 0| Infinity |
| NHAP| 12668| 0| Infinity| 0| 0| Infinity |
| Peace| 468| 0| Infinity| 0| 0| Infinity |


## West Midlands

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 1355486| 31| 43725| 0| 31| 43725 |
| Lab| 1175085| 23| 51091| 1| 22| 53413 |
| Lib Dem| 122287| 2| 61144| 2| 0| Infinity |
| UKIP| 50106| 1| 50106| 1| 0| Infinity |
| Green| 46347| 0| Infinity| 0| 0| Infinity |
| Good| 155| 0| Infinity| 0| 0| Infinity |
| Loony| 565| 0| Infinity| 0| 0| Infinity |
| Soc Lab| 592| 0| Infinity| 0| 0| Infinity |
| Open| 99| 0| Infinity| 0| 0| Infinity |
| Ind| 10207| 0| Infinity| 0| 0| Infinity |
| NHAP| 2239| 0| Infinity| 0| 0| Infinity |
| ND| 2006| 0| Infinity| 0| 0| Infinity |
| Compass| 38| 0| Infinity| 0| 0| Infinity |


## North West

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Lab| 1972632| 50| 39453| 0| 50| 39453 |
| Con| 1301562| 20| 65078| 2| 18| 72309 |
| Lib Dem| 193053| 3| 64351| 3| 0| Infinity |
| UKIP| 68946| 1| 68946| 1| 0| Infinity |
| Lib| 2449| 0| Infinity| 0| 0| Infinity |
| NHAP| 341| 0| Infinity| 0| 0| Infinity |
| Ind| 12782| 0| Infinity| 0| 0| Infinity |
| CPA| 529| 0| Infinity| 0| 0| Infinity |
| Soc Lab| 424| 0| Infinity| 0| 0| Infinity |
| Green| 39608| 0| Infinity| 0| 0| Infinity |
| Pirate| 371| 0| Infinity| 0| 0| Infinity |
| WVPTFP| 269| 0| Infinity| 0| 0| Infinity |
| ND| 1099| 0| Infinity| 0| 0| Infinity |
| Comm Lge| 27| 0| Infinity| 0| 0| Infinity |
| Women| 234| 0| Infinity| 0| 0| Infinity |
| BNP| 718| 0| Infinity| 0| 0| Infinity |
| GM Homeless| 242| 0| Infinity| 0| 0| Infinity |
| Loony| 217| 0| Infinity| 0| 0| Infinity |


## East Midlands

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 1195983| 32| 37374| 0| 32| 37374 |
| Lab| 954635| 15| 63642| 3| 12| 79553 |
| Lib Dem| 101612| 1| 101612| 1| 0| Infinity |
| Green| 34355| 0| Infinity| 0| 0| Infinity |
| Ind| 12938| 0| Infinity| 0| 0| Infinity |
| Elvis| 195| 0| Infinity| 0| 0| Infinity |
| Blue| 283| 0| Infinity| 0| 0| Infinity |
| BNP| 322| 0| Infinity| 0| 0| Infinity |
| Humanity| 282| 0| Infinity| 0| 0| Infinity |
| Loony| 496| 0| Infinity| 0| 0| Infinity |
| UKIP| 56358| 0| Infinity| 0| 0| Infinity |


## Northern Ireland

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| SF| 238915| 9| 26546| 0| 9| 26546 |
| DUP| 292316| 7| 41759| 0| 7| 41759 |
| SDLP| 95419| 1| 95419| 1| 0| Infinity |
| Ind| 16239| 1| 16239| 0| 1| 16239 |
| UUP| 83280| 0| Infinity| 0| 0| Infinity |
| Con| 3895| 0| Infinity| 0| 0| Infinity |
| Alliance| 64553| 0| Infinity| 0| 0| Infinity |
| Green| 7452| 0| Infinity| 0| 0| Infinity |
| Citizens| 393| 0| Infinity| 0| 0| Infinity |
| WP| 708| 0| Infinity| 0| 0| Infinity |
| PBP| 5509| 0| Infinity| 0| 0| Infinity |
| ND| 222| 0| Infinity| 0| 0| Infinity |
| TUV| 3282| 0| Infinity| 0| 0| Infinity |


## London

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Lab| 2086595| 50| 41732| 0| 50| 41732 |
| Con| 1268800| 18| 70489| 2| 16| 79300 |
| Lib Dem| 336725| 5| 67345| 3| 2| 168363 |
| Green| 67561| 1| 67561| 1| 0| Infinity |
| UKIP| 49369| 0| Infinity| 0| 0| Infinity |
| Ind| 10493| 0| Infinity| 0| 0| Infinity |
| SPGB| 53| 0| Infinity| 0| 0| Infinity |
| BNP| 1971| 0| Infinity| 0| 0| Infinity |
| CPA| 2719| 0| Infinity| 0| 0| Infinity |
| WRP| 634| 0| Infinity| 0| 0| Infinity |
| ND| 608| 0| Infinity| 0| 0| Infinity |
| Pirate| 172| 0| Infinity| 0| 0| Infinity |
| Concordia| 85| 0| Infinity| 0| 0| Infinity |
| Friends| 435| 0| Infinity| 0| 0| Infinity |
| AWP| 673| 0| Infinity| 0| 0| Infinity |
| Eng Dem| 93| 0| Infinity| 0| 0| Infinity |
| Women| 1090| 0| Infinity| 0| 0| Infinity |
| Loony| 274| 0| Infinity| 0| 0| Infinity |
| Comm Lge| 7| 0| Infinity| 0| 0| Infinity |
| Green Soc| 49| 0| Infinity| 0| 0| Infinity |
| Realist| 61| 0| Infinity| 0| 0| Infinity |
| Populist| 50| 0| Infinity| 0| 0| Infinity |
| Young| 43| 0| Infinity| 0| 0| Infinity |


## Yorkshire and The Humber

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Lab| 1276862| 35| 36482| 0| 35| 36482 |
| Con| 1054099| 16| 65881| 1| 15| 70273 |
| Lib Dem| 129687| 2| 64844| 2| 0| Infinity |
| UKIP| 67801| 1| 67801| 1| 0| Infinity |
| Lib| 753| 0| Infinity| 0| 0| Infinity |
| Eng Dem| 1238| 0| Infinity| 0| 0| Infinity |
| Yorkshire| 20958| 0| Infinity| 0| 0| Infinity |
| Ind| 12905| 0| Infinity| 0| 0| Infinity |
| Bradford| 420| 0| Infinity| 0| 0| Infinity |
| Green| 32743| 0| Infinity| 0| 0| Infinity |
| Libertarian| 67| 0| Infinity| 0| 0| Infinity |
| CPA| 224| 0| Infinity| 0| 0| Infinity |
| Green Soc| 163| 0| Infinity| 0| 0| Infinity |
| WRP| 137| 0| Infinity| 0| 0| Infinity |
| Soc Dem| 321| 0| Infinity| 0| 0| Infinity |
| Pirate| 91| 0| Infinity| 0| 0| Infinity |
| Women| 1040| 0| Infinity| 0| 0| Infinity |
| ND| 6410| 0| Infinity| 0| 0| Infinity |


## Eastern

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 1690813| 47| 35975| 0| 47| 35975 |
| Lab| 1012359| 12| 84363| 3| 9| 112484 |
| Lib Dem| 244064| 3| 81355| 2| 1| 244064 |
| Southend| 305| 0| Infinity| 0| 0| Infinity |
| Green| 58704| 0| Infinity| 0| 0| Infinity |
| BNP| 640| 0| Infinity| 0| 0| Infinity |
| Loony| 667| 0| Infinity| 0| 0| Infinity |
| UKIP| 77793| 0| Infinity| 0| 0| Infinity |
| Ind| 6950| 0| Infinity| 0| 0| Infinity |
| Rebooting| 133| 0| Infinity| 0| 0| Infinity |
| Eng Dem| 582| 0| Infinity| 0| 0| Infinity |
| Young| 110| 0| Infinity| 0| 0| Infinity |
| Pirate| 340| 0| Infinity| 0| 0| Infinity |
| CPA| 861| 0| Infinity| 0| 0| Infinity |


## South West

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 1539618| 45| 34214| 0| 45| 34214 |
| Lab| 871738| 8| 108967| 1| 7| 124534 |
| Lib Dem| 448582| 4| 112146| 3| 1| 448582 |
| Green| 67644| 0| Infinity| 0| 0| Infinity |
| UKIP| 32944| 0| Infinity| 0| 0| Infinity |
| Ind| 31565| 0| Infinity| 0| 0| Infinity |
| Pirate| 418| 0| Infinity| 0| 0| Infinity |
| Money| 101| 0| Infinity| 0| 0| Infinity |
| DDI| 551| 0| Infinity| 0| 0| Infinity |
| Soc Lab| 138| 0| Infinity| 0| 0| Infinity |
| ND| 174| 0| Infinity| 0| 0| Infinity |
| Wessex Reg| 223| 0| Infinity| 0| 0| Infinity |
| NHAP| 871| 0| Infinity| 0| 0| Infinity |
| Lib| 470| 0| Infinity| 0| 0| Infinity |
| Loony| 210| 0| Infinity| 0| 0| Infinity |
| CPA| 505| 0| Infinity| 0| 0| Infinity |


## North East

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Lab| 709738| 22| 32261| 0| 22| 32261 |
| Con| 440613| 5| 88123| 2| 3| 146871 |
| Lib Dem| 58409| 0| Infinity| 0| 0| Infinity |
| Green| 16080| 0| Infinity| 0| 0| Infinity |
| BNP| 991| 0| Infinity| 0| 0| Infinity |
| UKIP| 49348| 0| Infinity| 0| 0| Infinity |
| ND| 124| 0| Infinity| 0| 0| Infinity |
| Space| 81| 0| Infinity| 0| 0| Infinity |
| Ind| 1815| 0| Infinity| 0| 0| Infinity |
| Young| 45| 0| Infinity| 0| 0| Infinity |
| NE Party| 2355| 0| Infinity| 0| 0| Infinity |
| North| 353| 0| Infinity| 0| 0| Infinity |
| Libertarian| 114| 0| Infinity| 0| 0| Infinity |


## Regional Top Up Totals

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 13632932| 307| 44407| 9| 298| 45748 |
| Lab| 12874284| 259| 49708| 14| 245| 52548 |
| SNP| 977568| 32| 30549| 0| 32| 30549 |
| Lib Dem| 2371762| 27| 87843| 20| 7| 338823 |
| SF| 238915| 9| 26546| 0| 9| 26546 |
| DUP| 292316| 7| 41759| 0| 7| 41759 |
| UKIP| 593852| 3| 197951| 3| 0| Infinity |
| PC| 164466| 2| 82233| 1| 1| 164466 |
| Green| 525371| 2| 262686| 2| 0| Infinity |
| Ind| 0| 1| 0| 0| 1| 0 |
| SDLP| 95419| 1| 95419| 1| 0| Infinity |
| SPGB| 145| 0| Infinity| 0| 0| Infinity |
| Women| 3580| 0| Infinity| 0| 0| Infinity |
| North| 353| 0| Infinity| 0| 0| Infinity |
| Referendum| 132| 0| Infinity| 0| 0| Infinity |
| Sovereign| 224| 0| Infinity| 0| 0| Infinity |
| Soc Dem| 469| 0| Infinity| 0| 0| Infinity |
| SCP| 1720| 0| Infinity| 0| 0| Infinity |
| S New| 552| 0| Infinity| 0| 0| Infinity |
| Libertarian| 524| 0| Infinity| 0| 0| Infinity |
| CPA| 5869| 0| Infinity| 0| 0| Infinity |
| Patria| 84| 0| Infinity| 0| 0| Infinity |
| Peace| 468| 0| Infinity| 0| 0| Infinity |
| JACP| 991| 0| Infinity| 0| 0| Infinity |
| Radical| 392| 0| Infinity| 0| 0| Infinity |
| AWP| 955| 0| Infinity| 0| 0| Infinity |
| Just| 52| 0| Infinity| 0| 0| Infinity |
| AD| 304| 0| Infinity| 0| 0| Infinity |
| Active Dem| 142| 0| Infinity| 0| 0| Infinity |
| Southampton| 816| 0| Infinity| 0| 0| Infinity |
| NHAP| 16119| 0| Infinity| 0| 0| Infinity |
| Good| 155| 0| Infinity| 0| 0| Infinity |
| Soc Lab| 1154| 0| Infinity| 0| 0| Infinity |
| Open| 99| 0| Infinity| 0| 0| Infinity |
| Compass| 38| 0| Infinity| 0| 0| Infinity |
| Pirate| 2321| 0| Infinity| 0| 0| Infinity |
| WVPTFP| 269| 0| Infinity| 0| 0| Infinity |
| Comm Lge| 34| 0| Infinity| 0| 0| Infinity |
| BNP| 4642| 0| Infinity| 0| 0| Infinity |
| GM Homeless| 242| 0| Infinity| 0| 0| Infinity |
| Blue| 283| 0| Infinity| 0| 0| Infinity |
| Humanity| 282| 0| Infinity| 0| 0| Infinity |
| Elvis| 195| 0| Infinity| 0| 0| Infinity |
| Loony| 3890| 0| Infinity| 0| 0| Infinity |
| Alliance| 64553| 0| Infinity| 0| 0| Infinity |
| UUP| 83280| 0| Infinity| 0| 0| Infinity |
| ND| 11890| 0| Infinity| 0| 0| Infinity |
| Worth| 31| 0| Infinity| 0| 0| Infinity |
| TUV| 3282| 0| Infinity| 0| 0| Infinity |
| WP| 708| 0| Infinity| 0| 0| Infinity |
| PBP| 5509| 0| Infinity| 0| 0| Infinity |
| Citizens| 393| 0| Infinity| 0| 0| Infinity |
| WRP| 771| 0| Infinity| 0| 0| Infinity |
| Young| 198| 0| Infinity| 0| 0| Infinity |
| Concordia| 85| 0| Infinity| 0| 0| Infinity |
| Friends| 435| 0| Infinity| 0| 0| Infinity |
| Eng Dem| 1913| 0| Infinity| 0| 0| Infinity |
| Green Soc| 212| 0| Infinity| 0| 0| Infinity |
| Realist| 61| 0| Infinity| 0| 0| Infinity |
| Populist| 50| 0| Infinity| 0| 0| Infinity |
| Yorkshire| 20958| 0| Infinity| 0| 0| Infinity |
| Bradford| 420| 0| Infinity| 0| 0| Infinity |
| Rebooting| 133| 0| Infinity| 0| 0| Infinity |
| Southend| 305| 0| Infinity| 0| 0| Infinity |
| Money| 101| 0| Infinity| 0| 0| Infinity |
| Wessex Reg| 223| 0| Infinity| 0| 0| Infinity |
| DDI| 551| 0| Infinity| 0| 0| Infinity |
| Space| 81| 0| Infinity| 0| 0| Infinity |
| NE Party| 2355| 0| Infinity| 0| 0| Infinity |
| Lib| 3672| 0| Infinity| 0| 0| Infinity |


## National Top Up

| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 13632932| 298| 45748| 0| 298| 45748 |
| Lab| 12874284| 245| 52548| 0| 245| 52548 |
| Lib Dem| 2371762| 36| 65882| 29| 7| 338823 |
| SNP| 977568| 32| 30549| 0| 32| 30549 |
| UKIP| 593852| 9| 65984| 9| 0| Infinity |
| SF| 238915| 9| 26546| 0| 9| 26546 |
| Green| 525371| 8| 65671| 8| 0| Infinity |
| DUP| 292316| 7| 41759| 0| 7| 41759 |
| PC| 164466| 2| 82233| 1| 1| 164466 |
| Ind| 0| 1| 0| 0| 1| 0 |
| Alliance| 64553| 1| 64553| 1| 0| Infinity |
| UUP| 83280| 1| 83280| 1| 0| Infinity |
| SDLP| 95419| 1| 95419| 1| 0| Infinity |
| North| 353| 0| Infinity| 0| 0| Infinity |
| Referendum| 132| 0| Infinity| 0| 0| Infinity |
| Sovereign| 224| 0| Infinity| 0| 0| Infinity |
| Soc Dem| 469| 0| Infinity| 0| 0| Infinity |
| SCP| 1720| 0| Infinity| 0| 0| Infinity |
| S New| 552| 0| Infinity| 0| 0| Infinity |
| Libertarian| 524| 0| Infinity| 0| 0| Infinity |
| CPA| 5869| 0| Infinity| 0| 0| Infinity |
| Patria| 84| 0| Infinity| 0| 0| Infinity |
| Peace| 468| 0| Infinity| 0| 0| Infinity |
| JACP| 991| 0| Infinity| 0| 0| Infinity |
| Radical| 392| 0| Infinity| 0| 0| Infinity |
| AWP| 955| 0| Infinity| 0| 0| Infinity |
| Just| 52| 0| Infinity| 0| 0| Infinity |
| AD| 304| 0| Infinity| 0| 0| Infinity |
| Active Dem| 142| 0| Infinity| 0| 0| Infinity |
| Southampton| 816| 0| Infinity| 0| 0| Infinity |
| NHAP| 16119| 0| Infinity| 0| 0| Infinity |
| Good| 155| 0| Infinity| 0| 0| Infinity |
| Soc Lab| 1154| 0| Infinity| 0| 0| Infinity |
| Open| 99| 0| Infinity| 0| 0| Infinity |
| Compass| 38| 0| Infinity| 0| 0| Infinity |
| Pirate| 2321| 0| Infinity| 0| 0| Infinity |
| WVPTFP| 269| 0| Infinity| 0| 0| Infinity |
| Comm Lge| 34| 0| Infinity| 0| 0| Infinity |
| BNP| 4642| 0| Infinity| 0| 0| Infinity |
| GM Homeless| 242| 0| Infinity| 0| 0| Infinity |
| Blue| 283| 0| Infinity| 0| 0| Infinity |
| Humanity| 282| 0| Infinity| 0| 0| Infinity |
| Elvis| 195| 0| Infinity| 0| 0| Infinity |
| Loony| 3890| 0| Infinity| 0| 0| Infinity |
| ND| 11890| 0| Infinity| 0| 0| Infinity |
| Worth| 31| 0| Infinity| 0| 0| Infinity |
| SPGB| 145| 0| Infinity| 0| 0| Infinity |
| Women| 3580| 0| Infinity| 0| 0| Infinity |
| TUV| 3282| 0| Infinity| 0| 0| Infinity |
| WP| 708| 0| Infinity| 0| 0| Infinity |
| PBP| 5509| 0| Infinity| 0| 0| Infinity |
| Citizens| 393| 0| Infinity| 0| 0| Infinity |
| WRP| 771| 0| Infinity| 0| 0| Infinity |
| Young| 198| 0| Infinity| 0| 0| Infinity |
| Concordia| 85| 0| Infinity| 0| 0| Infinity |
| Friends| 435| 0| Infinity| 0| 0| Infinity |
| Eng Dem| 1913| 0| Infinity| 0| 0| Infinity |
| Green Soc| 212| 0| Infinity| 0| 0| Infinity |
| Realist| 61| 0| Infinity| 0| 0| Infinity |
| Populist| 50| 0| Infinity| 0| 0| Infinity |
| Yorkshire| 20958| 0| Infinity| 0| 0| Infinity |
| Bradford| 420| 0| Infinity| 0| 0| Infinity |
| Rebooting| 133| 0| Infinity| 0| 0| Infinity |
| Southend| 305| 0| Infinity| 0| 0| Infinity |
| Money| 101| 0| Infinity| 0| 0| Infinity |
| Wessex Reg| 223| 0| Infinity| 0| 0| Infinity |
| DDI| 551| 0| Infinity| 0| 0| Infinity |
| Space| 81| 0| Infinity| 0| 0| Infinity |
| NE Party| 2355| 0| Infinity| 0| 0| Infinity |
| Lib| 3672| 0| Infinity| 0| 0| Infinity |


