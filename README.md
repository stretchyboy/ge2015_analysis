# UK General Election 2017 Analysis
D'Hondt Proportional Representation interpretation of the UK General Election Results June 2017

GE2015_results.json - contains all the seats in the UK, the region they are in and the valid votes for each candidate.

dhondt_regional.js - Uses the D'Hondt method ( https://en.wikipedia.org/wiki/D%27Hondt_method ) to assign the currently existing number of seats in each (Government Office) region.

The code is ugly but I did it in one go in 2015 and wasn't expecting to use it again so soon (be kind).

The output of those calculations is :


## Wales

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| Lab| 21| 36731| 28| 27548 |
| Con| 14| 37774| 8| 66105 |
| PC| 4| 41117| 4| 41117 |
| Lib Dem| 1| 71039| 0| Infinity |


## Scotland

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| SNP| 22| 44435| 35| 27931 |
| Con| 17| 44585| 13| 58304 |
| Lab| 16| 44813| 7| 102430 |
| Lib Dem| 4| 44765| 4| 44765 |


## South East

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 47| 53091| 72| 34657 |
| Lab| 25| 53051| 8| 165785 |
| Lib Dem| 9| 54138| 2| 243622 |
| Green| 2| 71932| 1| 143863 |
| UKIP| 1| 104509| 0| Infinity |


## West Midlands

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 29| 46741| 35| 38728 |
| Lab| 26| 45196| 24| 48962 |
| Lib Dem| 2| 61144| 0| Infinity |
| UKIP| 1| 50106| 0| Infinity |
| Green| 1| 46347| 0| Infinity |


## North West

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| Lab| 42| 46967| 54| 36530 |
| Con| 28| 46484| 20| 65078 |
| Lib Dem| 4| 48263| 1| 193053 |
| UKIP| 1| 68946| 0| Infinity |


## East Midlands

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 24| 49833| 31| 38580 |
| Lab| 19| 50244| 15| 63642 |
| Lib Dem| 2| 50806| 0| Infinity |
| UKIP| 1| 56358| 0| Infinity |


## Northern Ireland

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| DUP| 7| 41759| 10| 29232 |
| SF| 6| 39819| 7| 34131 |
| SDLP| 2| 47710| 0| Infinity |
| UUP| 2| 41640| 0| Infinity |
| Alliance| 1| 64553| 0| Infinity |


## London

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| Lab| 41| 50893| 49| 42584 |
| Con| 25| 50752| 21| 60419 |
| Lib Dem| 6| 56121| 3| 112242 |
| Green| 1| 67561| 0| Infinity |


## Yorkshire and The Humber

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| Lab| 28| 45602| 37| 34510 |
| Con| 23| 45830| 17| 62006 |
| Lib Dem| 2| 64844| 0| Infinity |
| UKIP| 1| 67801| 0| Infinity |


## Eastern

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 33| 51237| 50| 33816 |
| Lab| 19| 53282| 7| 144623 |
| Lib Dem| 4| 61016| 1| 244064 |
| UKIP| 1| 77793| 0| Infinity |
| Green| 1| 58704| 0| Infinity |


## South West

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 30| 51321| 47| 32758 |
| Lab| 16| 54484| 7| 124534 |
| Lib Dem| 8| 56073| 1| 448582 |
| Green| 1| 67644| 0| Infinity |


## North East

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| Lab| 17| 41749| 26| 27298 |
| Con| 10| 44061| 3| 146871 |
| Lib Dem| 1| 58409| 0| Infinity |
| UKIP| 1| 49348| 0| Infinity |


## Totals

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- |:------------- |:------------- |:------------- |:------------- |
| Con| 280| 48689| 317| 43006 |
| Lab| 270| 47683| 262| 49138 |
| Lib Dem| 43| 55157| 12| 197647 |
| SNP| 22| 44435| 35| 27931 |
| DUP| 7| 41759| 10| 29232 |
| UKIP| 7| 84836| 0| Infinity |
| Green| 6| 87562| 1| 525371 |
| SF| 6| 39819| 7| 34131 |
| PC| 4| 41117| 4| 41117 |
| SDLP| 2| 47710| 0| Infinity |
| UUP| 2| 41640| 0| Infinity |
| Alliance| 1| 64553| 0| Infinity |


