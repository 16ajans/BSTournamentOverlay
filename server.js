const WebSocket = require('ws');

const fetch = require('node-fetch');

const server = new WebSocket.Server({
    port: 1337
});






var P1Name = 'Player 1';
var P2Name = 'Player 2';
var P3Name = 'Player 3';
var P4Name = 'Player 4';

var P1Map0Score = "0";
var P1Map0Acc = "0";
var P1Map0Misses = "0";
var P1Map1Score = "0";
var P1Map1Acc = "0";
var P1Map1Misses = "0";
var P1Map2Score = "0";
var P1Map2Acc = "0";
var P1Map2Misses = "0";
var P1Map3Score = "0";
var P1Map3Acc = "0";
var P1Map3Misses = "0";
var P1Map4Score = "0";
var P1Map4Acc = "0";
var P1Map4Misses = "0";
var P1Map5Score = "0";
var P1Map5Acc = "0";
var P1Map5Misses = "0";
var P1Map6Score = "0";
var P1Map6Acc = "0";
var P1Map6Misses = "0";
var P1Map7Score = "0";
var P1Map7Acc = "0";
var P1Map7Misses = "0";
var P1Map8Score = "0";
var P1Map8Acc = "0";
var P1Map8Misses = "0";
var P2Map0Score = "0";
var P2Map0Acc = "0";
var P2Map0Misses = "0";
var P2Map1Score = "0";
var P2Map1Acc = "0";
var P2Map1Misses = "0";
var P2Map2Score = "0";
var P2Map2Acc = "0";
var P2Map2Misses = "0";
var P2Map3Score = "0";
var P2Map3Acc = "0";
var P2Map3Misses = "0";
var P2Map4Score = "0";
var P2Map4Acc = "0";
var P2Map4Misses = "0";
var P2Map5Score = "0";
var P2Map5Acc = "0";
var P2Map5Misses = "0";
var P2Map6Score = "0";
var P2Map6Acc = "0";
var P2Map6Misses = "0";
var P2Map7Score = "0";
var P2Map7Acc = "0";
var P2Map7Misses = "0";
var P2Map8Score = "0";
var P2Map8Acc = "0";
var P2Map8Misses = "0";
var P3Map0Score = "0";
var P3Map0Acc = "0";
var P3Map0Misses = "0";
var P3Map1Score = "0";
var P3Map1Acc = "0";
var P3Map1Misses = "0";
var P3Map2Score = "0";
var P3Map2Acc = "0";
var P3Map2Misses = "0";
var P3Map3Score = "0";
var P3Map3Acc = "0";
var P3Map3Misses = "0";
var P3Map4Score = "0";
var P3Map4Acc = "0";
var P3Map4Misses = "0";
var P3Map5Score = "0";
var P3Map5Acc = "0";
var P3Map5Misses = "0";
var P3Map6Score = "0";
var P3Map6Acc = "0";
var P3Map6Misses = "0";
var P3Map7Score = "0";
var P3Map7Acc = "0";
var P3Map7Misses = "0";
var P3Map8Score = "0";
var P3Map8Acc = "0";
var P3Map8Misses = "0";
var P4Map0Score = "0";
var P4Map0Acc = "0";
var P4Map0Misses = "0";
var P4Map1Score = "0";
var P4Map1Acc = "0";
var P4Map1Misses = "0";
var P4Map2Score = "0";
var P4Map2Acc = "0";
var P4Map2Misses = "0";
var P4Map3Score = "0";
var P4Map3Acc = "0";
var P4Map3Misses = "0";
var P4Map4Score = "0";
var P4Map4Acc = "0";
var P4Map4Misses = "0";
var P4Map5Score = "0";
var P4Map5Acc = "0";
var P4Map5Misses = "0";
var P4Map6Score = "0";
var P4Map6Acc = "0";
var P4Map6Misses = "0";
var P4Map7Score = "0";
var P4Map7Acc = "0";
var P4Map7Misses = "0";
var P4Map8Score = "0";
var P4Map8Acc = "0";
var P4Map8Misses = "0";



function calcMaxScore(noteCount) {
    var num = 0;
    var i = 1;
    while (i < 8) {
        if (noteCount < i * 2) {
            num += i * noteCount;
            noteCount = 0;
            break;
        }
        num += i * i * 2 + i;
        noteCount -= i * 2;
        i *= 2;
    }
    num += noteCount * i;
    return num * 115;
}
var P1ScoreSaber = '';
var P2ScoreSaber = '';
var P3ScoreSaber = '';
var P4ScoreSaber = '';
var Team1 = '';
var Team2 = '';


