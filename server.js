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


        var P1ScoreSaber = '';
        var P2ScoreSaber = '';
        var P3ScoreSaber = '';
        var P4ScoreSaber = '';

            

        







        if (data.Event == "MatchData") {
            P1ScoreSaber = data.Data.P1;
            P2ScoreSaber = data.Data.P2;
            P3ScoreSaber = data.Data.P3;
            P4ScoreSaber = data.Data.P4;
            MapPool = data.Data.MapPool + '';
            var mapCount = 0;



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
            setTimeout(function () {
                P1accFinder();
                P2accFinder();
                if (P3ScoreSaber != "") {
                    P3accFinder();
                }
                if (P4ScoreSaber != "") {
                    P4accFinder();
                }
            }, 3000);
            setTimeout(function () {

                if (typeof P1Map0Score === 'undefined') { P1Map0Score = "0";}
                if (typeof P1Map0Acc === 'undefined') { P1Map0SAcc = "0";}
                if (typeof P1Map0Misses === 'undefined') { P1Map0Misses = "0";}
                if (typeof P1Map1Score === 'undefined') { P1Map1Score = "0";}
                if (typeof P1Map1Acc === 'undefined') { P1Map1Acc = "0";}
                if (typeof P1Map1Misses === 'undefined') { P1Map1Misses = "0";}
                if (typeof P1Map2Score === 'undefined') { P1Map2Score = "0";}
                if (typeof P1Map2Acc === 'undefined') { P1Map2Acc = "0";}
                if (typeof P1Map2Misses === 'undefined') { P1Map2Misses = "0";}
                if (typeof P1Map3Score === 'undefined') { P1Map3Score = "0";}
                if (typeof P1Map3Acc === 'undefined') { P1Map3Acc = "0";}
                if (typeof P1Map3Misses === 'undefined') { P1Map3Misses = "0";}
                if (typeof P1Map4Score === 'undefined') { P1Map4Score = "0";}
                if (typeof P1Map4Acc === 'undefined') { P1Map4Acc = "0";}
                if (typeof P1Map4Misses === 'undefined') { P1Map4Misses = "0";}
                if (typeof P1Map5Score === 'undefined') { P1Map5Score = "0";}
                if (typeof P1Map5Acc === 'undefined') { P1Map5Acc = "0";}
                if (typeof P1Map5Misses === 'undefined') { P1Map5Misses = "0";}
                if (typeof P1Map6Score === 'undefined') { P1Map6Score = "0";}
                if (typeof P1Map6Acc === 'undefined') { P1Map6Acc = "0";}
                if (typeof P1Map6Misses === 'undefined') { P1Map6Misses = "0";}
                if (typeof P1Map7Score === 'undefined') { P1Map7Score = "0";}
                if (typeof P1Map7Acc === 'undefined') { P1Map7Acc = "0";}
                if (typeof P1Map7Misses === 'undefined') { P1Map7Misses = "0";}
                if (typeof P1Map8Score === 'undefined') { P1Map8Score = "0";}
                if (typeof P1Map8Acc === 'undefined') { P1Map8Acc = "0";}
                if (typeof P1Map8Misses === 'undefined') { P1Map8Misses = "0";}
                if (typeof P2Map0Acc === 'undefined') { P2Map0Score = "0";}
                if (typeof P2Map0Misses === 'undefined') { P2Map0Misses = "0";}
                if (typeof P2Map1Score === 'undefined') { P2Map1Score = "0";}
                if (typeof P2Map1Acc === 'undefined') { P2Map1Acc = "0";}
                if (typeof P2Map1Misses === 'undefined') { P2Map1Misses = "0";}
                if (typeof P2Map2Score === 'undefined') { P2Map2Score = "0";}
                if (typeof P2Map2Acc === 'undefined') { P2Map2Acc = "0";}
                if (typeof P2Map2Misses === 'undefined') { P2Map2Misses = "0";}
                if (typeof P2Map3Score === 'undefined') { P2Map3Score = "0";}
                if (typeof P2Map3Acc === 'undefined') { P2Map3Acc = "0";}
                if (typeof P2Map3Misses === 'undefined') { P2Map3Misses = "0";}
                if (typeof P2Map4Score === 'undefined') { P2Map4Score = "0";}
                if (typeof P2Map4Acc === 'undefined') { P2Map4Acc = "0";}
                if (typeof P2Map4Misses === 'undefined') { P2Map4Misses = "0";}
                if (typeof P2Map5Score === 'undefined') { P2Map5Score = "0";}
                if (typeof P2Map5Acc === 'undefined') { P2Map5Acc = "0";}
                if (typeof P2Map5Misses === 'undefined') { P2Map5Misses = "0";}
                if (typeof P2Map6Score === 'undefined') { P2Map6Score = "0";}
                if (typeof P2Map6Acc === 'undefined') { P2Map6Acc = "0";}
                if (typeof P2Map6Misses === 'undefined') { P2Map6Misses = "0";}
                if (typeof P2Map7Score === 'undefined') { P2Map7Score = "0";}
                if (typeof P2Map7Acc === 'undefined') { P2Map7Acc = "0";}
                if (typeof P2Map7Misses === 'undefined') { P2Map7Misses = "0";}
                if (typeof P2Map8Score === 'undefined') { P2Map8Score = "0";}
                if (typeof P2Map8Acc === 'undefined') { P2Map8Acc = "0";}
                if (typeof P2Map8Misses === 'undefined') { P2Map8Misses = "0";}
                if (typeof P3Map0Acc === 'undefined') { P3Map0Score = "0";}
                if (typeof P3Map0Misses === 'undefined') { P3Map0Misses = "0";}
                if (typeof P3Map1Score === 'undefined') { P3Map1Score = "0";}
                if (typeof P3Map1Acc === 'undefined') { P3Map1Acc = "0";}
                if (typeof P3Map1Misses === 'undefined') { P3Map1Misses = "0";}
                if (typeof P3Map2Score === 'undefined') { P3Map2Score = "0";}
                if (typeof P3Map2Acc === 'undefined') { P3Map2Acc = "0";}
                if (typeof P3Map2Misses === 'undefined') { P3Map2Misses = "0";}
                if (typeof P3Map3Score === 'undefined') { P3Map3Score = "0";}
                if (typeof P3Map3Acc === 'undefined') { P3Map3Acc = "0";}
                if (typeof P3Map3Misses === 'undefined') { P3Map3Misses = "0";}
                if (typeof P3Map4Score === 'undefined') { P3Map4Score = "0";}
                if (typeof P3Map4Acc === 'undefined') { P3Map4Acc = "0";}
                if (typeof P3Map4Misses === 'undefined') { P3Map4Misses = "0";}
                if (typeof P3Map5Score === 'undefined') { P3Map5Score = "0";}
                if (typeof P3Map5Acc === 'undefined') { P3Map5Acc = "0";}
                if (typeof P3Map5Misses === 'undefined') { P3Map5Misses = "0";}
                if (typeof P3Map6Score === 'undefined') { P3Map6Score = "0";}
                if (typeof P3Map6Acc === 'undefined') { P3Map6Acc = "0";}
                if (typeof P3Map6Misses === 'undefined') { P3Map6Misses = "0";}
                if (typeof P3Map7Score === 'undefined') { P3Map7Score = "0";}
                if (typeof P3Map7Acc === 'undefined') { P3Map7Acc = "0";}
                if (typeof P3Map7Misses === 'undefined') { P3Map7Misses = "0";}
                if (typeof P3Map8Score === 'undefined') { P3Map8Score = "0";}
                if (typeof P3Map8Acc === 'undefined') { P3Map8Acc = "0";}
                if (typeof P3Map8Misses === 'undefined') { P3Map8Misses = "0";}
                if (typeof P4Map0Acc === 'undefined') { P4Map0Score = "0";}
                if (typeof P4Map0Misses === 'undefined') { P4Map0Misses = "0";}
                if (typeof P4Map1Score === 'undefined') { P4Map1Score = "0";}
                if (typeof P4Map1Acc === 'undefined') { P4Map1Acc = "0";}
                if (typeof P4Map1Misses === 'undefined') { P4Map1Misses = "0";}
                if (typeof P4Map2Score === 'undefined') { P4Map2Score = "0";}
                if (typeof P4Map2Acc === 'undefined') { P4Map2Acc = "0";}
                if (typeof P4Map2Misses === 'undefined') { P4Map2Misses = "0";}
                if (typeof P4Map3Score === 'undefined') { P4Map3Score = "0";}
                if (typeof P4Map3Acc === 'undefined') { P4Map3Acc = "0";}
                if (typeof P4Map3Misses === 'undefined') { P4Map3Misses = "0";}
                if (typeof P4Map4Score === 'undefined') { P4Map4Score = "0";}
                if (typeof P4Map4Acc === 'undefined') { P4Map4Acc = "0";}
                if (typeof P4Map4Misses === 'undefined') { P4Map4Misses = "0";}
                if (typeof P4Map5Score === 'undefined') { P4Map5Score = "0";}
                if (typeof P4Map5Acc === 'undefined') { P4Map5Acc = "0";}
                if (typeof P4Map5Misses === 'undefined') { P4Map5Misses = "0";}
                if (typeof P4Map6Score === 'undefined') { P4Map6Score = "0";}
                if (typeof P4Map6Acc === 'undefined') { P4Map6Acc = "0";}
                if (typeof P4Map6Misses === 'undefined') { P4Map6Misses = "0";}
                if (typeof P4Map7Score === 'undefined') { P4Map7Score = "0";}
                if (typeof P4Map7Acc === 'undefined') { P4Map7Acc = "0";}
                if (typeof P4Map7Misses === 'undefined') { P4Map7Misses = "0";}
                if (typeof P4Map8Score === 'undefined') { P4Map8Score = "0";}
                if (typeof P4Map8Acc === 'undefined') { P4Map8Acc = "0";}
                if (typeof P4Map8Misses === 'undefined') { P4Map8Misses = "0";}
            
            
            
            
            
            
                
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


        // Setting p1 ssid & p2 ssid 
    });

    socket.on('close', function () {
        sockets = sockets.filter(s => s !== socket);
    });
});




    


