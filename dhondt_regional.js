var fs = require('fs');
var aSeats = JSON.parse(fs.readFileSync("GE2017_results_guardian.json"));
// from https://interactive.guim.co.uk/2017/06/ukelection2017-data/snap/full.json
// was file from  https://cf.eip.telegraph.co.uk/assets/election2017/allresults.json but it has weird seat names and no ONS_ID

var oSeatRegions = JSON.parse(fs.readFileSync("seats_regions_2015.json"));

console.log(aSeats[2]);

aSeats.map(function(oSeat){
    oSeat.region = false;
    if(oSeatRegions[oSeat.ons]){
        oSeat.region = oSeatRegions[oSeat.ons].region;
            
    }
    
    if(!oSeat.region){
        console.log("Dont match",oSeat.name, ":");
        //process.exit();
    }
    return oSeat;
});


var aRegions = {};

aSeats.forEach(function(oSeat){
        //console.log("oSeat =", oSeat);
        if(typeof aRegions[oSeat.region] === "undefined") {
            aRegions[oSeat.region] = {"seats":0, "parties":{}};
        }
        aRegions[oSeat.region].seats ++;
        
        oSeat.candidates.forEach(function(oCandiate){
                if(typeof aRegions[oSeat.region].parties[oCandiate.party] === "undefined") {
                    aRegions[oSeat.region].parties[oCandiate.party] = 0;
                }
                aRegions[oSeat.region].parties[oCandiate.party] += oCandiate.votes;
                //console.log("oCandiate =", oCandiate);
        });
        
});

//save aData to GE2015_results.json
fs.writeFileSync("regions_results.json", JSON.stringify(aRegions));
//console.log("aRegions =", aRegions);

//dhondt-ing
var aDHondt = {};
var iSeats = 0;
var oNational = {};


for (var sRegion in aRegions) {
    var aDivided = [];
    
    for (var i = 1; i <= aRegions[sRegion].seats; i++ ) {
        for (var sParty in aRegions[sRegion].parties) {
            aDivided.push({"party":sParty, "div": aRegions[sRegion].parties[sParty] / i});        
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
    var aDivided2 = aDivided.slice(0, aRegions[sRegion].seats);
    //console.log("aDivided2 =", aDivided2);
    
    var aDHondtRegion = {};
    
    
    aDivided2.forEach(function(oItem){
        //console.log("oSeat =", oSeat);
        if(typeof aDHondtRegion[oItem.party] === "undefined") {
            aDHondtRegion[oItem.party] = 0;
        }
        aDHondtRegion[oItem.party] ++;
        iSeats ++;

        if(typeof oNational[oItem.party] === "undefined") {
            oNational[oItem.party] = 0;
        }
        oNational[oItem.party] ++;
    });
    
    //console.log("aDHondtRegion =", aDHondtRegion);
    aDHondt[sRegion] = aDHondtRegion;   
};

fs.writeFileSync("dhondt_results_regions.json", JSON.stringify(aDHondt));

fs.writeFileSync("dhondt_results_totals.json", JSON.stringify(oNational));

console.log("aDHondt =", aDHondt);  
console.log("oNational =", oNational);

function formatResult(sZone, oZone) {
    var sOutput = "## "+sZone+"\n\n";
    sOutput += "| Party | Seats |\n| ------------- |:------------- |\n";
    var aParties = [];
    for (sParty in oZone) {
        aParties.push({party:sParty, seats:oZone[sParty]});
        //sOutput += "| "+sParty+ "| "+oZone[sParty]+ " |\n";    
    }
    aParties.sort(function(a,b){
        return b.seats - a.seats;
    });
    
    aParties.forEach(function(oParty){
        sOutput += "| "+oParty.party+ "| "+oParty.seats+ " |\n";
    });
    sOutput += "\n\n";
    return sOutput;
};

var sMD = fs.readFileSync("readme_top.md")
for (var sRegion in aDHondt) {
    sMD += formatResult(sRegion, aDHondt[sRegion]);
}

sMD += formatResult("Totals", oNational);


fs.writeFileSync("README.md", sMD);
console.log("sMD =", sMD);