let sockets = [];
server.on('connection', function (socket) {
    console.log("Client connected");
    sockets.push(socket);

    socket.on('message', function (msg) {
        let data = JSON.parse(msg);
        console.log(data);
        let dataString = JSON.stringify(data);
        sockets.forEach(s => s.send(dataString));

        // Check for event called PlayerIDs




        var mapCount = 0;









        if (data.Event == "MatchData") {

            if (data.Data.StatsUpdate == 1) {
                console.log("updating stats");
                P1ScoreSaber = data.Data.P1;
                P2ScoreSaber = data.Data.P2;
                P3ScoreSaber = data.Data.P3;
                P4ScoreSaber = data.Data.P4;


                fetch(`https://new.scoresaber.com/api/player/${P1ScoreSaber}/full`)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        //console.log(data);
                        P1Name = data.playerInfo.playerName;
                        console.log(P1Name);
                    })
                    .catch(err => {
                        console.log(err)
                    })
                fetch(`https://new.scoresaber.com/api/player/${P2ScoreSaber}/full`)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        //console.log(data);
                        // Do stuff here
                        P2Name = data.playerInfo.playerName;
                        console.log(P2Name);
                    })
                    .catch(err => {
                        //console.log(err)
                    })

                fetch(`https://new.scoresaber.com/api/player/${P3ScoreSaber}/full`)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        // console.log(data);
                        // Do stuff here
                        P3Name = data.playerInfo.playerName;
                        console.log(P3Name);
                    })
                    .catch(err => {
                        console.log(err)
                    })

                fetch(`https://new.scoresaber.com/api/player/${P4ScoreSaber}/full`)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        //console.log(data);
                        // Do stuff here
                        P4Name = data.playerInfo.playerName;
                        console.log(P4Name);
                    })
                    .catch(err => {
                        console.log(err)
                    })
                statsUpdate();
            }
        }

        if (data.Event == "ControllerData") {
            console.log("Recieved ControllerData")
            console.log(data);
            P1 = data.Data.P1;
            P2 = data.Data.P2;
            P3 = data.Data.P3;
            P4 = data.Data.P4;
            MapPool = data.Data.MapPool + '';
            Team1 = data.Data.Team1;
            console.log(Team1);
            Team2 = data.Data.Team2;

            P1ScoreSaber = '';
            P2ScoreSaber = '';
            P3ScoreSaber = '';
            P4ScoreSaber = '';

            //    if (P1 != "") {
            //        P1ScoreSaber = teamInfo[Team1][P1].SSID;
            //    }
            //
            //    if (P2 != "") {
            //        P2ScoreSaber = teamInfo[Team2][P2].SSID;
            //    }
            //    if (P3 != "") {
            //        P3ScoreSaber = teamInfo[Team1][P3].SSID;
            //    }
            //    if (P4 != "") {
            //        P4ScoreSaber = teamInfo[Team2][P4].SSID;
            //    }


            // sourceUpdate();




            fetch(`https://new.scoresaber.com/api/player/${P1ScoreSaber}/full`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    //console.log(data);
                    P1Name = data.playerInfo.playerName;
                    console.log(P1Name);
                })
                .catch(err => {
                    console.log(err)
                })
            fetch(`https://new.scoresaber.com/api/player/${P2ScoreSaber}/full`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    //console.log(data);
                    // Do stuff here
                    P2Name = data.playerInfo.playerName;
                    console.log(P2Name);
                })
                .catch(err => {
                    //console.log(err)
                })

            fetch(`https://new.scoresaber.com/api/player/${P3ScoreSaber}/full`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    // console.log(data);
                    // Do stuff here
                    P3Name = data.playerInfo.playerName;
                    console.log(P3Name);
                })
                .catch(err => {
                    console.log(err)
                })

            fetch(`https://new.scoresaber.com/api/player/${P4ScoreSaber}/full`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    //console.log(data);
                    // Do stuff here
                    P4Name = data.playerInfo.playerName;
                    console.log(P4Name);
                })
                .catch(err => {
                    console.log(err)
                })
            mapPoolUpdate();

            if (data.Data.StatsUpdate == 0) {
                console.log("Not sending stats");
            }


            if (data.Data.StatsUpdate == 1) {
                console.log("Sending Stats");
                setTimeout(function () {
                    scoreWipe();
                    console.log(P1Name);
                    console.log(P1ScoreSaber);
                    console.log(P2Name);
                    console.log(P2ScoreSaber);
                    console.log(P3Name);
                    console.log(P3ScoreSaber);
                    console.log(P4Name);
                    console.log(P4ScoreSaber);

                    if (/^\d/.test(P1ScoreSaber) == true) {

                        console.log("P1 Scoresaber Located")
                        P1accFinder();

                    }


                    if (/^\d/.test(P2ScoreSaber) == true) {

                        console.log("P2 Scoresaber Located")
                        P2accFinder();

                    }
                    if (P3ScoreSaber != "") {

                        if (/^\d/.test(P3ScoreSaber) == true) {

                            console.log("P3 Scoresaber Located")
                            P3accFinder();

                        }



                    }
                    if (P4ScoreSaber != "") {
                        if (/^\d/.test(P4ScoreSaber) == true) {

                            console.log("P4 Scoresaber Located")
                            P4accFinder();

                        }
                    }
                }, 3000);
                setTimeout(function () {

                    if (typeof P1Map0Score === 'undefined') {
                        P1Map0Score = "0";
                    }
                    if (typeof P1Map0Acc === 'undefined') {
                        P1Map0SAcc = "0";
                    }
                    if (typeof P1Map0Misses === 'undefined') {
                        P1Map0Misses = "0";
                    }
                    if (typeof P1Map1Score === 'undefined') {
                        P1Map1Score = "0";
                    }
                    if (typeof P1Map1Acc === 'undefined') {
                        P1Map1Acc = "0";
                    }
                    if (typeof P1Map1Misses === 'undefined') {
                        P1Map1Misses = "0";
                    }
                    if (typeof P1Map2Score === 'undefined') {
                        P1Map2Score = "0";
                    }
                    if (typeof P1Map2Acc === 'undefined') {
                        P1Map2Acc = "0";
                    }
                    if (typeof P1Map2Misses === 'undefined') {
                        P1Map2Misses = "0";
                    }
                    if (typeof P1Map3Score === 'undefined') {
                        P1Map3Score = "0";
                    }
                    if (typeof P1Map3Acc === 'undefined') {
                        P1Map3Acc = "0";
                    }
                    if (typeof P1Map3Misses === 'undefined') {
                        P1Map3Misses = "0";
                    }
                    if (typeof P1Map4Score === 'undefined') {
                        P1Map4Score = "0";
                    }
                    if (typeof P1Map4Acc === 'undefined') {
                        P1Map4Acc = "0";
                    }
                    if (typeof P1Map4Misses === 'undefined') {
                        P1Map4Misses = "0";
                    }
                    if (typeof P1Map5Score === 'undefined') {
                        P1Map5Score = "0";
                    }
                    if (typeof P1Map5Acc === 'undefined') {
                        P1Map5Acc = "0";
                    }
                    if (typeof P1Map5Misses === 'undefined') {
                        P1Map5Misses = "0";
                    }
                    if (typeof P1Map6Score === 'undefined') {
                        P1Map6Score = "0";
                    }
                    if (typeof P1Map6Acc === 'undefined') {
                        P1Map6Acc = "0";
                    }
                    if (typeof P1Map6Misses === 'undefined') {
                        P1Map6Misses = "0";
                    }
                    if (typeof P1Map7Score === 'undefined') {
                        P1Map7Score = "0";
                    }
                    if (typeof P1Map7Acc === 'undefined') {
                        P1Map7Acc = "0";
                    }
                    if (typeof P1Map7Misses === 'undefined') {
                        P1Map7Misses = "0";
                    }
                    if (typeof P1Map8Score === 'undefined') {
                        P1Map8Score = "0";
                    }
                    if (typeof P1Map8Acc === 'undefined') {
                        P1Map8Acc = "0";
                    }
                    if (typeof P1Map8Misses === 'undefined') {
                        P1Map8Misses = "0";
                    }
                    if (typeof P2Map0Acc === 'undefined') {
                        P2Map0Score = "0";
                    }
                    if (typeof P2Map0Misses === 'undefined') {
                        P2Map0Misses = "0";
                    }
                    if (typeof P2Map1Score === 'undefined') {
                        P2Map1Score = "0";
                    }
                    if (typeof P2Map1Acc === 'undefined') {
                        P2Map1Acc = "0";
                    }
                    if (typeof P2Map1Misses === 'undefined') {
                        P2Map1Misses = "0";
                    }
                    if (typeof P2Map2Score === 'undefined') {
                        P2Map2Score = "0";
                    }
                    if (typeof P2Map2Acc === 'undefined') {
                        P2Map2Acc = "0";
                    }
                    if (typeof P2Map2Misses === 'undefined') {
                        P2Map2Misses = "0";
                    }
                    if (typeof P2Map3Score === 'undefined') {
                        P2Map3Score = "0";
                    }
                    if (typeof P2Map3Acc === 'undefined') {
                        P2Map3Acc = "0";
                    }
                    if (typeof P2Map3Misses === 'undefined') {
                        P2Map3Misses = "0";
                    }
                    if (typeof P2Map4Score === 'undefined') {
                        P2Map4Score = "0";
                    }
                    if (typeof P2Map4Acc === 'undefined') {
                        P2Map4Acc = "0";
                    }
                    if (typeof P2Map4Misses === 'undefined') {
                        P2Map4Misses = "0";
                    }
                    if (typeof P2Map5Score === 'undefined') {
                        P2Map5Score = "0";
                    }
                    if (typeof P2Map5Acc === 'undefined') {
                        P2Map5Acc = "0";
                    }
                    if (typeof P2Map5Misses === 'undefined') {
                        P2Map5Misses = "0";
                    }
                    if (typeof P2Map6Score === 'undefined') {
                        P2Map6Score = "0";
                    }
                    if (typeof P2Map6Acc === 'undefined') {
                        P2Map6Acc = "0";
                    }
                    if (typeof P2Map6Misses === 'undefined') {
                        P2Map6Misses = "0";
                    }
                    if (typeof P2Map7Score === 'undefined') {
                        P2Map7Score = "0";
                    }
                    if (typeof P2Map7Acc === 'undefined') {
                        P2Map7Acc = "0";
                    }
                    if (typeof P2Map7Misses === 'undefined') {
                        P2Map7Misses = "0";
                    }
                    if (typeof P2Map8Score === 'undefined') {
                        P2Map8Score = "0";
                    }
                    if (typeof P2Map8Acc === 'undefined') {
                        P2Map8Acc = "0";
                    }
                    if (typeof P2Map8Misses === 'undefined') {
                        P2Map8Misses = "0";
                    }
                    if (typeof P3Map0Acc === 'undefined') {
                        P3Map0Score = "0";
                    }
                    if (typeof P3Map0Misses === 'undefined') {
                        P3Map0Misses = "0";
                    }
                    if (typeof P3Map1Score === 'undefined') {
                        P3Map1Score = "0";
                    }
                    if (typeof P3Map1Acc === 'undefined') {
                        P3Map1Acc = "0";
                    }
                    if (typeof P3Map1Misses === 'undefined') {
                        P3Map1Misses = "0";
                    }
                    if (typeof P3Map2Score === 'undefined') {
                        P3Map2Score = "0";
                    }
                    if (typeof P3Map2Acc === 'undefined') {
                        P3Map2Acc = "0";
                    }
                    if (typeof P3Map2Misses === 'undefined') {
                        P3Map2Misses = "0";
                    }
                    if (typeof P3Map3Score === 'undefined') {
                        P3Map3Score = "0";
                    }
                    if (typeof P3Map3Acc === 'undefined') {
                        P3Map3Acc = "0";
                    }
                    if (typeof P3Map3Misses === 'undefined') {
                        P3Map3Misses = "0";
                    }
                    if (typeof P3Map4Score === 'undefined') {
                        P3Map4Score = "0";
                    }
                    if (typeof P3Map4Acc === 'undefined') {
                        P3Map4Acc = "0";
                    }
                    if (typeof P3Map4Misses === 'undefined') {
                        P3Map4Misses = "0";
                    }
                    if (typeof P3Map5Score === 'undefined') {
                        P3Map5Score = "0";
                    }
                    if (typeof P3Map5Acc === 'undefined') {
                        P3Map5Acc = "0";
                    }
                    if (typeof P3Map5Misses === 'undefined') {
                        P3Map5Misses = "0";
                    }
                    if (typeof P3Map6Score === 'undefined') {
                        P3Map6Score = "0";
                    }
                    if (typeof P3Map6Acc === 'undefined') {
                        P3Map6Acc = "0";
                    }
                    if (typeof P3Map6Misses === 'undefined') {
                        P3Map6Misses = "0";
                    }
                    if (typeof P3Map7Score === 'undefined') {
                        P3Map7Score = "0";
                    }
                    if (typeof P3Map7Acc === 'undefined') {
                        P3Map7Acc = "0";
                    }
                    if (typeof P3Map7Misses === 'undefined') {
                        P3Map7Misses = "0";
                    }
                    if (typeof P3Map8Score === 'undefined') {
                        P3Map8Score = "0";
                    }
                    if (typeof P3Map8Acc === 'undefined') {
                        P3Map8Acc = "0";
                    }
                    if (typeof P3Map8Misses === 'undefined') {
                        P3Map8Misses = "0";
                    }
                    if (typeof P4Map0Acc === 'undefined') {
                        P4Map0Score = "0";
                    }
                    if (typeof P4Map0Misses === 'undefined') {
                        P4Map0Misses = "0";
                    }
                    if (typeof P4Map1Score === 'undefined') {
                        P4Map1Score = "0";
                    }
                    if (typeof P4Map1Acc === 'undefined') {
                        P4Map1Acc = "0";
                    }
                    if (typeof P4Map1Misses === 'undefined') {
                        P4Map1Misses = "0";
                    }
                    if (typeof P4Map2Score === 'undefined') {
                        P4Map2Score = "0";
                    }
                    if (typeof P4Map2Acc === 'undefined') {
                        P4Map2Acc = "0";
                    }
                    if (typeof P4Map2Misses === 'undefined') {
                        P4Map2Misses = "0";
                    }
                    if (typeof P4Map3Score === 'undefined') {
                        P4Map3Score = "0";
                    }
                    if (typeof P4Map3Acc === 'undefined') {
                        P4Map3Acc = "0";
                    }
                    if (typeof P4Map3Misses === 'undefined') {
                        P4Map3Misses = "0";
                    }
                    if (typeof P4Map4Score === 'undefined') {
                        P4Map4Score = "0";
                    }
                    if (typeof P4Map4Acc === 'undefined') {
                        P4Map4Acc = "0";
                    }
                    if (typeof P4Map4Misses === 'undefined') {
                        P4Map4Misses = "0";
                    }
                    if (typeof P4Map5Score === 'undefined') {
                        P4Map5Score = "0";
                    }
                    if (typeof P4Map5Acc === 'undefined') {
                        P4Map5Acc = "0";
                    }
                    if (typeof P4Map5Misses === 'undefined') {
                        P4Map5Misses = "0";
                    }
                    if (typeof P4Map6Score === 'undefined') {
                        P4Map6Score = "0";
                    }
                    if (typeof P4Map6Acc === 'undefined') {
                        P4Map6Acc = "0";
                    }
                    if (typeof P4Map6Misses === 'undefined') {
                        P4Map6Misses = "0";
                    }
                    if (typeof P4Map7Score === 'undefined') {
                        P4Map7Score = "0";
                    }
                    if (typeof P4Map7Acc === 'undefined') {
                        P4Map7Acc = "0";
                    }
                    if (typeof P4Map7Misses === 'undefined') {
                        P4Map7Misses = "0";
                    }
                    if (typeof P4Map8Score === 'undefined') {
                        P4Map8Score = "0";
                    }
                    if (typeof P4Map8Acc === 'undefined') {
                        P4Map8Acc = "0";
                    }
                    if (typeof P4Map8Misses === 'undefined') {
                        P4Map8Misses = "0";
                    }







                    var messageData = {
                        "Event": "StatsPage",
                        "Data": {
                            "P1Map0Score": P1Map0Score,
                            "P1Map0Acc": P1Map0Acc,
                            "P1Map0Misses": P1Map0Misses,
                            "P1Map1Score": P1Map1Score,
                            "P1Map1Acc": P1Map1Acc,
                            "P1Map1Misses": P1Map1Misses,
                            "P1Map2Score": P1Map2Score,
                            "P1Map2Acc": P1Map2Acc,
                            "P1Map2Misses": P1Map2Misses,
                            "P1Map3Score": P1Map3Score,
                            "P1Map3Acc": P1Map3Acc,
                            "P1Map3Misses": P1Map3Misses,
                            "P1Map4Score": P1Map4Score,
                            "P1Map4Acc": P1Map4Acc,
                            "P1Map4Misses": P1Map4Misses,
                            "P1Map5Score": P1Map5Score,
                            "P1Map5Acc": P1Map5Acc,
                            "P1Map5Misses": P1Map5Misses,
                            "P1Map6Score": P1Map6Score,
                            "P1Map6Acc": P1Map6Acc,
                            "P1Map6Misses": P1Map6Misses,
                            "P1Map7Score": P1Map7Score,
                            "P1Map7Acc": P1Map7Acc,
                            "P1Map7Misses": P1Map7Misses,
                            "P1Map8Score": P1Map8Score,
                            "P1Map8Acc": P1Map8Acc,
                            "P1Map8Misses": P1Map8Misses,
                            "P2Map0Score": P2Map0Score,
                            "P2Map0Acc": P2Map0Acc,
                            "P2Map0Misses": P2Map0Misses,
                            "P2Map1Score": P2Map1Score,
                            "P2Map1Acc": P2Map1Acc,
                            "P2Map1Misses": P2Map1Misses,
                            "P2Map2Score": P2Map2Score,
                            "P2Map2Acc": P2Map2Acc,
                            "P2Map2Misses": P2Map2Misses,
                            "P2Map3Score": P2Map3Score,
                            "P2Map3Acc": P2Map3Acc,
                            "P2Map3Misses": P2Map3Misses,
                            "P2Map4Score": P2Map4Score,
                            "P2Map4Acc": P2Map4Acc,
                            "P2Map4Misses": P2Map4Misses,
                            "P2Map5Score": P2Map5Score,
                            "P2Map5Acc": P2Map5Acc,
                            "P2Map5Misses": P2Map5Misses,
                            "P2Map6Score": P2Map6Score,
                            "P2Map6Acc": P2Map6Acc,
                            "P2Map6Misses": P2Map6Misses,
                            "P2Map7Score": P2Map7Score,
                            "P2Map7Acc": P2Map7Acc,
                            "P2Map7Misses": P2Map7Misses,
                            "P2Map8Score": P2Map8Score,
                            "P2Map8Acc": P2Map8Acc,
                            "P2Map8Misses": P2Map8Misses,
                            "P3Map0Score": P3Map0Score,
                            "P3Map0Acc": P3Map0Acc,
                            "P3Map0Misses": P3Map0Misses,
                            "P3Map1Score": P3Map1Score,
                            "P3Map1Acc": P3Map1Acc,
                            "P3Map1Misses": P3Map1Misses,
                            "P3Map2Score": P3Map2Score,
                            "P3Map2Acc": P3Map2Acc,
                            "P3Map2Misses": P3Map2Misses,
                            "P3Map3Score": P3Map3Score,
                            "P3Map3Acc": P3Map3Acc,
                            "P3Map3Misses": P3Map3Misses,
                            "P3Map4Score": P3Map4Score,
                            "P3Map4Acc": P3Map4Acc,
                            "P3Map4Misses": P3Map4Misses,
                            "P3Map5Score": P3Map5Score,
                            "P3Map5Acc": P3Map5Acc,
                            "P3Map5Misses": P3Map5Misses,
                            "P3Map6Score": P3Map6Score,
                            "P3Map6Acc": P3Map6Acc,
                            "P3Map6Misses": P3Map6Misses,
                            "P3Map7Score": P3Map7Score,
                            "P3Map7Acc": P3Map7Acc,
                            "P3Map7Misses": P3Map7Misses,
                            "P3Map8Score": P3Map8Score,
                            "P3Map8Acc": P3Map8Acc,
                            "P3Map8Misses": P3Map8Misses,
                            "P4Map0Score": P4Map0Score,
                            "P4Map0Acc": P4Map0Acc,
                            "P4Map0Misses": P4Map0Misses,
                            "P4Map1Score": P4Map1Score,
                            "P4Map1Acc": P4Map1Acc,
                            "P4Map1Misses": P4Map1Misses,
                            "P4Map2Score": P4Map2Score,
                            "P4Map2Acc": P4Map2Acc,
                            "P4Map2Misses": P4Map2Misses,
                            "P4Map3Score": P4Map3Score,
                            "P4Map3Acc": P4Map3Acc,
                            "P4Map3Misses": P4Map3Misses,
                            "P4Map4Score": P4Map4Score,
                            "P4Map4Acc": P4Map4Acc,
                            "P4Map4Misses": P4Map4Misses,
                            "P4Map5Score": P4Map5Score,
                            "P4Map5Acc": P4Map5Acc,
                            "P4Map5Misses": P4Map5Misses,
                            "P4Map6Score": P4Map6Score,
                            "P4Map6Acc": P4Map6Acc,
                            "P4Map6Misses": P4Map6Misses,
                            "P4Map7Score": P4Map7Score,
                            "P4Map7Acc": P4Map7Acc,
                            "P4Map7Misses": P4Map7Misses,
                            "P4Map8Score": P4Map8Score,
                            "P4Map8Acc": P4Map8Acc,
                            "P4Map8Misses": P4Map8Misses,


                        }





                    }



                    var messageString = JSON.stringify(messageData);


                    console.log(messageString);
                    sockets.forEach(s => s.send(messageString));








                }, 5000);
            }


            //
            var messageData = {
                "Event": "MatchData",
                "Data": {
                    "P1": P1ScoreSaber,
                    "P2": P2ScoreSaber,
                    "P3": P3ScoreSaber,
                    "P4": P4ScoreSaber,
                    "Team1": data.Data.Team1,
                    "Team2": data.Data.Team2,
                    "Caster1": data.Data.Caster1,
                    "Caster2": data.Data.Caster2,
                    "BestOf": data.Data.BestOf,
                    "Team1Score": data.Data.Team1Score,
                    "Team2Score": data.Data.Team2Score,
                    "RoundInfo": data.Data.RoundInfo,
                    "MapPool": data.Data.MapPool,
                    "Map0": data.Data.Map0,
                    "Map1": data.Data.Map1,
                    "Map2": data.Data.Map2,
                    "Map3": data.Data.Map3,
                    "Map4": data.Data.Map4,
                    "Map5": data.Data.Map5,
                    "Map6": data.Data.Map6,
                    "Map7": data.Data.Map7,
                    "Map8": data.Data.Map8,
                    "DisplayedMaps": data.Data.DisplayedMaps,
                    "StatsUpdate": data.Data.StatsUpdate,
                    "NameOverride": data.Data.NameOverride,
                    "P1Name": data.Data.P1Name,
                    "P2Name": data.Data.P2Name,
                    "P3Name": data.Data.P3Name,
                    "P4Name": data.Data.P4Name,
                }
            }



            var messageString = JSON.stringify(messageData);

            console.log("Sending MatchData");
            console.log(messageString);
            sockets.forEach(s => s.send(messageString));




        }


        //        if (data.Event == "ControllerTeamData") {
        //            console.log("Recieved ControllerTeamData")
        //            console.log(data);
        //
        //            Team1 = data.Data.Team1;
        //            Team2 = data.Data.Team2;
        //
        //
        //            const team1Players = Object.keys(teamInfo[Team1]);
        //            console.log(team1Players);
        //            const team2Players = Object.keys(teamInfo[Team2]);
        //            console.log(team2Players);
        //
        //            var messageData = {
        //                "Event": "TeamPlayers",
        //                "Data": {
        //                    "Team1": team1Players,
        //                    "Team2": team2Players,
        //                }
        //            }
        //            var messageString = JSON.stringify(messageData);
        //
        //            console.log("Sending TeamPlayers");
        //            console.log(messageString);
        //            sockets.forEach(s => s.send(messageString));
        //        }



    });

    socket.on('close', function () {
        sockets = sockets.filter(s => s !== socket);
    });
});



