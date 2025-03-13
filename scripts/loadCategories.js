
async function loadCategories (){
    try{
        // fetch the data - get a promise response
        const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
        // convert promise response to json - get the data in data variable
        const data = await res.json();
        // send data to display
        displayCategories(data.categories);
    }
    catch{
        
    }
}

function displayCategories (categories){
    // console.log(categories);

    // get the container
    const catParent = document.getElementById('category-container');

    // loop through the array of object
    for (const category of categories){
        // console.log(category);
        
        // create element 
        const catDiv = document.createElement('div');
        // catButton.classList.add('btn');
        catDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-red-800 hover:text-white">${category.category}</button>`
        ;

        // append child
        catParent.appendChild(catDiv);
    }
    
}

loadCategories();