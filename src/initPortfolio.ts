// @ts-nocheck
export function initPortfolio(): void {
  const w = window;
  if (w.__portfolioInitialized) return;
  w.__portfolioInitialized = true;

  document.documentElement.classList.add('js-enabled');
// ─── TRANSLATIONS & BILINGUAL TOGGLE ────────────────────────────────

    const translations = {

        en: {

            nav_services: "Services", nav_campaigns: "Work", nav_media: "Press", doc_opeds_title: "OP-EDS", nav_profile: "About", nav_contact: "Contact", nav_contact_cta: "DISCUSS A ROLE", nav_resume: "Resume",

            hero_tag: "COMMUNICATIONS DIRECTOR", scroll: "SCROLL",

            hero_offering: "Communications leadership for labor, advocacy & public-interest campaigns",

            hero_audience: "Unions, advocacy orgs & public-sector campaigns · Outcomes: earned media, policy wins, member mobilization",

            hero_word1: "LEADING", hero_word2: "NARRATIVES.", hero_word3: "WINNING", hero_word4: "CAMPAIGNS.",

            hero_typing: "I build and lead communications teams for labor and advocacy — setting strategy, briefing executives, and aligning press, digital, and field around contracts won and policy moved.",

            btn_contact: "DISCUSS A ROLE", btn_work: "VIEW LEADERSHIP WORK", btn_resume: "REQUEST RESUME",

            outcome_label: "Outcome",

            campaign1_outcome: "Historic wage increases across municipal and healthcare systems — a narrative program that shifted bargaining from statistics to stories members and negotiators could act on.",

            campaign2_outcome: "Secured essential funding, prevented hundreds of layoffs, and lifted platform engagement by 55%+ across the campaign.",

            campaign3_outcome: "Safety rights secured in contract language and membership unified for strike authorization.",

            profile_title: "About",

            profile_lead: "Communications Director for labor and public-interest campaigns across California and the Pacific Northwest — building teams, running press strategy, and advising leadership under high-stakes bargaining and policy fights.",

            profile_fact_focus: "Focus", profile_fact_focus_val: "Labor, advocacy & public-sector campaigns",

            profile_fact_lang: "Languages", profile_fact_lang_val: "English & Spanish outreach",

            profile_fact_coverage: "Coverage", profile_fact_coverage_val: "NYT, SF Chronicle, KQED, Telemundo & broadcast",

            profile_linkedin: "Connect on LinkedIn",

            glance_15: "Communications Director for labor & advocacy. I lead teams across earned media, message architecture, bilingual outreach, and executive counsel for unions and public-interest campaigns.",

            glance_60: "Over a decade directing communications programs through strike authorizations, healthcare unionization, budget fights, and living-wage campaigns — building press systems, managing cross-functional teams, and landing coverage in the NYT, SF Chronicle, KQED, and Telemundo.",

            glance_deep: "Case studies, op-eds, and broadcast coverage below — organized so a hiring team can verify leadership outcomes in minutes.",

            services_eyebrow: "START HERE", services_title: "How I Lead Communications",

            services_lead: "Director-level leadership across messaging, press, and campaign execution. Choose the path that fits your search.",

            service1_tit: "Communications Leadership", service1_des: "Set priorities, brief principals, and align press, digital, and field teams around shared campaign outcomes.", service1_cta: "Discuss a role →",

            service2_tit: "Earned Media & Press", service2_des: "Direct high-stakes media relations and crisis response—including placements in outlets like The New York Times and SF Chronicle.", service2_cta: "Request media counsel →",

            service3_tit: "Campaign Narrative Systems", service3_des: "Stand up narrative programs that align field, digital, and press — bilingual outreach and message architecture from shop floor to executive.", service3_cta: "Discuss a campaign →",

            service4_tit: "Request Resume", service4_des: "Full credentials, campaign history, and competencies—available on request via the contact form.", service4_cta: "Request CV →",

            press_spotlight_label: "Flagship coverage · Crisis response", press_spotlight_desc: "Crisis communications during a national tragedy—directing union response across live NYT coverage, member support, and regional follow-up.", press_spotlight_cta: "Read in The New York Times",

            press_outlets_label: "As featured in",

            press_archive_link: "View full press archive →",

            campaigns_title: "Campaign Leadership",

            campaigns_lead: "Case studies in communications direction — team leadership, press strategy, and measurable campaign outcomes.",

            media_lead: "Full press archive—articles, broadcasts, and follow-up coverage across labor and public-interest campaigns.",

            contact_title: "Let's lead your communications.", contact_lead: "Looking for a Communications Director who can build earned-media systems, counsel leadership, and move public narratives. I'll respond within 2 business days.",

            contact_inquiry_label: "INQUIRY TYPE", contact_email_label: "EMAIL", contact_resume_label: "RESUME", contact_resume_link: "Download resume ↗", contact_submit: "SEND INQUIRY",

            inquiry1_tit: "Director role", inquiry2_tit: "Media inquiry", inquiry3_tit: "Campaign project", inquiry4_tit: "General",

            stat_01: "VERIFIED AUDIENCE REACH", stat_02: "STRIKE AUTHORIZATION SUCCESS", stat_03: "MEMBER MOBILIZATION", stat_04: "IMPACTED WORKFORCE MEMBERS",

            comp_head: "Competencies",

            comp1_tit: "Leadership & Public Affairs", comp1_des: "Set communications priorities and counsel leadership through inside-outside campaigns bridging labor, consultants, and municipal offices. Secured pivotal endorsements and navigated complex legislative landscapes to protect vital community services.",

            comp2_tit: "Equity & Bilingual Strategy", comp2_des: "Direct full-spectrum communications for Spanish-language outlets and internal member mobilization. Drive initiatives ensuring equity for people of color in the workplace and labor policies.",

            comp3_tit: "Creative & Content Operations", comp3_des: "Build and oversee content programs — brief creatives and vendors, set quality standards, and keep field, digital, and press assets on message under tight deadlines.",

            c1_tit: "MFA, DIGITAL STRATEGY & NEW MEDIA", c2_tit: "ADVANCED SPANISH PROFICIENCY", c2_sub: "Bilingual Communications Leadership"

        },

        es: {

            nav_services: "Servicios", nav_campaigns: "Trabajo", nav_media: "Prensa", doc_opeds_title: "Análisis", nav_profile: "Perfil", nav_contact: "Contacto", nav_contact_cta: "HABLAR SOBRE UN ROL", nav_resume: "Currículum",

            hero_tag: "DIRECTOR DE COMUNICACIONES", scroll: "DESLIZAR",

            hero_offering: "Liderazgo en comunicaciones para campañas laborales, de defensa y de interés público",

            hero_audience: "Sindicatos, organizaciones de defensa y campañas del sector público · Resultados: medios, victorias políticas, movilización",

            hero_word1: "LIDERANDO", hero_word2: "NARRATIVAS.", hero_word3: "GANANDO", hero_word4: "CAMPAÑAS.",

            hero_typing: "Construyo y dirijo equipos de comunicaciones para el movimiento laboral y la abogacía — definiendo estrategia, informando a la dirección y alineando prensa, digital y campo para ganar contratos y mover política.",

            btn_contact: "HABLAR SOBRE UN ROL", btn_work: "VER TRABAJO DE LIDERAZGO", btn_resume: "SOLICITAR CV",

            outcome_label: "Resultado",

            campaign1_outcome: "Aumentos salariales históricos en sistemas municipales y de salud — un programa narrativo que llevó la negociación de estadísticas a historias que miembros y negociadores pudieron actuar.",

            campaign2_outcome: "Financiamiento esencial asegurado, cientos de despidos evitados y engagement en plataformas superior al 55%.",

            campaign3_outcome: "Derechos de seguridad en el contrato y membresía unificada para autorización de huelga.",

            profile_title: "Perfil",

            profile_lead: "Director de Comunicaciones para campañas laborales y de interés público en California y el Pacífico Noroeste — construyendo equipos, dirigiendo estrategia de prensa y asesorando a la dirección en negociaciones y política de alto impacto.",

            profile_fact_focus: "Enfoque", profile_fact_focus_val: "Campañas laborales, de abogacía y sector público",

            profile_fact_lang: "Idiomas", profile_fact_lang_val: "Alcance en inglés y español",

            profile_fact_coverage: "Cobertura", profile_fact_coverage_val: "NYT, SF Chronicle, KQED, Telemundo y medios",

            profile_linkedin: "Conectar en LinkedIn",

            glance_15: "Director de Comunicaciones para el movimiento obrero y la abogacía. Dirijo equipos en medios ganados, arquitectura de mensajes, alcance bilingüe y consejo ejecutivo.",

            glance_60: "Más de una década dirigiendo programas de comunicaciones en autorizaciones de huelga, sindicalización en salud, defensa de presupuestos y campañas de salario digno — construyendo sistemas de prensa, gestionando equipos multifuncionales y logrando cobertura en NYT, SF Chronicle, KQED y Telemundo.",

            glance_deep: "Estudios de caso, opiniones y cobertura de difusión abajo — organizado para verificar resultados de liderazgo rápidamente.",

            services_eyebrow: "EMPIEZA AQUÍ", services_title: "Cómo Lidero Comunicaciones",

            services_lead: "Liderazgo a nivel de dirección en narrativa, medios y ejecución de campaña. Elige el camino que coincida con tu búsqueda.",

            service1_tit: "Liderazgo en Comunicaciones", service1_des: "Definir prioridades, informar a la dirección y alinear prensa, digital y campo en torno a resultados compartidos.", service1_cta: "Hablar sobre un rol →",

            service2_tit: "Medios Ganados y Prensa", service2_des: "Dirigir relaciones mediáticas de alto impacto y respuesta a crisis—incluyendo The New York Times y SF Chronicle.", service2_cta: "Solicitar consejo mediático →",

            service3_tit: "Sistemas Narrativos de Campaña", service3_des: "Implementar programas narrativos que alinean campo, digital y prensa — alcance bilingüe y arquitectura de mensajes del piso de trabajo a la dirección.", service3_cta: "Discutir una campaña →",

            service4_tit: "Solicitar Currículum", service4_des: "Credenciales completas, historial de campañas y competencias—disponible por solicitud vía el formulario.", service4_cta: "Solicitar CV →",

            press_spotlight_label: "Cobertura principal · Crisis", press_spotlight_desc: "Comunicaciones de crisis durante una tragedia nacional—dirigiendo la respuesta sindical en cobertura en vivo del NYT y seguimiento regional.", press_spotlight_cta: "Leer en The New York Times",

            press_outlets_label: "Destacado en",

            press_archive_link: "Ver archivo completo de prensa →",

            campaigns_title: "Liderazgo de Campaña",

            campaigns_lead: "Casos de estudio en dirección de comunicaciones — liderazgo de equipos, estrategia de prensa y resultados medibles.",

            media_lead: "Archivo completo de prensa—artículos, transmisiones y cobertura de seguimiento.",

            contact_title: "Lideremos tus comunicaciones.", contact_lead: "Buscas un Director de Comunicaciones que construya sistemas de medios ganados, asesore a la dirección y mueva narrativas públicas. Responderé en 2 días hábiles.",

            contact_inquiry_label: "TIPO DE CONSULTA", contact_email_label: "CORREO", contact_resume_label: "CURRÍCULUM", contact_resume_link: "Descargar currículum ↗", contact_submit: "ENVIAR CONSULTA",

            inquiry1_tit: "Rol de director", inquiry2_tit: "Consulta de medios", inquiry3_tit: "Proyecto de campaña", inquiry4_tit: "General",

            stat_01: "ALCANCE DE AUDIENCIA", stat_02: "ÉXITO EN AUTORIZACIÓN", stat_03: "MOVILIZACIÓN DE MIEMBROS", stat_04: "TRABAJADORES IMPACTADOS",

            comp_head: "Competencias",

            comp1_tit: "Liderazgo y asuntos públicos", comp1_des: "Definir prioridades de comunicación y asesorar a la dirección en campañas que conectan sindicatos, consultores y oficinas municipales. Aseguró respaldos clave y navegó paisajes legislativos.",

            comp2_tit: "Estrategia bilingüe y equidad", comp2_des: "Dirigir comunicaciones para medios en español y movilización interna. Impulsar iniciativas de equidad para personas de color en el trabajo.",

            comp3_tit: "Operaciones creativas y de contenido", comp3_des: "Construir y supervisar programas de contenido — informar a creativos y proveedores, fijar estándares de calidad y mantener activos alineados al mensaje bajo plazos ajustados.",

            c1_tit: "MFA, ESTRATEGIA DIGITAL Y NUEVOS MEDIOS", c2_tit: "DOMINIO AVANZADO DEL ESPAÑOL", c2_sub: "Liderazgo de Comunicaciones Bilingüe"

        }

    };

    let currentLang = 'en';

    function toggleLanguage() {

        currentLang = currentLang === 'en' ? 'es' : 'en';

        const langBtn = document.getElementById('langBtn');

        if (langBtn) langBtn.innerText = currentLang === 'en' ? '[ES]' : '[EN]';

        document.querySelectorAll('[data-t]').forEach(el => {

            const key = el.getAttribute('data-t');

            if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];

        });

    }

    w.toggleLanguage = toggleLanguage;

    // ─── MOBILE MENU LOGIC ──────────────────────────────────────────

    const hamburger = document.getElementById('hamburger');

    const navLinks = document.getElementById('navLinks');

    const setNavOpen = (open) => {

      if (!navLinks || !hamburger) return;

      navLinks.classList.toggle('nav-mobile-active', open);

      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');

      hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');

    };

    hamburger?.addEventListener('click', () => {

      setNavOpen(!navLinks?.classList.contains('nav-mobile-active'));

    });

    

    const sectionLinks = navLinks ? Array.from(navLinks.querySelectorAll('a[href^="#"]')) : [];

    const sections = Array.from(document.querySelectorAll('section[id]'));

    const backToTop = document.createElement('button');

    backToTop.id = 'backToTop';

    backToTop.className = 'back-to-top';

    backToTop.setAttribute('aria-label', 'Return to top');

    backToTop.textContent = 'TOP';

    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    document.body.appendChild(backToTop);

    navLinks?.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            if(window.innerWidth <= 768) { setNavOpen(false); }

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

    const revealInView = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          el.classList.add('visible');
        }
      });
    };

    revealInView();
    window.addEventListener('load', revealInView, { once: true });
    window.addEventListener('resize', revealInView, { passive: true });

    // Hero is above the fold — show immediately
    document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));

    const setupSectionFilters = () => {

      document.querySelectorAll('.filter-toolbar').forEach(toolbar => {

        const sectionId = toolbar.dataset.section;

        const section = document.getElementById(sectionId);

        if (!section) return;

        const input = toolbar.querySelector('[data-filter-input]');

        const pills = Array.from(toolbar.querySelectorAll('.filter-pill'));

        const cards = Array.from(section.querySelectorAll('.campaign-brief, .mc-card, .op-ed-card'));

        let emptyEl = section.querySelector('.filter-empty');

        if (!emptyEl && (sectionId === 'media' || sectionId === 'campaigns')) {

          emptyEl = document.createElement('p');

          emptyEl.className = 'filter-empty';

          emptyEl.textContent = 'No results match your search. Try a different keyword or filter.';

          const container = section.querySelector('.media-custom-container, .campaign-list');

          if (container) container.appendChild(emptyEl);

        }

        const resultsEl = toolbar.querySelector('[data-filter-results]');

        const applyFilters = () => {

          const query = input?.value.trim().toLowerCase() || '';

          const activeValue = toolbar.querySelector('.filter-pill.active')?.dataset.filterValue || 'all';

          let visible = 0;

          cards.forEach(card => {

            const text = `${card.innerText}`.toLowerCase();

            const filterText = `${card.dataset.filter || ''}`.toLowerCase();

            const matchesSearch = !query || text.includes(query);

            const matchesFilter = activeValue === 'all' || filterText.includes(activeValue) || text.includes(activeValue);

            const show = matchesSearch && matchesFilter;

            card.classList.toggle('hidden', !show);

            if (show) visible++;

          });

          if (emptyEl) emptyEl.classList.toggle('visible', visible === 0 && cards.length > 0);

          if (resultsEl) {

            resultsEl.textContent = (query || activeValue !== 'all')

              ? `Showing ${visible} of ${cards.length}`

              : `${cards.length} total`;

          }

        };

        pills.forEach(pill => {

          pill.setAttribute('role', 'button');

          pill.setAttribute('tabindex', '0');

          const activate = () => {

            pills.forEach(item => item.classList.remove('active'));

            pill.classList.add('active');

            applyFilters();

          };

          pill.addEventListener('click', activate);

          pill.addEventListener('keydown', (e) => {

            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }

          });

        });

        input?.addEventListener('input', applyFilters);

        applyFilters();

      });

    };

    const updateParallaxImages = () => {

      document.querySelectorAll('.gallery-item img').forEach(img => {

        const rect = img.getBoundingClientRect();

        const speed = 0.08;

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

    // Belt-and-suspenders for hero visibility after slow loads
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

    

    if (cursor && ring) {

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

        document.querySelectorAll('a, button, .btn-solid, .btn-outline-text, input, textarea, .video-hero-wrapper, .audio-btn, .doc-mockup, .gallery-item img, .op-ed-card, .mc-card, .campaign-asset-card, .floating-tile').forEach(el => {

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

    }

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


    let modalLastFocus = null;

    function openModal(src, type) {

        pauseAllMedia();

        const m = document.getElementById('mediaModal');

        const img = document.getElementById('modalImg');

        const vid = document.getElementById('modalVideo');

        const audio = document.getElementById('modalAudio');

        const closeBtn = m?.querySelector('.close-btn');

        if (type === 'pdf') { window.open(src, '_blank', 'noopener,noreferrer'); return; }

        if(img) img.style.display = 'none';

        if(vid) { vid.style.display = 'none'; vid.pause(); vid.src = ''; }

        if(audio) { audio.style.display = 'none'; audio.pause(); audio.src = ''; }

        if (type === 'video') {

            vid.src = src;

            vid.style.display = 'block';

            const playPromise = vid.play();

            if (playPromise !== undefined) playPromise.catch(error => console.warn("Video playback prevented:", error));

        }

        else if (type === 'audio') {

            audio.src = src;

            audio.style.display = 'block';

            audio.load();

            const playPromise = audio.play();

            if (playPromise !== undefined) playPromise.catch(error => console.warn("Audio playback prevented:", error));

        }

        else {

            img.src = src;

            img.style.display = 'block';

        }

        modalLastFocus = document.activeElement;

        m.classList.add('active');

        m.setAttribute('aria-hidden', 'false');

        document.body.style.overflow = 'hidden';

        setTimeout(() => closeBtn?.focus(), 60);

    }

    function closeModal() {

        const m = document.getElementById('mediaModal');

        if (!m) return;

        m.classList.remove('active');

        m.setAttribute('aria-hidden', 'true');

        pauseAllMedia();

        document.body.style.overflow = 'auto';

        if (modalLastFocus && typeof modalLastFocus.focus === 'function') {

            try { modalLastFocus.focus(); } catch (_e) { /* ignore */ }

        }

        modalLastFocus = null;

    }

    document.addEventListener('click', (e) => {

        const modal = document.getElementById('mediaModal');

        if (modal?.classList.contains('active') && e.target === modal) closeModal();

    });

    document.addEventListener('keydown', (event) => {

        const modal = document.getElementById('mediaModal');

        if (!modal?.classList.contains('active')) return;

        if (event.key === 'Escape' || event.key === 'Esc') { closeModal(); return; }

        if (event.key === 'Tab') {

            const focusables = modal.querySelectorAll('button, [href], video, audio, [tabindex]:not([tabindex="-1"])');

            if (!focusables.length) return;

            const first = focusables[0];

            const last = focusables[focusables.length - 1];

            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }

            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }

        }

    });

    document.querySelectorAll('.gallery-item').forEach(item => {

        item.addEventListener('keydown', (e) => {

            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }

        });

    });

    // ─── FLOATING GALLERY LIGHTBOX ─────────────────────────────────
    (function initFloatingGallery() {
      function boot() {
      const galleries = document.querySelectorAll('.brief-floating-gallery');
      if (galleries.length === 0) return;

      if (!document.getElementById('galleryLightbox')) {
        requestAnimationFrame(boot);
        return;
      }

      const w = window;
      if (!w.__galleryLightboxState) {
        w.__galleryLightboxState = {
          currentItems: [],
          currentIndex: 0,
          lastTrigger: null,
          zoom: { scale: 1, x: 0, y: 0 },
        };
      } else if (!w.__galleryLightboxState.zoom) {
        w.__galleryLightboxState.zoom = { scale: 1, x: 0, y: 0 };
      }
      const state = w.__galleryLightboxState;
      const ZOOM_MIN = 1;
      const ZOOM_MAX = 4;
      const ZOOM_STEP = 0.25;

      function getZoomControls() {
        return getLightbox()?.querySelector('[data-gallery-zoom]') || null;
      }

      function clearZoomHandlers() {
        if (w.__galleryZoomAbort) {
          try { w.__galleryZoomAbort.abort(); } catch (_e) { /* ignore */ }
          w.__galleryZoomAbort = null;
        }
      }

      function applyZoomTransform() {
        const stage = getStage();
        const img = stage?.querySelector('.gallery-lightbox__zoom-img');
        const viewport = stage?.querySelector('.gallery-lightbox__zoom-viewport');
        if (!img || !state.zoom) return;

        img.style.transform = `translate(${state.zoom.x}px, ${state.zoom.y}px) scale(${state.zoom.scale})`;
        viewport?.classList.toggle('is-zoomed', state.zoom.scale > 1.01);
      }

      function updateZoomUI() {
        const controls = getZoomControls();
        const stage = getStage();
        const hasZoomImage = !!stage?.querySelector('.gallery-lightbox__zoom-img');

        if (controls) {
          controls.classList.toggle('is-hidden', !hasZoomImage);
          controls.setAttribute('aria-hidden', String(!hasZoomImage));
        }

        const resetBtn = getLightbox()?.querySelector('[data-gallery-zoom-reset]');
        const outBtn = getLightbox()?.querySelector('[data-gallery-zoom-out]');
        const inBtn = getLightbox()?.querySelector('[data-gallery-zoom-in]');

        if (resetBtn && state.zoom) {
          resetBtn.textContent = `${Math.round(state.zoom.scale * 100)}%`;
        }
        if (outBtn && state.zoom) outBtn.disabled = state.zoom.scale <= ZOOM_MIN;
        if (inBtn && state.zoom) inBtn.disabled = state.zoom.scale >= ZOOM_MAX;
      }

      function resetZoom() {
        if (!state.zoom) return;
        state.zoom.scale = ZOOM_MIN;
        state.zoom.x = 0;
        state.zoom.y = 0;
        applyZoomTransform();
        updateZoomUI();
      }

      function adjustZoom(delta) {
        if (!state.zoom || !getStage()?.querySelector('.gallery-lightbox__zoom-img')) return;

        state.zoom.scale = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, state.zoom.scale + delta));
        if (state.zoom.scale <= ZOOM_MIN) {
          state.zoom.x = 0;
          state.zoom.y = 0;
        }
        applyZoomTransform();
        updateZoomUI();
      }

      function setupImageZoom(viewport, img) {
        clearZoomHandlers();
        resetZoom();

        w.__galleryZoomAbort = new AbortController();
        const { signal } = w.__galleryZoomAbort;

        viewport.addEventListener('wheel', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
          if (delta === 0) return;
          adjustZoom(delta > 0 ? -ZOOM_STEP : ZOOM_STEP);
        }, { passive: false, signal });

        viewport.addEventListener('click', (e) => {
          if (state.zoom.scale > 1.01) return;
          e.preventDefault();
          adjustZoom(1);
        }, { signal });

        let dragging = false;
        let startX = 0;
        let startY = 0;
        let startTx = 0;
        let startTy = 0;

        viewport.addEventListener('pointerdown', (e) => {
          if (state.zoom.scale <= 1 || e.button !== 0) return;
          dragging = true;
          startX = e.clientX;
          startY = e.clientY;
          startTx = state.zoom.x;
          startTy = state.zoom.y;
          viewport.setPointerCapture(e.pointerId);
          viewport.classList.add('is-dragging');
        }, { signal });

        viewport.addEventListener('pointermove', (e) => {
          if (!dragging) return;
          state.zoom.x = startTx + (e.clientX - startX);
          state.zoom.y = startTy + (e.clientY - startY);
          applyZoomTransform();
        }, { signal });

        const endDrag = (e) => {
          if (!dragging) return;
          dragging = false;
          viewport.classList.remove('is-dragging');
          try { viewport.releasePointerCapture(e.pointerId); } catch (_e) { /* ignore */ }
        };

        viewport.addEventListener('pointerup', endDrag, { signal });
        viewport.addEventListener('pointercancel', endDrag, { signal });

        viewport.addEventListener('dblclick', (e) => {
          e.preventDefault();
          if (state.zoom.scale > 1) resetZoom();
          else adjustZoom(1.5);
        }, { signal });
      }

      function getLightbox() {
        return document.getElementById('galleryLightbox');
      }

      function getStage() {
        return getLightbox()?.querySelector('[data-gallery-stage]') || null;
      }

      function getCaption() {
        return getLightbox()?.querySelector('[data-gallery-caption]') || null;
      }

      function getCounter() {
        return getLightbox()?.querySelector('[data-gallery-counter]') || null;
      }

      function getPrimaryTrack(galleryEl) {
        return galleryEl.querySelector('[data-gallery-track]:not(.floating-gallery-track--clone)');
      }

      function getItemsFor(galleryEl) {
        const track = getPrimaryTrack(galleryEl);
        if (track) {
          return Array.from(track.querySelectorAll('[data-gallery-item]'));
        }
        return Array.from(galleryEl.querySelectorAll('[data-gallery-item]'));
      }

      function itemKey(el) {
        return [
          el.getAttribute('data-asset-type') || '',
          el.getAttribute('data-asset-src') || '',
          el.getAttribute('data-asset-url') || '',
          el.getAttribute('data-asset-caption') || '',
        ].join('|');
      }

      function findItemIndex(galleryEl, clickedEl) {
        const items = getItemsFor(galleryEl);
        const key = itemKey(clickedEl);
        return items.findIndex((item) => itemKey(item) === key);
      }

      function indexGalleryItems(galleryEl) {
        const items = getItemsFor(galleryEl);
        items.forEach((item, index) => {
          const idx = String(index);
          item.dataset.galleryIndex = idx;
        });

        const keyToIndex = new Map(items.map((item, index) => [itemKey(item), String(index)]));
        galleryEl.querySelectorAll('[data-gallery-item]').forEach((tile) => {
          const idx = keyToIndex.get(itemKey(tile));
          if (idx !== undefined) tile.dataset.galleryIndex = idx;
        });
      }

      function resolveTileIndex(galleryEl, tile) {
        const fromDataset = tile.dataset.galleryIndex;
        if (fromDataset !== undefined && fromDataset !== '') {
          const parsed = Number.parseInt(fromDataset, 10);
          if (!Number.isNaN(parsed)) return parsed;
        }
        return findItemIndex(galleryEl, tile);
      }

      function openTile(galleryEl, tile) {
        const idx = resolveTileIndex(galleryEl, tile);
        if (idx < 0) return;
        openLightbox(galleryEl, idx, tile);
      }

      function bindGalleryInteractions(galleryEl, signal) {
        galleryEl.addEventListener('click', (e) => {
          if (!(e.target instanceof Element)) return;
          const tile = e.target.closest('[data-gallery-item]');
          if (!tile || !galleryEl.contains(tile)) return;
          e.preventDefault();
          e.stopPropagation();
          openTile(galleryEl, tile);
        }, { signal, capture: true });

        galleryEl.addEventListener('keydown', (e) => {
          if (!(e.target instanceof Element)) return;
          const tile = e.target.closest('[data-gallery-item]');
          if (!tile || !galleryEl.contains(tile)) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openTile(galleryEl, tile);
          }
        }, { signal });

        if (galleryEl.hasAttribute('data-gallery-autoscroll')) {
          galleryEl.addEventListener('pointerdown', (e) => {
            if (!(e.target instanceof Element)) return;
            if (!e.target.closest('[data-gallery-item]')) return;
            const marquee = galleryEl.querySelector('[data-gallery-marquee]');
            if (marquee) marquee.style.animationPlayState = 'paused';
          }, { signal, capture: true });
        }
      }

      function setupMarqueeGallery(galleryEl, signal) {
        if (!galleryEl.hasAttribute('data-gallery-autoscroll')) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let track = getPrimaryTrack(galleryEl);
        if (!track) return;

        let marquee = galleryEl.querySelector('[data-gallery-marquee]');
        if (!marquee) {
          marquee = document.createElement('div');
          marquee.className = 'floating-gallery-marquee';
          marquee.setAttribute('data-gallery-marquee');
          galleryEl.insertBefore(marquee, track);
          marquee.appendChild(track);

          const clone = track.cloneNode(true);
          clone.classList.add('floating-gallery-track--clone');
          clone.setAttribute('aria-hidden', 'true');
          clone.removeAttribute('tabindex');
          clone.querySelectorAll('[data-gallery-item]').forEach((el) => {
            el.setAttribute('tabindex', '-1');
          });
          marquee.appendChild(clone);
          track = getPrimaryTrack(galleryEl);
        }

        if (!track || !marquee) return;

        const setDuration = () => {
          const halfWidth = marquee.scrollWidth / 2;
          const pxPerSec = window.matchMedia('(max-width: 768px)').matches ? 28 : 42;
          marquee.style.setProperty('--marquee-duration', `${Math.max(halfWidth / pxPerSec, 45)}s`);
        };

        setDuration();
        window.addEventListener('resize', setDuration, { passive: true, signal });
        track.querySelectorAll('img').forEach((img) => {
          if (!img.complete) img.addEventListener('load', setDuration, { once: true, signal });
        });
      }

      function playLightboxVideo(v, stage) {
        v.muted = false;
        const tryPlay = v.play();
        if (!tryPlay || typeof tryPlay.catch !== 'function') return;

        tryPlay.catch(() => {
          v.muted = true;
          v.play().catch(() => { /* ignore */ });

          const host = stage.querySelector?.('.gallery-lightbox__video-controls')
            || stage.closest?.('.gallery-lightbox__stage')?.querySelector('.gallery-lightbox__video-controls')
            || stage;
          let unmuteBtn = (stage.closest?.('.gallery-lightbox') || stage)
            .querySelector?.('.gallery-lightbox__unmute');
          if (!unmuteBtn) {
            unmuteBtn = document.createElement('button');
            unmuteBtn.type = 'button';
            unmuteBtn.className = 'gallery-lightbox__unmute';
            unmuteBtn.textContent = 'Turn sound on';
            unmuteBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              v.muted = false;
              v.play().catch(() => { /* ignore */ });
              unmuteBtn.hidden = true;
            });
            if (host.classList?.contains('gallery-lightbox__video-controls')) {
              host.appendChild(unmuteBtn);
            } else {
              // Ensure a controls row exists below the media frame
              let controls = host.querySelector?.('.gallery-lightbox__video-controls');
              if (!controls && host.classList?.contains('gallery-lightbox__stage')) {
                controls = document.createElement('div');
                controls.className = 'gallery-lightbox__video-controls';
                const media = host.querySelector('[data-gallery-stage]');
                if (media) media.insertAdjacentElement('afterend', controls);
                else host.appendChild(controls);
              }
              (controls || host).appendChild(unmuteBtn);
            }
          }
          unmuteBtn.hidden = false;
        });
      }

      function updateNavButtons() {
        const lightbox = getLightbox();
        if (!lightbox) return;
        const prevBtn = lightbox.querySelector('[data-gallery-prev]');
        const nextBtn = lightbox.querySelector('[data-gallery-next]');
        const onlyOne = state.currentItems.length <= 1;
        if (prevBtn) prevBtn.disabled = onlyOne;
        if (nextBtn) nextBtn.disabled = onlyOne;
      }

      function clearVideoEscapeHandlers() {
        if (w.__galleryVideoEscapeAbort) {
          try { w.__galleryVideoEscapeAbort.abort(); } catch (_e) { /* ignore */ }
          w.__galleryVideoEscapeAbort = null;
        }
      }

      function refocusLightbox() {
        const lb = getLightbox();
        if (!lb?.classList.contains('active')) return;
        requestAnimationFrame(() => {
          try { lb.focus({ preventScroll: true }); } catch (_e) { /* ignore */ }
        });
      }

      function dismissLightboxFromEscape(e) {
        if (!getLightbox()?.classList.contains('active')) return false;
        if (e.key !== 'Escape' && e.key !== 'Esc') return false;

        e.preventDefault();
        e.stopImmediatePropagation();

        const stage = getStage();
        const fs = document.fullscreenElement;
        if (fs && stage?.contains(fs)) {
          document.exitFullscreen().finally(() => closeLightbox());
        } else {
          closeLightbox();
        }
        return true;
      }

      function bindVideoEscapeHandlers(v) {
        clearVideoEscapeHandlers();
        w.__galleryVideoEscapeAbort = new AbortController();
        const { signal } = w.__galleryVideoEscapeAbort;

        const onEscape = (e) => { dismissLightboxFromEscape(e); };

        document.addEventListener('keydown', onEscape, { capture: true, signal });
        document.addEventListener('keyup', onEscape, { capture: true, signal });
        v.addEventListener('keydown', onEscape, { capture: true, signal });
        v.addEventListener('keyup', onEscape, { capture: true, signal });

        // Native video controls steal focus; keep Escape on the dialog instead.
        v.addEventListener('pointerup', refocusLightbox, { signal });
        v.addEventListener('focus', refocusLightbox, { signal });
        v.addEventListener('play', refocusLightbox, { signal });

        document.addEventListener('fullscreenchange', () => {
          if (getLightbox()?.classList.contains('active') && !document.fullscreenElement) {
            refocusLightbox();
          }
        }, { signal });
      }

      function renderAsset() {
        const stage = getStage();
        const caption = getCaption();
        const counter = getCounter();
        if (!state.currentItems.length || !stage) return;

        const item = state.currentItems[state.currentIndex];
        const type = item.getAttribute('data-asset-type');
        const src = item.getAttribute('data-asset-src');
        const text = item.getAttribute('data-asset-caption') || '';

        document.querySelectorAll('[data-gallery-inline-video]').forEach((v) => v.pause());

        clearVideoEscapeHandlers();
        clearZoomHandlers();
        while (stage.firstChild) stage.removeChild(stage.firstChild);
        const stageWrap = stage.closest('.gallery-lightbox__stage');
        stageWrap?.querySelectorAll('.gallery-lightbox__video-controls').forEach((el) => el.remove());

        const ccBtn = getLightbox()?.querySelector('[data-gallery-cc]');
        const hideCcBtn = () => {
          if (!ccBtn) return;
          ccBtn.classList.add('is-hidden');
          ccBtn.setAttribute('aria-hidden', 'true');
          ccBtn.setAttribute('aria-pressed', 'false');
          ccBtn.textContent = 'CC';
        };
        const showCcBtn = () => {
          if (!ccBtn) return;
          ccBtn.classList.remove('is-hidden');
          ccBtn.setAttribute('aria-hidden', 'false');
          ccBtn.setAttribute('aria-pressed', 'false');
          ccBtn.textContent = 'CC';
        };

        const setCaptionsOnVideo = (video, on) => {
          const tracks = video?.textTracks;
          if (!tracks?.length) return;
          for (let i = 0; i < tracks.length; i += 1) {
            if (tracks[i].kind === 'captions' || tracks[i].kind === 'subtitles') {
              tracks[i].mode = on ? 'showing' : 'hidden';
            }
          }
        };

        w.toggleGalleryCaptions = () => {
          const video = getStage()?.querySelector('video');
          const btn = getLightbox()?.querySelector('[data-gallery-cc]');
          if (!video || !btn || btn.classList.contains('is-hidden')) return;
          const on = btn.getAttribute('aria-pressed') !== 'true';
          setCaptionsOnVideo(video, on);
          btn.setAttribute('aria-pressed', on ? 'true' : 'false');
          btn.textContent = on ? 'CC On' : 'CC';
        };

        hideCcBtn();

        if (type === 'video') {
          const v = document.createElement('video');
          v.src = src || '';
          v.controls = true;
          v.playsInline = true;
          v.preload = 'auto';
          v.loop = true;
          v.setAttribute('aria-label', text || 'Gallery video');
          const captionsSrc = item.getAttribute('data-asset-captions');

          if (captionsSrc) {
            const track = document.createElement('track');
            track.kind = 'captions';
            track.srclang = 'en';
            track.label = 'English';
            track.src = captionsSrc;
            v.appendChild(track);
            // Off by default so burned-in name titles stay readable
            v.addEventListener('loadedmetadata', () => setCaptionsOnVideo(v, false), { once: true });
            showCcBtn();
          }

          stage.appendChild(v);
          bindVideoEscapeHandlers(v);
          playLightboxVideo(v, stageWrap || stage);
        } else if (type === 'pdf') {
          const iframe = document.createElement('iframe');
          iframe.src = src || '';
          iframe.title = text || 'Document preview';
          iframe.className = 'gallery-lightbox__pdf';
          stage.appendChild(iframe);
        } else if (type === 'article') {
          const wrap = document.createElement('div');
          wrap.className = 'gallery-lightbox__article';

          const img = document.createElement('img');
          img.src = src || '';
          img.alt = text;
          img.decoding = 'async';

          const meta = document.createElement('div');
          meta.className = 'gallery-lightbox__article-meta';

          const outlet = document.createElement('span');
          outlet.className = 'gallery-lightbox__article-outlet';
          outlet.textContent = item.getAttribute('data-asset-outlet') || 'Article';

          const title = document.createElement('h3');
          title.className = 'gallery-lightbox__article-title';
          title.textContent = text;

          const link = document.createElement('a');
          link.className = 'gallery-lightbox__article-link';
          link.href = item.getAttribute('data-asset-url') || '#';
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.textContent = 'Read full story ↗';

          meta.appendChild(outlet);
          meta.appendChild(title);
          meta.appendChild(link);
          wrap.appendChild(img);
          wrap.appendChild(meta);
          stage.appendChild(wrap);
        } else {
          const layout = item.getAttribute('data-asset-layout');
          const isScrollLayout = layout === 'scroll';

          const viewport = document.createElement('div');
          viewport.className = isScrollLayout
            ? 'gallery-lightbox__scroll-viewport'
            : 'gallery-lightbox__zoom-viewport';

          const img = document.createElement('img');
          img.className = isScrollLayout
            ? 'gallery-lightbox__scroll-img'
            : 'gallery-lightbox__zoom-img';
          img.src = src || '';
          img.alt = text;
          img.decoding = 'async';
          img.draggable = false;

          viewport.appendChild(img);
          stage.appendChild(viewport);
          if (!isScrollLayout) setupImageZoom(viewport, img);
        }

        if (caption) caption.textContent = text;
        if (counter) {
          counter.textContent = `${String(state.currentIndex + 1).padStart(2, '0')} / ${String(state.currentItems.length).padStart(2, '0')}`;
        }
        updateNavButtons();
        updateZoomUI();
      }

      function openLightbox(galleryEl, index, trigger) {
        const lightbox = getLightbox();
        if (!lightbox) return;

        state.currentItems = getItemsFor(galleryEl);
        if (!state.currentItems.length) return;

        state.currentIndex = Math.max(0, Math.min(index, state.currentItems.length - 1));
        state.lastTrigger = trigger || document.activeElement;
        renderAsset();
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        requestAnimationFrame(() => {
          try { lightbox.focus({ preventScroll: true }); } catch (_e) { /* ignore */ }
        });
      }

      function closeLightbox() {
        const lightbox = getLightbox();
        if (!lightbox || !lightbox.classList.contains('active')) return;

        clearVideoEscapeHandlers();
        clearZoomHandlers();

        const stage = getStage();
        const fs = document.fullscreenElement;
        if (fs && stage?.contains(fs)) {
          try { document.exitFullscreen(); } catch (_e) { /* ignore */ }
        }

        if (stage) {
          const playing = stage.querySelector('video');
          if (playing) { try { playing.pause(); } catch (_e) { /* ignore */ } }
          while (stage.firstChild) stage.removeChild(stage.firstChild);
        }

        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        document.querySelectorAll('[data-gallery-inline-video]').forEach((v) => {
          v.muted = true;
          const p = v.play();
          if (p && typeof p.catch === 'function') p.catch(() => { /* ignore */ });
        });

        if (state.lastTrigger && typeof state.lastTrigger.focus === 'function') {
          try { state.lastTrigger.focus(); } catch (_e) { /* ignore */ }
        }
        state.lastTrigger = null;
        state.currentItems = [];
        state.currentIndex = 0;
        updateZoomUI();
      }

      function step(delta) {
        if (!state.currentItems.length || state.currentItems.length <= 1) return;
        state.currentIndex = (state.currentIndex + delta + state.currentItems.length) % state.currentItems.length;
        renderAsset();
      }

      function isInteractiveTarget(target) {
        if (!(target instanceof Element)) return false;
        return !!target.closest(
          '[data-gallery-stage] img,' +
          ' [data-gallery-stage] video,' +
          ' .gallery-lightbox__zoom-viewport,' +
          ' .gallery-lightbox__zoom,' +
          ' .gallery-lightbox__article,' +
          ' .gallery-lightbox__article-link,' +
          ' .gallery-lightbox__unmute,' +
          ' .gallery-lightbox__cc,' +
          ' .gallery-lightbox__video-controls,' +
          ' [data-gallery-close],' +
          ' [data-gallery-prev],' +
          ' [data-gallery-next],' +
          ' [data-gallery-zoom-in],' +
          ' [data-gallery-zoom-out],' +
          ' [data-gallery-zoom-reset]'
        );
      }

      function bindLightboxControls() {
        const lightbox = getLightbox();
        if (!lightbox) return;

        if (w.__galleryLightboxAbort) {
          try { w.__galleryLightboxAbort.abort(); } catch (_e) { /* ignore */ }
        }
        w.__galleryLightboxAbort = new AbortController();
        const { signal } = w.__galleryLightboxAbort;

        const handleKeydown = (e) => {
          if (!lightbox.classList.contains('active')) return;

          if (e.key === 'Escape' || e.key === 'Esc') {
            dismissLightboxFromEscape(e);
            return;
          }

          if (e.key === 'ArrowRight') {
            e.preventDefault();
            step(1);
            return;
          }

          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            step(-1);
            return;
          }

          if (e.key === '+' || e.key === '=') {
            e.preventDefault();
            adjustZoom(ZOOM_STEP);
            return;
          }

          if (e.key === '-' || e.key === '_') {
            e.preventDefault();
            adjustZoom(-ZOOM_STEP);
            return;
          }

          if (e.key === '0') {
            e.preventDefault();
            resetZoom();
          }
        };

        lightbox.addEventListener('keydown', handleKeydown, { signal });
        window.addEventListener('keydown', handleKeydown, { capture: true, signal });

        lightbox.addEventListener('click', (e) => {
          if (!lightbox.classList.contains('active')) return;
          if (!(e.target instanceof Element)) return;

          if (e.target.closest('[data-gallery-close], [data-gallery-prev], [data-gallery-next]')) return;
          if (e.target.closest('[data-gallery-zoom-in]')) {
            e.preventDefault();
            adjustZoom(ZOOM_STEP);
            return;
          }
          if (e.target.closest('[data-gallery-zoom-out]')) {
            e.preventDefault();
            adjustZoom(-ZOOM_STEP);
            return;
          }
          if (e.target.closest('[data-gallery-zoom-reset]')) {
            e.preventDefault();
            resetZoom();
            return;
          }
          if (!isInteractiveTarget(e.target)) closeLightbox();
        }, { signal });
      }

      w.openGalleryLightbox = openLightbox;
      w.closeGalleryLightbox = closeLightbox;
      w.stepGalleryLightbox = step;
      w.adjustGalleryZoom = (delta) => adjustZoom(delta);
      w.resetGalleryZoom = () => resetZoom();
      w.bindGalleryLightboxControls = bindLightboxControls;
      bindLightboxControls();

      if (w.__galleryInitAbort) {
        try { w.__galleryInitAbort.abort(); } catch (_e) { /* ignore */ }
      }
      w.__galleryInitAbort = new AbortController();
      const gallerySignal = w.__galleryInitAbort.signal;

      galleries.forEach((galleryEl) => {
        setupMarqueeGallery(galleryEl, gallerySignal);
        indexGalleryItems(galleryEl);
        bindGalleryInteractions(galleryEl, gallerySignal);

        const isMarquee = galleryEl.hasAttribute('data-gallery-autoscroll');
        const track = getPrimaryTrack(galleryEl);

        if (track && !isMarquee) {
          let isDown = false;
          let startX = 0;
          let startScroll = 0;

          track.addEventListener('pointerdown', (e) => {
            if (e.target.closest('[data-gallery-item]')) return;
            if (e.button !== 0 && e.pointerType === 'mouse') return;
            isDown = true;
            startX = e.clientX;
            startScroll = track.scrollLeft;
            track.classList.add('is-dragging');
            try { track.setPointerCapture(e.pointerId); } catch (_e) { /* ignore */ }
          }, { signal: gallerySignal });

          track.addEventListener('pointermove', (e) => {
            if (!isDown) return;
            track.scrollLeft = startScroll - (e.clientX - startX);
          }, { signal: gallerySignal });

          const endDrag = (e) => {
            if (!isDown) return;
            isDown = false;
            track.classList.remove('is-dragging');
            try { track.releasePointerCapture(e.pointerId); } catch (_e) { /* ignore */ }
          };

          track.addEventListener('pointerup', endDrag, { signal: gallerySignal });
          track.addEventListener('pointercancel', endDrag, { signal: gallerySignal });
          track.addEventListener('pointerleave', endDrag, { signal: gallerySignal });

          track.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
              track.scrollLeft += e.deltaY;
              e.preventDefault();
            }
          }, { passive: false, signal: gallerySignal });
        }

        galleryEl.querySelectorAll('[data-gallery-inline-video]').forEach((v) => {
          v.muted = true;
          const p = v.play();
          if (p && typeof p.catch === 'function') p.catch(() => { /* ignore */ });
        });
      });
      }

      boot();
    })();

  w.openModal = openModal;
  w.closeModal = closeModal;

  if ((window as unknown as { lucide?: { createIcons: () => void } }).lucide) {
    (window as unknown as { lucide: { createIcons: () => void } }).lucide.createIcons();
  }
}
