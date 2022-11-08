// Seleccionamos los elementos del DOM que vamos a necesitar
const btnContainer = document.querySelector(".pagination");
const prevBTN = document.querySelector(".left");
const nextBTN = document.querySelector(".right");
const cardsContainer = document.querySelector(".cards-container");
const pageNumber = document.querySelector(".page-number");
const filterButtons = document.querySelectorAll(".btn");
const filterContainer = document.querySelector(".filter-container");


const ImgBaseUrl = "https://image.tmdb.org/t/p/original";

const formatDate = (date) => {
  const newDate = date.split('-').reverse().join('/');
  return newDate;
}

const pageController = {
  page: null,
  total: null,
  searchParameter: TRENDING,
}

const parameterSelector = (type) => {
  return type === 'TOPRATED'
    ? TOPRATED
    : type === 'UPCOMING'
    ? UPCOMING
    : TRENDING;
};

const changeSearchParameter = (e) => {
  if(
    !e.target.classList.contains('btn')
    || e.target.classList.contains('btn--active')
  ) return;

  const selectedParameter = e.target.dataset.filter;
  pageController.searchParameter = parameterSelector(selectedParameter);

  const buttons = [...filterButtons];
  buttons.forEach( btn => {
    if(btn.dataset.filter !== selectedParameter) {
      btn.classList.remove('btn--active');
    } else {
      btn.classList.add('btn--active')
    }
  });

  getMovies();
}

const renderCard = (movie) => {
  const { title, poster_path, vote_average, release_date } = movie;

  return `
      <div class="card">
        <img loading="lazy" src=${
          poster_path ? ImgBaseUrl + poster_path : './assets/img/placeholder.png'
        } alt="${title}" class="card-img"/>
        <div class="card-popularity">${Math.floor(vote_average) * 10}% de popularidad</div>
        <div class="card-content">
            <h2>${title}</h2>
            <p>Fecha de estreno: ${formatDate(release_date)}</p>
        </div>
      </div>
  `
}

const renderLoader = () => {
  return `
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `
}

const renderCards = (movies) => {
  cardsContainer.innerHTML = movies.map(movie => renderCard (movie)).join('');
}

const loadAndShow = (movies) => {
  setTimeout(() => {
    renderCards(movies);
    filterContainer.scrollIntoView({
      behavior: 'smooth'
    })
  }, 1500);
};

const getMovies = async () => {
  cardsContainer.innerHTML = renderLoader();
  const movies = await fetchMovies(pageController.searchParameter);
  pageController.page = movies.page;
  pageController.total = movies.total_pages;
  setPagination();
  loadAndShow(movies.results);
}

const disableNextBTN = (page, total) => {
  if (page === total) {
    nextBTN.classList.add('disabled')
  } else {
    nextBTN.classList.remove('disabled');
  }
}

const disablePrevBTN = (page) => {
  if (page === 1) {
    prevBTN.classList.add('disabled')
  } else {
    prevBTN.classList.remove('disabled');
  }
}

const setPagination = () => {
  pageNumber.innerHTML = pageController.page
  disablePrevBTN(pageController.page)
  disableNextBTN(pageController.page, pageController.total);
}

const changePage = async () => {
  const { searchParameter, page } = pageController

  const movies = await fetchMovies(searchParameter, page);
  setPagination();
  loadAndShow(movies.results)
}

const nextPage = (e) => {
  e.stopImmediatePropagation()
  // if(pageController.page === pageController.total) return;
  pageController.page += 1;
  changePage();
};

const previousPage = (e) => {
  e.stopImmediatePropagation()
  // if(pageController.page === 0) return;
  pageController.page -= 1;
  changePage();
};

const init = () => {
  window.addEventListener('DOMContentLoaded', getMovies);
  nextBTN.addEventListener('click', nextPage);
  prevBTN.addEventListener('click', previousPage);
  filterContainer.addEventListener('click', changeSearchParameter);
};


init();