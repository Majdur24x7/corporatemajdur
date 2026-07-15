console.log("Corporate Majdur Loaded 🚀");

// Variable shuruat mein
let currentCount = 4;
let allStoriesData = []; // Ye variable aapke data ke liye hai

// Function jo cards banayega
function displayStories(stories) {
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; 
    
    stories.slice(0, currentCount).forEach(story => {
        const card = document.createElement('div');
        card.className = "p-6 border border-slate-800 rounded-xl bg-slate-900";
        card.innerHTML = `
            <div class="w-full h-32 bg-gradient-to-br rounded-xl mb-4 flex items-center justify-center border border-slate-800/50">
                <i class="fa-solid fa-quote-left text-2xl opacity-60"></i>
            </div>
            <span class="text-xs font-semibold bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-md">${story.tag}</span>
            <p class="text-xs sm:text-sm text-slate-300 font-light mt-4 leading-relaxed break-words">${story.content}</p>
            <div class="px-6 py-4 bg-slate-950/40 border-t border-slate-800/60 text-[10px] text-slate-500 flex justify-between">
                <span>By: ${story.author}</span>
                <span>Verified Majdur</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// "Load More" button click hone par
document.getElementById('load-more-btn').addEventListener('click', () => {
    currentCount += 4;
    displayStories(allStoriesData);
});
