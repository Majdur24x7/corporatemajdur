// schema.js - Ye file dono pages mein auto load hoga

document.addEventListener('DOMContentLoaded', function() {
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Corporate Majdur",
        "description": "Hilarious corporate memes and office jokes platform for Indian corporate employees",
        "url": "https://corporatemajdur.com",
        "image": "https://corporatemajdur.com/logo.png",
        "author": {
            "@type": "Organization",
            "name": "Corporate Majdur",
            "logo": "https://corporatemajdur.com/logo.png"
        },
        "sameAs": [
            "https://instagram.com/corporatemajdur",
            "https://facebook.com/corporatemajdur",
            "https://twitter.com/corporatemajdur"
        ],
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://corporatemajdur.com/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };
    
    // Script tag create karo
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);
});
