// Lightbox Custom Configuration
document.addEventListener('DOMContentLoaded', function() {
    // Configure lightbox options
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "Ảnh %1 / %2",
        'fadeDuration': 300,
        'imageFadeDuration': 300,
        'maxWidth': 1200,
        'maxHeight': 800,
        'fitImagesInViewport': true,
        'showImageNumberLabel': true,
        'alwaysShowNavOnTouchDevices': false,
        'disableScrolling': true,
        'sanitizeTitle': false,
        'positionFromTop': 50
    });

    // Add loading animation
    document.addEventListener('click', function(e) {
        if (e.target.closest('[data-lightbox]')) {
            // Show loading indicator
            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'lightbox-loading';
            loadingDiv.innerHTML = `
                <div style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 9999;
                    color: white;
                    font-size: 18px;
                    background: rgba(0,0,0,0.8);
                    padding: 20px;
                    border-radius: 8px;
                    font-family: Arial, sans-serif;
                ">
                    <div style="text-align: center;">
                        <div style="
                            border: 3px solid #f3f3f3;
                            border-top: 3px solid #1a237e;
                            border-radius: 50%;
                            width: 30px;
                            height: 30px;
                            animation: spin 1s linear infinite;
                            margin: 0 auto 10px;
                        "></div>
                        Đang tải ảnh...
                    </div>
                </div>
                <style>
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `;
            document.body.appendChild(loadingDiv);
            
            // Remove loading after a short delay
            setTimeout(() => {
                if (loadingDiv.parentNode) {
                    loadingDiv.parentNode.removeChild(loadingDiv);
                }
            }, 1000);
        }
    });

    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (document.querySelector('.lightboxOverlay')) {
            switch(e.keyCode) {
                case 37: // Left arrow
                case 65: // A key
                    if (lightbox.currentImageIndex > 0) {
                        lightbox.changeImage(lightbox.currentImageIndex - 1);
                    }
                    break;
                case 39: // Right arrow  
                case 68: // D key
                    lightbox.changeImage(lightbox.currentImageIndex + 1);
                    break;
                case 27: // ESC
                    lightbox.end();
                    break;
            }
        }
    });

    // Enhanced lightbox experience
    $(document).on('click', '[data-lightbox]', function(e) {
        const title = $(this).data('title');
        const gallery = $(this).data('lightbox');
        
        // Add gallery info to title
        if (gallery) {
            const galleryItems = $('[data-lightbox="' + gallery + '"]');
            const currentIndex = galleryItems.index(this) + 1;
            const totalItems = galleryItems.length;
            
            if (totalItems > 1) {
                const enhancedTitle = title + ' (' + currentIndex + '/' + totalItems + ')';
                $(this).attr('data-title', enhancedTitle);
            }
        }
    });

    // Custom close button text
    if (typeof lightbox !== 'undefined') {
        const originalEnd = lightbox.end;
        lightbox.end = function() {
            // Remove any loading indicators
            $('.lightbox-loading').remove();
            originalEnd.call(this);
        };
    }
});