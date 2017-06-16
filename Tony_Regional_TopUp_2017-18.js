var fs = require('fs');

var oRegions = JSON.parse(fs.readFileSync("regions_2017-18_results_transition.json","utf8"));
var oNational = {targetseats:650, seats:0, fptp:0, votes:0, "parties":{}};

//dhondt-ing
var oDHondt = {};
var iSeats = 0;
var oDHondtRegionsTotals = {};

function DhontZone(oZone){
    //console.log(oZone);
    //process.exit();
    var aDivided = [];
    //TODO : Instead of filtering out maybe we should loop around the parties and only add them to div if they have got that seat at that region at that level already
    
    for (var sParty in oZone.parties) {
        
        for (var i = oZone.parties[sParty].seats+1; i <= oZone.targetseats; i++ ) {
            aDivided.push({"party":sParty, "div": oZone.parties[sParty].votes / i});        
        }
    }
    
    
    /*for (var i = 1; i <= oZone.targetseats; i++ ) {
        for (var sParty in oZone.parties) {
            aDivided.push({"party":sParty, "div": oZone.parties[sParty].votes / i});        
        }
    }*/
    
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
    
    //logic problem here
    var aDivided2 = aDivided/*.filter(function(oDiv){
        if(oZone.parties[oDiv.party].seats < oZone.parties[oDiv.party].fptp){
            oZone.parties[oDiv.party].seats ++;
            return false;
        }
        return true; //oZone.parties[oDiv.party].seats >= oZone.parties[oDiv.party].fptp;
    });
    */
    var aDivided3 = aDivided.slice(0, oZone.targetseats - oZone.fptp);
    console.log("aDivided =", aDivided.length, "aDivided2 =", aDivided2.length,"aDivided3 =", aDivided3.length);
    
    var oDHondtZone = {};
    
    aDivided3.forEach(function(oItem){
        if(typeof oDHondtZone[oItem.party] === "undefined") {
            oDHondtZone[oItem.party] = 0;
        }
        oZone.parties[oItem.party].seats ++;
        oDHondtZone[oItem.party] ++;
        iSeats ++;

        if(typeof oDHondtRegionsTotals[oItem.party] === "undefined") {
            oDHondtRegionsTotals[oItem.party] = 0;
        }
        oDHondtRegionsTotals[oItem.party] ++;
    });
    
    return oDHondtZone;
}

function formatResult(sZone, oDHZone, oZone) {
    //console.log(oZone);
    //console.log(oDHZone);
    var sOutput = "## "+sZone+"\n\n";
    sOutput += "| Party | Votes | Topped Up Seats | Topped Up votes/seats | Top Up | 2018 FPTP Seats | 2018 FPTP votes/seats |\n| ------------- |:------------- |:------------- |:------------- |:------------- |:------------- |:------------- |\n";
    var aParties = [];
    for (sParty in oZone.parties) {
        var iTopUp = 0;
        if(typeof oDHZone[sParty] != "undefined"){
            iTopUp = oDHZone[sParty];
        }
        //console.log("iTopUp",iTopUp);
        aParties.push({
            party:sParty, 
            votes:oZone.parties[sParty].votes,
            seats:iTopUp + oZone.parties[sParty].fptp, 
            mpsperseat:Math.round(oZone.parties[sParty].votes / (iTopUp + oZone.parties[sParty].fptp)),
            topup:iTopUp, 
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

for (var sRegion in oRegions) {
    var aDivided = [];
    
    for (var sParty in oRegions[sRegion].parties) {
        if(typeof oNational.parties[sParty] === "undefined") {
            oNational.parties[sParty] = {
                seats:0,
                votes:0,
                fptp:0,
            };
        }
        
        oRegions[sRegion].parties[sParty].seats = oRegions[sRegion].parties[sParty].fptp;
        
        oNational.parties[sParty].votes += oRegions[sRegion].parties[sParty].votes;
        oNational.parties[sParty].fptp += oRegions[sRegion].parties[sParty].fptp;
        oNational.parties[sParty].seats += oRegions[sRegion].parties[sParty].seats;
        
        
        oNational.votes += oRegions[sRegion].parties[sParty].votes;
        oNational.fptp += oRegions[sRegion].parties[sParty].fptp;
        oNational.seats += oRegions[sRegion].parties[sParty].seats;
    }
    console.log(sRegion);
    oDHondt[sRegion] = DhontZone(oRegions[sRegion]);
       
};

//fs.writeFileSync("dhondt_2018_results_regions.json", JSON.stringify(oDHondt, null, 4));

//fs.writeFileSync("dhondt_2018_results_totals.json", JSON.stringify(oDHondtNational, null, 4));

//console.log("aDHondt =", oDHondt);  
//console.log("oDHondtNational =", oDHondtNational);



var sMD = fs.readFileSync("readme_2017-18_top.md")
for (var sRegion in oDHondt) {
    sMD += formatResult(sRegion, oDHondt[sRegion], oRegions[sRegion]);
}

sMD += formatResult("Regional Top Up Totals", oDHondtRegionsTotals, oNational);


var oDHondtNatTopUp = DhontZone(oNational);
sMD += formatResult("National Top Up", oDHondtNatTopUp, oNational);
    
console.log(oNational);

fs.writeFileSync("README_2017-18.md", sMD);
//console.log("sMD =", sMD);