// god i love men



console.log("Started.")


function mapPoolUpdate() {
    let data = {
"2": {
    "poolName": "Div. 2",
    "songs": [
        {
            "name": "CapSule",
            "songAuthor": "Calliope Mori x Hoshimachi Suisei",
            "levelAuthor": "Irish, Rusty & fqrb",
            "diff": "Hard",
            "key": "2561d"
        },
        {
            "name": "Feel So Gud",
            "songAuthor": "Mo Falk",
            "levelAuthor": "General Dumbass & Rexxz",
            "diff": "Expert+",
            "key": "29fab"
        },
        {
            "name": "Indoor Kei Nara Trackmaker",
            "songAuthor": "Yunomi & nicamoq",
            "levelAuthor": "Uragirimono",
            "diff": "Expert+",
            "key": "2eecb"
        },
        {
            "name": "Clattanoia",
            "songAuthor": "OxT",
            "levelAuthor": "Joshabi",
            "diff": "Expert+",
            "key": "2b21d"
        },
        {
            "name": "Readymade",
            "songAuthor": "Ado",
            "levelAuthor": "Chromia",
            "diff": "Expert+",
            "key": "309d2"
        },
        {
            "name": "Playing God",
            "songAuthor": "Polyphia",
            "levelAuthor": "harbgy",
            "diff": "Expert",
            "key": "309d2"
        },
        {
            "name": "Hank's Back",
            "songAuthor": "Lil Hank",
            "levelAuthor": "WalkingKat",
            "diff": "Expert+",
            "key": "2b2d1"
        }
    ]
},
"1": {
    "poolName": "Div. 1",
    "songs": [
        {
            "name": "Eye Candy",
            "songAuthor": "Masha Ray",
            "levelAuthor": "Nixie.Korten",
            "diff": "Hard",
            "key": "2ff04"
        },
        {
            "name": "RACER",
            "songAuthor": "ITZY",
            "levelAuthor": "simplymarvellous",
            "diff": "Expert+",
            "key": "28070"
        },
        {
            "name": "Storeulv 2016 (feat. Moberg)",
            "songAuthor": "Bek & Wallin",
            "levelAuthor": "Gabiel",
            "diff": "Expert+",
            "key": "309e1"
        },
        {
            "name": "Akkanbe (あっかんべ)",
            "songAuthor": "Nekomata Okayu",
            "levelAuthor": "Rusty & Nolanimations",
            "diff": "Expert+",
            "key": "2f2dc"
        },
        {
            "name": "Ragnarok",
            "songAuthor": "Gram vs Camellia",
            "levelAuthor": "Joshabi",
            "diff": "Expert",
            "key": "2d0b8"
        },
        {
            "name": "Slave to the Riff",
            "songAuthor": "Aether Realm",
            "levelAuthor": "Anti",
            "diff": "Expert+",
            "key": "26d3a"
        },
        {
            "name": "Clock Control (DJ Myosuke Remix)",
            "songAuthor": "Kobaryo",
            "levelAuthor": "cerret & Daan",
            "diff": "Expert+",
            "key": "304b9"
        }
    ]
}
}
            //console.log(data);
            // Do stuff here

            SongNoteCount = [];
            SongLeaderboardID = [];
            SongMaxScore = [];

            //console.log(MapPool);
            for (var i = 0; i < data[MapPool].songs.length; i++) {

                SongNoteCount.push(data[MapPool].songs[i].numNotes);
                SongLeaderboardID.push((data[MapPool].songs[i].ssLink).replace("https://scoresaber.com/leaderboard/", ""));
                SongMaxScore.push(calcMaxScore(SongNoteCount[i]));


            }
            console.log(SongNoteCount);
            console.log(SongLeaderboardID);
            console.log(SongMaxScore);


            mapCount = data[MapPool].songs.length;
            console.log(mapCount);

        }

