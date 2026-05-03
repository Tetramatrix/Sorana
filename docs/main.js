/**
 * Scroll functions for Sorana Documentation
 */

/**
 * Find the H2 element before a section
 * @param {HTMLElement} section - The section element
 * @returns {HTMLElement|null} - The H2 element or null
 */
function findH2ForSection(section) {
    let prevElement = section.previousElementSibling;
    while (prevElement && prevElement.tagName !== 'H2' && prevElement.tagName !== 'SECTION') {
        prevElement = prevElement.previousElementSibling;
    }
    if (prevElement && prevElement.tagName === 'H2') {
        return prevElement;
    }
    return null;
}

/**
 * Open a section branch beneath a top-level H2 umbrella.
 * @param {HTMLElement} h2Element - The umbrella heading.
 */
function openSectionBranch(h2Element) {
    if (!h2Element) return;

    h2Element.classList.remove('collapsed');

    let nextElement = h2Element.nextElementSibling;
    while (nextElement && nextElement.tagName !== 'SECTION' && nextElement.tagName !== 'H2') {
        nextElement = nextElement.nextElementSibling;
    }

    if (!nextElement || nextElement.tagName !== 'SECTION') {
        setChevronBadgeState(h2Element.querySelector('.chevron-badge'), false);
        return;
    }

    const sectionsToOpen = [nextElement, ...nextElement.querySelectorAll('section')];
    sectionsToOpen.forEach(function(section) {
        section.classList.remove('collapsed');
    });

    setChevronBadgeState(h2Element.querySelector('.chevron-badge'), false);
}

/**
 * Toggle an umbrella H2 and all nested sections beneath it.
 * @param {HTMLElement} h2Element - The umbrella heading.
 */
function toggleSectionBranch(h2Element) {
    if (!h2Element) return;

    const shouldOpen = h2Element.classList.contains('collapsed');
    if (shouldOpen) {
        openSectionBranch(h2Element);
        return;
    }

    h2Element.classList.add('collapsed');

    let nextElement = h2Element.nextElementSibling;
    while (nextElement && nextElement.tagName !== 'SECTION' && nextElement.tagName !== 'H2') {
        nextElement = nextElement.nextElementSibling;
    }

    if (!nextElement || nextElement.tagName !== 'SECTION') {
        setChevronBadgeState(h2Element.querySelector('.chevron-badge'), true);
        return;
    }

    const sectionsToClose = [nextElement, ...nextElement.querySelectorAll('section')];
    sectionsToClose.forEach(function(section) {
        section.classList.add('collapsed');
    });

    setChevronBadgeState(h2Element.querySelector('.chevron-badge'), true);
}

/**
 * Scroll to a section with smart positioning
 * @param {string} targetId - The ID of the target section (with or without #)
 */
