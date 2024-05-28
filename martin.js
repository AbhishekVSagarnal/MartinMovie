document.addEventListener('DOMContentLoaded', () => {
    // Featured Movies Data
    const featuredMovies = [
        { title: "Martin: The Beginning", description: "The epic start of Martin's journey.", image: "movie1.jpg" },
        { title: "Martin: Rise to Power", description: "Martin's rise to power and fame.", image: "movie2.jpg" },
        { title: "Martin: The Final Chapter", description: "The thrilling conclusion to Martin's saga.", image: "movie3.jpg" },
    ];

    // Latest Reviews Data
    const latestReviews = [
        { title: "An Epic Beginning", content: "An exhilarating start to an epic saga..." },
        { title: "A Powerhouse Performance", content: "Martin delivers a powerhouse performance..." },
        { title: "A Grand Finale", content: "A grand and satisfying conclusion..." },
    ];

    // Upcoming Releases Data
    const upcomingReleases = [
        { title: "Martin: New Beginnings", releaseDate: "June 2024" },
        { title: "Martin: Legacy", releaseDate: "December 2024" },
        { title: "Martin: The Reboot", releaseDate: "March 2025" },
    ];

    // Function to load featured movies
    const loadFeaturedMovies = () => {
        const container = document.getElementById('featured-movies');
        featuredMovies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.className = 'movie';
            movieDiv.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            `;
            container.appendChild(movieDiv);
        });
    };

    // Function to load latest reviews
    const loadLatestReviews = () => {
        const container = document.getElementById('latest-reviews-content');
        latestReviews.forEach(review => {
            const reviewArticle = document.createElement('article');
            reviewArticle.innerHTML = `
                <h3>${review.title}</h3>
                <p>${review.content}</p>
                <a href="#">Read more</a>
            `;
            container.appendChild(reviewArticle);
        });
    };

    // Function to load upcoming releases
    const loadUpcomingReleases = () => {
        const container = document.getElementById('upcoming-releases-list');
        upcomingReleases.forEach(release => {
            const releaseItem = document.createElement('li');
            releaseItem.textContent = `${release.title} - ${release.releaseDate}`;
            container.appendChild(releaseItem);
        });
    };

    // Load all data
    loadFeaturedMovies();
    loadLatestReviews();
    loadUpcomingReleases();
});