function P1accFinder() {
    console.log(P1Name);
    if (mapCount >= 1) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[0]}/scores?page=1&search=${P1Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P1Map0Score = data.scores[0].baseScore;
                console.log(P1Map0Score + "/" + SongMaxScore[0]);
                P1Map0Acc = (P1Map0Score / SongMaxScore[0]);
                console.log(P1Map0Acc);
                P1Map0Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P1Map0Misses);
            }).catch(err => {
                console.log(err)
            })
    }

    if (mapCount >= 2) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[1]}/scores?page=1&search=${P1Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P1Map1Score = data.scores[0].baseScore;
                console.log(P1Map1Score + "/" + SongMaxScore[1]);
                P1Map1Acc = (P1Map1Score / SongMaxScore[1]);
                console.log(P1Map1Acc);
                P1Map1Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P1Map1Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 3) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[2]}/scores?page=1&search=${P1Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P1Map2Score = data.scores[0].baseScore;
                console.log(P1Map2Score + "/" + SongMaxScore[2]);
                P1Map2Acc = (P1Map2Score / SongMaxScore[2]);
                console.log(P1Map2Acc);
                P1Map2Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P1Map2Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 4) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[3]}/scores?page=1&search=${P1Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P1Map3Score = data.scores[0].baseScore;
                console.log(P1Map3Score + "/" + SongMaxScore[3]);
                P1Map3Acc = (P1Map3Score / SongMaxScore[3]);
                console.log(P1Map3Acc);
                P1Map3Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P1Map3Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 5) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[4]}/scores?page=1&search=${P1Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P1Map4Score = data.scores[0].baseScore;
                console.log(P1Map4Score + "/" + SongMaxScore[4]);
                P1Map4Acc = (P1Map4Score / SongMaxScore[4]);
                console.log(P1Map4Acc);
                P1Map4Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P1Map4Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 6) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[5]}/scores?page=1&search=${P1Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P1Map5Score = data.scores[0].baseScore;
                console.log(P1Map5Score + "/" + SongMaxScore[5]);
                P1Map5Acc = (P1Map5Score / SongMaxScore[5]);
                console.log(P1Map5Acc);
                P1Map5Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P1Map5Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 7) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[6]}/scores?page=1&search=${P1Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P1Map6Score = data.scores[0].baseScore;
                console.log(P1Map6Score + "/" + SongMaxScore[6]);
                P1Map6Acc = (P1Map6Score / SongMaxScore[6]);
                console.log(P1Map6Acc);
                P1Map6Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P1Map6Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 8) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[7]}/scores?page=1&search=${P1Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P1Map7Score = data.scores[0].baseScore;
                console.log(P1Map7Score + "/" + SongMaxScore[7]);
                P1Map7Acc = (P1Map7Score / SongMaxScore[7]);
                console.log(P1Map7Acc);
                P1Map7Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P1Map7Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 9) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[8]}/scores?page=1&search=${P1Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P1Map8Score = data.scores[0].baseScore;
                console.log(P1Map8Score + "/" + SongMaxScore[8]);
                P1Map8Acc = (P1Map8Score / SongMaxScore[8]);
                console.log(P1Map8Acc);
                P1Map8Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P1Map8Misses);
            }).catch(err => {
                console.log(err)
            })
    }



}

function P2accFinder() {
    console.log(P2Name);
    if (mapCount >= 1) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[0]}/scores?page=1&search=${P2Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P2Map0Score = data.scores[0].baseScore;
                console.log(P2Map0Score + "/" + SongMaxScore[0]);
                P2Map0Acc = (P2Map0Score / SongMaxScore[0]);
                console.log(P2Map0Acc);
                P2Map0Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P2Map0Misses);
            }).catch(err => {
                console.log(err)
            })
    }

    if (mapCount >= 2) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[1]}/scores?page=1&search=${P2Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P2Map1Score = data.scores[0].baseScore;
                console.log(P2Map1Score + "/" + SongMaxScore[1]);
                P2Map1Acc = (P2Map1Score / SongMaxScore[1]);
                console.log(P2Map1Acc);
                P2Map1Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P2Map1Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 3) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[2]}/scores?page=1&search=${P2Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P2Map2Score = data.scores[0].baseScore;
                console.log(P2Map2Score + "/" + SongMaxScore[2]);
                P2Map2Acc = (P2Map2Score / SongMaxScore[2]);
                console.log(P2Map2Acc);
                P2Map2Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P2Map2Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 4) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[3]}/scores?page=1&search=${P2Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P2Map3Score = data.scores[0].baseScore;
                console.log(P2Map3Score + "/" + SongMaxScore[3]);
                P2Map3Acc = (P2Map3Score / SongMaxScore[3]);
                console.log(P2Map3Acc);
                P2Map3Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P2Map3Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 5) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[4]}/scores?page=1&search=${P2Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P2Map4Score = data.scores[0].baseScore;
                console.log(P2Map4Score + "/" + SongMaxScore[4]);
                P2Map4Acc = (P2Map4Score / SongMaxScore[4]);
                console.log(P2Map4Acc);
                P2Map4Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P2Map4Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 6) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[5]}/scores?page=1&search=${P2Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P2Map5Score = data.scores[0].baseScore;
                console.log(P2Map5Score + "/" + SongMaxScore[5]);
                P2Map5Acc = (P2Map5Score / SongMaxScore[5]);
                console.log(P2Map5Acc);
                P2Map5Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P2Map5Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 7) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[6]}/scores?page=1&search=${P2Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P2Map6Score = data.scores[0].baseScore;
                console.log(P2Map6Score + "/" + SongMaxScore[6]);
                P2Map6Acc = (P2Map6Score / SongMaxScore[6]);
                console.log(P2Map6Acc);
                P2Map6Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P2Map6Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 8) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[7]}/scores?page=1&search=${P2Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P2Map7Score = data.scores[0].baseScore;
                console.log(P2Map7Score + "/" + SongMaxScore[7]);
                P2Map7Acc = (P2Map7Score / SongMaxScore[7]);
                console.log(P2Map7Acc);
                P2Map7Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P2Map7Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 9) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[8]}/scores?page=1&search=${P2Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P2Map8Score = data.scores[0].baseScore;
                console.log(P2Map8Score + "/" + SongMaxScore[8]);
                P2Map8Acc = (P2Map8Score / SongMaxScore[8]);
                console.log(P2Map8Acc);
                P2Map8Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P2Map8Misses);
            }).catch(err => {
                console.log(err)
            })
    }
}

