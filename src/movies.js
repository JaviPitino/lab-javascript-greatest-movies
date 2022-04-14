// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
  let directors = movies.map((eachMovies) => {
    return eachMovies.director;
  });
  let foundDirector = directors.find( ( eachDirector ) => {
    if ( eachDirector.director === eachDirector.director)
    return true;
  })
  return foundDirector;
}

console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesFilter) {
  let filteredMovies = moviesFilter.filter((eachElement) => {
    return (
      eachElement.director === 'Steven Spielberg' &&
      eachElement.genre.includes('Drama')
    );
  });
  return filteredMovies;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scores) {
  let totalCal = scores.reduce((acc, elem) => {
    return acc + elem.score;
  }, 0)

  let average = totalCal / scores.length;
  let twoDigit = average.toFixed(2);
  let twoDigitNum = parseFloat(twoDigit);
  return twoDigitNum;
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrDrama) {

  let count = 0;
  let totalDrama = arrDrama.reduce((acc, elem) => {
    if (elem.genre.includes('Drama')) {
    count++;
    // console.log(count, acc);
    // console.log(elem)
    return acc + Number(elem.score);
    } else {
      return acc;
    }
  }, 0);
 
  let average = totalDrama / count;
  let twoDigit = average.toFixed(2);
  let twoDigitNum = parseFloat(twoDigit);

  return twoDigitNum;
}

console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(order) {
  let wordsArrCopy = JSON.parse( JSON.stringify( movies ) );
  wordsArrCopy.sort((elem2, elem1) => {
    if (elem2.year > elem1.year) {
      return 1 // si coge el negativo te lo ordena en orden descendente. PONLO PRIMERO
    } else {
      return -1 // si coge el positivo te lo ordena en orden ascendente. PONLO DESPUES
    }
  })
return wordsArrCopy;
};

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(orderedTwenty) {
  let newOrder20 = JSON.parse( JSON.stringify( movies ) );
  newOrder20.sort((elem2, elem1) => {
    if (elem2.title > elem1.title) {
      return 1
    } else {
      return -1
    };
  })
  let filteredMovies = newOrder20.filter((eachElem, index) => {
    if ( index < 20 ) {
      return true;
    } else {
      return false;
    }
  });
  let mappedArr = filteredMovies.map( (eachElem) => {
    return eachElem.title;
  } )
  return mappedArr;
};

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
