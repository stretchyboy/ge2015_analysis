# UK General Election 2019 Analysis
D'Hondt Proportional Representation interpretation of the UK General Election Results December 2019

The Guardian data - contains all the seats in the UK, the region they are in and the valid votes for each candidate.

dhondt_regional.js - Uses the D'Hondt method ( https://en.wikipedia.org/wiki/D%27Hondt_method ) to assign the currently existing number of seats in each (Government Office) region.

The code is ugly but I did it in one go in 2015 and wasn't expecting to use it again so often (be kind).

The output of those calculations is :
## UK Totals

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| Con| 290| 48161| 365| 38265| 13966565 |
| Lab| 217| 47322| 202| 50836| 10268776 |
| Lib Dem| 70| 52806| 11| 336038| 3696423 |
| SNP| 28| 44370| 48| 25883| 1242372 |
| Green| 12| 72141| 1| 865697| 865697 |
| Brexit| 11| 58391| 0| Infinity| 642303 |
| DUP| 6| 40688| 8| 30516| 244128 |
| PC| 4| 38316| 4| 38316| 153265 |
| SF| 4| 45463| 7| 25979| 181853 |
| Alliance| 3| 44705| 1| 134115| 134115 |
| SDLP| 3| 39579| 2| 59369| 118737 |
| UUP| 2| 46562| 0| Infinity| 93123 |


## Wales

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| Lab| 17| 37179| 22| 28729| 632035 |
| Con| 15| 37149| 14| 39802| 557234 |
| PC| 4| 38316| 4| 38316| 153265 |
| Lib Dem| 2| 46086| 0| Infinity| 92171 |
| Brexit| 2| 41954| 0| Infinity| 83908 |


## Scotland

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| SNP| 28| 44370| 48| 25883| 1242372 |
| Con| 15| 46196| 6| 115490| 692939 |
| Lab| 11| 46531| 1| 511838| 511838 |
| Lib Dem| 5| 52683| 4| 65854| 263417 |


## South East

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| Con| 47| 53465| 74| 33958| 2512866 |
| Lab| 19| 54210| 8| 128750| 1029996 |
| Lib Dem| 15| 56559| 1| 848381| 848381 |
| Green| 3| 61241| 1| 183724| 183724 |


## West Midlands

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| Con| 33| 43918| 44| 32938| 1449289 |
| Lab| 21| 43720| 15| 61208| 918123 |
| Lib Dem| 4| 53476| 0| Infinity| 213903 |
| Green| 1| 80556| 0| Infinity| 80556 |


## North West

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| Lab| 36| 45507| 41| 39958| 1638258 |
| Con| 29| 45558| 32| 41287| 1321190 |
| Lib Dem| 6| 46251| 1| 277505| 277505 |
| Brexit| 3| 45392| 0| Infinity| 136176 |
| Green| 1| 86815| 0| Infinity| 86815 |


## East Midlands

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| Con| 27| 47434| 38| 33703| 1280714 |
| Lab| 15| 49396| 8| 92618| 740945 |
| Lib Dem| 3| 60888| 0| Infinity| 182665 |
| Green| 1| 60067| 0| Infinity| 60067 |


## Northern Ireland

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| DUP| 6| 40688| 8| 30516| 244128 |
| SF| 4| 45463| 7| 25979| 181853 |
| Alliance| 3| 44705| 1| 134115| 134115 |
| SDLP| 3| 39579| 2| 59369| 118737 |
| UUP| 2| 46562| 0| Infinity| 93123 |


## London

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| Lab| 36| 50356| 49| 36996| 1812810 |
| Con| 23| 52397| 21| 57387| 1205129 |
| Lib Dem| 11| 51142| 3| 187521| 562564 |
| Green| 2| 57764| 0| Infinity| 115527 |
| Brexit| 1| 51735| 0| Infinity| 51735 |


## Yorkshire and The Humber

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| Con| 24| 45724| 26| 42207| 1097376 |
| Lab| 22| 44990| 28| 35350| 989787 |
| Lib Dem| 4| 51306| 0| Infinity| 205225 |
| Brexit| 3| 50193| 0| Infinity| 150579 |
| Green| 1| 57362| 0| Infinity| 57362 |


## Eastern

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| Con| 35| 50117| 52| 33733| 1754097 |
| Lab| 14| 53565| 5| 149981| 749906 |
| Lib Dem| 8| 51356| 1| 410849| 410849 |
| Green| 1| 90957| 0| Infinity| 90957 |


## South West

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| Con| 30| 53736| 48| 33585| 1612090 |
| Lab| 13| 54843| 6| 118826| 712956 |
| Lib Dem| 10| 55450| 1| 554500| 554500 |
| Green| 2| 57506| 0| Infinity| 115011 |


## North East

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats | Votes |
| ------------- | -------------:| -------------:| -------------:|-------------:|-------------:|
| Lab| 13| 40932| 19| 28006| 532122 |
| Con| 12| 39851| 10| 47821| 478208 |
| Brexit| 2| 49479| 0| Infinity| 98958 |
| Lib Dem| 2| 42622| 0| Infinity| 85243 |