function P3accFinder() {
    console.log(P3Name);
    if (mapCount >= 1) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[0]}/scores?page=1&search=${P3Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P3Map0Score = data.scores[0].baseScore;
                console.log(P3Map0Score);
                P3Map0Acc = (P3Map0Score / SongMaxScore[0]);
                console.log(P3Map0Acc);
                P3Map0Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P3Map0Misses);
            }).catch(err => {
                console.log(err)
            })
    }

    if (mapCount >= 2) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[1]}/scores?page=1&search=${P3Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P3Map1Score = data.scores[0].baseScore;
                console.log(P3Map1Score);
                P3Map1Acc = (P3Map1Score / SongMaxScore[1]);
                console.log(P3Map1Acc);
                P3Map1Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P3Map1Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 3) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[2]}/scores?page=1&search=${P3Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P3Map2Score = data.scores[0].baseScore;
                console.log(P3Map2Score);
                P3Map2Acc = (P3Map2Score / SongMaxScore[2]);
                console.log(P3Map2Acc);
                P3Map2Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P3Map2Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 4) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[3]}/scores?page=1&search=${P3Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P3Map3Score = data.scores[0].baseScore;
                console.log(P3Map3Score);
                P3Map3Acc = (P3Map3Score / SongMaxScore[3]);
                console.log(P3Map3Acc);
                P3Map3Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P3Map3Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 5) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[4]}/scores?page=1&search=${P3Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P3Map4Score = data.scores[0].baseScore;
                console.log(P3Map4Score);
                P3Map4Acc = (P3Map4Score / SongMaxScore[4]);
                console.log(P3Map4Acc);
                P3Map4Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P3Map4Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 6) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[5]}/scores?page=1&search=${P3Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P3Map5Score = data.scores[0].baseScore;
                console.log(P3Map5Score);
                P3Map5Acc = (P3Map5Score / SongMaxScore[5]);
                console.log(P3Map5Acc);
                P3Map5Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P3Map5Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 7) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[6]}/scores?page=1&search=${P3Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P3Map6Score = data.scores[0].baseScore;
                console.log(P3Map6Score);
                P3Map6Acc = (P3Map6Score / SongMaxScore[6]);
                console.log(P3Map6Acc);
                P3Map6Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P3Map6Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 8) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[7]}/scores?page=1&search=${P3Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P3Map7Score = data.scores[0].baseScore;
                console.log(P3Map7Score);
                P3Map7Acc = (P3Map7Score / SongMaxScore[7]);
                console.log(P3Map7Acc);
                P3Map7Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P3Map7Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 9) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[8]}/scores?page=1&search=${P3Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P3Map8Score = data.scores[0].baseScore;
                console.log(P3Map8Score);
                P3Map8Acc = (P3Map8Score / SongMaxScore[8]);
                console.log(P3Map8Acc);
                P3Map8Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P3Map8Misses);
            }).catch(err => {
                console.log(err)
            })
    }
}

