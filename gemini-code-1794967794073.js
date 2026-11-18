// یہاں اپنی پروڈکٹس اور اپنے ایفिलिएट یا سٹور کے لنکس شامل کریں
const products = [
    {
        id: 1,
        title: "2-in-1 Rechargeable Pocket Hand Warmer & Power Bank",
        category: "winter",
        badge: "🔥 Winter Bestseller",
        price: "$24.99",
        oldPrice: "$45.00",
        rating: "4.9 (1.2k)",
        description: "Heats up in 3 seconds with 3 temperature levels. Doubles as a 5000mAh emergency phone charger.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        buyLink: "https://your-affiliate-or-store-link.com/hand-warmer"
    },
    {
        id: 2,
        title: "Cozy Microwavable Warm Yarn Plushie",
        category: "plush",
        badge: "🎁 Top Gift Idea",
        price: "$29.99",
        oldPrice: "$49.99",
        rating: "4.8 (850)",
        description: "Ultra-soft handcrafted feel. Warm it for 60 seconds for soothing winter comfort and stress relief.",
        image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=80",
        buyLink: "https://your-affiliate-or-store-link.com/warm-plushie"
    },
    {
        id: 3,
        title: "Smart Auto-Rolling Interactive Pet Ball",
        category: "pets",
        badge: "🐾 Pet Favorite",
        price: "$19.99",
        oldPrice: "$34.99",
        rating: "4.7 (640)",
        description: "Keeps indoor cats and dogs active automatically. Smart obstacle avoidance and USB-C rechargeable.",
        image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80",
        buyLink: "https://your-affiliate-or-store-link.com/pet-ball"
    },
    {
        id: 4,
        title: "Eye-Care LED Monitor Light Bar",
        category: "desk",
        badge: "💻 WFH Essential",
        price: "$34.99",
        oldPrice: "$59.00",
        rating: "4.9 (930)",
        description: "Zero screen glare design. Clips onto any monitor to light up your desk cleanly without eye strain.",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
        buyLink: "https://your-affiliate-or-store-link.com/light-bar"
    },
    {
        id: 5,
        title: "Cordless Mini Portable Car Tire Inflator",
        category: "desk",
        badge: "🚗 Must-Have",
        price: "$39.99",
        oldPrice: "$69.99",
        rating: "4.8 (1.5k)",
        description: "Digital pressure gauge with auto shut-off. Fits in your glovebox or backpack for cars, bikes, and balls.",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80",
        buyLink: "https://your-affiliate-or-store-link.com/tire-inflator"
    }
];

// پروڈکٹس کو اسکرین پر دکھانے کا فنکشن
function renderProducts(filter = 'all') {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    const filtered = filter === 'all' 
        ? products 
        : products.filter(item => item.category === filter);

    filtered.forEach(product => {
        const card = `
            <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 overflow-hidden flex flex-col">
                <div class="relative">
                    <img src="${product.image}" alt="${product.title}" class="w-full h-56 object-cover">
                    <span class="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                        ${product.badge}
                    </span>
                </div>
                <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center text-xs text-amber-500 font-bold mb-2">
                            <i class="fa-solid fa-star mr-1"></i> ${product.rating}
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 leading-snug">${product.title}</h3>
                        <p class="text-slate-500 text-sm mt-2 line-clamp-2">${product.description}</p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-slate-100">
                        <div class="flex items-baseline justify-between mb-4">
                            <div>
                                <span class="text-2xl font-extrabold text-slate-900">${product.price}</span>
                                <span class="text-sm text-slate-400 line-through ml-2">${product.oldPrice}</span>
                            </div>
                            <span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">In Stock</span>
                        </div>
                        <a href="${product.buyLink}" target="_blank" rel="noopener noreferrer" 
                           class="block w-full text-center bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl shadow-md shadow-rose-600/20 transition">
                            Check Deal Now <i class="fa-solid fa-arrow-up-right-from-square ml-1 text-xs"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// کیٹیگری فلٹر بٹن کا فنکشن
function filterProducts(category) {
    renderProducts(category);
    
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-rose-600', 'text-white');
        btn.classList.add('bg-white', 'text-slate-700');
    });
    
    event.target.classList.remove('bg-white', 'text-slate-700');
    event.target.classList.add('bg-rose-600', 'text-white');
}

// کاؤنٹ ڈاؤن ٹائمر
function startCountdown(seconds) {
    const timerEl = document.getElementById('timer');
    setInterval(() => {
        if (seconds <= 0) seconds = 18000;
        seconds--;
        const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        timerEl.textContent = `${h}:${m}:${s}`;
    }, 1000);
}

// پیج لوڈ ہونے پر چلائیں
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    startCountdown(17999);
});