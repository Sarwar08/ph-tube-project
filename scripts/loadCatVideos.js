
async function loadCatVideos (id){
    console.log(id);
    
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);

        const data = await res.json();

        // console.log(data.category);

        // remove active class
        removeActiveClass();

        // add active class to button
        const clickedButton = document.getElementById(`btn-${id}`);
        clickedButton.classList.add('active');
        

        // display videos 
        if (data.category.length === 0){
            displayNoVideos();
        }

        displayVideos(data.category);

    }
    catch (error) {
        displayErrorVideo(error);
    }
}

