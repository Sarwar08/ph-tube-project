
function displayVideos(videos) {
    console.log(videos);

    // get the parent div
    const vidParent = document.getElementById('video-container');

    vidParent.innerHTML = "";

    // loop through the array of object
    for (const video of videos) {
        // console.log(video);

        /*
        {
            "category_id": "1001",
            "video_id": "aaaa",
            "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
            "title": "Shape of You",
            "authors": [
              {
                "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
                "profile_name": "Olivia Mitchell",
                "verified": ""
              }
            ],
            "others": {
              "views": "100K",
              "posted_date": "16278"
            }
        */

        function verifiedAuthor(verified) {

            const span = document.createElement('span');

            if (verified) {
                return span.innerHTML = `
                <i class="fa-solid fa-circle-check text-lg text-blue-700 bg-white rounded-full border border-blue-700 ml-2"></i>
                `;
            }
            else {
                return span.innerHTML = "";
            }
        }

        // create element 
        const div = document.createElement('div');
        // div.classList.add('card', 'bg-base-100', 'sm:w-48', 'shadow-sm');

        div.innerHTML = `
                <div class="mb-2">
                    <figure>
                        <img class="w-[480px] h-[200px] object-cover rounded-md " src="${video.thumbnail}" alt="Shoes" />
                    </figure>
                    <div class="mt-3 flex items-start gap-4">
                        <figure class="mt-2">
                            <img class="w-10 h-10 rounded-full" src="${video.authors[0].profile_picture}" alt="">
                        </figure>
                        <div class="">
                            <h2 class="card-title">${video.title}</h2>

                            <p class="text-xs my-2">${video.authors[0].profile_name} ${video.authors[0].verified === true ? `
                <i class="fa-solid fa-circle-check text-lg text-blue-700 bg-white rounded-full border border-blue-700 ml-2"></i>
                ` : ' '}</p>

                
                <p class="text-xs">${video.others.views}</p>   
                </div>
                </div>
                </div>
                `;

        // append child
        vidParent.appendChild(div);
    }
}
// <p class="text-xs my-2">${video.authors[0].profile_name} ${verifiedAuthor(video.authors[0].verified)}</p>