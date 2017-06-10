var fs = require('fs');
var aSeats = JSON.parse(fs.readFileSync("GE2017_results_guardian.json"));
// from https://interactive.guim.co.uk/2017/06/ukelection2017-data/snap/full.json
// was file from  https://cf.eip.telegraph.co.uk/assets/election2017/allresults.json but it has weird seat names and no ONS_ID

var oSeatRegions = JSON.parse(fs.readFileSync("seats_regions_2015.json"));

function normParty(sParty){
    return sParty.replace(" Co-op","");
}

console.log(aSeats[2]);

// Look up the region for every seat
aSeats.map(function(oSeat){
    oSeat.region = false;
    if(oSeatRegions[oSeat.ons]){
        oSeat.region = oSeatRegions[oSeat.ons].region;
            
    }
    
    if(!oSeat.region){
        console.log(oSeat.name," : Not found in seats_regions_2015.json");
    }
    return oSeat;
});


var oRegions = {};
var oNational = {seats:0, votes:0, "parties":{}};

aSeats.forEach(function(oSeat){
        //console.log("oSeat =", oSeat);
        if(typeof oRegions[oSeat.region] === "undefined") {
            oRegions[oSeat.region] = {"seats":0, "votes":0, "parties":{}};
        }
        
        oRegions[oSeat.region].seats ++;
        oNational.seats ++;
        var sNormParty = normParty(oSeat.winningParty);
        
        if(typeof oRegions[oSeat.region].parties[sNormParty] === "undefined") {
            oRegions[oSeat.region].parties[sNormParty] = {
                votes:0,
                fptp:0,
            };
        }
        oRegions[oSeat.region].parties[sNormParty].fptp ++;
        
        if(typeof oNational.parties[sNormParty] === "undefined") {
            oNational.parties[sNormParty] = {
                votes:0,
                fptp:0,
            };
        }
        oNational.parties[sNormParty].fptp ++;
        
        oSeat.candidates.forEach(function(oCandiate){
            var sNormParty = normParty(oCandiate.party);
        
            if(typeof oRegions[oSeat.region].parties[sNormParty] === "undefined") {
                oRegions[oSeat.region].parties[sNormParty] = {
                    votes:0,
                    fptp:0,
                };
            }
            oRegions[oSeat.region].parties[sNormParty].votes += oCandiate.votes;
            oRegions[oSeat.region].votes += oCandiate.votes;
            
            if(typeof oNational.parties[sNormParty] === "undefined") {
                oNational.parties[sNormParty] = {
                    votes:0,
                    fptp:0,
                };
            }
            oNational.parties[sNormParty].votes += oCandiate.votes;
            oNational.votes += oCandiate.votes;
            
            //console.log("oCandiate =", oCandiate);
        });
        
});

//save aData to GE2015_results.json
fs.writeFileSync("regions_results.json", JSON.stringify(oRegions));
//console.log("oRegions =", oRegions);

//dhondt-ing
var oDHondt = {};
var iSeats = 0;
var oDHondtNational = {};


for (var sRegion in oRegions) {
    var aDivided = [];
    
    for (var i = 1; i <= oRegions[sRegion].seats; i++ ) {
        for (var sParty in oRegions[sRegion].parties) {
            aDivided.push({"party":sParty, "div": oRegions[sRegion].parties[sParty].votes / i});        
        };
    }
    aDivided.sort(function compare(a, b) {
        if (a.div < b.div) {
            return 1;
        }
        if (a.div > b.div) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    var aDivided2 = aDivided.slice(0, oRegions[sRegion].seats);
    //console.log("aDivided2 =", aDivided2);
    
    var oDHondtRegion = {};
    
    
    aDivided2.forEach(function(oItem){
        //console.log("oItem =", oItem);
        if(typeof oDHondtRegion[oItem.party] === "undefined") {
            oDHondtRegion[oItem.party] = 0;
        }
        oDHondtRegion[oItem.party] ++;
        iSeats ++;

        if(typeof oDHondtNational[oItem.party] === "undefined") {
            oDHondtNational[oItem.party] = 0;
        }
        oDHondtNational[oItem.party] ++;
    });
    
    //console.log("aDHondtRegion =", aDHondtRegion);
    
    oDHondt[sRegion] = oDHondtRegion;   
};

fs.writeFileSync("dhondt_results_regions.json", JSON.stringify(oDHondt));

fs.writeFileSync("dhondt_results_totals.json", JSON.stringify(oDHondtNational));

console.log("aDHondt =", oDHondt);  
console.log("oDHondtNational =", oDHondtNational);

function formatResult(sZone, oDHZone, oZone) {
    console.log(oZone);
    var sOutput = "## "+sZone+"\n\n";
    sOutput += "| Party | PR Seats | PR votes/seats | FPTP Seats | FPTP votes/seats |\n| ------------- |:------------- |:------------- ||:------------- ||:------------- |\n";
    var aParties = [];
    for (sParty in oDHZone) {
        aParties.push({
            party:sParty, 
            seats:oDHZone[sParty], 
            //votes:oZone.parties[sParty].votes,
            mpsperseat:Math.round(oZone.parties[sParty].votes / oDHZone[sParty]),
            fptpseats: oZone.parties[sParty].fptp,
            fptpmpsperseat:Math.round(oZone.parties[sParty].votes / oZone.parties[sParty].fptp),
            
        });
        //sOutput += "| "+sParty+ "| "+oZone[sParty]+ " |\n";    
    }
    aParties.sort(function(a,b){
        return b.seats - a.seats;
    });
    
    aParties.forEach(function(oParty){
        //sOutput += "| "+oParty.party+ "| "+oParty.seats+ " |\n";
        for(var sFieldName in oParty){
            sOutput += "| "+oParty[sFieldName];
        }
        sOutput += " |\n";
    });
    sOutput += "\n\n";
    return sOutput;
};

var sMD = fs.readFileSync("readme_top.md")
for (var sRegion in oDHondt) {
    sMD += formatResult(sRegion, oDHondt[sRegion], oRegions[sRegion]);
}

sMD += formatResult("Totals", oDHondtNational, oNational);


fs.writeFileSync("README.md", sMD);
console.log("sMD =", sMD);

