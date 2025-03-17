
function displayNoVideos (){
    // console.log(videos);

    // get the parent div
    const errVidParent = document.getElementById('no-video-container');

    // create element 
    const div = document.createElement('div');
    // div.classList.add('card', 'bg-base-100', 'sm:w-48', 'shadow-sm');
    // div.classList.add('container', 'mx-auto');

    div.innerHTML = `
        <div class="h-screen flex justify-center items-center -mt-22">
            <div class="grid justify-center items-center ">
                <div class="mb-4 text-center">
                    <img class="w-48 rounded-md mx-auto" src="./assets/Icon.png" alt="photo-error" />
                </div>
                <div>
                    <h2 class="text-2xl">Oops!! Sorry, There is no content here</h2>
                </div>
            </div>
        </div>
                `;

    errVidParent.appendChild(div);
}