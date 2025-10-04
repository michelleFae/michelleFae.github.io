// learnWithMe/scripts/blog.js
// Dynamically loads markdown files in the learnWithMe directory, converts to HTML, and displays them with a notepad theme.

// Utility to fetch and render markdown
async function loadMarkdown(filename) {
    // Color themes: main, light, dark, accent, text
    const colorThemes = [
        { name: 'blue', main: '#4a90e2', light: '#e3f0fc', dark: '#2566a8', accent: '#7bb1e0', text: '#183153', h1bg: '#d6eaff', line: '#4a90e2', anim: 'waves' },
        { name: 'orange', main: '#f5a623', light: '#fff3e0', dark: '#b26a00', accent: '#f7b731', text: '#4a2c00', h1bg: '#ffe5b2', line: '#f5a623', anim: 'sunburst' },
        { name: 'green', main: '#7ed957', light: '#eaffea', dark: '#3a7d1c', accent: '#b8e986', text: '#1d3b1a', h1bg: '#e0ffe0', line: '#7ed957', anim: 'leaves' },
        { name: 'purple', main: '#a259e6', light: '#f3eaff', dark: '#5e2d91', accent: '#cfa6f7', text: '#2d1a3a', h1bg: '#f0e0ff', line: '#a259e6', anim: 'sparkle' },
        { name: 'pink', main: '#f76e9a', light: '#ffeaf3', dark: '#a8325e', accent: '#f7b6d2', text: '#3a1a2d', h1bg: '#ffe0f0', line: '#f76e9a', anim: 'hearts' },
        { name: 'teal', main: '#2ed9c3', light: '#e0fffa', dark: '#1a4a3a', accent: '#50e3c2', text: '#183a2d', h1bg: '#e0fff7', line: '#2ed9c3', anim: 'bubbles' },
        { name: 'red', main: '#e94f37', light: '#ffeaea', dark: '#a81d1d', accent: '#ffb3b3', text: '#3a1a1a', h1bg: '#ffd6d6', line: '#e94f37', anim: 'fireworks' },
        { name: 'yellow', main: '#ffe156', light: '#fffbe0', dark: '#b2a600', accent: '#fff7b2', text: '#4a4a00', h1bg: '#fff9d6', line: '#ffe156', anim: 'rays' },
        { name: 'indigo', main: '#5f6caf', light: '#eaeaff', dark: '#2d2d5e', accent: '#b2b7ff', text: '#1a1a3a', h1bg: '#e0e6ff', line: '#5f6caf', anim: 'stars' },
        { name: 'brown', main: '#a9746e', light: '#f7ede2', dark: '#5e3d31', accent: '#d9bfa3', text: '#3a2a1a', h1bg: '#f0e0d6', line: '#a9746e', anim: 'fallingLeaves' },
        { name: 'snow', main: '#b3c6e7', light: '#ffffff', dark: '#6b7a8f', accent: '#eaf4fb', text: '#2d3a4a', h1bg: '#f8fafd', line: '#b3c6e7', anim: 'snow' },
        // New themes below
        { name: 'mint', main: '#98ff98', light: '#eaffea', dark: '#3a7d5c', accent: '#b8ffd9', text: '#1d3b2a', h1bg: '#e0fff0', line: '#98ff98', anim: 'bubbles' },
        { name: 'lavender', main: '#b57edc', light: '#f3eaff', dark: '#6c3483', accent: '#e6ccff', text: '#2d1a3a', h1bg: '#f8eaff', line: '#b57edc', anim: 'sparkle' },
        { name: 'peach', main: '#ffb07c', light: '#fff3e0', dark: '#b26a3a', accent: '#ffe0b2', text: '#4a2c1a', h1bg: '#fff5e6', line: '#ffb07c', anim: 'sunburst' },
        { name: 'aqua', main: '#00e6e6', light: '#e0ffff', dark: '#007a7a', accent: '#b2ffff', text: '#1a3a3a', h1bg: '#e0faff', line: '#00e6e6', anim: 'bubbles' },
        { name: 'rose', main: '#ff66cc', light: '#ffeaf7', dark: '#a8327a', accent: '#ffb6d2', text: '#3a1a2d', h1bg: '#ffe0f7', line: '#ff66cc', anim: 'hearts' },
        { name: 'lime', main: '#caff70', light: '#f6ffe0', dark: '#7a8f34', accent: '#eaffb2', text: '#3a4a1a', h1bg: '#f9ffd6', line: '#caff70', anim: 'leaves' },
        { name: 'midnight', main: '#232946', light: '#121629', dark: '#121629', accent: '#b8c1ec', text: '#eebbc3', h1bg: '#232946', line: '#b8c1ec', anim: 'stars' },
        { name: 'gold', main: '#ffd700', light: '#fffbe0', dark: '#b2a600', accent: '#fff7b2', text: '#4a4a00', h1bg: '#fff9d6', line: '#ffd700', anim: 'rays' },
        { name: 'sky', main: '#87ceeb', light: '#e0f7ff', dark: '#4682b4', accent: '#b2eaff', text: '#1a3a4a', h1bg: '#e0f7ff', line: '#87ceeb', anim: 'waves' },
        { name: 'coral', main: '#ff7f50', light: '#ffeae0', dark: '#b25a3a', accent: '#ffd6cc', text: '#4a2c1a', h1bg: '#fff0e6', line: '#ff7f50', anim: 'fireworks' },
        { name: 'forest', main: '#228b22', light: '#eaffea', dark: '#145214', accent: '#b2ffb2', text: '#1a3a1a', h1bg: '#e0ffe0', line: '#228b22', anim: 'leaves' },
        { name: 'plum', main: '#8e4585', light: '#f3eaff', dark: '#4b2c4a', accent: '#dab6ff', text: '#2d1a2d', h1bg: '#f8eaff', line: '#8e4585', anim: 'sparkle' }
    ];
    // Find the post entry for this filename
    const postEntry = posts.find(p => p.file === filename);
    let theme;
    if (postEntry && postEntry.theme) {
        theme = colorThemes.find(t => t.name === postEntry.theme) || colorThemes[Math.floor(Math.random() * colorThemes.length)];
    } else {
        theme = colorThemes[Math.floor(Math.random() * colorThemes.length)];
    }
    console.log('Theme selected:', theme);
    document.querySelectorAll('.theme-anim-overlay').forEach(el => el.remove());
    // DEBUG: Log theme and animation
    console.log('Theme selected:', theme);
    // If running from /learnWithMe/, fetch as 'example-post.md'.
    // If running from root, fetch as 'learnWithMe/example-post.md'.
    let path = filename;
    if (!window.location.pathname.includes('/learnWithMe/')) {
        path = 'learnWithMe/' + filename;
    }
    const res = await fetch(path);
    if (!res.ok) {
        document.getElementById('blog-content').innerHTML = '<p>Post not found.</p>';
        return;
    }
    const md = await res.text();
    // Use a CDN markdown parser (marked.js)
    let html = md;
    if (window.marked) {
        if (typeof window.marked.parse === 'function') {
            html = window.marked.parse(md);
        } else if (typeof window.marked === 'function') {
            html = window.marked(md);
        }
    }
    // Replace first <h1> with colored h1 and background, and set text color for readability
        html = html.replace(
            /<h1>(.*?)<\/h1>/i,
            `<h1 style="color: ${theme.text}; background: ${theme.h1bg}; border-radius: 8px; box-shadow: 0 2px 8px ${theme.accent}cc; padding: 0.5em 1em; margin-bottom: 1.5em; display: inline-block; border-left: 8px solid ${theme.main}; font-size: 2.2em; letter-spacing: 1px;">$1<\/h1>`
        );
    // Add back button on its own line
        const backBtn = `<div style=\"margin-bottom:1.5em;\"><button id=\"back-btn\" style=\"padding:0.5em 1.2em;background:${theme.light};border:2px solid ${theme.main};border-radius:8px;color:${theme.text};font-size:1em;cursor:pointer;box-shadow:0 2px 8px ${theme.accent}cc;\">← Back to Blog Index</button></div>`;
    document.getElementById('blog-content').innerHTML = backBtn + html;
    document.getElementById('back-btn').onclick = function() {
        window.location.search = '';
    };
    // Hide the main header when viewing a post
    document.querySelector('#notepad h1').style.display = 'none';
    // Apply theme to notepad background, text, and accents
    const notepad = document.getElementById('notepad');
    notepad.style.background = theme.light;
    notepad.style.borderColor = theme.main;
    notepad.style.boxShadow = `0 8px 32px 0 ${theme.accent}33, 0 1.5px 0 ${theme.accent} inset`;
    notepad.style.color = theme.text;
    // Lined paper effect with accent
    notepad.style.backgroundImage = `repeating-linear-gradient(to bottom, transparent, transparent 38px, ${theme.accent} 39px)`;
    // Paper edge shadow
    notepad.style.setProperty('--paper-edge', theme.accent);
    // Change body background to a soft gradient of the theme
    document.body.style.background = `linear-gradient(135deg, ${theme.main} 0%, ${theme.light} 100%)`;
    // Set text color for blog content
    const blogContent = document.getElementById('blog-content');
    blogContent.style.color = theme.text;
    // Change the notepad left bar (vertical line) using inline style
    let notepadBar = document.querySelector('#notepad-bar');
    if (!notepadBar) {
        notepadBar = document.createElement('div');
        notepadBar.id = 'notepad-bar';
        notepadBar.style.position = 'absolute';
        notepadBar.style.left = '32px';
        notepadBar.style.top = '0';
        notepadBar.style.bottom = '0';
        notepadBar.style.width = '6px';
        notepadBar.style.borderRadius = '3px';
        notepadBar.style.zIndex = '1';
        notepad.appendChild(notepadBar);
    }
    notepadBar.style.background = `linear-gradient(to bottom, ${theme.line} 0%, ${theme.accent} 100%)`;
    notepadBar.style.opacity = '0.7';
    // Change all links in the post to be readable and themed
    document.querySelectorAll('#blog-content a').forEach(a => {
        a.style.color = theme.text;
        a.style.textDecorationColor = theme.accent;
        a.onmouseover = () => { a.style.background = theme.accent; a.style.color = theme.main; };
        a.onmouseout = () => { a.style.background = ''; a.style.color = theme.text; };
    });

    // Add animation overlays for each theme
    switch (theme.anim) {
        case 'snow':
            console.log('Adding snow animation overlays');
            for (let i = 0; i < 60; i++) {
                const snow = document.createElement('div');
                snow.className = 'theme-anim-overlay';
                snow.style.position = 'fixed';
                snow.style.left = Math.random() * 100 + 'vw';
                snow.style.top = Math.random() * -20 + 'vh';
                snow.style.width = snow.style.height = (Math.random() * 10 + 8) + 'px';
                snow.style.background = 'white';
                snow.style.borderRadius = '50%';
                snow.style.opacity = Math.random() * 0.6 + 0.4;
                snow.style.pointerEvents = 'none';
                snow.style.zIndex = 2147483647;
                snow.style.transition = 'top 16s linear';
                document.body.appendChild(snow);
                setTimeout(() => {
                    snow.style.top = '110vh';
                }, 100);
                setTimeout(() => snow.remove(), 17000);
            }
            // Repeat snow every 8 seconds
            const snowInterval = setInterval(() => {
                if (!document.querySelector('.theme-anim-overlay')) { clearInterval(snowInterval); return; }
                for (let i = 0; i < 30; i++) {
                    const snow = document.createElement('div');
                    snow.className = 'theme-anim-overlay';
                    snow.style.position = 'fixed';
                    snow.style.left = Math.random() * 100 + 'vw';
                    snow.style.top = Math.random() * -20 + 'vh';
                    snow.style.width = snow.style.height = (Math.random() * 10 + 8) + 'px';
                    snow.style.background = 'white';
                    snow.style.borderRadius = '50%';
                    snow.style.opacity = Math.random() * 0.6 + 0.4;
                    snow.style.pointerEvents = 'none';
                    snow.style.zIndex = 2147483647;
                    snow.style.transition = 'top 16s linear';
                    document.body.appendChild(snow);
                    setTimeout(() => {
                        snow.style.top = '110vh';
                    }, 100);
                    setTimeout(() => snow.remove(), 17000);
                }
            }, 8000);
            break;
        case 'waves':
            console.log('Adding waves animation overlay');
            const wave = document.createElement('div');
            wave.className = 'theme-anim-overlay';
            wave.style.position = 'fixed';
            wave.style.left = 0;
            wave.style.bottom = 0;
            wave.style.width = '100vw';
            wave.style.height = '180px';
            wave.style.background = 'repeating-linear-gradient(135deg, #4a90e233 0 30px, #e3f0fc33 30px 60px)';
            wave.style.animation = 'waveMove 4s linear infinite';
            wave.style.zIndex = 2147483647;
            wave.style.pointerEvents = 'none';
            document.body.appendChild(wave);
            const styleWave = document.createElement('style');
            styleWave.className = 'theme-anim-overlay';
            styleWave.innerHTML = `@keyframes waveMove { 0% { background-position-x: 0; } 100% { background-position-x: 400px; } }`;
            document.head.appendChild(styleWave);
            break;
        case 'sparkle':
            console.log('Adding sparkle animation overlay');
            for (let i = 0; i < 40; i++) {
                const star = document.createElement('div');
                star.className = 'theme-anim-overlay';
                star.style.position = 'fixed';
                star.style.left = Math.random() * 100 + 'vw';
                star.style.top = Math.random() * 100 + 'vh';
                star.style.width = star.style.height = (Math.random() * 8 + 3) + 'px';
                star.style.background = theme.accent;
                star.style.borderRadius = '50%';
                star.style.opacity = Math.random() * 0.7 + 0.3;
                star.style.boxShadow = `0 0 16px 4px ${theme.main}`;
                star.style.pointerEvents = 'none';
                star.style.zIndex = 2147483647;
                star.style.animation = `sparkleAnim 2s linear ${Math.random() * 2}s infinite alternate`;
                document.body.appendChild(star);
            }
            const styleSparkle = document.createElement('style');
            styleSparkle.className = 'theme-anim-overlay';
            styleSparkle.innerHTML = `@keyframes sparkleAnim { 0% { opacity: 0.2; } 100% { opacity: 1; } }`;
            document.head.appendChild(styleSparkle);
            break;
        case 'sunburst':
            console.log('Adding sunburst animation overlay');
            for (let i = 0; i < 16; i++) {
                const ray = document.createElement('div');
                ray.className = 'theme-anim-overlay';
                ray.style.position = 'fixed';
                ray.style.left = '50vw';
                ray.style.top = '10vh';
                ray.style.width = '6px';
                ray.style.height = '120px';
                ray.style.background = theme.accent;
                ray.style.opacity = '0.5';
                ray.style.transform = `rotate(${i * 22.5}deg)`;
                ray.style.transformOrigin = 'bottom center';
                ray.style.zIndex = 2147483647;
                ray.style.pointerEvents = 'none';
                document.body.appendChild(ray);
            }
            break;
        case 'leaves':
            console.log('Adding leaves animation overlay');
            for (let i = 0; i < 24; i++) {
                const leaf = document.createElement('div');
                leaf.className = 'theme-anim-overlay';
                leaf.style.position = 'fixed';
                leaf.style.left = Math.random() * 100 + 'vw';
                leaf.style.top = Math.random() * -20 + 'vh';
                leaf.style.width = '18px';
                leaf.style.height = '10px';
                leaf.style.background = theme.main;
                leaf.style.borderRadius = '50% 50% 50% 50%/60% 60% 40% 40%';
                leaf.style.opacity = Math.random() * 0.5 + 0.5;
                leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
                leaf.style.pointerEvents = 'none';
                leaf.style.zIndex = 2147483647;
                leaf.style.transition = 'top 12s linear, left 12s linear';
                document.body.appendChild(leaf);
                setTimeout(() => {
                    leaf.style.top = '110vh';
                    leaf.style.left = (parseFloat(leaf.style.left) + (Math.random() * 20 - 10)) + 'vw';
                }, 100);
                setTimeout(() => leaf.remove(), 13000);
            }
            break;
        case 'hearts':
            console.log('Adding hearts animation overlay');
            for (let i = 0; i < 30; i++) {
                const heart = document.createElement('div');
                heart.className = 'theme-anim-overlay';
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = Math.random() * 100 + 'vh';
                heart.style.width = '18px';
                heart.style.height = '18px';
                heart.style.background = 'transparent';
                heart.style.zIndex = 2147483647;
                heart.style.pointerEvents = 'none';
                heart.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18"><path d="M9 15s-6-4.35-6-8.25A3.75 3.75 0 0 1 9 3a3.75 3.75 0 0 1 6 3.75C15 10.65 9 15 9 15z" fill="${theme.main}"/></svg>`;
                document.body.appendChild(heart);
            }
            break;
        case 'bubbles':
            console.log('Adding bubbles animation overlay');
            for (let i = 0; i < 30; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'theme-anim-overlay';
                bubble.style.position = 'fixed';
                bubble.style.left = Math.random() * 100 + 'vw';
                bubble.style.top = Math.random() * 100 + 'vh';
                bubble.style.width = bubble.style.height = (Math.random() * 18 + 8) + 'px';
                bubble.style.background = theme.accent;
                bubble.style.borderRadius = '50%';
                bubble.style.opacity = Math.random() * 0.4 + 0.3;
                bubble.style.pointerEvents = 'none';
                bubble.style.zIndex = 2147483647;
                bubble.style.animation = `bubbleAnim 6s linear ${Math.random() * 2}s infinite alternate`;
                document.body.appendChild(bubble);
            }
            const styleBubbles = document.createElement('style');
            styleBubbles.className = 'theme-anim-overlay';
            styleBubbles.innerHTML = `@keyframes bubbleAnim { 0% { transform: translateY(0); } 100% { transform: translateY(-60px); } }`;
            document.head.appendChild(styleBubbles);
            break;
        case 'fireworks':
            console.log('Adding fireworks animation overlay');
            for (let i = 0; i < 10; i++) {
                const firework = document.createElement('div');
                firework.className = 'theme-anim-overlay';
                firework.style.position = 'fixed';
                firework.style.left = Math.random() * 100 + 'vw';
                firework.style.top = Math.random() * 60 + 'vh';
                firework.style.width = '6px';
                firework.style.height = '60px';
                firework.style.background = `linear-gradient(to top, ${theme.main}, transparent)`;
                firework.style.opacity = '0.7';
                firework.style.transform = `rotate(${Math.random() * 360}deg)`;
                firework.style.zIndex = 2147483647;
                firework.style.pointerEvents = 'none';
                document.body.appendChild(firework);
            }
            break;
        case 'rays':
            console.log('Adding rays animation overlay');
            for (let i = 0; i < 20; i++) {
                const ray = document.createElement('div');
                ray.className = 'theme-anim-overlay';
                ray.style.position = 'fixed';
                ray.style.left = '50vw';
                ray.style.top = '10vh';
                ray.style.width = '4px';
                ray.style.height = '100px';
                ray.style.background = theme.main;
                ray.style.opacity = '0.3';
                ray.style.transform = `rotate(${i * 18}deg)`;
                ray.style.transformOrigin = 'bottom center';
                ray.style.zIndex = 2147483647;
                ray.style.pointerEvents = 'none';
                document.body.appendChild(ray);
            }
            break;
        case 'stars':
            console.log('Adding stars animation overlay');
            for (let i = 0; i < 40; i++) {
                const star = document.createElement('div');
                star.className = 'theme-anim-overlay';
                star.style.position = 'fixed';
                star.style.left = Math.random() * 100 + 'vw';
                star.style.top = Math.random() * 100 + 'vh';
                star.style.width = star.style.height = (Math.random() * 6 + 2) + 'px';
                star.style.background = theme.accent;
                star.style.borderRadius = '50%';
                star.style.opacity = Math.random() * 0.7 + 0.3;
                star.style.boxShadow = `0 0 12px 2px ${theme.main}`;
                star.style.pointerEvents = 'none';
                star.style.zIndex = 2147483647;
                document.body.appendChild(star);
            }
            break;
        case 'fallingLeaves':
            console.log('Adding falling leaves animation overlay');
            for (let i = 0; i < 24; i++) {
                const leaf = document.createElement('div');
                leaf.className = 'theme-anim-overlay';
                leaf.style.position = 'fixed';
                leaf.style.left = Math.random() * 100 + 'vw';
                leaf.style.top = Math.random() * -20 + 'vh';
                leaf.style.width = '18px';
                leaf.style.height = '10px';
                leaf.style.background = theme.main;
                leaf.style.borderRadius = '50% 50% 50% 50%/60% 60% 40% 40%';
                leaf.style.opacity = Math.random() * 0.5 + 0.5;
                leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
                leaf.style.pointerEvents = 'none';
                leaf.style.zIndex = 2147483647;
                leaf.style.transition = 'top 12s linear, left 12s linear';
                document.body.appendChild(leaf);
                setTimeout(() => {
                    leaf.style.top = '110vh';
                    leaf.style.left = (parseFloat(leaf.style.left) + (Math.random() * 20 - 10)) + 'vw';
                }, 100);
                setTimeout(() => leaf.remove(), 13000);
            }
            break;
        default:
            break;
    }
}

