document.addEventListener('DOMContentLoaded', () => {
    console.log("Jai Shri Krishna! 🙏 — Welcome to Vrindavan Experience");

    /* =========================================
       1. PRELOADER
       ========================================= */
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('hidden');
            }
        }, 2500); // Show lotus bloom for 2.5 seconds
    });

    // Fallback: hide preloader after 5 seconds no matter what
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('hidden')) {
            preloader.classList.add('hidden');
        }
    }, 5000);

    /* =========================================
       2. NAVIGATION & MOBILE MENU
       ========================================= */
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('mainNav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinksContainer.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) menuToggle.classList.remove('is-active');
            if (navLinksContainer) navLinksContainer.classList.remove('active');
        });
    });

    // Navbar shrink on scroll
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (navbar) {
            if (scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        lastScrollY = scrollY;
    }, { passive: true });

    /* =========================================
       3. SMOOTH SCROLLING (With Header Offset)
       ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
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
       4. TYPEWRITER EFFECT FOR SHLOKA
       ========================================= */
    const shlokaElement = document.getElementById('shlokaText');
    const shlokaFullText = '"Tapta-kanchana-gaurangi Radhe Vrindavaneshvari\nVrishabhanu-sute Devi Pranamami Hari-Priye"';
    
    if (shlokaElement) {
        let charIndex = 0;
        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';
        shlokaElement.appendChild(cursor);

        function typeShloka() {
            if (charIndex < shlokaFullText.length) {
                const char = shlokaFullText[charIndex];
                if (char === '\n') {
                    shlokaElement.insertBefore(document.createElement('br'), cursor);
                } else {
                    shlokaElement.insertBefore(document.createTextNode(char), cursor);
                }
                charIndex++;
                
                // Variable speed: slower on punctuation
                const delay = (char === ',' || char === '"') ? 120 : 
                              (char === ' ') ? 60 : 50;
                setTimeout(typeShloka, delay);
            } else {
                // Remove cursor after typing completes, with a delay
                setTimeout(() => {
                    cursor.style.animation = 'none';
                    cursor.style.opacity = '0';
                    cursor.style.transition = 'opacity 1s ease';
                }, 2000);
            }
        }

        // Start typing after preloader fades
        setTimeout(typeShloka, 3000);
    }

    /* =========================================
       5. FIREFLY CANVAS ANIMATION
       ========================================= */
    const canvas = document.getElementById('fireflyCanvas');
    
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let fireflies = [];
        const FIREFLY_COUNT = 40;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Firefly {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.fadeSpeed = Math.random() * 0.01 + 0.003;
                this.fadeDirection = 1;
                this.hue = Math.random() > 0.7 ? 45 : (Math.random() > 0.5 ? 35 : 50); // Gold/amber range
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Gentle floating oscillation
                this.x += Math.sin(Date.now() * 0.001 + this.y * 0.01) * 0.2;
                this.y += Math.cos(Date.now() * 0.001 + this.x * 0.01) * 0.15;

                // Pulsing glow
                this.opacity += this.fadeSpeed * this.fadeDirection;
                if (this.opacity >= 0.8) this.fadeDirection = -1;
                if (this.opacity <= 0.05) this.fadeDirection = 1;

                // Wrap around screen
                if (this.x < -20) this.x = canvas.width + 20;
                if (this.x > canvas.width + 20) this.x = -20;
                if (this.y < -20) this.y = canvas.height + 20;
                if (this.y > canvas.height + 20) this.y = -20;
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                
                // Outer glow
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 6
                );
                gradient.addColorStop(0, `hsla(${this.hue}, 100%, 70%, 0.6)`);
                gradient.addColorStop(0.4, `hsla(${this.hue}, 100%, 60%, 0.2)`);
                gradient.addColorStop(1, 'transparent');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 6, 0, Math.PI * 2);
                ctx.fill();

                // Core
                ctx.fillStyle = `hsla(${this.hue}, 100%, 85%, 1)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        // Initialize fireflies
        for (let i = 0; i < FIREFLY_COUNT; i++) {
            fireflies.push(new Firefly());
        }

        function animateFireflies() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            fireflies.forEach(ff => {
                ff.update();
                ff.draw();
            });

            requestAnimationFrame(animateFireflies);
        }

        animateFireflies();
    }

    /* =========================================
       6. MAGIC MOUSE SPARKLES (Enhanced)
       ========================================= */
    let sparkleThrottle = 0;
    document.addEventListener('mousemove', function(e) {
        // Performance: throttle sparkle creation
        const now = Date.now();
        if (now - sparkleThrottle < 50) return;
        sparkleThrottle = now;
        
        if(window.innerWidth < 768 && Math.random() > 0.3) return;

        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        document.body.appendChild(sparkle);
        
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        
        const plusMinus = Math.random() > 0.5 ? 1 : -1;
        sparkle.style.transform = `translate(${Math.random() * 20 * plusMinus}px, ${Math.random() * 20}px)`;

        setTimeout(() => sparkle.remove(), 1000);
    });

    /* =========================================
       7. FLOWER SHOWER LOGIC
       ========================================= */
    const petalBtn = document.getElementById('petalBtn');
    let petalInterval;
    let isRaining = false;

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        const flowers = ['🌸', '🌼', '🌺', '🌷', '🪷'];
        petal.innerText = flowers[Math.floor(Math.random() * flowers.length)]; 
        
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.fontSize = Math.random() * 20 + 15 + 'px';
        petal.style.animationDuration = Math.random() * 3 + 4 + 's';
        
        document.body.appendChild(petal);
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
       8. AUDIO PLAYER
       ========================================= */
    const audioBtn = document.getElementById('audioBtn');
    const audio = document.getElementById('bgMusic');

    if (audioBtn && audio) {
        audio.volume = 0.4;

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
        if (!audioBtn) return;
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
       9. INTERACTIVE DIYA (Enhanced Flame)
       ========================================= */
    const diyaContainer = document.getElementById('diyaContainer');
    const flame = document.getElementById('flame');
    const chantText = document.getElementById('chantText');
    const offeringSection = document.getElementById('offering');

    if (diyaContainer) {
        diyaContainer.addEventListener('click', () => {
            const isLit = flame.classList.toggle('lit');
            const diyaGlow = diyaContainer.querySelector('.diya-glow');
            
            if (isLit) {
                chantText.style.opacity = '1';
                chantText.style.transform = 'translateY(0)';
                diyaContainer.style.filter = "drop-shadow(0 0 25px rgba(255, 111, 0, 0.6))";
                
                // Illuminate section
                if (offeringSection) {
                    offeringSection.classList.add('illuminated');
                }
                
                // Show diya glow
                if (diyaGlow) {
                    diyaGlow.style.opacity = '1';
                }
            } else {
                chantText.style.opacity = '0';
                chantText.style.transform = 'translateY(20px)';
                diyaContainer.style.filter = "none";
                
                if (offeringSection) {
                    offeringSection.classList.remove('illuminated');
                }
                
                if (diyaGlow) {
                    diyaGlow.style.opacity = '0';
                }
            }
        });
    }

    /* =========================================
       10. DIVINE MYSTERY BOX
       ========================================= */
    const blessingBox = document.getElementById('blessingBox');
    const blessingMsg = document.getElementById('blessingMsg');
    const divineRays = document.querySelector('.divine-rays');

    if (blessingBox) {
        blessingBox.addEventListener('click', function() {
            if(this.classList.contains('opened')) return;

            this.classList.add('opened');
            
            // Activate divine rays
            if (divineRays) {
                divineRays.classList.add('rays-active');
            }
            
            // Show the hidden message
            setTimeout(() => {
                blessingMsg.style.opacity = 1;
                blessingMsg.style.transform = 'translateY(0)';
            }, 500);

            // Spawn particles
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    createBlessingParticle(centerX + window.scrollX, centerY + window.scrollY);
                }, i * 10);
            }
        });
    }

    function createBlessingParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('blessing-particle');
        
        const items = ['🌸', '🌼', '🌺', '🌷', '✨', '🪶', '🪶', '🪷', '⭐']; 
        const item = items[Math.floor(Math.random() * items.length)];
        particle.textContent = item;
        
        if (item === '🪶') {
            particle.classList.add('morpankh-style');
        }

        const randomAngle = Math.random() * Math.PI * 2;
        const velocity = 120 + Math.random() * 250; 
        
        const tx = Math.cos(randomAngle) * velocity;
        const ty = (Math.sin(randomAngle) * velocity) - 180;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.setProperty('--rot', `${Math.random() * 720}deg`);
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 2000);
    }

    /* =========================================
       11. GLOBAL CLICK CHANT ("Radhe Krishna")
       ========================================= */
    document.addEventListener('click', function(e) {
        if (e.target.closest('button') || e.target.closest('input') || 
            e.target.closest('textarea') || e.target.closest('.control-btn') ||
            e.target.closest('.thali-btn') || e.target.closest('a') ||
            e.target.closest('.nav-link') || e.target.closest('.menu-toggle')) return;
        
        createClickChant(e.pageX, e.pageY);
    });

    const chants = ['Radhe Krishna', 'Jai Shri Krishna', 'Radhe Radhe', 'Hare Krishna'];
    
    function createClickChant(x, y) {
        const chant = document.createElement('div');
        chant.classList.add('click-chant');
        chant.innerText = chants[Math.floor(Math.random() * chants.length)];
        
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
       12. 3D CARD TILT EFFECT
       ========================================= */
    const cards = document.querySelectorAll('.leela-card');
    
    cards.forEach(card => {
        if (window.matchMedia("(min-width: 769px)").matches) {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        }
    });

    /* =========================================
       13. BUTTON RIPPLE EFFECT
       ========================================= */
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .control-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    /* =========================================
       14. SCROLL-TRIGGERED ANIMATIONS
       ========================================= */
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, parseInt(delay));
                
                // Stop observing once animated
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => scrollObserver.observe(el));

    /* =========================================
       15. STAR FIELD GENERATION
       ========================================= */
    const starField = document.querySelector('.star-field');
    
    if (starField) {
        for (let i = 0; i < 60; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = Math.random() * 3 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = Math.random() * 3 + 2 + 's';
            starField.appendChild(star);
        }
    }

    /* =========================================
       16. FLOATING DECORATIONS
       ========================================= */
    const floatingContainer = document.getElementById('floatingDecorations');
    
    if (floatingContainer && window.innerWidth > 768) {
        const decoSymbols = ['🪷', 'ॐ', '🪶', '✨', '🌸'];
        
        for (let i = 0; i < 8; i++) {
            const deco = document.createElement('div');
            deco.classList.add('float-deco');
            deco.textContent = decoSymbols[Math.floor(Math.random() * decoSymbols.length)];
            deco.style.left = Math.random() * 90 + 5 + '%';
            deco.style.top = Math.random() * 80 + 10 + '%';
            deco.style.fontSize = Math.random() * 1.5 + 1 + 'rem';
            deco.style.animationDelay = Math.random() * 10 + 's';
            deco.style.animationDuration = Math.random() * 10 + 12 + 's';
            floatingContainer.appendChild(deco);
        }
    }

    /* =========================================
       17. SCROLL TO TOP BUTTON
       ========================================= */
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* =========================================
       18. SACRED DIVIDER LINE DRAW ON SCROLL
       ========================================= */
    const dividerLines = document.querySelectorAll('.divider-line');
    
    const dividerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'drawLine 2s ease forwards';
                dividerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    dividerLines.forEach(line => {
        // Reset animation initially
        line.style.animation = 'none';
        line.style.strokeDashoffset = '1200';
        dividerObserver.observe(line);
    });

});