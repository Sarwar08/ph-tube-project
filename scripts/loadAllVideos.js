
async function loadAllVideos(searchText = '') {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`);

        const data = await res.json();
        // console.log(data.videos);

        // remove active class
        removeActiveClass();

        // add active class
        document.getElementById('btn-all').classList.add('active');

        displayVideos(data.videos);
    }
    catch (error) {
        displayErrorVideo(error);
    }
}

document.getElementById('search-text').addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    const input = e.target.value;
    loadAllVideos(input);
})

// loadAllVideos()