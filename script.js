// -- Data ------------------------------------------------------------------
const images = [
  { title: "Mountain Lake",          category: "nature", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" },
  { title: "Forest Path",            category: "nature", src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop" },
  { title: "Ocean Sunset",           category: "nature", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop" },
  { title: "Autumn Waterfall",       category: "nature", src: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&h=600&fit=crop" },
  { title: "Monarch Butterflies",    category: "nature", src: "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=800&h=600&fit=crop" },
  { title: "Mountain Sunrise",       category: "nature", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop" },
  { title: "Green Valley",           category: "nature", src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=600&fit=crop" },
  { title: "Sunlit Forest",          category: "nature", src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop" },
  { title: "Forest Stream",          category: "nature", src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&h=600&fit=crop" },
  { title: "Nature in Hands",        category: "nature", src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop" },
  { title: "Lavender Field",         category: "nature", src: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&h=600&fit=crop" },
  { title: "Mountain Wildflowers",   category: "nature", src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&h=600&fit=crop" },
  { title: "Autumn Lake Reflection", category: "nature", src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=600&fit=crop" },
  { title: "Alpine Forest",          category: "nature", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop" },
  { title: "Fairy Glen",             category: "nature", src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop" },
  { title: "Dolomites Forest",       category: "nature", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" },
  { title: "Misty Forest Path",      category: "nature", src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop" },
  { title: "Himalayan Village",      category: "nature", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop" },
  { title: "Watering the Tree",      category: "nature", src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop" },
  { title: "Alpine Valley",          category: "nature", src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=600&fit=crop" },
  { title: "Mossy Forest Bridge",    category: "nature", src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop" },
  { title: "Sunflower Sunset",       category: "nature", src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&h=600&fit=crop" },
  { title: "Tropical Waterfalls",    category: "nature", src: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=600&fit=crop" },
  { title: "Cave Waterfall",         category: "nature", src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&h=600&fit=crop" },
  { title: "Golden Hour Trees",      category: "nature", src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop" },
  { title: "Coastal View",           category: "nature", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop" },
  { title: "Foggy Pine Forest",      category: "nature", src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop" },
  { title: "Forest Canopy",          category: "nature", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop" },
  { title: "Moraine Lake",           category: "nature", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" },
  { title: "Misty Mountain Sunrise", category: "nature", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop" },

  { title: "Lamborghini Aventador Black", category: "cars", src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop" },
  { title: "Rolls Royce Red",             category: "cars", src: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&h=600&fit=crop" },
  { title: "BMW M4 Sunset",               category: "cars", src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop" },
  { title: "Lamborghini Huracan Blue",    category: "cars", src: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop" },
  { title: "Lotus Emira Blue",            category: "cars", src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop" },
  { title: "Peugeot Inception Concept",   category: "cars", src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop" },
  { title: "Ferrari Track Drift",         category: "cars", src: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=600&fit=crop" },
  { title: "BMW 7 Series",                category: "cars", src: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=600&fit=crop" },
  { title: "Lamborghini Huracan Grey",    category: "cars", src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop" },
  { title: "Mercedes S-Class",            category: "cars", src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop" },
  { title: "Bugatti Chiron",              category: "cars", src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop" },
  { title: "Lamborghini Orange Forest",   category: "cars", src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop" },
  { title: "BMW Autumn Road",             category: "cars", src: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800&h=600&fit=crop" },
  { title: "Supercar Neon City",          category: "cars", src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop" },
  { title: "Mercedes AMG GT",             category: "cars", src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&h=600&fit=crop" },
  { title: "Mercedes AMG Yellow",         category: "cars", src: "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800&h=600&fit=crop" },
  { title: "Concept Car Show",            category: "cars", src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop" },
  { title: "Lamborghini Galaxy Wrap",     category: "cars", src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop" },
  { title: "NFS Race Car",                category: "cars", src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop" },
  { title: "Bugatti Divo White",          category: "cars", src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop" },
  { title: "Bugatti Chiron Black",        category: "cars", src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop" },
  { title: "BMW i8 Open Doors",           category: "cars", src: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&h=600&fit=crop" },
  { title: "BMW M2 Drift",                category: "cars", src: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=600&fit=crop" },
  { title: "BMW Vision M Next",           category: "cars", src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop" },
  { title: "BMW M4 Neon Tunnel",          category: "cars", src: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800&h=600&fit=crop" },
  { title: "BMW i8 Electric",             category: "cars", src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop" },
  { title: "Tiger",       category: "animals", src: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&h=600&fit=crop" },
  { title: "Zebra",       category: "animals", src: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&h=600&fit=crop" },
  { title: "Eagle",       category: "animals", src: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800&h=600&fit=crop" },
  { title: "Elephant",    category: "animals", src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&h=600&fit=crop" },
  { title: "Fox",         category: "animals", src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&h=600&fit=crop" },
  { title: "Giraffe",     category: "animals", src: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800&h=600&fit=crop" },
  { title: "Hippo",       category: "animals", src: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&h=600&fit=crop" },
  { title: "Horse",       category: "animals", src: "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=800&h=600&fit=crop" },
  { title: "Hummingbird", category: "animals", src: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=600&fit=crop" },
  { title: "Hyena",       category: "animals", src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&h=600&fit=crop" },
  { title: "Lion",        category: "animals", src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&h=600&fit=crop" },
  { title: "Monkey",      category: "animals", src: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&h=600&fit=crop" },
  { title: "Moose",       category: "animals", src: "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&h=600&fit=crop" },
  { title: "Ostrich",     category: "animals", src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&h=600&fit=crop" },
  { title: "Rabbit",      category: "animals", src: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800&h=600&fit=crop" },
  { title: "Lizard",      category: "animals", src: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=800&h=600&fit=crop" },
  { title: "New York City", category: "city", src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop" },
  { title: "Paris",         category: "city", src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop" },
  { title: "Tokyo",         category: "city", src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop" },
  { title: "Dubai",         category: "city", src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop" },
  { title: "London",        category: "city", src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop" },
  { title: "Sydney",        category: "city", src: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop" },
  { title: "Singapore",     category: "city", src: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop" },
  { title: "Istanbul",      category: "city", src: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop" },
  { title: "Rome",          category: "city", src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop" },
  { title: "Barcelona",     category: "city", src: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop" },
  { title: "Hong Kong",     category: "city", src: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop" },
  { title: "Chicago",       category: "city", src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop" },
  { title: "AI Robot",      category: "technology", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop" },
  { title: "Circuit Board", category: "technology", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop" },
  { title: "Laptop Code",   category: "technology", src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop" },
  { title: "VR Headset",    category: "technology", src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop" },
  { title: "Space Station", category: "technology", src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=600&fit=crop" },
  { title: "Drone",         category: "technology", src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop" },
  { title: "Server Room",   category: "technology", src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop" },
  { title: "Smartphone",    category: "technology", src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop" },
  { title: "Electric Car",  category: "technology", src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop" },
  { title: "Solar Panels",  category: "technology", src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop" },
];


// -- State -----------------------------------------------------------------
let activeFilter = "all";
let searchQuery  = "";
let currentIndex = 0;
let filteredImages = [...images];
let favorites = new Set(loadFavorites());

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem("photoGalleryFavorites") || "[]");
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem("photoGalleryFavorites", JSON.stringify([...favorites]));
}

function downloadImage(url, filename) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(link.href), 5000);
    })
    .catch(() => {
      window.open(url, '_blank');
    });
}

function toggleFav(index) {
  if (favorites.has(index)) {
    favorites.delete(index);
  } else {
    favorites.add(index);
  }
  saveFavorites();
  refreshCardFavButtons();
  if (activeFilter === "favorites") {
    applyFilters();
    if (!favorites.has(index)) closeLightbox();
  }
}

function refreshCardFavButtons() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    const idx = parseInt(item.dataset.index);
    const btn = item.querySelector('.card-fav');
    if (!btn) return;
    if (favorites.has(idx)) {
      btn.classList.add('fav-active');
      btn.textContent = '💖';
    } else {
      btn.classList.remove('fav-active');
      btn.textContent = '🤍';
    }
  });
}

// -- Build Grid ------------------------------------------------------------
const gallery = document.getElementById("gallery");

images.forEach((img, i) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.dataset.category = img.category;
  item.dataset.index = i;
  item.innerHTML = `
    <div class="card-actions">
      <button class="card-btn card-fav" aria-label="Favorite">${favorites.has(i) ? '💖' : '🤍'}</button>
      <a class="card-btn card-download" href="${img.src}" download="${img.title.replace(/[^a-z0-9_\-]/gi, '_')}.jpg" aria-label="Download">⬇️</a>
    </div>
    <img src="${img.src}" alt="${img.title}" loading="lazy" />
    <div class="overlay">
      <h3>${img.title}</h3>
      <span>${img.category}</span>
    </div>`;

  const favBtn = item.querySelector('.card-fav');
  const downloadLink = item.querySelector('.card-download');

  favBtn.addEventListener('click', e => {
    e.stopPropagation();
    toggleFav(i);
    refreshCardFavButtons();
  });

  downloadLink.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    downloadImage(img.src, `${img.title.replace(/[^a-z0-9_\-]/gi, '_')}.jpg`);
  });

  item.addEventListener("click", () => {
    openLightbox(i);
  });
  gallery.appendChild(item);
});

// -- Filters + Search ------------------------------------------------------
function applyFilters() {
  const q = searchQuery.toLowerCase();
  document.querySelectorAll(".gallery-item").forEach(item => {
    const idx = parseInt(item.dataset.index);
    const img = images[idx];
    const catOk = activeFilter === "all"
      || (activeFilter === "favorites" && favorites.has(idx))
      || img.category === activeFilter;
    const searchOk = !q || img.title.toLowerCase().includes(q) || img.category.toLowerCase().includes(q);
    item.classList.toggle("hidden", !(catOk && searchOk));
  });
  filteredImages = images.filter((img, idx) => {
    const catOk = activeFilter === "all"
      || (activeFilter === "favorites" && favorites.has(idx))
      || img.category === activeFilter;
    const searchOk = !q || img.title.toLowerCase().includes(q) || img.category.toLowerCase().includes(q);
    return catOk && searchOk;
  });
}

document.getElementById("filterBar").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.filter;
  applyFilters();
});

document.getElementById("searchInput").addEventListener("input", e => {
  searchQuery = e.target.value;
  applyFilters();
});


// -- Lightbox with swipe ---------------------------------------------------
const lightbox = document.getElementById("lightbox");
const lbTrack  = document.getElementById("lbTrack");
const lbTitle  = document.getElementById("lbTitle");
const lbCat    = document.getElementById("lbCategory");
const lbCounter= document.getElementById("lbCounter");
const lbFav    = document.getElementById("lbFav");
const lbDownload = document.getElementById("lbDownload");

function buildSlides() {
  lbTrack.innerHTML = "";
  [-1, 0, 1].forEach(offset => {
    const idx = (currentIndex + offset + filteredImages.length) % filteredImages.length;
    const data = filteredImages[idx];
    const slide = document.createElement("div");
    slide.className = "lb-slide";
    const im = document.createElement("img");
    im.src = data.src;
    im.alt = data.title;
    slide.appendChild(im);
    lbTrack.appendChild(slide);
  });
  lbTrack.style.transition = "none";
  lbTrack.style.transform = "translateX(-100%)";
}

function updateCaption() {
  const img = filteredImages[currentIndex];
  const globalIndex = images.indexOf(img);
  lbTitle.textContent = img.title;
  lbCat.textContent = img.category;
  lbCounter.textContent = (currentIndex + 1) + " / " + filteredImages.length;
  lbDownload.href = img.src;
  lbDownload.download = img.title.replace(/[^a-z0-9_\-]/gi, "_") + ".jpg";
  lbFav.textContent = favorites.has(globalIndex) ? "💖 Favorited" : "🤍 Favorite";
}

function openLightbox(globalIndex) {
  const fi = filteredImages.findIndex(img => img === images[globalIndex]);
  currentIndex = fi >= 0 ? fi : 0;
  buildSlides();
  updateCaption();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
  document.querySelectorAll(".lb-filter-btn").forEach(b => b.classList.remove("active"));
  document.querySelector('.lb-filter-btn[data-css-filter="none"]').classList.add("active");
}

function navigate(dir) {
  const target = dir === 1 ? "-200%" : "0%";
  lbTrack.style.transition = "transform 0.4s cubic-bezier(0.4,0,0.2,1)";
  lbTrack.style.transform = "translateX(" + target + ")";
  lbTrack.addEventListener("transitionend", () => {
    currentIndex = (currentIndex + dir + filteredImages.length) % filteredImages.length;
    buildSlides();
    updateCaption();
  }, { once: true });
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", () => navigate(-1));
document.getElementById("lbNext").addEventListener("click", () => navigate(1));
lbFav.addEventListener("click", () => {
  const img = filteredImages[currentIndex];
  const globalIndex = images.indexOf(img);
  toggleFav(globalIndex);
  updateCaption();
});
lbDownload.addEventListener("click", e => {
  e.preventDefault();
  const img = filteredImages[currentIndex];
  downloadImage(img.src, `${img.title.replace(/[^a-z0-9_\-]/gi, '_')}.jpg`);
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "ArrowRight") navigate(1);
  if (e.key === "ArrowLeft")  navigate(-1);
  if (e.key === "Escape")     closeLightbox();
});

// CSS filters
document.getElementById("lbFilters").addEventListener("click", e => {
  const btn = e.target.closest(".lb-filter-btn");
  if (!btn) return;
  document.querySelectorAll(".lb-filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const centerImg = lbTrack.children[1] && lbTrack.children[1].querySelector("img");
  if (centerImg) centerImg.style.filter = btn.dataset.cssFilter === "none" ? "" : btn.dataset.cssFilter;
});

// Touch swipe
let touchStartX = 0;
let isDragging = false;

lightbox.addEventListener("touchstart", e => {
  touchStartX = e.touches[0].clientX;
  isDragging = true;
}, { passive: true });

lightbox.addEventListener("touchmove", e => {
  if (!isDragging) return;
  const dx = e.touches[0].clientX - touchStartX;
  lbTrack.style.transition = "none";
  lbTrack.style.transform = "translateX(calc(-100% + " + dx + "px))";
}, { passive: true });

lightbox.addEventListener("touchend", e => {
  if (!isDragging) return;
  isDragging = false;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 60) {
    navigate(dx < 0 ? 1 : -1);
  } else {
    lbTrack.style.transition = "transform 0.3s ease";
    lbTrack.style.transform = "translateX(-100%)";
  }
});

// Init