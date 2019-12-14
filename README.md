# UK General Election 2019 Analysis
D'Hondt Proportional Representation interpretation of the UK General Election Results December 2019

The Guardian data - contains all the seats in the UK, the region they are in and the valid votes for each candidate.

dhondt_regional.js - Uses the D'Hondt method ( https://en.wikipedia.org/wiki/D%27Hondt_method ) to assign the currently existing number of seats in each (Government Office) region.

The code is ugly but I did it in one go in 2015 and wasn't expecting to use it again so often (be kind).

The output of those calculations is :
## UK Totals

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| Con| 290| 48161| 365| 38265 |
| Lab| 217| 47322| 202| 50836 |
| Lib Dem| 70| 52806| 11| 336038 |
| SNP| 28| 44370| 48| 25883 |
| Green| 12| 72141| 1| 865697 |
| Brexit| 11| 58391| 0| Infinity |
| DUP| 6| 40688| 8| 30516 |
| PC| 4| 38316| 4| 38316 |
| SF| 4| 45463| 7| 25979 |
| Alliance| 3| 44705| 1| 134115 |
| SDLP| 3| 39579| 2| 59369 |
| UUP| 2| 46562| 0| Infinity |


## Wales

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| Lab| 17| 37179| 22| 28729 |
| Con| 15| 37149| 14| 39802 |
| PC| 4| 38316| 4| 38316 |
| Lib Dem| 2| 46086| 0| Infinity |
| Brexit| 2| 41954| 0| Infinity |


## Scotland

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| SNP| 28| 44370| 48| 25883 |
| Con| 15| 46196| 6| 115490 |
| Lab| 11| 46531| 1| 511838 |
| Lib Dem| 5| 52683| 4| 65854 |


## South East

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| Con| 47| 53465| 74| 33958 |
| Lab| 19| 54210| 8| 128750 |
| Lib Dem| 15| 56559| 1| 848381 |
| Green| 3| 61241| 1| 183724 |


## West Midlands

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| Con| 33| 43918| 44| 32938 |
| Lab| 21| 43720| 15| 61208 |
| Lib Dem| 4| 53476| 0| Infinity |
| Green| 1| 80556| 0| Infinity |


## North West

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| Lab| 36| 45507| 41| 39958 |
| Con| 29| 45558| 32| 41287 |
| Lib Dem| 6| 46251| 1| 277505 |
| Brexit| 3| 45392| 0| Infinity |
| Green| 1| 86815| 0| Infinity |


## East Midlands

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| Con| 27| 47434| 38| 33703 |
| Lab| 15| 49396| 8| 92618 |
| Lib Dem| 3| 60888| 0| Infinity |
| Green| 1| 60067| 0| Infinity |


## Northern Ireland

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| DUP| 6| 40688| 8| 30516 |
| SF| 4| 45463| 7| 25979 |
| Alliance| 3| 44705| 1| 134115 |
| SDLP| 3| 39579| 2| 59369 |
| UUP| 2| 46562| 0| Infinity |


## London

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| Lab| 36| 50356| 49| 36996 |
| Con| 23| 52397| 21| 57387 |
| Lib Dem| 11| 51142| 3| 187521 |
| Green| 2| 57764| 0| Infinity |
| Brexit| 1| 51735| 0| Infinity |


## Yorkshire and The Humber

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| Con| 24| 45724| 26| 42207 |
| Lab| 22| 44990| 28| 35350 |
| Lib Dem| 4| 51306| 0| Infinity |
| Brexit| 3| 50193| 0| Infinity |
| Green| 1| 57362| 0| Infinity |


## Eastern

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| Con| 35| 50117| 52| 33733 |
| Lab| 14| 53565| 5| 149981 |
| Lib Dem| 8| 51356| 1| 410849 |
| Green| 1| 90957| 0| Infinity |


## South West

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| Con| 30| 53736| 48| 33585 |
| Lab| 13| 54843| 6| 118826 |
| Lib Dem| 10| 55450| 1| 554500 |
| Green| 2| 57506| 0| Infinity |


## North East

| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |
| ------------- | -------------:| -------------:| -------------:|-------------:|
| Lab| 13| 40932| 19| 28006 |
| Con| 12| 39851| 10| 47821 |
| Brexit| 2| 49479| 0| Infinity |
| Lib Dem| 2| 42622| 0| Infinity |


