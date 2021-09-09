/*import fs from "fs";
import csv from 'csvtojson';
import { Parser } from 'json2csv';

(async() => {
    const clubs = await csv().fromFile("clubdata.csv");
    console.log(clubs);

}
)();
<script src="https://cdn.jsdelivr.net/npm/papaparse@5.3.1/papaparse.min.js"></script>


const { CsvError } = require('csv-parse');
const parse = require('csv-parse');
const fs = require('fs');
const clubs =[];

fs.createReadStream(__dirname+ "clubdata.csv")
    .pipe(
        parse({
                delimiter : ','
            })
    )
    .on('data',function(dataRow)
    {
        csvData.push(dataRow);
    })
    .on('end',function(){
        console.log(csvData);

    })

d3.csv("clubdata.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].Club);
        //console.log(data[i].Age);
    }
});

const csv = require('csv-parser');
const fs = require('fs');
var results = [];
var suggestions = [];

fs.createReadStream('C:\\Users\\Nive\\Desktop\\ICEBREAKER\\clubdata.csv')
    .pipe(csv({}))
    .on('data',(data)=> window.results.push(data))
    .on('end',()=> {
        for(let i=0;i<results.length;i++)
        {
            //console.log("hi");
            window.suggestions.push(results[i].Club);
            
        }
        //console.log(suggestions);
        //suggestions;                                          
        //console.log("hi"+results+"bye");
    });


console.log(suggestions);
//console.log(results);

//console.log(results.length);
*/

let suggestions = [
    "Equinox",
    "IEEE-RAS",
    "Debate Society",
    "WriteAngle",
    "Trance",
    "Pixels",
    "Ninaada",
    "CORI",
    "Prakalpa",
    "Samparpana",
    "Nautanki",
    "Maaya",
    "Pulse",
    "Aatmatrisha",
    "PESU Super Smash Bros",
    "Mastadon Basketball Women",
    "UniFOSS",
    "Swarantraka",
    "PESU Shuttlers Men",
    "CS Club",
    "HackerSpace",
    "The AlCoding Club",
    "ActionCut",
    "Socioholics",
    "CSR",
    "Rotaract",
    "AIKYA",
    "Abhinayaveethii",
    "Aidra",
    "Fantom",
    "Hospitality and Tourism",
    "QForest",
    "Quotient Quiz Club",
    "Team Aeolus - IARC (Robotics) division",
    "TEDX",
    "SAE",
    "Paisa Vasool",
    "MIT Event",
    "Talk+",
    "Team Haya Racing",
    "ICare group",
    "Impetus",
    "PES Chronicles",
    "E-Cell",
    "Dsgnr",
    "Samkaran",
    "Kirik Party",
    "Robotics",
    "JEDI",
    "Microsoft Innovation Lab",
    "MUN Society",
    "Ordell Ugo",
    "Pes Talkies",
    "Papyrus",
    "ECLAT",
    "Jhenkar",
    "Pitch Please",
    "Saarang",
    "Ouroboros",
    "Excelsior",
    "Chef Club",
    "Catalyst",
    "Entropi",
    "Team Haya Off Roading",
    "The Music Club",
    "Team Aeolus",
    "Developer Student Clubs",
    "PESU Shuttlers Women",
    "Mastadon Kabaddi",
    "PESU Chess Mates",
    "Masatdon Football Men",
    "Mastadon Football Women",
    "Mastadon Marauders",
    "Mastadon Swimming",
    "Mastadon Throwball",
    "Mastdon Basketball Men",
    "Rowing",
    "Changemakers' Society",
    "Through the Lens",
    "Epsilon"
];
