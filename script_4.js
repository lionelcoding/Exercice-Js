
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }];
    // Les entrepreneurs nées dans les années 70
    let newArray = entrepreneurs.filter
    (
    function (el) {
        return el.year > 1970 && el.year < 1980
    }
    );
    function seventy(){
        console.log(newArray);
    };

    /* affiche nom et prénom*/
 entrepreneurs.forEach((e) => {
    console.log("2. Prénom et nom")
    console.log(`Prénom : ${e.first} Nom: ${e.last} `);
});

// Donne l'age de chacun à aujourd'hui

var seventiesEntrepreneurs = ""
var arrFirstAndLast = []
var ageEntrepreneurs = ""
var yearToday = new Date().getFullYear()
var sortName = entrepreneurs.slice(0)

for (let entrepreneurAttribut in entrepreneurs) {
    let entrepreneurYear = entrepreneurs[entrepreneurAttribut].year
    let entrepreneurFirst = entrepreneurs[entrepreneurAttribut].first
    let entrepreneurLast = entrepreneurs[entrepreneurAttribut].last
    let entrepreneurAge = yearToday - entrepreneurYear;
    ageEntrepreneurs += entrepreneurFirst + " " + entrepreneurLast + " aurait cette année " + entrepreneurAge  + " ans" + "\n"
    console.log("3. Âge de chaque inventeur aujourd'hui")
    console.log(ageEntrepreneurs)
}

// trie par nom

console.log("4. Entrepreneurs triés par ordre alphabétique du nom de famille")
sortName.sort(function(a,b) {
    var x = a.last.toLowerCase();
    var y = b.last.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});
console.log(sortName)