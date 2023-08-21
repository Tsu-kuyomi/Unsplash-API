const accessKey = 'UM_OFMCcy8CEr3bAJnLGsdJWsn3gQeHsEJlPJIR-tAg'; 
const numberOfPhotos = document.getElementById('numberOfPhotos');
const photosContainer = document.getElementById('photos-container');
const btn = document.getElementById('btn');
const loader = document.getElementById('loader');

btn.addEventListener('click',
async function getRandomPhotos() {

    loader.style.display = 'block';

  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${numberOfPhotos.value}`);
    const data = await response.json();

    if (photosContainer.hasChildNodes()) {
      photosContainer.innerHTML = ""
    }
    // console.log(data);
    data.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.urls.small;
      img.alt = photo.alt_description;
      photosContainer.appendChild(img);
    });
  } catch (error) {
    console.error('Error fetching photos:', error);
  }

  finally{
    loader.style.display = 'none'
  }
});
