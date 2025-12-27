document.addEventListener('DOMContentLoaded', () => {
    console.log("Jai Shri Krishna! 🙏 — Welcome to Vrindavan Experience");

    /* =========================================
       1. NAVIGATION & MOBILE MENU
       ========================================= */
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinksContainer.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navLinksContainer.classList.remove('active');
        });
    });

    /* =========================================
       2. SMOOTH SCROLLING (With Header Offset)
       ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust this value based on your navbar height (80px in CSS)
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    /* =========================================
       3. MAGIC MOUSE SPARKLES
       ========================================= */
    document.addEventListener('mousemove', function(e) {
        // Performance optimization: fewer sparkles on mobile
        if(window.innerWidth < 768 && Math.random() > 0.3) return;

        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        document.body.appendChild(sparkle);
        
        // Position at cursor
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        
        // Random slight movement
        const plusMinus = Math.random() > 0.5 ? 1 : -1;
        sparkle.style.transform = `translate(${Math.random() * 20 * plusMinus}px, ${Math.random() * 20}px)`;

        // Cleanup
        setTimeout(() => sparkle.remove(), 1000);
    });

    /* =========================================
       4. FLOWER SHOWER LOGIC
       ========================================= */
    const petalBtn = document.getElementById('petalBtn');
    let petalInterval;
    let isRaining = false;

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        // Randomly choose between flower types
        petal.innerText = Math.random() > 0.5 ? '🌸' : '🌼'; 
        
        // Random positioning
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.fontSize = Math.random() * 20 + 15 + 'px';
        petal.style.animationDuration = Math.random() * 3 + 4 + 's';
        
        document.body.appendChild(petal);

        // Remove after animation
        setTimeout(() => petal.remove(), 7000);
    }

    if (petalBtn) {
        petalBtn.addEventListener('click', () => {
            isRaining = !isRaining;
            if (isRaining) {
                petalInterval = setInterval(createPetal, 300);
                petalBtn.classList.add('active');
                const span = petalBtn.querySelector('span');
                if(span) span.textContent = 'Stop Flowers';
            } else {
                clearInterval(petalInterval);
                petalBtn.classList.remove('active');
                const span = petalBtn.querySelector('span');
                if(span) span.textContent = 'Flower Shower';
            }
        });
    }

    /* =========================================
       5. AUDIO PLAYER
       ========================================= */
    const audioBtn = document.getElementById('audioBtn');
    const audio = document.getElementById('bgMusic');

    if (audioBtn && audio) {
        audio.volume = 0.4; // Set gentle volume

        audioBtn.addEventListener('click', () => {
            if (audio.paused) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        updateAudioUI(true);
                    }).catch(error => {
                        console.log("Audio play prevented:", error);
                        alert("Please interact with the page first or check if 'flute.mp3' exists.");
                        updateAudioUI(false); 
                    });
                }
            } else {
                audio.pause();
                updateAudioUI(false);
            }
        });
    }

    function updateAudioUI(isPlaying) {
        const icon = audioBtn.querySelector('i');
        const text = audioBtn.querySelector('span');
        
        if (isPlaying) {
            audioBtn.classList.add('active');
            if(icon) icon.className = 'ri-pause-fill';
            if(text) text.textContent = 'Pause Flute';
        } else {
            audioBtn.classList.remove('active');
            if(icon) icon.className = 'ri-music-fill';
            if(text) text.textContent = 'Play Flute';
        }
    }

    /* =========================================
       6. INTERACTIVE DIYA (LAMP)
       ========================================= */
    const diyaContainer = document.getElementById('diyaContainer');
    const flame = document.getElementById('flame');
    const chantText = document.getElementById('chantText');

    if (diyaContainer) {
        diyaContainer.addEventListener('click', () => {
            const isLit = flame.classList.toggle('lit');
            if (isLit) {
                chantText.style.opacity = '1';
                chantText.style.transform = 'translateY(0)';
                diyaContainer.style.filter = "drop-shadow(0 0 15px rgba(255, 111, 0, 0.6))";
            } else {
                chantText.style.opacity = '0';
                chantText.style.transform = 'translateY(20px)';
                diyaContainer.style.filter = "none";
            }
        });
    }

    /* =========================================
       7. DIVINE MYSTERY BOX
       ========================================= */
    const blessingBox = document.getElementById('blessingBox');
    const blessingMsg = document.getElementById('blessingMsg');

    if (blessingBox) {
        blessingBox.addEventListener('click', function() {
            // Prevent re-opening animation
            if(this.classList.contains('opened')) return;

            this.classList.add('opened');
            
            // Show the hidden message
            setTimeout(() => {
                blessingMsg.style.opacity = 1;
                blessingMsg.style.transform = 'translateY(0)';
            }, 500);

            // Spawn particles
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            for (let i = 0; i < 40; i++) {
                // Stagger creation slightly for better effect
                setTimeout(() => {
                    createBlessingParticle(centerX + window.scrollX, centerY + window.scrollY);
                }, i * 10);
            }
        });
    }

    // Shared Particle Creator (Used by Box and Prayer)
    function createBlessingParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('blessing-particle');
        
        const items = ['🌸', '🌼', '🌺', '🌷', '✨', '🪶', '🪶']; 
        const item = items[Math.floor(Math.random() * items.length)];
        particle.textContent = item;
        
        if (item === '🪶') {
            particle.classList.add('morpankh-style');
        }

        // Random trajectory math
        const randomAngle = Math.random() * Math.PI * 2;
        const velocity = 100 + Math.random() * 200; 
        
        const tx = Math.cos(randomAngle) * velocity;
        const ty = (Math.sin(randomAngle) * velocity) - 150; // Bias upwards

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.setProperty('--rot', `${Math.random() * 720}deg`);
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    }

    /* =========================================
       8. GLOBAL CLICK CHANT ("Radhe Krishna")
       ========================================= */
    document.addEventListener('click', function(e) {
        // Prevent chant appearing when clicking buttons or inputs to avoid visual clutter
        if (e.target.closest('button') || e.target.closest('input') || e.target.closest('textarea') || e.target.closest('.control-btn')) return;
        
        createClickChant(e.pageX, e.pageY);
    });

    function createClickChant(x, y) {
        const chant = document.createElement('div');
        chant.classList.add('click-chant');
        chant.innerText = 'Radhe Krishna';
        
        // Float direction
        const tx = (Math.random() - 0.5) * 80; 
        const ty = -80 - Math.random() * 50;   
        const rot = (Math.random() - 0.5) * 20;

        chant.style.setProperty('--tx', `${tx}px`);
        chant.style.setProperty('--ty', `${ty}px`);
        chant.style.setProperty('--rot', `${rot}deg`);
        
        chant.style.left = x + 'px';
        chant.style.top = y + 'px';

        document.body.appendChild(chant);
        setTimeout(() => chant.remove(), 1500);
    }

    /* =========================================
       9. 3D CARD TILT EFFECT
       ========================================= */
    const cards = document.querySelectorAll('.leela-card');
    
    cards.forEach(card => {
        // Only apply tilt on desktop devices to save battery/resources on mobile
        if (window.matchMedia("(min-width: 769px)").matches) {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        }
    });

    /* =========================================
       10. BUTTON RIPPLE EFFECT
       ========================================= */
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .control-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

});