// ADD MORE BLOG POSTS HERE // TODO
// List all .md files in the learnWithMe directory (static list for now)
const posts = [
    { file: 'apps-that-use-models.md', title: 'Apps That Use Models', theme: 'snow' }
    // Add more posts here as you add .md files
];

function renderIndex() {
    const list = posts.map(post => `<li><a href="?post=${encodeURIComponent(post.file)}">${post.title}</a></li>`).join('');
    document.getElementById('blog-index').innerHTML = `<ul>${list}</ul>`;
}

function main() {
    const params = new URLSearchParams(window.location.search);
    const post = params.get('post');
    if (post) {
        document.getElementById('blog-index').style.display = 'none';
        document.getElementById('blog-content').style.display = 'block';
        loadMarkdown(post);
    } else {
        document.getElementById('blog-index').style.display = 'block';
        document.getElementById('blog-content').style.display = 'none';
        renderIndex();
        // Show the main header when on index
        document.querySelector('#notepad h1').style.display = '';
    // Reset notepad and body background to default blue theme
    const notepad = document.getElementById('notepad');
    notepad.style.background = '';
    notepad.style.borderColor = '';
    notepad.style.boxShadow = '';
    notepad.style.backgroundImage = '';
    document.body.style.background = '';
    // Remove the custom notepad bar if present
    const notepadBar = document.getElementById('notepad-bar');
    if (notepadBar) notepadBar.remove();
    // Remove any animation overlays
    document.querySelectorAll('.theme-anim-overlay').forEach(el => el.remove());
    }
}

document.addEventListener('DOMContentLoaded', main);
