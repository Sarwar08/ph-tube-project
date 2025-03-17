
function displayErrorVideo (error){
    // console.log(videos);

    // get the parent div
    const errVidParent = document.getElementById('error-video-container');

    // create element 
    const div = document.createElement('div');
    // div.classList.add('card', 'bg-base-100', 'sm:w-48', 'shadow-sm');
    // div.classList.add('container', 'mx-auto');

    div.innerHTML = `
        <div class="h-screen flex justify-center items-center -mt-22">
            <div class="grid justify-center">
                <div class="mb-4">
                    <img class="w-48 rounded-md" src="./assets/Icon.png" alt="photo-error" />
                </div>
                <p class="">${error}</p>
            </div>
        </div>
                `;

    errVidParent.appendChild(div);
            
}