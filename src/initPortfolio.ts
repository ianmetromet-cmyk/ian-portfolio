// @ts-nocheck
export function initPortfolio(): void {
  const w = window;
  if (w.__portfolioInitialized) return;
  w.__portfolioInitialized = true;
// ─── TRANSLATIONS & BILINGUAL TOGGLE ────────────────────────────────

    const translations = {

        en: {

            nav_campaigns: "Campaigns", nav_media: "Media", doc_opeds_title: "OP-EDS", nav_profile: "Profile", nav_contact: "Contact", nav_resume: "Resume",

            hero_tag: "SENIOR COMMUNICATIONS STRATEGIST", scroll: "SCROLL",

            hero_word1: "DRIVING", hero_word2: "NARRATIVES.", hero_word3: "WINNING", hero_word4: "CAMPAIGNS.",

            hero_typing: "Labor, racial justice & public interest campaigns — over a decade advancing frontline voices and shaping policy outcomes.",

            btn_contact: "GET IN TOUCH", btn_work: "VIEW STRATEGY",

            stat_01: "VERIFIED AUDIENCE REACH", stat_02: "STRIKE AUTHORIZATION SUCCESS", stat_03: "ENGAGEMENT & CONVERSION", stat_04: "IMPACTED WORKFORCE MEMBERS",

            comp_head: "COMPETENCIES",

            comp1_tit: "PUBLIC POLICY & SYSTEMS IMPACT", comp1_des: "Architected inside-outside campaigns bridging labor, private sector consultants, and executive municipal offices to drive policy. Secured pivotal endorsements and navigated complex legislative landscapes to protect vital community services.",

            comp2_tit: "EQUITY & BILINGUAL STRATEGY", comp2_des: "Architecting full-spectrum communications for Spanish-language outlets and internal member mobilization. Driving initiatives ensuring equity for people of color in the workplace and labor policies.",

            comp3_tit: "HIGH-IMPACT MEDIA PRODUCTION", comp3_des: "Executing professional photography, videography, and full-suite editing. Delivering comprehensive media packages in competitive environments and on tight timelines to drive campaign narratives.",

            c1_tit: "MFA, DIGITAL ARTS & NEW MEDIA", c2_tit: "ADVANCED SPANISH PROFICIENCY", c2_sub: "Bilingual Communications Strategy"

        },

        es: {

            nav_campaigns: "Campañas", nav_media: "Prensa", doc_opeds_title: "Análisis", nav_profile: "Perfil", nav_contact: "Contacto", nav_resume: "Currículum",

            hero_tag: "ESTRATEGA SENIOR DE COMUNICACIONES", scroll: "DESLIZAR",

            hero_word1: "IMPULSANDO", hero_word2: "NARRATIVAS.", hero_word3: "GANANDO", hero_word4: "CAMPAÑAS.",

            hero_typing: "Campañas laborales, de justicia racial e interés público — más de una década impulsando voces de primera línea y moldeando políticas.",

            btn_contact: "CONTÁCTANOS", btn_work: "VER ESTRATEGIA",

            stat_01: "ALCANCE DE AUDIENCIA", stat_02: "ÉXITO EN AUTORIZACIÓN", stat_03: "PARTICIPACIÓN Y CONVERSIÓN", stat_04: "TRABAJADORES IMPACTADOS",

            comp_head: "COMPETENCIAS",

            comp1_tit: "POLÍTICA PÚBLICA E IMPACTO", comp1_des: "Campañas articuladas conectando sindicatos, consultores y oficinas municipales para proteger servicios vitales. Aseguró respaldos clave y navegó paisajes legislativos.",

            comp2_tit: "ESTRATEGIA BILINGÜE Y EQUIDAD", comp2_des: "Arquitectura de comunicaciones para medios en español y movilización interna. Iniciativas impulsando la equidad para personas de color en el trabajo.",

            comp3_tit: "PRODUCCIÓN DE MEDIOS", comp3_des: "Ejecución de fotografía profesional, videografía y edición completa. Entrega de paquetes en entornos competitivos y plazos ajustados.",

            c1_tit: "MFA, ARTES DIGITALES Y NUEVOS MEDIOS", c2_tit: "DOMINIO AVANZADO DEL ESPAÑOL", c2_sub: "Estrategia de Comunicaciones Bilingüe"

        }

    };

    let currentLang = 'en';

    function toggleLanguage() {

        currentLang = currentLang === 'en' ? 'es' : 'en';

        document.getElementById('langBtn').innerText = currentLang === 'en' ? '[ES]' : '[EN]';

        document.querySelectorAll('[data-t]').forEach(el => {

            const key = el.getAttribute('data-t');

            if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];

        });

    }

    // ─── MOBILE MENU LOGIC ──────────────────────────────────────────

    const hamburger = document.getElementById('hamburger');

    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {

      navLinks.classList.toggle('nav-mobile-active');

    });

    

    const sectionLinks = Array.from(navLinks.querySelectorAll('a[href^="#"]'));

    const sections = Array.from(document.querySelectorAll('section[id]'));

    const backToTop = document.createElement('button');

    backToTop.id = 'backToTop';

    backToTop.className = 'back-to-top';

    backToTop.setAttribute('aria-label', 'Return to top');

    backToTop.textContent = 'TOP';

    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    document.body.appendChild(backToTop);

    navLinks.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            if(window.innerWidth <= 768) { navLinks.classList.remove('nav-mobile-active'); }

        });

    });

    const throttledScroll = (() => {

        let timeout = null;

        return (fn, delay = 100) => {

            if (timeout) return;

            timeout = setTimeout(() => { fn(); timeout = null; }, delay);

        };

    })();

    const updateActiveSection = () => {

        const scrollPosition = window.scrollY + window.innerHeight * 0.3;

        let activeId = sections[0]?.id;

        sections.forEach(section => {

            if (section.offsetTop <= scrollPosition) activeId = section.id;

        });

        sectionLinks.forEach(link => {

            const isActive = link.hash === `#${activeId}`;

            link.classList.toggle('active', isActive);

        });

        backToTop.classList.toggle('visible', window.scrollY > 520);

    };

    window.addEventListener('scroll', () => throttledScroll(updateActiveSection));

    updateActiveSection();

    // ─── SCROLL REVEAL (INTERSECTION OBSERVER) ──────────────────────

    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, obs) => {

      entries.forEach(e => {

        if (e.isIntersecting) {

          e.target.classList.add('visible');

          obs.unobserve(e.target);

        }

      });

    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));

    const setupSectionFilters = () => {

      document.querySelectorAll('.filter-toolbar').forEach(toolbar => {

        const sectionId = toolbar.dataset.section;

        const section = document.getElementById(sectionId);

        if (!section) return;

        const input = toolbar.querySelector('[data-filter-input]');

        const pills = Array.from(toolbar.querySelectorAll('.filter-pill'));

        const cards = Array.from(section.querySelectorAll('.campaign-brief, .mc-card, .op-ed-card'));

        const applyFilters = () => {

          const query = input?.value.trim().toLowerCase() || '';

          const activeValue = toolbar.querySelector('.filter-pill.active')?.dataset.filterValue || 'all';

          cards.forEach(card => {

            const text = `${card.innerText}`.toLowerCase();

            const filterText = `${card.dataset.filter || ''}`.toLowerCase();

            const matchesSearch = !query || text.includes(query);

            const matchesFilter = activeValue === 'all' || filterText.includes(activeValue) || text.includes(activeValue);

            card.classList.toggle('hidden', !(matchesSearch && matchesFilter));

          });

        };

        pills.forEach(pill => {

          pill.addEventListener('click', () => {

            pills.forEach(item => item.classList.remove('active'));

            pill.classList.add('active');

            applyFilters();

          });

        });

        input?.addEventListener('input', applyFilters);

      });

    };

    const updateParallaxImages = () => {

      document.querySelectorAll('.mc-hero-img-box img, .gallery-item img').forEach(img => {

        const rect = img.getBoundingClientRect();

        const speed = img.closest('.mc-hero-img-box') ? 0.14 : 0.08;

        const offset = (rect.top - window.innerHeight / 2) * speed;

        img.style.setProperty('--parallax-y', `${offset}px`);

      });

    };

    setupSectionFilters();

    updateParallaxImages();

    window.addEventListener('scroll', () => requestAnimationFrame(updateParallaxImages));

    const statBoxes = document.querySelectorAll('.stat-box');

    const animateStat = (box) => {

        const target = parseFloat(box.dataset.target || '0');

        const suffix = box.dataset.suffix || '';

        const fill = box.querySelector('.stat-bar-fill');

        const duration = 1400;

        const start = performance.now();

        const step = (now) => {

            const progress = Math.min((now - start) / duration, 1);

            const current = target * progress;

            const display = suffix === '%' ? `${Math.round(current)}%` : current >= 1000000 ? `${Math.round(current / 1000000)}M${suffix}` : current >= 1000 ? `${Math.round(current / 1000)}K${suffix}` : `${Math.round(current)}${suffix}`;

            box.querySelector('.stat-val').innerText = display;

            if (fill) fill.style.width = `${Math.min(parseInt(box.dataset.bar || '0') * progress, 100)}%`;

            if (progress < 1) requestAnimationFrame(step);

        };

        requestAnimationFrame(step);

    };

    const counterObserver = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateStat(entry.target);

                obs.unobserve(entry.target);

            }

        });

    }, { threshold: 0.4 });

    statBoxes.forEach(box => counterObserver.observe(box));

    // Force hero items to reveal immediately after load

    setTimeout(() => {

        document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));

    }, 100);

    // ─── INTERACTIVE HOVER/FOCUS OBSERVER FOR MOBILE ──────────────────────

    const interactiveObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (window.matchMedia("(hover: none)").matches) {

                if (entry.isIntersecting) {

                    entry.target.classList.add('is-active', 'is-visible');

                } else {

                    entry.target.classList.remove('is-active', 'is-visible');

                }

            }

        });

    }, { threshold: 0.6 }); 

    document.querySelectorAll('.stat-box, .gallery-item').forEach(el => {

        interactiveObserver.observe(el);

    });

    // ─── CURSOR LOGIC ──────────────────────────────────────────────

    const cursor = document.getElementById('cursor');

    const ring = document.getElementById('cursorRing');

    let mx = 0, my = 0, rx = 0, ry = 0;

    

    document.addEventListener('mousemove', e => {

      mx = e.clientX; my = e.clientY;

      cursor.style.left = mx + 'px';

      cursor.style.top = my + 'px';

    });

    

    function animateRing() {

      rx += (mx - rx) * 0.15;

      ry += (my - ry) * 0.15;

      ring.style.left = rx + 'px';

      ring.style.top = ry + 'px';

      requestAnimationFrame(animateRing);

    }

    animateRing();

    

    function bindCursor() {

        // FIX: removed dead `.op-ed-list-item` selector — actual class on the cards is `.op-ed-card`.

        document.querySelectorAll('a, button, .btn-solid, .btn-outline-text, input, textarea, .video-hero-wrapper, .audio-btn, .doc-mockup, .gallery-item img, .op-ed-card, .mc-card').forEach(el => {

            el.addEventListener('mouseenter', () => {

                cursor.style.width = '24px';

                cursor.style.height = '24px';

                cursor.style.background = 'var(--accent)';

                cursor.style.boxShadow = '0 0 20px var(--accent)';

                ring.style.width = '60px';

                ring.style.height = '60px';

                ring.style.borderColor = 'var(--accent)';

            });

            el.addEventListener('mouseleave', () => {

                cursor.style.width = '6px';

                cursor.style.height = '6px';

                cursor.style.background = 'var(--accent)';

                cursor.style.boxShadow = '0 0 10px var(--accent)';

                ring.style.width = '40px';

                ring.style.height = '40px';

                ring.style.borderColor = 'rgba(255, 69, 0, 0.4)';

            });

        });

    }

    bindCursor();

    // ─── HIGH-PERFORMANCE ANTIGRAVITY ENGINE ───────────────────────

    const agElements = document.querySelectorAll('.ag-element, .hero-circle-graphic');

    

    agElements.forEach(el => {

        el.dataset.agSpeed = 0.5 + Math.random() * 0.8;

        el.dataset.agPhase = Math.random() * Math.PI * 2;

    });

    let targetX = 0; let targetY = 0;

    let mouseX = 0; let mouseY = 0;

    document.addEventListener('mousemove', (e) => {

        mouseX = (e.clientX - window.innerWidth / 2) * 0.03;

        mouseY = (e.clientY - window.innerHeight / 2) * 0.03;

    });

    function renderAntigravity() {

        const time = performance.now() * 0.001;

        targetX += (mouseX - targetX) * 0.1;

        targetY += (mouseY - targetY) * 0.1;

        agElements.forEach(el => {

            const speed = parseFloat(el.dataset.agSpeed);

            const phase = parseFloat(el.dataset.agPhase);

            const depth = parseFloat(el.dataset.agDepth) || 1;

            

            const floatY = Math.sin(time * speed + phase) * 12;

            const floatX = Math.cos(time * speed * 0.8 + phase) * 6;

            

            const finalX = floatX + (targetX * depth);

            const finalY = floatY + (targetY * depth);

            el.style.translate = `${finalX}px ${finalY}px`;

        });

        requestAnimationFrame(renderAntigravity);

    }

    renderAntigravity();

    // ─── MEDIA & AUDIO ENGINE ──────────────────────────────────────

    window.activeAudios = window.activeAudios || [];

    

    function formatTime(seconds) {

        if (isNaN(seconds)) return "0:00";

        const mins = Math.floor(seconds / 60);

        const secs = Math.floor(seconds % 60);

        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    }

    document.querySelectorAll('.custom-player-wrapper').forEach(wrapper => {

        const audioTag = wrapper.querySelector('audio');

        if(!audioTag) return;

        window.activeAudios.push(audioTag);

        

        const playBtn = wrapper.querySelector('.play-pause-btn');

        const progressBar = wrapper.querySelector('.progress-bar');

        const progressContainer = wrapper.querySelector('.progress-container');

        const timeDisplay = wrapper.querySelector('.time-display');

        playBtn.addEventListener('click', (e) => {

            e.stopPropagation();

            window.activeAudios.forEach(a => {

                if(a !== audioTag) {

                    a.pause();

                    const otherWrapper = a.closest('.custom-player-wrapper');

                    if(otherWrapper) {

                        const otherBtn = otherWrapper.querySelector('.play-pause-btn');

                        if(otherBtn) {

                            otherBtn.innerHTML = '<i data-lucide="play" style="width:16px;"></i>';

                        }

                    }

                }

            });

            const modalVideo = document.getElementById("modalVideo");

            if (modalVideo && !modalVideo.paused) modalVideo.pause();

            if (audioTag.paused) {

                let playPromise = audioTag.play();

                if (playPromise !== undefined) {

                    playPromise.then(_ => {

                        playBtn.innerHTML = '<i data-lucide="pause" style="width:16px;"></i>';

                        
                    }).catch(error => console.warn("Audio playback prevented:", error));

                }

            } else {

                audioTag.pause();

                playBtn.innerHTML = '<i data-lucide="play" style="width:16px;"></i>';

                lucide.createIcons();

            }

        });

        audioTag.addEventListener('timeupdate', () => {

            const percent = (audioTag.currentTime / audioTag.duration) * 100;

            progressBar.style.width = `${percent}%`;

            timeDisplay.textContent = formatTime(audioTag.currentTime);

        });

        

        audioTag.addEventListener('loadedmetadata', () => { timeDisplay.textContent = formatTime(0); });

        audioTag.addEventListener('ended', () => {

            playBtn.innerHTML = '<i data-lucide="play" style="width:16px;"></i>';

            progressBar.style.width = `0%`;

            timeDisplay.textContent = formatTime(0);

            lucide.createIcons();

        });

        progressContainer.addEventListener('click', (e) => {

            const rect = progressContainer.getBoundingClientRect();

            const pos = (e.clientX - rect.left) / rect.width;

            audioTag.currentTime = pos * audioTag.duration;

        });

    });

    function pauseAllMedia() {

        document.querySelectorAll('audio, video').forEach(media => {

            media.pause();

            if (media.tagName.toLowerCase() === 'audio') {

                const wrap = media.closest('.custom-player-wrapper');

                if(wrap) {

                    const btn = wrap.querySelector('.play-pause-btn');

                    if(btn) {

                        btn.innerHTML = '<i data-lucide="play" style="width:16px;"></i>';

                    }

                }

            }

        });

        lucide.createIcons();

        const vid = document.getElementById('modalVideo');

        if(vid) vid.pause();

    }

    function loadIntoViewer(url, name, title, author, outlet, date) {

        document.getElementById('inlineDocViewer').src = url + "#view=FitH";

        document.getElementById('docFilename').innerText = title || name;

        const docSubline = document.getElementById('docSubline');

        if (docSubline) {

            docSubline.innerText = [outlet, date, author].filter(Boolean).join(' • ');

        }

        document.getElementById('analysis').scrollIntoView({ behavior: 'smooth' });

    }

    let currentViewerState = { type: 'image', src: '/assets/images/site-169.jpg', title: 'Select an asset to preview' };

    function openMultimodal(type, src, title) {

        currentViewerState = { type, src, title };

        document.getElementById('viewerTitle').textContent = title;

        const image = document.getElementById('viewerImage');

        const video = document.getElementById('viewerVideo');

        const audio = document.getElementById('viewerAudio');

        image.style.display = 'none';

        video.style.display = 'none';

        audio.style.display = 'none';

        if (type === 'image') {

            image.src = src;

            image.style.display = 'block';

        } else if (type === 'video') {

            video.src = src;

            video.style.display = 'block';

            video.load();

        } else if (type === 'audio') {

            audio.src = src;

            audio.style.display = 'block';

            audio.load();

        }

    }

    function setViewerImage(src) {

        currentViewerState = { type: 'image', src, title: 'Supporting Frame' };

        document.getElementById('viewerTitle').textContent = 'Supporting Frame';

        const image = document.getElementById('viewerImage');

        const video = document.getElementById('viewerVideo');

        const audio = document.getElementById('viewerAudio');

        image.src = src;

        image.style.display = 'block';

        video.style.display = 'none';

        audio.style.display = 'none';

    }

    function openCurrentViewer() {

        if (currentViewerState && currentViewerState.src) {

            openModal(currentViewerState.src, currentViewerState.type);

        }

    }

    function openModal(src, type) {

        pauseAllMedia();

        const m = document.getElementById('mediaModal');

        const img = document.getElementById('modalImg');

        const vid = document.getElementById('modalVideo');

        const audio = document.getElementById('modalAudio');

        const pdf = document.getElementById('modalPdf');

        

        if(img) img.style.display = 'none';

        if(vid) { vid.style.display = 'none'; vid.pause(); vid.src = ''; }

        if(audio) { audio.style.display = 'none'; audio.pause(); audio.src = ''; }

        if(pdf) pdf.style.display = 'none';

        if (type === 'video') { 

            vid.src = src; 

            vid.style.display = 'block'; 

            let playPromise = vid.play(); 

            if (playPromise !== undefined) {

                playPromise.catch(error => console.warn("Video playback prevented:", error));

            }

        }

        else if (type === 'audio') {

            audio.src = src;

            audio.style.display = 'block';

            audio.load();

            let playPromise = audio.play();

            if (playPromise !== undefined) {

                playPromise.catch(error => console.warn("Audio playback prevented:", error));

            }

        }

        else if (type === 'pdf') { pdf.src = src + "#view=FitH"; pdf.style.display = 'block'; }

        else { 

            img.src = src; 

            img.style.display = 'block'; 

        }

        

        m.classList.add('active');

        document.body.style.overflow = 'hidden';

    }

    function closeModal() {

        document.getElementById('mediaModal').classList.remove('active');

        pauseAllMedia();

        const pdf = document.getElementById('modalPdf');

        if(pdf) pdf.src = '';

        document.body.style.overflow = 'auto';

    }

    window.onclick = function(e) { if(e.target == document.getElementById('mediaModal')) closeModal(); }

    document.addEventListener('keydown', function(event) {

        if (event.key === "Escape" || event.key === "Esc") {

            closeModal();

        }

    });
  
  w.toggleLanguage = toggleLanguage;
  w.openModal = openModal;
  w.closeModal = closeModal;
  w.loadIntoViewer = loadIntoViewer;
  w.openMultimodal = openMultimodal;
  w.setViewerImage = setViewerImage;
  w.openCurrentViewer = openCurrentViewer;

  if ((window as unknown as { lucide?: { createIcons: () => void } }).lucide) {
    (window as unknown as { lucide: { createIcons: () => void } }).lucide.createIcons();
  }
}