function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
        // If target is an H2, open its umbrella section first
        if (targetElement.tagName === 'H2') {
            openSectionBranch(targetElement);
        }
        // If target is a SECTION, open the section and its descendants
        else if (targetElement.tagName === 'SECTION') {
            const sectionsToOpen = [targetElement, ...targetElement.querySelectorAll('section')];
            sectionsToOpen.forEach(function(section) {
                section.classList.remove('collapsed');
            });
        }

        // Überprüfe, ob das Element bereits sichtbar ist
        const rect = targetElement.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        // Wenn das Element sichtbar ist, aber am oberen Rand, scrollen wir so, dass es in der Mitte ist
        if (isVisible && rect.top < window.innerHeight * 0.1) {
            // Scrollen, sodass das Element in der Mitte des Viewports ist
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else {
            // Ansonsten normales Scrollen
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

/**
 * Alternative Funktion, die immer zentriert, wenn das Element bereits sichtbar ist
 * @param {string} targetId - The ID of the target section (with or without #)
 */
function smartScrollToSection(targetId) {
    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
        // If target is an H2, open its umbrella section first
        if (targetElement.tagName === 'H2') {
            openSectionBranch(targetElement);
        }
        // If target is a SECTION, open the section and its descendants
        else if (targetElement.tagName === 'SECTION') {
            const sectionsToOpen = [targetElement, ...targetElement.querySelectorAll('section')];
            sectionsToOpen.forEach(function(section) {
                section.classList.remove('collapsed');
            });
        }

        const rect = targetElement.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInViewport) {
            // Wenn das Element bereits sichtbar ist, zentriere es
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else {
            // Ansonsten scroll zum Anfang des Elements
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

/**
 * Collapsible Sections for Sorana Documentation
 * Makes all H2 elements in the main element clickable to toggle their sections
 */

/**
 * Configure a chevron badge with collapsed and expanded glyphs.
 * @param {HTMLElement} icon - The badge element.
 * @param {string} collapsedText - Glyph shown when collapsed.
 * @param {string} expandedText - Glyph shown when expanded.
 * @param {boolean} isCollapsed - Whether the badge starts collapsed.
 */
function configureChevronBadge(icon, collapsedText, expandedText, isCollapsed) {
    if (!icon) return null;

    icon.classList.add('chevron-badge');
    icon.dataset.collapsedIcon = collapsedText;
    icon.dataset.expandedIcon = expandedText;
    setChevronBadgeState(icon, isCollapsed);
    return icon;
}

/**
 * Update a chevron badge to match its collapsed state.
 * @param {HTMLElement} icon - The badge element.
 * @param {boolean} isCollapsed - Whether the badge should show its collapsed glyph.
 */
function setChevronBadgeState(icon, isCollapsed) {
    if (!icon) return;

    const isNavArrowDown = icon.classList.contains('nav-arrow-down');
    const isNavArrowUp = icon.classList.contains('nav-arrow-up');
    if (isNavArrowDown) {
        icon.textContent = '▼';
    } else if (isNavArrowUp) {
        icon.textContent = '▲';
    } else {
        const collapsedText = icon.dataset.collapsedIcon || '◀';
        const expandedText = icon.dataset.expandedIcon || '▼';
        icon.textContent = isCollapsed ? collapsedText : expandedText;
    }
    icon.classList.toggle('is-collapsed', isCollapsed);
    icon.classList.toggle('is-expanded', !isCollapsed);

    const isNavArrow = isNavArrowDown || isNavArrowUp;
    if (isNavArrow) {
        icon.classList.toggle('rotated', !isCollapsed);
    } else {
        icon.classList.remove('rotated');
    }
}

/**
 * Toggle the visibility of a section associated with an H2 element
 * @param {HTMLElement} h2Element - The H2 element that was clicked
 */
function toggleSection(h2Element) {
    h2Element.classList.toggle('collapsed');

    // Find the next section element following this h2 (skip any intermediate elements, stop at next H2)
    let nextElement = h2Element.nextElementSibling;
    while (nextElement && nextElement.tagName !== 'SECTION' && nextElement.tagName !== 'H2') {
        nextElement = nextElement.nextElementSibling;
    }

    // Toggle the section if found
    if (nextElement && nextElement.tagName === 'SECTION') {
        nextElement.classList.toggle('collapsed');

        const isCollapsed = nextElement.classList.contains('collapsed');
        const arrows = nextElement.querySelectorAll('.nav-arrow-down, .nav-arrow-up');
        arrows.forEach(function(arrow) {
            setChevronBadgeState(arrow, isCollapsed);
        });
    }

    setChevronBadgeState(h2Element.querySelector('.chevron-badge'), h2Element.classList.contains('collapsed'));
}

/**
 * Toggle the visibility of a div associated with an H3 element
 * @param {HTMLElement} h3Element - The H3 element that was clicked
 */
function toggleH3Section(h3Element) {
    h3Element.classList.toggle('collapsed');

    // Find the next div element following this h3
    let nextElement = h3Element.nextElementSibling;
    while (nextElement && nextElement.tagName !== 'DIV' && nextElement.tagName !== 'SECTION' && nextElement.tagName !== 'H3' && nextElement.tagName !== 'H2') {
        nextElement = nextElement.nextElementSibling;
    }

    // Toggle the div if found
    if (nextElement && (nextElement.tagName === 'DIV' || nextElement.tagName === 'SECTION')) {
        nextElement.classList.toggle('collapsed');
    }

    setChevronBadgeState(h3Element.querySelector('.chevron-badge'), h3Element.classList.contains('collapsed'));
}

/**
 * Toggle section from arrow button click
 * @param {HTMLElement} arrowElement - The arrow span that was clicked
 */
function toggleSectionFromArrow(arrowElement) {
    // Find the parent cta-box
    const ctaBox = arrowElement.closest('.cta-box');
    if (!ctaBox) return;

    // Find the parent section of the cta-box
    const parentSection = ctaBox.closest('section');
    if (!parentSection) return;

    // Toggle the section
    parentSection.classList.toggle('collapsed');

    // Update arrow symbols in this cta-box only (use rotated chevron instead of +)
    const downArrow = ctaBox.querySelector('.nav-arrow-down');
    const upArrow = ctaBox.querySelector('.nav-arrow-up');

    if (parentSection.classList.contains('collapsed')) {
        setChevronBadgeState(downArrow, true);
        setChevronBadgeState(upArrow, true);
    } else {
        setChevronBadgeState(downArrow, false);
        setChevronBadgeState(upArrow, false);
    }

    // Also update the H2 symbol if there is one in this section
    const h2InSection = parentSection.querySelector('h2');
    if (h2InSection) {
        if (parentSection.classList.contains('collapsed')) {
            h2InSection.classList.add('collapsed');
        } else {
            h2InSection.classList.remove('collapsed');
        }
        setChevronBadgeState(h2InSection.querySelector('.chevron-badge'), parentSection.classList.contains('collapsed'));
    }
}

/**
 * Initialize collapsible sections
 */
(function() {
    // Collapse all sections by default
    const allSections = document.querySelectorAll('main section');
    allSections.forEach(function(section) {
        section.classList.add('collapsed');
    });

    // Collapse all H3 divs by default
    const h3Elements = document.querySelectorAll('main h3');
    h3Elements.forEach(function(h3) {
        // Skip if data-no-toggle is set
        if (h3.getAttribute('data-no-toggle') === 'true') return;
        // Skip feature-detail toggle headers
        if (h3.classList.contains('feature-detail-toggle')) return;

        h3.classList.add('collapsible');
        h3.classList.add('collapsed');
        let icon = h3.querySelector('.h3-icon');
        if (!icon) {
            icon = document.createElement('span');
            icon.className = 'h3-icon';
            h3.prepend(icon);
        }
        configureChevronBadge(icon, '▶', '▼', true);
        // Find and collapse the next div
        let nextElement = h3.nextElementSibling;
        while (nextElement && nextElement.tagName !== 'DIV' && nextElement.tagName !== 'SECTION' && nextElement.tagName !== 'H3' && nextElement.tagName !== 'H2') {
            nextElement = nextElement.nextElementSibling;
        }
        if (nextElement && (nextElement.tagName === 'DIV' || nextElement.tagName === 'SECTION')) {
            nextElement.classList.add('collapsed');
        }
    });

    // Set nav arrows to their directional glyphs.
    const allArrows = document.querySelectorAll('.nav-arrow-down, .nav-arrow-up');
    allArrows.forEach(function(arrow) {
        if (arrow.classList.contains('nav-arrow-up')) {
            configureChevronBadge(arrow, '▲', '▲', true);
        } else {
            configureChevronBadge(arrow, '▼', '▼', true);
        }
    });

    const featureToggleIcons = document.querySelectorAll('.feature-detail-toggle .toggle-icon');
    featureToggleIcons.forEach(function(icon) {
        configureChevronBadge(icon, '▶', '▼', true);
    });

    // Make the top TOC open the target umbrella instead of only jumping to it.
    const tocLinks = document.querySelectorAll('.horizontal-toc-nav a');
    tocLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            e.preventDefault();
            smartScrollToSection(href);
        });
    });

    // Initialize H2 collapsible functionality
    const h2Elements = document.querySelectorAll('main h2');
    h2Elements.forEach(function(h2) {
        // Skip if data-no-toggle is set
        if (h2.getAttribute('data-no-toggle') === 'true') return;

        h2.classList.add('collapsible');
        h2.classList.add('collapsed');
        let icon = h2.querySelector('.h2-icon');
        if (!icon) {
            icon = document.createElement('span');
            icon.className = 'h2-icon';
            h2.append(icon);
        }
        configureChevronBadge(icon, '◀', '◀', true);
        h2.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link inside the h2
            if (e.target.tagName !== 'A') {
                toggleSectionBranch(h2);
            }
        });
    });

    // Initialize H3 collapsible functionality (toggle next div)
    h3Elements.forEach(function(h3) {
        // Skip if data-no-toggle is set
        if (h3.getAttribute('data-no-toggle') === 'true') return;
        // Skip feature-detail toggle headers
        if (h3.classList.contains('feature-detail-toggle')) return;

        h3.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link inside the h3
            if (e.target.tagName !== 'A') {
                toggleH3Section(h3);
            }
        });
    });
})();

