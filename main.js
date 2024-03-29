let API_Key = '42629002-9d7d7e0f76ae1b8339ce7d0b4';

async function a() {
    const gallery = document.querySelector('.gallery');
    const response = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=${API_Key}`);
    const data = await response.json();

    data.hits.forEach(img => {
        const li = document.createElement('li');
        const image = document.createElement('img');
        image.src = img.webformatURL; 
        li.appendChild(image); 
        
        const text = document.createElement('span');
        text.textContent = img.tags;
        li.appendChild(text);
        
        gallery.appendChild(li);
    });
}

a();