function P4accFinder() {
    console.log(P4Name);
    if (mapCount >= 1) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[0]}/scores?page=1&search=${P4Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P4Map0Score = data.scores[0].baseScore;
                console.log(P4Map0Score);
                P4Map0Acc = (P4Map0Score / SongMaxScore[0]);
                console.log(P4Map0Acc);
                P4Map0Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P4Map0Misses);
            }).catch(err => {
                console.log(err)
            })
    }

    if (mapCount >= 2) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[1]}/scores?page=1&search=${P4Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);
                console.log("look here");
                P4Map1Score = data.scores[0].baseScore;
                console.log(P4Map1Score);
                P4Map1Acc = (P4Map1Score / SongMaxScore[1]);
                console.log(P4Map1Acc);
                P4Map1Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P4Map1Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 3) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[2]}/scores?page=1&search=${P4Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P4Map2Score = data.scores[0].baseScore;
                console.log(P4Map2Score);
                P4Map2Acc = (P4Map2Score / SongMaxScore[2]);
                console.log(P4Map2Acc);
                P4Map2Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P4Map2Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 4) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[3]}/scores?page=1&search=${P4Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P4Map3Score = data.scores[0].baseScore;
                console.log(P4Map3Score);
                P4Map3Acc = (P4Map3Score / SongMaxScore[3]);
                console.log(P4Map3Acc);
                P4Map3Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P4Map3Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 5) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[4]}/scores?page=1&search=${P4Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P4Map4Score = data.scores[0].baseScore;
                console.log(P4Map4Score);
                P4Map4Acc = (P4Map4Score / SongMaxScore[4]);
                console.log(P4Map4Acc);
                P4Map4Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P4Map4Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 6) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[5]}/scores?page=1&search=${P4Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P4Map5Score = data.scores[0].baseScore;
                console.log(P4Map5Score);
                P4Map5Acc = (P4Map5Score / SongMaxScore[5]);
                console.log(P4Map5Acc);
                P4Map5Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P4Map5Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 7) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[6]}/scores?page=1&search=${P4Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P4Map6Score = data.scores[0].baseScore;
                console.log(P4Map6Score);
                P4Map6Acc = (P4Map6Score / SongMaxScore[6]);
                console.log(P4Map6Acc);
                P4Map6Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P4Map6Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 8) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[7]}/scores?page=1&search=${P4Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P4Map7Score = data.scores[0].baseScore;
                console.log(P4Map7Score);
                P4Map7Acc = (P4Map7Score / SongMaxScore[7]);
                console.log(P4Map7Acc);
                P4Map7Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P4Map7Misses);
            }).catch(err => {
                console.log(err)
            })
    }


    if (mapCount >= 9) {
        fetch(`https://scoresaber.com/api/leaderboard/by-id/${SongLeaderboardID[8]}/scores?page=1&search=${P4Name}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);

                P4Map8Score = data.scores[0].baseScore;
                console.log(P4Map8Score);
                P4Map8Acc = (P4Map8Score / SongMaxScore[8]);
                console.log(P4Map8Acc);
                P4Map8Misses = data.scores[0].missedNotes + data.scores[0].badCuts;
                console.log(P4Map8Misses);
            }).catch(err => {
                console.log(err)
            })
    }
}

function scoreWipe() {

    P1Map0Score = "0";
    P1Map0Acc = "0";
    P1Map0Misses = "0";
    P1Map1Score = "0";
    P1Map1Acc = "0";
    P1Map1Misses = "0";
    P1Map2Score = "0";
    P1Map2Acc = "0";
    P1Map2Misses = "0";
    P1Map3Score = "0";
    P1Map3Acc = "0";
    P1Map3Misses = "0";
    P1Map4Score = "0";
    P1Map4Acc = "0";
    P1Map4Misses = "0";
    P1Map5Score = "0";
    P1Map5Acc = "0";
    P1Map5Misses = "0";
    P1Map6Score = "0";
    P1Map6Acc = "0";
    P1Map6Misses = "0";
    P1Map7Score = "0";
    P1Map7Acc = "0";
    P1Map7Misses = "0";
    P1Map8Score = "0";
    P1Map8Acc = "0";
    P1Map8Misses = "0";
    P2Map0Score = "0";
    P2Map0Acc = "0";
    P2Map0Misses = "0";
    P2Map1Score = "0";
    P2Map1Acc = "0";
    P2Map1Misses = "0";
    P2Map2Score = "0";
    P2Map2Acc = "0";
    P2Map2Misses = "0";
    P2Map3Score = "0";
    P2Map3Acc = "0";
    P2Map3Misses = "0";
    P2Map4Score = "0";
    P2Map4Acc = "0";
    P2Map4Misses = "0";
    P2Map5Score = "0";
    P2Map5Acc = "0";
    P2Map5Misses = "0";
    P2Map6Score = "0";
    P2Map6Acc = "0";
    P2Map6Misses = "0";
    P2Map7Score = "0";
    P2Map7Acc = "0";
    P2Map7Misses = "0";
    P2Map8Score = "0";
    P2Map8Acc = "0";
    P2Map8Misses = "0";
    P3Map0Score = "0";
    P3Map0Acc = "0";
    P3Map0Misses = "0";
    P3Map1Score = "0";
    P3Map1Acc = "0";
    P3Map1Misses = "0";
    P3Map2Score = "0";
    P3Map2Acc = "0";
    P3Map2Misses = "0";
    P3Map3Score = "0";
    P3Map3Acc = "0";
    P3Map3Misses = "0";
    P3Map4Score = "0";
    P3Map4Acc = "0";
    P3Map4Misses = "0";
    P3Map5Score = "0";
    P3Map5Acc = "0";
    P3Map5Misses = "0";
    P3Map6Score = "0";
    P3Map6Acc = "0";
    P3Map6Misses = "0";
    P3Map7Score = "0";
    P3Map7Acc = "0";
    P3Map7Misses = "0";
    P3Map8Score = "0";
    P3Map8Acc = "0";
    P3Map8Misses = "0";
    P4Map0Score = "0";
    P4Map0Acc = "0";
    P4Map0Misses = "0";
    P4Map1Score = "0";
    P4Map1Acc = "0";
    P4Map1Misses = "0";
    P4Map2Score = "0";
    P4Map2Acc = "0";
    P4Map2Misses = "0";
    P4Map3Score = "0";
    P4Map3Acc = "0";
    P4Map3Misses = "0";
    P4Map4Score = "0";
    P4Map4Acc = "0";
    P4Map4Misses = "0";
    P4Map5Score = "0";
    P4Map5Acc = "0";
    P4Map5Misses = "0";
    P4Map6Score = "0";
    P4Map6Acc = "0";
    P4Map6Misses = "0";
    P4Map7Score = "0";
    P4Map7Acc = "0";
    P4Map7Misses = "0";
    P4Map8Score = "0";
    P4Map8Acc = "0";
    P4Map8Misses = "0";
    console.log("Scores wiped");

}



// Holy crap lois its the list of every single fucking player in the league

// here we go


var teamInfo = {

    "Beatcats": {
        "DoctusPi": {
            "SSID": "76561198103113271",
            "channelName": "avatreides"
        },
        "Punitive": {
            "SSID": "1723118904401557",
            "channelName": "punitiverph"
        },
        "SuperStache9709": {
            "SSID": "76561198096152393",
            "channelName": "superstache9709"
        },
        "Egg Time": {
            "SSID": "76561198117409561",
            "channelName": "egg_time_"
        },
    },
    "IlliniOrange": {
        "Benjo": {
            "SSID": "Benjo",
            "channelName": "BoscoStixs"
        },
        "Nelson16": {
            "SSID": "2389030471126836",
            "channelName": ""
        },
        "Renrut1304": {
            "SSID": "76561198327977222",
            "channelName": ""
        },
        "InProgress": {
            "SSID": "76561198180733791",
            "channelName": "inpr0gr3ss"
        },
        "BoscoStixs": {
            "SSID": "76561198346397884",
            "channelName": "BoscoStixs"
        },
    },

    "IlliniD1": {
        "The_Computerizer": {
            "SSID": "The_Computerizer",
            "channelName": "the_computerizer"
        },

    },

    "ucberkeley": {
        "vcninc": {
            "SSID": "76561198082405957",
            "channelName": "vcninc"
        },
        "Sc2ad": {
            "SSID": "Sc2ad",
            "channelName": "sc2ad"
        },
        "100 gecs": {
            "SSID": "76561198186628623",
            "channelName": "megabeni"
        },
    },


    "Gauchos": {
        "cfelton02": {
            "SSID": "4765259963499245",
            "channelName": "cfelton02"
        },
    },
    "UAF": {
        "Fryoxes": {
            "SSID": "76561198093733509",
            "channelName": ""
        },
        "Replacement": {
            "SSID": "Replacement",
            "channelName": ""
        },
        "ArcticSpider": {
            "SSID": "ArcticSpider",
            "channelName": ""
        },
        "Vivcos": {
            "SSID": "Vivcos",
            "channelName": ""
        },
        "killpopvixen": {
            "SSID": "76561198075543723",
            "channelName": "UAFesports"
        },
    },
    "CSUF": {
        "RobNHood": {
            "SSID": "76561198875564214",
            "channelName": "robnhood2000"
        },
    },
    "OCE": {
        "BoneBot": {
            "SSID": "2890698244283056",
            "channelName": "b0nebot"
        },
        "Shadowdark": {
            "SSID": "76561198170118605",
            "channelName": "shadowwdark"
        },
        "frostbit912": {
            "SSID": "76561198100038676",
            "channelName": ""
        },
        "HeroOfTime": {
            "SSID": "76561198256832206",
            "channelName": "herooftime789"
        },
        "fireburningblue": {
            "SSID": "76561198086274067",
            "channelName": "fireburningblue"
        },
    },
    "ChargerBlue": {
        "Arentavian": {
            "SSID": "Arentavian",
            "channelName": "arentavian"
        },
        "Nocturnal Ghost": {
            "SSID": "Nocturnal Ghost",
            "channelName": ""
        },
        "JeremiahHR133": {
            "SSID": "76561198376675778",
            "channelName": "jeremiahhr"
        },
        "Wheres_my_pants": {
            "SSID": "Wheres_my_pants",
            "channelName": ""
        },
    },
    "UCDavis": {
        "Ecal": {
            "SSID": "76561198122900561",
            "channelName": "ecaliburmoon"
        },
        "jeprose": {
            "SSID": "76561198252901294",
            "channelName": "jeprose"
        },
        "tomwick707": {
            "SSID": "76561198147938990",
            "channelName": ""
        },
        "timmie": {
            "SSID": "76561198367036671",
            "channelName": "timmieoc"
        },
    },
    "SUNY": {
        "$MJustin": {
            "SSID": "76561198255621372",
            "channelName": "smjustin"
        },
    },
    "UCEsports": {
        "MakoCho": {
            "SSID": "76561198308893404",
            "channelName": "makocho_"
        },
        "Lyrunis": {
            "SSID": "76561198187120155",
            "channelName": "Lyrunis"
        },
    },
    "Stevens": {
        "Astrais": {
            "SSID": "2092178757563532",
            "channelName": "Astrais_"
        },
    },
    "TNTech": {
        "TheKingOfNowhere": {
            "SSID": "TheKingOfNowhere",
            "channelName": "thekingof_nowhere"
        },
        "D W": {
            "SSID": "Ð W",
            "channelName": ""
        },
        "Sky": {
            "SSID": "Sky",
            "channelName": "dausky"
        },
    },
    "Longhorns": {
        "Bootleg_Cars": {
            "SSID": "76561198048182406",
            "channelName": "bootlegcars"
        },
        "Xmpo": {
            "SSID": "76561198212831695",
            "channelName": "xmpo"
        },
        "vbob100": {
            "SSID": "76561198172264582",
            "channelName": "vbob1000"
        },
    },
    "GeorgiaTech": {
        "JahSpank": {
            "SSID": "2788507844505057",
            "channelName": "jahspank"
        },
        "AKSKL": {
            "SSID": "76561198158077485",
            "channelName": "akskl"
        },
        "Rovio": {
            "SSID": "76561198066978261",
            "channelName": "roviononincorporated"
        },
        "Elioc997472": {
            "SSID": "Elioc997472",
            "channelName": "Elioc997472"
        },
        "energy999": {
            "SSID": "energy999",
            "channelName": "999energy999"
        },
    },
    "OntarioTech": {
        "EJ": {
            "SSID": "76561198321316302",
            "channelName": "ej_ca"
        },
    },
    "DePaul": {
        "HankDeTank": {
            "SSID": "76561198085563627",
            "channelName": ""
        },
        "johnathini": {
            "SSID": "johnathini",
            "channelName": "johnathini1"
        },
        "Jilly70": {
            "SSID": "Jilly70",
            "channelName": "vexfulfolly"
        },
    },
    "Akron": {
        "Civil Wrongz": {
            "SSID": "76561198852398613",
            "channelName": "civil_wrongz"
        },
        "Yrene": {
            "SSID": "76561198139728158",
            "channelName": "yr3ne"
        },
        "Jax": {
            "SSID": "76561198121632304",
            "channelName": ""
        },
    },
    "Miami": {
        "SlimSchmidty": {
            "SSID": "76561198117306274",
            "channelName": "miamivr"
        },
        "ChiefHookerRed": {
            "SSID": "3268941496561526",
            "channelName": ""
        },
        "t1tans5": {
            "SSID": "76561198076536340",
            "channelName": ""
        },
    },
    "SJSU": {
        "Camsqu": {
            "SSID": "76561198067531725",
            "channelName": "camsqu"
        },
        "Ferret": {
            "SSID": "76561198796337172",
            "channelName": "alphablaze11"
        },
        "Ulmnh": {
            "SSID": "76561198096021868",
            "channelName": "ulmnh"
        },
        "Bladeskillz": {
            "SSID": "76561198166522772",
            "channelName": "bladeskillz"
        },
    },
    "Crimson": {
        "Skyward": {
            "SSID": "76561198260517130",
            "channelName": "skywardow"
        },
    },
    "CrimsonA": {
        "Amor": {
            "SSID": "Amor",
            "channelName": ""
        },
        "pangolin": {
            "SSID": "76561198997234072",
            "channelName": ""
        },
        "Nightly": {
            "SSID": "76561198164519068",
            "channelName": ""
        },
        "Sojx": {
            "SSID": "76561198317479231",
            "channelName": ""
        },
        "SebassTehFish": {
            "SSID": "76561198113737580",
            "channelName": ""
        },
    },
    "CrimsonB": {
        "Harrison": {
            "SSID": "76561198121340513",
            "channelName": ""
        },
        "DogsOnStage": {
            "SSID": "76561198127395609",
            "channelName": ""
        },
        "nic": {
            "SSID": "76561198092291978",
            "channelName": ""
        },
        "Fanfrantic": {
            "SSID": "Fanfrantic",
            "channelName": ""
        },
    },
    "CalA": {
        "Lavender": {
            "SSID": "Lavender",
            "channelName": ""
        },
        "bunnybear": {
            "SSID": "bunnybear",
            "channelName": ""
        },
        "Nate Young": {
            "SSID": "Nate Young",
            "channelName": ""
        },
        "Skaldaspillir": {
            "SSID": "Skaldaspillir",
            "channelName": ""
        },
    },
    "CalB": {
        "sumguy002": {
            "SSID": "sumguy002",
            "channelName": ""
        },
        "Kaosu": {
            "SSID": "76561198127395609",
            "channelName": ""
        },
        "Legend999991": {
            "SSID": "Legend999991",
            "channelName": ""
        },
    },
    "CalC": {
        "glummie": {
            "SSID": "76561198351010444",
            "channelName": "theglumone"
        },
        "ava_o7": {
            "SSID": "ava_o7",
            "channelName": "ava_o7"
        },
        "YoniDaMan": {
            "SSID": "3357739814345872",
            "channelName": "theglumone"
        },
    },
    "Nolan": {
        "Nolanimations": {
            "SSID": "76561198082797048",
            "channelName": "nolanimations"
        },
    },
    "UTDallas": {
        "ShadowPixel27": {
            "SSID": "76561198245321138",
            "channelName": "shadowpixel27"
        },
    },
    "UWaterloo": {
        "Stud3nt_Acclete": {
            "SSID": "76561198965353139",
            "channelName": "Stud3nt_4thlete"
        },
        "Rivershrimp": {
            "SSID": "76561198857586691",
            "channelName": ""
        },
        "Kiwi": {
            "SSID": "Kiwi",
            "channelName": ""
        },
        "Quigomink": {
            "SSID": "76561199180621175",
            "channelName": ""
        },
        "Pinaspi": {
            "SSID": "Pinaspi",
            "channelName": ""
        },
    }





}



//OBS SHIT WEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

//const OBSWebSocket = require('obs-websocket-js');
//const obs = new OBSWebSocket();
//OBSconnect();
//
//function OBSconnect() {
//    obs.connect({
//            address: 'localhost:4444',
//            password: 'ILoveMen####'
//        })
//        .then(() => {
//            console.log(`Connected to OBS!`);
//
//            return obs.send('GetSceneList');
//        })
//        .then(data => {
//            console.log(`${data.scenes.length} Available Scenes!`);
//        })
//        .catch(err => { // Promise convention dicates you have a catch on every chain.
//            console.log(err);
//            console.log("Reconnecting to OBS");
//            setTimeout(function () {
//                OBSconnect();
//            }, 1000);
//        });
//
//}

function sourceUpdate() {

    if (P1 != "") {
        if (typeof teamInfo[Team1][P1].channelName === undefined) {
            teamInfo[Team1][P1].channelName = "unknown";
        }
    }
    if (P2 != "") {
        if (typeof teamInfo[Team2][P2].channelName === undefined) {
            teamInfo[Team2][P2].channelName = "unknown";
        }
    }
    if (P3 != "") {
        if (typeof teamInfo[Team1][P3].channelName === undefined) {
            teamInfo[Team1][P3].channelName = "unknown";
        }
    }
    if (P4 != "") {
        if (typeof teamInfo[Team2][P4].channelName === undefined) {
            teamInfo[Team2][P4].channelName = "unknown";
        }
    }


    if (P1 != "") {
        sourceSettings = {
            "reroute_audio": true,
            "url": `https://player.twitch.tv/?channel=${teamInfo[Team1][P1].channelName}&enableExtensions=false&muted=false&parent=twitch.tv&player=popout&volume=1`,
        };

        obs.send('SetSourceSettings', {
            "sourceName": `P1 Twitch (1v1)`,
            "sourceSettings": sourceSettings,
        }).catch(err => {
            console.log(err)
        });
        obs.send('SetSourceSettings', {
            "sourceName": `P1 Twitch (2v2)`,
            "sourceSettings": sourceSettings,
        }).catch(err => {
            console.log(err)
        });
    }
    if (P2 != "") {
        sourceSettings = {
            "reroute_audio": true,
            "url": `https://player.twitch.tv/?channel=${teamInfo[Team2][P2].channelName}&enableExtensions=false&muted=false&parent=twitch.tv&player=popout&volume=1`,
        };

        obs.send('SetSourceSettings', {
            "sourceName": `P2 Twitch (1v1)`,
            "sourceSettings": sourceSettings,
        }).catch(err => {
            console.log(err)
        });
        obs.send('SetSourceSettings', {
            "sourceName": `P2 Twitch (2v2)`,
            "sourceSettings": sourceSettings,
        });
    }
    if (P3 != "") {
        sourceSettings = {
            "reroute_audio": true,
            "url": `https://player.twitch.tv/?channel=${teamInfo[Team1][P3].channelName}&enableExtensions=false&muted=false&parent=twitch.tv&player=popout&volume=1`,
        };

        obs.send('SetSourceSettings', {
            "sourceName": `P3 Twitch (1v1)`,
            "sourceSettings": sourceSettings,
        }).catch(err => {
            console.log(err)
        });
        obs.send('SetSourceSettings', {
            "sourceName": `P3 Twitch (2v2)`,
            "sourceSettings": sourceSettings,
        }).catch(err => {
            console.log(err)
        });
    }
    if (P4 != "") {
        sourceSettings = {
            "reroute_audio": true,
            "url": `https://player.twitch.tv/?channel=${teamInfo[Team2][P4].channelName}&enableExtensions=false&muted=false&parent=twitch.tv&player=popout&volume=1`,
        };

        obs.send('SetSourceSettings', {
            "sourceName": `P4 Twitch (1v1)`,
            "sourceSettings": sourceSettings,
        }).catch(err => {
            console.log(err)
        });
        obs.send('SetSourceSettings', {
            "sourceName": `P4 Twitch (2v2)`,
            "sourceSettings": sourceSettings,
        }).catch(err => {
            console.log(err)
        });

    }
}


