/**
 * Contains solutions for Day 6
 * Puzzle Description: https://adventofcode.com/2023/day/6
 */

import {tr} from "advent-of-code-runner/src/tables/markdownTable.js";

/**
 * Returns the solution for level one of this puzzle.
 * @param {Object} args - Provides both raw and split input.
 * @param {String} args.input - The original, unparsed input string.
 * @param {String[]} args.lines - Array containing each line of the input string.
 * @returns {Number|String}
 */

const data = ["Time:        53     71     78     80",
    "Distance:   275   1181   1215   1524"];


const dataLines = ["Time:       7   15  30   ",
    "Distance:   9   40   200   "];
export const levelOne = ({input, lines}) => {
    const times = lines[0];
    const distance = lines[1]

    const Parsedtimes = times.split(/\s+/).map(time => parseInt(time)).filter((string) => !isNaN(string));
    const Parseddistance = distance.split(/\s+/).map(d => parseInt(d)).filter((string) => !isNaN(string));


    const races = Parsedtimes.map((time, index) =>
        ({time: Parsedtimes[index], distance: Parseddistance[index]}))

    console.log(races)


    let gesamtErgebnis = 1
    races.forEach((eachRace) => {

        let anzahlMöglichkeiten = 0

        for (let i = 0; i < eachRace.time - 1; i++) {
            const travelTime = eachRace.time - i;
            const distance = i * travelTime;

            if (distance > eachRace.distance) {
                anzahlMöglichkeiten++

            }
        }
        gesamtErgebnis *= anzahlMöglichkeiten
    })


    console.log("Gesamtergebnis " + gesamtErgebnis)

};
levelOne({lines: data})

/**
 * Returns the solution for level two of this puzzle.
 * @param {Object} args - Provides both raw and split input.
 * @param {String} args.input - The original, unparsed input string.
 * @param {String[]} args.lines - Array containing each line of the input string.
 * @returns {Number|String}
 */
export const levelTwo = ({input, lines}) => {
    // your code here
};


/*

Meine erste Lösung



const data = "Time:        53     71     78     80" +
    "Distance:   275   1181   1215   1524";


const dataLines = ["Time:       7   15  30   ",
    "Distance:   9   40   200   "];
export const levelOne = ({input, lines}) => {
    const times = lines[0];
    const distance = lines[1]

    const Parsedtimes = times.split(/\s+/).map(time => parseInt(time)).filter((string) => !isNaN(string));
    const Parseddistance = distance.split(/\s+/).map(d => parseInt(d)).filter((string) => !isNaN(string));


    const races = Parsedtimes.map((time, index) =>
        ({time: Parsedtimes[index], distance: Parseddistance[index]}))


    const firstRace = races[0]
    const secondRace = races[1]

    const speed = [1, 2, 3, 4, 5, 6, 7]


    function distanceTime(knopf, race) {


        let distanceErreicht = false
        const speedDistanceRecordsArray = [];

        for (const s of speed) {
            const travelTime = race.time - s;
            const distance = s * travelTime;

            if (distance >= race.distance) {
                distanceErreicht = true

            }

            const speedDistanceRecordsObject = {speed: s, distance: distance, Erreicht: distanceErreicht}
            speedDistanceRecordsArray.push(speedDistanceRecordsObject)

        }
        const trueSpeedDistanceRecordsArray = speedDistanceRecordsArray.filter((obj) => {
            return obj.Erreicht === true
        })

        return "Anzahl Möglichkeiten " + trueSpeedDistanceRecordsArray.length


    }


    const Options = distanceTime(speed, firstRace)
    console.log(Options)

};
levelOne({lines: dataLines})

 */

