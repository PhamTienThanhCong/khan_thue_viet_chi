const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Helper function to read JSON data
function loadData(filename) {
  try {
    const filePath = path.join(__dirname, '..', 'data', filename);
    const rawData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error(`Error loading ${filename}:`, error.message);
    return null;
  }
}

// Home page route
router.get('/', (req, res) => {
  try {
    // Load all data
    const siteConfig = loadData('site-config.json');
    const heroSlides = loadData('hero-slides.json');
    const products = loadData('products.json');
    const features = loadData('features.json');
    const about = loadData('about.json');
    const categories = loadData('categories.json');
    const testimonials = loadData('testimonials.json');

    // Check if all data loaded successfully
    if (!siteConfig || !heroSlides || !products || !features || !about || !categories || !testimonials) {
      throw new Error('Failed to load one or more data files');
    }

    // Render the page with all data
    res.render('index', {
      site: siteConfig.site,
      navigation: siteConfig.navigation,
      footerLinks: siteConfig.footerLinks,
      stats: siteConfig.stats,
      heroSlides,
      products: products.productLines,
      features,
      about,
      categories,
      testimonials
    });

  } catch (error) {
    console.error('Error loading homepage:', error.message);
    res.status(500).render('error', {
      title: 'Server Error - Việt Chỉ',
      message: 'Có lỗi xảy ra khi tải dữ liệu trang chủ'
    });
  }
});

module.exports = router;