/**
 * Toggle feature-detail group visibility
 * @param {HTMLElement} toggleElement - The h3 element clicked
 */
function toggleFeatureDetail(toggleElement) {
    const content = toggleElement.nextElementSibling;
    if (!content) return;

    const isHidden = content.style.display === 'none';
    content.style.display = isHidden ? 'block' : 'none';

    const icon = toggleElement.querySelector('.toggle-icon');
    setChevronBadgeState(icon, !isHidden);

    if (isHidden) {
        toggleElement.classList.add('active');
    } else {
        toggleElement.classList.remove('active');
    }
}

/**
 * Lightbox — Click-to-enlarge images
 * Responsive, mobile-friendly, no dependencies
 */
(function() {
    // Create lightbox overlay element
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.id = 'lightbox-overlay';
    overlay.innerHTML = '<img src="" alt="" class="lightbox-active-img"><div class="lightbox-caption"></div>';
    document.body.appendChild(overlay);

    const lightboxImg = overlay.querySelector('.lightbox-active-img');
    const lightboxCaption = overlay.querySelector('.lightbox-caption');
    let currentScrollY = 0;
    let touchStartY = 0;

    /**
     * Open the lightbox with a given image
     * @param {HTMLImageElement} img - The source image element
     */
    function openLightbox(img) {
        currentScrollY = window.scrollY;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        overlay.classList.add('active');
        document.body.classList.add('lightbox-open');

        // Show caption if the image has a parent figure with figcaption
        const figure = img.closest('figure');
        const figcaption = figure ? figure.querySelector('figcaption') : null;
        if (figcaption) {
            lightboxCaption.textContent = figcaption.textContent;
            lightboxCaption.style.display = 'block';
        } else {
            lightboxCaption.style.display = 'none';
        }
    }

    /**
     * Close the lightbox
     */
    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.classList.remove('lightbox-open');
        // Restore scroll position
        window.scrollTo(0, currentScrollY);
    }

    // Attach click handlers to all screenshots
    function initLightboxLinks() {
        // Wrap eligible images in lightbox links
        const selectors = '.sorana-screenshot, .chatbot-screenshot';
        document.querySelectorAll(selectors).forEach(function(img) {
            // Skip if already wrapped
            if (img.parentElement && img.parentElement.classList.contains('lightbox-link')) return;

            const link = document.createElement('a');
            link.className = 'lightbox-link';
            link.href = img.src;
            link.title = 'Click to enlarge';
            link.setAttribute('aria-label', 'Enlarge image');
            img.parentNode.insertBefore(link, img);
            link.appendChild(img);

            link.addEventListener('click', function(e) {
                e.preventDefault();
                openLightbox(img);
            });
        });
    }

    // Close on overlay click (not on image click)
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeLightbox();
        }
    });

    // Close on ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeLightbox();
        }
    });

    // Mobile: swipe down to close
    overlay.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    overlay.addEventListener('touchend', function(e) {
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDistance = touchEndY - touchStartY;
        // Swipe down more than 80px → close
        if (swipeDistance > 80) {
            closeLightbox();
        }
    }, { passive: true });

    // Prevent image drag from opening new tab on mobile
    lightboxImg.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLightboxLinks);
    } else {
        initLightboxLinks();
    }
})();