function statsUpdate() {


    setTimeout(function () {
        scoreWipe();
        console.log(P1Name);
        console.log(P1ScoreSaber);
        console.log(P2Name);
        console.log(P2ScoreSaber);
        console.log(P3Name);
        console.log(P3ScoreSaber);
        console.log(P4Name);
        console.log(P4ScoreSaber);

        if (/^\d/.test(P1ScoreSaber) == true) {

            console.log("P1 Scoresaber Located")
            P1accFinder();

        }


        if (/^\d/.test(P2ScoreSaber) == true) {

            console.log("P2 Scoresaber Located")
            P2accFinder();

        }
        if (P3ScoreSaber != "") {

            if (/^\d/.test(P3ScoreSaber) == true) {

                console.log("P3 Scoresaber Located")
                P3accFinder();

            }



        }
        if (P4ScoreSaber != "") {
            if (/^\d/.test(P4ScoreSaber) == true) {

                console.log("P4 Scoresaber Located")
                P4accFinder();

            }
        }
    }, 3000);
    setTimeout(function () {

        if (typeof P1Map0Score === 'undefined') {
            P1Map0Score = "0";
        }
        if (typeof P1Map0Acc === 'undefined') {
            P1Map0SAcc = "0";
        }
        if (typeof P1Map0Misses === 'undefined') {
            P1Map0Misses = "0";
        }
        if (typeof P1Map1Score === 'undefined') {
            P1Map1Score = "0";
        }
        if (typeof P1Map1Acc === 'undefined') {
            P1Map1Acc = "0";
        }
        if (typeof P1Map1Misses === 'undefined') {
            P1Map1Misses = "0";
        }
        if (typeof P1Map2Score === 'undefined') {
            P1Map2Score = "0";
        }
        if (typeof P1Map2Acc === 'undefined') {
            P1Map2Acc = "0";
        }
        if (typeof P1Map2Misses === 'undefined') {
            P1Map2Misses = "0";
        }
        if (typeof P1Map3Score === 'undefined') {
            P1Map3Score = "0";
        }
        if (typeof P1Map3Acc === 'undefined') {
            P1Map3Acc = "0";
        }
        if (typeof P1Map3Misses === 'undefined') {
            P1Map3Misses = "0";
        }
        if (typeof P1Map4Score === 'undefined') {
            P1Map4Score = "0";
        }
        if (typeof P1Map4Acc === 'undefined') {
            P1Map4Acc = "0";
        }
        if (typeof P1Map4Misses === 'undefined') {
            P1Map4Misses = "0";
        }
        if (typeof P1Map5Score === 'undefined') {
            P1Map5Score = "0";
        }
        if (typeof P1Map5Acc === 'undefined') {
            P1Map5Acc = "0";
        }
        if (typeof P1Map5Misses === 'undefined') {
            P1Map5Misses = "0";
        }
        if (typeof P1Map6Score === 'undefined') {
            P1Map6Score = "0";
        }
        if (typeof P1Map6Acc === 'undefined') {
            P1Map6Acc = "0";
        }
        if (typeof P1Map6Misses === 'undefined') {
            P1Map6Misses = "0";
        }
        if (typeof P1Map7Score === 'undefined') {
            P1Map7Score = "0";
        }
        if (typeof P1Map7Acc === 'undefined') {
            P1Map7Acc = "0";
        }
        if (typeof P1Map7Misses === 'undefined') {
            P1Map7Misses = "0";
        }
        if (typeof P1Map8Score === 'undefined') {
            P1Map8Score = "0";
        }
        if (typeof P1Map8Acc === 'undefined') {
            P1Map8Acc = "0";
        }
        if (typeof P1Map8Misses === 'undefined') {
            P1Map8Misses = "0";
        }
        if (typeof P2Map0Acc === 'undefined') {
            P2Map0Score = "0";
        }
        if (typeof P2Map0Misses === 'undefined') {
            P2Map0Misses = "0";
        }
        if (typeof P2Map1Score === 'undefined') {
            P2Map1Score = "0";
        }
        if (typeof P2Map1Acc === 'undefined') {
            P2Map1Acc = "0";
        }
        if (typeof P2Map1Misses === 'undefined') {
            P2Map1Misses = "0";
        }
        if (typeof P2Map2Score === 'undefined') {
            P2Map2Score = "0";
        }
        if (typeof P2Map2Acc === 'undefined') {
            P2Map2Acc = "0";
        }
        if (typeof P2Map2Misses === 'undefined') {
            P2Map2Misses = "0";
        }
        if (typeof P2Map3Score === 'undefined') {
            P2Map3Score = "0";
        }
        if (typeof P2Map3Acc === 'undefined') {
            P2Map3Acc = "0";
        }
        if (typeof P2Map3Misses === 'undefined') {
            P2Map3Misses = "0";
        }
        if (typeof P2Map4Score === 'undefined') {
            P2Map4Score = "0";
        }
        if (typeof P2Map4Acc === 'undefined') {
            P2Map4Acc = "0";
        }
        if (typeof P2Map4Misses === 'undefined') {
            P2Map4Misses = "0";
        }
        if (typeof P2Map5Score === 'undefined') {
            P2Map5Score = "0";
        }
        if (typeof P2Map5Acc === 'undefined') {
            P2Map5Acc = "0";
        }
        if (typeof P2Map5Misses === 'undefined') {
            P2Map5Misses = "0";
        }
        if (typeof P2Map6Score === 'undefined') {
            P2Map6Score = "0";
        }
        if (typeof P2Map6Acc === 'undefined') {
            P2Map6Acc = "0";
        }
        if (typeof P2Map6Misses === 'undefined') {
            P2Map6Misses = "0";
        }
        if (typeof P2Map7Score === 'undefined') {
            P2Map7Score = "0";
        }
        if (typeof P2Map7Acc === 'undefined') {
            P2Map7Acc = "0";
        }
        if (typeof P2Map7Misses === 'undefined') {
            P2Map7Misses = "0";
        }
        if (typeof P2Map8Score === 'undefined') {
            P2Map8Score = "0";
        }
        if (typeof P2Map8Acc === 'undefined') {
            P2Map8Acc = "0";
        }
        if (typeof P2Map8Misses === 'undefined') {
            P2Map8Misses = "0";
        }
        if (typeof P3Map0Acc === 'undefined') {
            P3Map0Score = "0";
        }
        if (typeof P3Map0Misses === 'undefined') {
            P3Map0Misses = "0";
        }
        if (typeof P3Map1Score === 'undefined') {
            P3Map1Score = "0";
        }
        if (typeof P3Map1Acc === 'undefined') {
            P3Map1Acc = "0";
        }
        if (typeof P3Map1Misses === 'undefined') {
            P3Map1Misses = "0";
        }
        if (typeof P3Map2Score === 'undefined') {
            P3Map2Score = "0";
        }
        if (typeof P3Map2Acc === 'undefined') {
            P3Map2Acc = "0";
        }
        if (typeof P3Map2Misses === 'undefined') {
            P3Map2Misses = "0";
        }
        if (typeof P3Map3Score === 'undefined') {
            P3Map3Score = "0";
        }
        if (typeof P3Map3Acc === 'undefined') {
            P3Map3Acc = "0";
        }
        if (typeof P3Map3Misses === 'undefined') {
            P3Map3Misses = "0";
        }
        if (typeof P3Map4Score === 'undefined') {
            P3Map4Score = "0";
        }
        if (typeof P3Map4Acc === 'undefined') {
            P3Map4Acc = "0";
        }
        if (typeof P3Map4Misses === 'undefined') {
            P3Map4Misses = "0";
        }
        if (typeof P3Map5Score === 'undefined') {
            P3Map5Score = "0";
        }
        if (typeof P3Map5Acc === 'undefined') {
            P3Map5Acc = "0";
        }
        if (typeof P3Map5Misses === 'undefined') {
            P3Map5Misses = "0";
        }
        if (typeof P3Map6Score === 'undefined') {
            P3Map6Score = "0";
        }
        if (typeof P3Map6Acc === 'undefined') {
            P3Map6Acc = "0";
        }
        if (typeof P3Map6Misses === 'undefined') {
            P3Map6Misses = "0";
        }
        if (typeof P3Map7Score === 'undefined') {
            P3Map7Score = "0";
        }
        if (typeof P3Map7Acc === 'undefined') {
            P3Map7Acc = "0";
        }
        if (typeof P3Map7Misses === 'undefined') {
            P3Map7Misses = "0";
        }
        if (typeof P3Map8Score === 'undefined') {
            P3Map8Score = "0";
        }
        if (typeof P3Map8Acc === 'undefined') {
            P3Map8Acc = "0";
        }
        if (typeof P3Map8Misses === 'undefined') {
            P3Map8Misses = "0";
        }
        if (typeof P4Map0Acc === 'undefined') {
            P4Map0Score = "0";
        }
        if (typeof P4Map0Misses === 'undefined') {
            P4Map0Misses = "0";
        }
        if (typeof P4Map1Score === 'undefined') {
            P4Map1Score = "0";
        }
        if (typeof P4Map1Acc === 'undefined') {
            P4Map1Acc = "0";
        }
        if (typeof P4Map1Misses === 'undefined') {
            P4Map1Misses = "0";
        }
        if (typeof P4Map2Score === 'undefined') {
            P4Map2Score = "0";
        }
        if (typeof P4Map2Acc === 'undefined') {
            P4Map2Acc = "0";
        }
        if (typeof P4Map2Misses === 'undefined') {
            P4Map2Misses = "0";
        }
        if (typeof P4Map3Score === 'undefined') {
            P4Map3Score = "0";
        }
        if (typeof P4Map3Acc === 'undefined') {
            P4Map3Acc = "0";
        }
        if (typeof P4Map3Misses === 'undefined') {
            P4Map3Misses = "0";
        }
        if (typeof P4Map4Score === 'undefined') {
            P4Map4Score = "0";
        }
        if (typeof P4Map4Acc === 'undefined') {
            P4Map4Acc = "0";
        }
        if (typeof P4Map4Misses === 'undefined') {
            P4Map4Misses = "0";
        }
        if (typeof P4Map5Score === 'undefined') {
            P4Map5Score = "0";
        }
        if (typeof P4Map5Acc === 'undefined') {
            P4Map5Acc = "0";
        }
        if (typeof P4Map5Misses === 'undefined') {
            P4Map5Misses = "0";
        }
        if (typeof P4Map6Score === 'undefined') {
            P4Map6Score = "0";
        }
        if (typeof P4Map6Acc === 'undefined') {
            P4Map6Acc = "0";
        }
        if (typeof P4Map6Misses === 'undefined') {
            P4Map6Misses = "0";
        }
        if (typeof P4Map7Score === 'undefined') {
            P4Map7Score = "0";
        }
        if (typeof P4Map7Acc === 'undefined') {
            P4Map7Acc = "0";
        }
        if (typeof P4Map7Misses === 'undefined') {
            P4Map7Misses = "0";
        }
        if (typeof P4Map8Score === 'undefined') {
            P4Map8Score = "0";
        }
        if (typeof P4Map8Acc === 'undefined') {
            P4Map8Acc = "0";
        }
        if (typeof P4Map8Misses === 'undefined') {
            P4Map8Misses = "0";
        }







        var messageData = {
            "Event": "StatsPage",
            "Data": {
                "P1Map0Score": P1Map0Score,
                "P1Map0Acc": P1Map0Acc,
                "P1Map0Misses": P1Map0Misses,
                "P1Map1Score": P1Map1Score,
                "P1Map1Acc": P1Map1Acc,
                "P1Map1Misses": P1Map1Misses,
                "P1Map2Score": P1Map2Score,
                "P1Map2Acc": P1Map2Acc,
                "P1Map2Misses": P1Map2Misses,
                "P1Map3Score": P1Map3Score,
                "P1Map3Acc": P1Map3Acc,
                "P1Map3Misses": P1Map3Misses,
                "P1Map4Score": P1Map4Score,
                "P1Map4Acc": P1Map4Acc,
                "P1Map4Misses": P1Map4Misses,
                "P1Map5Score": P1Map5Score,
                "P1Map5Acc": P1Map5Acc,
                "P1Map5Misses": P1Map5Misses,
                "P1Map6Score": P1Map6Score,
                "P1Map6Acc": P1Map6Acc,
                "P1Map6Misses": P1Map6Misses,
                "P1Map7Score": P1Map7Score,
                "P1Map7Acc": P1Map7Acc,
                "P1Map7Misses": P1Map7Misses,
                "P1Map8Score": P1Map8Score,
                "P1Map8Acc": P1Map8Acc,
                "P1Map8Misses": P1Map8Misses,
                "P2Map0Score": P2Map0Score,
                "P2Map0Acc": P2Map0Acc,
                "P2Map0Misses": P2Map0Misses,
                "P2Map1Score": P2Map1Score,
                "P2Map1Acc": P2Map1Acc,
                "P2Map1Misses": P2Map1Misses,
                "P2Map2Score": P2Map2Score,
                "P2Map2Acc": P2Map2Acc,
                "P2Map2Misses": P2Map2Misses,
                "P2Map3Score": P2Map3Score,
                "P2Map3Acc": P2Map3Acc,
                "P2Map3Misses": P2Map3Misses,
                "P2Map4Score": P2Map4Score,
                "P2Map4Acc": P2Map4Acc,
                "P2Map4Misses": P2Map4Misses,
                "P2Map5Score": P2Map5Score,
                "P2Map5Acc": P2Map5Acc,
                "P2Map5Misses": P2Map5Misses,
                "P2Map6Score": P2Map6Score,
                "P2Map6Acc": P2Map6Acc,
                "P2Map6Misses": P2Map6Misses,
                "P2Map7Score": P2Map7Score,
                "P2Map7Acc": P2Map7Acc,
                "P2Map7Misses": P2Map7Misses,
                "P2Map8Score": P2Map8Score,
                "P2Map8Acc": P2Map8Acc,
                "P2Map8Misses": P2Map8Misses,
                "P3Map0Score": P3Map0Score,
                "P3Map0Acc": P3Map0Acc,
                "P3Map0Misses": P3Map0Misses,
                "P3Map1Score": P3Map1Score,
                "P3Map1Acc": P3Map1Acc,
                "P3Map1Misses": P3Map1Misses,
                "P3Map2Score": P3Map2Score,
                "P3Map2Acc": P3Map2Acc,
                "P3Map2Misses": P3Map2Misses,
                "P3Map3Score": P3Map3Score,
                "P3Map3Acc": P3Map3Acc,
                "P3Map3Misses": P3Map3Misses,
                "P3Map4Score": P3Map4Score,
                "P3Map4Acc": P3Map4Acc,
                "P3Map4Misses": P3Map4Misses,
                "P3Map5Score": P3Map5Score,
                "P3Map5Acc": P3Map5Acc,
                "P3Map5Misses": P3Map5Misses,
                "P3Map6Score": P3Map6Score,
                "P3Map6Acc": P3Map6Acc,
                "P3Map6Misses": P3Map6Misses,
                "P3Map7Score": P3Map7Score,
                "P3Map7Acc": P3Map7Acc,
                "P3Map7Misses": P3Map7Misses,
                "P3Map8Score": P3Map8Score,
                "P3Map8Acc": P3Map8Acc,
                "P3Map8Misses": P3Map8Misses,
                "P4Map0Score": P4Map0Score,
                "P4Map0Acc": P4Map0Acc,
                "P4Map0Misses": P4Map0Misses,
                "P4Map1Score": P4Map1Score,
                "P4Map1Acc": P4Map1Acc,
                "P4Map1Misses": P4Map1Misses,
                "P4Map2Score": P4Map2Score,
                "P4Map2Acc": P4Map2Acc,
                "P4Map2Misses": P4Map2Misses,
                "P4Map3Score": P4Map3Score,
                "P4Map3Acc": P4Map3Acc,
                "P4Map3Misses": P4Map3Misses,
                "P4Map4Score": P4Map4Score,
                "P4Map4Acc": P4Map4Acc,
                "P4Map4Misses": P4Map4Misses,
                "P4Map5Score": P4Map5Score,
                "P4Map5Acc": P4Map5Acc,
                "P4Map5Misses": P4Map5Misses,
                "P4Map6Score": P4Map6Score,
                "P4Map6Acc": P4Map6Acc,
                "P4Map6Misses": P4Map6Misses,
                "P4Map7Score": P4Map7Score,
                "P4Map7Acc": P4Map7Acc,
                "P4Map7Misses": P4Map7Misses,
                "P4Map8Score": P4Map8Score,
                "P4Map8Acc": P4Map8Acc,
                "P4Map8Misses": P4Map8Misses,


            }





        }



        var messageString = JSON.stringify(messageData);


        console.log(messageString);
        sockets.forEach(s => s.send(messageString));








    }, 5000);
}