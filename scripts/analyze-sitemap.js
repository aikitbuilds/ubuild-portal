const fs = require('fs');

try {
    const xml = fs.readFileSync('sitemap.xml', 'utf8');

    // Extract URLs located in <loc> tags
    const urls = [];
    const regex = /<url>[\s\S]*?<loc>(.*?)<\/loc>[\s\S]*?<\/url>/g;
    let match;

    while ((match = regex.exec(xml)) !== null) {
        urls.push(match[1]);
    }

    // Categories
    const categories = {
        "Races": [],
        "Volunteer": [],
        "About": [],
        "Results": [],
        "Blog/News": [],
        "Store": [],
        "Policy/Legal": [],
        "Other": []
    };

    const raceKeywords = [
        '/races', '/wheretorun', 'ultra', 'marathon', 'relay',
        'rocky', 'bandera', 'cactus', 'spider', 'mosaic', 'capt-karl', 'jandj',
        'wildflower', 'pandora', 'hbef', 'camp-eagle', 'enchanted', 'possum',
        'chupacabra', 'tinajas', 'dynasty', 'stampede', 'flat-rock', 'challenge'
    ];

    urls.forEach(url => {
        const lowerUrl = url.toLowerCase();
        // key fix: match against path only
        const path = lowerUrl.replace('https://www.tejastrails.com', '').replace('http://www.tejastrails.com', '');

        // Check categories in priority order
        if (raceKeywords.some(kw => path.includes(kw))) {
            categories["Races"].push(url);
        } else if (path.includes('volunteer')) {
            categories["Volunteer"].push(url);
        } else if (path.includes('about') || path.includes('contact') || path.includes('our-story') || path.includes('staff')) {
            categories["About"].push(url);
        } else if (path.includes('results')) {
            categories["Results"].push(url);
        } else if (path.includes('blog') || path.includes('news')) {
            categories["Blog/News"].push(url);
        } else if (path.includes('store') || path.includes('shop') || path.includes('merch') || path.includes('cart')) {
            categories["Store"].push(url);
        } else if (path.includes('policy') || path.includes('waiver') || path.includes('rules') || path.includes('privacy')) {
            categories["Policy/Legal"].push(url);
        } else {
            categories["Other"].push(url);
        }
    });

    // Prepare output
    const output = {};
    let totalCount = 0;
    for (const [cat, list] of Object.entries(categories)) {
        output[cat] = {
            count: list.length,
            examples: list.slice(0, 5)
        };
        totalCount += list.length;
    }

    // console.log("Total URLs:", totalCount); // Optional debug
    console.log(JSON.stringify(output, null, 2));

} catch (err) {
    console.error("Error parsing sitemap:", err);
}