console.log("Started.")


function mapPoolUpdate() {
    fetch(`https://beatkhana.com/api/tournament/2147484253/map-pools`)
        .then(response => {
            return response.json()
        })
        .then(data => {
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

        })

        .catch(err => {
            console.log(err)
        })
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



        
    








// function sendData() {

//     var messageData = {
//         "Event": "StatsPage",
//         "Data": {
//             "P1Map0Score": P1Map0Score.value,
//             "P1Map0Acc": P1Map0Acc.value,
//             "P1Map0Misses": P1Map0Misses.value,
//             "P1Map1Score": P1Map1Score.value,
//             "P1Map1Acc": P1Map1Acc.value,
//             "P1Map1Misses": P1Map1Misses.value,
//             "P1Map2Score": P1Map2Score.value,
//             "P1Map2Acc": P1Map2Acc.value,
//             "P1Map2Misses": P1Map2Misses.value,
//             "P1Map3Score": P1Map3Score.value,
//             "P1Map3Acc": P1Map3Acc.value,
//             "P1Map3Misses": P1Map3Misses.value,
//             "P1Map4Score": P1Map4Score.value,
//             "P1Map4Acc": P1Map4Acc.value,
//             "P1Map4Misses": P1Map4Misses.value,
//             "P1Map5Score": P1Map5Score.value,
//             "P1Map5Acc": P1Map5Acc.value,
//             "P1Map5Misses": P1Map5Misses.value,
//             "P1Map6Score": P1Map6Score.value,
//             "P1Map6Acc": P1Map6Acc.value,
//             "P1Map6Misses": P1Map6Misses.value,
//             "P1Map7Score": P1Map7Score.value,
//             "P1Map7Acc": P1Map7Acc.value,
//             "P1Map7Misses": P1Map7Misses.value,
//             "P1Map8Score": P1Map8Score.value,
//             "P1Map8Acc": P1Map8Acc.value,
//             "P1Map8Misses": P1Map8Misses.value,
//             "P2Map0Score": P2Map0Score.value,
//             "P2Map0Acc": P2Map0Acc.value,
//             "P2Map0Misses": P2Map0Misses.value,
//             "P2Map1Score": P2Map1Score.value,
//             "P2Map1Acc": P2Map1Acc.value,
//             "P2Map1Misses": P2Map1Misses.value,
//             "P2Map2Score": P2Map2Score.value,
//             "P2Map2Acc": P2Map2Acc.value,
//             "P2Map2Misses": P2Map2Misses.value,
//             "P2Map3Score": P2Map3Score.value,
//             "P2Map3Acc": P2Map3Acc.value,
//             "P2Map3Misses": P2Map3Misses.value,
//             "P2Map4Score": P2Map4Score.value,
//             "P2Map4Acc": P2Map4Acc.value,
//             "P2Map4Misses": P2Map4Misses.value,
//             "P2Map5Score": P2Map5Score.value,
//             "P2Map5Acc": P2Map5Acc.value,
//             "P2Map5Misses": P2Map5Misses.value,
//             "P2Map6Score": P2Map6Score.value,
//             "P2Map6Acc": P2Map6Acc.value,
//             "P2Map6Misses": P2Map6Misses.value,
//             "P2Map7Score": P2Map7Score.value,
//             "P2Map7Acc": P2Map7Acc.value,
//             "P2Map7Misses": P2Map7Misses.value,
//             "P2Map8Score": P2Map8Score.value,
//             "P2Map8Acc": P2Map8Acc.value,
//             "P2Map8Misses": P2Map8Misses.value,
//             "P3Map0Score": P3Map0Score.value,
//             "P3Map0Acc": P3Map0Acc.value,
//             "P3Map0Misses": P3Map0Misses.value,
//             "P3Map1Score": P3Map1Score.value,
//             "P3Map1Acc": P3Map1Acc.value,
//             "P3Map1Misses": P3Map1Misses.value,
//             "P3Map2Score": P3Map2Score.value,
//             "P3Map2Acc": P3Map2Acc.value,
//             "P3Map2Misses": P3Map2Misses.value,
//             "P3Map3Score": P3Map3Score.value,
//             "P3Map3Acc": P3Map3Acc.value,
//             "P3Map3Misses": P3Map3Misses.value,
//             "P3Map4Score": P3Map4Score.value,
//             "P3Map4Acc": P3Map4Acc.value,
//             "P3Map4Misses": P3Map4Misses.value,
//             "P3Map5Score": P3Map5Score.value,
//             "P3Map5Acc": P3Map5Acc.value,
//             "P3Map5Misses": P3Map5Misses.value,
//             "P3Map6Score": P3Map6Score.value,
//             "P3Map6Acc": P3Map6Acc.value,
//             "P3Map6Misses": P3Map6Misses.value,
//             "P3Map7Score": P3Map7Score.value,
//             "P3Map7Acc": P3Map7Acc.value,
//             "P3Map7Misses": P3Map7Misses.value,
//             "P3Map8Score": P3Map8Score.value,
//             "P3Map8Acc": P3Map8Acc.value,
//             "P3Map8Misses": P3Map8Misses.value,
//             "P4Map0Score": P4Map0Score.value,
//             "P4Map0Acc": P4Map0Acc.value,
//             "P4Map0Misses": P4Map0Misses.value,
//             "P4Map1Score": P4Map1Score.value,
//             "P4Map1Acc": P4Map1Acc.value,
//             "P4Map1Misses": P4Map1Misses.value,
//             "P4Map2Score": P4Map2Score.value,
//             "P4Map2Acc": P4Map2Acc.value,
//             "P4Map2Misses": P4Map2Misses.value,
//             "P4Map3Score": P4Map3Score.value,
//             "P4Map3Acc": P4Map3Acc.value,
//             "P4Map3Misses": P4Map3Misses.value,
//             "P4Map4Score": P4Map4Score.value,
//             "P4Map4Acc": P4Map4Acc.value,
//             "P4Map4Misses": P4Map4Misses.value,
//             "P4Map5Score": P4Map5Score.value,
//             "P4Map5Acc": P4Map5Acc.value,
//             "P4Map5Misses": P4Map5Misses.value,
//             "P4Map6Score": P4Map6Score.value,
//             "P4Map6Acc": P4Map6Acc.value,
//             "P4Map6Misses": P4Map6Misses.value,
//             "P4Map7Score": P4Map7Score.value,
//             "P4Map7Acc": P4Map7Acc.value,
//             "P4Map7Misses": P4Map7Misses.value,
//             "P4Map8Score": P4Map8Score.value,
//             "P4Map8Acc": P4Map8Acc.value,
//             "P4Map8Misses": P4Map8Misses.value,


//         }





//     }



//     var messageString = JSON.stringify(messageData);

//     console.log(messageString);
//     sock = new WebSocket("ws://localhost:1337");
//     sock.send(messageString);
// }